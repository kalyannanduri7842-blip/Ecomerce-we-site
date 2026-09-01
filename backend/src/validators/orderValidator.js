/**
 * orderValidator - input validation for NexMart API
 */
'use strict';
const constants = require('../constants/appConstants');

function validateOrdervalidatorRule1(value, options = {}) {
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

function validateOrdervalidatorRule2(value, options = {}) {
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

function validateOrdervalidatorRule3(value, options = {}) {
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

function validateOrdervalidatorRule4(value, options = {}) {
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

function validateOrdervalidatorRule5(value, options = {}) {
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

function validateOrdervalidatorRule6(value, options = {}) {
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

function validateOrdervalidatorRule7(value, options = {}) {
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

function validateOrdervalidatorRule8(value, options = {}) {
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

function validateOrdervalidatorRule9(value, options = {}) {
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

function validateOrdervalidatorRule10(value, options = {}) {
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

function validateOrdervalidatorRule11(value, options = {}) {
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

function validateOrdervalidatorRule12(value, options = {}) {
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

function validateOrdervalidatorRule13(value, options = {}) {
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

function validateOrdervalidatorRule14(value, options = {}) {
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

function validateOrdervalidatorRule15(value, options = {}) {
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

function validateOrdervalidatorRule16(value, options = {}) {
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

function validateOrdervalidatorRule17(value, options = {}) {
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

function validateOrdervalidatorRule18(value, options = {}) {
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

function validateOrdervalidatorRule19(value, options = {}) {
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

function validateOrdervalidatorRule20(value, options = {}) {
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

module.exports = { validateOrdervalidatorRule1, validateOrdervalidatorRule2, validateOrdervalidatorRule3, validateOrdervalidatorRule4, validateOrdervalidatorRule5, validateOrdervalidatorRule6, validateOrdervalidatorRule7, validateOrdervalidatorRule8, validateOrdervalidatorRule9, validateOrdervalidatorRule10, validateOrdervalidatorRule11, validateOrdervalidatorRule12, validateOrdervalidatorRule13, validateOrdervalidatorRule14, validateOrdervalidatorRule15, validateOrdervalidatorRule16, validateOrdervalidatorRule17, validateOrdervalidatorRule18, validateOrdervalidatorRule19, validateOrdervalidatorRule20 };
