import { isEqual } from '@yr/is-equal';
import { isBrowser } from '@yr/runtime';
import { Subscription } from './Subscription';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Factory for wrapping components with connect functionality
 * @param {Function} generateProps
 * @returns {Function}
 */
export function connect(generateProps: (context: any, props: any) => any) {
  /**
   * Wrap 'ComponentToWrap' with connect component
   * @returns {DataStoreConnector}
   */
  return function wrapWithConnect(ComponentToWrap: any) {
    return class DataStoreConnector extends React.Component<{}, { props: any }> {
      unsubscribe: () => void = () => {};
      subscription?: Subscription;

      static childContextTypes = {
        subscription: PropTypes.object
      };

      constructor(props: any, context?: any) {
        super(props, context);
        const { data, subscription } = context;
        this.state = {
          props: generateProps(context, props)
        };
        if (isBrowser && subscription != null) {
          this.unsubscribe = subscription.subscribe(this.onNotify);
          this.subscription = new Subscription(data);
        }
      }

      /**
       * Handle 'data' update notification
       */
      onNotify = () => {
        this.setState({
          props: generateProps(this.context, this.props)
        });
      };

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
      }

      /**
       * Handle render from parent (not called during mounting) during default render flow
       * @param {Object} nextProps
       * @param {Object} nextContext
       */
      componentWillReceiveProps(nextProps: any, nextContext: any) {
        this.setState({
          props: generateProps(nextContext, nextProps)
        });
      }

      /**
       * Determine if component should render based on result of 'generateProps'.
       * If not rendering, manually notifies all connected child containers instead of relying on default render flow
       */
      shouldComponentUpdate(_nextProps: any, nextState: any): boolean {
        const shouldUpdate = !isEqual(this.state.props, nextState.props);

        // No render, so notify connected children manually
        if (!shouldUpdate && this.subscription !== undefined) {
          this.subscription.notify();
        }

        return shouldUpdate;
      }

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
      }

      /**
       * Render wrapped component with result of 'generateProps'
       */
      render() {
        return <ComponentToWrap {...this.state.props} />;
      }
    };
  };
}
