function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
var SchemaContext = React.createContext({});
export var SchemaProvider = function SchemaProvider(_ref) {
  var value = _ref.value,
    children = _ref.children;
  return /*#__PURE__*/React.createElement(SchemaContext.Provider, {
    value: value
  }, children);
};
var withFormConfig = function withFormConfig(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/React.createElement(SchemaContext.Consumer, null, function (config) {
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, config));
    });
  };
};
export default withFormConfig;