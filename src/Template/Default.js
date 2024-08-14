import React, { Fragment } from 'react';
import Label from '../Field/Label';
import ErrorMessage from '../Field/ErrorMessage';

const styles = ( disabled ) => disabled ? { pointerEvents: 'none', opacity: 0.6 } : {};

const Default = ({
    disabled = false,
    name,
    label,
    comment,
    error,
    labelClass = '',
    wrapAs = 'div',
    htmlClass = 'form-group mb-3',
    commentClass = 'text-muted order-last',
    commentAs: CommentComponent = 'small',
    errorClass,
    errorAs,
    children,
    validation

}) => {
   // console.log('validation----',validation)
    const Component = !wrapAs ? Fragment : wrapAs;
    const componentProps = !wrapAs ? {} : {
        className: htmlClass,
        style: styles(disabled)
    };

    return (
        <Component { ...componentProps }>
            { label && <Label htmlFor={ name } className={ labelClass }>{ label }{validation?.some(subArray => subArray.includes("required"))?' *':''}</Label> }
            { children }
            { comment && <CommentComponent className={ commentClass }>{ comment }</CommentComponent> }
            <ErrorMessage name={ name } error={ error } className={ errorClass } as={ errorAs } />
        </Component>
    );
};

export default Default;
