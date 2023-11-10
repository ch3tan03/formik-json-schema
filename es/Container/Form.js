var _excluded = ["name"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import _ from 'lodash';
import React from 'react';
import Element from '../Element';
import { getName } from '../utils';
import PropTypes from 'prop-types';
import { Form as FormikDOMForm } from 'formik';
var Form = function Form(_ref) {
  var config = _ref.config;
  var _config$name = config.name,
    containerName = _config$name === void 0 ? '' : _config$name,
    elements = config.elements,
    _config$htmlClass = config.htmlClass,
    htmlClass = _config$htmlClass === void 0 ? 'form-horizontal' : _config$htmlClass,
    comment = config.comment,
    _config$commentClass = config.commentClass,
    commentClass = _config$commentClass === void 0 ? 'text-muted d-block mb-3' : _config$commentClass;
  return /*#__PURE__*/React.createElement(FormikDOMForm, {
    className: htmlClass
  }, comment && /*#__PURE__*/React.createElement("small", {
    className: commentClass
  }, comment), _.map(elements, function (_ref2, key) {
    var name = _ref2.name,
      config = _objectWithoutPropertiesLoose(_ref2, _excluded);
    return /*#__PURE__*/React.createElement(Element, {
      key: key,
      config: _extends({}, config, {
        name: getName(config.type, name, containerName)
      })
    });
  }));
};
Form.propTypes = process.env.NODE_ENV !== "production" ? {
  config: PropTypes.shape({
    name: PropTypes.string,
    htmlClass: PropTypes.string,
    elements: PropTypes.object.isRequired
  })
} : {};
export default Form;