"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _Element = _interopRequireDefault(require("../Element"));
var _utils = require("../utils");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _shallowequal = _interopRequireDefault(require("shallowequal"));
var _excluded = ["name"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var tabPaneInvalid = {
  color: '#dc3545'
};
var tabPaneActiveInvalid = {
  color: '#fff',
  backgroundColor: '#dc3545',
  border: '1px solid #dc3545'
};
var Tabs = function Tabs(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config;
  var _config$elements = config.elements,
    elements = _config$elements === void 0 ? {} : _config$elements,
    _config$name = config.name,
    containerName = _config$name === void 0 ? '' : _config$name,
    _config$cardClass = config.cardClass,
    cardClass = _config$cardClass === void 0 ? 'card' : _config$cardClass,
    _config$cardBodyClass = config.cardBodyClass,
    cardBodyClass = _config$cardBodyClass === void 0 ? 'card-body' : _config$cardBodyClass,
    _config$rowClass = config.rowClass,
    rowClass = _config$rowClass === void 0 ? 'row' : _config$rowClass,
    _config$tabListClass = config.tabListClass,
    tabListClass = _config$tabListClass === void 0 ? 'nav flex-column nav-pills' : _config$tabListClass,
    _config$tabListItemCl = config.tabListItemClass,
    tabListItemClass = _config$tabListItemCl === void 0 ? 'nav-link' : _config$tabListItemCl,
    _config$tabContentCla = config.tabContentClass,
    tabContentClass = _config$tabContentCla === void 0 ? 'tab-content flutter-rjf-tab-content' : _config$tabContentCla,
    _config$tabColumnClas = config.tabColumnClass,
    tabColumnClass = _config$tabColumnClas === void 0 ? 'col-sm-12 col-md-3' : _config$tabColumnClas,
    _config$contentColumn = config.contentColumnClass,
    contentColumnClass = _config$contentColumn === void 0 ? 'col-sm-12 col-md-9' : _config$contentColumn,
    _config$tabActiveClas = config.tabActiveClass,
    tabActiveClass = _config$tabActiveClas === void 0 ? ' active ' : _config$tabActiveClas,
    _config$tabPaneClass = config.tabPaneClass,
    tabPaneClass = _config$tabPaneClass === void 0 ? 'tab-pane fade show' : _config$tabPaneClass;
  var tabContentEl = (0, _react.useRef)({});
  var _useState = (0, _react.useState)(_lodash["default"].first(_lodash["default"].keys(elements))),
    activeTab = _useState[0],
    setActiveTab = _useState[1];
  var _useState2 = (0, _react.useState)([]),
    isValid = _useState2[0],
    setIsValid = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    tabs = _useState3[0],
    setTabs = _useState3[1];
  var _useState4 = (0, _react.useState)({}),
    tabContent = _useState4[0],
    setTabContent = _useState4[1];
  var _useState5 = (0, _react.useState)(_lodash["default"].uniqueId('list-tab-')),
    tabId = _useState5[0];
  var tabValidations = (0, _lodash["default"])(isValid);
  (0, _react.useEffect)(function () {
    _lodash["default"].map(elements, function (tab, key) {
      var label = tab.label,
        content = tab.elements,
        active = tab.active,
        name = tab.name,
        comment = tab.comment,
        commentClass = tab.commentClass;
      setTabs(function (state) {
        var _extends2;
        return _extends({}, state, (_extends2 = {}, _extends2[key] = label, _extends2));
      });
      setTabContent(function (state) {
        var _extends3;
        return _extends({}, state, (_extends3 = {}, _extends3[key] = {
          name: name,
          content: content,
          comment: comment,
          commentClass: commentClass
        }, _extends3));
      });
      if (active) {
        setActiveTab(key);
      }
    });
  }, []);
  (0, _react.useEffect)(function () {
    var node = tabContentEl.current;
    var panes = _lodash["default"].map(node.children, function (child) {
      return child.querySelector('.is-invalid') !== null;
    });
    if (!(0, _shallowequal["default"])(isValid, panes)) {
      setIsValid(panes);
    }
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cardClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: cardBodyClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: rowClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: tabColumnClass
  }, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: tabId,
    className: tabListClass
  }, _lodash["default"].map(tabs, function (tab, key) {
    var tabInvalid = tabValidations.next().value === true;
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: key,
      href: null,
      className: tabListItemClass + (activeTab === key ? tabActiveClass : '') + (tabInvalid ? ' is-invalid ' : ''),
      style: tabInvalid ? activeTab === key ? tabPaneActiveInvalid : tabPaneInvalid : null,
      onClick: function onClick() {
        return setActiveTab(key);
      }
    }, tab);
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: contentColumnClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: tabContentEl,
    className: tabContentClass
  }, _lodash["default"].map(tabContent, function (_ref2, tabKey, index) {
    var _ref2$name = _ref2.name,
      tabName = _ref2$name === void 0 ? '' : _ref2$name,
      content = _ref2.content,
      comment = _ref2.comment,
      _ref2$commentClass = _ref2.commentClass,
      commentClass = _ref2$commentClass === void 0 ? 'text-muted d-block mb-3' : _ref2$commentClass;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: tabKey,
      className: tabPaneClass + " " + (activeTab === tabKey ? tabActiveClass : '')
    }, comment && /*#__PURE__*/_react["default"].createElement("small", {
      className: commentClass
    }, comment), _lodash["default"].map(content, function (_ref3, key) {
      var name = _ref3.name,
        rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
        key: key,
        config: _extends({}, rest, {
          name: (0, _utils.joinNames)(containerName, tabName, name)
        }),
        update: activeTab === tabKey
      });
    }));
  }))))));
};
Tabs.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    elements: _propTypes["default"].object.isRequired,
    cardClass: _propTypes["default"].string,
    cardBodyClass: _propTypes["default"].string,
    rowClass: _propTypes["default"].string,
    tabListClass: _propTypes["default"].string,
    tabListItemClass: _propTypes["default"].string,
    tabContentClass: _propTypes["default"].string,
    tabColumnClass: _propTypes["default"].string,
    contentColumnClass: _propTypes["default"].string,
    tabActiveClass: _propTypes["default"].string,
    tabPaneClass: _propTypes["default"].string
  })
} : {};
var _default = exports["default"] = Tabs;
module.exports = exports.default;