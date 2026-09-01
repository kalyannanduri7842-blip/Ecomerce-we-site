# NexMart — High-Scale E-Commerce Platform

Full-stack e-commerce application with customer storefront and admin panel sharing one database.

## Install

```bash
# Requires Node.js 18+ and Python 3
# No npm install required for runtime (pure Node.js API)

# Optional: verify Node
node -v
```

## Build

```bash
npm run build
# No compile step — static frontend + Node server
```

## Run

```bash
# Terminal 1 — API
npm start
# or: node backend/src/server.js

# Terminal 2 — Frontend
npm run start:frontend
# or: cd frontend && python3 -m http.server 3000
```

Windows: double-click `START-BACKEND.bat` then `START-FRONTEND.bat`.

Open: **http://localhost:3000**

API: **http://localhost:4000**

## Test

```bash
npm test
```

## Demo Accounts

| Role | Email | Password |
|------|--------|----------|
| Customer | customer@nexmart.com | customer123 |
| Admin | admin@nexmart.com | admin123 |

## Features

### Customer
- Home, Men, Women, Kids, Groceries
- Product detail by slug
- Cart, Wishlist, Checkout (mock payment)
- Order history

### Admin
- Dashboard (live stats)
- **Add Product** — creates product visible immediately on storefront
- Inventory adjust (increase/decrease stock)
- Orders status updates
- Customers & Sales reports

## Project Structure

```
backend/src/     API server, services, validators, models
frontend/        Storefront + Admin UI
tests/           Unit and integration tests
```

## License

Proprietary. All rights reserved.
