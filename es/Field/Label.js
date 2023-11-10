var _excluded = ["children"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
var Label = function Label(_ref) {
  var children = _ref.children,
    attributes = _objectWithoutPropertiesLoose(_ref, _excluded);
  return children ? /*#__PURE__*/React.createElement("label", attributes, children) : null;
};
export default React.memo(Label);