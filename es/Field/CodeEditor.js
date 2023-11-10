function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { changeHandler, setFieldValueWrapper } from '../utils';
var CodeEditor = function CodeEditor(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    value = _ref.value,
    error = _ref.error;
  var name = config.name,
    options = config.options,
    defaultValue = config.defaultValue,
    attributes = config.attributes,
    _config$fieldClass = config.fieldClass,
    fieldClass = _config$fieldClass === void 0 ? '' : _config$fieldClass;
  var setFieldValue = formik.setFieldValue,
    handleBlur = formik.handleBlur;
  var selectedValue = value || '';
  return /*#__PURE__*/React.createElement(CodeMirror, _extends({
    id: name,
    name: name,
    options: options,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    onBeforeChange: function onBeforeChange(editor, data, value) {
      changeHandler(setFieldValueWrapper(setFieldValue, name), formik, config, value);
    },
    onBlur: function onBlur(editor, event) {
      return handleBlur(_extends({}, event, {
        target: _extends({}, event.target, {
          name: name
        })
      }));
    },
    value: selectedValue
  }, attributes));
};
export default React.memo(CodeEditor);