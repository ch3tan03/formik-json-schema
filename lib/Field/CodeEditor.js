"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCodemirror = require("react-codemirror2");
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  return /*#__PURE__*/_react["default"].createElement(_reactCodemirror.Controlled, _extends({
    id: name,
    name: name,
    options: options,
    className: fieldClass + (error ? ' is-invalid ' : ''),
    onBeforeChange: function onBeforeChange(editor, data, value) {
      (0, _utils.changeHandler)((0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config, value);
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
var _default = exports["default"] = _react["default"].memo(CodeEditor);
module.exports = exports.default;