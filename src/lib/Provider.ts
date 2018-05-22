import { isBrowser } from '@yr/runtime';
import { Subscription } from './Subscription';
import React from 'react';
import PropTypes, { ValidationMap } from 'prop-types';

const DEFAULT_CONTEXT_SHAPE = {
  data: PropTypes.object,
  subscription: PropTypes.object
};

/**
 * Create component definition with configurable 'contextShape'.
 * Defines child context based on passed props
 * @param {Object} contextShape
 * @returns {DataStoreProvider}
 */
export function createProvider(contextShape: ValidationMap<any> = DEFAULT_CONTEXT_SHAPE) {
  const shape = Object.assign({}, DEFAULT_CONTEXT_SHAPE, contextShape);

  // @ts-ignore Ugly ugly ugly hack that is needed
  React.Component.contextTypes = shape;
  return class DataStoreProvider extends React.Component<any> {
    static contextTypes = shape;
    static childContextTypes = shape;
    /**
     * Retrieve context.
     * Adds 'subscription' if not already passed
     * @returns {Object}
     */
    getChildContext() {
      const context: { [key: string]: any } = {};

      for (const key in shape) {
        context[key] = this.props[key];
      }

      if (context.subscription === undefined) {
        // Subscription has no purpose for server rendering
        context.subscription = isBrowser ? new Subscription(context.data) : {};
      }

      return context;
    }

    render() {
      return Array.isArray(this.props.children) ? this.props.children[0] : this.props.children;
    }
  };
}
