function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import _ from 'lodash';
import when from '@flipbyte/when-condition';
import { FIELD } from './registry';
export var setFieldValueWrapper = function setFieldValueWrapper(setFieldValue, name) {
  return function (value) {
    return setFieldValue(name, value);
  };
};
export var joinNames = function joinNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return _.join(_.filter(args, function (arg) {
    return _.isString(arg) && arg || _.isInteger(arg);
  }), '.');
};
export var getName = function getName(type, name) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }
  return type === FIELD && !name ? null : joinNames.apply(void 0, args.concat([name]));
};

/**
 * Handle Change and trigger callback if provided
 *
 * @param  {function} handler
 * @param  {object} formikProps
 * @param  {object} config
 * @param  {object} data
 * @param  {string} key
 * @return {void}
 */
export var changeHandler = function changeHandler(handler, formikProps, config, data, key) {
  if (key === void 0) {
    key = 'onChange';
  }
  handler(data);
  _.isFunction(config[key]) && config[key](formikProps, config, data);
};

/**
 * Recurively prepare a complete validation schema array for yup-schema from individual
 * validation arrays passed to fields
 *
 * @param  {array} schema
 * @return {array}
 */
export var prepareValidationSchema = function prepareValidationSchema(schema) {
  var type = schema.type,
    elements = schema.elements,
    name = schema.name,
    renderer = schema.renderer,
    validation = schema.validation,
    _schema$prefixNameToE = schema.prefixNameToElement,
    prefixNameToElement = _schema$prefixNameToE === void 0 ? false : _schema$prefixNameToE;
  if (type === FIELD && validation) {
    var _ref;
    return _ref = {}, _ref[name] = validation, _ref;
  }
  var elementSchema = _.reduce(elements, function (result, element, key) {
    if (result === void 0) {
      result = {};
    }
    return _extends({}, result, prepareValidationSchema(element));
  }, {});
  var result = {};
  if (renderer === 'editable-grid' && !_.isEmpty(elementSchema)) {
    result[name] = [['array', [['object', elementSchema]]]];
  } else if (!_.isEmpty(elementSchema) && name) {
    result[name] = [['object', elementSchema]];
  } else {
    result = _extends({}, result, elementSchema);
  }
  return result;
};