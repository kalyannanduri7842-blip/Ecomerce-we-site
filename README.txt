========================================
   NexMart E-Commerce — How to Run
========================================

REQUIREMENTS
- Node.js  (https://nodejs.org)  → needed for backend
- Python   (https://python.org)  → needed for frontend
  (When installing Python, tick "Add to PATH")

----------------------------------------
HOW TO START (Windows — easiest way)
----------------------------------------

1. Extract this zip folder anywhere.

2. Double-click:  START-BACKEND.bat
   Wait until you see:  NexMart API running at http://localhost:4000
   Do NOT close this window.

3. Double-click:  START-FRONTEND.bat
   Wait until you see:  Serving HTTP on port 3000
   Do NOT close this window.

4. Open your browser and go to:
   http://localhost:3000

----------------------------------------
LOGIN ACCOUNTS
----------------------------------------

CUSTOMER LOGIN
  Email:    customer@nexmart.com
  Password: customer123

ADMIN LOGIN
  Email:    admin@nexmart.com
  Password: admin123

----------------------------------------
WHAT YOU CAN DO
----------------------------------------

CUSTOMER (after login)
  - Browse Home, Men, Women, Kids, Groceries
  - Open product pages
  - Add to Cart / Wishlist
  - Checkout with address + mock payment
  - View My Orders

ADMIN (after login → click Admin button)
  - Dashboard (real stats)
  - Products list
  - Inventory → see stock, low stock, out of stock, expired
  - Adjust stock (Increase / Decrease) with reason
  - Orders → view and update status
  - Customers list
  - Sales report

----------------------------------------
MANUAL CMD COMMANDS (if .bat fails)
----------------------------------------

Window 1:
  cd /d "FULL-PATH-TO\NexMart-Ecommerce\backend"
  node src\server.js

Window 2:
  cd /d "FULL-PATH-TO\NexMart-Ecommerce\frontend"
  py -m http.server 3000

Then open: http://localhost:3000

========================================
