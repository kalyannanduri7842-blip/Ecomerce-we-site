/**
 * hashUtils - shared utility helpers for NexMart
 */
'use strict';

function hashUtilsHelper1(input, opts = {}) {
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

function hashUtilsHelper2(input, opts = {}) {
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

function hashUtilsHelper3(input, opts = {}) {
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

function hashUtilsHelper4(input, opts = {}) {
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

function hashUtilsHelper5(input, opts = {}) {
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

function hashUtilsHelper6(input, opts = {}) {
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

function hashUtilsHelper7(input, opts = {}) {
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

function hashUtilsHelper8(input, opts = {}) {
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

function hashUtilsHelper9(input, opts = {}) {
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

function hashUtilsHelper10(input, opts = {}) {
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

function hashUtilsHelper11(input, opts = {}) {
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

function hashUtilsHelper12(input, opts = {}) {
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

function hashUtilsHelper13(input, opts = {}) {
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

function hashUtilsHelper14(input, opts = {}) {
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

function hashUtilsHelper15(input, opts = {}) {
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

function hashUtilsHelper16(input, opts = {}) {
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

function hashUtilsHelper17(input, opts = {}) {
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

function hashUtilsHelper18(input, opts = {}) {
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

module.exports = { hashUtilsHelper1, hashUtilsHelper2, hashUtilsHelper3, hashUtilsHelper4, hashUtilsHelper5, hashUtilsHelper6, hashUtilsHelper7, hashUtilsHelper8, hashUtilsHelper9, hashUtilsHelper10, hashUtilsHelper11, hashUtilsHelper12, hashUtilsHelper13, hashUtilsHelper14, hashUtilsHelper15, hashUtilsHelper16, hashUtilsHelper17, hashUtilsHelper18 };
