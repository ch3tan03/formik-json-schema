var _excluded = ["name", "as", "htmlClass", "defaultValue"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
var InnerText = function InnerText(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    value = _ref.value,
    error = _ref.error;
  var name = config.name,
    _config$as = config.as,
    Component = _config$as === void 0 ? 'span' : _config$as,
    htmlClass = config.htmlClass,
    _config$defaultValue = config.defaultValue,
    defaultValue = _config$defaultValue === void 0 ? '' : _config$defaultValue,
    attributes = _objectWithoutPropertiesLoose(config, _excluded);
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: htmlClass
  }, attributes), value || defaultValue);
};
export default React.memo(InnerText);