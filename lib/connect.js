'use strict';

var _require = require('@yr/component'),
    Component = _require.Component,
    define = _require.define;

var Connector = define({
  shouldComponentUpdate: function shouldComponentUpdate() {
    return true;
  },
  render: function render(props, state, context) {}
});

module.exports = function connect(generateProps) {
  return function wrapWithConnect(ComponentToWrap) {};
};