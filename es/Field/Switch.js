var _this = this;
import React from 'react';
import { default as ReactSwitch } from "react-switch";
import { changeHandler, setFieldValueWrapper } from '../utils';
var Switch = function Switch(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? false : _ref$value,
    error = _ref.error;
  var name = config.name,
    _config$fieldClass = config.fieldClass,
    fieldClass = _config$fieldClass === void 0 ? 'switch d-block' : _config$fieldClass;
  var setFieldValue = formik.setFieldValue;
  return /*#__PURE__*/React.createElement("label", {
    className: fieldClass + (error ? ' is-invalid ' : '')
  }, /*#__PURE__*/React.createElement(ReactSwitch, {
    checked: value,
    onChange: changeHandler.bind(_this, setFieldValueWrapper(setFieldValue, name), formik, config)
  }));
};
export default React.memo(Switch);