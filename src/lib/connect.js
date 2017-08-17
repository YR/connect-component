'use strict';

const { define, el } = require('@yr/component');
const isEqual = require('@yr/is-equal');
const runtime = require('@yr/runtime');
const Subscription = require('./Subscription');

/**
 * Factory for wrapping components with connect functionality
 * @param {Function} generateProps
 * @returns {Function}
 */
module.exports = function connect(generateProps) {
  /**
   * Wrap 'ComponentToWrap' with connect component
   * @param {Class|Function} ComponentToWrap
   * @returns {Class}
   */
  return function wrapWithConnect(ComponentToWrap) {
    return define({
      displayName: 'DataStoreConnector',

      /**
       * Pseudo constructor
       * @param {Object} props
       * @param {Object} context
       */
      init(props, context) {
        const { data, subscription } = context;

        this.data = data;
        this.state = {
          props: generateProps(data, props)
        };
        if (runtime.isBrowser && subscription != null) {
          this.unsubscribe = subscription.subscribe(this.onNotify);
          this.subscription = new Subscription(data);
        }
      },

      /**
       * Handle 'data' update notification
       * @param {Object} data
       */
      onNotify(data) {
        this.setState({
          props: generateProps(data, this.props)
        });
      },

      /**
       * Retrieve context.
       * Replaces existing 'subscription' with local instance to enable control and ordering
       * of nested container rendering
       * @returns {Object}
       */
      getChildContext() {
        return {
          subscription: this.subscription
        };
      },

      /**
       * Handle render from parent (not called during mounting) during default render flow
       * @param {Object} nextProps
       * @param {Object} nextContext
       */
      componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
          props: generateProps(nextContext.data, nextProps)
        });
      },

      /**
       * Determine if component should render based on result of 'generateProps'.
       * If not rendering, manually notifies all connected child containers instead of relying on default render flow
       * @param {Object} nextProps
       * @param {Object} nextState
       * @param {Object} nextContext
       * @returns {Boolean}
       */
      shouldComponentUpdate(nextProps, nextState, nextContext) {
        const shouldUpdate = !isEqual(this.state.props, nextState.props);

        // No render, so notify connected children manually
        if (!shouldUpdate) {
          this.subscription.notify();
        }

        return shouldUpdate;
      },

      /**
       * Clean up on component unmount
       */
      componentWillUnmount() {
        if (this.unsubscribe !== undefined) {
          this.unsubscribe();
        }
        if (this.subscription !== undefined) {
          this.subscription.destroy();
        }
      },

      /**
       * Render wrapped component with result of 'generateProps'
       * @param {Object} props
       * @param {Object} state
       * @param {Object} context
       * @returns {Object}
       */
      render(props, state, context) {
        return el(ComponentToWrap, state.props);
      }
    });
  };
};
