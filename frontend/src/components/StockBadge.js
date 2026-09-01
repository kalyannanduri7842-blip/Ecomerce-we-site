/**
 * StockBadge component module for NexMart frontend
 * Provides UI building blocks for the storefront and admin panel.
 */

export function StockBadgeVariant1(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 1,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-1',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 1;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v1'
  };
}

export function StockBadgeVariant2(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 2,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-2',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 2;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v2'
  };
}

export function StockBadgeVariant3(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 3,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-3',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 3;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v3'
  };
}

export function StockBadgeVariant4(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 4,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-4',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 4;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v4'
  };
}

export function StockBadgeVariant5(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 5,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-5',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 5;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v5'
  };
}

export function StockBadgeVariant6(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 6,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-6',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 6;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v6'
  };
}

export function StockBadgeVariant7(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 7,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-7',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 7;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v7'
  };
}

export function StockBadgeVariant8(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 8,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-8',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 8;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v8'
  };
}

export function StockBadgeVariant9(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 9,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-9',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 9;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v9'
  };
}

export function StockBadgeVariant10(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 10,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-10',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 10;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v10'
  };
}

export function StockBadgeVariant11(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 11,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-11',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 11;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v11'
  };
}

export function StockBadgeVariant12(props = {}) {
  const state = {
    name: 'StockBadge',
    variant: 12,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-stockbadge-12',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'StockBadge ' + 12;
  }
  function renderValue() {
    if (props.value == null) return '';
    if (typeof props.value === 'number') return props.value.toLocaleString('en-IN');
    return String(props.value);
  }
  function shouldShow() {
    if (state.loading) return false;
    if (props.hideEmpty && !props.value && !props.children) return false;
    return state.visible;
  }
  function getAriaLabel() {
    return props.ariaLabel || renderLabel();
  }
  return {
    ...state,
    label: renderLabel(),
    value: renderValue(),
    show: shouldShow(),
    ariaLabel: getAriaLabel(),
    testId: 'nm-stockbadge-v12'
  };
}
