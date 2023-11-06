function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import _ from 'lodash';
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { changeHandler, setFieldValueWrapper } from '../utils';
// import '../css/autocomplete.css';
var Autocomplete = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Autocomplete, _Component);
  function Autocomplete(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var _this$props$initialSu = _this.props.initialSuggestions,
      initialSuggestions = _this$props$initialSu === void 0 ? [] : _this$props$initialSu;
    _this.state = {
      suggestions: initialSuggestions
    };
    _this.initOptions();
    return _this;
  }
  var _proto = Autocomplete.prototype;
  _proto.initOptions = function initOptions() {
    this.prepareCallbacks();
    this.autosuggestOptions = _.assign({
      inputProps: {}
    }, this.props.config.options, this.callbacks);
    this.inputClassName = this.autosuggestOptions.inputProps.className || 'react-autosuggest__input';
  };
  _proto.prepareCallbacks = function prepareCallbacks() {
    var _this2 = this;
    var _this$props = this.props,
      formik = _this$props.formik,
      config = _this$props.config;
    var stateUpdater = this.setState.bind(this);
    this.callbacks = _.reduce(Autocomplete.autosuggestCallbackKeys, function (callbacks, key) {
      if (_.isFunction(config.options[key])) {
        callbacks[key] = config.options[key].bind(_this2, formik, config, {
          stateUpdater: stateUpdater
        });
      }
      return callbacks;
    }, {});
  };
  _proto.render = function render() {
    var _this$props2 = this.props,
      config = _this$props2.config,
      formik = _this$props2.formik,
      error = _this$props2.error,
      value = _this$props2.value;
    var name = config.name;
    var setFieldValue = formik.setFieldValue,
      handleBlur = formik.handleBlur;
    this.autosuggestOptions.inputProps.name = name;
    this.autosuggestOptions.inputProps.value = value || '';
    this.autosuggestOptions.inputProps.onChange = function (event, _ref) {
      var newValue = _ref.newValue,
        method = _ref.method;
      return changeHandler(setFieldValueWrapper(setFieldValue, name), formik, config, newValue);
    };
    this.autosuggestOptions.inputProps.onBlur = handleBlur.bind(this);
    this.autosuggestOptions.inputProps.className = this.inputClassName + (error ? ' is-invalid ' : '');
    return /*#__PURE__*/React.createElement(Autosuggest, _extends({
      suggestions: this.state.suggestions
    }, this.autosuggestOptions));
  };
  return Autocomplete;
}(Component);
_defineProperty(Autocomplete, "autosuggestCallbackKeys", ['onSuggestionsFetchRequested', 'onSuggestionsClearRequested', 'getSuggestionValue', 'renderSuggestion', 'onSuggestionSelected', 'onSuggestionHighlighted', 'shouldRenderSuggestions', 'renderSectionTitle', 'getSectionSuggestions', 'renderInputComponent', 'renderSuggestionsContainer']);
export default React.memo(Autocomplete);