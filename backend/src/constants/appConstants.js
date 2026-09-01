/**
 * NexMart Application Constants
 * Central configuration and domain constants for the e-commerce platform.
 */
'use strict';

const APP_NAME = 'NexMart';
const APP_VERSION = '1.0.0';
const API_VERSION = 'v1';
const DEFAULT_CURRENCY = 'INR';
const CURRENCY_SYMBOL = '₹';
const DEFAULT_COUNTRY = 'India';
const DEFAULT_LOCALE = 'en-IN';

const ORDER_STATUSES = Object.freeze([
  'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned', 'refunded'
]);

const PAYMENT_STATUSES = Object.freeze([
  'pending', 'paid', 'failed', 'refunded', 'partially_refunded'
]);

const PRODUCT_STATUSES = Object.freeze([
  'draft', 'active', 'inactive', 'archived', 'out_of_stock'
]);

const USER_ROLES = Object.freeze(['customer', 'admin', 'support', 'warehouse']);

const CATEGORY_SLUGS = Object.freeze(['men', 'women', 'kids', 'groceries', 'electronics', 'home']);

const SHIPPING_FREE_THRESHOLD = 999;
const SHIPPING_FLAT_RATE = 49;
const TAX_RATE = 0.18;
const LOW_STOCK_DEFAULT = 10;
const MAX_CART_QTY = 20;
const MAX_WISHLIST_ITEMS = 100;
const JWT_EXPIRY_DAYS = 7;
const BCRYPT_ROUNDS = 10;
const PAGE_SIZE_DEFAULT = 24;
const PAGE_SIZE_MAX = 100;

const IMAGE_PLACEHOLDER = 'https://picsum.photos/seed/nexmart/600/600';
const UNSUPPORTED_IMAGE_FALLBACK = 'https://via.placeholder.com/600x600?text=NexMart';

const ERROR_CODES = Object.freeze({
  AUTH_REQUIRED: 'AUTH_REQUIRED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION: 'VALIDATION_ERROR',
  STOCK: 'INSUFFICIENT_STOCK',
  EXPIRED: 'PRODUCT_EXPIRED',
  DUPLICATE: 'DUPLICATE_ENTRY',
  RATE_LIMIT: 'RATE_LIMITED',
  INTERNAL: 'INTERNAL_ERROR'
});

const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE: 422,
  TOO_MANY: 429,
  SERVER_ERROR: 500
});

module.exports = {
  APP_NAME, APP_VERSION, API_VERSION, DEFAULT_CURRENCY, CURRENCY_SYMBOL,
  DEFAULT_COUNTRY, DEFAULT_LOCALE, ORDER_STATUSES, PAYMENT_STATUSES,
  PRODUCT_STATUSES, USER_ROLES, CATEGORY_SLUGS, SHIPPING_FREE_THRESHOLD,
  SHIPPING_FLAT_RATE, TAX_RATE, LOW_STOCK_DEFAULT, MAX_CART_QTY,
  MAX_WISHLIST_ITEMS, JWT_EXPIRY_DAYS, BCRYPT_ROUNDS, PAGE_SIZE_DEFAULT,
  PAGE_SIZE_MAX, IMAGE_PLACEHOLDER, UNSUPPORTED_IMAGE_FALLBACK,
  ERROR_CODES, HTTP_STATUS
};
