'use strict';

var _require = require('@yr/component'),
    Component = _require.Component,
    define = _require.define,
    PropTypes = _require.PropTypes;

var assign = require('object-assign');

var DEFAULT_CONTEXT_SHAPE = {
  data: PropTypes.object
};

module.exports = {
  /**
   * Create component definition with configurable 'contextShape'.
   * Defines child context based on passed props
   * @param {Object} contextShape
   * @returns {Class}
   */
  create: function create() {
    var contextShape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var shape = assign({}, DEFAULT_CONTEXT_SHAPE, contextShape);

    Component.contextTypes = shape;

    return define({
      displayName: 'DataStoreProvider',
      propTypes: shape,

      getChildContext: function getChildContext() {
        var context = {};

        for (var key in shape) {
          context[key] = this.props[key];
        }

        return context;
      },
      render: function render(props) {
        return Array.isArray(props.children) ? props.children[0] : props.children;
      }
    });
  }
};