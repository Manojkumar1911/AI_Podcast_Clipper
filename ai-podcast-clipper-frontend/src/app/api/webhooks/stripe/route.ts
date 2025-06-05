// stripe listen --forward-to localhost:3000/api/webhooks/stripe

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { env } from "~/env";
import { db } from "~/server/db";

// Only initialize Stripe if the secret key is available
const stripe = env.STRIPE_SECRET_KEY
  ? new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-04-30.basil",
    })
  : null;

const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  // If Stripe is not configured, return a 501 Not Implemented
  if (!stripe || !webhookSecret) {
    return new NextResponse("Stripe is not configured", { status: 501 });
  }

  const body = await req.text();
  const signature = headers().get("stripe-signature");

  if (!signature) {
    return new NextResponse("No signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    return new NextResponse(`Webhook Error: ${err instanceof Error ? err.message : "Unknown error"}`, {
      status: 400,
    });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (!session?.metadata?.userId) {
    return new NextResponse("User id is required", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );

    const priceId = subscription.items.data[0]?.price.id;
    let credits = 0;

    if (priceId === env.STRIPE_SMALL_CREDIT_PACK) {
      credits = 5;
    } else if (priceId === env.STRIPE_MEDIUM_CREDIT_PACK) {
      credits = 10;
    } else if (priceId === env.STRIPE_LARGE_CREDIT_PACK) {
      credits = 20;
    }

    await db.user.update({
      where: {
        id: session.metadata.userId,
      },
      data: {
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0]?.price.id,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
        credits: {
          increment: credits,
        },
      },
    });
  }

  return new NextResponse(null, { status: 200 });
}