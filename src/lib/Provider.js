'use strict';

const { Component, define, PropTypes } = require('@yr/component');
const assign = require('object-assign');
const Subscription = require('./Subscription');

const DEFAULT_CONTEXT_SHAPE = {
  data: PropTypes.object,
  subscription: PropTypes.object
};

module.exports = {
  /**
   * Create component definition with configurable 'contextShape'.
   * Defines child context based on passed props
   * @param {Object} contextShape
   * @returns {Class}
   */
  create(contextShape = {}) {
    const shape = assign({}, DEFAULT_CONTEXT_SHAPE, contextShape);

    Component.contextTypes = shape;

    return define({
      displayName: 'DataStoreProvider',
      propTypes: shape,

      getChildContext() {
        const context = {};

        for (const key in shape) {
          context[key] = this.props[key];
        }

        if (context.subscription === undefined) {
          context.subscription = new Subscription(context.data);
        }

        return context;
      },

      componentWillUnmount() {
        // TODO: destroy subscription?
      },

      render(props) {
        return Array.isArray(props.children) ? props.children[0] : props.children;
      }
    });
  }
};
