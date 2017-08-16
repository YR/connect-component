'use strict';

const { define, el } = require('@yr/component');

module.exports = function connect(generateProps) {
  return function wrapWithConnect(ComponentToWrap) {
    return define({
      displayName: 'DataStoreConnector',

      init(props, context) {
        this.data = context.data;
        this.state = {
          props: generateProps(this.data, props)
        };
      },

      onNotify(data) {
        this.setState({
          props: generateProps(data, this.props)
        })
      },

      componentDidMount() {
        this.unsubscribe = this.context.subscription.subscribe(this.onNotify);
      },

      // Handle render from parent (not called during mounting)
      componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
          props: generateProps(nextContext.data, nextProps)
        });
      },

      shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
      },

      componentWillUnmount() {
        if (this.unsubscribe !== undefined) {
          this.unsubscribe();
        }
      },

      render(props, state, context) {
        return el(ComponentToWrap, state.props);
      }
    });

  }
};