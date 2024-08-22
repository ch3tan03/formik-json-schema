"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Button = function Button(_ref) {
  var config = _ref.config,
    formik = _ref.formik;
  var content = config.content,
    fieldClass = config.fieldClass,
    buttonType = config.buttonType,
    onClick = config.onClick;
  var isSubmitting = formik.isSubmitting;
  //console.log(formik.errors, Object.keys(formik.errors).length)
  // if(Object.keys(formik.errors).length ===1){

  //       Object.values(formik.errors).forEach(value => {
  //         toast.error('Conditional field, '+value, {
  //             toastId: 'error1'
  //           })
  //       });

  // }
  var buttonProps = {
    type: buttonType ? buttonType : 'button',
    className: 'btn ' + fieldClass,
    disabled: isSubmitting
  };
  if (typeof onClick === 'function') {
    buttonProps.onClick = onClick.bind(_this, formik, config);
  }
  return /*#__PURE__*/_react["default"].createElement("button", buttonProps, content, " ", buttonType === 'submit' && isSubmitting && /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-spinner fa-spin"
  }));
};
var _default = exports["default"] = Button;
module.exports = exports.default;