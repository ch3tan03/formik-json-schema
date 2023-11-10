"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  return isInputGroup ? /*#__PURE__*/_react["default"].createElement("div", {
    className: inputGroupClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "input-group-text"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: icon
  }))), /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: name,
    name: name,
    type: fieldType,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    value: value,
    onChange: _utils.changeHandler.bind(_this, handleChange, formik, config),
    onBlur: handleBlur
  }, attributes))) : /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: name,
    name: name,
    type: fieldType,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    value: value,
    onChange: _utils.changeHandler.bind(_this, handleChange, formik, config),
    onBlur: handleBlur
  }, attributes));
};
var _default = exports["default"] = _react["default"].memo(Text);
module.exports = exports.default;