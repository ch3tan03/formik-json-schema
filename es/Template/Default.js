import React, { Fragment } from 'react';
import Label from '../Field/Label';
import ErrorMessage from '../Field/ErrorMessage';
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
    children = _ref.children;
  var Component = !wrapAs ? Fragment : wrapAs;
  var componentProps = !wrapAs ? {} : {
    className: htmlClass,
    style: styles(disabled)
  };
  return /*#__PURE__*/React.createElement(Component, componentProps, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: name,
    className: labelClass
  }, label), children, comment && /*#__PURE__*/React.createElement(CommentComponent, {
    className: commentClass
  }, comment), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: name,
    error: error,
    className: errorClass,
    as: errorAs
  }));
};
export default Default;