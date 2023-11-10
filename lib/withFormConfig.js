"use strict";

exports.__esModule = true;
exports["default"] = exports.SchemaProvider = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SchemaContext = _react["default"].createContext({});
var SchemaProvider = exports.SchemaProvider = function SchemaProvider(_ref) {
  var value = _ref.value,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(SchemaContext.Provider, {
    value: value
  }, children);
};
var withFormConfig = function withFormConfig(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(SchemaContext.Consumer, null, function (config) {
      return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, props, config));
    });
  };
};
var _default = exports["default"] = withFormConfig;