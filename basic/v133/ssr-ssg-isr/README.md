This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SSR - Server Side Rendering
this is default behaviour

## SSG - Static site Generation
Any content which does not have network calls is a static page by default

## ISR or ISG - Incremental Static Regeneration(Generation)
fetch in next.js caches the response
to opt out use :
``` 
export const dynamic = 'force-dynamic';
```
However there are exceptions fetch requests are not cached when : 

- Used inside a Server Action
- Used inside a Route handler that uses the post method