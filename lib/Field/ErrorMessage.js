"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ErrorMessage = function ErrorMessage(_ref) {
  var name = _ref.name,
    error = _ref.error,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'invalid-feedback order-last' : _ref$className,
    _ref$as = _ref.as,
    Component = _ref$as === void 0 ? 'div' : _ref$as;
  return error && /*#__PURE__*/_react["default"].createElement(Component, {
    className: className
  }, error);
};
var _default = exports["default"] = _react["default"].memo(ErrorMessage);
module.exports = exports.default;