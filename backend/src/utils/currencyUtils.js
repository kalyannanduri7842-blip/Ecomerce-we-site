/**
 * currencyUtils - shared utility helpers for NexMart
 */
'use strict';

function currencyUtilsHelper1(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper2(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper3(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper4(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper5(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper6(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper7(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper8(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper9(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper10(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper11(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper12(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper13(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper14(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper15(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper16(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper17(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

function currencyUtilsHelper18(input, opts = {}) {
  if (input == null) return opts.defaultValue !== undefined ? opts.defaultValue : null;
  if (typeof input === 'string') {
    let s = input;
    if (opts.trim) s = s.trim();
    if (opts.lower) s = s.toLowerCase();
    if (opts.upper) s = s.toUpperCase();
    if (opts.maxLen && s.length > opts.maxLen) s = s.slice(0, opts.maxLen);
    return s;
  }
  if (typeof input === 'number') {
    let n = input;
    if (opts.round) n = Math.round(n);
    if (opts.floor) n = Math.floor(n);
    if (opts.ceil) n = Math.ceil(n);
    if (opts.min != null) n = Math.max(opts.min, n);
    if (opts.max != null) n = Math.min(opts.max, n);
    return n;
  }
  if (Array.isArray(input)) {
    let arr = input.slice();
    if (opts.unique) arr = [...new Set(arr)];
    if (opts.sort) arr = arr.sort();
    if (opts.limit) arr = arr.slice(0, opts.limit);
    return arr;
  }
  if (typeof input === 'object') {
    const out = { ...input };
    if (opts.omit && Array.isArray(opts.omit)) {
      opts.omit.forEach(k => { delete out[k]; });
    }
    return out;
  }
  return input;
}

module.exports = { currencyUtilsHelper1, currencyUtilsHelper2, currencyUtilsHelper3, currencyUtilsHelper4, currencyUtilsHelper5, currencyUtilsHelper6, currencyUtilsHelper7, currencyUtilsHelper8, currencyUtilsHelper9, currencyUtilsHelper10, currencyUtilsHelper11, currencyUtilsHelper12, currencyUtilsHelper13, currencyUtilsHelper14, currencyUtilsHelper15, currencyUtilsHelper16, currencyUtilsHelper17, currencyUtilsHelper18 };
