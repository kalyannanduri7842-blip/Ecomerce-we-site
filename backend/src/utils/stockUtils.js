/**
 * stockUtils - shared utility helpers for NexMart
 */
'use strict';

function stockUtilsHelper1(input, opts = {}) {
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

function stockUtilsHelper2(input, opts = {}) {
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

function stockUtilsHelper3(input, opts = {}) {
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

function stockUtilsHelper4(input, opts = {}) {
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

function stockUtilsHelper5(input, opts = {}) {
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

function stockUtilsHelper6(input, opts = {}) {
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

function stockUtilsHelper7(input, opts = {}) {
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

function stockUtilsHelper8(input, opts = {}) {
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

function stockUtilsHelper9(input, opts = {}) {
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

function stockUtilsHelper10(input, opts = {}) {
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

function stockUtilsHelper11(input, opts = {}) {
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

function stockUtilsHelper12(input, opts = {}) {
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

function stockUtilsHelper13(input, opts = {}) {
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

function stockUtilsHelper14(input, opts = {}) {
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

function stockUtilsHelper15(input, opts = {}) {
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

function stockUtilsHelper16(input, opts = {}) {
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

function stockUtilsHelper17(input, opts = {}) {
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

function stockUtilsHelper18(input, opts = {}) {
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

module.exports = { stockUtilsHelper1, stockUtilsHelper2, stockUtilsHelper3, stockUtilsHelper4, stockUtilsHelper5, stockUtilsHelper6, stockUtilsHelper7, stockUtilsHelper8, stockUtilsHelper9, stockUtilsHelper10, stockUtilsHelper11, stockUtilsHelper12, stockUtilsHelper13, stockUtilsHelper14, stockUtilsHelper15, stockUtilsHelper16, stockUtilsHelper17, stockUtilsHelper18 };
