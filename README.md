# Image IA - Next.js 14 + TailwindCSS 3 + Clerk + MongoDB + Cloudinary + Stripe + Vercel

## Getting Started

First, Install the project dependencies using npm:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Set Up Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```bash
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

