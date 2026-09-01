/**
 * productValidator - input validation for NexMart API
 */
'use strict';
const constants = require('../constants/appConstants');

function validateProductvalidatorRule1(value, options = {}) {
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

function validateProductvalidatorRule2(value, options = {}) {
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

function validateProductvalidatorRule3(value, options = {}) {
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

function validateProductvalidatorRule4(value, options = {}) {
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

function validateProductvalidatorRule5(value, options = {}) {
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

function validateProductvalidatorRule6(value, options = {}) {
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

function validateProductvalidatorRule7(value, options = {}) {
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

function validateProductvalidatorRule8(value, options = {}) {
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

function validateProductvalidatorRule9(value, options = {}) {
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

function validateProductvalidatorRule10(value, options = {}) {
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

function validateProductvalidatorRule11(value, options = {}) {
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

function validateProductvalidatorRule12(value, options = {}) {
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

function validateProductvalidatorRule13(value, options = {}) {
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

function validateProductvalidatorRule14(value, options = {}) {
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

function validateProductvalidatorRule15(value, options = {}) {
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

function validateProductvalidatorRule16(value, options = {}) {
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

function validateProductvalidatorRule17(value, options = {}) {
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

function validateProductvalidatorRule18(value, options = {}) {
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

function validateProductvalidatorRule19(value, options = {}) {
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

function validateProductvalidatorRule20(value, options = {}) {
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

module.exports = { validateProductvalidatorRule1, validateProductvalidatorRule2, validateProductvalidatorRule3, validateProductvalidatorRule4, validateProductvalidatorRule5, validateProductvalidatorRule6, validateProductvalidatorRule7, validateProductvalidatorRule8, validateProductvalidatorRule9, validateProductvalidatorRule10, validateProductvalidatorRule11, validateProductvalidatorRule12, validateProductvalidatorRule13, validateProductvalidatorRule14, validateProductvalidatorRule15, validateProductvalidatorRule16, validateProductvalidatorRule17, validateProductvalidatorRule18, validateProductvalidatorRule19, validateProductvalidatorRule20 };
