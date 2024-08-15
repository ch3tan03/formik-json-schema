"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireWildcard(require("react"));
var _formik = require("formik");
var _reactToastify = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Error manager component that displays error only when it's right
 *
 * The component sets the global formik submitCount in it's local state for reference
 * The local submit count is used to make sure the error message is not shown on it's initial load
 *
 * The local submitcount will be set to 1 less than the value of submitCount if the form is being
 * submitted when the fields are mounted. This is done so that fields (such as tab fields) that are mounted
 * for the sole purpose of showing error messages correctly, show the error message right during the first load
 *
 * The error message will be visible only after the first touch or first form submission so that
 * form submitted with fields hidden do not show the a message when they show up when a certain condition is
 * satisified, fieldset disclosed, tab opened, editable grid field added etc.
 *
 * @param {string} name
 * @param {object} formik
 * @param {function} children
 */
var ErrorManager = function ErrorManager(_ref) {
  var name = _ref.name,
    children = _ref.children;
  // Set submitCount on initial mount.
  var formik = (0, _formik.useFormikContext)();
  var _useFormikContext = (0, _formik.useFormikContext)(),
    formikSubmitCount = _useFormikContext.submitCount,
    isSubmitting = _useFormikContext.isSubmitting,
    errors = _useFormikContext.errors,
    touched = _useFormikContext.touched,
    initialError = _useFormikContext.initialError;
  var _useState = (0, _react.useState)(isSubmitting ? formikSubmitCount - 1 : formikSubmitCount),
    submitCount = _useState[0];
  var isTouched = _lodash["default"].get(touched, name);
  var errorMessage = _lodash["default"].get(errors, name);
  var error = !_lodash["default"].isEmpty(errorMessage) && (isTouched || formikSubmitCount > submitCount) ? errorMessage : false;
  if (error && isSubmitting) {
    // console.log('error--->',error, isSubmitting, formikSubmitCount)
    // toast.error(error);
    //  toast.dismiss();
    _reactToastify.toast.error('Please fill in all required fields.', {
      toastId: 'error1'
    });
  }
  return children(error);
};
var _default = exports["default"] = ErrorManager;
module.exports = exports.default;