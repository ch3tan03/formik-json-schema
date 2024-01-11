function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { changeHandler } from '../utils';
var Checkbox = function Checkbox(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    value = _ref.value,
    error = _ref.error;
  var name = config.name,
    attributes = config.attributes,
    _config$options = config.options,
    options = _config$options === void 0 ? [] : _config$options,
    _config$formCheckClas = config.formCheckClass,
    formCheckClass = _config$formCheckClas === void 0 ? 'form-check' : _config$formCheckClas,
    _config$fieldClass = config.fieldClass,
    fieldClass = _config$fieldClass === void 0 ? 'form-check-input' : _config$fieldClass,
    _config$formCheckLabe = config.formCheckLabelClass,
    formCheckLabelClass = _config$formCheckLabe === void 0 ? 'form-check-label' : _config$formCheckLabe;
  var handleChange = formik.handleChange,
    handleBlur = formik.handleBlur;
  var checkboxValue = value || [];
  return options.map(function (_ref2, key, index) {
    var value = _ref2.value,
      label = _ref2.label;
    var fieldName = _.kebabCase(name + ' ' + value);
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: formCheckClass
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: fieldName,
      className: formCheckLabelClass
    }, /*#__PURE__*/React.createElement("input", _extends({
      id: fieldName,
      name: name + "." + key,
      className: fieldClass + (error ? ' is-invalid ' : ''),
      type: "checkbox",
      checked: checkboxValue[key] == 'on'
      //checked={ checkboxValue[key] || false }
      ,
      onChange: function onChange(event) {
        // console.log('mycheckbox---->', event.target.checked, checkboxValue) 
        changeHandler(handleChange, formik, config, event);
        handleBlur(event);
      }
    }, attributes)), " ", label));
  });
};
Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  config: PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    formCheckClass: PropTypes.string
  })
} : {};
export default React.memo(Checkbox);