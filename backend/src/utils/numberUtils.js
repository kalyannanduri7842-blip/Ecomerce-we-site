/**
 * numberUtils - shared utility helpers for NexMart
 */
'use strict';

function numberUtilsHelper1(input, opts = {}) {
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

function numberUtilsHelper2(input, opts = {}) {
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

function numberUtilsHelper3(input, opts = {}) {
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

function numberUtilsHelper4(input, opts = {}) {
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

function numberUtilsHelper5(input, opts = {}) {
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

function numberUtilsHelper6(input, opts = {}) {
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

function numberUtilsHelper7(input, opts = {}) {
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

function numberUtilsHelper8(input, opts = {}) {
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

function numberUtilsHelper9(input, opts = {}) {
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

function numberUtilsHelper10(input, opts = {}) {
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

function numberUtilsHelper11(input, opts = {}) {
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

function numberUtilsHelper12(input, opts = {}) {
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

function numberUtilsHelper13(input, opts = {}) {
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

function numberUtilsHelper14(input, opts = {}) {
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

function numberUtilsHelper15(input, opts = {}) {
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

function numberUtilsHelper16(input, opts = {}) {
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

function numberUtilsHelper17(input, opts = {}) {
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

function numberUtilsHelper18(input, opts = {}) {
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

module.exports = { numberUtilsHelper1, numberUtilsHelper2, numberUtilsHelper3, numberUtilsHelper4, numberUtilsHelper5, numberUtilsHelper6, numberUtilsHelper7, numberUtilsHelper8, numberUtilsHelper9, numberUtilsHelper10, numberUtilsHelper11, numberUtilsHelper12, numberUtilsHelper13, numberUtilsHelper14, numberUtilsHelper15, numberUtilsHelper16, numberUtilsHelper17, numberUtilsHelper18 };
