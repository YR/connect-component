'use strict';

const isEqual = require('@yr/is-equal');
const runtime = require('@yr/runtime');

module.exports = function select(inputSelectors, computeResult) {
  const n = inputSelectors.length;
  let prevInputs, prevProps, prevResult;

  return function generateProps(context, props) {
    const inputs = new Array(n);
    let shouldCompute = !isEqual(props, prevProps);
    let result;
    console.log(shouldCompute)

    for (let i = 0; i < n; i++) {
      inputs[i] = inputSelectors[i](context, props);
      if (prevInputs !== undefined && !isEqual(inputs[i], prevInputs[i])) {
        shouldCompute = true;
      }
    }
    console.log(shouldCompute, inputs)
    result = prevResult !== undefined && !shouldCompute ? prevResult : computeResult.apply(inputs.concat(props));

    if (runtime.isBrowser) {
      prevInputs = inputs;
      prevProps = props;
      prevResult = result;
    }

    return result;
  };
};
