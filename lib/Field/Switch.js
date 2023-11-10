"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSwitch = _interopRequireDefault(require("react-switch"));
var _utils = require("../utils");
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: fieldClass + (error ? ' is-invalid ' : '')
  }, /*#__PURE__*/_react["default"].createElement(_reactSwitch["default"], {
    checked: value,
    onChange: _utils.changeHandler.bind(_this, (0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config)
  }));
};
var _default = exports["default"] = _react["default"].memo(Switch);
module.exports = exports.default;