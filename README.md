[![NPM Version](https://img.shields.io/npm/v/@yr/connect-component.svg?style=flat)](https://npmjs.org/package/@yr/connect-component)
[![Build Status](https://img.shields.io/travis/YR/connect-component.svg?style=flat)](https://travis-ci.org/YR/connect-component?branch=master)

Helper components for generating [@yr/component](https://github.com/YR/component) containers that can efficiently respond to data updates.

## Usage

```js
const { connect, Provider, select, Subscription } = require('@yr/connect-component');
const { define, el, render } = require('@yr/component');

const data = { bar: 'bar' };
const subscription = new Subscription(data);
const root = document.getElementById('root');
const barSelector = (context, props) => {
  return context.data.bar;
};
const App = connect(select([barSelector], (bar, props) => {
  return {
    text: bar
  };
}))(
  define({
    render(props, state, context) {
      return el('div', null, props.text);
    }
  })
);
const AppProvider = Provider.create();

render(el(AppProvider, { data, subscription }, el(App)), root);
//=> <div>bar</div>

data.bar = 'foo';
subscription.notify();
//=> <div>foo</div>
```

## API

### Provider
`Provider` is a higher-order component used to define the shape and content of the `context` object passed to it's children. By default, it defines both `data` and `subscription`, though additional custom properties can also be defined.

#### `create(contextShape: Object): Class`
Create component definition with `contextShape`, then pass their implementation as render props:

```js
const { PropTypes } = require('@yr/component');

const App = define({
  render(props, state, { data, locale }) {
    return el('div', null, `${data.bar} ${locale.foo}`)
  }
});
const AppProvider = Provider.create({ locale: PropTypes.object });
const locale = {
  foo: 'le foo'
};

render(el(AppProvider, { data, locale }, el(App)), root);
//=> <div>bar le foo</div>
```

### Subscription
Instances of `Subscription` are simple event dispatchers used to notify container components about potential data changes.

#### `constructor(data: Object): Subscription`
Instantiate instance with a reference to a `data` object:

```js
const subscription = new Subscription(data);
```

#### `notify()`
Notify all container components about potential data changes.

After a `Subscription` instance has been passed to `Provider`, calling `notify()` will signal to all connected container components that `data` has been updated:

```js
data.bar = 'foo';
subscription.notify();

// Or wire automatically to a complex data object:
data.onUpdate(() => {
  subscription.notify();
});
```

### connect
The `connect()` factory function allows a component to be wrapped in a container component that will efficiently re-render based on data updates.

#### connect(generateProps: (context: Object, props: Object) => Object): (ComponentToWrap) => Class
Create container component factory that will pass the results of `generateProps` to it's wrapped component.

`generateProps` will be passed the current `context`, and any passed `props`:

```js
const ContainerFactory = connect((context, props) => {
  return {
    foo: context.data[props.id]
  };
});
```

Invoking the factory with a component definition (`ComponentToWrap`) will return a new container component definition:

```js
const Container = ContainerFactory(
  define({
    render(props, state, context) {
      return el('div', null, props.foo);
    }
  })
);
```

Instances of this container are responsible for controlling whether `ComponentToWrap` should render based on the results of invoking `generateProps`. If the props returned by `generateProps` have not changed since the last update, `ComponentToWrap` will not be re-rendered.

#### select(inputSelectors: Array<(context, props) => any>, computeResult: (inputs: Array<any>, props: Object) => Object): (context, props) => Object
Create a `generateProps` function, based on one or more input *selector* functions, that will return cached results if passed the same `props` and if all input selector functions return the same values:

```js
const userSelector = (context, props) => {
  return context.data[props.id];
};
const generateProps = select([userSelector], ([user], props) => {
  return {
    user
  };
});
const results1 = generateProps({ data }, { id: 'foo' });
const results2 = generateProps({ data }, { id: 'foo' });
console.log(results1 === results2); //=> true
```