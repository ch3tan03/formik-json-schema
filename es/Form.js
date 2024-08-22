var _excluded = ["onUpdate", "schema"],
  _excluded2 = ["schema", "onUpdate", "initialValues"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import _ from 'lodash';
import React, { useEffect, useCallback, useState } from 'react';
import { Formik } from 'formik';
import Element from './Element';
import { SchemaProvider } from './withFormConfig';
import { prepareValidationSchema } from './utils';
import Rules from '@flipbyte/yup-schema';
var FormikForm = function FormikForm(_ref) {
  var onUpdate = _ref.onUpdate,
    schema = _ref.schema,
    formik = _objectWithoutPropertiesLoose(_ref, _excluded);
  /**
   * Callback if provided will be vcalled when form values change
   */
  useEffect(function () {
    if (typeof onUpdate === 'function') {
      onUpdate(formik);
    }
  }, [formik.values]);
  return /*#__PURE__*/React.createElement(Element, {
    config: schema
  });
};
var Form = React.forwardRef(function (_ref2, ref) {
  var schema = _ref2.schema,
    _ref2$onUpdate = _ref2.onUpdate,
    onUpdate = _ref2$onUpdate === void 0 ? function () {} : _ref2$onUpdate,
    _ref2$initialValues = _ref2.initialValues,
    initialValues = _ref2$initialValues === void 0 ? {} : _ref2$initialValues,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var _useState = useState(null),
    validationSchema = _useState[0],
    setValidationSchema = _useState[1];

  /**
   * Initialize validation schema.
   *
   * Convert the validation schema rules from yup-schema array to yup object
   */
  var initValidationSchema = useCallback(function () {
    var yupSchema = prepareValidationSchema(schema);
    var validationSchema = !_.isEmpty(yupSchema) ? new Rules([['object', yupSchema]]).toYup() : null;
    setValidationSchema(validationSchema);
  }, [schema]);

  /**
   * Everytime the schema changes, re-initialize validationSchema
   *
   * This is has to be done everytime schema changes because,
   * certain cases may involve dynamically changing form fields based on
   * certain conditions, routes etc.
   */
  useEffect(function () {
    initValidationSchema();
  }, [schema]);
  var formProps = _extends({}, rest, {
    initialValues: initialValues
  });
  if (null !== validationSchema) {
    formProps.validationSchema = validationSchema;
  }
  return /*#__PURE__*/React.createElement(SchemaProvider, {
    value: {
      validationSchema: validationSchema,
      schema: schema
    }
  }, /*#__PURE__*/React.createElement(Formik, _extends({}, formProps, {
    innerRef: ref
  }), function (props) {
    return /*#__PURE__*/React.createElement(FormikForm, _extends({
      onUpdate: onUpdate,
      schema: schema
    }, props));
  }));
});
export default Form;