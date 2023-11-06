"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _Element = _interopRequireDefault(require("../Element"));
var _utils = require("../utils");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["name"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Fieldset = function Fieldset(_ref) {
  var _ref$config = _ref.config,
    _ref$config$name = _ref$config.name,
    containerName = _ref$config$name === void 0 ? '' : _ref$config$name,
    title = _ref$config.title,
    elements = _ref$config.elements,
    _ref$config$collapsib = _ref$config.collapsible,
    collapsible = _ref$config$collapsib === void 0 ? true : _ref$config$collapsib,
    _ref$config$collapsed = _ref$config.collapsed,
    collapsed = _ref$config$collapsed === void 0 ? false : _ref$config$collapsed,
    _ref$config$hasHeader = _ref$config.hasHeaderIcon,
    hasHeaderIcon = _ref$config$hasHeader === void 0 ? true : _ref$config$hasHeader,
    comment = _ref$config.comment,
    _ref$config$commentCl = _ref$config.commentClass,
    commentClass = _ref$config$commentCl === void 0 ? 'text-muted d-block mb-3' : _ref$config$commentCl,
    _ref$config$headerIco = _ref$config.headerIconClass,
    headerIconClass = _ref$config$headerIco === void 0 ? 'fa fa-angle-right' : _ref$config$headerIco,
    _ref$config$cardClass = _ref$config.cardClass,
    cardClass = _ref$config$cardClass === void 0 ? 'card flutter-fieldset' : _ref$config$cardClass,
    _ref$config$cardHeade = _ref$config.cardHeaderClass,
    cardHeaderClass = _ref$config$cardHeade === void 0 ? 'card-header bg-primary-subtle' : _ref$config$cardHeade,
    _ref$config$cardHeade2 = _ref$config.cardHeaderIconCollapsedClass,
    cardHeaderIconCollapsedClass = _ref$config$cardHeade2 === void 0 ? 'fas fa-angle-down' : _ref$config$cardHeade2,
    _ref$config$cardHeade3 = _ref$config.cardHeaderIconDisclosedClass,
    cardHeaderIconDisclosedClass = _ref$config$cardHeade3 === void 0 ? 'fas fa-angle-up' : _ref$config$cardHeade3,
    _ref$config$cardHeade4 = _ref$config.cardHeaderActionsClass,
    cardHeaderActionsClass = _ref$config$cardHeade4 === void 0 ? 'card-header-actions' : _ref$config$cardHeade4,
    _ref$config$cardBodyC = _ref$config.cardBodyClass,
    cardBodyClass = _ref$config$cardBodyC === void 0 ? 'card-body' : _ref$config$cardBodyC;
  var _useState = (0, _react.useState)(collapsible && collapsed),
    isCollapsed = _useState[0],
    setIsCollapsed = _useState[1];
  var toggle = function toggle(event) {
    if (false === collapsible) {
      event.preventDefault();
      return;
    }
    setIsCollapsed(function (isCollapsed) {
      return !isCollapsed;
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cardClass
  }, !!title && /*#__PURE__*/_react["default"].createElement("div", {
    className: cardHeaderClass,
    onClick: toggle
  }, hasHeaderIcon && /*#__PURE__*/_react["default"].createElement("i", {
    className: headerIconClass
  }), title, collapsible && /*#__PURE__*/_react["default"].createElement("div", {
    className: cardHeaderActionsClass + ' float-end'
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "card-header-action btn-minimize"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: isCollapsed ? cardHeaderIconCollapsedClass : cardHeaderIconDisclosedClass
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'collapse ' + (!isCollapsed ? 'show' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: cardBodyClass
  }, comment && /*#__PURE__*/_react["default"].createElement("small", {
    className: commentClass
  }, comment), _lodash["default"].map(elements, function (_ref2, key) {
    var name = _ref2.name,
      config = _objectWithoutPropertiesLoose(_ref2, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
      key: key,
      update: !isCollapsed,
      config: _extends({}, config, {
        name: (0, _utils.getName)(config.type, name, containerName)
      })
    });
  }))));
};
Fieldset.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    title: _propTypes["default"].string,
    elements: _propTypes["default"].object.isRequired,
    cardClass: _propTypes["default"].string,
    cardHeaderClass: _propTypes["default"].string,
    cardHeaderActionsClass: _propTypes["default"].string,
    cardBodyClass: _propTypes["default"].string
  })
} : {};
var _default = exports["default"] = Fieldset;
module.exports = exports.default;