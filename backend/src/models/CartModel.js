/**
 * CartModel - domain model helpers for NexMart
 */
'use strict';
const constants = require('../constants/appConstants');

function CartModelTransform1(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 1;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform2(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 2;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform3(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 3;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform4(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 4;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform5(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 5;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform6(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 6;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform7(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 7;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform8(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 8;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform9(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 9;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform10(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 10;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform11(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 11;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform12(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 12;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform13(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 13;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform14(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 14;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CartModelTransform15(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CartModel';
  out._version = 15;
  if (options.stripSensitive) {
    delete out.password;
    delete out.token;
    delete out.secret;
  }
  if (options.withTimestamps) {
    out.processedAt = new Date().toISOString();
  }
  if (out.price != null) {
    out.priceFormatted = constants.CURRENCY_SYMBOL + Number(out.price).toFixed(2);
  }
  if (out.discountPrice != null) {
    out.discountPriceFormatted = constants.CURRENCY_SYMBOL + Number(out.discountPrice).toFixed(2);
    out.discountPercent = out.price ? Math.round((1 - out.discountPrice / out.price) * 100) : 0;
  }
  if (out.stock != null) {
    out.stockStatus = out.stock <= 0 ? 'out_of_stock' : (out.stock <= (out.lowStockThreshold || constants.LOW_STOCK_DEFAULT) ? 'low_stock' : 'in_stock');
  }
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CartModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

module.exports = { CartModelTransform1, CartModelTransform2, CartModelTransform3, CartModelTransform4, CartModelTransform5, CartModelTransform6, CartModelTransform7, CartModelTransform8, CartModelTransform9, CartModelTransform10, CartModelTransform11, CartModelTransform12, CartModelTransform13, CartModelTransform14, CartModelTransform15 };
