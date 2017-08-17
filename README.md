[![NPM Version](https://img.shields.io/npm/v/@yr/data-store-component.svg?style=flat)](https://npmjs.org/package/@yr/data-store-component)
[![Build Status](https://img.shields.io/travis/YR/data-store-component.svg?style=flat)](https://travis-ci.org/YR/data-store-component?branch=master)

Helper components for generating [@yr/component](https://github.com/YR/component) containers that can efficiently respond to data updates.

## Usage

```js
const { connect, Provider, Subscription } = require('@yr/data-store-component');
const { Component, define, el, PropTypes, render } = require('@yr/component');
const subscription = new Subscription(data);
const ChildContainer = connect((data, props) => {
  return {
    text: data.get('bar')
  };
})(
  define({
    render(props, state, context) {
      expect(data).to.equal(context.data);
      expect(subscription).to.not.equal(context.subscription);
      return el('span', null, props.text);
    }
  })
);
const ParentContainer = connect((data, props) => {
  return {
    text: data.get('foo')
  };
})(
  define({
    render(props, state, context) {
      return el('div', null, el('span', null, props.text), el(ChildContainer));
    }
  })
);

```

## API

#### `create (id: String, data: Object, options: Object): DataStore|FetchableDataStore`