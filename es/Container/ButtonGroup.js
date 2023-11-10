import _ from 'lodash';
import React from 'react';
import Element from '../Element';
import PropTypes from 'prop-types';
var ButtonGroup = function ButtonGroup(_ref) {
  var _ref$config = _ref.config,
    elements = _ref$config.elements,
    _ref$config$buttonsCo = _ref$config.buttonsContainerClass,
    buttonsContainerClass = _ref$config$buttonsCo === void 0 ? 'buttons-container' : _ref$config$buttonsCo,
    _ref$config$buttonGro = _ref$config.buttonGroupClass,
    buttonGroupClass = _ref$config$buttonGro === void 0 ? 'btn-group' : _ref$config$buttonGro;
  return /*#__PURE__*/React.createElement("div", {
    className: buttonsContainerClass
  }, /*#__PURE__*/React.createElement("div", {
    className: buttonGroupClass
  }, _.map(elements, function (element, key) {
    return /*#__PURE__*/React.createElement(Element, {
      key: key,
      config: element
    });
  })));
};
ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  config: PropTypes.shape({
    buttonsContainerClass: PropTypes.string,
    buttonGroupClass: PropTypes.string,
    elements: PropTypes.object.isRequired
  })
} : {};
export default ButtonGroup;