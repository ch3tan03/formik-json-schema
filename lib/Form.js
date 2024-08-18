"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireWildcard(require("react"));
var _formik = require("formik");
var _Element = _interopRequireDefault(require("./Element"));
var _withFormConfig = require("./withFormConfig");
var _utils = require("./utils");
var _yupSchema = _interopRequireDefault(require("@flipbyte/yup-schema"));
var _reactToastify = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var _excluded = ["onUpdate", "schema"],
  _excluded2 = ["schema", "onUpdate", "initialValues"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormikForm = function FormikForm(_ref) {
  var onUpdate = _ref.onUpdate,
    schema = _ref.schema,
    formik = _objectWithoutPropertiesLoose(_ref, _excluded);
  /**
   * Callback if provided will be vcalled when form values change
   */
  (0, _react.useEffect)(function () {
    if (typeof onUpdate === 'function') {
      onUpdate(formik);
    }
  }, [formik.values]);
  return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
    config: schema
  });
};
var Form = _react["default"].forwardRef(function (_ref2, ref) {
  var schema = _ref2.schema,
    _ref2$onUpdate = _ref2.onUpdate,
    onUpdate = _ref2$onUpdate === void 0 ? function () {} : _ref2$onUpdate,
    _ref2$initialValues = _ref2.initialValues,
    initialValues = _ref2$initialValues === void 0 ? {} : _ref2$initialValues,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var _useState = (0, _react.useState)(null),
    validationSchema = _useState[0],
    setValidationSchema = _useState[1];

  /**
   * Initialize validation schema.
   *
   * Convert the validation schema rules from yup-schema array to yup object
   */
  var initValidationSchema = (0, _react.useCallback)(function () {
    var yupSchema = (0, _utils.prepareValidationSchema)(schema);
    var validationSchema = !_lodash["default"].isEmpty(yupSchema) ? new _yupSchema["default"]([['object', yupSchema]]).toYup() : null;
    setValidationSchema(validationSchema);
  }, [schema]);

  /**
   * Everytime the schema changes, re-initialize validationSchema
   *
   * This is has to be done everytime schema changes because,
   * certain cases may involve dynamically changing form fields based on
   * certain conditions, routes etc.
   */
  (0, _react.useEffect)(function () {
    initValidationSchema();
  }, [schema]);
  var formProps = _extends({}, rest, {
    initialValues: initialValues
  });
  if (null !== validationSchema) {
    formProps.validationSchema = validationSchema;
  }
  return /*#__PURE__*/_react["default"].createElement(_withFormConfig.SchemaProvider, {
    value: {
      validationSchema: validationSchema,
      schema: schema
    }
  }, /*#__PURE__*/_react["default"].createElement(_formik.Formik, _extends({}, formProps, {
    innerRef: ref
  }), function (props) {
    return /*#__PURE__*/_react["default"].createElement(FormikForm, _extends({
      onUpdate: onUpdate,
      schema: schema
    }, props));
  }), /*#__PURE__*/_react["default"].createElement(_reactToastify.ToastContainer, {
    limit: 1,
    closeButton: null,
    pauseOnHover: false,
    closeOnClick: false
  }));
});
var _default = exports["default"] = Form;
module.exports = exports.default;