'use strict';

const assign = require('object-assign');
const Debug = require('debug');
const equal = require('@yr/is-equal');

const STORES = ['data', 'locale', 'settings'];
const IGNORE = ['ref', 'key', 'children'].concat(STORES);

const debug = Debug('yr:props');

module.exports = {
  bootstrap: true,

  /**
   * Instance factory factory
   * @param {Function} dataFactory
   * @param {Object} locales
   * @param {DataStore} settings
   * @returns {Function}
   */
  factory (dataFactory, locales, settings) {
    /**
     * Instance factory
     * @param {DataStore | DataStoreCursor} [data]
     * @param {Object} [props]
     * @returns {Object}
     */
    return function propsFactory (data, props) {
      data = data || dataFactory();
      props = assign({}, props);

      return assign(props, {
        clone: clone.bind(props),
        create: create.bind(props, propsFactory),
        data,
        destroy: destroy.bind(props),
        destroyed: false,
        extract: extract.bind(props),
        get: get.bind(props),
        isEqual: isEqual.bind(props),
        locale: null,
        update: data.update.bind(data),
        settings,
        setLocale: setLocale.bind(props, locales),
        toJSON: toJSON.bind(props)
      });
    };
  }
};

/**
 * Retrieve an object with cursor for use in Component
 * @param {Function} instanceFactory
 * @param {String} key
 * @param {Object} [props]
 * @returns {Object}
 */
function create (instanceFactory, key = '', props) {
  // Allow passing only props
  if ('string' != typeof key) {
    props = key;
    key = '';
  }

  const data = (key == '') ? this.data : this.data.createCursor(key);
  const instance = instanceFactory(data, props);

  instance.locale = this.locale;
  return instance;
}

/**
 * Clone instance
 * @param {Object} [props]
 * @returns {Props}
 */
function clone (props) {
  let instance = this.create(props);

  for (const prop in this) {
    if (!(prop in instance)) instance[prop] = this[prop];
  }

  return instance;
}

/**
 * Extract 'dataKeys' from this.data
 * @param {Array} dataKeys
 */
function extract (dataKeys) {
  // React freezes props, so test before trying to set new
  if (!Object.isFrozen(this)) {
    const data = this.data.get();

    if (data) {
      // Special case where cursor is an array and only one data key specified
      if (Array.isArray(data) && dataKeys.length == 1) {
        this[dataKeys[0]] = data;
      } else {
        dataKeys.forEach((key) => {
          if (key == 'bootstrap' && !('bootstrap' in this)) {
            this.bootstrap = module.exports.bootstrap;
          } else if (!(key in this) && data[key] != undefined) {
            this[key] = data[key];
          }
        });
      }
    }
  }
}

/**
 * Determine if 'props' is equal to this instance
 * @param {Props} props
 * @returns {Bool}
 */
function isEqual (props) {
  return equal(this, props, IGNORE, debug);
}

/**
 * Retrieve property value of nested stores with `key`
 * @param {String} [key]
 * @returns {Object}
 */
function get (key) {
  let value;

  if (key in this) return this[key];

  // Find in stores
  for (let i = 0, n = STORES.length; i < n; i++) {
    if ((value = this[STORES[i]].get(key)) != null) return value;
  }

  return value;
}

/**
 * Set locale for 'localeCode'
 * @param {Object} locales
 * @param {String} localeCode
 */
function setLocale (locales, localeCode) {
  this.locale = locales.get(localeCode);
}

/**
 * Retrieve serialisable object
 * @returns {Object}
 */
function toJSON () {
  return {
    data: this.data.toJSON(),
    locale: this.locale.toJSON(),
    settings: this.settings.toJSON()
  };
}

/**
 * Destroy
 */
function destroy () {
  this.data.destroy();
  this.data = this.locale = this.settings = null;
  this.destroyed = true;
  this.update = null;
}