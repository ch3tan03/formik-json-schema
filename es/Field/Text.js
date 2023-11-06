var _this = this;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { changeHandler } from '../utils';
var Text = function Text(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    error = _ref.error;
  var name = config.name,
    type = config.type,
    attributes = config.attributes,
    fieldType = config.fieldType,
    defaultValue = config.defaultValue,
    icon = config.icon,
    _config$fieldClass = config.fieldClass,
    fieldClass = _config$fieldClass === void 0 ? 'form-control' : _config$fieldClass,
    _config$inputGroupCla = config.inputGroupClass,
    inputGroupClass = _config$inputGroupCla === void 0 ? 'input-group' : _config$inputGroupCla;
  var handleChange = formik.handleChange,
    handleBlur = formik.handleBlur;
  var isInputGroup = icon ? true : false;
  return isInputGroup ? /*#__PURE__*/React.createElement("div", {
    className: inputGroupClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: name,
    name: name,
    type: fieldType,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    value: value,
    onChange: changeHandler.bind(_this, handleChange, formik, config),
    onBlur: handleBlur
  }, attributes))) : /*#__PURE__*/React.createElement("input", _extends({
    id: name,
    name: name,
    type: fieldType,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    value: value,
    onChange: changeHandler.bind(_this, handleChange, formik, config),
    onBlur: handleBlur
  }, attributes));
};
export default React.memo(Text);