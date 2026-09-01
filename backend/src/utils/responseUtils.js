/**
 * responseUtils - shared utility helpers for NexMart
 */
'use strict';

function responseUtilsHelper1(input, opts = {}) {
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

function responseUtilsHelper2(input, opts = {}) {
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

function responseUtilsHelper3(input, opts = {}) {
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

function responseUtilsHelper4(input, opts = {}) {
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

function responseUtilsHelper5(input, opts = {}) {
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

function responseUtilsHelper6(input, opts = {}) {
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

function responseUtilsHelper7(input, opts = {}) {
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

function responseUtilsHelper8(input, opts = {}) {
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

function responseUtilsHelper9(input, opts = {}) {
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

function responseUtilsHelper10(input, opts = {}) {
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

function responseUtilsHelper11(input, opts = {}) {
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

function responseUtilsHelper12(input, opts = {}) {
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

function responseUtilsHelper13(input, opts = {}) {
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

function responseUtilsHelper14(input, opts = {}) {
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

function responseUtilsHelper15(input, opts = {}) {
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

function responseUtilsHelper16(input, opts = {}) {
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

function responseUtilsHelper17(input, opts = {}) {
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

function responseUtilsHelper18(input, opts = {}) {
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

module.exports = { responseUtilsHelper1, responseUtilsHelper2, responseUtilsHelper3, responseUtilsHelper4, responseUtilsHelper5, responseUtilsHelper6, responseUtilsHelper7, responseUtilsHelper8, responseUtilsHelper9, responseUtilsHelper10, responseUtilsHelper11, responseUtilsHelper12, responseUtilsHelper13, responseUtilsHelper14, responseUtilsHelper15, responseUtilsHelper16, responseUtilsHelper17, responseUtilsHelper18 };
