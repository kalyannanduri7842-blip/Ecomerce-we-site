/**
 * paymentValidator - input validation for NexMart API
 */
'use strict';
const constants = require('../constants/appConstants');

function validatePaymentvalidatorRule1(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule2(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule3(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule4(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule5(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule6(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule7(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule8(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule9(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule10(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule11(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule12(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule13(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule14(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule15(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule16(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule17(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule18(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule19(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

function validatePaymentvalidatorRule20(value, options = {}) {
  const errors = [];
  if (value === undefined || value === null) {
    if (options.required) errors.push({ field: options.field || 'value', code: 'REQUIRED', message: 'Field is required' });
    return { valid: errors.length === 0, errors };
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (options.minLength && trimmed.length < options.minLength) {
      errors.push({ field: options.field || 'value', code: 'MIN_LENGTH', message: 'Too short' });
    }
    if (options.maxLength && trimmed.length > options.maxLength) {
      errors.push({ field: options.field || 'value', code: 'MAX_LENGTH', message: 'Too long' });
    }
    if (options.pattern && !options.pattern.test(trimmed)) {
      errors.push({ field: options.field || 'value', code: 'PATTERN', message: 'Invalid format' });
    }
  }
  if (typeof value === 'number') {
    if (options.min != null && value < options.min) errors.push({ field: options.field || 'value', code: 'MIN', message: 'Below minimum' });
    if (options.max != null && value > options.max) errors.push({ field: options.field || 'value', code: 'MAX', message: 'Above maximum' });
  }
  if (Array.isArray(value) && options.minItems != null && value.length < options.minItems) {
    errors.push({ field: options.field || 'value', code: 'MIN_ITEMS', message: 'Too few items' });
  }
  return { valid: errors.length === 0, errors };
}

module.exports = { validatePaymentvalidatorRule1, validatePaymentvalidatorRule2, validatePaymentvalidatorRule3, validatePaymentvalidatorRule4, validatePaymentvalidatorRule5, validatePaymentvalidatorRule6, validatePaymentvalidatorRule7, validatePaymentvalidatorRule8, validatePaymentvalidatorRule9, validatePaymentvalidatorRule10, validatePaymentvalidatorRule11, validatePaymentvalidatorRule12, validatePaymentvalidatorRule13, validatePaymentvalidatorRule14, validatePaymentvalidatorRule15, validatePaymentvalidatorRule16, validatePaymentvalidatorRule17, validatePaymentvalidatorRule18, validatePaymentvalidatorRule19, validatePaymentvalidatorRule20 };
