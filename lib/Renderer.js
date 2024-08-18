"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _formik = require("formik");
var _withFormConfig = _interopRequireDefault(require("./withFormConfig"));
var _registry = require("./registry");
var _whenCondition = _interopRequireDefault(require("@flipbyte/when-condition"));
var _ErrorManager = _interopRequireDefault(require("./ErrorManager"));
var _excluded = ["type", "renderer", "wrapAs"],
  _excluded2 = ["config", "validationSchema", "formik"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
  var registry = type === _registry.FIELD ? _registry.fields : _registry.containers;
  var Renderer = typeof renderer === 'string' ? registry.get(renderer) : renderer;
  return /*#__PURE__*/_react["default"].createElement(Renderer, {
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
  var _useFormikContext = (0, _formik.useFormikContext)(),
    values = _useFormikContext.values;
  var _useState = (0, _react.useState)(showWhen ? false : true),
    canShow = _useState[0],
    setCanShow = _useState[1];
  var _useState2 = (0, _react.useState)(enabledWhen ? true : false),
    disabled = _useState2[0],
    setDisabled = _useState2[1];

  /**
   * If the template is function, assuming it is a react component, use it
   * Otherwise, consider it a string and try to fetch it, or the default component from the template registry
   */
  var Template = typeof template === 'function' ? template : _registry.templates.get(template || 'default');

  /**
   * When the values have changed process conditions on fields,
   * to decide whether to show and/or enable them or not.
   */
  (0, _react.useEffect)(function () {
    // console.log('test1',values, showWhen, enabledWhen)
    Promise.all([showWhen ? (0, _whenCondition["default"])(showWhen, values) : true, enabledWhen ? (0, _whenCondition["default"])(enabledWhen, values) : true]).then(function (_ref3) {
      var canShow = _ref3[0],
        enabled = _ref3[1];
      setCanShow(canShow);
      setDisabled(!enabled);
    });
  }, [values]);
  return !!type && canShow && (type === _registry.FIELD ? /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name
  }, function (_ref4) {
    var value = _ref4.field.value;
    return /*#__PURE__*/_react["default"].createElement(_ErrorManager["default"], {
      name: name
    }, function (error) {
      return /*#__PURE__*/_react["default"].createElement(Template, _extends({
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
var _default = exports["default"] = (0, _withFormConfig["default"])(ElementRenderer);
module.exports = exports.default;