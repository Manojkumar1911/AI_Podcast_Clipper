// Stripe functionality is temporarily disabled
export type PriceId = "small" | "medium" | "large";

export async function createCheckoutSession(_priceId: string) {
  throw new Error("Stripe is not configured")
}

/* Original Stripe code (commented out)
"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { env } from "~/env";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

// Only initialize Stripe if the secret key is available
const stripe = env.STRIPE_SECRET_KEY
  ? new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-04-30.basil",
    })
  : null;

export type PriceId = "small" | "medium" | "large";

const PRICE_IDS: Record<PriceId, string | undefined> = {
  small: env.STRIPE_SMALL_CREDIT_PACK,
  medium: env.STRIPE_MEDIUM_CREDIT_PACK,
  large: env.STRIPE_LARGE_CREDIT_PACK,
};

export async function createCheckoutSession(priceId: PriceId) {
  // If Stripe is not configured, throw a user-friendly error
  if (!stripe) {
    throw new Error("Stripe is not configured. Please contact support.");
  }

  const priceIdValue = PRICE_IDS[priceId];
  if (!priceIdValue) {
    throw new Error(`Price ID for ${priceId} is not configured. Please contact support.`);
  }

  const serverSession = await auth();

  const user = await db.user.findUniqueOrThrow({
    where: {
      id: serverSession?.user.id,
    },
    select: { stripeCustomerId: true },
  });

  if (!user.stripeCustomerId) {
    throw new Error("User has no stripeCustomerId");
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: priceIdValue, quantity: 1 }],
    customer: user.stripeCustomerId,
    mode: "payment",
    success_url: `${env.BASE_URL}/dashboard?success=true`,
  });

  if (!session.url) {
    throw new Error("Failed to create session URL");
  }

  redirect(session.url);
}
*/