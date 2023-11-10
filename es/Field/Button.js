var _this = this;
import React from 'react';
var Button = function Button(_ref) {
  var config = _ref.config,
    formik = _ref.formik;
  var content = config.content,
    fieldClass = config.fieldClass,
    buttonType = config.buttonType,
    onClick = config.onClick;
  var isSubmitting = formik.isSubmitting;
  var buttonProps = {
    type: buttonType ? buttonType : 'button',
    className: 'btn ' + fieldClass,
    disabled: isSubmitting
  };
  if (typeof onClick === 'function') {
    buttonProps.onClick = onClick.bind(_this, formik, config);
  }
  return /*#__PURE__*/React.createElement("button", buttonProps, content, " ", buttonType === 'submit' && isSubmitting && /*#__PURE__*/React.createElement("i", {
    className: "fa fa-spinner fa-spin"
  }));
};
export default Button;