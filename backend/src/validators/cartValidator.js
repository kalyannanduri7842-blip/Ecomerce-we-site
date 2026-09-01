/**
 * cartValidator - input validation for NexMart API
 */
'use strict';
const constants = require('../constants/appConstants');

function validateCartvalidatorRule1(value, options = {}) {
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

function validateCartvalidatorRule2(value, options = {}) {
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

function validateCartvalidatorRule3(value, options = {}) {
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

function validateCartvalidatorRule4(value, options = {}) {
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

function validateCartvalidatorRule5(value, options = {}) {
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

function validateCartvalidatorRule6(value, options = {}) {
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

function validateCartvalidatorRule7(value, options = {}) {
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

function validateCartvalidatorRule8(value, options = {}) {
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

function validateCartvalidatorRule9(value, options = {}) {
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

function validateCartvalidatorRule10(value, options = {}) {
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

function validateCartvalidatorRule11(value, options = {}) {
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

function validateCartvalidatorRule12(value, options = {}) {
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

function validateCartvalidatorRule13(value, options = {}) {
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

function validateCartvalidatorRule14(value, options = {}) {
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

function validateCartvalidatorRule15(value, options = {}) {
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

function validateCartvalidatorRule16(value, options = {}) {
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

function validateCartvalidatorRule17(value, options = {}) {
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

function validateCartvalidatorRule18(value, options = {}) {
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

function validateCartvalidatorRule19(value, options = {}) {
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

function validateCartvalidatorRule20(value, options = {}) {
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

module.exports = { validateCartvalidatorRule1, validateCartvalidatorRule2, validateCartvalidatorRule3, validateCartvalidatorRule4, validateCartvalidatorRule5, validateCartvalidatorRule6, validateCartvalidatorRule7, validateCartvalidatorRule8, validateCartvalidatorRule9, validateCartvalidatorRule10, validateCartvalidatorRule11, validateCartvalidatorRule12, validateCartvalidatorRule13, validateCartvalidatorRule14, validateCartvalidatorRule15, validateCartvalidatorRule16, validateCartvalidatorRule17, validateCartvalidatorRule18, validateCartvalidatorRule19, validateCartvalidatorRule20 };
