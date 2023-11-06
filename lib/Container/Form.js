"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireDefault(require("react"));
var _Element = _interopRequireDefault(require("../Element"));
var _utils = require("../utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formik = require("formik");
var _excluded = ["name"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Form = function Form(_ref) {
  var config = _ref.config;
  var _config$name = config.name,
    containerName = _config$name === void 0 ? '' : _config$name,
    elements = config.elements,
    _config$htmlClass = config.htmlClass,
    htmlClass = _config$htmlClass === void 0 ? 'form-horizontal' : _config$htmlClass,
    comment = config.comment,
    _config$commentClass = config.commentClass,
    commentClass = _config$commentClass === void 0 ? 'text-muted d-block mb-3' : _config$commentClass;
  return /*#__PURE__*/_react["default"].createElement(_formik.Form, {
    className: htmlClass
  }, comment && /*#__PURE__*/_react["default"].createElement("small", {
    className: commentClass
  }, comment), _lodash["default"].map(elements, function (_ref2, key) {
    var name = _ref2.name,
      config = _objectWithoutPropertiesLoose(_ref2, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
      key: key,
      config: _extends({}, config, {
        name: (0, _utils.getName)(config.type, name, containerName)
      })
    });
  }));
};
Form.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    htmlClass: _propTypes["default"].string,
    elements: _propTypes["default"].object.isRequired
  })
} : {};
var _default = exports["default"] = Form;
module.exports = exports.default;