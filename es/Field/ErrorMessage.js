import React from 'react';
var ErrorMessage = function ErrorMessage(_ref) {
  var name = _ref.name,
    error = _ref.error,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'invalid-feedback order-last' : _ref$className,
    _ref$as = _ref.as,
    Component = _ref$as === void 0 ? 'div' : _ref$as;
  return error && /*#__PURE__*/React.createElement(Component, {
    className: className
  }, error);
};
export default React.memo(ErrorMessage);