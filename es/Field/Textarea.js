var _this = this;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { changeHandler } from '../utils';
var Textarea = function Textarea(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    error = _ref.error;
  var name = config.name,
    type = config.type,
    attributes = config.attributes,
    rows = config.rows,
    _config$fieldClass = config.fieldClass,
    fieldClass = _config$fieldClass === void 0 ? 'form-control' : _config$fieldClass;
  var handleChange = formik.handleChange,
    handleBlur = formik.handleBlur;
  return /*#__PURE__*/React.createElement("textarea", _extends({
    id: name,
    name: name,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    value: value,
    onChange: changeHandler.bind(_this, handleChange, formik, config),
    onBlur: handleBlur
  }, attributes));
};
export default React.memo(Textarea);