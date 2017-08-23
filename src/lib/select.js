'use strict';

const isEqual = require('@yr/is-equal');
const runtime = require('@yr/runtime');

module.exports = function select(inputSelectors, computeResult) {
  const n = inputSelectors.length;
  let prevInputs, prevProps, prevResult;

  return function generateProps(context, props) {
    const inputs = new Array(n);
    const isCached = prevResult !== undefined;
    let shouldCompute = !isCached;

    if (!isEqual(props, prevProps)) {
      shouldCompute = true;
    }

    for (let i = 0; i < n; i++) {
      inputs[i] = inputSelectors[i](context, props);
      if (prevInputs !== undefined && !isEqual(inputs[i], prevInputs[i])) {
        shouldCompute = true;
      }
    }

    const result =
      isCached && !shouldCompute
        ? prevResult
        : computeResult.call(computeResult, inputs, props);

    if (runtime.isBrowser) {
      prevInputs = inputs;
      prevProps = props;
      prevResult = result;
    }

    return result;
  };
};
