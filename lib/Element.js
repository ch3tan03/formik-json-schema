"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _formik = require("formik");
var _react = _interopRequireWildcard(require("react"));
var _Renderer = _interopRequireDefault(require("./Renderer"));
var _registry = require("./registry");
var _shallowequal = _interopRequireDefault(require("shallowequal"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Element = function Element(_ref) {
  var config = _ref.config,
    update = _ref.update,
    formik = _ref.formik;
  var configSource = config.configSource,
    dataSource = config.dataSource;
  var _useState = (0, _react.useState)(false),
    hasLoadedConfig = _useState[0],
    setHasLoadedConfig = _useState[1];
  var _useState2 = (0, _react.useState)(dataSource ? false : true),
    hasLoadedData = _useState2[0],
    setHasLoadedData = _useState2[1];
  var _useState3 = (0, _react.useState)(update !== false),
    hasMounted = _useState3[0],
    setHasMounted = _useState3[1];
  var _useState4 = (0, _react.useState)(undefined),
    loadedConfig = _useState4[0],
    setLoadedConfig = _useState4[1];

  /**
   * After load data
   *
   * @param  {mixed} value
   * @return {void}
   */
  var loadDataAfter = function loadDataAfter(value) {
    return setHasLoadedData(true);
  };

  /**
   * After load config
   *
   * @param  {object} newConfig
   * @return {void}
   */
  var loadConfigAfter = function loadConfigAfter(newConfig) {
    setHasLoadedConfig(true);
    setLoadedConfig(_lodash["default"].assign({}, config, newConfig));
  };

  /**
   * On mount, load if there is a valid config source,
   * load the data from the config source and handle
   * whether future loads should be possible
   */
  (0, _react.useEffect)(function () {
    if (!hasLoadedConfig && typeof configSource === 'function') {
      configSource(formik, config).then(loadConfigAfter)["catch"](function (err) {});
    }
    return function () {
      return setHasLoadedConfig(false);
    };
  }, []);

  /**
   * If the value of update changes or if the form is currently validating (during submission),
   * set that value for hasMounted => true
   */
  (0, _react.useEffect)(function () {
    setHasMounted(function (hasMounted) {
      if (hasMounted) {
        return hasMounted;
      }
      return update !== false || formik.isValidating === true;
    });
  }, [update, formik.isValidating]);

  /**
   * If a valid dataSource exists, call the dataSource when the element is mounted.
   * Also, call this when initialValues have changed and the component is mounted
   *
   * The latter is useful when you update the data on the server and reinitialize the
   * values of the form top-down where the value of this particular field comes from a dataSource
   */
  (0, _react.useEffect)(function () {
    if (typeof dataSource === 'function' && hasMounted) {
      dataSource(formik, config).then(loadDataAfter)["catch"](function (err) {});
    }
  }, [hasMounted, formik.initialValues]);
  return hasMounted && /*#__PURE__*/_react["default"].createElement(_Renderer["default"], {
    config: loadedConfig || config,
    formik: formik
  });
};
var _default = exports["default"] = (0, _formik.connect)(_react["default"].memo(Element, function (_ref2, nextProps) {
  var config = _ref2.config,
    formik = _ref2.formik,
    update = _ref2.update;
  return update === nextProps.update && (0, _shallowequal["default"])(config, nextProps.config) && formik.initialValues === nextProps.formik.initialValues && formik.isValidating === nextProps.formik.isValidating && formik.isSubmitting === nextProps.formik.isSubmitting;
}));
module.exports = exports.default;