/**
 * CategoryModel - domain model helpers for NexMart
 */
'use strict';
const constants = require('../constants/appConstants');

function CategoryModelTransform1(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform2(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform3(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform4(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform5(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform6(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform7(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform8(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform9(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform10(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform11(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform12(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform13(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform14(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function CategoryModelTransform15(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'CategoryModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'CategoryModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

module.exports = { CategoryModelTransform1, CategoryModelTransform2, CategoryModelTransform3, CategoryModelTransform4, CategoryModelTransform5, CategoryModelTransform6, CategoryModelTransform7, CategoryModelTransform8, CategoryModelTransform9, CategoryModelTransform10, CategoryModelTransform11, CategoryModelTransform12, CategoryModelTransform13, CategoryModelTransform14, CategoryModelTransform15 };
