"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Label = _interopRequireDefault(require("../Field/Label"));
var _ErrorMessage = _interopRequireDefault(require("../Field/ErrorMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = function styles(disabled) {
  return disabled ? {
    pointerEvents: 'none',
    opacity: 0.6
  } : {};
};
var Default = function Default(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    name = _ref.name,
    label = _ref.label,
    comment = _ref.comment,
    error = _ref.error,
    _ref$labelClass = _ref.labelClass,
    labelClass = _ref$labelClass === void 0 ? '' : _ref$labelClass,
    _ref$wrapAs = _ref.wrapAs,
    wrapAs = _ref$wrapAs === void 0 ? 'div' : _ref$wrapAs,
    _ref$htmlClass = _ref.htmlClass,
    htmlClass = _ref$htmlClass === void 0 ? 'form-group mb-3' : _ref$htmlClass,
    _ref$commentClass = _ref.commentClass,
    commentClass = _ref$commentClass === void 0 ? 'text-muted order-last' : _ref$commentClass,
    _ref$commentAs = _ref.commentAs,
    CommentComponent = _ref$commentAs === void 0 ? 'small' : _ref$commentAs,
    errorClass = _ref.errorClass,
    errorAs = _ref.errorAs,
    children = _ref.children,
    validation = _ref.validation;
  // console.log('validation----',validation)
  var Component = !wrapAs ? _react.Fragment : wrapAs;
  var componentProps = !wrapAs ? {} : {
    className: htmlClass,
    style: styles(disabled)
  };
  return /*#__PURE__*/_react["default"].createElement(Component, componentProps, label && /*#__PURE__*/_react["default"].createElement(_Label["default"], {
    htmlFor: name,
    className: labelClass
  }, label, (validation === null || validation === void 0 ? void 0 : validation.some(function (subArray) {
    return subArray.includes("required");
  })) ? ' *' : ''), children, comment && /*#__PURE__*/_react["default"].createElement(CommentComponent, {
    className: commentClass
  }, comment), /*#__PURE__*/_react["default"].createElement(_ErrorMessage["default"], {
    name: name,
    error: error,
    className: errorClass,
    as: errorAs
  }));
};
var _default = exports["default"] = Default;
module.exports = exports.default;