"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireWildcard(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _Creatable = _interopRequireDefault(require("react-select/lib/Creatable"));
var _utils = require("../utils");
var _excluded = ["name", "isMulti", "defaultValue", "fieldClass", "noOptionsMessage", "isDisabled", "isClearable", "isCreatable", "options"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var prepareOptions = function prepareOptions(options) {
  return _lodash["default"].reduce(options, function (result, value) {
    if (!_lodash["default"].isObject(value) && !_lodash["default"].isEmpty(value)) {
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
    var selectedOption = _lodash["default"].filter(options, _lodash["default"].matches({
      value: value
    }));
    return !_lodash["default"].isEmpty(selectedOption) ? selectedOption : isCreatable ? [{
      value: value,
      label: value
    }] : null;
  };
  if (values) {
    if (!_lodash["default"].isObject(values)) {
      return getSelectedOption(values);
    }
    return _lodash["default"].reduce(values, function (result, value) {
      var selectedOption = getSelectedOption(value);
      if (_lodash["default"].isEmpty(selectedOption)) {
        return result;
      }
      return _lodash["default"].union(result, selectedOption);
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
  var _useState = (0, _react.useState)(''),
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
      var selectedValues = !isMulti ? selectedOptions.value : _lodash["default"].reduce(selectedOptions, function (result, option) {
        return [].concat(result, [option.value]);
      }, []);
      return (0, _utils.changeHandler)((0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config, selectedValues);
    },
    onBlur: function onBlur(event) {
      return handleBlur(_extends({}, event, {
        target: _extends({}, event.target, {
          name: name
        })
      }));
    },
    onInputChange: function onInputChange(inputValue) {
      (0, _utils.changeHandler)(setInputValue, formik, config, inputValue, 'onInputChange');
    },
    onKeyDown: function onKeyDown(event) {
      if (!isMulti || !inputValue || !selectedValue || selectedValue.indexOf(inputValue) > -1) {
        return;
      }
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          (0, _utils.changeHandler)((0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config, [].concat(selectedValue, [inputValue]), 'onChange');
          setInputValue('');
          event.preventDefault();
      }
    }
  }, attributes);
  selectProps = _lodash["default"].assign(selectProps, {
    options: options
  });
  if (selectedOption) {
    selectProps.value = selectedOption;
  }
  var SelectComponent = isCreatable ? _Creatable["default"] : _reactSelect["default"];
  return /*#__PURE__*/_react["default"].createElement(SelectComponent, selectProps);
};
var _default = exports["default"] = _react["default"].memo(ReactSelect);
module.exports = exports.default;