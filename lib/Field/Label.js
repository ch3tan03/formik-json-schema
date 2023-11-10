"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Label = function Label(_ref) {
  var children = _ref.children,
    attributes = _objectWithoutPropertiesLoose(_ref, _excluded);
  return children ? /*#__PURE__*/_react["default"].createElement("label", attributes, children) : null;
};
var _default = exports["default"] = _react["default"].memo(Label);
module.exports = exports.default;