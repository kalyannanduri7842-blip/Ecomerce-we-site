/**
 * PaymentModel - domain model helpers for NexMart
 */
'use strict';
const constants = require('../constants/appConstants');

function PaymentModelTransform1(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform2(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform3(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform4(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform5(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform6(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform7(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform8(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform9(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform10(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform11(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform12(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform13(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform14(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

function PaymentModelTransform15(entity, options = {}) {
  if (!entity || typeof entity !== 'object') return null;
  const out = { ...entity };
  out._model = 'PaymentModel';
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
  if (out.status && !constants.PRODUCT_STATUSES.includes(out.status) && 'PaymentModel' === 'ProductModel') {
    out.statusNormalized = 'active';
  }
  return out;
}

module.exports = { PaymentModelTransform1, PaymentModelTransform2, PaymentModelTransform3, PaymentModelTransform4, PaymentModelTransform5, PaymentModelTransform6, PaymentModelTransform7, PaymentModelTransform8, PaymentModelTransform9, PaymentModelTransform10, PaymentModelTransform11, PaymentModelTransform12, PaymentModelTransform13, PaymentModelTransform14, PaymentModelTransform15 };
