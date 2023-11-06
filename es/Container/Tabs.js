var _excluded = ["name"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import _ from 'lodash';
import Element from '../Element';
import { joinNames } from '../utils';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';
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
  var tabContentEl = useRef({});
  var _useState = useState(_.first(_.keys(elements))),
    activeTab = _useState[0],
    setActiveTab = _useState[1];
  var _useState2 = useState([]),
    isValid = _useState2[0],
    setIsValid = _useState2[1];
  var _useState3 = useState({}),
    tabs = _useState3[0],
    setTabs = _useState3[1];
  var _useState4 = useState({}),
    tabContent = _useState4[0],
    setTabContent = _useState4[1];
  var _useState5 = useState(_.uniqueId('list-tab-')),
    tabId = _useState5[0];
  var tabValidations = _(isValid);
  useEffect(function () {
    _.map(elements, function (tab, key) {
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
  useEffect(function () {
    var node = tabContentEl.current;
    var panes = _.map(node.children, function (child) {
      return child.querySelector('.is-invalid') !== null;
    });
    if (!shallowequal(isValid, panes)) {
      setIsValid(panes);
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: cardClass
  }, /*#__PURE__*/React.createElement("div", {
    className: cardBodyClass
  }, /*#__PURE__*/React.createElement("div", {
    className: rowClass
  }, /*#__PURE__*/React.createElement("div", {
    className: tabColumnClass
  }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
    id: tabId,
    className: tabListClass
  }, _.map(tabs, function (tab, key) {
    var tabInvalid = tabValidations.next().value === true;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      href: null,
      className: tabListItemClass + (activeTab === key ? tabActiveClass : '') + (tabInvalid ? ' is-invalid ' : ''),
      style: tabInvalid ? activeTab === key ? tabPaneActiveInvalid : tabPaneInvalid : null,
      onClick: function onClick() {
        return setActiveTab(key);
      }
    }, tab);
  })))), /*#__PURE__*/React.createElement("div", {
    className: contentColumnClass
  }, /*#__PURE__*/React.createElement("div", {
    ref: tabContentEl,
    className: tabContentClass
  }, _.map(tabContent, function (_ref2, tabKey, index) {
    var _ref2$name = _ref2.name,
      tabName = _ref2$name === void 0 ? '' : _ref2$name,
      content = _ref2.content,
      comment = _ref2.comment,
      _ref2$commentClass = _ref2.commentClass,
      commentClass = _ref2$commentClass === void 0 ? 'text-muted d-block mb-3' : _ref2$commentClass;
    return /*#__PURE__*/React.createElement("div", {
      key: tabKey,
      className: tabPaneClass + " " + (activeTab === tabKey ? tabActiveClass : '')
    }, comment && /*#__PURE__*/React.createElement("small", {
      className: commentClass
    }, comment), _.map(content, function (_ref3, key) {
      var name = _ref3.name,
        rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
      return /*#__PURE__*/React.createElement(Element, {
        key: key,
        config: _extends({}, rest, {
          name: joinNames(containerName, tabName, name)
        }),
        update: activeTab === tabKey
      });
    }));
  }))))));
};
Tabs.propTypes = process.env.NODE_ENV !== "production" ? {
  config: PropTypes.shape({
    name: PropTypes.string,
    elements: PropTypes.object.isRequired,
    cardClass: PropTypes.string,
    cardBodyClass: PropTypes.string,
    rowClass: PropTypes.string,
    tabListClass: PropTypes.string,
    tabListItemClass: PropTypes.string,
    tabContentClass: PropTypes.string,
    tabColumnClass: PropTypes.string,
    contentColumnClass: PropTypes.string,
    tabActiveClass: PropTypes.string,
    tabPaneClass: PropTypes.string
  })
} : {};
export default Tabs;