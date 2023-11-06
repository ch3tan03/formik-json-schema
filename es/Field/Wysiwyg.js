var _this = this;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import _ from 'lodash';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import { changeHandler, setFieldValueWrapper } from '../utils';
var Wysiwyg = function Wysiwyg(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    error = _ref.error;
  var _useState = useState(false),
    showHtml = _useState[0],
    setShowHtml = _useState[1];
  var _useState2 = useState(''),
    html = _useState2[0],
    setHtml = _useState2[1];
  var name = config.name,
    type = config.type,
    attributes = config.attributes,
    options = config.options,
    rows = config.rows,
    _config$textareaClass = config.textareaClass,
    textareaClass = _config$textareaClass === void 0 ? 'form-control' : _config$textareaClass;
  var setFieldValue = formik.setFieldValue,
    handleChange = formik.handleChange,
    handleBlur = formik.handleBlur;
  var toolbarOptions = _.assign({}, options ? options : Wysiwyg.defaultOptions);
  return /*#__PURE__*/React.createElement("div", {
    className: "row ql-container-wysiwyg ql-container-wysiwyg-" + name
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 d-flex justify-content-end"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary pull-right",
    onClick: function onClick() {
      return setShowHtml(function (showHtml) {
        return !showHtml;
      });
    }
  }, showHtml ? 'Show Editor' : 'View Source')), /*#__PURE__*/React.createElement("div", {
    className: 'col-md-12 ',
    onBlur: function onBlur(event) {
      return handleBlur(_extends({}, event, {
        target: _extends({}, event.target, {
          name: name
        })
      }));
    }
  }, !showHtml && /*#__PURE__*/React.createElement(ReactQuill, _extends({
    id: name,
    value: value,
    className: error ? ' is-invalid ' : '',
    onChange: changeHandler.bind(_this, setFieldValueWrapper(setFieldValue, name), formik, config)
  }, toolbarOptions, attributes)), showHtml && /*#__PURE__*/React.createElement("textarea", {
    id: 'ql-show-html-' + name,
    name: name,
    className: textareaClass,
    rows: "10",
    value: value,
    onChange: changeHandler.bind(_this, handleChange, formik, config)
  })));
};
Wysiwyg.defaultOptions = {
  modules: {
    toolbar: [['bold', 'italic', 'underline', 'strike'],
    // toggled buttons
    ['blockquote', 'code-block'], [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{
      'indent': '-1'
    }, {
      'indent': '+1'
    }],
    // outdent/indent
    // [{ 'direction': 'rtl' }],                         // text direction

    [{
      'size': ['small', false, 'large', 'huge']
    }],
    // custom dropdown
    [{
      'header': [1, 2, 3, 4, 5, 6, false]
    }], [{
      'color': []
    }, {
      'background': []
    }],
    // dropdown with defaults from theme
    [{
      'font': []
    }], [{
      'align': []
    }], ['clean']],
    clipboard: {
      matchVisual: false
    }
  },
  formats: ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']
};
export default React.memo(Wysiwyg);