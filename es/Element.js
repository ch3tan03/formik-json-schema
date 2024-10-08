import _ from 'lodash';
import { connect } from 'formik';
import React, { useEffect, useState } from 'react';
import ElementRenderer from './Renderer';
import { FIELD } from './registry';
import shallowequal from 'shallowequal';
var Element = function Element(_ref) {
  var config = _ref.config,
    update = _ref.update,
    formik = _ref.formik;
  var configSource = config.configSource,
    dataSource = config.dataSource;
  var _useState = useState(false),
    hasLoadedConfig = _useState[0],
    setHasLoadedConfig = _useState[1];
  var _useState2 = useState(dataSource ? false : true),
    hasLoadedData = _useState2[0],
    setHasLoadedData = _useState2[1];
  var _useState3 = useState(update !== false),
    hasMounted = _useState3[0],
    setHasMounted = _useState3[1];
  var _useState4 = useState(undefined),
    loadedConfig = _useState4[0],
    setLoadedConfig = _useState4[1];

  /**
   * After load data
   *
   * @param  {mixed} value
   * @return {void}
   */
  var loadDataAfter = function loadDataAfter(value) {
    return setHasLoadedData(true);
  };

  /**
   * After load config
   *
   * @param  {object} newConfig
   * @return {void}
   */
  var loadConfigAfter = function loadConfigAfter(newConfig) {
    setHasLoadedConfig(true);
    setLoadedConfig(_.assign({}, config, newConfig));
  };

  /**
   * On mount, load if there is a valid config source,
   * load the data from the config source and handle
   * whether future loads should be possible
   */
  useEffect(function () {
    if (!hasLoadedConfig && typeof configSource === 'function') {
      configSource(formik, config).then(loadConfigAfter)["catch"](function (err) {});
    }
    return function () {
      return setHasLoadedConfig(false);
    };
  }, []);

  /**
   * If the value of update changes or if the form is currently validating (during submission),
   * set that value for hasMounted => true
   */
  useEffect(function () {
    setHasMounted(function (hasMounted) {
      if (hasMounted) {
        return hasMounted;
      }
      return update !== false || formik.isValidating === true;
    });
  }, [update, formik.isValidating]);

  /**
   * If a valid dataSource exists, call the dataSource when the element is mounted.
   * Also, call this when initialValues have changed and the component is mounted
   *
   * The latter is useful when you update the data on the server and reinitialize the
   * values of the form top-down where the value of this particular field comes from a dataSource
   */
  useEffect(function () {
    if (typeof dataSource === 'function' && hasMounted) {
      dataSource(formik, config).then(loadDataAfter)["catch"](function (err) {});
    }
  }, [hasMounted, formik.initialValues]);
  return hasMounted && /*#__PURE__*/React.createElement(ElementRenderer, {
    config: loadedConfig || config,
    formik: formik
  });
};
export default connect(React.memo(Element, function (_ref2, nextProps) {
  var config = _ref2.config,
    formik = _ref2.formik,
    update = _ref2.update;
  return update === nextProps.update && shallowequal(config, nextProps.config) && formik.initialValues === nextProps.formik.initialValues && formik.isValidating === nextProps.formik.isValidating && formik.isSubmitting === nextProps.formik.isSubmitting;
}));