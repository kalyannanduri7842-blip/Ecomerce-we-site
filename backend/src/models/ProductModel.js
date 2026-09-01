/**
 * ProductModel - domain model helpers for NexMart
 */
'use strict';
const constants = require('../constants/appConstants');

function ProductModelTransform1(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform2(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform3(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform4(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform5(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform6(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform7(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform8(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform9(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform10(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform11(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform12(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform13(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform14(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function ProductModelTransform15(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'ProductModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'ProductModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

module.exports = { ProductModelTransform1, ProductModelTransform2, ProductModelTransform3, ProductModelTransform4, ProductModelTransform5, ProductModelTransform6, ProductModelTransform7, ProductModelTransform8, ProductModelTransform9, ProductModelTransform10, ProductModelTransform11, ProductModelTransform12, ProductModelTransform13, ProductModelTransform14, ProductModelTransform15 };
