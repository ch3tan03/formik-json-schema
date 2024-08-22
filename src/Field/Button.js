import React from 'react';

const Button = ({ config, formik }) => {
    const { content, fieldClass, buttonType, onClick } = config;
    const { isSubmitting } = formik;
//console.log(formik.errors, Object.keys(formik.errors).length)
// if(Object.keys(formik.errors).length ===1){
   
//       Object.values(formik.errors).forEach(value => {
//         toast.error('Conditional field, '+value, {
//             toastId: 'error1'
//           })
//       });
     
// }
    let buttonProps = {
        type: buttonType ? buttonType : 'button' ,
        className: 'btn ' + fieldClass,
    disabled: isSubmitting
    };

    if(typeof onClick === 'function') {

        buttonProps.onClick = onClick.bind(this, formik, config);
    }

    return (
        <button { ...buttonProps }>
            { content } { buttonType === 'submit' && isSubmitting && <i className="fa fa-spinner fa-spin" /> }
        </button>
    );
}

export default Button;
