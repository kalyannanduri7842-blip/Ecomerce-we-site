/**
 * LoadingSpinner component module for NexMart frontend
 * Provides UI building blocks for the storefront and admin panel.
 */

export function LoadingSpinnerVariant1(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 1,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-1',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 1;
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
    testId: 'nm-loadingspinner-v1'
  };
}

export function LoadingSpinnerVariant2(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 2,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-2',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 2;
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
    testId: 'nm-loadingspinner-v2'
  };
}

export function LoadingSpinnerVariant3(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 3,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-3',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 3;
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
    testId: 'nm-loadingspinner-v3'
  };
}

export function LoadingSpinnerVariant4(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 4,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-4',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 4;
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
    testId: 'nm-loadingspinner-v4'
  };
}

export function LoadingSpinnerVariant5(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 5,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-5',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 5;
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
    testId: 'nm-loadingspinner-v5'
  };
}

export function LoadingSpinnerVariant6(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 6,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-6',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 6;
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
    testId: 'nm-loadingspinner-v6'
  };
}

export function LoadingSpinnerVariant7(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 7,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-7',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 7;
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
    testId: 'nm-loadingspinner-v7'
  };
}

export function LoadingSpinnerVariant8(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 8,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-8',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 8;
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
    testId: 'nm-loadingspinner-v8'
  };
}

export function LoadingSpinnerVariant9(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 9,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-9',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 9;
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
    testId: 'nm-loadingspinner-v9'
  };
}

export function LoadingSpinnerVariant10(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 10,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-10',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 10;
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
    testId: 'nm-loadingspinner-v10'
  };
}

export function LoadingSpinnerVariant11(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 11,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-11',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 11;
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
    testId: 'nm-loadingspinner-v11'
  };
}

export function LoadingSpinnerVariant12(props = {}) {
  const state = {
    name: 'LoadingSpinner',
    variant: 12,
    props: props,
    visible: props.visible !== false,
    className: props.className || 'nm-loadingspinner-12',
    disabled: !!props.disabled,
    loading: !!props.loading
  };
  function renderLabel() {
    if (props.label) return String(props.label);
    if (props.title) return String(props.title);
    return 'LoadingSpinner ' + 12;
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
    testId: 'nm-loadingspinner-v12'
  };
}
