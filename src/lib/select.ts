import { isEqual } from '@yr/is-equal';
import { isBrowser } from '@yr/runtime';

export type ComputeResultFunction = (selectors: any[], context?: any, props?: any) => any;

export function select(inputSelectors: Function[], computeResult: ComputeResultFunction) {
  const n = inputSelectors.length;
  let prevInputs: any, prevProps: any, prevResult: any;

  return function generateProps(context: any, props?: any) {
    const inputs = new Array(n);
    const isCached = prevResult !== undefined;
    let shouldCompute = !isCached;

    if (prevProps !== undefined && !isEqual(props, prevProps)) {
      shouldCompute = true;
    }

    for (let i = 0; i < n; i++) {
      inputs[i] = inputSelectors[i](context, props);
      if (prevInputs !== undefined && !isEqual(inputs[i], prevInputs[i])) {
        shouldCompute = true;
      }
    }

    const result = isCached && !shouldCompute ? prevResult : computeResult.call(computeResult, inputs, context, props);

    if (isBrowser) {
      prevInputs = inputs;
      prevProps = props;
      prevResult = result;
    }

    return result;
  };
}
