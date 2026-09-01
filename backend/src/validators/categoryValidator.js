/**
 * categoryValidator - input validation for NexMart API
 */
'use strict';
const constants = require('../constants/appConstants');

function validateCategoryvalidatorRule1(value, options = {}) {
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

function validateCategoryvalidatorRule2(value, options = {}) {
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

function validateCategoryvalidatorRule3(value, options = {}) {
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

function validateCategoryvalidatorRule4(value, options = {}) {
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

function validateCategoryvalidatorRule5(value, options = {}) {
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

function validateCategoryvalidatorRule6(value, options = {}) {
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

function validateCategoryvalidatorRule7(value, options = {}) {
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

function validateCategoryvalidatorRule8(value, options = {}) {
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

function validateCategoryvalidatorRule9(value, options = {}) {
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

function validateCategoryvalidatorRule10(value, options = {}) {
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

function validateCategoryvalidatorRule11(value, options = {}) {
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

function validateCategoryvalidatorRule12(value, options = {}) {
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

function validateCategoryvalidatorRule13(value, options = {}) {
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

function validateCategoryvalidatorRule14(value, options = {}) {
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

function validateCategoryvalidatorRule15(value, options = {}) {
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

function validateCategoryvalidatorRule16(value, options = {}) {
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

function validateCategoryvalidatorRule17(value, options = {}) {
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

function validateCategoryvalidatorRule18(value, options = {}) {
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

function validateCategoryvalidatorRule19(value, options = {}) {
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

function validateCategoryvalidatorRule20(value, options = {}) {
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

module.exports = { validateCategoryvalidatorRule1, validateCategoryvalidatorRule2, validateCategoryvalidatorRule3, validateCategoryvalidatorRule4, validateCategoryvalidatorRule5, validateCategoryvalidatorRule6, validateCategoryvalidatorRule7, validateCategoryvalidatorRule8, validateCategoryvalidatorRule9, validateCategoryvalidatorRule10, validateCategoryvalidatorRule11, validateCategoryvalidatorRule12, validateCategoryvalidatorRule13, validateCategoryvalidatorRule14, validateCategoryvalidatorRule15, validateCategoryvalidatorRule16, validateCategoryvalidatorRule17, validateCategoryvalidatorRule18, validateCategoryvalidatorRule19, validateCategoryvalidatorRule20 };
