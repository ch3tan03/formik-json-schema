var _excluded = ["type", "renderer", "wrapAs"],
  _excluded2 = ["config", "validationSchema", "formik"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import withFormConfig from './withFormConfig';
import { containers, fields, templates, FIELD } from './registry';
import when from '@flipbyte/when-condition';
import ErrorManager from './ErrorManager';

/**
 * Render the element based on it's type and renderer
 * and pass all the props received to the newly created element.
 *
 * @param  {object} props
 * @return {Component}
 */
var renderElement = function renderElement(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    value = _ref.value,
    error = _ref.error;
  var type = config.type,
    renderer = config.renderer,
    wrapAs = config.wrapAs,
    rest = _objectWithoutPropertiesLoose(config, _excluded);
  var registry = type === FIELD ? fields : containers;
  var Renderer = typeof renderer === 'string' ? registry.get(renderer) : renderer;
  return /*#__PURE__*/React.createElement(Renderer, {
    config: _extends({
      type: type
    }, rest),
    formik: formik,
    value: value,
    error: error
  });
};

/**
 * Generic element renderer component that renders based on the type and renderer of the element
 * It decides which renderer to use for fields, containers and templates and renders them accordingly
 *
 * @param {object} config
 * @param {string} error
 * @param {object} validationSchema
 * @param {object} formik
 * @param {object} rest
 */
var ElementRenderer = function ElementRenderer(_ref2) {
  var config = _ref2.config,
    validationSchema = _ref2.validationSchema,
    formik = _ref2.formik,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var type = config.type,
    name = config.name,
    showWhen = config.showWhen,
    enabledWhen = config.enabledWhen,
    template = config.template;
  var _useFormikContext = useFormikContext(),
    values = _useFormikContext.values;
  var _useState = useState(showWhen ? false : true),
    canShow = _useState[0],
    setCanShow = _useState[1];
  var _useState2 = useState(enabledWhen ? true : false),
    disabled = _useState2[0],
    setDisabled = _useState2[1];

  /**
   * If the template is function, assuming it is a react component, use it
   * Otherwise, consider it a string and try to fetch it, or the default component from the template registry
   */
  var Template = typeof template === 'function' ? template : templates.get(template || 'default');

  /**
   * When the values have changed process conditions on fields,
   * to decide whether to show and/or enable them or not.
   */
  useEffect(function () {
    Promise.all([showWhen ? when(showWhen, values) : true, enabledWhen ? when(enabledWhen, values) : true]).then(function (_ref3) {
      var canShow = _ref3[0],
        enabled = _ref3[1];
      setCanShow(canShow);
      setDisabled(!enabled);
    });
  }, [values]);
  return !!type && canShow && (type === FIELD ? /*#__PURE__*/React.createElement(Field, {
    name: name
  }, function (_ref4) {
    var value = _ref4.field.value;
    return /*#__PURE__*/React.createElement(ErrorManager, {
      name: name
    }, function (error) {
      return /*#__PURE__*/React.createElement(Template, _extends({
        disabled: disabled,
        error: error
      }, config), renderElement({
        config: config,
        formik: formik,
        value: value,
        error: error
      }));
    });
  }) : renderElement({
    config: config,
    formik: formik
  }));
};
export default withFormConfig(ElementRenderer);