function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { changeHandler } from '../utils';
var Radio = function Radio(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    value = _ref.value,
    error = _ref.error;
  var name = config.name,
    type = config.type,
    attributes = config.attributes,
    options = config.options,
    _config$formCheckClas = config.formCheckClass,
    formCheckClass = _config$formCheckClas === void 0 ? 'form-check' : _config$formCheckClas,
    _config$fieldClass = config.fieldClass,
    fieldClass = _config$fieldClass === void 0 ? 'form-check-input' : _config$fieldClass,
    _config$formCheckLabe = config.formCheckLabelClass,
    formCheckLabelClass = _config$formCheckLabe === void 0 ? 'form-check-label' : _config$formCheckLabe;
  var handleChange = formik.handleChange,
    handleBlur = formik.handleBlur;
  return options.map(function (option) {
    return /*#__PURE__*/React.createElement("div", {
      className: formCheckClass,
      key: option.value
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: name + '_' + option.value,
      className: formCheckLabelClass
    }, /*#__PURE__*/React.createElement("input", _extends({
      name: name,
      type: "radio",
      className: fieldClass + (error ? ' is-invalid ' : ''),
      id: name + '_' + option.value,
      value: option.value,
      defaultChecked: value == option.value,
      onChange: function onChange(event) {
        changeHandler(handleChange, formik, config, event);
        handleBlur(event);
      }
    }, attributes)), " ", option.title));
  });
};
export default React.memo(Radio);