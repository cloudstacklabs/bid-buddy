npm i drizzle-orm postgres
npm i -D drizzle-kit

npm i @t3-oss/env-nextjs

npm i zod

migrations:
npx drizzle-kit push --config=drizzle.config.ts

Drizzle Studio
npx drizzle-kit studio --config=drizzle.config.ts


shadcn:
npx shadcn-ui@latest init

authjs:
npm install next-auth@beta
npx auth secret
