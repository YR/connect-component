'use strict';

var assign = require('object-assign');
var Debug = require('debug');
var equal = require('@yr/is-equal');

var STORES = ['data', 'locale', 'settings'];
var IGNORE = ['ref', 'key', 'children'].concat(STORES);

var debug = Debug('yr:props');

module.exports = {
  bootstrap: true,

  /**
   * Instance factory factory
   * @param {Function} dataFactory
   * @param {Object} locales
   * @param {DataStore} settings
   * @returns {Function}
   */
  factory: function factory(dataFactory, locales, settings) {
    /**
     * Instance factory
     * @param {DataStore | DataStoreCursor} data
     * @param {Object} [props]
     * @returns {Object}
     */
    return function propsFactory(data, props) {
      data = data || dataFactory();
      props = assign({}, props);

      return assign(props, {
        clone: clone.bind(props),
        create: create.bind(props, propsFactory),
        data: data,
        destroy: destroy.bind(props),
        destroyed: false,
        extract: extract.bind(props),
        get: get.bind(props),
        isEqual: isEqual.bind(props),
        locale: null,
        update: data.update.bind(data),
        settings: settings,
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
function create(instanceFactory) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var props = arguments[2];

  // Allow passing only props
  if ('string' != typeof key) {
    props = key;
    key = '';
  }

  var data = key == '' ? this.data : this.data.createCursor(key);
  var instance = instanceFactory(data, props);

  instance.locale = this.locale;
  return instance;
}

/**
 * Clone instance
 * @param {Object} [props]
 * @returns {Props}
 */
function clone(props) {
  var instance = this.create(props);

  for (var prop in this) {
    if (!(prop in instance)) instance[prop] = this[prop];
  }

  return instance;
}

/**
 * Extract 'dataKeys' from this.data
 * @param {Array} dataKeys
 */
function extract(dataKeys) {
  var _this = this;

  // React freezes props, so test before trying to set new
  if (!Object.isFrozen(this)) {
    (function () {
      var data = _this.data.get();

      if (data) {
        // Special case where cursor is an array and only one data key specified
        if (Array.isArray(data) && dataKeys.length == 1) {
          _this[dataKeys[0]] = data;
        } else {
          dataKeys.forEach(function (key) {
            if (key == 'bootstrap' && !('bootstrap' in _this)) {
              _this.bootstrap = module.exports.bootstrap;
            } else if (!(key in _this) && data[key] != undefined) {
              _this[key] = data[key];
            }
          });
        }
      }
    })();
  }
}

/**
 * Determine if 'props' is equal to this instance
 * @param {Props} props
 * @returns {Bool}
 */
function isEqual(props) {
  return equal(this, props, IGNORE, debug);
}

/**
 * Retrieve property value of nested stores with `key`
 * @param {String} [key]
 * @returns {Object}
 */
function get(key) {
  var value = void 0;

  if (key in this) return this[key];

  // Find in stores
  for (var i = 0, n = STORES.length; i < n; i++) {
    if ((value = this[STORES[i]].get(key)) != null) return value;
  }

  return value;
}

/**
 * Set locale for 'localeCode'
 * @param {Object} locales
 * @param {String} localeCode
 */
function setLocale(locales, localeCode) {
  this.locale = locales.get(localeCode);
}

/**
 * Retrieve serialisable object
 * @returns {Object}
 */
function toJSON() {
  return {
    data: this.data.toJSON(),
    locale: this.locale.toJSON(),
    settings: this.settings.toJSON()
  };
}

/**
 * Destroy
 */
function destroy() {
  this.data.destroy();
  this.data = this.locale = this.settings = null;
  this.destroyed = true;
  this.update = null;
}