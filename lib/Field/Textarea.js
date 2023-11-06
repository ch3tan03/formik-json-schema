"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  return /*#__PURE__*/_react["default"].createElement("textarea", _extends({
    id: name,
    name: name,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    value: value,
    onChange: _utils.changeHandler.bind(_this, handleChange, formik, config),
    onBlur: handleBlur
  }, attributes));
};
var _default = exports["default"] = _react["default"].memo(Textarea);
module.exports = exports.default;