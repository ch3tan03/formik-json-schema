"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireDefault(require("react"));
var _Element = _interopRequireDefault(require("../Element"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ButtonGroup = function ButtonGroup(_ref) {
  var _ref$config = _ref.config,
    elements = _ref$config.elements,
    _ref$config$buttonsCo = _ref$config.buttonsContainerClass,
    buttonsContainerClass = _ref$config$buttonsCo === void 0 ? 'buttons-container' : _ref$config$buttonsCo,
    _ref$config$buttonGro = _ref$config.buttonGroupClass,
    buttonGroupClass = _ref$config$buttonGro === void 0 ? 'btn-group' : _ref$config$buttonGro;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: buttonsContainerClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: buttonGroupClass
  }, _lodash["default"].map(elements, function (element, key) {
    return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
      key: key,
      config: element
    });
  })));
};
ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes["default"].shape({
    buttonsContainerClass: _propTypes["default"].string,
    buttonGroupClass: _propTypes["default"].string,
    elements: _propTypes["default"].object.isRequired
  })
} : {};
var _default = exports["default"] = ButtonGroup;
module.exports = exports.default;