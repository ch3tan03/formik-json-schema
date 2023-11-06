var _excluded = ["name", "isMulti", "defaultValue", "fieldClass", "noOptionsMessage", "isDisabled", "isClearable", "isCreatable", "options"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import _ from 'lodash';
import React, { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import { changeHandler, setFieldValueWrapper } from '../utils';
var prepareOptions = function prepareOptions(options) {
  return _.reduce(options, function (result, value) {
    if (!_.isObject(value) && !_.isEmpty(value)) {
      result.push({
        value: value,
        label: value
      });
    } else {
      result.push(value);
    }
    return result;
  }, []);
};
var getSelectedOptions = function getSelectedOptions(options, values, isCreatable) {
  var getSelectedOption = function getSelectedOption(value) {
    var selectedOption = _.filter(options, _.matches({
      value: value
    }));
    return !_.isEmpty(selectedOption) ? selectedOption : isCreatable ? [{
      value: value,
      label: value
    }] : null;
  };
  if (values) {
    if (!_.isObject(values)) {
      return getSelectedOption(values);
    }
    return _.reduce(values, function (result, value) {
      var selectedOption = getSelectedOption(value);
      if (_.isEmpty(selectedOption)) {
        return result;
      }
      return _.union(result, selectedOption);
    }, []);
  }
  return null;
};
var ReactSelect = function ReactSelect(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    value = _ref.value,
    error = _ref.error;
  var name = config.name,
    isMulti = config.isMulti,
    defaultValue = config.defaultValue,
    _config$fieldClass = config.fieldClass,
    fieldClass = _config$fieldClass === void 0 ? '' : _config$fieldClass,
    noOptionsMessage = config.noOptionsMessage,
    _config$isDisabled = config.isDisabled,
    isDisabled = _config$isDisabled === void 0 ? false : _config$isDisabled,
    _config$isClearable = config.isClearable,
    isClearable = _config$isClearable === void 0 ? false : _config$isClearable,
    _config$isCreatable = config.isCreatable,
    isCreatable = _config$isCreatable === void 0 ? false : _config$isCreatable,
    initialOptions = config.options,
    attributes = _objectWithoutPropertiesLoose(config, _excluded);
  var setFieldValue = formik.setFieldValue,
    handleBlur = formik.handleBlur;
  var options = prepareOptions(initialOptions);
  var selectedValue = value || defaultValue;
  var selectedOption = getSelectedOptions(options, selectedValue, isCreatable);
  var _useState = useState(''),
    inputValue = _useState[0],
    setInputValue = _useState[1];
  var selectProps = _extends({
    name: name,
    isMulti: isMulti,
    noOptionsMessage: noOptionsMessage,
    isClearable: isClearable,
    isDisabled: isDisabled,
    id: name,
    inputValue: inputValue,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    onChange: function onChange(selectedOptions) {
      var selectedValues = !isMulti ? selectedOptions.value : _.reduce(selectedOptions, function (result, option) {
        return [].concat(result, [option.value]);
      }, []);
      return changeHandler(setFieldValueWrapper(setFieldValue, name), formik, config, selectedValues);
    },
    onBlur: function onBlur(event) {
      return handleBlur(_extends({}, event, {
        target: _extends({}, event.target, {
          name: name
        })
      }));
    },
    onInputChange: function onInputChange(inputValue) {
      changeHandler(setInputValue, formik, config, inputValue, 'onInputChange');
    },
    onKeyDown: function onKeyDown(event) {
      if (!isMulti || !inputValue || !selectedValue || selectedValue.indexOf(inputValue) > -1) {
        return;
      }
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          changeHandler(setFieldValueWrapper(setFieldValue, name), formik, config, [].concat(selectedValue, [inputValue]), 'onChange');
          setInputValue('');
          event.preventDefault();
      }
    }
  }, attributes);
  selectProps = _.assign(selectProps, {
    options: options
  });
  if (selectedOption) {
    selectProps.value = selectedOption;
  }
  var SelectComponent = isCreatable ? CreatableSelect : Select;
  return /*#__PURE__*/React.createElement(SelectComponent, selectProps);
};
export default React.memo(ReactSelect);