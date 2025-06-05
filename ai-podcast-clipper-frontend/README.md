# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

```
ai-podcast-clipper-frontend
├─ components.json
├─ eslint.config.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ prettier.config.js
├─ prisma
│  └─ schema.prisma
├─ public
│  ├─ Copilot_20250531_163406.png
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ actions
│  │  ├─ auth.ts
│  │  ├─ generation.ts
│  │  ├─ s3.ts
│  │  └─ stripe.ts
│  ├─ app
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  └─ [...nextauth]
│  │  │  │     └─ route.ts
│  │  │  ├─ inngest
│  │  │  │  └─ route.ts
│  │  │  └─ webhooks
│  │  │     └─ stripe
│  │  │        └─ route.ts
│  │  ├─ dashboard
│  │  │  ├─ billing
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ loading.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  ├─ page.tsx
│  │  └─ signup
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ 3d
│  │  │  ├─ FloatingObject.tsx
│  │  │  └─ Waveform.tsx
│  │  ├─ clip-display.tsx
│  │  ├─ dashboard-client.tsx
│  │  ├─ layout
│  │  │  ├─ Footer.tsx
│  │  │  └─ Navbar.tsx
│  │  ├─ login-form.tsx
│  │  ├─ nav-header.tsx
│  │  ├─ providers
│  │  │  ├─ client-provider.tsx
│  │  │  └─ theme-provider.tsx
│  │  ├─ sections
│  │  │  ├─ DashboardSection.tsx
│  │  │  ├─ FeaturesSection.tsx
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ PricingSection.tsx
│  │  │  └─ TestimonialsSection.tsx
│  │  ├─ signup-form.tsx
│  │  └─ ui
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ ContainerScroll.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ GlassmorphicCard.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ SectionHeading.tsx
│  │     ├─ sonner.tsx
│  │     ├─ SparklesEffect.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     └─ WavyText.tsx
│  ├─ env.js
│  ├─ inngest
│  │  ├─ client.ts
│  │  └─ functions.ts
│  ├─ lib
│  │  ├─ auth.ts
│  │  └─ utils.ts
│  ├─ schemas
│  │  └─ auth.ts
│  ├─ server
│  │  ├─ auth
│  │  │  ├─ config.ts
│  │  │  └─ index.ts
│  │  └─ db.ts
│  └─ styles
│     ├─ globals.css
│     └─ index.css
└─ tsconfig.json

```
```
ai-podcast-clipper-frontend
├─ components.json
├─ eslint.config.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ prettier.config.js
├─ prisma
│  └─ schema.prisma
├─ public
│  ├─ Copilot_20250531_163406.png
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ actions
│  │  ├─ auth.ts
│  │  ├─ generation.ts
│  │  ├─ s3.ts
│  │  └─ stripe.ts
│  ├─ app
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  └─ [...nextauth]
│  │  │  │     └─ route.ts
│  │  │  ├─ inngest
│  │  │  │  └─ route.ts
│  │  │  └─ webhooks
│  │  │     └─ stripe
│  │  │        └─ route.ts
│  │  ├─ dashboard
│  │  │  ├─ billing
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ loading.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  ├─ page.tsx
│  │  └─ signup
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ clip-display.tsx
│  │  ├─ dashboard-client.tsx
│  │  ├─ login-form.tsx
│  │  ├─ nav-header.tsx
│  │  ├─ providers
│  │  │  └─ client-provider.tsx
│  │  ├─ signup-form.tsx
│  │  └─ ui
│  │     ├─ AnimatedWaveform.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ DashboardPreview.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ FloatingElements.tsx
│  │     ├─ Footer.tsx
│  │     ├─ Hero.tsx
│  │     ├─ HowItWorks.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ Navbar.tsx
│  │     ├─ Pricing.tsx
│  │     ├─ sonner.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     ├─ TechStack.tsx
│  │     └─ UseCases.tsx
│  ├─ env.js
│  ├─ inngest
│  │  ├─ client.ts
│  │  └─ functions.ts
│  ├─ lib
│  │  ├─ auth.ts
│  │  └─ utils.ts
│  ├─ schemas
│  │  └─ auth.ts
│  ├─ server
│  │  ├─ auth
│  │  │  ├─ config.ts
│  │  │  └─ index.ts
│  │  └─ db.ts
│  └─ styles
│     └─ globals.css
├─ tailwind.config.ts
└─ tsconfig.json

```