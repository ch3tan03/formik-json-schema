var _this = this;
var _excluded = ["isObject", "isSortable", "hasValue", "arrayValues"],
  _excluded2 = ["name", "label"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import _ from 'lodash';
import React from 'react';
import Element from '../Element';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import { joinNames } from '../utils';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
var onSortEnd = function onSortEnd(move, _ref) {
  var oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex;
  return move(oldIndex, newIndex);
};
var SortableItem = SortableElement(function (props) {
  return renderTableRow(props);
});
var SortableTableBody = SortableContainer(function (props) {
  return renderTableBody(props);
});
var SortableRowHandle = SortableHandle(function (props) {
  return renderSortableHandle(props);
});
var renderTableBody = function renderTableBody(_ref2) {
  var _ref2$isObject = _ref2.isObject,
    isObject = _ref2$isObject === void 0 ? false : _ref2$isObject,
    isSortable = _ref2.isSortable,
    hasValue = _ref2.hasValue,
    arrayValues = _ref2.arrayValues,
    rowProps = _objectWithoutPropertiesLoose(_ref2, _excluded);
  return /*#__PURE__*/React.createElement("tbody", null, hasValue ? _.map(arrayValues, function (value, index) {
    return isObject === false && isSortable ? /*#__PURE__*/React.createElement(SortableItem, _extends({
      key: index,
      index: index,
      rowIndex: index,
      value: value,
      isSortable: isSortable
    }, rowProps)) : renderTableRow(_extends({}, rowProps, {
      index: index,
      rowIndex: index,
      value: value,
      isObject: isObject
    }));
  }) : null);
};
var renderTableRow = function renderTableRow(_ref3) {
  var fieldArrayName = _ref3.fieldArrayName,
    elements = _ref3.elements,
    arrayActions = _ref3.arrayActions,
    rowIndex = _ref3.rowIndex,
    buttons = _ref3.buttons,
    isSortable = _ref3.isSortable,
    _ref3$value = _ref3.value,
    value = _ref3$value === void 0 ? {} : _ref3$value,
    _ref3$isObject = _ref3.isObject,
    isObject = _ref3$isObject === void 0 ? false : _ref3$isObject;
  return /*#__PURE__*/React.createElement("tr", {
    key: rowIndex
  }, isObject === false && isSortable && /*#__PURE__*/React.createElement(SortableRowHandle, null), _.map(elements, function (_ref4, key) {
    var name = _ref4.name,
      label = _ref4.label,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded2);
    return /*#__PURE__*/React.createElement("td", {
      key: key
    }, /*#__PURE__*/React.createElement(Element, {
      config: _extends({}, rest, {
        name: joinNames(fieldArrayName, rowIndex, name)
      })
    }));
  }), isObject === false && !!buttons && /*#__PURE__*/React.createElement("td", {
    style: {
      minWidth: 50
    }
  }, !!buttons.remove && (_.isFunction(buttons.remove) ? buttons.remove(arrayActions, rowIndex, value) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn remove",
    onClick: arrayActions.remove.bind(_this, rowIndex)
  }, buttons.remove)), !!buttons.duplicate && (_.isFunction(buttons.duplicate) ? buttons.duplicate(arrayActions, value, rowIndex) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn duplicate",
    onClick: arrayActions.push.bind(_this, value)
  }, buttons.duplicate))));
};
var renderSortableHandle = function renderSortableHandle(props) {
  return /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-grip-vertical"
  }));
};
var EditableGrid = function EditableGrid(_ref5) {
  var _ref5$config = _ref5.config,
    fieldArrayName = _ref5$config.name,
    _ref5$config$isObject = _ref5$config.isObject,
    isObject = _ref5$config$isObject === void 0 ? false : _ref5$config$isObject,
    elements = _ref5$config.elements,
    buttons = _ref5$config.buttons,
    _ref5$config$isSortab = _ref5$config.isSortable,
    isSortable = _ref5$config$isSortab === void 0 ? true : _ref5$config$isSortab,
    comment = _ref5$config.comment,
    _ref5$config$commentC = _ref5$config.commentClass,
    commentClass = _ref5$config$commentC === void 0 ? 'text-muted d-block mb-3' : _ref5$config$commentC,
    _ref5$config$tableCon = _ref5$config.tableContainerClass,
    tableContainerClass = _ref5$config$tableCon === void 0 ? 'table-responsive' : _ref5$config$tableCon,
    _ref5$config$tableCla = _ref5$config.tableClass,
    tableClass = _ref5$config$tableCla === void 0 ? 'table table-bordered flutter-editable-grid' : _ref5$config$tableCla,
    formik = _ref5.formik;
  var values = formik.values,
    errors = formik.errors,
    touched = formik.touched;
  var arrayFields = _.mapValues(_.assign({}, elements), function () {
    return '';
  });
  var arrayValues = _.get(values, fieldArrayName);
  var hasValue = _.size(arrayValues) > 0;
  var tableWidth = _.map(elements, 'width').reduce(function (sum, num) {
    return sum + num;
  }, 50) || '100%';
  var additionalColumnCount = isSortable ? 2 : 1;
  return /*#__PURE__*/React.createElement(FieldArray, {
    name: fieldArrayName,
    render: function render(arrayActions) {
      var bodyProps = {
        arrayValues: arrayValues,
        hasValue: hasValue,
        elements: elements,
        fieldArrayName: fieldArrayName,
        arrayActions: arrayActions,
        buttons: buttons,
        isSortable: isSortable,
        isObject: isObject
      };
      return /*#__PURE__*/React.createElement("div", {
        className: tableContainerClass
      }, comment && /*#__PURE__*/React.createElement("small", {
        className: commentClass
      }, comment), /*#__PURE__*/React.createElement("table", {
        className: tableClass,
        style: {
          width: tableWidth
        }
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, isObject === false && isSortable && /*#__PURE__*/React.createElement("th", null), _.map(elements, function (_ref6, key) {
        var label = _ref6.label,
          width = _ref6.width;
        return /*#__PURE__*/React.createElement("th", {
          key: key,
          style: {
            width: width
          }
        }, label);
      }), isObject === false && !!buttons && !!buttons.remove && /*#__PURE__*/React.createElement("th", null))), isObject === false && isSortable ? /*#__PURE__*/React.createElement(SortableTableBody, _extends({
        distance: 10,
        onSortEnd: onSortEnd.bind(_this, arrayActions.move),
        useDragHandle: true
      }, bodyProps)) : renderTableBody(bodyProps), /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, isObject === false && !!buttons && !!buttons.add && /*#__PURE__*/React.createElement("td", {
        colSpan: _.size(elements) + additionalColumnCount
      }, _.isFunction(buttons.add) ? buttons.add(arrayActions, arrayFields) : /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        onClick: arrayActions.push.bind(_this, arrayFields)
      }, buttons.add))))));
    }
  });
};
EditableGrid.propTypes = process.env.NODE_ENV !== "production" ? {
  config: PropTypes.shape({
    name: PropTypes.string.isRequired,
    elements: PropTypes.object.isRequired,
    buttons: PropTypes.exact({
      add: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      remove: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      duplicate: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    }),
    isSortable: PropTypes.bool,
    tableContainerClass: PropTypes.string,
    tableClass: PropTypes.string
  })
} : {};
export default EditableGrid;