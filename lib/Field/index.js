"use strict";

var _registry = require("../registry");
var _Text = _interopRequireDefault(require("./Text"));
var _Radio = _interopRequireDefault(require("./Radio"));
var _Button = _interopRequireDefault(require("./Button"));
var _Switch = _interopRequireDefault(require("./Switch"));
var _Wysiwyg = _interopRequireDefault(require("./Wysiwyg"));
var _Textarea = _interopRequireDefault(require("./Textarea"));
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _InnerText = _interopRequireDefault(require("./InnerText"));
var _CodeEditor = _interopRequireDefault(require("./CodeEditor"));
var _ReactSelect = _interopRequireDefault(require("./ReactSelect"));
var _FileUploader = _interopRequireDefault(require("./FileUploader"));
var _Autocomplete = _interopRequireDefault(require("./Autocomplete"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
['text', 'email', 'password', 'number', 'url', 'date'].map(function (type) {
  return (0, _registry.registerField)(type, _Text["default"]);
});
(0, _registry.registerField)('radio', _Radio["default"]);
(0, _registry.registerField)('button', _Button["default"]);
(0, _registry.registerField)('switch', _Switch["default"]);
(0, _registry.registerField)('wysiwyg', _Wysiwyg["default"]);
(0, _registry.registerField)('textarea', _Textarea["default"]);
(0, _registry.registerField)('checkbox', _Checkbox["default"]);
(0, _registry.registerField)('inner-text', _InnerText["default"]);
(0, _registry.registerField)('code-editor', _CodeEditor["default"]);
(0, _registry.registerField)('react-select', _ReactSelect["default"]);
(0, _registry.registerField)('autocomplete', _Autocomplete["default"]);
(0, _registry.registerField)('file-uploader', _FileUploader["default"]);