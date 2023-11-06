"use strict";

var _registry = require("../registry");
var _HtmlTag = _interopRequireDefault(require("./HtmlTag"));
var _Form = _interopRequireDefault(require("./Form"));
var _Tabs = _interopRequireDefault(require("./Tabs"));
var _Fieldset = _interopRequireDefault(require("./Fieldset"));
var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));
var _EditableGrid = _interopRequireDefault(require("./EditableGrid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _registry.registerContainer)('div', _HtmlTag["default"]);
(0, _registry.registerContainer)('html-tag', _HtmlTag["default"]);
(0, _registry.registerContainer)('form', _Form["default"]);
(0, _registry.registerContainer)('tabs', _Tabs["default"]);
(0, _registry.registerContainer)('fieldset', _Fieldset["default"]);
(0, _registry.registerContainer)('button-group', _ButtonGroup["default"]);
(0, _registry.registerContainer)('editable-grid', _EditableGrid["default"]);