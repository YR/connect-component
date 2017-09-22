'use strict';

const { Component, define, PropTypes } = require('@yr/component');
const runtime = require('@yr/runtime');
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
    const shape = Object.assign({}, DEFAULT_CONTEXT_SHAPE, contextShape);

    Component.contextTypes = shape;

    return define({
      displayName: 'DataStoreProvider',
      propTypes: shape,

      /**
       * Retrieve context.
       * Adds 'subscription' if not already passed
       * @returns {Object}
       */
      getChildContext() {
        const context = {};

        for (const key in shape) {
          context[key] = this.props[key];
        }

        if (context.subscription === undefined) {
          // Subscription has no purpose for server rendering
          context.subscription = runtime.isBrowser ? new Subscription(context.data) : {};
        }

        return context;
      },

      /**
       * Render passed child
       * @param {Object} props
       * @returns {Object}
       */
      render(props) {
        return Array.isArray(props.children) ? props.children[0] : props.children;
      }
    });
  }
};
