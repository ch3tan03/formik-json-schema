"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireDefault(require("react"));
var _Element = _interopRequireDefault(require("../Element"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _excluded = ["name"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var HtmlTag = function HtmlTag(_ref) {
  var _ref$config = _ref.config,
    _ref$config$name = _ref$config.name,
    containerName = _ref$config$name === void 0 ? '' : _ref$config$name,
    _ref$config$as = _ref$config.as,
    Component = _ref$config$as === void 0 ? 'div' : _ref$config$as,
    elements = _ref$config.elements,
    htmlClass = _ref$config.htmlClass,
    comment = _ref$config.comment,
    _ref$config$commentCl = _ref$config.commentClass,
    commentClass = _ref$config$commentCl === void 0 ? 'text-muted d-block mb-3' : _ref$config$commentCl;
  return /*#__PURE__*/_react["default"].createElement(Component, {
    className: htmlClass
  }, comment && /*#__PURE__*/_react["default"].createElement("small", {
    className: commentClass
  }, comment), _lodash["default"].map(elements, function (_ref2, key) {
    var name = _ref2.name,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
      key: key,
      config: _extends({}, rest, {
        name: (0, _utils.joinNames)(containerName, name)
      })
    });
  }));
};
HtmlTag.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    elements: _propTypes["default"].object.isRequired,
    htmlClass: _propTypes["default"].string
  })
} : {};
var _default = exports["default"] = HtmlTag;
module.exports = exports.default;