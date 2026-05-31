# The Artisan Kiln — Frontend Test Task

A responsive one-page ceramic tile order form built with Next.js, TypeScript, Tailwind CSS and Redux Toolkit.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- Vitest

## Features

- Visible checkout validation for required fields, email, phone, card number, expiration date, and CVV.

- Mobile order form layout
- Desktop layout with 6x6 interactive design grid
- Cart quantity update and item removal
- Dynamic Subtotal, Shipping and Grand Total calculation
- Shipping is free when subtotal is greater than $500; otherwise shipping is $25
- Payment method switching
- Credit card form validation
- Required checkout field validation
- Redux global state for cart, payment and design grid
- Unit tests for calculation logic

## Project structure

This version is prepared for the default `create-next-app` structure without a `src` folder:

```txt
app/
components/
features/
lib/
__tests__/
public/
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Run tests

```bash
npm run test
```
