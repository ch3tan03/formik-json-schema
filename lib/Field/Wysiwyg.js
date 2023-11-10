"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireWildcard(require("react"));
var _reactQuill = _interopRequireDefault(require("react-quill"));
var _utils = require("../utils");
var _this = void 0; // import 'react-quill/dist/quill.snow.css';
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Wysiwyg = function Wysiwyg(_ref) {
  var config = _ref.config,
    formik = _ref.formik,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    error = _ref.error;
  var _useState = (0, _react.useState)(false),
    showHtml = _useState[0],
    setShowHtml = _useState[1];
  var _useState2 = (0, _react.useState)(''),
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
  var toolbarOptions = _lodash["default"].assign({}, options ? options : Wysiwyg.defaultOptions);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row ql-container-wysiwyg ql-container-wysiwyg-" + name
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-12 d-flex justify-content-end"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary pull-right",
    onClick: function onClick() {
      return setShowHtml(function (showHtml) {
        return !showHtml;
      });
    }
  }, showHtml ? 'Show Editor' : 'View Source')), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'col-md-12 ',
    onBlur: function onBlur(event) {
      return handleBlur(_extends({}, event, {
        target: _extends({}, event.target, {
          name: name
        })
      }));
    }
  }, !showHtml && /*#__PURE__*/_react["default"].createElement(_reactQuill["default"], _extends({
    id: name,
    value: value,
    className: error ? ' is-invalid ' : '',
    onChange: _utils.changeHandler.bind(_this, (0, _utils.setFieldValueWrapper)(setFieldValue, name), formik, config)
  }, toolbarOptions, attributes)), showHtml && /*#__PURE__*/_react["default"].createElement("textarea", {
    id: 'ql-show-html-' + name,
    name: name,
    className: textareaClass,
    rows: "10",
    value: value,
    onChange: _utils.changeHandler.bind(_this, handleChange, formik, config)
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
var _default = exports["default"] = _react["default"].memo(Wysiwyg);
module.exports = exports.default;