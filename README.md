[![NPM Version](https://img.shields.io/npm/v/@yr/data-store-component-props.svg?style=flat)](https://npmjs.org/package/@yr/data-store-component-props)
[![Build Status](https://img.shields.io/travis/YR/data-store-component-props.svg?style=flat)](https://travis-ci.org/YR/data-store-component-props?branch=master)

Props for using [@yr/data-store](https://github.com/YR/data-store) with [@yr/component](https://github.com/YR/component)

#### `bootstrap: Boolean`
Set bootstrap phase (default `true`)

#### `factory(dataFactory: Function, locales: Object, settings: DataStore): Function`
A factory function returning a props instance factory function to be used for creating props instances. The instance factory has the following signature: 

`propsFactory([data: DataStore|DataStoreCursor], [props: Object]): Object`

```js
const Props = require('@yr/data-store-component-props');
const dataStore = require(''@yr/data-store);
const propsFactory = Props.factory(function dataFactory () {
  return dataStore.create();
}, locales, settings);
```

### Props instance

#### `create([key: String], [props: Object]): Object`
Create an new props instance with data cursor at `key` and additional `props`. Omitting `key` will use the parent instance's existing data cursor.

#### `clone([props: Object]): Object`
Create a cloned instance with optional additional `props`.

#### `setLocale(localeCode: String)`
Set the instance's `locale` property based on passed `localeCode`. `instance.locale` will be an instance of `DataStore`.

#### `get(key: String):*`
Retrieve value of `key` from the props instance directly, or one of it's nested stores (`data`, `locale`, or `settings`).

#### `destroy()`
Destroy instance.