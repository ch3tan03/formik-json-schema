"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDropzone = require("react-dropzone");
var _utils = require("../utils");
var _excluded = ["onDrop", "onDropAccepted", "onDropRejected"];
var _this = void 0;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Thumb = function Thumb(_ref) {
  var key = _ref.key,
    file = _ref.file;
  return /*#__PURE__*/_react["default"].createElement("div", null);
};
var thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};
var thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  padding: 4,
  boxSizing: 'border-box'
};
var thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};
var img = {
  display: 'block',
  width: 150,
  height: 150,
  objectFit: 'contain'
};
var baseStyle = {
  width: '100%',
  height: 200,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5,
  padding: 10
};
var activeStyle = {
  borderColor: '#6c6',
  backgroundColor: '#eee'
};
var acceptStyle = {
  borderColor: '#00e676'
};
var rejectStyle = {
  borderColor: '#ff1744'
};
var prepareFileUploderOptions = function prepareFileUploderOptions(_ref2, formik, config) {
  var onDrop = _ref2.onDrop,
    onDropAccepted = _ref2.onDropAccepted,
    onDropRejected = _ref2.onDropRejected,
    options = _objectWithoutPropertiesLoose(_ref2, _excluded);
  options.onDrop = onDrop ? onDrop.bind(_this, formik, config) : null;
  options.onDropAccepted = onDropAccepted ? onDropAccepted.bind(_this, formik, config) : null;
  options.onDropRejected = onDropRejected ? onDropRejected.bind(_this, formik, config) : null;
  return options;
};
var thumbs = [];
var FileUploader = function FileUploader(_ref3) {
  var config = _ref3.config,
    formik = _ref3.formik,
    value = _ref3.value,
    error = _ref3.error;
  var name = config.name,
    options = config.options,
    placeholder = config.placeholder,
    disabledText = config.disabledText,
    zoneActiveText = config.zoneActiveText,
    _config$hasThumbs = config.hasThumbs,
    hasThumbs = _config$hasThumbs === void 0 ? true : _config$hasThumbs;
  var setFieldValue = formik.setFieldValue;
  var selectedValue = value;
  var _useDropzone = (0, _reactDropzone.useDropzone)(_extends({}, prepareFileUploderOptions(_extends({}, options), formik, config))),
    acceptedFiles = _useDropzone.acceptedFiles,
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    isDragActive = _useDropzone.isDragActive,
    isDragAccept = _useDropzone.isDragAccept,
    isDragReject = _useDropzone.isDragReject;
  var thumbs1 = acceptedFiles.map(function (file) {
    return Object.assign(file, {
      url: URL.createObjectURL(file)
    });
  });
  console.log(thumbs1);
  thumbs = thumbs.concat(thumbs1);
  thumbs = thumbs.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });
  var style = (0, _react.useMemo)(function () {
    return _extends({}, baseStyle, isDragActive ? activeStyle : {}, isDragAccept ? acceptStyle : {}, isDragReject ? rejectStyle : {});
  }, [isDragActive, isDragReject]);
  return /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", getRootProps({
    style: style
  }), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), isDragActive ? /*#__PURE__*/_react["default"].createElement("p", null, "Drop the files here ...") : /*#__PURE__*/_react["default"].createElement("p", null, "Drag 'n' drop some files here, or click to select files")), /*#__PURE__*/_react["default"].createElement("aside", {
    style: thumbsContainer
  }, thumbs && (hasThumbs ? thumbs.map(function (file) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: thumb,
      key: file.id
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: thumbInner
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: file.url,
      alt: file.label,
      style: img
    })));
  }) : /*#__PURE__*/_react["default"].createElement("ul", null, thumbs.map(function (file) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: file.id
    }, file.url);
  })))));
};
var _default = exports["default"] = _react["default"].memo(FileUploader);
module.exports = exports.default;