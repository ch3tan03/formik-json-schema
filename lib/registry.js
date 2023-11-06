"use strict";

exports.__esModule = true;
exports.templates = exports.registerTemplate = exports.registerField = exports.registerContainer = exports.fields = exports["default"] = exports.containers = exports.TEMPLATE = exports.FIELD = exports.CONTAINER = void 0;
var CONTAINER = exports.CONTAINER = 'container';
var FIELD = exports.FIELD = 'field';
var TEMPLATE = exports.TEMPLATE = 'template';
var Registry = /*#__PURE__*/function () {
  function Registry() {
    this.mapping = {};
  }
  var _proto = Registry.prototype;
  _proto.get = function get(name) {
    var o = this.mapping[name];
    if (o == null) throw new Error('No object registered for: ' + name);
    return o;
  };
  _proto.register = function register(name, o) {
    this.mapping[name] = o;
  };
  return Registry;
}();
var fields = exports.fields = new Registry();
var registerField = exports.registerField = fields.register.bind(fields);
var containers = exports.containers = new Registry();
var registerContainer = exports.registerContainer = containers.register.bind(containers);
var templates = exports.templates = new Registry();
var registerTemplate = exports.registerTemplate = templates.register.bind(templates);
var _default = exports["default"] = Registry;