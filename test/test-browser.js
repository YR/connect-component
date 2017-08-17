'use strict';

/** BUDDY BUILT **/

if ('undefined' === typeof self) var self = this;
if ('undefined' === typeof global) var global = self;
var $m = self.$m = self.$m || {};
if ('browser' != 'browser') {
  var $req = require;
  require = function buddyRequire (id) {
    if (!$m[id]) return $req(id);
    if ('function' == typeof $m[id]) $m[id]();
    return $m[id].exports;
  };
} else {
  if ('undefined' === typeof process) var process = {browser:true, env:{NODE_ENV:'development'}};
  self.require = self.require || function buddyRequire (id) {
    if ($m[id]) {
      if ('function' == typeof $m[id]) $m[id]();
      return $m[id].exports;
    }

    if ('development' == 'development') {
      console.warn('module ' + id + ' not found');
    }
  };
}
(function (global) {
  var babelHelpers = global.babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };
})(typeof global === "undefined" ? self : global);

(function () {
/*== node_modules/@yr/runtime/index.js ==*/
$m['@yr/runtime'] = { exports: {} };

/**
 * Determine if the current runtime is server or browser
 * https://github.com/yr/runtime
 * @copyright Yr
 * @license MIT
 */

var yrruntime__isServer = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
var yrruntime__isBrowser = typeof window !== 'undefined';

$m['@yr/runtime'].exports.isServer = yrruntime__isServer;
$m['@yr/runtime'].exports.isBrowser = !yrruntime__isServer && yrruntime__isBrowser;
$m['@yr/runtime'].exports.isWorker = !yrruntime__isServer && !yrruntime__isBrowser;
/*≠≠ node_modules/@yr/runtime/index.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/transferFlags.js ==*/
$m['chai/lib/chai/utils/transferFlags'] = { exports: {} };
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, `lockSsfi`,
 * and `message`) will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAsseriton = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags to; usually a new assertion
 * @param {Boolean} includeAll
 * @namespace Utils
 * @name transferFlags
 * @api private
 */

$m['chai/lib/chai/utils/transferFlags'].exports = function transferFlags(assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll || flag !== 'object' && flag !== 'ssfi' && flag !== 'lockSsfi' && flag != 'message') {
      object.__flags[flag] = flags[flag];
    }
  }
};
/*≠≠ node_modules/chai/lib/chai/utils/transferFlags.js ≠≠*/


/*== node_modules/deep-eql/node_modules/type-detect/index.js ==*/
$m['type-detect#3.0.0'] = { exports: {} };
/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var typedetect300__getPrototypeOfExists = typeof Object.getPrototypeOf === 'function';
var typedetect300__promiseExists = typeof Promise === 'function';
var typedetect300__globalObject = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self; // eslint-disable-line
var typedetect300__isDom = 'location' in typedetect300__globalObject && 'document' in typedetect300__globalObject;
var typedetect300__htmlElementExists = typeof HTMLElement !== 'undefined';
var typedetect300__isArrayExists = typeof Array.isArray === 'function';
var typedetect300__symbolExists = typeof Symbol !== 'undefined';
var typedetect300__mapExists = typeof Map !== 'undefined';
var typedetect300__setExists = typeof Set !== 'undefined';
var typedetect300__weakMapExists = typeof WeakMap !== 'undefined';
var typedetect300__weakSetExists = typeof WeakSet !== 'undefined';
var typedetect300__dataViewExists = typeof DataView !== 'undefined';
var typedetect300__symbolIteratorExists = typedetect300__symbolExists && typeof Symbol.iterator !== 'undefined';
var typedetect300__symbolToStringTagExists = typedetect300__symbolExists && typeof Symbol.toStringTag !== 'undefined';
var typedetect300__setEntriesExists = typedetect300__setExists && typeof Set.prototype.entries === 'function';
var typedetect300__mapEntriesExists = typedetect300__mapExists && typeof Map.prototype.entries === 'function';
var typedetect300__setIteratorPrototype = typedetect300__getPrototypeOfExists && typedetect300__setEntriesExists && Object.getPrototypeOf(new Set().entries());
var typedetect300__mapIteratorPrototype = typedetect300__getPrototypeOfExists && typedetect300__mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var typedetect300__arrayIteratorExists = typedetect300__symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var typedetect300__arrayIteratorPrototype = typedetect300__arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var typedetect300__stringIteratorExists = typedetect300__symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var typedetect300__stringIteratorPrototype = typedetect300__stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var typedetect300__toStringLeftSliceLength = 8;
var typedetect300__toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
$m['type-detect#3.0.0'].exports = function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === typedetect300__globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (typedetect300__isArrayExists && Array.isArray(obj)) {
    return 'Array';
  }

  if (typedetect300__isDom) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (obj === typedetect300__globalObject.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (obj === typedetect300__globalObject.document) {
      return 'Document';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
     * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
     *  - IE <=10 === "[object MSMimeTypesCollection]"
     */
    if (obj === (typedetect300__globalObject.navigator || {}).mimeTypes) {
      return 'MimeTypeArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
     * Test: `Object.prototype.toString.call(navigator.plugins)``
     *  - IE <=10 === "[object MSPluginsCollection]"
     */
    if (obj === (typedetect300__globalObject.navigator || {}).plugins) {
      return 'PluginArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
     * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
     *  - IE <=10 === "[object HTMLBlockElement]"
     */
    if (typedetect300__htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'BLOCKQUOTE') {
      return 'HTMLQuoteElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltabledatacellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('td'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (typedetect300__htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TD') {
      return 'HTMLTableDataCellElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltableheadercellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('th'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (typedetect300__htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TH') {
      return 'HTMLTableHeaderCellElement';
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = typedetect300__symbolToStringTagExists && obj[Symbol.toStringTag];
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  if (typedetect300__getPrototypeOfExists) {
    var objPrototype = Object.getPrototypeOf(obj);
    /* ! Speed optimisation
    * Pre:
    *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
    *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
    * Post:
    *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
    *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
    */
    if (objPrototype === RegExp.prototype) {
      return 'RegExp';
    }

    /* ! Speed optimisation
    * Pre:
    *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
    * Post:
    *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
    */
    if (objPrototype === Date.prototype) {
      return 'Date';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
     * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
     * Test: `Object.prototype.toString.call(Promise.resolve())``
     *  - Chrome <=47 === "[object Object]"
     *  - Edge <=20 === "[object Object]"
     *  - Firefox 29-Latest === "[object Promise]"
     *  - Safari 7.1-Latest === "[object Promise]"
     */
    if (typedetect300__promiseExists && objPrototype === Promise.prototype) {
      return 'Promise';
    }

    /* ! Speed optimisation
    * Pre:
    *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
    * Post:
    *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
    */
    if (typedetect300__setExists && objPrototype === Set.prototype) {
      return 'Set';
    }

    /* ! Speed optimisation
    * Pre:
    *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
    * Post:
    *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
    */
    if (typedetect300__mapExists && objPrototype === Map.prototype) {
      return 'Map';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
    * Post:
    *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
    */
    if (typedetect300__weakSetExists && objPrototype === WeakSet.prototype) {
      return 'WeakSet';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
    * Post:
    *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
    */
    if (typedetect300__weakMapExists && objPrototype === WeakMap.prototype) {
      return 'WeakMap';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
     * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
     * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
     *  - Edge <=13 === "[object Object]"
     */
    if (typedetect300__dataViewExists && objPrototype === DataView.prototype) {
      return 'DataView';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
     * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
     * Test: `Object.prototype.toString.call(new Map().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (typedetect300__mapExists && objPrototype === typedetect300__mapIteratorPrototype) {
      return 'Map Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
     * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
     * Test: `Object.prototype.toString.call(new Set().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (typedetect300__setExists && objPrototype === typedetect300__setIteratorPrototype) {
      return 'Set Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
     * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
     * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (typedetect300__arrayIteratorExists && objPrototype === typedetect300__arrayIteratorPrototype) {
      return 'Array Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
     * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
     * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (typedetect300__stringIteratorExists && objPrototype === typedetect300__stringIteratorPrototype) {
      return 'String Iterator';
    }

    /* ! Speed optimisation
    * Pre:
    *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
    * Post:
    *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
    */
    if (objPrototype === null) {
      return 'Object';
    }
  }

  return Object.prototype.toString.call(obj).slice(typedetect300__toStringLeftSliceLength, typedetect300__toStringRightSliceLength);
};

$m['type-detect#3.0.0'].exports.typeDetect = $m['type-detect#3.0.0'].exports;
/*≠≠ node_modules/deep-eql/node_modules/type-detect/index.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/getActual.js ==*/
$m['chai/lib/chai/utils/getActual'] = { exports: {} };
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getActual
 */

$m['chai/lib/chai/utils/getActual'].exports = function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};
/*≠≠ node_modules/chai/lib/chai/utils/getActual.js ≠≠*/


/*== node_modules/get-func-name/index.js ==*/
$m['get-func-name'] = { exports: {} };

/* !
 * Chai - getFuncName utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getFuncName(constructorFn)
 *
 * Returns the name of a function.
 * When a non-function instance is passed, returns `null`.
 * This also includes a polyfill function if `aFunc.name` is not defined.
 *
 * @name getFuncName
 * @param {Function} funct
 * @namespace Utils
 * @api public
 */

var getfuncname__toString = Function.prototype.toString;
var getfuncname__functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
function getfuncname__getFuncName(aFunc) {
  if (typeof aFunc !== 'function') {
    return null;
  }

  var name = '';
  if (typeof Function.prototype.name === 'undefined' && typeof aFunc.name === 'undefined') {
    // Here we run a polyfill if Function does not support the `name` property and if aFunc.name is not defined
    var match = getfuncname__toString.call(aFunc).match(getfuncname__functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    // If we've got a `name` property we just use it
    name = aFunc.name;
  }

  return name;
}

$m['get-func-name'].exports = getfuncname__getFuncName;
/*≠≠ node_modules/get-func-name/index.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/getEnumerableProperties.js ==*/
$m['chai/lib/chai/utils/getEnumerableProperties'] = { exports: {} };
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getEnumerableProperties(object)
 *
 * This allows the retrieval of enumerable property names of an object,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getEnumerableProperties
 * @api public
 */

$m['chai/lib/chai/utils/getEnumerableProperties'].exports = function getEnumerableProperties(object) {
  var result = [];
  for (var name in object) {
    result.push(name);
  }
  return result;
};
/*≠≠ node_modules/chai/lib/chai/utils/getEnumerableProperties.js ≠≠*/


/*== node_modules/type-detect/index.js ==*/
$m['type-detect'] = { exports: {} };

/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var typedetect__promiseExists = typeof Promise === 'function';
var typedetect__globalObject = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self; // eslint-disable-line
var typedetect__isDom = 'location' in typedetect__globalObject && 'document' in typedetect__globalObject;
var typedetect__symbolExists = typeof Symbol !== 'undefined';
var typedetect__mapExists = typeof Map !== 'undefined';
var typedetect__setExists = typeof Set !== 'undefined';
var typedetect__weakMapExists = typeof WeakMap !== 'undefined';
var typedetect__weakSetExists = typeof WeakSet !== 'undefined';
var typedetect__dataViewExists = typeof DataView !== 'undefined';
var typedetect__symbolIteratorExists = typedetect__symbolExists && typeof Symbol.iterator !== 'undefined';
var typedetect__symbolToStringTagExists = typedetect__symbolExists && typeof Symbol.toStringTag !== 'undefined';
var typedetect__setEntriesExists = typedetect__setExists && typeof Set.prototype.entries === 'function';
var typedetect__mapEntriesExists = typedetect__mapExists && typeof Map.prototype.entries === 'function';
var typedetect__setIteratorPrototype = typedetect__setEntriesExists && Object.getPrototypeOf(new Set().entries());
var typedetect__mapIteratorPrototype = typedetect__mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var typedetect__arrayIteratorExists = typedetect__symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var typedetect__arrayIteratorPrototype = typedetect__arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var typedetect__stringIteratorExists = typedetect__symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
var typedetect__stringIteratorPrototype = typedetect__stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var typedetect__toStringLeftSliceLength = 8;
var typedetect__toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
$m['type-detect'].exports = function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === typedetect__globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (Array.isArray(obj) && (typedetect__symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
    return 'Array';
  }

  if (typedetect__isDom) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (obj === typedetect__globalObject.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (obj === typedetect__globalObject.document) {
      return 'Document';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
     * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
     *  - IE <=10 === "[object MSMimeTypesCollection]"
     */
    if (obj === (typedetect__globalObject.navigator || {}).mimeTypes) {
      return 'MimeTypeArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
     * Test: `Object.prototype.toString.call(navigator.plugins)``
     *  - IE <=10 === "[object MSPluginsCollection]"
     */
    if (obj === (typedetect__globalObject.navigator || {}).plugins) {
      return 'PluginArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
     * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
     *  - IE <=10 === "[object HTMLBlockElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'BLOCKQUOTE') {
      return 'HTMLQuoteElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltabledatacellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('td'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'TD') {
      return 'HTMLTableDataCellElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltableheadercellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('th'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (obj instanceof HTMLElement && obj.tagName === 'TH') {
      return 'HTMLTableHeaderCellElement';
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = typedetect__symbolToStringTagExists && obj[Symbol.toStringTag];
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  var objPrototype = Object.getPrototypeOf(obj);
  /* ! Speed optimisation
  * Pre:
  *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
  *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
  * Post:
  *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
  *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
  */
  if (objPrototype === RegExp.prototype) {
    return 'RegExp';
  }

  /* ! Speed optimisation
  * Pre:
  *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
  * Post:
  *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
  */
  if (objPrototype === Date.prototype) {
    return 'Date';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
   * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
   * Test: `Object.prototype.toString.call(Promise.resolve())``
   *  - Chrome <=47 === "[object Object]"
   *  - Edge <=20 === "[object Object]"
   *  - Firefox 29-Latest === "[object Promise]"
   *  - Safari 7.1-Latest === "[object Promise]"
   */
  if (typedetect__promiseExists && objPrototype === Promise.prototype) {
    return 'Promise';
  }

  /* ! Speed optimisation
  * Pre:
  *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
  * Post:
  *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
  */
  if (typedetect__setExists && objPrototype === Set.prototype) {
    return 'Set';
  }

  /* ! Speed optimisation
  * Pre:
  *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
  * Post:
  *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
  */
  if (typedetect__mapExists && objPrototype === Map.prototype) {
    return 'Map';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
  * Post:
  *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
  */
  if (typedetect__weakSetExists && objPrototype === WeakSet.prototype) {
    return 'WeakSet';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
  * Post:
  *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
  */
  if (typedetect__weakMapExists && objPrototype === WeakMap.prototype) {
    return 'WeakMap';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
   * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
   * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
   *  - Edge <=13 === "[object Object]"
   */
  if (typedetect__dataViewExists && objPrototype === DataView.prototype) {
    return 'DataView';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
   * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
   * Test: `Object.prototype.toString.call(new Map().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (typedetect__mapExists && objPrototype === typedetect__mapIteratorPrototype) {
    return 'Map Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
   * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
   * Test: `Object.prototype.toString.call(new Set().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (typedetect__setExists && objPrototype === typedetect__setIteratorPrototype) {
    return 'Set Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
   * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
   * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (typedetect__arrayIteratorExists && objPrototype === typedetect__arrayIteratorPrototype) {
    return 'Array Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
   * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
   * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (typedetect__stringIteratorExists && objPrototype === typedetect__stringIteratorPrototype) {
    return 'String Iterator';
  }

  /* ! Speed optimisation
  * Pre:
  *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
  * Post:
  *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
  */
  if (objPrototype === null) {
    return 'Object';
  }

  return Object.prototype.toString.call(obj).slice(typedetect__toStringLeftSliceLength, typedetect__toStringRightSliceLength);
};

$m['type-detect'].exports.typeDetect = $m['type-detect'].exports;
/*≠≠ node_modules/type-detect/index.js ≠≠*/


/*== node_modules/object-assign/index.js ==*/
$m['object-assign'] = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var objectassign__getOwnPropertySymbols = Object.getOwnPropertySymbols;
var objectassign__hasOwnProperty = Object.prototype.hasOwnProperty;
var objectassign__propIsEnumerable = Object.prototype.propertyIsEnumerable;

function objectassign__toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function objectassign__shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

$m['object-assign'].exports = objectassign__shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = objectassign__toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (objectassign__hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (objectassign__getOwnPropertySymbols) {
			symbols = objectassign__getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (objectassign__propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};
/*≠≠ node_modules/object-assign/index.js ≠≠*/


/*== node_modules/superagent/lib/should-retry.js ==*/
$m['superagent/lib/should-retry'] = { exports: {} };
var superagentlibshouldretry__ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
$m['superagent/lib/should-retry'].exports = function shouldRetry(err, res) {
  if (err && err.code && ~superagentlibshouldretry__ERROR_CODES.indexOf(err.code)) return true;
  if (res && res.status && res.status >= 500) return true;
  // Superagent timeout
  if (err && 'timeout' in err && err.code == 'ECONNABORTED') return true;
  if (err && 'crossDomain' in err) return true;
  return false;
};
/*≠≠ node_modules/superagent/lib/should-retry.js ≠≠*/


/*== node_modules/superagent/lib/utils.js ==*/
$m['superagent/lib/utils'] = { exports: {} };

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

$m['superagent/lib/utils'].exports.type = function (str) {
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

$m['superagent/lib/utils'].exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

$m['superagent/lib/utils'].exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

$m['superagent/lib/utils'].exports.cleanHeader = function (header, shouldStripCookie) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  if (shouldStripCookie) {
    delete header['cookie'];
  }
  return header;
};
/*≠≠ node_modules/superagent/lib/utils.js ≠≠*/


/*== node_modules/chai/lib/chai/uti...wnEnumerablePropertySymbols.js ==*/
$m['chai/lib/chai/utils/getOwnEnumerablePropertySymbols'] = { exports: {} };
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getOwnEnumerablePropertySymbols(object)
 *
 * This allows the retrieval of directly-owned enumerable property symbols of an
 * object. This function is necessary because Object.getOwnPropertySymbols
 * returns both enumerable and non-enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerablePropertySymbols
 * @api public
 */

$m['chai/lib/chai/utils/getOwnEnumerablePropertySymbols'].exports = function getOwnEnumerablePropertySymbols(obj) {
  if (typeof Object.getOwnPropertySymbols !== 'function') return [];

  return Object.getOwnPropertySymbols(obj).filter(function (sym) {
    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
  });
};
/*≠≠ node_modules/chai/lib/chai/uti...wnEnumerablePropertySymbols.js ≠≠*/


/*== node_modules/superagent/lib/is-object.js ==*/
$m['superagent/lib/is-object'] = { exports: {} };
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function superagentlibisobject__isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

$m['superagent/lib/is-object'].exports = superagentlibisobject__isObject;
/*≠≠ node_modules/superagent/lib/is-object.js ≠≠*/


/*== node_modules/check-error/index.js ==*/
$m['check-error'] = { exports: {} };

/* !
 * Chai - checkError utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .checkError
 *
 * Checks that an error conforms to a given set of criteria and/or retrieves information about it.
 *
 * @api public
 */

/**
 * ### .compatibleInstance(thrown, errorLike)
 *
 * Checks if two instances are compatible (strict equal).
 * Returns false if errorLike is not an instance of Error, because instances
 * can only be compatible if they're both error instances.
 *
 * @name compatibleInstance
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function checkerror__compatibleInstance(thrown, errorLike) {
  return errorLike instanceof Error && thrown === errorLike;
}

/**
 * ### .compatibleConstructor(thrown, errorLike)
 *
 * Checks if two constructors are compatible.
 * This function can receive either an error constructor or
 * an error instance as the `errorLike` argument.
 * Constructors are compatible if they're the same or if one is
 * an instance of another.
 *
 * @name compatibleConstructor
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function checkerror__compatibleConstructor(thrown, errorLike) {
  if (errorLike instanceof Error) {
    // If `errorLike` is an instance of any error we compare their constructors
    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
  } else if (errorLike.prototype instanceof Error || errorLike === Error) {
    // If `errorLike` is a constructor that inherits from Error, we compare `thrown` to `errorLike` directly
    return thrown.constructor === errorLike || thrown instanceof errorLike;
  }

  return false;
}

/**
 * ### .compatibleMessage(thrown, errMatcher)
 *
 * Checks if an error's message is compatible with a matcher (String or RegExp).
 * If the message contains the String or passes the RegExp test,
 * it is considered compatible.
 *
 * @name compatibleMessage
 * @param {Error} thrown error
 * @param {String|RegExp} errMatcher to look for into the message
 * @namespace Utils
 * @api public
 */

function checkerror__compatibleMessage(thrown, errMatcher) {
  var comparisonString = typeof thrown === 'string' ? thrown : thrown.message;
  if (errMatcher instanceof RegExp) {
    return errMatcher.test(comparisonString);
  } else if (typeof errMatcher === 'string') {
    return comparisonString.indexOf(errMatcher) !== -1; // eslint-disable-line no-magic-numbers
  }

  return false;
}

/**
 * ### .getFunctionName(constructorFn)
 *
 * Returns the name of a function.
 * This also includes a polyfill function if `constructorFn.name` is not defined.
 *
 * @name getFunctionName
 * @param {Function} constructorFn
 * @namespace Utils
 * @api private
 */

var checkerror__functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
function checkerror__getFunctionName(constructorFn) {
  var name = '';
  if (typeof constructorFn.name === 'undefined') {
    // Here we run a polyfill if constructorFn.name is not defined
    var match = String(constructorFn).match(checkerror__functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    name = constructorFn.name;
  }

  return name;
}

/**
 * ### .getConstructorName(errorLike)
 *
 * Gets the constructor name for an Error instance or constructor itself.
 *
 * @name getConstructorName
 * @param {Error|ErrorConstructor} errorLike
 * @namespace Utils
 * @api public
 */

function checkerror__getConstructorName(errorLike) {
  var constructorName = errorLike;
  if (errorLike instanceof Error) {
    constructorName = checkerror__getFunctionName(errorLike.constructor);
  } else if (typeof errorLike === 'function') {
    // If `err` is not an instance of Error it is an error constructor itself or another function.
    // If we've got a common function we get its name, otherwise we may need to create a new instance
    // of the error just in case it's a poorly-constructed error. Please see chaijs/chai/issues/45 to know more.
    constructorName = checkerror__getFunctionName(errorLike).trim() || checkerror__getFunctionName(new errorLike()); // eslint-disable-line new-cap
  }

  return constructorName;
}

/**
 * ### .getMessage(errorLike)
 *
 * Gets the error message from an error.
 * If `err` is a String itself, we return it.
 * If the error has no message, we return an empty string.
 *
 * @name getMessage
 * @param {Error|String} errorLike
 * @namespace Utils
 * @api public
 */

function checkerror__getMessage(errorLike) {
  var msg = '';
  if (errorLike && errorLike.message) {
    msg = errorLike.message;
  } else if (typeof errorLike === 'string') {
    msg = errorLike;
  }

  return msg;
}

$m['check-error'].exports = {
  compatibleInstance: checkerror__compatibleInstance,
  compatibleConstructor: checkerror__compatibleConstructor,
  compatibleMessage: checkerror__compatibleMessage,
  getMessage: checkerror__getMessage,
  getConstructorName: checkerror__getConstructorName
};
/*≠≠ node_modules/check-error/index.js ≠≠*/


/*== node_modules/assertion-error/index.js ==*/
$m['assertion-error'] = { exports: {} };
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function assertionerror__exclude() {
  var excludes = [].slice.call(arguments);

  function excludeProps(res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude() {
    var args = [].slice.call(arguments),
        i = 0,
        res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

$m['assertion-error'].exports = assertionerror__AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function assertionerror__AssertionError(message, _props, ssf) {
  var extend = assertionerror__exclude('name', 'message', 'stack', 'constructor', 'toJSON'),
      props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || arguments.callee;
  if (ssf && Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  } else {
    try {
      throw new Error();
    } catch (e) {
      this.stack = e.stack;
    }
  }
}

/*!
 * Inherit from Error.prototype
 */

assertionerror__AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

assertionerror__AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

assertionerror__AssertionError.prototype.constructor = assertionerror__AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

assertionerror__AssertionError.prototype.toJSON = function (stack) {
  var extend = assertionerror__exclude('constructor', 'toJSON', 'stack'),
      props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};
/*≠≠ node_modules/assertion-error/index.js ≠≠*/


/*== node_modules/component-emitter/index.js ==*/
$m['component-emitter'] = { exports: {} };

/**
 * Expose `Emitter`.
 */

if (typeof $m['component-emitter'] !== 'undefined') {
  $m['component-emitter'].exports = componentemitter__Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function componentemitter__Emitter(obj) {
  if (obj) return componentemitter__mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function componentemitter__mixin(obj) {
  for (var key in componentemitter__Emitter.prototype) {
    obj[key] = componentemitter__Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

componentemitter__Emitter.prototype.on = componentemitter__Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

componentemitter__Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

componentemitter__Emitter.prototype.off = componentemitter__Emitter.prototype.removeListener = componentemitter__Emitter.prototype.removeAllListeners = componentemitter__Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

componentemitter__Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

componentemitter__Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

componentemitter__Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};
/*≠≠ node_modules/component-emitter/index.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/flag.js ==*/
$m['chai/lib/chai/utils/flag'] = { exports: {} };
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .flag(object, key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @namespace Utils
 * @name flag
 * @api private
 */

$m['chai/lib/chai/utils/flag'].exports = function flag(obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};
/*≠≠ node_modules/chai/lib/chai/utils/flag.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/getProperties.js ==*/
$m['chai/lib/chai/utils/getProperties'] = { exports: {} };
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getProperties(object)
 *
 * This allows the retrieval of property names of an object, enumerable or not,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getProperties
 * @api public
 */

$m['chai/lib/chai/utils/getProperties'].exports = function getProperties(object) {
  var result = Object.getOwnPropertyNames(object);

  function addProperty(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }

  var proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty);
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};
/*≠≠ node_modules/chai/lib/chai/utils/getProperties.js ≠≠*/


/*== node_modules/pathval/index.js ==*/
$m['pathval'] = { exports: {} };

/* !
 * Chai - pathval utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

/**
 * ### .hasProperty(object, name)
 *
 * This allows checking whether an object has own
 * or inherited from prototype chain named property.
 *
 * Basically does the same thing as the `in`
 * operator but works properly with null/undefined values
 * and other primitives.
 *
 *     var obj = {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *
 * The following would be the results.
 *
 *     hasProperty(obj, 'str');  // true
 *     hasProperty(obj, 'constructor');  // true
 *     hasProperty(obj, 'bar');  // false
 *
 *     hasProperty(obj.str, 'length'); // true
 *     hasProperty(obj.str, 1);  // true
 *     hasProperty(obj.str, 5);  // false
 *
 *     hasProperty(obj.arr, 'length');  // true
 *     hasProperty(obj.arr, 2);  // true
 *     hasProperty(obj.arr, 3);  // false
 *
 * @param {Object} object
 * @param {String|Symbol} name
 * @returns {Boolean} whether it exists
 * @namespace Utils
 * @name hasProperty
 * @api public
 */

function pathval__hasProperty(obj, name) {
  if (typeof obj === 'undefined' || obj === null) {
    return false;
  }

  // The `in` operator does not work with primitives.
  return name in Object(obj);
}

/* !
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `internalGetPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be infinitely deep and nested.
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */

function pathval__parsePath(path) {
  var str = path.replace(/([^\\])\[/g, '$1.[');
  var parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function mapMatches(value) {
    var regexp = /^\[(\d+)\]$/;
    var mArr = regexp.exec(value);
    var parsed = null;
    if (mArr) {
      parsed = { i: parseFloat(mArr[1]) };
    } else {
      parsed = { p: value.replace(/\\([.\[\]])/g, '$1') };
    }

    return parsed;
  });
}

/* !
 * ## internalGetPathValue(obj, parsed[, pathDepth])
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(obj, parsed);
 *
 * @param {Object} object to search against
 * @param {Object} parsed definition from `parsePath`.
 * @param {Number} depth (nesting level) of the property we want to retrieve
 * @returns {Object|Undefined} value
 * @api private
 */

function pathval__internalGetPathValue(obj, parsed, pathDepth) {
  var temporaryValue = obj;
  var res = null;
  pathDepth = typeof pathDepth === 'undefined' ? parsed.length : pathDepth;

  for (var i = 0; i < pathDepth; i++) {
    var part = parsed[i];
    if (temporaryValue) {
      if (typeof part.p === 'undefined') {
        temporaryValue = temporaryValue[part.i];
      } else {
        temporaryValue = temporaryValue[part.p];
      }

      if (i === pathDepth - 1) {
        res = temporaryValue;
      }
    }
  }

  return res;
}

/* !
 * ## internalSetPathValue(obj, value, parsed)
 *
 * Companion function for `parsePath` that sets
 * the value located at a parsed address.
 *
 *  internalSetPathValue(obj, 'value', parsed);
 *
 * @param {Object} object to search and define on
 * @param {*} value to use upon set
 * @param {Object} parsed definition from `parsePath`
 * @api private
 */

function pathval__internalSetPathValue(obj, val, parsed) {
  var tempObj = obj;
  var pathDepth = parsed.length;
  var part = null;
  // Here we iterate through every part of the path
  for (var i = 0; i < pathDepth; i++) {
    var propName = null;
    var propVal = null;
    part = parsed[i];

    // If it's the last part of the path, we set the 'propName' value with the property name
    if (i === pathDepth - 1) {
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Now we set the property with the name held by 'propName' on object with the desired val
      tempObj[propName] = val;
    } else if (typeof part.p !== 'undefined' && tempObj[part.p]) {
      tempObj = tempObj[part.p];
    } else if (typeof part.i !== 'undefined' && tempObj[part.i]) {
      tempObj = tempObj[part.i];
    } else {
      // If the obj doesn't have the property we create one with that name to define it
      var next = parsed[i + 1];
      // Here we set the name of the property which will be defined
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Here we decide if this property will be an array or a new object
      propVal = typeof next.p === 'undefined' ? [] : {};
      tempObj[propName] = propVal;
      tempObj = tempObj[propName];
    }
  }
}

/**
 * ### .getPathInfo(object, path)
 *
 * This allows the retrieval of property info in an
 * object given a string path.
 *
 * The path info consists of an object with the
 * following properties:
 *
 * * parent - The parent object of the property referenced by `path`
 * * name - The name of the final property, a number if it was an array indexer
 * * value - The value of the property, if it exists, otherwise `undefined`
 * * exists - Whether the property exists or not
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} info
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

function pathval__getPathInfo(obj, path) {
  var parsed = pathval__parsePath(path);
  var last = parsed[parsed.length - 1];
  var info = {
    parent: parsed.length > 1 ? pathval__internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: pathval__internalGetPathValue(obj, parsed)
  };
  info.exists = pathval__hasProperty(info.parent, info.name);

  return info;
}

/**
 * ### .getPathValue(object, path)
 *
 * This allows the retrieval of values in an
 * object given a string path.
 *
 *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
 *
 * The following would be the results.
 *
 *     getPathValue(obj, 'prop1.str'); // Hello
 *     getPathValue(obj, 'prop1.att[2]'); // b
 *     getPathValue(obj, 'prop2.arr[0].nested'); // Universe
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} value or `undefined`
 * @namespace Utils
 * @name getPathValue
 * @api public
 */

function pathval__getPathValue(obj, path) {
  var info = pathval__getPathInfo(obj, path);
  return info.value;
}

/**
 * ### .setPathValue(object, path, value)
 *
 * Define the value in an object at a given string path.
 *
 * ```js
 * var obj = {
 *     prop1: {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *   , prop2: {
 *         arr: [ { nested: 'Universe' } ]
 *       , str: 'Hello again!'
 *     }
 * };
 * ```
 *
 * The following would be acceptable.
 *
 * ```js
 * var properties = require('tea-properties');
 * properties.set(obj, 'prop1.str', 'Hello Universe!');
 * properties.set(obj, 'prop1.arr[2]', 'B');
 * properties.set(obj, 'prop2.arr[0].nested.value', { hello: 'universe' });
 * ```
 *
 * @param {Object} object
 * @param {String} path
 * @param {Mixed} value
 * @api private
 */

function pathval__setPathValue(obj, path, val) {
  var parsed = pathval__parsePath(path);
  pathval__internalSetPathValue(obj, val, parsed);
  return obj;
}

$m['pathval'].exports = {
  hasProperty: pathval__hasProperty,
  getPathInfo: pathval__getPathInfo,
  getPathValue: pathval__getPathValue,
  setPathValue: pathval__setPathValue
};
/*≠≠ node_modules/pathval/index.js ≠≠*/


/*== lib/Subscription.js ==*/
$m['lib/Subscription'] = { exports: {} };

$m['lib/Subscription'].exports = function () {
  function Subscription(data) {
    babelHelpers.classCallCheck(this, Subscription);

    this.data = data;
    this.listeners = [];
  }

  Subscription.prototype.subscribe = function subscribe(listener) {
    var listeners = this.listeners;

    listeners.push(listener);
    return function unsubscribe() {
      var idx = listeners.indexOf(listener);

      if (idx > -1) {
        listeners.splice(idx, 1);
      }
    };
  };

  Subscription.prototype.notify = function notify() {
    var listeners = this.listeners.slice();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](this.data);
    }
  };

  Subscription.prototype.destroy = function destroy() {
    this.data = null;
    this.listeners = [];
  };

  return Subscription;
}();
/*≠≠ lib/Subscription.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/isNaN.js ==*/
$m['chai/lib/chai/utils/isNaN'] = { exports: {} };
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */

/**
 * ### .isNaN(value)
 *
 * Checks if the given value is NaN or not.
 *
 *     utils.isNaN(NaN); // true
 *
 * @param {Value} The value which has to be checked if it is NaN
 * @name isNaN
 * @api private
 */

function chailibchaiutilsisNaN__isNaN(value) {
  // Refer http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number
  // section's NOTE.
  return value !== value;
}

// If ECMAScript 6's Number.isNaN is present, prefer that.
$m['chai/lib/chai/utils/isNaN'].exports = Number.isNaN || chailibchaiutilsisNaN__isNaN;
/*≠≠ node_modules/chai/lib/chai/utils/isNaN.js ≠≠*/


/*== node_modules/ms/index.js ==*/
$m['ms'] = { exports: {} };
/**
 * Helpers.
 */

var ms__s = 1000;
var ms__m = ms__s * 60;
var ms__h = ms__m * 60;
var ms__d = ms__h * 24;
var ms__y = ms__d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

$m['ms'].exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return ms__parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? ms__fmtLong(val) : ms__fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function ms__parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * ms__y;
    case 'days':
    case 'day':
    case 'd':
      return n * ms__d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * ms__h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * ms__m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * ms__s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__fmtShort(ms) {
  if (ms >= ms__d) {
    return Math.round(ms / ms__d) + 'd';
  }
  if (ms >= ms__h) {
    return Math.round(ms / ms__h) + 'h';
  }
  if (ms >= ms__m) {
    return Math.round(ms / ms__m) + 'm';
  }
  if (ms >= ms__s) {
    return Math.round(ms / ms__s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__fmtLong(ms) {
  return ms__plural(ms, ms__d, 'day') || ms__plural(ms, ms__h, 'hour') || ms__plural(ms, ms__m, 'minute') || ms__plural(ms, ms__s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function ms__plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}
/*≠≠ node_modules/ms/index.js ≠≠*/


/*== node_modules/@yr/is-equal/index.js ==*/
$m['@yr/is-equal'] = { exports: {} };
/**
 * Determine whether two objects are conceptually equal
 * https://github.com/yr/is-equal
 * @copyright Yr
 * @license MIT
 */

/**
 * Determine if 'obj1' and 'obj2' are conceptually equal,
 * optionally ignoring properties in 'ignore'
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Array} [ignore]
 * @param {Debug} [debug]
 * @returns {Boolean}
 */

$m['@yr/is-equal'].exports = function isEqual(obj1, obj2, ignore, debug) {
  ignore = ignore || [];

  if (yrisequal__equal(obj1, obj2)) return true;

  if (yrisequal__isObject(obj1) && yrisequal__isObject(obj2)) {
    var keys1 = yrisequal__keys(obj1, ignore);
    var keys2 = yrisequal__keys(obj2, ignore);

    if (keys1.length != keys2.length) return false;

    for (var i = 0, n = keys1.length; i < n; i++) {
      var prop = keys1[i];
      var val1 = obj1[prop];
      var val2 = obj2[prop];

      if (!yrisequal__equal(val1, val2)) {
        if (debug) debug('"%s" not equal %s:%s', prop, val1, val2);
        return false;
      }
    }
    return true;
  }
  return false;
};

/**
 * Determine if 'val1' and 'val2' are equal
 * @param {Object} val1
 * @param {Object} val2
 * @returns {Boolean}
 */
function yrisequal__equal(val1, val2) {
  var type1 = typeof val1;
  var type2 = typeof val2;

  // Convert NaN to null
  if (type1 == 'number' && isNaN(val1)) val1 = null;
  if (type2 == 'number' && isNaN(val2)) val2 = null;

  return val1 === val2 ||
  // Handle null & undefined
  val1 == null && val2 == null || yrisequal__isEqualArray(val1, val2);
}

/**
 * Determine if 'obj' is an object
 * @param {Object} obj
 * @returns {Boolean}
 */
function yrisequal__isObject(obj) {
  var type = typeof obj;

  return 'object' == type && 'function' != type && !Array.isArray(obj);
}

/**
 * Retrieve non-ignored keys of 'obj'
 * @param {Object} obj
 * @param {Array} ignore
 * @returns {Array}
 */
function yrisequal__keys(obj, ignore) {
  return Object.keys(obj).filter(function (key) {
    // Ignore functions
    return 'function' != typeof obj[key] && !~ignore.indexOf(key);
  });
}

/**
 * Determine if arrays 'arr1' and 'arr2' are equal
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
function yrisequal__isEqualArray(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    var n1 = arr1.length;
    var n2 = arr2.length;

    if (n1 != n2) return false;
    // Equal if both empty
    if (n1 == 0 && n2 == 0) return true;

    // Not equal if items not strictly equal
    for (var i = 0; i < n1; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  return false;
}
/*≠≠ node_modules/@yr/is-equal/index.js ≠≠*/


/*== node_modules/chai/lib/chai/config.js ==*/
$m['chai/lib/chai/config'] = { exports: {} };
$m['chai/lib/chai/config'].exports = {

  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */

  includeStack: false,

  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */

  showDiff: true,

  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */

  truncateThreshold: 40,

  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */

  useProxy: true,

  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */

  proxyExcludedKeys: ['then', 'inspect', 'toJSON']
};
/*≠≠ node_modules/chai/lib/chai/config.js ≠≠*/


/*== node_modules/@yr/keys/index.js ==*/
$m['@yr/keys'] = { exports: {} };

/**
 * String/keys utilities
 * https://github.com/yr/keys
 * @copyright Yr
 * @license MIT
 */

$m['@yr/keys'].exports = {
  separator: '/',
  slice: yrkeys__slice,
  first: yrkeys__first,
  last: yrkeys__last,
  length: yrkeys__length,
  join: yrkeys__join,
  merge: yrkeys__merge,
  escape: yrkeys__escape,
  unescape: yrkeys__unescape
};

/**
 * Retrieve segments of 'key' based on slice indexes 'begin' and 'end'
 * @param {String} key
 * @param {Number} begin
 * @param {Number} [end]
 * @returns {String}
 */
function yrkeys__slice(key, begin, end) {
  if (!key || 'string' != typeof key) return key;

  var separator = $m['@yr/keys'].exports.separator;
  var leading = '';

  if (key.charAt(0) == separator) {
    key = key.slice(1);
    // Store if slicing from beginning
    leading = begin == 0 ? separator : '';
  }

  var segs = key.split(separator);

  return leading + segs.slice(begin, end).join(separator);
}

/**
 * Retrieve first segment of 'key'
 * @param {String} key
 * @returns {String}
 */
function yrkeys__first(key) {
  return yrkeys__slice(key, 0, 1);
}

/**
 * Retrieve last segment of 'key'
 * @param {String} key
 * @returns {String}
 */
function yrkeys__last(key) {
  return yrkeys__slice(key, -1);
}

/**
 * Retrieve number of key segments
 * @param {String} key
 * @returns {Number}
 */
function yrkeys__length(key) {
  if ('string' != typeof key) return 0;

  var separator = $m['@yr/keys'].exports.separator;

  // Trim leading '/'
  if (key.charAt(0) == separator) key = key.slice(1);

  if (!key) return 0;

  return key.split(separator).length;
}

/**
 * Join '...keys' with separator
 * @returns {String}
 */
function yrkeys__join() {
  var separator = $m['@yr/keys'].exports.separator;

  for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  var key = keys[0];

  for (var i = 1, n = keys.length; i < n; i++) {
    var k = keys[i];

    if (k !== null && k !== undefined && k !== '' && k !== separator) {
      // Handle numbers
      k = String(k);
      // Add leading slash for subsequent keys
      if (key.charAt(key.length - 1) !== separator && key !== '' && k.charAt(0) !== separator) {
        key += separator;
      }
      key += k;
    }
  }

  return key;
}

/**
 * Merge '...keys' with separator
 * taking care of overlaps
 * @returns {String}
 */
function yrkeys__merge() {
  var separator = $m['@yr/keys'].exports.separator;
  var keySegments = [];
  var k = void 0,
      idx = void 0,
      len = void 0,
      segs = void 0;

  for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    keys[_key2] = arguments[_key2];
  }

  for (var i = 0, n = keys.length; i < n; i++) {
    if (k = keys[i]) {
      len = keySegments.length;

      // Strip leading '/'
      if (k.charAt(0) == separator) {
        k = k.slice(1);
        // Store if first key
        if (!len) {
          keySegments.push(separator);
          len++;
        }
      }

      segs = k.split(separator);
      idx = len ? segs.indexOf(keySegments[len - 1]) : -1;
      // No overlap
      if (!len || idx > len || idx == -1) {
        keySegments = keySegments.concat(segs);
        // Overlap
      } else {
        for (var j = idx; j >= 0; j--) {
          // No match
          if (segs[j] != keySegments[len - 1 - (idx - j)]) break;
          // Matched up to beginning, so slice
          if (j == 0) segs = segs.slice(idx + 1);
        }
        keySegments = keySegments.concat(segs);
      }
    }
  }

  return yrkeys__join.apply(undefined, keySegments);
}

/**
 * Escape 'key' segment separators
 * @param {String} key
 * @returns {String}
 */
function yrkeys__escape(key) {
  return key.replace(/\//g, '___');
}

/**
 * Unescape escaped 'key' segment separators
 * @param {String} key
 * @returns {String}
 */
function yrkeys__unescape(key) {
  return key.replace(/___/g, $m['@yr/keys'].exports.separator);
}
/*≠≠ node_modules/@yr/keys/index.js ≠≠*/


/*== node_modules/chai/lib/chai/core/assertions.js ==*/
$m['chai/lib/chai/core/assertions'] = { exports: {} };
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

$m['chai/lib/chai/core/assertions'].exports = function (chai, _) {
  var Assertion = chai.Assertion,
      AssertionError = chai.AssertionError,
      flag = _.flag;

  /**
   * ### Language Chains
   *
   * The following are provided as chainable getters to improve the readability
   * of your assertions.
   *
   * **Chains**
   *
   * - to
   * - be
   * - been
   * - is
   * - that
   * - which
   * - and
   * - has
   * - have
   * - with
   * - at
   * - of
   * - same
   * - but
   * - does
   *
   * @name language chains
   * @namespace BDD
   * @api public
   */

  ['to', 'be', 'been', 'is', 'and', 'has', 'have', 'with', 'that', 'which', 'at', 'of', 'same', 'but', 'does'].forEach(function (chain) {
    Assertion.addProperty(chain);
  });

  /**
   * ### .not
   *
   * Negates all assertions that follow in the chain.
   *
   *     expect(function () {}).to.not.throw();
   *     expect({a: 1}).to.not.have.property('b');
   *     expect([1, 2]).to.be.an('array').that.does.not.include(3);
   *
   * Just because you can negate any assertion with `.not` doesn't mean you
   * should. With great power comes great responsibility. It's often best to
   * assert that the one expected output was produced, rather than asserting
   * that one of countless unexpected outputs wasn't produced. See individual
   * assertions for specific guidance.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.equal(1); // Not recommended
   *
   * @name not
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('not', function () {
    flag(this, 'negate', true);
  });

  /**
   * ### .deep
   *
   * Causes all `.equal`, `.include`, `.members`, `.keys`, and `.property`
   * assertions that follow in the chain to use deep equality instead of strict
   * (`===`) equality. See the `deep-eql` project page for info on the deep
   * equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.keys([{a: 1}]);
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * @name deep
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('deep', function () {
    flag(this, 'deep', true);
  });

  /**
   * ### .nested
   *
   * Enables dot- and bracket-notation in all `.property` and `.include`
   * assertions that follow in the chain.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *     expect({'.a': {'[b]': 'x'}}).to.nested.include({'\\.a.\\[b\\]': 'x'});
   *
   * `.nested` cannot be combined with `.own`.
   *
   * @name nested
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('nested', function () {
    flag(this, 'nested', true);
  });

  /**
   * ### .own
   *
   * Causes all `.property` and `.include` assertions that follow in the chain
   * to ignore inherited properties.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.property('b').but.not.own.property('b'); 
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * `.own` cannot be combined with `.nested`.
   *
   * @name own
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('own', function () {
    flag(this, 'own', true);
  });

  /**
   * ### .ordered
   *
   * Causes all `.members` assertions that follow in the chain to require that
   * members be in the same order.
   *
   *     expect([1, 2]).to.have.ordered.members([1, 2])
   *       .but.not.have.ordered.members([2, 1]);
   *
   * When `.include` and `.ordered` are combined, the ordering begins at the
   * start of both arrays.
   *
   *     expect([1, 2, 3]).to.include.ordered.members([1, 2])
   *       .but.not.include.ordered.members([2, 3]);
   *
   * @name ordered
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ordered', function () {
    flag(this, 'ordered', true);
  });

  /**
   * ### .any
   *
   * Causes all `.keys` assertions that follow in the chain to only require that
   * the target have at least one of the given keys. This is the opposite of
   * `.all`, which requires that the target have all of the given keys.
   *
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name any
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('any', function () {
    flag(this, 'any', true);
    flag(this, 'all', false);
  });

  /**
   * ### .all
   *
   * Causes all `.keys` assertions that follow in the chain to require that the
   * target have all of the given keys. This is the opposite of `.any`, which
   * only requires that the target have at least one of the given keys.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` are
   * added earlier in the chain. However, it's often best to add `.all` anyway
   * because it improves readability.
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name all
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('all', function () {
    flag(this, 'all', true);
    flag(this, 'any', false);
  });

  /**
   * ### .a(type[, msg])
   *
   * Asserts that the target's type is equal to the given string `type`. Types
   * are case insensitive. See the `type-detect` project page for info on the
   * type detection algorithm: https://github.com/chaijs/type-detect.
   *
   *     expect('foo').to.be.a('string');
   *     expect({a: 1}).to.be.an('object');
   *     expect(null).to.be.a('null');
   *     expect(undefined).to.be.an('undefined');
   *     expect(new Error).to.be.an('error');
   *     expect(Promise.resolve()).to.be.a('promise');
   *     expect(new Float32Array).to.be.a('float32array');
   *     expect(Symbol()).to.be.a('symbol');
   *
   * `.a` supports objects that have a custom type set via `Symbol.toStringTag`.
   *
   *     var myObj = {
   *       [Symbol.toStringTag]: 'myCustomType'
   *     };
   *
   *     expect(myObj).to.be.a('myCustomType').but.not.an('object');
   *
   * It's often best to use `.a` to check a target's type before making more
   * assertions on the same target. That way, you avoid unexpected behavior from
   * any assertion that does different things based on the target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.a`. However, it's often best to
   * assert that the target is the expected type, rather than asserting that it
   * isn't one of many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.an('array'); // Not recommended
   *
   * `.a` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     expect(1).to.be.a('string', 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.a('string');
   *
   * `.a` can also be used as a language chain to improve the readability of
   * your assertions. 
   *
   *     expect({b: 2}).to.have.a.property('b');
   *
   * The alias `.an` can be used interchangeably with `.a`.
   *
   * @name a
   * @alias an
   * @param {String} type
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function an(type, msg) {
    if (msg) flag(this, 'message', msg);
    type = type.toLowerCase();
    var obj = flag(this, 'object'),
        article = ~['a', 'e', 'i', 'o', 'u'].indexOf(type.charAt(0)) ? 'an ' : 'a ';

    this.assert(type === _.type(obj).toLowerCase(), 'expected #{this} to be ' + article + type, 'expected #{this} not to be ' + article + type);
  }

  Assertion.addChainableMethod('an', an);
  Assertion.addChainableMethod('a', an);

  /**
   * ### .include(val[, msg])
   *
   * When the target is a string, `.include` asserts that the given string `val`
   * is a substring of the target.
   *
   *     expect('foobar').to.include('foo');
   *
   * When the target is an array, `.include` asserts that the given `val` is a
   * member of the target.
   *
   *     expect([1, 2, 3]).to.include(2);
   *
   * When the target is an object, `.include` asserts that the given object
   * `val`'s properties are a subset of the target's properties.
   *
   *     expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
   *
   * When the target is a Set or WeakSet, `.include` asserts that the given `val` is a
   * member of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Set([1, 2])).to.include(2);
   *
   * When the target is a Map, `.include` asserts that the given `val` is one of
   * the values of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.include(2);
   *
   * Because `.include` does different things based on the target's type, it's
   * important to check the target's type before using `.include`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *
   * By default, strict (`===`) equality is used to compare array members and
   * object properties. Add `.deep` earlier in the chain to use deep equality
   * instead (WeakSet targets are not supported). See the `deep-eql` project
   * page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   * By default, all of the target's properties are searched when working with
   * objects. This includes properties that are inherited and/or non-enumerable.
   * Add `.own` earlier in the chain to exclude the target's inherited
   * properties from the search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * Note that a target object is always only searched for `val`'s own
   * enumerable properties.
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({a: {b: 2}}).to.deep.own.include({a: {b: 2}});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 2}}).to.nested.include({'\\.a.\\[b\\]': 2});
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}}).to.deep.nested.include({'a.b[0]': {c: 3}});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.include`.
   *
   *     expect('foobar').to.not.include('taco');
   *     expect([1, 2, 3]).to.not.include(4);
   * 
   * However, it's dangerous to negate `.include` when the target is an object.
   * The problem is that it creates uncertain expectations by asserting that the
   * target object doesn't have all of `val`'s key/value pairs but may or may
   * not have some of them. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target object isn't even expected to have `val`'s keys, it's
   * often best to assert exactly that.
   *
   *     expect({c: 3}).to.not.have.any.keys('a', 'b'); // Recommended
   *     expect({c: 3}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * When the target object is expected to have `val`'s keys, it's often best to
   * assert that each of the properties has its expected value, rather than
   * asserting that each property doesn't have one of many unexpected values.
   *
   *     expect({a: 3, b: 4}).to.include({a: 3, b: 4}); // Recommended
   *     expect({a: 3, b: 4}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * `.include` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.include(4, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.include(4);
   *
   * `.include` can also be used as a language chain, causing all `.members` and
   * `.keys` assertions that follow in the chain to require the target to be a
   * superset of the expected set, rather than an identical set. Note that
   * `.members` ignores duplicates in the subset when `.include` is added.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * Note that adding `.any` earlier in the chain causes the `.keys` assertion
   * to ignore `.include`.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *
   * The aliases `.includes`, `.contain`, and `.contains` can be used
   * interchangeably with `.include`.
   *
   * @name include
   * @alias contain
   * @alias includes
   * @alias contains
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function SameValueZero(a, b) {
    return _.isNaN(a) && _.isNaN(b) || a === b;
  }

  function includeChainingBehavior() {
    flag(this, 'contains', true);
  }

  function include(val, msg) {
    if (msg) flag(this, 'message', msg);

    var obj = flag(this, 'object'),
        objType = _.type(obj).toLowerCase(),
        flagMsg = flag(this, 'message'),
        negate = flag(this, 'negate'),
        ssfi = flag(this, 'ssfi'),
        isDeep = flag(this, 'deep'),
        descriptor = isDeep ? 'deep ' : '';

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    var included = false;

    switch (objType) {
      case 'string':
        included = obj.indexOf(val) !== -1;
        break;

      case 'weakset':
        if (isDeep) {
          throw new AssertionError(flagMsg + 'unable to use .deep.include with WeakSet', undefined, ssfi);
        }

        included = obj.has(val);
        break;

      case 'map':
        var isEql = isDeep ? _.eql : SameValueZero;
        obj.forEach(function (item) {
          included = included || isEql(item, val);
        });
        break;

      case 'set':
        if (isDeep) {
          obj.forEach(function (item) {
            included = included || _.eql(item, val);
          });
        } else {
          included = obj.has(val);
        }
        break;

      case 'array':
        if (isDeep) {
          included = obj.some(function (item) {
            return _.eql(item, val);
          });
        } else {
          included = obj.indexOf(val) !== -1;
        }
        break;

      default:
        // This block is for asserting a subset of properties in an object.
        // `_.expectTypes` isn't used here because `.include` should work with
        // objects with a custom `@@toStringTag`.
        if (val !== Object(val)) {
          throw new AssertionError(flagMsg + 'object tested must be an array, a map, an object,' + ' a set, a string, or a weakset, but ' + objType + ' given', undefined, ssfi);
        }

        var props = Object.keys(val),
            firstErr = null,
            numErrs = 0;

        props.forEach(function (prop) {
          var propAssertion = new Assertion(obj);
          _.transferFlags(this, propAssertion, true);
          flag(propAssertion, 'lockSsfi', true);

          if (!negate || props.length === 1) {
            propAssertion.property(prop, val[prop]);
            return;
          }

          try {
            propAssertion.property(prop, val[prop]);
          } catch (err) {
            if (!_.checkError.compatibleConstructor(err, AssertionError)) {
              throw err;
            }
            if (firstErr === null) firstErr = err;
            numErrs++;
          }
        }, this);

        // When validating .not.include with multiple properties, we only want
        // to throw an assertion error if all of the properties are included,
        // in which case we throw the first property assertion error that we
        // encountered.
        if (negate && props.length > 1 && numErrs === props.length) {
          throw firstErr;
        }
        return;
    }

    // Assert inclusion in collection or substring in a string.
    this.assert(included, 'expected #{this} to ' + descriptor + 'include ' + _.inspect(val), 'expected #{this} to not ' + descriptor + 'include ' + _.inspect(val));
  }

  Assertion.addChainableMethod('include', include, includeChainingBehavior);
  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

  /**
   * ### .ok
   *
   * Asserts that the target is loosely (`==`) equal to `true`. However, it's
   * often best to assert that the target is strictly (`===`) or deeply equal to
   * its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.ok; // Not recommended
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.be.ok; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.ok`.
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.not.be.ok; // Not recommended
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.ok; // Not recommended
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.be.ok; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.be.ok; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.ok;
   *
   * @name ok
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ok', function () {
    this.assert(flag(this, 'object'), 'expected #{this} to be truthy', 'expected #{this} to be falsy');
  });

  /**
   * ### .true
   *
   * Asserts that the target is strictly (`===`) equal to `true`.
   *
   *     expect(true).to.be.true;
   *
   * Add `.not` earlier in the chain to negate `.true`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `true`.
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.true; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.true; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.true;
   *
   * @name true
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('true', function () {
    this.assert(true === flag(this, 'object'), 'expected #{this} to be true', 'expected #{this} to be false', flag(this, 'negate') ? false : true);
  });

  /**
   * ### .false
   *
   * Asserts that the target is strictly (`===`) equal to `false`.
   *
   *     expect(false).to.be.false;
   *
   * Add `.not` earlier in the chain to negate `.false`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `false`.
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.not.be.false; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.false; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(true, 'nooo why fail??').to.be.false;
   *
   * @name false
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('false', function () {
    this.assert(false === flag(this, 'object'), 'expected #{this} to be false', 'expected #{this} to be true', flag(this, 'negate') ? true : false);
  });

  /**
   * ### .null
   *
   * Asserts that the target is strictly (`===`) equal to `null`.
   *
   *     expect(null).to.be.null;
   *
   * Add `.not` earlier in the chain to negate `.null`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `null`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.null; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.null;
   *
   * @name null
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('null', function () {
    this.assert(null === flag(this, 'object'), 'expected #{this} to be null', 'expected #{this} not to be null');
  });

  /**
   * ### .undefined
   *
   * Asserts that the target is strictly (`===`) equal to `undefined`.
   *
   *     expect(undefined).to.be.undefined;
   *
   * Add `.not` earlier in the chain to negate `.undefined`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `undefined`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.undefined; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.undefined;
   *
   * @name undefined
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('undefined', function () {
    this.assert(undefined === flag(this, 'object'), 'expected #{this} to be undefined', 'expected #{this} not to be undefined');
  });

  /**
   * ### .NaN
   *
   * Asserts that the target is exactly `NaN`.
   *
   *     expect(NaN).to.be.NaN;
   *
   * Add `.not` earlier in the chain to negate `.NaN`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `NaN`.
   *
   *     expect('foo').to.equal('foo'); // Recommended
   *     expect('foo').to.not.be.NaN; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.NaN;
   *
   * @name NaN
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('NaN', function () {
    this.assert(_.isNaN(flag(this, 'object')), 'expected #{this} to be NaN', 'expected #{this} not to be NaN');
  });

  /**
   * ### .exist
   *
   * Asserts that the target is not strictly (`===`) equal to either `null` or
   * `undefined`. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.exist; // Not recommended
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.exist; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.exist`.
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.exist; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.exist; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(null, 'nooo why fail??').to.exist;
   *
   * @name exist
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('exist', function () {
    var val = flag(this, 'object');
    this.assert(val !== null && val !== undefined, 'expected #{this} to exist', 'expected #{this} to not exist');
  });

  /**
   * ### .empty
   *
   * When the target is a string or array, `.empty` asserts that the target's
   * `length` property is strictly (`===`) equal to `0`.
   *
   *     expect([]).to.be.empty;
   *     expect('').to.be.empty;
   *
   * When the target is a map or set, `.empty` asserts that the target's `size`
   * property is strictly equal to `0`.
   *
   *     expect(new Set()).to.be.empty;
   *     expect(new Map()).to.be.empty;
   *
   * When the target is a non-function object, `.empty` asserts that the target
   * doesn't have any own enumerable properties. Properties with Symbol-based
   * keys are excluded from the count.
   *
   *     expect({}).to.be.empty;
   *
   * Because `.empty` does different things based on the target's type, it's
   * important to check the target's type before using `.empty`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.empty`. However, it's often
   * best to assert that the target contains its expected number of values,
   * rather than asserting that it's not empty.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.not.be.empty; // Not recommended
   *
   *     expect(new Set([1, 2, 3])).to.have.property('size', 3); // Recommended
   *     expect(new Set([1, 2, 3])).to.not.be.empty; // Not recommended
   *
   *     expect(Object.keys({a: 1})).to.have.lengthOf(1); // Recommended
   *     expect({a: 1}).to.not.be.empty; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect([1, 2, 3], 'nooo why fail??').to.be.empty;
   *
   * @name empty
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('empty', function () {
    var val = flag(this, 'object'),
        ssfi = flag(this, 'ssfi'),
        flagMsg = flag(this, 'message'),
        itemsCount;

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    switch (_.type(val).toLowerCase()) {
      case 'array':
      case 'string':
        itemsCount = val.length;
        break;
      case 'map':
      case 'set':
        itemsCount = val.size;
        break;
      case 'weakmap':
      case 'weakset':
        throw new AssertionError(flagMsg + '.empty was passed a weak collection', undefined, ssfi);
      case 'function':
        var msg = flagMsg + '.empty was passed a function ' + _.getName(val);
        throw new AssertionError(msg.trim(), undefined, ssfi);
      default:
        if (val !== Object(val)) {
          throw new AssertionError(flagMsg + '.empty was passed non-string primitive ' + _.inspect(val), undefined, ssfi);
        }
        itemsCount = Object.keys(val).length;
    }

    this.assert(0 === itemsCount, 'expected #{this} to be empty', 'expected #{this} not to be empty');
  });

  /**
   * ### .arguments
   *
   * Asserts that the target is an `arguments` object.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
   *
   *     test();
   *
   * Add `.not` earlier in the chain to negate `.arguments`. However, it's often
   * best to assert which type the target is expected to be, rather than
   * asserting that its not an `arguments` object.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.arguments; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({}, 'nooo why fail??').to.be.arguments;
   *
   * The alias `.Arguments` can be used interchangeably with `.arguments`.
   *
   * @name arguments
   * @alias Arguments
   * @namespace BDD
   * @api public
   */

  function checkArguments() {
    var obj = flag(this, 'object'),
        type = _.type(obj);
    this.assert('Arguments' === type, 'expected #{this} to be arguments but got ' + type, 'expected #{this} to not be arguments');
  }

  Assertion.addProperty('arguments', checkArguments);
  Assertion.addProperty('Arguments', checkArguments);

  /**
   * ### .equal(val[, msg])
   *
   * Asserts that the target is strictly (`===`) equal to the given `val`.
   *
   *     expect(1).to.equal(1);
   *     expect('foo').to.equal('foo');
   * 
   * Add `.deep` earlier in the chain to use deep equality instead. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) equals `[1, 2]`
   *     expect([1, 2]).to.deep.equal([1, 2]);
   *     expect([1, 2]).to.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.equal`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to one of countless unexpected values.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.equal(2); // Not recommended
   *
   * `.equal` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.equal(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.equal(2);
   *
   * The aliases `.equals` and `eq` can be used interchangeably with `.equal`.
   *
   * @name equal
   * @alias equals
   * @alias eq
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEqual(val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'deep')) {
      return this.eql(val);
    } else {
      this.assert(val === obj, 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{exp}', val, this._obj, true);
    }
  }

  Assertion.addMethod('equal', assertEqual);
  Assertion.addMethod('equals', assertEqual);
  Assertion.addMethod('eq', assertEqual);

  /**
   * ### .eql(obj[, msg])
   *
   * Asserts that the target is deeply equal to the given `obj`. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object is deeply (but not strictly) equal to {a: 1}
   *     expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1});
   *
   *     // Target array is deeply (but not strictly) equal to [1, 2]
   *     expect([1, 2]).to.eql([1, 2]).but.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.eql`. However, it's often best
   * to assert that the target is deeply equal to its expected value, rather
   * than not deeply equal to one of countless unexpected values.
   *
   *     expect({a: 1}).to.eql({a: 1}); // Recommended
   *     expect({a: 1}).to.not.eql({b: 2}); // Not recommended
   *
   * `.eql` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect({a: 1}).to.eql({b: 2}, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.eql({b: 2});
   *
   * The alias `.eqls` can be used interchangeably with `.eql`.
   *
   * The `.deep.equal` assertion is almost identical to `.eql` but with one
   * difference: `.deep.equal` causes deep equality comparisons to also be used
   * for any other assertions that follow in the chain.
   *
   * @name eql
   * @alias eqls
   * @param {Mixed} obj
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEql(obj, msg) {
    if (msg) flag(this, 'message', msg);
    this.assert(_.eql(obj, flag(this, 'object')), 'expected #{this} to deeply equal #{exp}', 'expected #{this} to not deeply equal #{exp}', obj, this._obj, true);
  }

  Assertion.addMethod('eql', assertEql);
  Assertion.addMethod('eqls', assertEql);

  /**
   * ### .above(n[, msg])
   *
   * Asserts that the target is a number or a date greater than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.above(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is greater than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.above(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.above`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(1).to.not.be.above(2); // Not recommended
   *
   * `.above` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.above(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.above(2);
   *
   * The aliases `.gt` and `.greaterThan` can be used interchangeably with
   * `.above`.
   *
   * @name above
   * @alias gt
   * @alias greaterThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertAbove(n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        doLength = flag(this, 'doLength'),
        flagMsg = flag(this, 'message'),
        msgPrefix = flagMsg ? flagMsg + ': ' : '',
        ssfi = flag(this, 'ssfi'),
        objType = _.type(obj).toLowerCase(),
        nType = _.type(n).toLowerCase(),
        shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && objType === 'date' && nType !== 'date') {
      errorMessage = msgPrefix + 'the argument to above must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to above must be a number';
    } else if (!doLength && objType !== 'date' && objType !== 'number') {
      var printObj = objType === 'string' ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(len > n, 'expected #{this} to have a length above #{exp} but got #{act}', 'expected #{this} to not have a length above #{exp}', n, len);
    } else {
      this.assert(obj > n, 'expected #{this} to be above #{exp}', 'expected #{this} to be at most #{exp}', n);
    }
  }

  Assertion.addMethod('above', assertAbove);
  Assertion.addMethod('gt', assertAbove);
  Assertion.addMethod('greaterThan', assertAbove);

  /**
   * ### .least(n[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `n` respectively. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.at.least(1); // Not recommended
   *     expect(2).to.be.at.least(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is greater than or equal to the given number
   * `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.least(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.least`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.at.least(2); // Not recommended
   *
   * `.least` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.at.least(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.at.least(2);
   *
   * The alias `.gte` can be used interchangeably with `.least`.
   *
   * @name least
   * @alias gte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLeast(n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        doLength = flag(this, 'doLength'),
        flagMsg = flag(this, 'message'),
        msgPrefix = flagMsg ? flagMsg + ': ' : '',
        ssfi = flag(this, 'ssfi'),
        objType = _.type(obj).toLowerCase(),
        nType = _.type(n).toLowerCase(),
        shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && objType === 'date' && nType !== 'date') {
      errorMessage = msgPrefix + 'the argument to least must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to least must be a number';
    } else if (!doLength && objType !== 'date' && objType !== 'number') {
      var printObj = objType === 'string' ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(len >= n, 'expected #{this} to have a length at least #{exp} but got #{act}', 'expected #{this} to have a length below #{exp}', n, len);
    } else {
      this.assert(obj >= n, 'expected #{this} to be at least #{exp}', 'expected #{this} to be below #{exp}', n);
    }
  }

  Assertion.addMethod('least', assertLeast);
  Assertion.addMethod('gte', assertLeast);

  /**
   * ### .below(n[, msg])
   *
   * Asserts that the target is a number or a date less than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.below(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is less than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.below(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.length(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.below(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.below`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.below(1); // Not recommended
   *
   * `.below` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.below(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.below(1);
   *
   * The aliases `.lt` and `.lessThan` can be used interchangeably with
   * `.below`.
   *
   * @name below
   * @alias lt
   * @alias lessThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertBelow(n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        doLength = flag(this, 'doLength'),
        flagMsg = flag(this, 'message'),
        msgPrefix = flagMsg ? flagMsg + ': ' : '',
        ssfi = flag(this, 'ssfi'),
        objType = _.type(obj).toLowerCase(),
        nType = _.type(n).toLowerCase(),
        shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && objType === 'date' && nType !== 'date') {
      errorMessage = msgPrefix + 'the argument to below must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to below must be a number';
    } else if (!doLength && objType !== 'date' && objType !== 'number') {
      var printObj = objType === 'string' ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(len < n, 'expected #{this} to have a length below #{exp} but got #{act}', 'expected #{this} to not have a length below #{exp}', n, len);
    } else {
      this.assert(obj < n, 'expected #{this} to be below #{exp}', 'expected #{this} to be at least #{exp}', n);
    }
  }

  Assertion.addMethod('below', assertBelow);
  Assertion.addMethod('lt', assertBelow);
  Assertion.addMethod('lessThan', assertBelow);

  /**
   * ### .most(n[, msg])
   *
   * Asserts that the target is a number or a date less than or equal to the given number
   * or date `n` respectively. However, it's often best to assert that the target is equal to its
   * expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.at.most(2); // Not recommended
   *     expect(1).to.be.at.most(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is less than or equal to the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.most(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.most`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.at.most(1); // Not recommended
   *
   * `.most` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.at.most(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.at.most(1);
   *
   * The alias `.lte` can be used interchangeably with `.most`.
   *
   * @name most
   * @alias lte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertMost(n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        doLength = flag(this, 'doLength'),
        flagMsg = flag(this, 'message'),
        msgPrefix = flagMsg ? flagMsg + ': ' : '',
        ssfi = flag(this, 'ssfi'),
        objType = _.type(obj).toLowerCase(),
        nType = _.type(n).toLowerCase(),
        shouldThrow = true;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && objType === 'date' && nType !== 'date') {
      errorMessage = msgPrefix + 'the argument to most must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to most must be a number';
    } else if (!doLength && objType !== 'date' && objType !== 'number') {
      var printObj = objType === 'string' ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(len <= n, 'expected #{this} to have a length at most #{exp} but got #{act}', 'expected #{this} to have a length above #{exp}', n, len);
    } else {
      this.assert(obj <= n, 'expected #{this} to be at most #{exp}', 'expected #{this} to be above #{exp}', n);
    }
  }

  Assertion.addMethod('most', assertMost);
  Assertion.addMethod('lte', assertMost);

  /**
   * ### .within(start, finish[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `start`, and less than or equal to the given number or date `finish` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.within(1, 3); // Not recommended
   *     expect(2).to.be.within(2, 3); // Not recommended
   *     expect(2).to.be.within(1, 2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the value of the
   * target's `length` property is greater than or equal to the given number
   * `start`, and less than or equal to the given number `finish`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.within(2, 4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.within(2, 4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.within`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.within(2, 4); // Not recommended
   *
   * `.within` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(4).to.be.within(1, 3, 'nooo why fail??');
   *     expect(4, 'nooo why fail??').to.be.within(1, 3);
   *
   * @name within
   * @param {Number} start lower bound inclusive
   * @param {Number} finish upper bound inclusive
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('within', function (start, finish, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        doLength = flag(this, 'doLength'),
        flagMsg = flag(this, 'message'),
        msgPrefix = flagMsg ? flagMsg + ': ' : '',
        ssfi = flag(this, 'ssfi'),
        objType = _.type(obj).toLowerCase(),
        startType = _.type(start).toLowerCase(),
        finishType = _.type(finish).toLowerCase(),
        shouldThrow = true,
        range = startType === 'date' && finishType === 'date' ? start.toUTCString() + '..' + finish.toUTCString() : start + '..' + finish;

    if (doLength) {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && objType === 'date' && (startType !== 'date' || finishType !== 'date')) {
      errorMessage = msgPrefix + 'the arguments to within must be dates';
    } else if ((startType !== 'number' || finishType !== 'number') && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the arguments to within must be numbers';
    } else if (!doLength && objType !== 'date' && objType !== 'number') {
      var printObj = objType === 'string' ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var len = obj.length;
      this.assert(len >= start && len <= finish, 'expected #{this} to have a length within ' + range, 'expected #{this} to not have a length within ' + range);
    } else {
      this.assert(obj >= start && obj <= finish, 'expected #{this} to be within ' + range, 'expected #{this} to not be within ' + range);
    }
  });

  /**
   * ### .instanceof(constructor[, msg])
   *
   * Asserts that the target is an instance of the given `constructor`.
   *
   *     function Cat () { }
   *
   *     expect(new Cat()).to.be.an.instanceof(Cat);
   *     expect([1, 2]).to.be.an.instanceof(Array);
   *
   * Add `.not` earlier in the chain to negate `.instanceof`.
   *
   *     expect({a: 1}).to.not.be.an.instanceof(Array);
   *
   * `.instanceof` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.be.an.instanceof(Array, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.an.instanceof(Array);
   *
   * Due to limitations in ES5, `.instanceof` may not always work as expected
   * when using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing built-in object such as
   * `Array`, `Error`, and `Map`. See your transpiler's docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * The alias `.instanceOf` can be used interchangeably with `.instanceof`.
   *
   * @name instanceof
   * @param {Constructor} constructor
   * @param {String} msg _optional_
   * @alias instanceOf
   * @namespace BDD
   * @api public
   */

  function assertInstanceOf(constructor, msg) {
    if (msg) flag(this, 'message', msg);

    var target = flag(this, 'object');
    var ssfi = flag(this, 'ssfi');
    var flagMsg = flag(this, 'message');

    try {
      var isInstanceOf = target instanceof constructor;
    } catch (err) {
      if (err instanceof TypeError) {
        flagMsg = flagMsg ? flagMsg + ': ' : '';
        throw new AssertionError(flagMsg + 'The instanceof assertion needs a constructor but ' + _.type(constructor) + ' was given.', undefined, ssfi);
      }
      throw err;
    }

    var name = _.getName(constructor);
    if (name === null) {
      name = 'an unnamed constructor';
    }

    this.assert(isInstanceOf, 'expected #{this} to be an instance of ' + name, 'expected #{this} to not be an instance of ' + name);
  };

  Assertion.addMethod('instanceof', assertInstanceOf);
  Assertion.addMethod('instanceOf', assertInstanceOf);

  /**
   * ### .property(name[, val[, msg]])
   *
   * Asserts that the target has a property with the given key `name`.
   *
   *     expect({a: 1}).to.have.property('a');
   *
   * When `val` is provided, `.property` also asserts that the property's value
   * is equal to the given `val`.
   *
   *     expect({a: 1}).to.have.property('a', 1);
   *
   * By default, strict (`===`) equality is used. Add `.deep` earlier in the
   * chain to use deep equality instead. See the `deep-eql` project page for
   * info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * The target's enumerable and non-enumerable properties are always included
   * in the search. By default, both own and inherited properties are included.
   * Add `.own` earlier in the chain to exclude inherited properties from the
   * search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.own.property('a', 1);
   *     expect({a: 1}).to.have.property('b').but.not.own.property('b'); 
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({x: {a: 1}}).to.have.deep.own.property('x', {a: 1});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]', 'y');
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}})
   *       .to.have.deep.nested.property('a.b[0]', {c: 3});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.property`.
   *
   *     expect({a: 1}).to.not.have.property('b');
   * 
   * However, it's dangerous to negate `.property` when providing `val`. The
   * problem is that it creates uncertain expectations by asserting that the
   * target either doesn't have a property with the given key `name`, or that it
   * does have a property with the given key `name` but its value isn't equal to
   * the given `val`. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property with the given key
   * `name`, it's often best to assert exactly that.
   *
   *     expect({b: 2}).to.not.have.property('a'); // Recommended
   *     expect({b: 2}).to.not.have.property('a', 1); // Not recommended
   *
   * When the target is expected to have a property with the given key `name`,
   * it's often best to assert that the property has its expected value, rather
   * than asserting that it doesn't have one of many unexpected values.
   *
   *     expect({a: 3}).to.have.property('a', 3); // Recommended
   *     expect({a: 3}).to.not.have.property('a', 1); // Not recommended
   *
   * `.property` changes the target of any assertions that follow in the chain
   * to be the value of the property from the original target object.
   *
   *     expect({a: 1}).to.have.property('a').that.is.a('number');
   *
   * `.property` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing `val`, only use the
   * second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.property('a', 2, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.have.property('a', 2);
   *     expect({a: 1}, 'nooo why fail??').to.have.property('b');
   *
   *     // Not recommended
   *     expect({a: 1}).to.have.property('b', undefined, 'nooo why fail??');
   * 
   * The above assertion isn't the same thing as not providing `val`. Instead,
   * it's asserting that the target object has a `b` property that's equal to
   * `undefined`.
   *
   * The assertions `.ownProperty` and `.haveOwnProperty` can be used
   * interchangeably with `.own.property`.
   *
   * @name property
   * @param {String} name
   * @param {Mixed} val (optional)
   * @param {String} msg _optional_
   * @returns value of property for chaining
   * @namespace BDD
   * @api public
   */

  function assertProperty(name, val, msg) {
    if (msg) flag(this, 'message', msg);

    var isNested = flag(this, 'nested'),
        isOwn = flag(this, 'own'),
        flagMsg = flag(this, 'message'),
        obj = flag(this, 'object'),
        ssfi = flag(this, 'ssfi');

    if (isNested && isOwn) {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(flagMsg + 'The "nested" and "own" flags cannot be combined.', undefined, ssfi);
    }

    if (obj === null || obj === undefined) {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(flagMsg + 'Target cannot be null or undefined.', undefined, ssfi);
    }

    var isDeep = flag(this, 'deep'),
        negate = flag(this, 'negate'),
        pathInfo = isNested ? _.getPathInfo(obj, name) : null,
        value = isNested ? pathInfo.value : obj[name];

    var descriptor = '';
    if (isDeep) descriptor += 'deep ';
    if (isOwn) descriptor += 'own ';
    if (isNested) descriptor += 'nested ';
    descriptor += 'property ';

    var hasProperty;
    if (isOwn) hasProperty = Object.prototype.hasOwnProperty.call(obj, name);else if (isNested) hasProperty = pathInfo.exists;else hasProperty = _.hasProperty(obj, name);

    // When performing a negated assertion for both name and val, merely having
    // a property with the given name isn't enough to cause the assertion to
    // fail. It must both have a property with the given name, and the value of
    // that property must equal the given val. Therefore, skip this assertion in
    // favor of the next.
    if (!negate || arguments.length === 1) {
      this.assert(hasProperty, 'expected #{this} to have ' + descriptor + _.inspect(name), 'expected #{this} to not have ' + descriptor + _.inspect(name));
    }

    if (arguments.length > 1) {
      this.assert(hasProperty && (isDeep ? _.eql(val, value) : val === value), 'expected #{this} to have ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}', 'expected #{this} to not have ' + descriptor + _.inspect(name) + ' of #{act}', val, value);
    }

    flag(this, 'object', value);
  }

  Assertion.addMethod('property', assertProperty);

  function assertOwnProperty(name, value, msg) {
    flag(this, 'own', true);
    assertProperty.apply(this, arguments);
  }

  Assertion.addMethod('ownProperty', assertOwnProperty);
  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

  /**
   * ### .ownPropertyDescriptor(name[, descriptor[, msg]])
   *
   * Asserts that the target has its own property descriptor with the given key
   * `name`. Enumerable and non-enumerable properties are included in the
   * search.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a');
   *
   * When `descriptor` is provided, `.ownPropertyDescriptor` also asserts that
   * the property's descriptor is deeply equal to the given `descriptor`. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * Add `.not` earlier in the chain to negate `.ownPropertyDescriptor`.
   *
   *     expect({a: 1}).to.not.have.ownPropertyDescriptor('b');
   * 
   * However, it's dangerous to negate `.ownPropertyDescriptor` when providing
   * a `descriptor`. The problem is that it creates uncertain expectations by
   * asserting that the target either doesn't have a property descriptor with
   * the given key `name`, or that it does have a property descriptor with the
   * given key `name` but its not deeply equal to the given `descriptor`. It's
   * often best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property descriptor with the given
   * key `name`, it's often best to assert exactly that.
   *
   *     // Recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a');
   *
   *     // Not recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * When the target is expected to have a property descriptor with the given
   * key `name`, it's often best to assert that the property has its expected
   * descriptor, rather than asserting that it doesn't have one of many
   * unexpected descriptors.
   *
   *     // Recommended
   *     expect({a: 3}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 3,
   *     });
   *
   *     // Not recommended
   *     expect({a: 3}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * `.ownPropertyDescriptor` changes the target of any assertions that follow
   * in the chain to be the value of the property descriptor from the original
   * target object.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a')
   *       .that.has.property('enumerable', true);
   *
   * `.ownPropertyDescriptor` accepts an optional `msg` argument which is a
   * custom error message to show when the assertion fails. The message can also
   * be given as the second argument to `expect`. When not providing
   * `descriptor`, only use the second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     }, 'nooo why fail??');
   *
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     });
   * 
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('b');
   *
   *     // Not recommended
   *     expect({a: 1})
   *       .to.have.ownPropertyDescriptor('b', undefined, 'nooo why fail??');
   *
   * The above assertion isn't the same thing as not providing `descriptor`.
   * Instead, it's asserting that the target object has a `b` property
   * descriptor that's deeply equal to `undefined`.
   *
   * The alias `.haveOwnPropertyDescriptor` can be used interchangeably with
   * `.ownPropertyDescriptor`.
   *
   * @name ownPropertyDescriptor
   * @alias haveOwnPropertyDescriptor
   * @param {String} name
   * @param {Object} descriptor _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertOwnPropertyDescriptor(name, descriptor, msg) {
    if (typeof descriptor === 'string') {
      msg = descriptor;
      descriptor = null;
    }
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
    if (actualDescriptor && descriptor) {
      this.assert(_.eql(descriptor, actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor), 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor), descriptor, actualDescriptor, true);
    } else {
      this.assert(actualDescriptor, 'expected #{this} to have an own property descriptor for ' + _.inspect(name), 'expected #{this} to not have an own property descriptor for ' + _.inspect(name));
    }
    flag(this, 'object', actualDescriptor);
  }

  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

  /**
   * ### .lengthOf(n[, msg])
   *
   * Asserts that the target's `length` property is equal to the given number
   * `n`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *     expect('foo').to.have.lengthOf(3);
   *
   * Add `.not` earlier in the chain to negate `.lengthOf`. However, it's often
   * best to assert that the target's `length` property is equal to its expected
   * value, rather than not equal to one of many unexpected values.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.not.have.lengthOf(4); // Not recommended
   *
   * `.lengthOf` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(2, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.have.lengthOf(2);
   *
   * `.lengthOf` can also be used as a language chain, causing all `.above`,
   * `.below`, `.least`, `.most`, and `.within` assertions that follow in the
   * chain to use the target's `length` property as the target. However, it's
   * often best to assert that the target's `length` property is equal to its
   * expected length, rather than asserting that its `length` property falls
   * within some range of values.
   *
   *     // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *
   *     // Not recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2);
   *     expect([1, 2, 3]).to.have.lengthOf.below(4);
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(3);
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(3);
   *     expect([1, 2, 3]).to.have.lengthOf.within(2,4);
   *
   * Due to a compatibility issue, the alias `.length` can't be chained directly
   * off of an uninvoked method such as `.a`. Therefore, `.length` can't be used
   * interchangeably with `.lengthOf` in every situation. It's recommended to
   * always use `.lengthOf` instead of `.length`.
   *
   *     expect([1, 2, 3]).to.have.a.length(3); // incompatible; throws error
   *     expect([1, 2, 3]).to.have.a.lengthOf(3);  // passes as expected
   *
   * @name lengthOf
   * @alias length
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLengthChain() {
    flag(this, 'doLength', true);
  }

  function assertLength(n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');
    new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    var len = obj.length;

    this.assert(len == n, 'expected #{this} to have a length of #{exp} but got #{act}', 'expected #{this} to not have a length of #{act}', n, len);
  }

  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
  Assertion.addChainableMethod('lengthOf', assertLength, assertLengthChain);

  /**
   * ### .match(re[, msg])
   *
   * Asserts that the target matches the given regular expression `re`.
   *
   *     expect('foobar').to.match(/^foo/);
   *
   * Add `.not` earlier in the chain to negate `.match`.
   *
   *     expect('foobar').to.not.match(/taco/);
   *
   * `.match` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect('foobar').to.match(/taco/, 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.match(/taco/);
   *
   * The alias `.matches` can be used interchangeably with `.match`.
   *
   * @name match
   * @alias matches
   * @param {RegExp} re
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */
  function assertMatch(re, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(re.exec(obj), 'expected #{this} to match ' + re, 'expected #{this} not to match ' + re);
  }

  Assertion.addMethod('match', assertMatch);
  Assertion.addMethod('matches', assertMatch);

  /**
   * ### .string(str[, msg])
   *
   * Asserts that the target string contains the given substring `str`.
   *
   *     expect('foobar').to.have.string('bar');
   *
   * Add `.not` earlier in the chain to negate `.string`.
   *
   *     expect('foobar').to.not.have.string('taco');
   *
   * `.string` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect('foobar').to.have.string(/taco/, 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.have.string(/taco/);
   *
   * @name string
   * @param {String} str
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('string', function (str, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');
    new Assertion(obj, flagMsg, ssfi, true).is.a('string');

    this.assert(~obj.indexOf(str), 'expected #{this} to contain ' + _.inspect(str), 'expected #{this} to not contain ' + _.inspect(str));
  });

  /**
   * ### .keys(key1[, key2[, ...]])
   *
   * Asserts that the target object, array, map, or set has the given keys. Only
   * the target's own inherited properties are included in the search. 
   *
   * When the target is an object or array, keys can be provided as one or more
   * string arguments, a single array argument, or a single object argument. In
   * the latter case, only the keys in the given object matter; the values are
   * ignored.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *     expect(['x', 'y']).to.have.all.keys(0, 1);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys(['a', 'b']);
   *     expect(['x', 'y']).to.have.all.keys([0, 1]);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys({a: 4, b: 5}); // ignore 4 and 5
   *     expect(['x', 'y']).to.have.all.keys({0: 4, 1: 5}); // ignore 4 and 5
   *
   * When the target is a map or set, each key must be provided as a separate
   * argument.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
   *     expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');
   *
   * Because `.keys` does different things based on the target's type, it's
   * important to check the target's type before using `.keys`. See the `.a` doc
   * for info on testing a target's type.
   *
   *     expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');
   *
   * By default, strict (`===`) equality is used to compare keys of maps and
   * sets. Add `.deep` earlier in the chain to use deep equality instead. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);
   *
   * By default, the target must have all of the given keys and no more. Add
   * `.any` earlier in the chain to only require that the target have at least
   * one of the given keys. Also, add `.not` earlier in the chain to negate
   * `.keys`. It's often best to add `.any` when negating `.keys`, and to use
   * `.all` when asserting `.keys` without negation.
   *
   * When negating `.keys`, `.any` is preferred because `.not.any.keys` asserts
   * exactly what's expected of the output, whereas `.not.all.keys` creates
   * uncertain expectations.
   *
   *     // Recommended; asserts that target doesn't have any of the given keys
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   *     // Not recommended; asserts that target doesn't have all of the given
   *     // keys but may or may not have some of them
   *     expect({a: 1, b: 2}).to.not.have.all.keys('c', 'd');
   *
   * When asserting `.keys` without negation, `.all` is preferred because
   * `.all.keys` asserts exactly what's expected of the output, whereas
   * `.any.keys` creates uncertain expectations.
   *
   *     // Recommended; asserts that target has all the given keys
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   *     // Not recommended; asserts that target has at least one of the given
   *     // keys but may or may not have more of them
   *     expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` appear
   * earlier in the chain. However, it's often best to add `.all` anyway because
   * it improves readability.
   *
   *     // Both assertions are identical
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b'); // Recommended
   *     expect({a: 1, b: 2}).to.have.keys('a', 'b'); // Not recommended
   *
   * Add `.include` earlier in the chain to require that the target's keys be a
   * superset of the expected keys, rather than identical sets.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   * However, if `.any` and `.include` are combined, only the `.any` takes
   * effect. The `.include` is ignored in this case.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.have.key('b');
   *
   * The alias `.key` can be used interchangeably with `.keys`.
   *
   * @name keys
   * @alias key
   * @param {...String|Array|Object} keys
   * @namespace BDD
   * @api public
   */

  function assertKeys(keys) {
    var obj = flag(this, 'object'),
        objType = _.type(obj),
        keysType = _.type(keys),
        ssfi = flag(this, 'ssfi'),
        isDeep = flag(this, 'deep'),
        str,
        deepStr = '',
        ok = true,
        flagMsg = flag(this, 'message');

    flagMsg = flagMsg ? flagMsg + ': ' : '';
    var mixedArgsMsg = flagMsg + 'when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments';

    if (objType === 'Map' || objType === 'Set') {
      deepStr = isDeep ? 'deeply ' : '';
      actual = [];

      // Map and Set '.keys' aren't supported in IE 11. Therefore, use .forEach.
      obj.forEach(function (val, key) {
        actual.push(key);
      });

      if (keysType !== 'Array') {
        keys = Array.prototype.slice.call(arguments);
      }
    } else {
      actual = _.getOwnEnumerableProperties(obj);

      switch (keysType) {
        case 'Array':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          break;
        case 'Object':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          keys = Object.keys(keys);
          break;
        default:
          keys = Array.prototype.slice.call(arguments);
      }

      // Only stringify non-Symbols because Symbols would become "Symbol()"
      keys = keys.map(function (val) {
        return typeof val === 'symbol' ? val : String(val);
      });
    }

    if (!keys.length) {
      throw new AssertionError(flagMsg + 'keys required', undefined, ssfi);
    }

    var len = keys.length,
        any = flag(this, 'any'),
        all = flag(this, 'all'),
        expected = keys,
        actual;

    if (!any && !all) {
      all = true;
    }

    // Has any
    if (any) {
      ok = expected.some(function (expectedKey) {
        return actual.some(function (actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });
    }

    // Has all
    if (all) {
      ok = expected.every(function (expectedKey) {
        return actual.some(function (actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });

      if (!flag(this, 'contains')) {
        ok = ok && keys.length == actual.length;
      }
    }

    // Key string
    if (len > 1) {
      keys = keys.map(function (key) {
        return _.inspect(key);
      });
      var last = keys.pop();
      if (all) {
        str = keys.join(', ') + ', and ' + last;
      }
      if (any) {
        str = keys.join(', ') + ', or ' + last;
      }
    } else {
      str = _.inspect(keys[0]);
    }

    // Form
    str = (len > 1 ? 'keys ' : 'key ') + str;

    // Have / include
    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

    // Assertion
    this.assert(ok, 'expected #{this} to ' + deepStr + str, 'expected #{this} to not ' + deepStr + str, expected.slice(0).sort(_.compareByInspect), actual.sort(_.compareByInspect), true);
  }

  Assertion.addMethod('keys', assertKeys);
  Assertion.addMethod('key', assertKeys);

  /**
   * ### .throw([errorLike], [errMsgMatcher], [msg])
   *
   * When no arguments are provided, `.throw` invokes the target function and
   * asserts that an error is thrown.
   * 
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw();
   *
   * When one argument is provided, and it's an error constructor, `.throw`
   * invokes the target function and asserts that an error is thrown that's an
   * instance of that error constructor.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError);
   *
   * When one argument is provided, and it's an error instance, `.throw` invokes
   * the target function and asserts that an error is thrown that's strictly
   * (`===`) equal to that error instance.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(err);
   *
   * When one argument is provided, and it's a string, `.throw` invokes the
   * target function and asserts that an error is thrown with a message that
   * contains that string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw('salmon');
   *
   * When one argument is provided, and it's a regular expression, `.throw`
   * invokes the target function and asserts that an error is thrown with a
   * message that matches that regular expression.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(/salmon/);
   *
   * When two arguments are provided, and the first is an error instance or
   * constructor, and the second is a string or regular expression, `.throw`
   * invokes the function and asserts that an error is thrown that fulfills both
   * conditions as described above.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon');
   *     expect(badFn).to.throw(TypeError, /salmon/);
   *     expect(badFn).to.throw(err, 'salmon');
   *     expect(badFn).to.throw(err, /salmon/);
   *
   * Add `.not` earlier in the chain to negate `.throw`.
   *     
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw();
   * 
   * However, it's dangerous to negate `.throw` when providing any arguments.
   * The problem is that it creates uncertain expectations by asserting that the
   * target either doesn't throw an error, or that it throws an error but of a
   * different type than the given type, or that it throws an error of the given
   * type but with a message that doesn't include the given string. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to throw an error, it's often best to assert
   * exactly that.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw(); // Recommended
   *     expect(goodFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * When the target is expected to throw an error, it's often best to assert
   * that the error is of its expected type, and has a message that includes an
   * expected string, rather than asserting that it doesn't have one of many
   * unexpected types, and doesn't have a message that includes some string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon'); // Recommended
   *     expect(badFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * `.throw` changes the target of any assertions that follow in the chain to
   * be the error object that's thrown.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     err.code = 42;
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError).with.property('code', 42);
   *
   * `.throw` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`. When not providing two arguments, always use
   * the second form.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.throw(TypeError, 'x', 'nooo why fail??');
   *     expect(goodFn, 'nooo why fail??').to.throw();
   *
   * Due to limitations in ES5, `.throw` may not always work as expected when
   * using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing the built-in `Error` object and
   * then passing the subclassed constructor to `.throw`. See your transpiler's
   * docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * Beware of some common mistakes when using the `throw` assertion. One common
   * mistake is to accidentally invoke the function yourself instead of letting
   * the `throw` assertion invoke the function for you. For example, when
   * testing if a function named `fn` throws, provide `fn` instead of `fn()` as
   * the target for the assertion.
   *
   *     expect(fn).to.throw();     // Good! Tests `fn` as desired
   *     expect(fn()).to.throw();   // Bad! Tests result of `fn()`, not `fn`
   *
   * If you need to assert that your function `fn` throws when passed certain
   * arguments, then wrap a call to `fn` inside of another function.
   *
   *     expect(function () { fn(42); }).to.throw();  // Function expression
   *     expect(() => fn(42)).to.throw();             // ES6 arrow function
   *
   * Another common mistake is to provide an object method (or any stand-alone
   * function that relies on `this`) as the target of the assertion. Doing so is
   * problematic because the `this` context will be lost when the function is
   * invoked by `.throw`; there's no way for it to know what `this` is supposed
   * to be. There are two ways around this problem. One solution is to wrap the
   * method or function call inside of another function. Another solution is to
   * use `bind`.
   *
   *     expect(function () { cat.meow(); }).to.throw();  // Function expression
   *     expect(() => cat.meow()).to.throw();             // ES6 arrow function
   *     expect(cat.meow.bind(cat)).to.throw();           // Bind
   *
   * Finally, it's worth mentioning that it's a best practice in JavaScript to
   * only throw `Error` and derivatives of `Error` such as `ReferenceError`,
   * `TypeError`, and user-defined objects that extend `Error`. No other type of
   * value will generate a stack trace when initialized. With that said, the
   * `throw` assertion does technically support any type of value being thrown,
   * not just `Error` and its derivatives.
   *
   * The aliases `.throws` and `.Throw` can be used interchangeably with
   * `.throw`.
   *
   * @name throw
   * @alias throws
   * @alias Throw
   * @param {Error|ErrorConstructor} errorLike
   * @param {String|RegExp} errMsgMatcher error message
   * @param {String} msg _optional_
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @returns error for chaining (null if no error)
   * @namespace BDD
   * @api public
   */

  function assertThrows(errorLike, errMsgMatcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        ssfi = flag(this, 'ssfi'),
        flagMsg = flag(this, 'message'),
        negate = flag(this, 'negate') || false;
    new Assertion(obj, flagMsg, ssfi, true).is.a('function');

    if (errorLike instanceof RegExp || typeof errorLike === 'string') {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var caughtErr;
    try {
      obj();
    } catch (err) {
      caughtErr = err;
    }

    // If we have the negate flag enabled and at least one valid argument it means we do expect an error
    // but we want it to match a given set of criteria
    var everyArgIsUndefined = errorLike === undefined && errMsgMatcher === undefined;

    // If we've got the negate flag enabled and both args, we should only fail if both aren't compatible
    // See Issue #551 and PR #683@GitHub
    var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
    var errorLikeFail = false;
    var errMsgMatcherFail = false;

    // Checking if error was thrown
    if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
      // We need this to display results correctly according to their types
      var errorLikeString = 'an error';
      if (errorLike instanceof Error) {
        errorLikeString = '#{exp}';
      } else if (errorLike) {
        errorLikeString = _.checkError.getConstructorName(errorLike);
      }

      this.assert(caughtErr, 'expected #{this} to throw ' + errorLikeString, 'expected #{this} to not throw an error but #{act} was thrown', errorLike && errorLike.toString(), caughtErr instanceof Error ? caughtErr.toString() : typeof caughtErr === 'string' ? caughtErr : caughtErr && _.checkError.getConstructorName(caughtErr));
    }

    if (errorLike && caughtErr) {
      // We should compare instances only if `errorLike` is an instance of `Error`
      if (errorLike instanceof Error) {
        var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);

        if (isCompatibleInstance === negate) {
          // These checks were created to ensure we won't fail too soon when we've got both args and a negate
          // See Issue #551 and PR #683@GitHub
          if (everyArgIsDefined && negate) {
            errorLikeFail = true;
          } else {
            this.assert(negate, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp}' + (caughtErr && !negate ? ' but #{act} was thrown' : ''), errorLike.toString(), caughtErr.toString());
          }
        }
      }

      var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
      if (isCompatibleConstructor === negate) {
        if (everyArgIsDefined && negate) {
          errorLikeFail = true;
        } else {
          this.assert(negate, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : ''), errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike), caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr));
        }
      }
    }

    if (caughtErr && errMsgMatcher !== undefined && errMsgMatcher !== null) {
      // Here we check compatible messages
      var placeholder = 'including';
      if (errMsgMatcher instanceof RegExp) {
        placeholder = 'matching';
      }

      var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
      if (isCompatibleMessage === negate) {
        if (everyArgIsDefined && negate) {
          errMsgMatcherFail = true;
        } else {
          this.assert(negate, 'expected #{this} to throw error ' + placeholder + ' #{exp} but got #{act}', 'expected #{this} to throw error not ' + placeholder + ' #{exp}', errMsgMatcher, _.checkError.getMessage(caughtErr));
        }
      }
    }

    // If both assertions failed and both should've matched we throw an error
    if (errorLikeFail && errMsgMatcherFail) {
      this.assert(negate, 'expected #{this} to throw #{exp} but #{act} was thrown', 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : ''), errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike), caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr));
    }

    flag(this, 'object', caughtErr);
  };

  Assertion.addMethod('throw', assertThrows);
  Assertion.addMethod('throws', assertThrows);
  Assertion.addMethod('Throw', assertThrows);

  /**
   * ### .respondTo(method[, msg])
   *
   * When the target is a non-function object, `.respondTo` asserts that the
   * target has a method with the given name `method`. The method can be own or
   * inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.respondTo('meow');
   *
   * When the target is a function, `.respondTo` asserts that the target's
   * `prototype` property has a method with the given name `method`. Again, the
   * method can be own or inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(Cat).to.respondTo('meow');
   *
   * Add `.itself` earlier in the chain to force `.respondTo` to treat the
   * target as a non-function object, even if it's a function. Thus, it asserts
   * that the target has a method with the given name `method`, rather than
   * asserting that the target's `prototype` property has a method with the
   * given name `method`.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * When not adding `.itself`, it's important to check the target's type before
   * using `.respondTo`. See the `.a` doc for info on checking a target's type.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.be.an('object').that.respondsTo('meow');
   *
   * Add `.not` earlier in the chain to negate `.respondTo`.
   *
   *     function Dog () {}
   *     Dog.prototype.bark = function () {};
   *
   *     expect(new Dog()).to.not.respondTo('meow');
   *
   * `.respondTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect({}).to.respondTo('meow', 'nooo why fail??');
   *     expect({}, 'nooo why fail??').to.respondTo('meow');
   *
   * The alias `.respondsTo` can be used interchangeably with `.respondTo`.
   *
   * @name respondTo
   * @alias respondsTo
   * @param {String} method
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function respondTo(method, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        itself = flag(this, 'itself'),
        context = 'function' === typeof obj && !itself ? obj.prototype[method] : obj[method];

    this.assert('function' === typeof context, 'expected #{this} to respond to ' + _.inspect(method), 'expected #{this} to not respond to ' + _.inspect(method));
  }

  Assertion.addMethod('respondTo', respondTo);
  Assertion.addMethod('respondsTo', respondTo);

  /**
   * ### .itself
   *
   * Forces all `.respondTo` assertions that follow in the chain to behave as if
   * the target is a non-function object, even if it's a function. Thus, it
   * causes `.respondTo` to assert that the target has a method with the given
   * name, rather than asserting that the target's `prototype` property has a
   * method with the given name.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * @name itself
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('itself', function () {
    flag(this, 'itself', true);
  });

  /**
   * ### .satisfy(matcher[, msg])
   *
   * Invokes the given `matcher` function with the target being passed as the
   * first argument, and asserts that the value returned is truthy.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 0; 
   *     });
   *
   * Add `.not` earlier in the chain to negate `.satisfy`.
   *
   *     expect(1).to.not.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * `.satisfy` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 2;
   *     }, 'nooo why fail??');
   *
   *     expect(1, 'nooo why fail??').to.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * The alias `.satisfies` can be used interchangeably with `.satisfy`.
   *
   * @name satisfy
   * @alias satisfies
   * @param {Function} matcher
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function satisfy(matcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var result = matcher(obj);
    this.assert(result, 'expected #{this} to satisfy ' + _.objDisplay(matcher), 'expected #{this} to not satisfy' + _.objDisplay(matcher), flag(this, 'negate') ? false : true, result);
  }

  Assertion.addMethod('satisfy', satisfy);
  Assertion.addMethod('satisfies', satisfy);

  /**
   * ### .closeTo(expected, delta[, msg])
   *
   * Asserts that the target is a number that's within a given +/- `delta` range
   * of the given number `expected`. However, it's often best to assert that the
   * target is equal to its expected value.
   *
   *     // Recommended
   *     expect(1.5).to.equal(1.5);
   *
   *     // Not recommended
   *     expect(1.5).to.be.closeTo(1, 0.5);
   *     expect(1.5).to.be.closeTo(2, 0.5);
   *     expect(1.5).to.be.closeTo(1, 1);
   *
   * Add `.not` earlier in the chain to negate `.closeTo`.
   *
   *     expect(1.5).to.equal(1.5); // Recommended
   *     expect(1.5).to.not.be.closeTo(3, 1); // Not recommended
   *
   * `.closeTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1.5).to.be.closeTo(3, 1, 'nooo why fail??');
   *     expect(1.5, 'nooo why fail??').to.be.closeTo(3, 1);
   *
   * The alias `.approximately` can be used interchangeably with `.closeTo`.
   *
   * @name closeTo
   * @alias approximately
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function closeTo(expected, delta, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).is.a('number');
    if (typeof expected !== 'number' || typeof delta !== 'number') {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(flagMsg + 'the arguments to closeTo or approximately must be numbers', undefined, ssfi);
    }

    this.assert(Math.abs(obj - expected) <= delta, 'expected #{this} to be close to ' + expected + ' +/- ' + delta, 'expected #{this} not to be close to ' + expected + ' +/- ' + delta);
  }

  Assertion.addMethod('closeTo', closeTo);
  Assertion.addMethod('approximately', closeTo);

  // Note: Duplicates are ignored if testing for inclusion instead of sameness.
  function isSubsetOf(subset, superset, cmp, contains, ordered) {
    if (!contains) {
      if (subset.length !== superset.length) return false;
      superset = superset.slice();
    }

    return subset.every(function (elem, idx) {
      if (ordered) return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];

      if (!cmp) {
        var matchIdx = superset.indexOf(elem);
        if (matchIdx === -1) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      }

      return superset.some(function (elem2, matchIdx) {
        if (!cmp(elem, elem2)) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      });
    });
  }

  /**
   * ### .members(set[, msg])
   *
   * Asserts that the target array has the same members as the given array
   * `set`.
   *
   *     expect([1, 2, 3]).to.have.members([2, 1, 3]);
   *     expect([1, 2, 2]).to.have.members([2, 1, 2]);
   *
   * By default, members are compared using strict (`===`) equality. Add `.deep`
   * earlier in the chain to use deep equality instead. See the `deep-eql`
   * project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   * By default, order doesn't matter. Add `.ordered` earlier in the chain to
   * require that members appear in the same order.
   *
   *     expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
   *     expect([1, 2, 3]).to.have.members([2, 1, 3])
   *       .but.not.ordered.members([2, 1, 3]);
   *
   * By default, both arrays must be the same size. Add `.include` earlier in
   * the chain to require that the target's members be a superset of the
   * expected members. Note that duplicates are ignored in the subset when
   * `.include` is added.
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * `.deep`, `.ordered`, and `.include` can all be combined. However, if
   * `.include` and `.ordered` are combined, the ordering begins at the start of
   * both arrays.
   *
   *     expect([{a: 1}, {b: 2}, {c: 3}])
   *       .to.include.deep.ordered.members([{a: 1}, {b: 2}])
   *       .but.not.include.deep.ordered.members([{b: 2}, {c: 3}]);
   *
   * Add `.not` earlier in the chain to negate `.members`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the target array doesn't have all of the same members as
   * the given array `set` but may or may not have some of them. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     expect([1, 2]).to.not.include(3).and.not.include(4); // Recommended
   *     expect([1, 2]).to.not.have.members([3, 4]); // Not recommended
   *
   * `.members` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2]).to.have.members([1, 2, 3], 'nooo why fail??');
   *     expect([1, 2], 'nooo why fail??').to.have.members([1, 2, 3]);
   *
   * @name members
   * @param {Array} set
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('members', function (subset, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).to.be.an('array');
    new Assertion(subset, flagMsg, ssfi, true).to.be.an('array');

    var contains = flag(this, 'contains');
    var ordered = flag(this, 'ordered');

    var subject, failMsg, failNegateMsg, lengthCheck;

    if (contains) {
      subject = ordered ? 'an ordered superset' : 'a superset';
      failMsg = 'expected #{this} to be ' + subject + ' of #{exp}';
      failNegateMsg = 'expected #{this} to not be ' + subject + ' of #{exp}';
    } else {
      subject = ordered ? 'ordered members' : 'members';
      failMsg = 'expected #{this} to have the same ' + subject + ' as #{exp}';
      failNegateMsg = 'expected #{this} to not have the same ' + subject + ' as #{exp}';
    }

    var cmp = flag(this, 'deep') ? _.eql : undefined;

    this.assert(isSubsetOf(subset, obj, cmp, contains, ordered), failMsg, failNegateMsg, subset, obj, true);
  });

  /**
   * ### .oneOf(list[, msg])
   *
   * Asserts that the target is a member of the given array `list`. However,
   * it's often best to assert that the target is equal to its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.oneOf([1, 2, 3]); // Not recommended
   *
   * Comparisons are performed using strict (`===`) equality.
   *
   * Add `.not` earlier in the chain to negate `.oneOf`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.oneOf([2, 3, 4]); // Not recommended
   *
   * `.oneOf` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.oneOf([2, 3, 4], 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.oneOf([2, 3, 4]);
   *
   * @name oneOf
   * @param {Array<*>} list
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function oneOf(list, msg) {
    if (msg) flag(this, 'message', msg);
    var expected = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');
    new Assertion(list, flagMsg, ssfi, true).to.be.an('array');

    this.assert(list.indexOf(expected) > -1, 'expected #{this} to be one of #{exp}', 'expected #{this} to not be one of #{exp}', list, expected);
  }

  Assertion.addMethod('oneOf', oneOf);

  /**
   * ### .change(subject[, prop[, msg]])
   *
   * When one argument is provided, `.change` asserts that the given function
   * `subject` returns a different value when it's invoked before the target
   * function compared to when it's invoked afterward. However, it's often best
   * to assert that `subject` is equal to its expected value.
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     // Recommended
   *     expect(getDots()).to.equal('');
   *     addDot();
   *     expect(getDots()).to.equal('.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(getDots);
   *
   * When two arguments are provided, `.change` asserts that the value of the
   * given object `subject`'s `prop` property is different before invoking the
   * target function compared to afterward.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     // Recommended
   *     expect(myObj).to.have.property('dots', '');
   *     addDot();
   *     expect(myObj).to.have.property('dots', '.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(myObj, 'dots');
   *
   * Strict (`===`) equality is used to compare before and after values.
   *
   * Add `.not` earlier in the chain to negate `.change`.
   *
   *     var dots = ''
   *       , noop = function () {}
   *       , getDots = function () { return dots; };
   *
   *     expect(noop).to.not.change(getDots);
   *
   *     var myObj = {dots: ''}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'dots');
   *
   * `.change` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     expect(addDot).to.not.change(myObj, 'dots', 'nooo why fail??');
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     expect(addDot, 'nooo why fail??').to.not.change(getDots);
   *
   * `.change` also causes all `.by` assertions that follow in the chain to
   * assert how much a numeric subject was increased or decreased by. However,
   * it's dangerous to use `.change.by`. The problem is that it creates
   * uncertain expectations by asserting that the subject either increases by
   * the given delta, or that it decreases by the given delta. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * The alias `.changes` can be used interchangeably with `.change`.
   *
   * @name change
   * @alias changes
   * @param {String} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertChanges(subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    // This gets flagged because of the .by(delta) assertion
    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'change');
    flag(this, 'realDelta', final !== initial);

    this.assert(initial !== final, 'expected ' + msgObj + ' to change', 'expected ' + msgObj + ' to not change');
  }

  Assertion.addMethod('change', assertChanges);
  Assertion.addMethod('changes', assertChanges);

  /**
   * ### .increase(subject[, prop[, msg]])
   *
   * When one argument is provided, `.increase` asserts that the given function
   * `subject` returns a greater number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.increase` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * greater of a number is returned. It's often best to assert that the return
   * value increased by the expected amount, rather than asserting it increased
   * by any amount.
   *
   *     var val = 1
   *       , addTwo = function () { val += 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(addTwo).to.increase(getVal).by(2); // Recommended
   *     expect(addTwo).to.increase(getVal); // Not recommended
   *
   * When two arguments are provided, `.increase` asserts that the value of the
   * given object `subject`'s `prop` property is greater after invoking the
   * target function compared to beforehand.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.increase(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.increase`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either decreases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to decrease, it's often best to assert that it
   * decreased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.not.increase(myObj, 'val'); // Not recommended
   * 
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.increase(myObj, 'val'); // Not recommended
   *
   * `.increase` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.increase(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.increase(getVal);
   *
   * The alias `.increases` can be used interchangeably with `.increase`.
   *
   * @name increase
   * @alias increases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertIncreases(subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'increase');
    flag(this, 'realDelta', final - initial);

    this.assert(final - initial > 0, 'expected ' + msgObj + ' to increase', 'expected ' + msgObj + ' to not increase');
  }

  Assertion.addMethod('increase', assertIncreases);
  Assertion.addMethod('increases', assertIncreases);

  /**
   * ### .decrease(subject[, prop[, msg]])
   *
   * When one argument is provided, `.decrease` asserts that the given function
   * `subject` returns a lesser number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.decrease` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * lesser of a number is returned. It's often best to assert that the return
   * value decreased by the expected amount, rather than asserting it decreased
   * by any amount.
   *
   *     var val = 1
   *       , subtractTwo = function () { val -= 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(subtractTwo).to.decrease(getVal).by(2); // Recommended
   *     expect(subtractTwo).to.decrease(getVal); // Not recommended
   *
   * When two arguments are provided, `.decrease` asserts that the value of the
   * given object `subject`'s `prop` property is lesser after invoking the
   * target function compared to beforehand. 
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.decrease(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.decrease`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either increases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to increase, it's often best to assert that it
   * increased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.not.decrease(myObj, 'val'); // Not recommended
   * 
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.decrease(myObj, 'val'); // Not recommended
   *
   * `.decrease` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.decrease(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.decrease(getVal);
   *
   * The alias `.decreases` can be used interchangeably with `.decrease`.
   *
   * @name decrease
   * @alias decreases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDecreases(subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object'),
        flagMsg = flag(this, 'message'),
        ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'decrease');
    flag(this, 'realDelta', initial - final);

    this.assert(final - initial < 0, 'expected ' + msgObj + ' to decrease', 'expected ' + msgObj + ' to not decrease');
  }

  Assertion.addMethod('decrease', assertDecreases);
  Assertion.addMethod('decreases', assertDecreases);

  /**
   * ### .by(delta[, msg])
   *
   * When following an `.increase` assertion in the chain, `.by` asserts that
   * the subject of the `.increase` assertion increased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   * When following a `.decrease` assertion in the chain, `.by` asserts that the
   * subject of the `.decrease` assertion decreased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2);
   *
   * When following a `.change` assertion in the chain, `.by` asserts that the
   * subject of the `.change` assertion either increased or decreased by the
   * given `delta`. However, it's dangerous to use `.change.by`. The problem is
   * that it creates uncertain expectations. It's often best to identify the
   * exact output that's expected, and then write an assertion that only accepts
   * that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.by`. However, it's often best
   * to assert that the subject changed by its expected delta, rather than
   * asserting that it didn't change by one of countless unexpected deltas.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     // Recommended
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   *     // Not recommended
   *     expect(addTwo).to.increase(myObj, 'val').but.not.by(3);
   *
   * `.by` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(3, 'nooo why fail??');
   *     expect(addTwo, 'nooo why fail??').to.increase(myObj, 'val').by(3);
   *
   * @name by
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDelta(delta, msg) {
    if (msg) flag(this, 'message', msg);

    var msgObj = flag(this, 'deltaMsgObj');
    var initial = flag(this, 'initialDeltaValue');
    var final = flag(this, 'finalDeltaValue');
    var behavior = flag(this, 'deltaBehavior');
    var realDelta = flag(this, 'realDelta');

    var expression;
    if (behavior === 'change') {
      expression = Math.abs(final - initial) === Math.abs(delta);
    } else {
      expression = realDelta === Math.abs(delta);
    }

    this.assert(expression, 'expected ' + msgObj + ' to ' + behavior + ' by ' + delta, 'expected ' + msgObj + ' to not ' + behavior + ' by ' + delta);
  }

  Assertion.addMethod('by', assertDelta);

  /**
   * ### .extensible
   *
   * Asserts that the target is extensible, which means that new properties can
   * be added to it. Primitives are never extensible.
   *
   *     expect({a: 1}).to.be.extensible;
   *
   * Add `.not` earlier in the chain to negate `.extensible`.
   *
   *     var nonExtensibleObject = Object.preventExtensions({})
   *       , sealedObject = Object.seal({})
   *       , frozenObject = Object.freeze({});
   *
   *     expect(nonExtensibleObject).to.not.be.extensible;
   *     expect(sealedObject).to.not.be.extensible;
   *     expect(frozenObject).to.not.be.extensible;
   *     expect(1).to.not.be.extensible;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(1, 'nooo why fail??').to.be.extensible;
   *
   * @name extensible
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('extensible', function () {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
    // The following provides ES6 behavior for ES5 environments.

    var isExtensible = obj === Object(obj) && Object.isExtensible(obj);

    this.assert(isExtensible, 'expected #{this} to be extensible', 'expected #{this} to not be extensible');
  });

  /**
   * ### .sealed
   *
   * Asserts that the target is sealed, which means that new properties can't be
   * added to it, and its existing properties can't be reconfigured or deleted.
   * However, it's possible that its existing properties can still be reassigned
   * to different values. Primitives are always sealed.
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect(sealedObject).to.be.sealed;
   *     expect(frozenObject).to.be.sealed;
   *     expect(1).to.be.sealed;
   *
   * Add `.not` earlier in the chain to negate `.sealed`.
   *
   *     expect({a: 1}).to.not.be.sealed;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.sealed;
   *
   * @name sealed
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('sealed', function () {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
    // The following provides ES6 behavior for ES5 environments.

    var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;

    this.assert(isSealed, 'expected #{this} to be sealed', 'expected #{this} to not be sealed');
  });

  /**
   * ### .frozen
   *
   * Asserts that the target is frozen, which means that new properties can't be
   * added to it, and its existing properties can't be reassigned to different
   * values, reconfigured, or deleted. Primitives are always frozen.
   *
   *     var frozenObject = Object.freeze({});
   *
   *     expect(frozenObject).to.be.frozen;
   *     expect(1).to.be.frozen;
   *
   * Add `.not` earlier in the chain to negate `.frozen`.
   *
   *     expect({a: 1}).to.not.be.frozen;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.frozen;
   *
   * @name frozen
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('frozen', function () {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
    // The following provides ES6 behavior for ES5 environments.

    var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;

    this.assert(isFrozen, 'expected #{this} to be frozen', 'expected #{this} to not be frozen');
  });

  /**
   * ### .finite
   *
   * Asserts that the target is a number, and isn't `NaN` or positive/negative
   * `Infinity`.
   *
   *     expect(1).to.be.finite;
   *
   * Add `.not` earlier in the chain to negate `.finite`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either isn't a number, or that it's `NaN`, or
   * that it's positive `Infinity`, or that it's negative `Infinity`. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to be a number, it's often best to assert
   * that it's the expected type, rather than asserting that it isn't one of
   * many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.finite; // Not recommended
   *
   * When the target is expected to be `NaN`, it's often best to assert exactly
   * that.
   *
   *     expect(NaN).to.be.NaN; // Recommended
   *     expect(NaN).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be positive infinity, it's often best to
   * assert exactly that.
   *
   *     expect(Infinity).to.equal(Infinity); // Recommended
   *     expect(Infinity).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be negative infinity, it's often best to
   * assert exactly that.
   *
   *     expect(-Infinity).to.equal(-Infinity); // Recommended
   *     expect(-Infinity).to.not.be.finite; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect('foo', 'nooo why fail??').to.be.finite;
   *
   * @name finite
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('finite', function (msg) {
    var obj = flag(this, 'object');

    this.assert(typeof obj === "number" && isFinite(obj), 'expected #{this} to be a finite number', 'expected #{this} to not be a finite number');
  });
};
/*≠≠ node_modules/chai/lib/chai/core/assertions.js ≠≠*/


/*== node_modules/chai/lib/chai/interface/expect.js ==*/
$m['chai/lib/chai/interface/expect'] = { exports: {} };
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

$m['chai/lib/chai/interface/expect'].exports = function (chai, util) {
  chai.expect = function (val, message) {
    return new chai.Assertion(val, message);
  };

  /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace BDD
   * @api public
   */

  chai.expect.fail = function (actual, expected, message, operator) {
    message = message || 'expect.fail()';
    throw new chai.AssertionError(message, {
      actual: actual,
      expected: expected,
      operator: operator
    }, chai.expect.fail);
  };
};
/*≠≠ node_modules/chai/lib/chai/interface/expect.js ≠≠*/


/*== node_modules/chai/lib/chai/interface/should.js ==*/
$m['chai/lib/chai/interface/should'] = { exports: {} };
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

$m['chai/lib/chai/interface/should'].exports = function (chai, util) {
  var Assertion = chai.Assertion;

  function loadShould() {
    // explicitly define this method as function as to have it's name to include as `ssfi`
    function shouldGetter() {
      if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === 'function' && this instanceof Symbol) {
        return new Assertion(this.valueOf(), null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      // See https://github.com/chaijs/chai/issues/86: this makes
      // `whatever.should = someValue` actually set `someValue`, which is
      // especially useful for `global.should = require('chai').should()`.
      //
      // Note that we have to use [[DefineProperty]] instead of [[Put]]
      // since otherwise we would trigger this very setter!
      Object.defineProperty(this, 'should', {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    // modify Object.prototype to have `should`
    Object.defineProperty(Object.prototype, 'should', {
      set: shouldSetter,
      get: shouldGetter,
      configurable: true
    });

    var should = {};

    /**
     * ### .fail(actual, expected, [message], [operator])
     *
     * Throw a failure.
     *
     * @name fail
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @param {String} operator
     * @namespace BDD
     * @api public
     */

    should.fail = function (actual, expected, message, operator) {
      message = message || 'should.fail()';
      throw new chai.AssertionError(message, {
        actual: actual,
        expected: expected,
        operator: operator
      }, should.fail);
    };

    /**
     * ### .equal(actual, expected, [message])
     *
     * Asserts non-strict equality (`==`) of `actual` and `expected`.
     *
     *     should.equal(3, '3', '== coerces values to strings');
     *
     * @name equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
     *
     * Asserts that `function` will throw an error that is an instance of
     * `constructor`, or alternately that it will throw an error with message
     * matching `regexp`.
     *
     *     should.throw(fn, 'function throws a reference error');
     *     should.throw(fn, /function throws a reference error/);
     *     should.throw(fn, ReferenceError);
     *     should.throw(fn, ReferenceError, 'function throws a reference error');
     *     should.throw(fn, ReferenceError, /function throws a reference error/);
     *
     * @name throw
     * @alias Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.Throw(errt, errs);
    };

    /**
     * ### .exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var foo = 'hi';
     *
     *     should.exist(foo, 'foo exists');
     *
     * @name exist
     * @namespace Should
     * @api public
     */

    should.exist = function (val, msg) {
      new Assertion(val, msg).to.exist;
    };

    // negation
    should.not = {};

    /**
     * ### .not.equal(actual, expected, [message])
     *
     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
     *
     *     should.not.equal(3, 4, 'these numbers are not equal');
     *
     * @name not.equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.not.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.not.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/regexp], [message])
     *
     * Asserts that `function` will _not_ throw an error that is an instance of
     * `constructor`, or alternately that it will not throw an error with message
     * matching `regexp`.
     *
     *     should.not.throw(fn, Error, 'function does not throw');
     *
     * @name not.throw
     * @alias not.Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.not.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.not.Throw(errt, errs);
    };

    /**
     * ### .not.exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var bar = null;
     *
     *     should.not.exist(bar, 'bar does not exist');
     *
     * @name not.exist
     * @namespace Should
     * @api public
     */

    should.not.exist = function (val, msg) {
      new Assertion(val, msg).to.not.exist;
    };

    should['throw'] = should['Throw'];
    should.not['throw'] = should.not['Throw'];

    return should;
  };

  chai.should = loadShould;
  chai.Should = loadShould;
};
/*≠≠ node_modules/chai/lib/chai/interface/should.js ≠≠*/


/*== node_modules/chai/lib/chai/interface/assert.js ==*/
$m['chai/lib/chai/interface/assert'] = { exports: {} };
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

$m['chai/lib/chai/interface/assert'].exports = function (chai, util) {

  /*!
   * Chai dependencies.
   */

  var Assertion = chai.Assertion,
      flag = util.flag;

  /*!
   * Module export.
   */

  /**
   * ### assert(expression, message)
   *
   * Write your own test expressions.
   *
   *     assert('foo' !== 'bar', 'foo is not bar');
   *     assert(Array.isArray([]), 'empty arrays are arrays');
   *
   * @param {Mixed} expression to test for truthiness
   * @param {String} message to display on error
   * @name assert
   * @namespace Assert
   * @api public
   */

  var assert = chai.assert = function (express, errmsg) {
    var test = new Assertion(null, null, chai.assert, true);
    test.assert(express, errmsg, '[ negation message unavailable ]');
  };

  /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure. Node.js `assert` module-compatible.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Assert
   * @api public
   */

  assert.fail = function (actual, expected, message, operator) {
    message = message || 'assert.fail()';
    throw new chai.AssertionError(message, {
      actual: actual,
      expected: expected,
      operator: operator
    }, assert.fail);
  };

  /**
   * ### .isOk(object, [message])
   *
   * Asserts that `object` is truthy.
   *
   *     assert.isOk('everything', 'everything is ok');
   *     assert.isOk(false, 'this will fail');
   *
   * @name isOk
   * @alias ok
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isOk = function (val, msg) {
    new Assertion(val, msg, assert.isOk, true).is.ok;
  };

  /**
   * ### .isNotOk(object, [message])
   *
   * Asserts that `object` is falsy.
   *
   *     assert.isNotOk('everything', 'this will fail');
   *     assert.isNotOk(false, 'this will pass');
   *
   * @name isNotOk
   * @alias notOk
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotOk = function (val, msg) {
    new Assertion(val, msg, assert.isNotOk, true).is.not.ok;
  };

  /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     assert.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.equal = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.equal, true);

    test.assert(exp == flag(test, 'object'), 'expected #{this} to equal #{exp}', 'expected #{this} to not equal #{act}', exp, act, true);
  };

  /**
   * ### .notEqual(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     assert.notEqual(3, 4, 'these numbers are not equal');
   *
   * @name notEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notEqual = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.notEqual, true);

    test.assert(exp != flag(test, 'object'), 'expected #{this} to not equal #{exp}', 'expected #{this} to equal #{act}', exp, act, true);
  };

  /**
   * ### .strictEqual(actual, expected, [message])
   *
   * Asserts strict equality (`===`) of `actual` and `expected`.
   *
   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
   *
   * @name strictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.strictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.strictEqual, true).to.equal(exp);
  };

  /**
   * ### .notStrictEqual(actual, expected, [message])
   *
   * Asserts strict inequality (`!==`) of `actual` and `expected`.
   *
   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
   *
   * @name notStrictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notStrictEqual, true).to.not.equal(exp);
  };

  /**
   * ### .deepEqual(actual, expected, [message])
   *
   * Asserts that `actual` is deeply equal to `expected`.
   *
   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
   *
   * @name deepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @alias deepStrictEqual
   * @namespace Assert
   * @api public
   */

  assert.deepEqual = assert.deepStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.deepEqual, true).to.eql(exp);
  };

  /**
   * ### .notDeepEqual(actual, expected, [message])
   *
   * Assert that `actual` is not deeply equal to `expected`.
   *
   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
   *
   * @name notDeepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notDeepEqual, true).to.not.eql(exp);
  };

  /**
  * ### .isAbove(valueToCheck, valueToBeAbove, [message])
  *
  * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.
  *
  *     assert.isAbove(5, 2, '5 is strictly greater than 2');
  *
  * @name isAbove
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeAbove
  * @param {String} message
  * @namespace Assert
  * @api public
  */

  assert.isAbove = function (val, abv, msg) {
    new Assertion(val, msg, assert.isAbove, true).to.be.above(abv);
  };

  /**
  * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
  *
  * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.
  *
  *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
  *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
  *
  * @name isAtLeast
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeAtLeast
  * @param {String} message
  * @namespace Assert
  * @api public
  */

  assert.isAtLeast = function (val, atlst, msg) {
    new Assertion(val, msg, assert.isAtLeast, true).to.be.least(atlst);
  };

  /**
  * ### .isBelow(valueToCheck, valueToBeBelow, [message])
  *
  * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.
  *
  *     assert.isBelow(3, 6, '3 is strictly less than 6');
  *
  * @name isBelow
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeBelow
  * @param {String} message
  * @namespace Assert
  * @api public
  */

  assert.isBelow = function (val, blw, msg) {
    new Assertion(val, msg, assert.isBelow, true).to.be.below(blw);
  };

  /**
  * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
  *
  * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.
  *
  *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
  *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
  *
  * @name isAtMost
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeAtMost
  * @param {String} message
  * @namespace Assert
  * @api public
  */

  assert.isAtMost = function (val, atmst, msg) {
    new Assertion(val, msg, assert.isAtMost, true).to.be.most(atmst);
  };

  /**
   * ### .isTrue(value, [message])
   *
   * Asserts that `value` is true.
   *
   *     var teaServed = true;
   *     assert.isTrue(teaServed, 'the tea has been served');
   *
   * @name isTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isTrue = function (val, msg) {
    new Assertion(val, msg, assert.isTrue, true).is['true'];
  };

  /**
   * ### .isNotTrue(value, [message])
   *
   * Asserts that `value` is not true.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotTrue(tea, 'great, time for tea!');
   *
   * @name isNotTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotTrue = function (val, msg) {
    new Assertion(val, msg, assert.isNotTrue, true).to.not.equal(true);
  };

  /**
   * ### .isFalse(value, [message])
   *
   * Asserts that `value` is false.
   *
   *     var teaServed = false;
   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
   *
   * @name isFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFalse = function (val, msg) {
    new Assertion(val, msg, assert.isFalse, true).is['false'];
  };

  /**
   * ### .isNotFalse(value, [message])
   *
   * Asserts that `value` is not false.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotFalse(tea, 'great, time for tea!');
   *
   * @name isNotFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFalse = function (val, msg) {
    new Assertion(val, msg, assert.isNotFalse, true).to.not.equal(false);
  };

  /**
   * ### .isNull(value, [message])
   *
   * Asserts that `value` is null.
   *
   *     assert.isNull(err, 'there was no error');
   *
   * @name isNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNull = function (val, msg) {
    new Assertion(val, msg, assert.isNull, true).to.equal(null);
  };

  /**
   * ### .isNotNull(value, [message])
   *
   * Asserts that `value` is not null.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotNull(tea, 'great, time for tea!');
   *
   * @name isNotNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNull = function (val, msg) {
    new Assertion(val, msg, assert.isNotNull, true).to.not.equal(null);
  };

  /**
   * ### .isNaN
   *
   * Asserts that value is NaN.
   *
   *     assert.isNaN(NaN, 'NaN is NaN');
   *
   * @name isNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNaN, true).to.be.NaN;
  };

  /**
   * ### .isNotNaN
   *
   * Asserts that value is not NaN.
   *
   *     assert.isNotNaN(4, '4 is not NaN');
   *
   * @name isNotNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
  assert.isNotNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNotNaN, true).not.to.be.NaN;
  };

  /**
   * ### .exists
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi';
   *
   *     assert.exists(foo, 'foo is neither `null` nor `undefined`');
   *
   * @name exists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.exists = function (val, msg) {
    new Assertion(val, msg, assert.exists, true).to.exist;
  };

  /**
   * ### .notExists
   *
   * Asserts that the target is either `null` or `undefined`.
   *
   *     var bar = null
   *       , baz;
   *
   *     assert.notExists(bar);
   *     assert.notExists(baz, 'baz is either null or undefined');
   *
   * @name notExists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notExists = function (val, msg) {
    new Assertion(val, msg, assert.notExists, true).to.not.exist;
  };

  /**
   * ### .isUndefined(value, [message])
   *
   * Asserts that `value` is `undefined`.
   *
   *     var tea;
   *     assert.isUndefined(tea, 'no tea defined');
   *
   * @name isUndefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isUndefined = function (val, msg) {
    new Assertion(val, msg, assert.isUndefined, true).to.equal(undefined);
  };

  /**
   * ### .isDefined(value, [message])
   *
   * Asserts that `value` is not `undefined`.
   *
   *     var tea = 'cup of chai';
   *     assert.isDefined(tea, 'tea has been defined');
   *
   * @name isDefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isDefined = function (val, msg) {
    new Assertion(val, msg, assert.isDefined, true).to.not.equal(undefined);
  };

  /**
   * ### .isFunction(value, [message])
   *
   * Asserts that `value` is a function.
   *
   *     function serveTea() { return 'cup of tea'; };
   *     assert.isFunction(serveTea, 'great, we can have tea now');
   *
   * @name isFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFunction = function (val, msg) {
    new Assertion(val, msg, assert.isFunction, true).to.be.a('function');
  };

  /**
   * ### .isNotFunction(value, [message])
   *
   * Asserts that `value` is _not_ a function.
   *
   *     var serveTea = [ 'heat', 'pour', 'sip' ];
   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
   *
   * @name isNotFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFunction = function (val, msg) {
    new Assertion(val, msg, assert.isNotFunction, true).to.not.be.a('function');
  };

  /**
   * ### .isObject(value, [message])
   *
   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
   * _The assertion does not match subclassed objects._
   *
   *     var selection = { name: 'Chai', serve: 'with spices' };
   *     assert.isObject(selection, 'tea selection is an object');
   *
   * @name isObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isObject = function (val, msg) {
    new Assertion(val, msg, assert.isObject, true).to.be.a('object');
  };

  /**
   * ### .isNotObject(value, [message])
   *
   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
   *
   *     var selection = 'chai'
   *     assert.isNotObject(selection, 'tea selection is not an object');
   *     assert.isNotObject(null, 'null is not an object');
   *
   * @name isNotObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotObject = function (val, msg) {
    new Assertion(val, msg, assert.isNotObject, true).to.not.be.a('object');
  };

  /**
   * ### .isArray(value, [message])
   *
   * Asserts that `value` is an array.
   *
   *     var menu = [ 'green', 'chai', 'oolong' ];
   *     assert.isArray(menu, 'what kind of tea do we want?');
   *
   * @name isArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isArray = function (val, msg) {
    new Assertion(val, msg, assert.isArray, true).to.be.an('array');
  };

  /**
   * ### .isNotArray(value, [message])
   *
   * Asserts that `value` is _not_ an array.
   *
   *     var menu = 'green|chai|oolong';
   *     assert.isNotArray(menu, 'what kind of tea do we want?');
   *
   * @name isNotArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotArray = function (val, msg) {
    new Assertion(val, msg, assert.isNotArray, true).to.not.be.an('array');
  };

  /**
   * ### .isString(value, [message])
   *
   * Asserts that `value` is a string.
   *
   *     var teaOrder = 'chai';
   *     assert.isString(teaOrder, 'order placed');
   *
   * @name isString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isString = function (val, msg) {
    new Assertion(val, msg, assert.isString, true).to.be.a('string');
  };

  /**
   * ### .isNotString(value, [message])
   *
   * Asserts that `value` is _not_ a string.
   *
   *     var teaOrder = 4;
   *     assert.isNotString(teaOrder, 'order placed');
   *
   * @name isNotString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotString = function (val, msg) {
    new Assertion(val, msg, assert.isNotString, true).to.not.be.a('string');
  };

  /**
   * ### .isNumber(value, [message])
   *
   * Asserts that `value` is a number.
   *
   *     var cups = 2;
   *     assert.isNumber(cups, 'how many cups');
   *
   * @name isNumber
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNumber, true).to.be.a('number');
  };

  /**
   * ### .isNotNumber(value, [message])
   *
   * Asserts that `value` is _not_ a number.
   *
   *     var cups = '2 cups please';
   *     assert.isNotNumber(cups, 'how many cups');
   *
   * @name isNotNumber
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNotNumber, true).to.not.be.a('number');
  };

  /**
  * ### .isFinite(value, [message])
  *
  * Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.
  *
  *     var cups = 2;
  *     assert.isFinite(cups, 'how many cups');
  *
  *     assert.isFinite(NaN); // throws
  *
  * @name isFinite
  * @param {Number} value
  * @param {String} message
  * @namespace Assert
  * @api public
  */

  assert.isFinite = function (val, msg) {
    new Assertion(val, msg, assert.isFinite, true).to.be.finite;
  };

  /**
   * ### .isBoolean(value, [message])
   *
   * Asserts that `value` is a boolean.
   *
   *     var teaReady = true
   *       , teaServed = false;
   *
   *     assert.isBoolean(teaReady, 'is the tea ready');
   *     assert.isBoolean(teaServed, 'has tea been served');
   *
   * @name isBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isBoolean, true).to.be.a('boolean');
  };

  /**
   * ### .isNotBoolean(value, [message])
   *
   * Asserts that `value` is _not_ a boolean.
   *
   *     var teaReady = 'yep'
   *       , teaServed = 'nope';
   *
   *     assert.isNotBoolean(teaReady, 'is the tea ready');
   *     assert.isNotBoolean(teaServed, 'has tea been served');
   *
   * @name isNotBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isNotBoolean, true).to.not.be.a('boolean');
  };

  /**
   * ### .typeOf(value, name, [message])
   *
   * Asserts that `value`'s type is `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
   *     assert.typeOf('tea', 'string', 'we have a string');
   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
   *     assert.typeOf(null, 'null', 'we have a null');
   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
   *
   * @name typeOf
   * @param {Mixed} value
   * @param {String} name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.typeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.typeOf, true).to.be.a(type);
  };

  /**
   * ### .notTypeOf(value, name, [message])
   *
   * Asserts that `value`'s type is _not_ `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
   *
   * @name notTypeOf
   * @param {Mixed} value
   * @param {String} typeof name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notTypeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notTypeOf, true).to.not.be.a(type);
  };

  /**
   * ### .instanceOf(object, constructor, [message])
   *
   * Asserts that `value` is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new Tea('chai');
   *
   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
   *
   * @name instanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.instanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.instanceOf, true).to.be.instanceOf(type);
  };

  /**
   * ### .notInstanceOf(object, constructor, [message])
   *
   * Asserts `value` is not an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new String('chai');
   *
   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
   *
   * @name notInstanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInstanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notInstanceOf, true).to.not.be.instanceOf(type);
  };

  /**
   * ### .include(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.include([1,2,3], 2, 'array contains value');
   *     assert.include('foobar', 'foo', 'string contains substring');
   *     assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
   *
   * Strict equality (===) is used. When asserting the inclusion of a value in
   * an array, the array is searched for an element that's strictly equal to the
   * given value. When asserting a subset of properties in an object, the object
   * is searched for the given property keys, checking that each one is present
   * and stricty equal to the given property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.include([obj1, obj2], obj1);
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1});
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1, bar: obj2});
   *
   * @name include
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.include = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.include, true).include(inc);
  };

  /**
   * ### .notInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.notInclude([1,2,3], 4, 'array doesn't contain value');
   *     assert.notInclude('foobar', 'baz', 'string doesn't contain substring');
   *     assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn't contain property');
   *
   * Strict equality (===) is used. When asserting the absence of a value in an
   * array, the array is searched to confirm the absence of an element that's
   * strictly equal to the given value. When asserting a subset of properties in
   * an object, the object is searched to confirm that at least one of the given
   * property keys is either not present or not strictly equal to the given
   * property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notInclude([obj1, obj2], {a: 1});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: obj1, bar: {b: 2}});
   *
   * @name notInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notInclude, true).not.include(inc);
  };

  /**
   * ### .deepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.deepInclude([obj1, obj2], {a: 1});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 2}});
   *
   * @name deepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.deepInclude, true).deep.include(inc);
  };

  /**
   * ### .notDeepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notDeepInclude([obj1, obj2], {a: 9});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 9}});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 9}});
   *
   * @name notDeepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepInclude, true).not.deep.include(inc);
  };

  /**
   * ### .nestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'. 
   * Can be used to assert the inclusion of a subset of properties in an 
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.nestedInclude({'.a': {'b': 'x'}}, {'\\.a.[b]': 'x'});
   *     assert.nestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'x'});
   * 
   * @name nestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */

  assert.nestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.nestedInclude, true).nested.include(inc);
  };

  /**
   * ### .notNestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' does not include 'needle'. 
   * Can be used to assert the absence of a subset of properties in an 
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties. 
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.notNestedInclude({'.a': {'b': 'x'}}, {'\\.a.b': 'y'});
   *     assert.notNestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'y'});
   * 
   * @name notNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */

  assert.notNestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notNestedInclude, true).not.nested.include(inc);
  };

  /**
   * ### .deepNestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an 
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.deepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {x: 1}});
   *     assert.deepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {x: 1}});
   *    
   * @name deepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */

  assert.deepNestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.deepNestedInclude, true).deep.nested.include(inc);
  };

  /**
   * ### .notDeepNestedInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' does not include 'needle'.
   * Can be used to assert the absence of a subset of properties in an 
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested 
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   * 
   *     assert.notDeepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {y: 1}})
   *     assert.notDeepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {y: 2}});
   *    
   * @name notDeepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public 
   */

  assert.notDeepNestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepNestedInclude, true).not.deep.nested.include(inc);
  };

  /**
   * ### .ownInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an 
   * object while ignoring inherited properties.
   * 
   *     assert.ownInclude({ a: 1 }, { a: 1 });
   * 
   * @name ownInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.ownInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.ownInclude, true).own.include(inc);
  };

  /**
   * ### .notOwnInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the absence of a subset of properties in an 
   * object while ignoring inherited properties.
   * 
   *     Object.prototype.b = 2;
   * 
   *     assert.notOwnInclude({ a: 1 }, { b: 2 });
   * 
   * @name notOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notOwnInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notOwnInclude, true).not.own.include(inc);
  };

  /**
   * ### .deepOwnInclude(haystack, needle, [message])
   * 
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an 
   * object while ignoring inherited properties and checking for deep equality.
   * 
   *      assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}});
   *      
   * @name deepOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepOwnInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.deepOwnInclude, true).deep.own.include(inc);
  };

  /**
  * ### .notDeepOwnInclude(haystack, needle, [message])
  * 
  * Asserts that 'haystack' includes 'needle'.
  * Can be used to assert the absence of a subset of properties in an 
  * object while ignoring inherited properties and checking for deep equality.
  * 
  *      assert.notDeepOwnInclude({a: {b: 2}}, {a: {c: 3}});
  *      
  * @name notDeepOwnInclude
  * @param {Object} haystack
  * @param {Object} needle
  * @param {String} message
  * @namespace Assert
  * @api public
  */

  assert.notDeepOwnInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepOwnInclude, true).not.deep.own.include(inc);
  };

  /**
   * ### .match(value, regexp, [message])
   *
   * Asserts that `value` matches the regular expression `regexp`.
   *
   *     assert.match('foobar', /^foo/, 'regexp matches');
   *
   * @name match
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.match = function (exp, re, msg) {
    new Assertion(exp, msg, assert.match, true).to.match(re);
  };

  /**
   * ### .notMatch(value, regexp, [message])
   *
   * Asserts that `value` does not match the regular expression `regexp`.
   *
   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
   *
   * @name notMatch
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notMatch = function (exp, re, msg) {
    new Assertion(exp, msg, assert.notMatch, true).to.not.match(re);
  };

  /**
   * ### .property(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`.
   *
   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
   *     assert.property({ tea: { green: 'matcha' }}, 'toString');
   *
   * @name property
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.property = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.property, true).to.have.property(prop);
  };

  /**
   * ### .notProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property`.
   *
   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
   *
   * @name notProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notProperty, true).to.not.have.property(prop);
  };

  /**
   * ### .propertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
   *
   * @name propertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.propertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.propertyVal, true).to.have.property(prop, val);
  };

  /**
   * ### .notPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
   *     assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good');
   *
   * @name notPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notPropertyVal, true).to.not.have.property(prop, val);
  };

  /**
   * ### .deepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a deep equality check.
   *
   *     assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepPropertyVal, true).to.have.deep.property(prop, val);
  };

  /**
   * ### .notDeepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a deep equality check.
   *
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *
   * @name notDeepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepPropertyVal, true).to.not.have.deep.property(prop, val);
  };

  /**
   * ### .ownProperty(object, property, [message])
   *
   * Asserts that `object` has a direct property named by `property`. Inherited
   * properties aren't checked.
   *
   *     assert.ownProperty({ tea: { green: 'matcha' }}, 'tea');
   *
   * @name ownProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.ownProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.ownProperty, true).to.have.own.property(prop);
  };

  /**
   * ### .notOwnProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by
   * `property`. Inherited properties aren't checked.
   *
   *     assert.notOwnProperty({ tea: { green: 'matcha' }}, 'coffee');
   *     assert.notOwnProperty({}, 'toString');
   *
   * @name notOwnProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.notOwnProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notOwnProperty, true).to.not.have.own.property(prop);
  };

  /**
   * ### .ownPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a strict equality check (===).
   * Inherited properties aren't checked.
   *
   *     assert.ownPropertyVal({ coffee: 'is good'}, 'coffee', 'is good');
   *
   * @name ownPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.ownPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.ownPropertyVal, true).to.have.own.property(prop, value);
  };

  /**
   * ### .notOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a strict equality check
   * (===). Inherited properties aren't checked.
   *
   *     assert.notOwnPropertyVal({ tea: 'is better'}, 'tea', 'is worse');
   *     assert.notOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notOwnPropertyVal, true).to.not.have.own.property(prop, value);
  };

  /**
   * ### .deepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a deep equality check. Inherited
   * properties aren't checked.
   *
   *     assert.deepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.deepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.deepOwnPropertyVal, true).to.have.deep.own.property(prop, value);
  };

  /**
   * ### .notDeepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a deep equality check.
   * Inherited properties aren't checked.
   *
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *     assert.notDeepOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notDeepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notDeepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(prop, value);
  };

  /**
   * ### .nestedProperty(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`, which can be a string using dot- and bracket-notation for
   * nested reference.
   *
   *     assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green');
   *
   * @name nestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.nestedProperty, true).to.have.nested.property(prop);
  };

  /**
   * ### .notNestedProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`, which
   * can be a string using dot- and bracket-notation for nested reference. The
   * property cannot exist on the object nor anywhere in its prototype chain.
   *
   *     assert.notNestedProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
   *
   * @name notNestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notNestedProperty, true).to.not.have.nested.property(prop);
  };

  /**
   * ### .nestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a strict equality check (===).
   *
   *     assert.nestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
   *
   * @name nestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.nestedPropertyVal, true).to.have.nested.property(prop, val);
  };

  /**
   * ### .notNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a strict equality check (===).
   *
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'coffee.green', 'matcha');
   *
   * @name notNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notNestedPropertyVal, true).to.not.have.nested.property(prop, val);
  };

  /**
   * ### .deepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with a value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a deep equality check.
   *
   *     assert.deepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yum' });
   *
   * @name deepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepNestedPropertyVal, true).to.have.deep.nested.property(prop, val);
  };

  /**
   * ### .notDeepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a deep equality check.
   *
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' });
   *
   * @name notDeepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(prop, val);
  };

  /**
   * ### .lengthOf(object, length, [message])
   *
   * Asserts that `object` has a `length` property with the expected value.
   *
   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
   *     assert.lengthOf('foobar', 6, 'string has length of 6');
   *
   * @name lengthOf
   * @param {Mixed} object
   * @param {Number} length
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.lengthOf = function (exp, len, msg) {
    new Assertion(exp, msg, assert.lengthOf, true).to.have.lengthOf(len);
  };

  /**
   * ### .hasAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337});
   *     assert.hasAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAnyKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyKeys, true).to.have.any.keys(keys);
  };

  /**
   * ### .hasAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all and only all of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337]);
   *     assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllKeys, true).to.have.all.keys(keys);
  };

  /**
   * ### .containsAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all of the `keys` provided but may have more keys not listed.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}]);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name containsAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.containsAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllKeys, true).to.contain.all.keys(keys);
  };

  /**
   * ### .doesNotHaveAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has none of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAnyKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyKeys, true).to.not.have.any.keys(keys);
  };

  /**
   * ### .doesNotHaveAllKeys(object, [keys], [message])
   *
   * Asserts that `object` does not have at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllKeys, true).to.not.have.all.keys(keys);
  };

  /**
   * ### .hasAnyDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {three: 'three'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyDeepKeys, true).to.have.any.deep.keys(keys);
  };

  /**
    * ### .hasAllDeepKeys(object, [keys], [message])
    *
    * Asserts that `object` has all and only all of the `keys` provided.
    * Since Sets and Maps can have objects as keys you can use this assertion to perform
    * a deep comparison.
    * You can also provide a single object instead of a `keys` array and its keys
    * will be used as the expected set of keys.
    *
    *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne']]), {one: 'one'});
    *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    *     assert.hasAllDeepKeys(new Set([{one: 'one'}]), {one: 'one'});
    *     assert.hasAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
    *
    * @name hasAllDeepKeys
    * @param {Mixed} object
    * @param {Array|Object} keys
    * @param {String} message
    * @namespace Assert
    * @api public
    */

  assert.hasAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllDeepKeys, true).to.have.all.deep.keys(keys);
  };

  /**
    * ### .containsAllDeepKeys(object, [keys], [message])
    *
    * Asserts that `object` contains all of the `keys` provided.
    * Since Sets and Maps can have objects as keys you can use this assertion to perform
    * a deep comparison.
    * You can also provide a single object instead of a `keys` array and its keys
    * will be used as the expected set of keys.
    *
    *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
    *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
    *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
    *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
    *
    * @name containsAllDeepKeys
    * @param {Mixed} object
    * @param {Array|Object} keys
    * @param {String} message
    * @namespace Assert
    * @api public
    */

  assert.containsAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllDeepKeys, true).to.contain.all.deep.keys(keys);
  };

  /**
    * ### .doesNotHaveAnyDeepKeys(object, [keys], [message])
    *
    * Asserts that `object` has none of the `keys` provided.
    * Since Sets and Maps can have objects as keys you can use this assertion to perform
    * a deep comparison.
    * You can also provide a single object instead of a `keys` array and its keys
    * will be used as the expected set of keys.
    *
    *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
    *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
    *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
    *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
    *
    * @name doesNotHaveAnyDeepKeys
    * @param {Mixed} object
    * @param {Array|Object} keys
    * @param {String} message
    * @namespace Assert
    * @api public
    */

  assert.doesNotHaveAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(keys);
  };

  /**
    * ### .doesNotHaveAllDeepKeys(object, [keys], [message])
    *
    * Asserts that `object` does not have at least one of the `keys` provided.
    * Since Sets and Maps can have objects as keys you can use this assertion to perform
    * a deep comparison.
    * You can also provide a single object instead of a `keys` array and its keys
    * will be used as the expected set of keys.
    *
    *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
    *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {one: 'one'}]);
    *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
    *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {fifty: 'fifty'}]);
    *
    * @name doesNotHaveAllDeepKeys
    * @param {Mixed} object
    * @param {Array|Object} keys
    * @param {String} message
    * @namespace Assert
    * @api public
    */

  assert.doesNotHaveAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(keys);
  };

  /**
    * ### .throws(fn, [errorLike/string/regexp], [string/regexp], [message])
    *
    * If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an
    * instance of `errorLike`.
    * If `errorLike` is an `Error` instance, asserts that the error thrown is the same
    * instance as `errorLike`.
    * If `errMsgMatcher` is provided, it also asserts that the error thrown will have a
    * message matching `errMsgMatcher`.
    *
    *     assert.throws(fn, 'function throws a reference error');
    *     assert.throws(fn, /function throws a reference error/);
    *     assert.throws(fn, ReferenceError);
    *     assert.throws(fn, errorInstance);
    *     assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg');
    *     assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg');
    *     assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
    *     assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);
    *
    * @name throws
    * @alias throw
    * @alias Throw
    * @param {Function} fn
    * @param {ErrorConstructor|Error} errorLike
    * @param {RegExp|String} errMsgMatcher
    * @param {String} message
    * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
    * @namespace Assert
    * @api public
    */

  assert.throws = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var assertErr = new Assertion(fn, msg, assert.throws, true).to.throw(errorLike, errMsgMatcher);
    return flag(assertErr, 'object');
  };

  /**
   * ### .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])
   *
   * If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an
   * instance of `errorLike`.
   * If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same
   * instance as `errorLike`.
   * If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a
   * message matching `errMsgMatcher`.
   *
   *     assert.doesNotThrow(fn, 'Any Error thrown must not have this message');
   *     assert.doesNotThrow(fn, /Any Error thrown must not match this/);
   *     assert.doesNotThrow(fn, Error);
   *     assert.doesNotThrow(fn, errorInstance);
   *     assert.doesNotThrow(fn, Error, 'Error must not have this message');
   *     assert.doesNotThrow(fn, errorInstance, 'Error must not have this message');
   *     assert.doesNotThrow(fn, Error, /Error must not match this/);
   *     assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
   *
   * @name doesNotThrow
   * @param {Function} fn
   * @param {ErrorConstructor} errorLike
   * @param {RegExp|String} errMsgMatcher
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.doesNotThrow = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    new Assertion(fn, msg, assert.doesNotThrow, true).to.not.throw(errorLike, errMsgMatcher);
  };

  /**
   * ### .operator(val1, operator, val2, [message])
   *
   * Compares two values using `operator`.
   *
   *     assert.operator(1, '<', 2, 'everything is ok');
   *     assert.operator(1, '>', 2, 'this will fail');
   *
   * @name operator
   * @param {Mixed} val1
   * @param {String} operator
   * @param {Mixed} val2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.operator = function (val, operator, val2, msg) {
    var ok;
    switch (operator) {
      case '==':
        ok = val == val2;
        break;
      case '===':
        ok = val === val2;
        break;
      case '>':
        ok = val > val2;
        break;
      case '>=':
        ok = val >= val2;
        break;
      case '<':
        ok = val < val2;
        break;
      case '<=':
        ok = val <= val2;
        break;
      case '!=':
        ok = val != val2;
        break;
      case '!==':
        ok = val !== val2;
        break;
      default:
        msg = msg ? msg + ': ' : msg;
        throw new chai.AssertionError(msg + 'Invalid operator "' + operator + '"', undefined, assert.operator);
    }
    var test = new Assertion(ok, msg, assert.operator, true);
    test.assert(true === flag(test, 'object'), 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2), 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2));
  };

  /**
   * ### .closeTo(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
   *
   * @name closeTo
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.closeTo = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.closeTo, true).to.be.closeTo(exp, delta);
  };

  /**
   * ### .approximately(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
   *
   * @name approximately
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.approximately = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.approximately, true).to.be.approximately(exp, delta);
  };

  /**
   * ### .sameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * strict equality check (===).
   *
   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
   *
   * @name sameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameMembers, true).to.have.same.members(set2);
  };

  /**
   * ### .notSameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a strict equality check (===).
   *
   *     assert.notSameMembers([ 1, 2, 3 ], [ 5, 1, 3 ], 'not same members');
   *
   * @name notSameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameMembers, true).to.not.have.same.members(set2);
  };

  /**
   * ### .sameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * deep equality check.
   *
   *     assert.sameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members');
   *
   * @name sameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepMembers, true).to.have.same.deep.members(set2);
  };

  /**
   * ### .notSameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a deep equality check.
   *
   *     assert.notSameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { f: 5 }], 'not same deep members');
   *
   * @name notSameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepMembers, true).to.not.have.same.deep.members(set2);
  };

  /**
   * ### .sameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a strict equality check (===).
   *
   *     assert.sameOrderedMembers([ 1, 2, 3 ], [ 1, 2, 3 ], 'same ordered members');
   *
   * @name sameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameOrderedMembers, true).to.have.same.ordered.members(set2);
  };

  /**
   * ### .notSameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a strict equality check (===).
   *
   *     assert.notSameOrderedMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'not same ordered members');
   *
   * @name notSameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameOrderedMembers, true).to.not.have.same.ordered.members(set2);
  };

  /**
   * ### .sameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a deep equality check.
   *
   * assert.sameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { c: 3 } ], 'same deep ordered members');
   *
   * @name sameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(set2);
  };

  /**
   * ### .notSameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a deep equality check.
   *
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { z: 5 } ], 'not same deep ordered members');
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { c: 3 } ], 'not same deep ordered members');
   *
   * @name notSameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(set2);
  };

  /**
   * ### .includeMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1, 2 ], 'include members');
   *
   * @name includeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeMembers, true).to.include.members(subset);
  };

  /**
   * ### .notIncludeMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.notIncludeMembers([ 1, 2, 3 ], [ 5, 1 ], 'not include members');
   *
   * @name notIncludeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeMembers, true).to.not.include.members(subset);
  };

  /**
   * ### .includeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a deep
   * equality check. Duplicates are ignored.
   *
   *     assert.includeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { b: 2 } ], 'include deep members');
   *
   * @name includeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepMembers, true).to.include.deep.members(subset);
  };

  /**
   * ### .notIncludeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * deep equality check. Duplicates are ignored.
   *
   *     assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
   *
   * @name notIncludeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepMembers, true).to.not.include.deep.members(subset);
  };

  /**
   * ### .includeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.includeOrderedMembers([ 1, 2, 3 ], [ 1, 2 ], 'include ordered members');
   *
   * @name includeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeOrderedMembers, true).to.include.ordered.members(subset);
  };

  /**
   * ### .notIncludeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 1 ], 'not include ordered members');
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 3 ], 'not include ordered members');
   *
   * @name notIncludeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeOrderedMembers, true).to.not.include.ordered.members(subset);
  };

  /**
   * ### .includeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.includeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 } ], 'include deep ordered members');
   *
   * @name includeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepOrderedMembers, true).to.include.deep.ordered.members(subset);
  };

  /**
   * ### .notIncludeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { f: 5 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { c: 3 } ], 'not include deep ordered members');
   *
   * @name notIncludeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(subset);
  };

  /**
   * ### .oneOf(inList, list, [message])
   *
   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
   *
   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
   *
   * @name oneOf
   * @param {*} inList
   * @param {Array<*>} list
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.oneOf = function (inList, list, msg) {
    new Assertion(inList, msg, assert.oneOf, true).to.be.oneOf(list);
  };

  /**
   * ### .changes(function, object, property, [message])
   *
   * Asserts that a function changes the value of a property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 22 };
   *     assert.changes(fn, obj, 'val');
   *
   * @name changes
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changes = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changes, true).to.change(obj, prop);
  };

  /**
  * ### .changesBy(function, object, property, delta, [message])
  *
  * Asserts that a function changes the value of a property by an amount (delta).
  *
  *     var obj = { val: 10 };
  *     var fn = function() { obj.val += 2 };
  *     assert.changesBy(fn, obj, 'val', 2);
  *
  * @name changesBy
  * @param {Function} modifier function
  * @param {Object} object or getter function
  * @param {String} property name _optional_
  * @param {Number} change amount (delta)
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */

  assert.changesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesBy, true).to.change(obj, prop).by(delta);
  };

  /**
  * ### .doesNotChange(function, object, property, [message])
  *
  * Asserts that a function does not change the value of a property.
  *
  *     var obj = { val: 10 };
  *     var fn = function() { console.log('foo'); };
  *     assert.doesNotChange(fn, obj, 'val');
  *
  * @name doesNotChange
  * @param {Function} modifier function
  * @param {Object} object or getter function
  * @param {String} property name _optional_
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */

  assert.doesNotChange = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotChange, true).to.not.change(obj, prop);
  };

  /**
   * ### .changesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not change the value of a property or of a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.changesButNotBy(fn, obj, 'val', 5);
   *
   * @name changesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
  };

  /**
   * ### .increases(function, object, property, [message])
   *
   * Asserts that a function increases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 13 };
   *     assert.increases(fn, obj, 'val');
   *
   * @name increases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.increases, true).to.increase(obj, prop);
  };

  /**
   * ### .increasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function increases a numeric object property or a function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.increasesBy(fn, obj, 'val', 10);
   *
   * @name increasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesBy, true).to.increase(obj, prop).by(delta);
  };

  /**
   * ### .doesNotIncrease(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 8 };
   *     assert.doesNotIncrease(fn, obj, 'val');
   *
   * @name doesNotIncrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotIncrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotIncrease, true).to.not.increase(obj, prop);
  };

  /**
   * ### .increasesButNotBy(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.increasesButNotBy(fn, obj, 'val', 10);
   *
   * @name increasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
  };

  /**
   * ### .decreases(function, object, property, [message])
   *
   * Asserts that a function decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreases(fn, obj, 'val');
   *
   * @name decreases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.decreases, true).to.decrease(obj, prop);
  };

  /**
   * ### .decreasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val -= 5 };
   *     assert.decreasesBy(fn, obj, 'val', 5);
   *
   * @name decreasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesBy, true).to.decrease(obj, prop).by(delta);
  };

  /**
   * ### .doesNotDecrease(function, object, property, [message])
   *
   * Asserts that a function does not decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.doesNotDecrease(fn, obj, 'val');
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecrease, true).to.not.decrease(obj, prop);
  };

  /**
   * ### .doesNotDecreaseBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.doesNotDecreaseBy(fn, obj, 'val', 1);
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecreaseBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
  };

  /**
   * ### .decreasesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreasesButNotBy(fn, obj, 'val', 1);
   *
   * @name decreasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
  };

  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */

  assert.ifError = function (val) {
    if (val) {
      throw val;
    }
  };

  /**
   * ### .isExtensible(object)
   *
   * Asserts that `object` is extensible (can have new properties added to it).
   *
   *     assert.isExtensible({});
   *
   * @name isExtensible
   * @alias extensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isExtensible, true).to.be.extensible;
  };

  /**
   * ### .isNotExtensible(object)
   *
   * Asserts that `object` is _not_ extensible.
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     assert.isNotExtensible(nonExtensibleObject);
   *     assert.isNotExtensible(sealedObject);
   *     assert.isNotExtensible(frozenObject);
   *
   * @name isNotExtensible
   * @alias notExtensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotExtensible, true).to.not.be.extensible;
  };

  /**
   * ### .isSealed(object)
   *
   * Asserts that `object` is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.seal({});
   *
   *     assert.isSealed(sealedObject);
   *     assert.isSealed(frozenObject);
   *
   * @name isSealed
   * @alias sealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isSealed, true).to.be.sealed;
  };

  /**
   * ### .isNotSealed(object)
   *
   * Asserts that `object` is _not_ sealed.
   *
   *     assert.isNotSealed({});
   *
   * @name isNotSealed
   * @alias notSealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotSealed, true).to.not.be.sealed;
  };

  /**
   * ### .isFrozen(object)
   *
   * Asserts that `object` is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *     assert.frozen(frozenObject);
   *
   * @name isFrozen
   * @alias frozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isFrozen, true).to.be.frozen;
  };

  /**
   * ### .isNotFrozen(object)
   *
   * Asserts that `object` is _not_ frozen.
   *
   *     assert.isNotFrozen({});
   *
   * @name isNotFrozen
   * @alias notFrozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotFrozen, true).to.not.be.frozen;
  };

  /**
   * ### .isEmpty(target)
   *
   * Asserts that the target does not contain any values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isEmpty([]);
   *     assert.isEmpty('');
   *     assert.isEmpty(new Map);
   *     assert.isEmpty({});
   *
   * @name isEmpty
   * @alias empty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isEmpty = function (val, msg) {
    new Assertion(val, msg, assert.isEmpty, true).to.be.empty;
  };

  /**
   * ### .isNotEmpty(target)
   *
   * Asserts that the target contains values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isNotEmpty([1, 2]);
   *     assert.isNotEmpty('34');
   *     assert.isNotEmpty(new Set([5, 6]));
   *     assert.isNotEmpty({ key: 7 });
   *
   * @name isNotEmpty
   * @alias notEmpty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotEmpty = function (val, msg) {
    new Assertion(val, msg, assert.isNotEmpty, true).to.not.be.empty;
  };

  /*!
   * Aliases.
   */

  (function alias(name, as) {
    assert[as] = assert[name];
    return alias;
  })('isOk', 'ok')('isNotOk', 'notOk')('throws', 'throw')('throws', 'Throw')('isExtensible', 'extensible')('isNotExtensible', 'notExtensible')('isSealed', 'sealed')('isNotSealed', 'notSealed')('isFrozen', 'frozen')('isNotFrozen', 'notFrozen')('isEmpty', 'empty')('isNotEmpty', 'notEmpty');
};
/*≠≠ node_modules/chai/lib/chai/interface/assert.js ≠≠*/


/*== node_modules/prop-types/lib/ReactPropTypesSecret.js ==*/
$m['prop-types/lib/ReactPropTypesSecret'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypeslibReactPropTypesSecret__ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

$m['prop-types/lib/ReactPropTypesSecret'].exports = proptypeslibReactPropTypesSecret__ReactPropTypesSecret;
/*≠≠ node_modules/prop-types/lib/ReactPropTypesSecret.js ≠≠*/


/*== node_modules/fbjs/lib/invariant.js ==*/
$m['fbjs/lib/invariant'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var fbjslibinvariant__validateFormat = function validateFormat(format) {};

if ('development' !== 'production') {
  fbjslibinvariant__validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function fbjslibinvariant__invariant(condition, format, a, b, c, d, e, f) {
  fbjslibinvariant__validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

$m['fbjs/lib/invariant'].exports = fbjslibinvariant__invariant;
/*≠≠ node_modules/fbjs/lib/invariant.js ≠≠*/


/*== node_modules/fbjs/lib/emptyFunction.js ==*/
$m['fbjs/lib/emptyFunction'] = { exports: {} };
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function fbjslibemptyFunction__makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var fbjslibemptyFunction__emptyFunction = function emptyFunction() {};

fbjslibemptyFunction__emptyFunction.thatReturns = fbjslibemptyFunction__makeEmptyFunction;
fbjslibemptyFunction__emptyFunction.thatReturnsFalse = fbjslibemptyFunction__makeEmptyFunction(false);
fbjslibemptyFunction__emptyFunction.thatReturnsTrue = fbjslibemptyFunction__makeEmptyFunction(true);
fbjslibemptyFunction__emptyFunction.thatReturnsNull = fbjslibemptyFunction__makeEmptyFunction(null);
fbjslibemptyFunction__emptyFunction.thatReturnsThis = function () {
  return this;
};
fbjslibemptyFunction__emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

$m['fbjs/lib/emptyFunction'].exports = fbjslibemptyFunction__emptyFunction;
/*≠≠ node_modules/fbjs/lib/emptyFunction.js ≠≠*/


/*== node_modules/deep-freeze/index.js ==*/
$m['deep-freeze'] = { exports: {} };
$m['deep-freeze'].exports = function deepFreeze(o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });

  return o;
};
/*≠≠ node_modules/deep-freeze/index.js ≠≠*/


/*== node_modules/is-plain-obj/index.js ==*/
$m['is-plain-obj'] = { exports: {} };
var isplainobj__toString = Object.prototype.toString;

$m['is-plain-obj'].exports = function (x) {
	var prototype;
	return isplainobj__toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};
/*≠≠ node_modules/is-plain-obj/index.js ≠≠*/


/*== node_modules/preact/dist/preact.js ==*/
$m['preact'] = { exports: {} };
!function () {
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple,
            child,
            simple,
            i,
            children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2;) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--;) stack.push(child[i]);else {
            if ('boolean' == typeof child) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = '';else if ('number' == typeof child) child = String(child);else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child;else if (children === EMPTY_CHILDREN) children = [child];else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p,
            list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ;else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || '';else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || !1 === value) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || !1 === value) {
                if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
            } else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (! --diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom,
            prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        if ('string' == typeof vnode || 'number' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
        vnodeName = String(vnodeName);
        if (!dom || !isNamedNode(dom, vnodeName)) {
            out = createNode(vnodeName, isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild,
            props = out.__preactattr_,
            vchildren = vnode.children;
        if (null == props) {
            props = out.__preactattr_ = {};
            for (var a = out.attributes, i = a.length; i--;) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j,
            c,
            f,
            vchild,
            child,
            originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i],
                props = _child.__preactattr_,
                key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child);else if (child === f.nextSibling) removeNode(f);else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component);else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst,
            list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--;) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll);else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered,
                inst,
                cbase,
                props = component.props,
                state = component.state,
                context = component.context,
                previousProps = component.__p || props,
                previousState = component.__s || state,
                previousContext = component.__c || context,
                isUpdate = component.base,
                nextBase = component.__b,
                initialBase = isUpdate || nextBase,
                initialChildComponent = component._component,
                skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0;else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount,
                    base,
                    childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1);else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component,
                        t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component);else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component,
            originalComponent = c,
            oldDom = dom,
            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
            isOwner = isDirectOwner,
            props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner);else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function (state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function (callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function () {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if ('undefined' != typeof $m['preact']) $m['preact'].exports = preact;else self.preact = preact;
}();
/*≠≠ node_modules/preact/dist/preact.js ≠≠*/


/*== node_modules/performance-now/lib/performance-now.js ==*/
$m['performance-now'] = { exports: {} };
// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    $m['performance-now'].exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    $m['performance-now'].exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function () {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    $m['performance-now'].exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    $m['performance-now'].exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);
/*≠≠ node_modules/performance-now/lib/performance-now.js ≠≠*/


/*== node_modules/@yr/property/lib/isMergeable.js ==*/
$m['@yr/property/lib/isMergeable'] = { exports: {} };

var yrpropertylibisMergeable__isPlainObject = $m['is-plain-obj'].exports;

/**
 * Test if 'value' should be merged into 'obj' at 'key'
 * @param {Object} obj
 * @param {String} key
 * @param {Object} value
 * @returns {Boolean}
 */
$m['@yr/property/lib/isMergeable'].exports = function isMergeable(obj, key, value) {
  return key in obj && yrpropertylibisMergeable__isPlainObject(obj[key]) && yrpropertylibisMergeable__isPlainObject(value);
};
/*≠≠ node_modules/@yr/property/lib/isMergeable.js ≠≠*/


/*== node_modules/@yr/property/lib/clone.js ==*/
$m['@yr/property/lib/clone'] = { exports: {} };

var yrpropertylibclone__isPlainObject = $m['is-plain-obj'].exports;

/**
 * Shallow clone 'value' if it's an array or plain object
 * @param {Object|Array|Number|String} value
 * @returns {Object|Array|Number|String}
 */
$m['@yr/property/lib/clone'].exports = function clone(value) {
  if (value != null) {
    if (Array.isArray(value)) {
      return value.slice();
    }

    if (yrpropertylibclone__isPlainObject(value)) {
      var obj = {};

      for (var prop in value) {
        // Copy own properties
        if (value.hasOwnProperty(prop)) {
          obj[prop] = value[prop];
        }
      }

      return obj;
    }
  }

  return value;
};
/*≠≠ node_modules/@yr/property/lib/clone.js ≠≠*/


/*== node_modules/@yr/property/lib/write.js ==*/
$m['@yr/property/lib/write'] = { exports: {} };

var yrpropertylibwrite__clone = $m['@yr/property/lib/clone'].exports;
var yrpropertylibwrite__isMergeable = $m['@yr/property/lib/isMergeable'].exports;

/**
 * Write 'value' at 'key' of 'obj'
 * Handles merging of object properties if necessary
 * @param {Object} obj
 * @param {String} key
 * @param {Object} value
 * @param {Boolean} merge
 * @returns {Boolean}
 */
$m['@yr/property/lib/write'].exports = function write(obj, key, value, merge) {
  var mutated = false;

  // Don't write if values are the same
  if (obj[key] === value) {
    return mutated;
  }

  // Merge with existing if both objects (not array)
  if (merge && yrpropertylibwrite__isMergeable(obj, key, value)) {
    // Merged object must be unique, regardless of immutability
    obj[key] = yrpropertylibwrite__clone(obj[key]);
    for (var k in value) {
      if (k in obj[key]) {
        if (obj[key][k] !== value[k]) {
          // Deep merge
          mutated = write(obj[key], k, value[k], true) ? true : mutated;
        }
      } else {
        obj[key][k] = value[k];
        mutated = true;
      }
    }
  } else {
    if (Array.isArray(obj)) {
      var numKey = Number(key);

      if (!isNaN(numKey)) {
        key = Math.floor(numKey);
      }
    }
    obj[key] = value;
    mutated = true;
  }

  return mutated;
};
/*≠≠ node_modules/@yr/property/lib/write.js ≠≠*/


/*== node_modules/@yr/property/index.js ==*/
$m['@yr/property'] = { exports: {} };

/**
 * Generic utility for getting/setting properties of an object
 * https://github.com/yr/property
 * @copyright Yr
 * @license MIT
 */

var yrproperty__clone = $m['@yr/property/lib/clone'].exports;
var yrproperty__isPlainObject = $m['is-plain-obj'].exports;
var yrproperty__isMergeable = $m['@yr/property/lib/isMergeable'].exports;
var yrproperty__write = $m['@yr/property/lib/write'].exports;

var yrproperty__isProduction = true;
var yrproperty__deepFreeze = void 0;

// Allow for dead code removal
if ('development' !== 'production') {
  yrproperty__deepFreeze = $m['deep-freeze'].exports;
  yrproperty__isProduction = false;
}

var yrproperty__DEAULT_OPTIONS = {
  immutable: false,
  merge: true
};

$m['@yr/property'].exports.separator = '/';

/**
 * Retrieve value for 'key' of 'obj'
 * @param {Object} obj
 * @param {String} key
 * @returns {Object}
 */
$m['@yr/property'].exports.get = function get(obj, key) {
  if (typeof key !== 'string') {
    return undefined;
  }

  // Return all if empty key
  if (key === '') {
    return obj;
  }

  var _exports = $m['@yr/property'].exports,
      separator = _exports.separator;

  // Strip leading separator

  if (key.indexOf(separator) === 0) {
    key = key.slice(1);
  }

  // Not nested
  if (!~key.indexOf(separator)) {
    return obj[key];
  }

  var keys = key.split(separator);
  var n = keys.length;
  var idx = 0;

  // Walk property chain
  while (idx < n) {
    if (obj[keys[idx]] == null) {
      return undefined;
    }
    obj = obj[keys[idx]];
    idx++;
  }

  return obj;
};

/**
 * Store 'value' at 'key' of 'obj'
 * Returns new object if 'immutable', or original if not
 * @param {Object} obj
 * @param {String} key
 * @param {Object} value
 * @param {Object} options
 *  - {Boolean} immutable
 *  - {Boolean} merge
 * @returns {Object}
 */
$m['@yr/property'].exports.set = function set(obj, key, value, options) {
  options = options || yrproperty__DEAULT_OPTIONS;

  var _exports2 = $m['@yr/property'].exports,
      separator = _exports2.separator;
  var _options = options,
      immutable = _options.immutable,
      _options$merge = _options.merge,
      merge = _options$merge === undefined ? true : _options$merge;

  var handleFrozen = !yrproperty__isProduction;
  var originalObj = obj;
  var mutated = false;

  if (key !== undefined && typeof key === 'string') {
    // Strip leading separator
    if (key.indexOf(separator) === 0) {
      key = key.slice(1);
    }
    // Clone root when immutable, or frozen if mutable
    if (immutable || handleFrozen && Object.isFrozen(obj)) {
      obj = yrproperty__clone(obj);
    }
    // Not nested
    if (!~key.indexOf(separator)) {
      // Create new copy if we are merging props
      if (immutable && yrproperty__isMergeable(obj, key, value)) {
        obj[key] = yrproperty__clone(obj[key]);
      }
      mutated = yrproperty__write(obj, key, value, merge);
      // Remove key if value is 'undefined'
      if (value === undefined) {
        delete obj[key];
      }
    } else {
      var keys = key.split(separator);
      var n = keys.length;
      var idx = 0;
      var o = obj;

      // Walk parent tree, creating nodes if necessary
      while (idx < n - 1) {
        var prop = keys[idx];
        var nextProp = keys[idx + 1];
        var isObject = yrproperty__isPlainObject(o[prop]);
        var isArray = Array.isArray(o[prop]);

        // Clone each parent object if immutable, or unfreeze if mutable
        if (immutable || handleFrozen && isObject && Object.isFrozen(o[prop])) {
          o[prop] = yrproperty__clone(o[prop]);
        }
        // Create object if it doesn't exist, is array but next prop isn't an index, or is not an object/array
        if (o[prop] == null || isArray && isNaN(Number(nextProp)) || !isObject && !isArray) {
          o[prop] = {};
        }
        o = o[prop];
        idx++;
      }

      if (immutable) {
        value = yrproperty__freeze(value);
      }
      mutated = yrproperty__write(o, keys[idx], value, merge);
      // Remove key if value is 'undefined'
      if (value === undefined) {
        delete o[keys[idx]];
      }
    }

    if (immutable) {
      obj = yrproperty__freeze(obj);
    }

    return mutated ? obj : originalObj;
  }

  return originalObj;
};

/**
 * Reshape 'obj' so that property keys are of length 'depth'
 * @param {Object} obj
 * @param {Number} depth
 * @returns {Object}
 */
$m['@yr/property'].exports.reshape = function reshape(obj, depth) {
  if (depth == null || depth <= 0) {
    return obj;
  }

  var _exports3 = $m['@yr/property'].exports,
      separator = _exports3.separator,
      set = _exports3.set;

  var options = { immutable: false };

  function parse(obj, key, n) {
    var o = {};

    for (var prop in obj) {
      var leading = prop.indexOf(separator) === 0 ? separator : '';
      var p = leading ? prop.slice(1) : prop;
      var keys = p.split(separator);
      var value = obj[prop];

      if (keys.length === n) {
        o['' + key + prop] = value;

        // Inflate already flattened
      } else if (keys.length > n) {
        var key1 = '' + leading + keys.slice(0, n).join(separator);
        var key2 = keys.slice(n).join(separator);

        if (!o['' + key + key1]) {
          o['' + key + key1] = {};
        }
        set(o['' + key + key1], key2, value, options);

        // Flatten already inflated
      } else {
        if (!yrproperty__isPlainObject(value)) {
          o['' + key + prop] = value;
        } else {
          value = parse(value, '' + prop + separator, n - 1);
          // Merge
          for (var _p in value) {
            o['' + key + _p] = value[_p];
          }
        }
      }
    }

    return o;
  }

  return parse(obj, '', depth);
};

/**
 * Freeze 'obj'
 * @param {Object} obj
 * @returns {Object}
 */
function yrproperty__freeze(obj) {
  if (!yrproperty__isProduction && yrproperty__isPlainObject(obj)) {
    return yrproperty__deepFreeze(obj);
  }
  return obj;
}
/*≠≠ node_modules/@yr/property/index.js ≠≠*/


/*== node_modules/@yr/data-store/lib/methods/get.js ==*/
$m['@yr/data-store/lib/methods/get'] = { exports: {} };

var yrdatastorelibmethodsget__isPlainObject = $m['is-plain-obj'].exports;
var yrdatastorelibmethodsget__property = $m['@yr/property'].exports;

$m['@yr/data-store/lib/methods/get'].exports = yrdatastorelibmethodsget__get;

/**
 * Retrieve value stored at 'key'
 * Empty/null/undefined 'key' returns all data
 * @param {DataStore} store
 * @param {String} [key]
 * @param {Object} [options]
 *  - {Boolean} resolveReferences
 * @returns {*}
 */
function yrdatastorelibmethodsget__get(store, key, options) {
  if (key === '' || key == null) {
    return store._data;
  }
  return yrdatastorelibmethodsget__doGet(store, key, options);
}

/**
 * Retrieve value stored at 'key'
 * @param {DataStore} store
 * @param {String} key
 * @param {Object} [options]
 *  - {Boolean} resolveReferences
 * @returns {*}
 */
function yrdatastorelibmethodsget__doGet(store, key) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // Resolve back to original key if referenced
  key = store._resolveRefKey(key);

  var _options$resolveRefer = options.resolveReferences,
      resolveReferences = _options$resolveRefer === undefined ? true : _options$resolveRefer;

  var value = yrdatastorelibmethodsget__property.get(store._data, key);

  if (resolveReferences) {
    // Shallow resolve embedded references
    // Should in theory mutate value, but may cause false equality with previous
    if (Array.isArray(value)) {
      return value.map(function (item) {
        return store._isRefValue(item) ? yrdatastorelibmethodsget__property.get(store._data, store._parseRefKey(item)) : item;
      });
    } else if (yrdatastorelibmethodsget__isPlainObject(value)) {
      var v = {};

      for (var prop in value) {
        v[prop] = store._isRefValue(value[prop]) ? yrdatastorelibmethodsget__property.get(store._data, store._parseRefKey(value[prop])) : value[prop];
      }
      return v;
    }
  }

  return value;
}
/*≠≠ node_modules/@yr/data-store/lib/methods/get.js ≠≠*/


/*== node_modules/superagent/lib/response-base.js ==*/
$m['superagent/lib/response-base'] = { exports: {} };

/**
 * Module dependencies.
 */

var superagentlibresponsebase__utils = $m['superagent/lib/utils'].exports;

/**
 * Expose `ResponseBase`.
 */

$m['superagent/lib/response-base'].exports = superagentlibresponsebase__ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function superagentlibresponsebase__ResponseBase(obj) {
  if (obj) return superagentlibresponsebase__mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function superagentlibresponsebase__mixin(obj) {
  for (var key in superagentlibresponsebase__ResponseBase.prototype) {
    obj[key] = superagentlibresponsebase__ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

superagentlibresponsebase__ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

superagentlibresponsebase__ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util

  // content-type
  var ct = header['content-type'] || '';
  this.type = superagentlibresponsebase__utils.type(ct);

  // params
  var params = superagentlibresponsebase__utils.params(ct);
  for (var key in params) this[key] = params[key];

  this.links = {};

  // links
  try {
    if (header.link) {
      this.links = superagentlibresponsebase__utils.parseLinks(header.link);
    }
  } catch (err) {
    // ignore
  }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

superagentlibresponsebase__ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.redirect = 3 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = 4 == type || 5 == type ? this.toError() : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.forbidden = 403 == status;
  this.notFound = 404 == status;
};
/*≠≠ node_modules/superagent/lib/response-base.js ≠≠*/


/*== node_modules/superagent/lib/is-function.js ==*/
$m['superagent/lib/is-function'] = { exports: {} };
/**
 * Check if `fn` is a function.
 *
 * @param {Function} fn
 * @return {Boolean}
 * @api private
 */
var superagentlibisfunction__isObject = $m['superagent/lib/is-object'].exports;

function superagentlibisfunction__isFunction(fn) {
  var tag = superagentlibisfunction__isObject(fn) ? Object.prototype.toString.call(fn) : '';
  return tag === '[object Function]';
}

$m['superagent/lib/is-function'].exports = superagentlibisfunction__isFunction;
/*≠≠ node_modules/superagent/lib/is-function.js ≠≠*/


/*== node_modules/superagent/lib/request-base.js ==*/
$m['superagent/lib/request-base'] = { exports: {} };
/**
 * Module of mixed-in functions shared between node and client code
 */
var superagentlibrequestbase__isObject = $m['superagent/lib/is-object'].exports;

/**
 * Expose `RequestBase`.
 */

$m['superagent/lib/request-base'].exports = superagentlibrequestbase__RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function superagentlibrequestbase__RequestBase(obj) {
  if (obj) return superagentlibrequestbase__mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function superagentlibrequestbase__mixin(obj) {
  for (var key in superagentlibrequestbase__RequestBase.prototype) {
    obj[key] = superagentlibrequestbase__RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.clearTimeout = function _clearTimeout() {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.parse = function parse(fn) {
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.serialize = function serialize(fn) {
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, read, deadline}
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.timeout = function timeout(options) {
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for (var option in options) {
    switch (option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.retry = function retry(count) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  return this;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

superagentlibrequestbase__RequestBase.prototype._retry = function () {
  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

superagentlibrequestbase__RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
      self.end(function (err, res) {
        if (err) innerReject(err);else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

superagentlibrequestbase__RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

superagentlibrequestbase__RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

superagentlibrequestbase__RequestBase.prototype.ok = function (cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

superagentlibrequestbase__RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

superagentlibrequestbase__RequestBase.prototype.getHeader = superagentlibrequestbase__RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.set = function (field, val) {
  if (superagentlibrequestbase__isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
superagentlibrequestbase__RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
superagentlibrequestbase__RequestBase.prototype.field = function (name, val) {

  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (superagentlibrequestbase__isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
superagentlibrequestbase__RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.send = function (data) {
  var isObj = superagentlibrequestbase__isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && superagentlibrequestbase__isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data ? this._data + '&' + data : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

superagentlibrequestbase__RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

superagentlibrequestbase__RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

superagentlibrequestbase__RequestBase.prototype._setTimeouts = function () {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};
/*≠≠ node_modules/superagent/lib/request-base.js ≠≠*/


/*== node_modules/superagent/lib/client.js ==*/
$m['superagent'] = { exports: {} };
/**
 * Root reference for iframes.
 */

var superagent__root;
if (typeof window !== 'undefined') {
  // Browser window
  superagent__root = window;
} else if (typeof self !== 'undefined') {
  // Web Worker
  superagent__root = self;
} else {
  // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  superagent__root = this;
}

var superagent__Emitter = $m['component-emitter'].exports;
var superagent__RequestBase = $m['superagent/lib/request-base'].exports;
var superagent__isObject = $m['superagent/lib/is-object'].exports;
var superagent__isFunction = $m['superagent/lib/is-function'].exports;
var superagent__ResponseBase = $m['superagent/lib/response-base'].exports;
var superagent__shouldRetry = $m['superagent/lib/should-retry'].exports;

/**
 * Noop.
 */

function superagent__noop() {};

/**
 * Expose `request`.
 */

var superagent__request = $m['superagent'].exports = $m['superagent'].exports = function (method, url) {
  // callback
  if ('function' == typeof url) {
    return new $m['superagent'].exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new $m['superagent'].exports.Request('GET', method);
  }

  return new $m['superagent'].exports.Request(method, url);
};

$m['superagent'].exports.Request = superagent__Request;

/**
 * Determine XHR.
 */

superagent__request.getXHR = function () {
  if (superagent__root.XMLHttpRequest && (!superagent__root.location || 'file:' != superagent__root.location.protocol || !superagent__root.ActiveXObject)) {
    return new XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {}
  }
  throw Error("Browser-only verison of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var superagent__trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function superagent__serialize(obj) {
  if (!superagent__isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    superagent__pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function superagent__pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function (v) {
        superagent__pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (superagent__isObject(val)) {
      for (var subkey in val) {
        superagent__pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

superagent__request.serializeObject = superagent__serialize;

/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function superagent__parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

superagent__request.parseString = superagent__parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

superagent__request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

superagent__request.serialize = {
  'application/x-www-form-urlencoded': superagent__serialize,
  'application/json': JSON.stringify
};

/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

superagent__request.parse = {
  'application/x-www-form-urlencoded': superagent__parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function superagent__parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = superagent__trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function superagent__isJSON(mime) {
  return (/[\/+]json\b/.test(mime)
  );
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function superagent__Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = superagent__parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }
}

superagent__ResponseBase(superagent__Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

superagent__Response.prototype._parseBody = function (str) {
  var parse = superagent__request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && superagent__isJSON(this.type)) {
    parse = superagent__request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

superagent__Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

superagent__request.Response = superagent__Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function superagent__Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new superagent__Response(self);
    } catch (e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
        new_err.original = err;
        new_err.response = res;
        new_err.status = res.status;
      }
    } catch (e) {
      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

superagent__Emitter(superagent__Request.prototype);
superagent__RequestBase(superagent__Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

superagent__Request.prototype.type = function (type) {
  this.set('Content-Type', superagent__request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

superagent__Request.prototype.accept = function (type) {
  this.set('Accept', superagent__request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

superagent__Request.prototype.auth = function (user, pass, options) {
  if (typeof pass === 'object' && pass !== null) {
    // pass is optional and can substitute for options
    options = pass;
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto'
    };
  }

  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + btoa(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

superagent__Request.prototype.query = function (val) {
  if ('string' != typeof val) val = superagent__serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

superagent__Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

superagent__Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new superagent__root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

superagent__Request.prototype.callback = function (err, res) {
  // console.log(this._retries, this._maxRetries)
  if (this._maxRetries && this._retries++ < this._maxRetries && superagent__shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

superagent__Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
superagent__Request.prototype.buffer = superagent__Request.prototype.ca = superagent__Request.prototype.agent = function () {
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
superagent__Request.prototype.pipe = superagent__Request.prototype.write = function () {
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

superagent__Request.prototype._appendQueryString = function () {
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if (superagent__isFunction(this._sort)) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
superagent__Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

superagent__Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || superagent__noop;

  // querystring
  this._appendQueryString();

  return this._end();
};

superagent__Request.prototype._end = function () {
  var self = this;
  var xhr = this.xhr = superagent__request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try {
      status = xhr.status;
    } catch (e) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function (direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch (e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || superagent__request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && superagent__isJSON(contentType)) {
      serialize = superagent__request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

superagent__request.get = function (url, data, fn) {
  var req = superagent__request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

superagent__request.head = function (url, data, fn) {
  var req = superagent__request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

superagent__request.options = function (url, data, fn) {
  var req = superagent__request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function superagent__del(url, data, fn) {
  var req = superagent__request('DELETE', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

superagent__request['del'] = superagent__del;
superagent__request['delete'] = superagent__del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

superagent__request.patch = function (url, data, fn) {
  var req = superagent__request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

superagent__request.post = function (url, data, fn) {
  var req = superagent__request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

superagent__request.put = function (url, data, fn) {
  var req = superagent__request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/*≠≠ node_modules/superagent/lib/client.js ≠≠*/


/*== node_modules/@yr/agent/index.js ==*/
$m['@yr/agent'] = { exports: {} };
/**
 * Superagent powered request
 * https://github.com/yr/agent
 * @copyright Yr
 * @license MIT
 */

var yragent__superagent = $m['superagent'].exports;

var yragent__STATUS_TIMEOUT = 504;

var yragent__Request = yragent__superagent.Request;
var yragent__oldEnd = yragent__Request.prototype.end;
var yragent__oldGet = yragent__superagent.get;
var yragent__cache = {};

$m['@yr/agent'].exports = yragent__superagent;

/**
 * GET request for 'url'
 * @param {String} url
 * @param {Object} [options]
 *  - {Boolean} abort
 *  - {String} id
 *  - {Boolean} ignoreQuery
 * @returns {Request}
 */
$m['@yr/agent'].exports.get = function get(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var key = options.ignoreQuery ? url.split('?')[0] : url;
  var req = yragent__cache[key];

  if (req != null) {
    // Return cached
    if (!options.abort) {
      return req;
    }
    // Abort existing
    req.abort();
  }

  req = yragent__oldGet(url);
  req.__agentCacheKey = key;
  if (options.id != null) {
    req.__agentId = options.id;
  }

  yragent__cache[key] = req;

  return req;
};

/**
 * Abort all outstanding requests
 * @param {String|Function} [filter]
 */
$m['@yr/agent'].exports.abortAll = function abortAll(filter) {
  var filterById = filter != null && typeof filter === 'string';

  for (var key in yragent__cache) {
    var req = yragent__cache[key];
    var shouldAbort = filter != null ? filterById ? filter === req.__agentId : filter(req) : true;

    if (shouldAbort) {
      req.abort();
      delete yragent__cache[key];
    }
  }
};

/**
 * Initiate request, invoking callback 'fn' on complete.
 * Overrides Superagent Request.end()
 * @param {Function} fn(err, res)
 * @returns {Request}
 */
yragent__Request.prototype.end = function end(fn) {
  var _this = this;

  // Restore normal behaviour if not using Agent
  if (!this.__agentCacheKey) {
    yragent__oldEnd.call(this, fn);
    return this;
  }

  var start = Date.now();

  yragent__oldEnd.call(this, function (err, res) {
    // Normalize error
    if (err != null || res.error) {
      var status = void 0,
          msg = void 0;

      // Error or response 4xx/5xx
      if (res != null && res.error) {
        status = res.status;
        msg = res.error.message;
      } else if (err != null) {
        if (err.timeout) {
          status = yragent__STATUS_TIMEOUT;
          msg = 'request timed out';
        }

        status = status || err.statusCode || 500;
        msg = msg || err.message || 'request errored';
      }

      err = Error(msg);
      err.status = status;
    }

    if (res != null) {
      res.duration = Date.now() - start;
    }

    delete yragent__cache[_this.__agentCacheKey];

    fn(err, res);
  });

  return this;
};
/*≠≠ node_modules/@yr/agent/index.js ≠≠*/


/*== node_modules/@yr/data-store/lib/methods/fetch.js ==*/
$m['@yr/data-store/lib/methods/fetch'] = { exports: {} };

var yrdatastorelibmethodsfetch__agent = $m['@yr/agent'].exports;
var yrdatastorelibmethodsfetch__assign = $m['object-assign'].exports;
var yrdatastorelibmethodsfetch__get = $m['@yr/data-store/lib/methods/get'].exports;

var yrdatastorelibmethodsfetch__DEFAULT_LOAD_OPTIONS = {
  cacheControl: 'public, max-age=120, stale-if-error=180',
  rejectOnError: true,
  retry: 2,
  timeout: 5 * 1000
};
var yrdatastorelibmethodsfetch__RE_CACHE_CONTROL = /max-age=(\d+)|stale-if-error=(\d+)/g;

$m['@yr/data-store/lib/methods/fetch'].exports = yrdatastorelibmethodsfetch__fetch;

/**
 * Fetch data. If expired, load from 'url' and store at 'key'
 * @param {DataStore} store
 * @param {String} key
 * @param {String} url
 * @param {Object} options
 *  - {Boolean} abort
 *  - {String} cacheControl
 *  - {Boolean} ignoreQuery
 *  - {Number} retry
 *  - {Boolean} rejectOnError
 *  - {Number} timeout
 * @returns {Promise<Response>}
 */
function yrdatastorelibmethodsfetch__fetch(store, key, url, options) {
  options = yrdatastorelibmethodsfetch__assign({}, yrdatastorelibmethodsfetch__DEFAULT_LOAD_OPTIONS, options);
  options.cacheControl = yrdatastorelibmethodsfetch__parseCacheControl(options.cacheControl);

  if (!key) {
    return Promise.resolve({
      body: undefined,
      duration: 0,
      headers: {},
      key: key,
      status: 400
    });
  }

  return yrdatastorelibmethodsfetch__doFetch(store, key, url, options);
}

/**
 * Fetch data. If expired, load from 'url' and store at 'key'
 * @param {DataStore} store
 * @param {String} key
 * @param {String} url
 * @param {Object} options
 *  - {Boolean} abort
 *  - {Object} cacheControl
 *  - {Boolean} ignoreQuery
 *  - {Number} retry
 *  - {Boolean} rejectOnError
 *  - {Number} timeout
 * @returns {Promise}
 */
function yrdatastorelibmethodsfetch__doFetch(store, key, url, options) {
  var cacheControl = options.cacheControl,
      rejectOnError = options.rejectOnError;

  var value = yrdatastorelibmethodsfetch__get(store, key);
  var isMissing = !value;
  var isExpired = yrdatastorelibmethodsfetch__hasExpired(value && value[store.EXPIRY_KEY], false);

  store.debug('fetch %s from %s', key, url);

  // Load if missing or expired
  if (isMissing || isExpired) {
    if (!url) {
      return Promise.resolve({
        body: value,
        duration: 0,
        headers: {},
        key: key,
        status: 400
      });
    }

    return new Promise(function (resolve, reject) {
      yrdatastorelibmethodsfetch__load(store, key, url, options).then(function (res) {
        store.debug('fetched %s from %s', key, url);

        var body = yrdatastorelibmethodsfetch__get(store, key);

        resolve({
          body: body,
          duration: res.duration,
          headers: yrdatastorelibmethodsfetch__generateResponseHeaders(body[store.EXPIRY_KEY], cacheControl),
          key: key,
          status: res.status
        });
      }).catch(function (err) {
        isExpired = yrdatastorelibmethodsfetch__hasExpired(value && value[store.EXPIRY_KEY], true);

        if (rejectOnError && isExpired) {
          return reject(err);
        }

        store.debug('fetched stale %s after load error', key);
        return resolve({
          body: isExpired ? undefined : value,
          duration: 0,
          error: err,
          headers: yrdatastorelibmethodsfetch__generateResponseHeaders(value && value[store.EXPIRY_KEY], cacheControl, true),
          key: key,
          status: isExpired ? err.status : 200
        });
      });
    });
  }

  store.debug('fetched %s', key);
  return Promise.resolve({
    body: value,
    duration: 0,
    headers: yrdatastorelibmethodsfetch__generateResponseHeaders(value && value[store.EXPIRY_KEY], cacheControl),
    key: key,
    status: 200
  });
}

/**
 * Load data from 'url' and store at 'key'
 * @param {DataStore} store
 * @param {String} key
 * @param {String} url
 * @param {Object} options
 *  - {Boolean} abort
 *  - {Boolean} ignoreQuery
 *  - {Number} minExpiry
 *  - {Number} retry
 *  - {Boolean} staleIfError
 *  - {Number} timeout
 * @returns {Promise}
 */
function yrdatastorelibmethodsfetch__load(store, key, url, options) {
  var cacheControl = options.cacheControl,
      rejectOnError = options.rejectOnError,
      retry = options.retry,
      timeout = options.timeout;

  options.id = key;

  store.debug('load %s from %s', key, url);

  return yrdatastorelibmethodsfetch__agent.get(url, options).timeout(timeout).retry(retry).then(function (res) {
    store.debug('loaded "%s" in %dms', key, res.duration);

    // Guard against empty data
    if (res.body) {
      // Parse cache-control headers
      if (res.headers && 'expires' in res.headers) {
        res.body[store.EXPIRY_KEY] = yrdatastorelibmethodsfetch__generateExpiry(res.headers, cacheControl);
      }

      // Enable handling by not calling inner set()
      store.set(key, res.body, options);
    }

    return res;
  }).catch(function (err) {
    store.debug('unable to load "%s" from %s', key, url);

    if (rejectOnError) {
      store.set(key, undefined, options);
    }

    throw err;
  });
}

/**
 * Parse 'cacheControlString'
 * @param {String} cacheControlString
 * @returns {Object}
 */
function yrdatastorelibmethodsfetch__parseCacheControl(cacheControlString) {
  var maxAge = 0;
  var staleIfError = 0;

  if (cacheControlString && typeof cacheControlString === 'string') {
    var match = void 0;

    while (match = yrdatastorelibmethodsfetch__RE_CACHE_CONTROL.exec(cacheControlString)) {
      if (match[1]) {
        maxAge = parseInt(match[1], 10) * 1000;
      } else if (match[2]) {
        staleIfError = parseInt(match[2], 10) * 1000;
      }
    }
  }

  return {
    maxAge: maxAge,
    staleIfError: staleIfError
  };
}

/**
 * Merge 'cacheControl' with defaults
 * @param {Object} cacheControl
 * @param {Object} defaultCacheControl
 * @returns {Object}
 */
function yrdatastorelibmethodsfetch__mergeCacheControl(cacheControl, defaultCacheControl) {
  if (cacheControl == null) {
    return yrdatastorelibmethodsfetch__assign({}, defaultCacheControl);
  }

  return {
    maxAge: 'maxAge' in cacheControl ? cacheControl.maxAge : defaultCacheControl.maxAge,
    staleIfError: 'staleIfError' in cacheControl ? cacheControl.staleIfError : defaultCacheControl.staleIfError
  };
}

/**
 * Generate expiry object from 'headers'
 * @param {Object} [headers]
 * @param {Object} defaultCacheControl
 * @returns {Number}
 */
function yrdatastorelibmethodsfetch__generateExpiry() {
  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultCacheControl = arguments[1];

  var cacheControl = yrdatastorelibmethodsfetch__mergeCacheControl(yrdatastorelibmethodsfetch__parseCacheControl(headers['cache-control']), defaultCacheControl);

  var now = Date.now();
  var expires = now;

  if (headers.expires) {
    expires = typeof headers.expires === 'string' ? Number(new Date(headers.expires)) : headers.expires;
  }
  if (now >= expires) {
    expires = now + cacheControl.maxAge;
  }

  return {
    expires: expires,
    expiresIfError: expires + cacheControl.staleIfError
  };
}

/**
 * Generate serialized headers object for response
 * @param {Object} [expiry]
 * @param {Object} defaultCacheControl
 * @param {Boolean} isError
 * @returns {Object}
 */
function yrdatastorelibmethodsfetch__generateResponseHeaders() {
  var expiry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultCacheControl = arguments[1];
  var isError = arguments[2];

  var now = Date.now();
  var maxAge = void 0;

  if (isError) {
    maxAge = expiry && expiry.expiresIfError > now && expiry.expiresIfError - now < defaultCacheControl.maxAge ? Math.ceil((expiry.expiresIfError - now) / 1000) : defaultCacheControl.maxAge / 1000;
  } else {
    // Round up to nearest second
    maxAge = expiry && expiry.expires > now ? Math.ceil((expiry.expires - now) / 1000) : defaultCacheControl.maxAge / 1000;
  }

  return {
    // TODO: add stale-if-error
    'cache-control': 'public, max-age=' + maxAge,
    expires: new Date(now + maxAge * 1000).toUTCString()
  };
}

/**
 * Check if expired
 * @param {Object} expiry
 * @param {Boolean} isError
 * @returns {Boolean}
 */
function yrdatastorelibmethodsfetch__hasExpired(expiry, isError) {
  if (!expiry) {
    return true;
  }

  // Round up to nearest second
  return Math.ceil(Date.now() / 1000) * 1000 > (isError ? expiry.expiresIfError : expiry.expires);
}
/*≠≠ node_modules/@yr/data-store/lib/methods/fetch.js ≠≠*/


/*== node_modules/@yr/data-store/lib/methods/set.js ==*/
$m['@yr/data-store/lib/methods/set'] = { exports: {} };

var yrdatastorelibmethodsset__assign = $m['object-assign'].exports;
var yrdatastorelibmethodsset__property = $m['@yr/property'].exports;
var yrdatastorelibmethodsset__runtime = $m['@yr/runtime'].exports;

var yrdatastorelibmethodsset__DEFAULT_OPTIONS = {
  // Browser immutable by default
  immutable: yrdatastorelibmethodsset__runtime.isBrowser,
  merge: true
};

$m['@yr/data-store/lib/methods/set'].exports = yrdatastorelibmethodsset__set;

/**
 * Store 'value' at 'key'
 * @param {DataStore} store
 * @param {String} key
 * @param {*} value
 * @param {Object} [options]
 *  - {Boolean} immutable
 *  - {Boolean} merge
 * @returns {Boolean}
 */
function yrdatastorelibmethodsset__set(store, key, value, options) {
  return yrdatastorelibmethodsset__doSet(store, key, value, yrdatastorelibmethodsset__assign({}, yrdatastorelibmethodsset__DEFAULT_OPTIONS, options));
}

/**
 * Store 'value' at 'key'
 * @param {DataStore} store
 * @param {String} key
 * @param {*} value
 * @param {Object} [options]
 *  - {Boolean} immutable
 *  - {Boolean} merge
 * @returns {Boolean}
 */
function yrdatastorelibmethodsset__doSet(store, key, value, options) {
  if (!key || typeof key !== 'string') {
    return false;
  }

  // Returns same if no change
  var newData = yrdatastorelibmethodsset__property.set(store._data, key, value, options);

  if (options.immutable) {
    if (newData !== store._data) {
      store._data = newData;
    } else {
      store.debug('WARNING no change after set "%s', key);
      return false;
    }
  }
  return true;
}
/*≠≠ node_modules/@yr/data-store/lib/methods/set.js ≠≠*/


/*== node_modules/@yr/data-store/lib/HandlerContext.js ==*/
$m['@yr/data-store/lib/HandlerContext'] = { exports: {} };

var yrdatastorelibHandlerContext__assign = $m['object-assign'].exports;
var yrdatastorelibHandlerContext__isPlainObject = $m['is-plain-obj'].exports;

$m['@yr/data-store/lib/HandlerContext'].exports = function () {
  /**
   * Constructor
   * @param {DataStore} store
   * @param {String} methodName
   * @param {Array} signature
   * @param {Array} args
   */
  function HandlerContext(store, methodName, signature, args) {
    babelHelpers.classCallCheck(this, HandlerContext);

    this.method = methodName;
    this.signature = signature;
    this.store = store;

    // Use signature to copy relevant arguments to this instance
    for (var i = 0, n = signature.length; i < n; i++) {
      var prop = signature[i];

      if (prop.indexOf('...') === 0) {
        prop = prop.slice(3);
        this[prop] = args.slice(i);
      } else {
        this[prop] = args[i];
      }
    }
  }

  /**
   * Merge 'prop' with existing
   * @param {String} propName
   * @param {Object} prop
   */

  HandlerContext.prototype.merge = function merge(propName, prop) {
    if (!yrdatastorelibHandlerContext__isPlainObject(prop)) {
      return;
    }
    this[propName] = yrdatastorelibHandlerContext__assign({}, this[propName], prop);
  };

  /**
   * Convert instance to arguments
   * @returns {Array}
   */

  HandlerContext.prototype.toArguments = function toArguments() {
    var args = [];

    for (var i = 0, n = this.signature.length; i < n; i++) {
      var prop = this.signature[i];

      if (prop.indexOf('...') === 0) {
        prop = prop.slice(3);
        args.push.apply(args, this[prop]);
      } else {
        args.push(this[prop]);
      }
    }

    return args;
  };

  /**
   * Destroy
   */

  HandlerContext.prototype.destroy = function destroy() {
    for (var prop in this) {
      this[prop] = null;
    }
  };

  return HandlerContext;
}();
/*≠≠ node_modules/@yr/data-store/lib/HandlerContext.js ≠≠*/


/*== node_modules/@yr/data-store/node_modules/debug/src/debug.js ==*/
$m['debug/src/debug#2.6.8'] = { exports: {} };

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug/src/debug#2.6.8'].exports = $m['debug/src/debug#2.6.8'].exports = debugsrcdebug268__createDebug.debug = debugsrcdebug268__createDebug['default'] = debugsrcdebug268__createDebug;
$m['debug/src/debug#2.6.8'].exports.coerce = debugsrcdebug268__coerce;
$m['debug/src/debug#2.6.8'].exports.disable = debugsrcdebug268__disable;
$m['debug/src/debug#2.6.8'].exports.enable = debugsrcdebug268__enable;
$m['debug/src/debug#2.6.8'].exports.enabled = debugsrcdebug268__enabled;
$m['debug/src/debug#2.6.8'].exports.humanize = $m['ms'].exports;

/**
 * The currently active debug mode names, and names to skip.
 */

$m['debug/src/debug#2.6.8'].exports.names = [];
$m['debug/src/debug#2.6.8'].exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

$m['debug/src/debug#2.6.8'].exports.formatters = {};

/**
 * Previous log timestamp.
 */

var debugsrcdebug268__prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function debugsrcdebug268__selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return $m['debug/src/debug#2.6.8'].exports.colors[Math.abs(hash) % $m['debug/src/debug#2.6.8'].exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debugsrcdebug268__createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (debugsrcdebug268__prevTime || curr);
    self.diff = ms;
    self.prev = debugsrcdebug268__prevTime;
    self.curr = curr;
    debugsrcdebug268__prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = $m['debug/src/debug#2.6.8'].exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = $m['debug/src/debug#2.6.8'].exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    $m['debug/src/debug#2.6.8'].exports.formatArgs.call(self, args);

    var logFn = debug.log || $m['debug/src/debug#2.6.8'].exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = $m['debug/src/debug#2.6.8'].exports.enabled(namespace);
  debug.useColors = $m['debug/src/debug#2.6.8'].exports.useColors();
  debug.color = debugsrcdebug268__selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof $m['debug/src/debug#2.6.8'].exports.init) {
    $m['debug/src/debug#2.6.8'].exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function debugsrcdebug268__enable(namespaces) {
  $m['debug/src/debug#2.6.8'].exports.save(namespaces);

  $m['debug/src/debug#2.6.8'].exports.names = [];
  $m['debug/src/debug#2.6.8'].exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      $m['debug/src/debug#2.6.8'].exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      $m['debug/src/debug#2.6.8'].exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function debugsrcdebug268__disable() {
  $m['debug/src/debug#2.6.8'].exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function debugsrcdebug268__enabled(name) {
  var i, len;
  for (i = 0, len = $m['debug/src/debug#2.6.8'].exports.skips.length; i < len; i++) {
    if ($m['debug/src/debug#2.6.8'].exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = $m['debug/src/debug#2.6.8'].exports.names.length; i < len; i++) {
    if ($m['debug/src/debug#2.6.8'].exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function debugsrcdebug268__coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
/*≠≠ node_modules/@yr/data-store/node_modules/debug/src/debug.js ≠≠*/


/*== node_modules/@yr/data-store/node_modules/debug/src/browser.js ==*/
$m['debug#2.6.8'] = { exports: {} };
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug#2.6.8'].exports = $m['debug#2.6.8'].exports = $m['debug/src/debug#2.6.8'].exports;
$m['debug#2.6.8'].exports.log = debug268__log;
$m['debug#2.6.8'].exports.formatArgs = debug268__formatArgs;
$m['debug#2.6.8'].exports.save = debug268__save;
$m['debug#2.6.8'].exports.load = debug268__load;
$m['debug#2.6.8'].exports.useColors = debug268__useColors;
$m['debug#2.6.8'].exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : debug268__localstorage();

/**
 * Colors.
 */

$m['debug#2.6.8'].exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function debug268__useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

$m['debug#2.6.8'].exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function debug268__formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + $m['debug#2.6.8'].exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function debug268__log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function debug268__save(namespaces) {
  try {
    if (null == namespaces) {
      $m['debug#2.6.8'].exports.storage.removeItem('debug');
    } else {
      $m['debug#2.6.8'].exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function debug268__load() {
  var r;
  try {
    r = $m['debug#2.6.8'].exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

$m['debug#2.6.8'].exports.enable(debug268__load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function debug268__localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/*≠≠ node_modules/@yr/data-store/node_modules/debug/src/browser.js ≠≠*/


/*== node_modules/@yr/data-store/lib/DataStoreCursor.js ==*/
$m['@yr/data-store/lib/DataStoreCursor'] = { exports: {} };

var yrdatastorelibDataStoreCursor___require = $m['@yr/keys'].exports,
    yrdatastorelibDataStoreCursor__join = yrdatastorelibDataStoreCursor___require.join;

$m['@yr/data-store/lib/DataStoreCursor'].exports = function () {
  /**
   * Constructor
   * @param {String} key
   * @param {DataStore} dataStore
   */
  function DataStoreCursor(key, dataStore) {
    babelHelpers.classCallCheck(this, DataStoreCursor);

    this.dataStore = dataStore;
    this.key = key;
    this.trigger = dataStore.trigger.bind(dataStore);
  }

  /**
   * Retrieve value stored at 'key'
   * Empty 'key' returns all data
   * @param {String} [key]
   * @returns {*}
   */

  DataStoreCursor.prototype.get = function get(key) {
    // Handle empty key (set value at cursor root)
    if (!key) {
      key = this.key;
    }

    // Prefix with cursor key if not root
    key = !this._isRootKey(key) ? yrdatastorelibDataStoreCursor__join(this.key, key) : key;

    return this.dataStore.get(key);
  };

  /**
   * Batch version of 'get()'
   * Accepts array of 'keys'
   * @param {Array} keys
   * @returns {Array}
   */

  DataStoreCursor.prototype.getAll = function getAll(keys) {
    var _this = this;

    return keys.map(function (key) {
      // Prefix with cursor key if not root
      key = !_this._isRootKey(key) ? yrdatastorelibDataStoreCursor__join(_this.key, key) : key;

      return _this.dataStore.get(key);
    });
  };

  /**
   * Retrieve an instance reference at 'key' to a subset of data
   * @param {String} key
   * @returns {DataStoreCursor}
   */

  DataStoreCursor.prototype.createCursor = function createCursor(key) {
    return this.dataStore.createCursor(yrdatastorelibDataStoreCursor__join(this.key, key));
  };

  /**
   * Destroy instance
   */

  DataStoreCursor.prototype.destroy = function destroy() {
    this.dataStore = null;
    this.trigger = null;
  };

  /**
   * Determine if 'key' is global
   * @param {String} key
   * @returns {Boolean}
   */

  DataStoreCursor.prototype._isRootKey = function _isRootKey(key) {
    return key ? key.charAt(0) === '/' || this.dataStore._isRefValue(key) : false;
  };

  return DataStoreCursor;
}();
/*≠≠ node_modules/@yr/data-store/lib/DataStoreCursor.js ≠≠*/


/*== node_modules/@yr/data-store/lib/DataStore.js ==*/
$m['@yr/data-store/lib/DataStore'] = { exports: {} };

var yrdatastorelibDataStore__assign = $m['object-assign'].exports;
var yrdatastorelibDataStore__Cursor = $m['@yr/data-store/lib/DataStoreCursor'].exports;
var yrdatastorelibDataStore__debugFactory = $m['debug#2.6.8'].exports;
var yrdatastorelibDataStore___get = $m['@yr/data-store/lib/methods/get'].exports;
var yrdatastorelibDataStore__HandlerContext = $m['@yr/data-store/lib/HandlerContext'].exports;
var yrdatastorelibDataStore__isPlainObject = $m['is-plain-obj'].exports;
var yrdatastorelibDataStore__set = $m['@yr/data-store/lib/methods/set'].exports;

var yrdatastorelibDataStore__HANDLED_METHODS = {
  reset: [yrdatastorelibDataStore__reset, ['data']],
  set: [yrdatastorelibDataStore__set, ['key', 'value', 'options']]
};
var yrdatastorelibDataStore__EXPIRY_KEY = '__expiry';
var yrdatastorelibDataStore__REF_KEY = '__ref:';

var yrdatastorelibDataStore__uid = 0;

$m['@yr/data-store/lib/DataStore'].exports = function () {
  /**
   * Constructor
   * @param {String} [id]
   * @param {Object} [data]
   * @param {Object} [options]
   *  - {Object} handlers
   *  - {Boolean} isWritable
   *  - {Object} serialisableKeys
   */
  function DataStore(id, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    babelHelpers.classCallCheck(this, DataStore);

    this.EXPIRY_KEY = yrdatastorelibDataStore__EXPIRY_KEY;
    this.REF_KEY = yrdatastorelibDataStore__REF_KEY;

    this.changed = false;
    this.debug = yrdatastorelibDataStore__debugFactory('yr:data' + (id ? ':' + id : ''));
    this.destroyed = false;
    this.id = id || 'store' + ++yrdatastorelibDataStore__uid;
    this.isWritable = 'isWritable' in options ? options.isWritable : true;

    this._actions = {};
    this._cursors = {};
    this._data = {};
    // Allow sub classes to send in methods for registration
    this._handledMethods = yrdatastorelibDataStore__assign({}, yrdatastorelibDataStore__HANDLED_METHODS, options.handledMethods || {});
    this._handlers = [];
    this._serialisableKeys = options.serialisableKeys || {};

    this.debug('created');

    if (options.handlers) {
      this.useHandler(options.handlers);
    }
    if (options.actions) {
      this.registerAction(options.actions);
    }

    this.reset(data || {});
  }

  /**
   * Register 'handler' with optional key 'match'
   * Will handle every transaction if no 'match'
   * @param {RegExp|String|Array} [match]
   * @param {Function} handler
   */

  DataStore.prototype.useHandler = function useHandler(match, handler) {
    var _this = this;

    var handlers = !Array.isArray(match) ? [[match, handler]] : match;
    var count = 0;

    handlers.forEach(function (_ref) {
      var match = _ref[0],
          handler = _ref[1];

      if (typeof match === 'function') {
        handler = match;
        match = '';
      }
      if (typeof handler === 'function') {
        _this._handlers.push({ handler: handler, match: match });
        count++;
      }
    });

    if (count) {
      this.debug('using ' + count + ' new handler' + (count > 1 ? 's' : ''));
    }
  };

  /**
   * Unregister 'handler'
   * @param {RegExp|String|Array} [match]
   * @param {Function} handler
   */

  DataStore.prototype.unuseHandler = function unuseHandler(match, handler) {
    var matches = !Array.isArray(match) ? [[match, handler]] : match;

    for (var i = 0, n = matches.length; i < n; i++) {
      var _matches$i = matches[i],
          _match = _matches$i[0],
          _handler = _matches$i[1];

      var j = this._handlers.length;

      if (typeof _match === 'function') {
        _handler = _match;
      }

      while (--j >= 0) {
        if (this._handlers[j].handler === _handler) {
          this._handlers.splice(j, 1);
        }
      }
    }
  };

  /**
   * Register 'action' under 'name'
   * @param {String|Array} name
   * @param {Function} action
   */

  DataStore.prototype.registerAction = function registerAction(name, action) {
    var _this2 = this;

    var names = !Array.isArray(name) ? [[name, action]] : name;
    var count = 0;

    names.forEach(function (_ref2) {
      var name = _ref2[0],
          action = _ref2[1];

      if (typeof action === 'function') {
        _this2._actions[name] = action;
        count++;
      }
    });

    if (count) {
      this.debug('registered ' + count + ' new action' + (count > 1 ? 's' : ''));
    }
  };

  /**
   * Unregister 'name' action
   * @param {String|Array} name
   * @param {Function} action
   */

  DataStore.prototype.unregisterAction = function unregisterAction(name, action) {
    var _this3 = this;

    var names = !Array.isArray(name) ? [[name, action]] : name;

    names.forEach(function (_ref3) {
      var name = _ref3[0];

      if (_this3._actions[name]) {
        delete _this3._actions[name];
      }
    });
  };

  /**
   * Trigger registered action with optional 'args
   * @param {String} name
   * @param {Array} [args]
   * @returns {Promise}
   */

  DataStore.prototype.trigger = function trigger(name) {
    var action = this._actions[name];

    if (!action) {
      var reason = 'action ' + name + ' not registered';

      this.debug(reason);
      return Promise.reject(new Error(reason));
    }

    this.debug('triggering ' + name + ' action');

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var promise = action.apply(undefined, [this].concat(args));

    return promise || Promise.resolve();
  };

  /**
   * Retrieve value stored at 'key'
   * Empty/null/undefined 'key' returns all data
   * @param {String} [key]
   * @param {Object} [options]
   *  - {Boolean} resolveReferences
   * @returns {*}
   */

  DataStore.prototype.get = function get(key, options) {
    return yrdatastorelibDataStore___get(this, key, options);
  };

  /**
   * Batch version of 'get()'
   * Accepts array of 'keys'
   * @param {Array} keys
   * @param {Object} [options]
   *  - {Boolean} resolveReferences
   * @returns {Array}
   */

  DataStore.prototype.getAll = function getAll(keys, options) {
    var _this4 = this;

    return keys.map(function (key) {
      return yrdatastorelibDataStore___get(_this4, key, options);
    });
  };

  /**
   * Store 'value' at 'key'
   * @param {String} key
   * @param {*} value
   * @param {Object} [options]
   *  - {Boolean} immutable
   *  - {Boolean} merge
   * @returns {void}
   */

  DataStore.prototype.set = function set(key, value, options) {
    if (!this.isWritable) {
      return;
    }

    this.changed = this._routeHandledMethod('set', key, value, options);
  };

  /**
   * Batch version of 'set()'
   * Accepts hash of key/value pairs
   * @param {Object} keys
   * @param {Object} [options]
   *  - {Boolean} immutable
   *  - {Boolean} merge
   * @returns {void}
   */

  DataStore.prototype.setAll = function setAll(keys, options) {
    if (!this.isWritable) {
      return;
    }

    var changed = false;

    if (yrdatastorelibDataStore__isPlainObject(keys)) {
      for (var key in keys) {
        if (this._routeHandledMethod('set', key, keys[key], options)) {
          changed = true;
        }
      }
    }

    this.changed = changed;
  };

  /**
   * Retrieve reference to value stored at 'key'
   * @param {String} [key]
   * @returns {String}
   */

  DataStore.prototype.reference = function reference(key) {
    if (!key) {
      return this.REF_KEY;
    }
    // Resolve back to original key if referenced
    key = this._resolveRefKey(key);
    return '' + this.REF_KEY + key;
  };

  /**
   * Batch version of 'reference()'
   * Accepts array of 'keys'
   * @param {Array<String>} keys
   * @returns {Array<String>}
   */

  DataStore.prototype.referenceAll = function referenceAll(keys) {
    var _this5 = this;

    return keys.map(function (key) {
      return _this5.reference(key);
    });
  };

  /**
   * Retrieve unreferenced 'key'
   * @param {String} [key]
   * @returns {String}
   */

  DataStore.prototype.unreference = function unreference(key) {
    if (!key) {
      return '';
    }
    return this._isRefValue(key) ? this._parseRefKey(key) : key;
  };

  /**
   * Batch version of 'unreference()'
   * Accepts array of 'keys'
   * @param {Array<String>} keys
   * @returns {Array<String>}
   */

  DataStore.prototype.unreferenceAll = function unreferenceAll(keys) {
    var _this6 = this;

    return keys.map(function (key) {
      return _this6.unreference(key);
    });
  };

  /**
   * Reset underlying 'data'
   * @param {Object} data
   */

  DataStore.prototype.reset = function reset(data) {
    this._routeHandledMethod('reset', data);
  };

  /**
   * Destroy instance
   */

  DataStore.prototype.destroy = function destroy() {
    // Destroy cursors
    for (var key in this._cursors) {
      this._cursors[key].destroy();
    }
    this.destroyed = true;
    this._actions = {};
    this._cursors = {};
    this._data = {};
    this._handlers = [];
    this._serialisableKeys = {};
    this.debug('destroyed');
  };

  /**
   * Retrieve an instance reference at 'key' to a subset of data
   * @param {String} key
   * @returns {DataStore}
   */

  DataStore.prototype.createCursor = function createCursor(key) {
    key = this._resolveRefKey(key || '');
    // Prefix all keys with separator
    if (key && key.charAt(0) !== '/') {
      key = '/' + key;
    }

    var cursor = this._cursors[key];

    // Create and store
    if (!cursor) {
      cursor = new yrdatastorelibDataStore__Cursor(key, this);
      this._cursors[key] = cursor;
    }

    return cursor;
  };

  /**
   * Store serialisability of 'key'
   * @param {String} key
   * @param {Boolean} value
   */

  DataStore.prototype.setSerialisabilityOfKey = function setSerialisabilityOfKey(key, value) {
    if (key.charAt(0) === '/') {
      key = key.slice(1);
    }
    this._serialisableKeys[key] = value;
  };

  /**
   * Batch version of 'setSerialisabilityOfKey()'
   * Accepts hash of key/value pairs
   * @param {Object} keys
   */

  DataStore.prototype.setSerialisabilityOfKeys = function setSerialisabilityOfKeys(keys) {
    if (yrdatastorelibDataStore__isPlainObject(keys)) {
      for (var key in keys) {
        this.setSerialisabilityOfKey(key, keys[key]);
      }
    }
  };

  /**
   * Dump all data, optionally stringified
   * @param {Boolean} stringify
   * @returns {Object|String}
   */

  DataStore.prototype.dump = function dump(stringify) {
    var data = yrdatastorelibDataStore__explode(this, this._data);

    if (stringify) {
      try {
        // Pretty print
        return JSON.stringify(data, null, 2);
      } catch (err) {
        return '';
      }
    }

    return data;
  };

  /**
   * Prepare for serialisation
   * @param {String} [key]
   * @returns {Object}
   */

  DataStore.prototype.toJSON = function toJSON(key) {
    if (key) {
      return yrdatastorelibDataStore__serialise(key, yrdatastorelibDataStore___get(this, key), this._serialisableKeys);
    }
    return yrdatastorelibDataStore__serialise(null, this._data, this._serialisableKeys);
  };

  /**
   * Determine if 'key' matches 'match'
   * @param {String} key
   * @param {RegExp|String} match
   * @returns {Boolean}
   */

  DataStore.prototype._isMatchKey = function _isMatchKey(key, match) {
    // Treat no match as match all
    if (!match) {
      return true;
    }
    if (match instanceof RegExp) {
      return match.test(key);
    }
    if (typeof match === 'string') {
      return key.indexOf(match) === 0;
    }
    return false;
  };

  /**
   * Determine if 'value' is reference
   * @param {String} value
   * @returns {Boolean}
   */

  DataStore.prototype._isRefValue = function _isRefValue(value) {
    if (!value) {
      return false;
    }
    return typeof value === 'string' && value.indexOf(yrdatastorelibDataStore__REF_KEY) === 0;
  };

  /**
   * Parse key from 'ref'
   * @param {String} ref
   * @returns {String}
   */

  DataStore.prototype._parseRefKey = function _parseRefKey(ref) {
    if (typeof ref !== 'string') {
      return ref;
    }
    return ref.slice(yrdatastorelibDataStore__REF_KEY.length);
  };

  /**
   * Resolve 'key' to nearest __ref key
   * @param {String} key
   * @returns {String}
   */

  DataStore.prototype._resolveRefKey = function _resolveRefKey(key) {
    // Handle passing of __ref key
    if (this._isRefValue(key)) {
      return this._parseRefKey(key);
    }
    // Trim leading '/' (cursors)
    if (key.charAt(0) === '/') {
      key = key.slice(1);
    }

    var segs = key.split('/');
    var n = segs.length;
    var value = this._data;
    var idx = 0;
    var ref = key;

    // Walk data tree from root looking for nearest __ref
    while (idx < n) {
      if (value[segs[idx]] == null) {
        break;
      }
      value = value[segs[idx]];
      if (this._isRefValue(value)) {
        ref = this._parseRefKey(value);
        break;
      }
      idx++;
    }

    // Append relative keys
    if (ref !== key && idx < n - 1) {
      ref += '/' + segs.slice(idx + 1).join('/');
    }

    return ref;
  };

  /**
   * Route 'fn' through handlers
   * @param {String} methodName
   * @param {*} args
   * @returns {Object|null}
   */

  DataStore.prototype._routeHandledMethod = function _routeHandledMethod(methodName) {
    var _handledMethods$metho = this._handledMethods[methodName],
        fn = _handledMethods$metho[0],
        signature = _handledMethods$metho[1];

    var isKeyed = signature[0] === 'key';

    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var _args$ = args[0],
        key = _args$ === undefined ? '' : _args$,
        rest = args.slice(1);

    if (isKeyed && key && key.charAt(0) === '/') {
      key = key.slice(1);
    }

    // Defer to handlers
    if (this._handlers.length) {
      var context = new yrdatastorelibDataStore__HandlerContext(this, methodName, signature, args);

      for (var i = 0, n = this._handlers.length; i < n; i++) {
        if (this._isMatchKey(key, this._handlers[i].match)) {
          this._handlers[i].handler(context);
        }
      }

      var value = fn.apply(undefined, [this].concat(context.toArguments()));

      context.destroy();
      return value;
    }

    return fn.apply(undefined, [this, key].concat(rest));
  };

  return DataStore;
}();

/**
 * Reset underlying 'data'
 * @param {DataStore} store
 * @param {Object} data
 */
function yrdatastorelibDataStore__reset(store, data) {
  store.debug('reset');
  store._data = data;
  store.changed = true;
}

/**
 * Retrieve serialisable 'data'
 * @param {String} key
 * @param {Object} data
 * @param {Object} config
 * @returns {Object}
 */
function yrdatastorelibDataStore__serialise(key, data, config) {
  if (yrdatastorelibDataStore__isPlainObject(data)) {
    var obj = {};

    for (var prop in data) {
      var keyChain = key ? key + '/' + prop : prop;
      var value = data[prop];

      if (config[keyChain] !== false) {
        if (yrdatastorelibDataStore__isPlainObject(value)) {
          obj[prop] = yrdatastorelibDataStore__serialise(keyChain, value, config);
        } else if (value != null && typeof value === 'object' && 'toJSON' in value) {
          obj[prop] = value.toJSON();
        } else {
          obj[prop] = value;
        }
      }
    }

    return obj;
  }

  return config[key] !== false ? data : null;
}

/**
 * Resolve all nested references for 'data'
 * @param {DataStore} store
 * @param {Object} data
 * @returns {Object}
 */
function yrdatastorelibDataStore__explode(store, data) {
  if (yrdatastorelibDataStore__isPlainObject(data)) {
    var obj = {};

    for (var prop in data) {
      obj[prop] = yrdatastorelibDataStore__explode(store, data[prop]);
    }
    return obj;
  } else if (Array.isArray(data)) {
    return data.map(function (value) {
      return yrdatastorelibDataStore__explode(store, value);
    });
  } else if (store._isRefValue(data)) {
    return yrdatastorelibDataStore__explode(store, store.get(store._parseRefKey(data)));
  }

  return data;
}
/*≠≠ node_modules/@yr/data-store/lib/DataStore.js ≠≠*/


/*== node_modules/@yr/data-store/lib/FetchableDataStore.js ==*/
$m['@yr/data-store/lib/FetchableDataStore'] = { exports: {} };

var yrdatastorelibFetchableDataStore__agent = $m['@yr/agent'].exports;
var yrdatastorelibFetchableDataStore__assign = $m['object-assign'].exports;
var yrdatastorelibFetchableDataStore__DataStore = $m['@yr/data-store/lib/DataStore'].exports;
var yrdatastorelibFetchableDataStore__fetch = $m['@yr/data-store/lib/methods/fetch'].exports;
var yrdatastorelibFetchableDataStore__runtime = $m['@yr/runtime'].exports;

$m['@yr/data-store/lib/FetchableDataStore'].exports = function (_DataStore) {
  babelHelpers.inherits(FetchableDataStore, _DataStore);

  /**
   * Constructor
   * @param {String} [id]
   * @param {Object} [data]
   * @param {Object} [options]
   *  - {Array} handlers
   *  - {Boolean} isWritable
   *  - {Object} serialisableKeys
   */
  function FetchableDataStore(id, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    babelHelpers.classCallCheck(this, FetchableDataStore);

    options.handledMethods = {
      fetch: [yrdatastorelibFetchableDataStore__fetch, ['key', 'url', 'options']]
    };

    return babelHelpers.possibleConstructorReturn(this, _DataStore.call(this, id, data, options));
  }

  /**
   * Fetch data. If expired, load from 'url' and store at 'key'
   * @param {String|Object} key
   * @param {String} url
   * @param {Object} [options]
   *  - {Boolean} abort
   *  - {Boolean} ignoreQuery
   *  - {Number} minExpiry
   *  - {Number} retries
   *  - {Boolean} staleWhileRevalidate
   *  - {Boolean} staleIfError
   *  - {Number} timeout
   * @returns {Promise}
   */

  FetchableDataStore.prototype.fetch = function fetch(key, url, options) {
    return this._routeHandledMethod('fetch', key, url, options);
  };

  /**
   * Batch version of 'fetch()'
   * Accepts an array of tuples [[key: String, url: String, options: Object]]
   * @param {Array<Array>} keys
   * @param {Object} [options]
   *  - {Boolean} abort
   *  - {Boolean} ignoreQuery
   *  - {Number} minExpiry
   *  - {Number} retry
   *  - {Boolean} staleWhileRevalidate
   *  - {Boolean} staleIfError
   *  - {Number} timeout
   * @returns {Promise<Array>}
   */

  FetchableDataStore.prototype.fetchAll = function fetchAll(keys, options) {
    var _this2 = this;

    if (Array.isArray(keys)) {
      return Promise.all(keys.map(function (args) {
        var key = args[0],
            url = args[1],
            _args$ = args[2],
            opts = _args$ === undefined ? {} : _args$;

        return _this2._routeHandledMethod('fetch', key, url, yrdatastorelibFetchableDataStore__assign({}, options, opts));
      }));
    }

    return Promise.resolve([]);
  };

  /**
   * Abort all outstanding load requests
   * @param {String} [key]
   */

  FetchableDataStore.prototype.abort = function abort(key) {
    // Too dangerous to abort on server in case more than one outstanding request
    if (yrdatastorelibFetchableDataStore__runtime.isBrowser) {
      yrdatastorelibFetchableDataStore__agent.abortAll(key);
    }
  };

  /**
   * Destroy instance
   */

  FetchableDataStore.prototype.destroy = function destroy() {
    this.abort();
    _DataStore.prototype.destroy.call(this);
  };

  return FetchableDataStore;
}(yrdatastorelibFetchableDataStore__DataStore);
/*≠≠ node_modules/@yr/data-store/lib/FetchableDataStore.js ≠≠*/


/*== node_modules/@yr/data-store/index.js ==*/
$m['@yr/data-store'] = { exports: {} };
/**
 * A smart data store
 * https://github.com/yr/data-store
 * @copyright Yr
 * @license MIT
 */

var yrdatastore__DataStore = $m['@yr/data-store/lib/DataStore'].exports;
var yrdatastore__FetchableDataStore = $m['@yr/data-store/lib/FetchableDataStore'].exports;

$m['@yr/data-store'].exports = {
  /**
   * Instance factory
   * @param {String} [id]
   * @param {Object} [data]
   * @param {Object} [options]
   *  - {Array} handlers
   *  - {Boolean} isFetchable
   *  - {Boolean} isWritable
   *  - {Object} serialisableKeys
   * @returns {DataStore}
   */
  create: function create(id, data, options) {
    if (options && options.isFetchable) {
      return new yrdatastore__FetchableDataStore(id, data, options);
    }
    return new yrdatastore__DataStore(id, data, options);
  }
};
/*≠≠ node_modules/@yr/data-store/index.js ≠≠*/


/*== node_modules/prop-types/factoryWithThrowingShims.js ==*/
$m['prop-types/factoryWithThrowingShims'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypesfactoryWithThrowingShims__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var proptypesfactoryWithThrowingShims__invariant = $m['fbjs/lib/invariant'].exports;
var proptypesfactoryWithThrowingShims__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;

$m['prop-types/factoryWithThrowingShims'].exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === proptypesfactoryWithThrowingShims__ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    proptypesfactoryWithThrowingShims__invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = proptypesfactoryWithThrowingShims__emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/*≠≠ node_modules/prop-types/factoryWithThrowingShims.js ≠≠*/


/*== node_modules/fbjs/lib/warning.js ==*/
$m['fbjs/lib/warning'] = { exports: {} };
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var fbjslibwarning__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var fbjslibwarning__warning = fbjslibwarning__emptyFunction;

if ('development' !== 'production') {
  var fbjslibwarning__printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  fbjslibwarning__warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      fbjslibwarning__printWarning.apply(undefined, [format].concat(args));
    }
  };
}

$m['fbjs/lib/warning'].exports = fbjslibwarning__warning;
/*≠≠ node_modules/fbjs/lib/warning.js ≠≠*/


/*== node_modules/prop-types/checkPropTypes.js ==*/
$m['prop-types/checkPropTypes'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if ('development' !== 'production') {
  var proptypescheckPropTypes__invariant = $m['fbjs/lib/invariant'].exports;
  var proptypescheckPropTypes__warning = $m['fbjs/lib/warning'].exports;
  var proptypescheckPropTypes__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;
  var proptypescheckPropTypes__loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function proptypescheckPropTypes__checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ('development' !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          proptypescheckPropTypes__invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, proptypescheckPropTypes__ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        proptypescheckPropTypes__warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in proptypescheckPropTypes__loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          proptypescheckPropTypes__loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          proptypescheckPropTypes__warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

$m['prop-types/checkPropTypes'].exports = proptypescheckPropTypes__checkPropTypes;
/*≠≠ node_modules/prop-types/checkPropTypes.js ≠≠*/


/*== node_modules/prop-types/factoryWithTypeCheckers.js ==*/
$m['prop-types/factoryWithTypeCheckers'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypesfactoryWithTypeCheckers__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var proptypesfactoryWithTypeCheckers__invariant = $m['fbjs/lib/invariant'].exports;
var proptypesfactoryWithTypeCheckers__warning = $m['fbjs/lib/warning'].exports;

var proptypesfactoryWithTypeCheckers__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;
var proptypesfactoryWithTypeCheckers__checkPropTypes = $m['prop-types/checkPropTypes'].exports;

$m['prop-types/factoryWithTypeCheckers'].exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ('development' !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== proptypesfactoryWithTypeCheckers__ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          proptypesfactoryWithTypeCheckers__invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if ('development' !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            proptypesfactoryWithTypeCheckers__warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      'development' !== 'production' ? proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      'development' !== 'production' ? proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = proptypesfactoryWithTypeCheckers__checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/*≠≠ node_modules/prop-types/factoryWithTypeCheckers.js ≠≠*/


/*== node_modules/prop-types/index.js ==*/
$m['prop-types'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if ('development' !== 'production') {
  var proptypes__REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var proptypes__isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === proptypes__REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var proptypes__throwOnDirectAccess = true;
  $m['prop-types'].exports = $m['prop-types/factoryWithTypeCheckers'].exports(proptypes__isValidElement, proptypes__throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  $m['prop-types'].exports = $m['prop-types/factoryWithThrowingShims'].exports();
}
/*≠≠ node_modules/prop-types/index.js ≠≠*/


/*== node_modules/raf/index.js ==*/
$m['raf'] = { exports: {} };
var raf__now = $m['performance-now'].exports,
    raf__root = typeof window === 'undefined' ? global : window,
    raf__vendors = ['moz', 'webkit'],
    raf__suffix = 'AnimationFrame',
    raf__raf = raf__root['request' + raf__suffix],
    raf__caf = raf__root['cancel' + raf__suffix] || raf__root['cancelRequest' + raf__suffix];

for (var raf__i = 0; !raf__raf && raf__i < raf__vendors.length; raf__i++) {
  raf__raf = raf__root[raf__vendors[raf__i] + 'Request' + raf__suffix];
  raf__caf = raf__root[raf__vendors[raf__i] + 'Cancel' + raf__suffix] || raf__root[raf__vendors[raf__i] + 'CancelRequest' + raf__suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf__raf || !raf__caf) {
  var raf__last = 0,
      raf__id = 0,
      raf__queue = [],
      raf__frameDuration = 1000 / 60;

  raf__raf = function (callback) {
    if (raf__queue.length === 0) {
      var _now = raf__now(),
          next = Math.max(0, raf__frameDuration - (_now - raf__last));
      raf__last = next + _now;
      setTimeout(function () {
        var cp = raf__queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        raf__queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(raf__last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    raf__queue.push({
      handle: ++raf__id,
      callback: callback,
      cancelled: false
    });
    return raf__id;
  };

  raf__caf = function (handle) {
    for (var i = 0; i < raf__queue.length; i++) {
      if (raf__queue[i].handle === handle) {
        raf__queue[i].cancelled = true;
      }
    }
  };
}

$m['raf'].exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf__raf.call(raf__root, fn);
};
$m['raf'].exports.cancel = function () {
  raf__caf.apply(raf__root, arguments);
};
$m['raf'].exports.polyfill = function () {
  raf__root.requestAnimationFrame = raf__raf;
  raf__root.cancelAnimationFrame = raf__caf;
};
/*≠≠ node_modules/raf/index.js ≠≠*/


/*== node_modules/@yr/clock/node_modules/debug/src/debug.js ==*/
$m['debug/src/debug'] = { exports: {} };

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug/src/debug'].exports = $m['debug/src/debug'].exports = debugsrcdebug__createDebug.debug = debugsrcdebug__createDebug['default'] = debugsrcdebug__createDebug;
$m['debug/src/debug'].exports.coerce = debugsrcdebug__coerce;
$m['debug/src/debug'].exports.disable = debugsrcdebug__disable;
$m['debug/src/debug'].exports.enable = debugsrcdebug__enable;
$m['debug/src/debug'].exports.enabled = debugsrcdebug__enabled;
$m['debug/src/debug'].exports.humanize = $m['ms'].exports;

/**
 * The currently active debug mode names, and names to skip.
 */

$m['debug/src/debug'].exports.names = [];
$m['debug/src/debug'].exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

$m['debug/src/debug'].exports.formatters = {};

/**
 * Previous log timestamp.
 */

var debugsrcdebug__prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function debugsrcdebug__selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return $m['debug/src/debug'].exports.colors[Math.abs(hash) % $m['debug/src/debug'].exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debugsrcdebug__createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (debugsrcdebug__prevTime || curr);
    self.diff = ms;
    self.prev = debugsrcdebug__prevTime;
    self.curr = curr;
    debugsrcdebug__prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = $m['debug/src/debug'].exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = $m['debug/src/debug'].exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    $m['debug/src/debug'].exports.formatArgs.call(self, args);

    var logFn = debug.log || $m['debug/src/debug'].exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = $m['debug/src/debug'].exports.enabled(namespace);
  debug.useColors = $m['debug/src/debug'].exports.useColors();
  debug.color = debugsrcdebug__selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof $m['debug/src/debug'].exports.init) {
    $m['debug/src/debug'].exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function debugsrcdebug__enable(namespaces) {
  $m['debug/src/debug'].exports.save(namespaces);

  $m['debug/src/debug'].exports.names = [];
  $m['debug/src/debug'].exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      $m['debug/src/debug'].exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      $m['debug/src/debug'].exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function debugsrcdebug__disable() {
  $m['debug/src/debug'].exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function debugsrcdebug__enabled(name) {
  var i, len;
  for (i = 0, len = $m['debug/src/debug'].exports.skips.length; i < len; i++) {
    if ($m['debug/src/debug'].exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = $m['debug/src/debug'].exports.names.length; i < len; i++) {
    if ($m['debug/src/debug'].exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function debugsrcdebug__coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
/*≠≠ node_modules/@yr/clock/node_modules/debug/src/debug.js ≠≠*/


/*== node_modules/@yr/clock/node_modules/debug/src/browser.js ==*/
$m['debug'] = { exports: {} };
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug'].exports = $m['debug'].exports = $m['debug/src/debug'].exports;
$m['debug'].exports.log = debug__log;
$m['debug'].exports.formatArgs = debug__formatArgs;
$m['debug'].exports.save = debug__save;
$m['debug'].exports.load = debug__load;
$m['debug'].exports.useColors = debug__useColors;
$m['debug'].exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : debug__localstorage();

/**
 * Colors.
 */

$m['debug'].exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function debug__useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

$m['debug'].exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function debug__formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + $m['debug'].exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function debug__log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function debug__save(namespaces) {
  try {
    if (null == namespaces) {
      $m['debug'].exports.storage.removeItem('debug');
    } else {
      $m['debug'].exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function debug__load() {
  var r;
  try {
    r = $m['debug'].exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

$m['debug'].exports.enable(debug__load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function debug__localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/*≠≠ node_modules/@yr/clock/node_modules/debug/src/browser.js ≠≠*/


/*== node_modules/@yr/clock/index.js ==*/
$m['@yr/clock'] = { exports: {} };

/**
 * A global timer utility for managing immediate/timeout intervals
 * https://github.com/yr/clock
 * @copyright Yr
 * @license MIT
 */

var yrclock__debugFactory = $m['debug'].exports;
var yrclock__raf = $m['raf'].exports;
var yrclock__now = $m['performance-now'].exports;

var yrclock__INTERVAL_CUTOFF = 1000;
var yrclock__INTERVAL_MAX = 600000;

var yrclock__debug = yrclock__debugFactory('yr:clock');
var yrclock__isDev = 'development' === 'development';
var yrclock__resolved = Promise.resolve();
var yrclock__timeoutQueue = [];
var yrclock__hasNextTick = typeof process !== 'undefined' && 'nextTick' in process;
var yrclock__runRafId = 0;
var yrclock__runTimeoutId = 0;
var yrclock__uid = 0;

$m['@yr/clock'].exports = {
  /**
   * Initialize with visibility api "features"
   * @param {Object} features
   */
  init: function init(features) {
    var nextTick = features.nextTick,
        hidden = features.hidden,
        visibilityChange = features.visibilityChange;

    // Register for visibilityChange event

    if (hidden !== undefined && visibilityChange !== undefined) {
      document.addEventListener(visibilityChange, yrclock__onVisibilityChangeFactory(hidden), false);
    }
    // Disable nextTick (testing)
    if (nextTick !== undefined && !nextTick) {
      yrclock__hasNextTick = false;
    }
  },

  /**
   * Call 'fn' on next tick
   * @param {Function} fn
   */
  immediate: function immediate(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (yrclock__hasNextTick) {
      var _process;

      (_process = process).nextTick.apply(_process, [fn].concat(args));
    } else {
      yrclock__resolved.then(function () {
        fn.apply(undefined, args);
      });
    }
  },

  /**
   * Call 'fn' on next animation frame
   * @param {Function} fn
   * @returns {Number}
   */
  frame: function frame(fn) {
    return yrclock__raf(fn);
  },

  /**
   * Call 'fn' after 'duration'
   * @param {Number} duration - ms
   * @param {Function} fn
   * @param {String} [id]
   * @returns {String|Number|Object}
   */
  timeout: function timeout(duration, fn, id) {
    for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      args[_key2 - 3] = arguments[_key2];
    }

    if (duration <= 0) {
      return this.immediate.apply(this, [fn].concat(args));
    }

    id = id || 'c::' + ++yrclock__uid;
    var time = yrclock__now() + duration;
    var exists = false;

    // Recycle existing
    for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
      if (yrclock__timeoutQueue[i].id === id) {
        yrclock__timeoutQueue[i].fn = fn;
        yrclock__timeoutQueue[i].args = args;
        yrclock__timeoutQueue[i].time = time;
        yrclock__timeoutQueue[i].cancelled = false;
        exists = true;
        break;
      }
    }
    if (!exists) {
      yrclock__timeoutQueue.push({ id: id, fn: fn, args: args, time: time, cancelled: false });
    }

    if (yrclock__isDev) {
      var date = new Date();

      date.setMilliseconds(date.getMilliseconds() + duration);
      yrclock__debug('timeout scheduled for "%s" at %s', id, date.toLocaleTimeString());
    }

    yrclock__run();

    return id;
  },

  /**
   * Cancel frame/timeout with 'id'
   * @param {String|Number} id
   */
  cancel: function cancel(id) {
    if (id === undefined) {
      return;
    }

    switch (typeof id) {
      // Frame
      case 'number':
        yrclock__debug('frame canceled for "%d"', id);
        yrclock__raf.cancel(id);
        break;
      // Timeout
      case 'string':
        for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
          if (yrclock__timeoutQueue[i].id === id) {
            yrclock__debug('timeout canceled for "%s"', id);
            yrclock__timeoutQueue[i].cancelled = true;
            break;
          }
        }
    }
  }
};

/**
 * Process outstanding queue items
 */
function yrclock__run() {
  var current = yrclock__now();
  var queue = yrclock__timeoutQueue.slice();
  var interval = yrclock__INTERVAL_MAX;

  yrclock__timeoutQueue.length = 0;

  // Reset
  if (yrclock__runRafId > 0 || yrclock__runTimeoutId > 0) {
    yrclock__stop();
  }

  for (var i = queue.length - 1; i >= 0; i--) {
    var item = queue[i];

    if (!item.cancelled) {
      var duration = item.time - current;

      if (duration <= 0) {
        if (yrclock__isDev) {
          yrclock__debug('timeout triggered for "%s" at %s', item.id, new Date().toLocaleTimeString());
        }
        item.fn.apply(item.fn, item.args);
      } else {
        // Store smallest duration
        if (duration < interval) {
          interval = duration;
        }
        yrclock__timeoutQueue.push(item);
      }
    }
  }

  // Loop
  if (yrclock__timeoutQueue.length > 0) {
    // Use raf if requested interval is less than cutoff
    if (interval < yrclock__INTERVAL_CUTOFF) {
      yrclock__runRafId = yrclock__raf(yrclock__run);
    } else {
      yrclock__runTimeoutId = setTimeout(yrclock__run, interval);
    }
  }
}

/**
 * Stop running
 */
function yrclock__stop() {
  if (yrclock__runRafId > 0) {
    yrclock__raf.cancel(yrclock__runRafId);
    yrclock__runRafId = 0;
  } else if (yrclock__runTimeoutId > 0) {
    clearTimeout(yrclock__runTimeoutId);
    yrclock__runTimeoutId = 0;
  }
}

/**
 * Generate visibilityChange handler
 * @param {String} hidden
 * @returns {Function}
 */
function yrclock__onVisibilityChangeFactory(hidden) {
  return function onVisibilityChange(evt) {
    if (document[hidden]) {
      yrclock__debug('disable while hidden');
      yrclock__stop();
    } else {
      yrclock__debug('enable while visible');
      if ('development' === 'development') {
        var current = yrclock__now();

        for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
          var item = yrclock__timeoutQueue[i];

          if (item.time <= current) {
            yrclock__debug('timeout should trigger for "%s"', item.id);
          } else {
            var date = new Date();

            date.setMilliseconds(date.getMilliseconds() + item.time - current);
            yrclock__debug('timeout for "%s" expected at %s', item.id, date.toLocaleTimeString());
          }
        }
      }
      yrclock__run();
    }
  };
}
/*≠≠ node_modules/@yr/clock/index.js ≠≠*/


/*== node_modules/@yr/component/Component.js ==*/
$m['@yr/component/Component'] = { exports: {} };

var yrcomponentComponent___require = $m['preact'].exports,
    yrcomponentComponent__PreactComponent = yrcomponentComponent___require.Component;

var yrcomponentComponent__assign = $m['object-assign'].exports;
var yrcomponentComponent__clock = $m['@yr/clock'].exports;

var yrcomponentComponent__DEFAULT_TRANSITION_DURATION = 250;
var yrcomponentComponent__TIMEOUT = 20;

var yrcomponentComponent__Component = function (_PreactComponent) {
  babelHelpers.inherits(Component, _PreactComponent);

  /**
   * Constructor
   * @param {Object} props
   * @param {Object} context
   */
  function Component(props, context) {
    babelHelpers.classCallCheck(this, Component);

    var _this = babelHelpers.possibleConstructorReturn(this, _PreactComponent.call(this, props, context));

    _this.__timerID = 0;
    _this.__transitionDuration = 'getTransitionDuration' in _this ? _this.getTransitionDuration() : yrcomponentComponent__DEFAULT_TRANSITION_DURATION;
    // Set up initial state
    _this.state = yrcomponentComponent__assign({}, _this.__state);
    // Autobind mixin methods
    if (_this.__bindableMethods) {
      _this.__bindableMethods.forEach(function (method) {
        _this[method] = _this[method].bind(_this);
      });
    }

    // Call pseudo constructor
    if (_this.init !== undefined) {
      _this.init(props, context);
    }
    return _this;
  }

  /**
   * React: render
   * @returns {React}
   */

  Component.prototype.render = function render() {
    return this.__render(this.props, this.state, this.context);
  };

  /**
   * Determine if component should transition based on 'nextProps' or 'nextState'
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */

  Component.prototype.shouldComponentTransition = function shouldComponentTransition(nextProps, nextState) {
    return false;
  };

  /**
   * Update 'state' for transition
   * @param {Object} state
   */

  Component.prototype.willTransition = function willTransition(state) {
    var _this2 = this;

    if (this.__timerID) {
      yrcomponentComponent__clock.cancel(this.__timerID);
    }

    // Generally a bad idea...
    state.visibility = !state.visibility ? 1 : 2;

    // frame/immediate doesn't leave enough time for redraw between states
    this.__timerID = yrcomponentComponent__clock.timeout(yrcomponentComponent__TIMEOUT, function () {
      _this2.isTransitioning();
    });
  };

  /**
   * Trigger transition state change
   */

  Component.prototype.isTransitioning = function isTransitioning() {
    var _this3 = this;

    this.setState({
      visibility: this.state.visibility == 1 ? 2 : 1
    });

    this.__timerID = yrcomponentComponent__clock.timeout(this.__transitionDuration, function () {
      _this3.didTransition();
    });
  };

  /**
   * Trigger transition state change
   */

  Component.prototype.didTransition = function didTransition() {
    this.__timerID = 0;

    this.setState({
      visibility: this.state.visibility == 2 ? 3 : 0
    });
  };

  /**
   * React: componentWillUnmount
   */

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    // Reset
    if (this.state && this.state.visibility) {
      this.state.visibility = 0;
    }
    if (this.__timerID) {
      yrcomponentComponent__clock.cancel(this.__timerID);
    }
    if (this.__componentWillUnmount) {
      this.__componentWillUnmount();
    }
  };

  return Component;
}(yrcomponentComponent__PreactComponent);

yrcomponentComponent__Component.contextTypes = {};

$m['@yr/component/Component'].exports = yrcomponentComponent__Component;
/*≠≠ node_modules/@yr/component/Component.js ≠≠*/


/*== node_modules/@yr/component/index.js ==*/
$m['@yr/component'] = { exports: {} };

/**
 * A factory utility for creating Inferno components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

var yrcomponent___require = $m['preact'].exports,
    yrcomponent__render = yrcomponent___require.render,
    yrcomponent__createElement = yrcomponent___require.createElement;

var yrcomponent___require2 = {},
    yrcomponent__serverRender = yrcomponent___require2.render;

var yrcomponent__assign = $m['object-assign'].exports;
var yrcomponent__Component = $m['@yr/component/Component'].exports;
var yrcomponent__PropTypes = $m['prop-types'].exports;
var yrcomponent__runtime = $m['@yr/runtime'].exports;

var yrcomponent__STATIC_KEYS = ['displayName', 'defaultProps', 'propTypes'];
var yrcomponent__RESERVED_KEYS = yrcomponent__STATIC_KEYS.concat(['componentWillUnmount', 'render', 'state']);

$m['@yr/component'].exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  Component: yrcomponent__Component,
  define: yrcomponent__define,
  el: yrcomponent__createElement,
  PropTypes: yrcomponent__PropTypes,
  render: yrcomponent__runtime.isServer ? yrcomponent__serverRender : yrcomponent__render
};

/**
 * Convert 'specification' into a renderable component definition
 * Always returns class-based definition if 'preferStateless' is "false",
 * otherwise returns stateless function if server or no state/lifecycle methods defined
 * @param {Object} specification
 * @param {Boolean} preferStateless
 * @returns {Class|Function}
 */
function yrcomponent__define(specification) {
  var preferStateless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (specification === undefined || specification.render === undefined) {
    throw Error('a component specification requires a "render" function');
  }

  var defaultProps = specification.defaultProps || {};
  var isStateless = yrcomponent__shouldBeStateless(specification, preferStateless);
  var propTypes = specification.propTypes || {};
  var spec = {
    __bindableMethods: [],
    __componentWillUnmount: specification.componentWillUnmount,
    __render: specification.render,
    __state: specification.state !== undefined ? specification.state : {}
  };

  for (var prop in specification) {
    if (!~yrcomponent__RESERVED_KEYS.indexOf(prop)) {
      var value = specification[prop];

      if (!isStateless && typeof value === 'function') {
        spec.__bindableMethods.push(prop);
      }
      spec[prop] = value;
    }
  }

  if (isStateless) {
    spec.render = function renderStateless(props, context) {
      return this.__render(props, this.__state, context);
    }.bind(spec);
    spec.render.__isStateless = true;
    spec.render.displayName = specification.displayName || '<statelessComponent>';
    spec.render.defaultProps = defaultProps;
    spec.render.propTypes = propTypes;
    if ('getChildContext' in specification) {
      spec.render.childContextTypes = yrcomponent__Component.contextTypes;
    } else {
      spec.render.contextTypes = yrcomponent__Component.contextTypes;
    }
    return spec.render;
  }

  var comp = function (_Component) {
    babelHelpers.inherits(comp, _Component);

    function comp() {
      babelHelpers.classCallCheck(this, comp);
      return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    return comp;
  }(yrcomponent__Component);

  // Handle static class properties
  comp.displayName = specification.displayName || '<component>';
  comp.defaultProps = defaultProps;
  comp.propTypes = propTypes;
  if ('getChildContext' in specification) {
    comp.childContextTypes = yrcomponent__Component.contextTypes;
  }

  // Copy to comp prototype
  yrcomponent__assign(comp.prototype, spec);

  return comp;
}

/**
 * Determine if 'specification' is stateless
 * @param {Object} specification
 * @param {Boolean} preferStateless
 * @returns {Boolean}
 */
function yrcomponent__shouldBeStateless(specification, preferStateless) {
  if (!preferStateless) {
    return false;
  }

  if (yrcomponent__runtime.isServer && specification.getChildContext === undefined) {
    return true;
  }

  // Not stateless if contains anything more than render and static properties
  for (var prop in specification) {
    if (prop !== 'render' && !~yrcomponent__STATIC_KEYS.indexOf(prop)) {
      return false;
    }
  }

  return true;
}
/*≠≠ node_modules/@yr/component/index.js ≠≠*/


/*== node_modules/chai/lib/chai/assertion.js ==*/
$m['chai/lib/chai/assertion'] = { exports: {} };
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chailibchaiassertion__config = $m['chai/lib/chai/config'].exports;

$m['chai/lib/chai/assertion'].exports = function (_chai, util) {
  /*!
   * Module dependencies.
   */

  var AssertionError = _chai.AssertionError,
      flag = util.flag;

  /*!
   * Module export.
   */

  _chai.Assertion = Assertion;

  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */

  function Assertion(obj, msg, ssfi, lockSsfi) {
    flag(this, 'ssfi', ssfi || Assertion);
    flag(this, 'lockSsfi', lockSsfi);
    flag(this, 'object', obj);
    flag(this, 'message', msg);

    return util.proxify(this);
  }

  Object.defineProperty(Assertion, 'includeStack', {
    get: function () {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      return chailibchaiassertion__config.includeStack;
    },
    set: function (value) {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      chailibchaiassertion__config.includeStack = value;
    }
  });

  Object.defineProperty(Assertion, 'showDiff', {
    get: function () {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      return chailibchaiassertion__config.showDiff;
    },
    set: function (value) {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      chailibchaiassertion__config.showDiff = value;
    }
  });

  Assertion.addProperty = function (name, fn) {
    util.addProperty(this.prototype, name, fn);
  };

  Assertion.addMethod = function (name, fn) {
    util.addMethod(this.prototype, name, fn);
  };

  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  Assertion.overwriteProperty = function (name, fn) {
    util.overwriteProperty(this.prototype, name, fn);
  };

  Assertion.overwriteMethod = function (name, fn) {
    util.overwriteMethod(this.prototype, name, fn);
  };

  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String|Function} message or function that returns message to display if expression fails
   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @api private
   */

  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util.test(this, arguments);
    if (false !== showDiff) showDiff = true;
    if (undefined === expected && undefined === _actual) showDiff = false;
    if (true !== chailibchaiassertion__config.showDiff) showDiff = false;

    if (!ok) {
      msg = util.getMessage(this, arguments);
      var actual = util.getActual(this, arguments);
      throw new AssertionError(msg, {
        actual: actual,
        expected: expected,
        showDiff: showDiff
      }, chailibchaiassertion__config.includeStack ? this.assert : flag(this, 'ssfi'));
    }
  };

  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */

  Object.defineProperty(Assertion.prototype, '_obj', { get: function () {
      return flag(this, 'object');
    },
    set: function (val) {
      flag(this, 'object', val);
    }
  });
};
/*≠≠ node_modules/chai/lib/chai/assertion.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/isProxyEnabled.js ==*/
$m['chai/lib/chai/utils/isProxyEnabled'] = { exports: {} };
var chailibchaiutilsisProxyEnabled__config = $m['chai/lib/chai/config'].exports;

/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .isProxyEnabled()
 *
 * Helper function to check if Chai's proxy protection feature is enabled. If
 * proxies are unsupported or disabled via the user's Chai config, then return
 * false. Otherwise, return true.
 *
 * @namespace Utils
 * @name isProxyEnabled
 */

$m['chai/lib/chai/utils/isProxyEnabled'].exports = function isProxyEnabled() {
  return chailibchaiutilsisProxyEnabled__config.useProxy && typeof Proxy !== 'undefined' && typeof Reflect !== 'undefined';
};
/*≠≠ node_modules/chai/lib/chai/utils/isProxyEnabled.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/addLengthGuard.js ==*/
$m['chai/lib/chai/utils/addLengthGuard'] = { exports: {} };
var chailibchaiutilsaddLengthGuard__config = $m['chai/lib/chai/config'].exports;

var chailibchaiutilsaddLengthGuard__fnLengthDesc = Object.getOwnPropertyDescriptor(function () {}, 'length');

/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .addLengthGuard(fn, assertionName, isChainable)
 *
 * Define `length` as a getter on the given uninvoked method assertion. The
 * getter acts as a guard against chaining `length` directly off of an uninvoked
 * method assertion, which is a problem because it references `function`'s
 * built-in `length` property instead of Chai's `length` assertion. When the
 * getter catches the user making this mistake, it throws an error with a
 * helpful message.
 *
 * There are two ways in which this mistake can be made. The first way is by
 * chaining the `length` assertion directly off of an uninvoked chainable
 * method. In this case, Chai suggests that the user use `lengthOf` instead. The
 * second way is by chaining the `length` assertion directly off of an uninvoked
 * non-chainable method. Non-chainable methods must be invoked prior to
 * chaining. In this case, Chai suggests that the user consult the docs for the
 * given assertion.
 *
 * If the `length` property of functions is unconfigurable, then return `fn`
 * without modification.
 *
 * Note that in ES6, the function's `length` property is configurable, so once
 * support for legacy environments is dropped, Chai's `length` property can
 * replace the built-in function's `length` property, and this length guard will
 * no longer be necessary. In the mean time, maintaining consistency across all
 * environments is the priority.
 *
 * @param {Function} fn
 * @param {String} assertionName
 * @param {Boolean} isChainable
 * @namespace Utils
 * @name addLengthGuard
 */

$m['chai/lib/chai/utils/addLengthGuard'].exports = function addLengthGuard(fn, assertionName, isChainable) {
  if (!chailibchaiutilsaddLengthGuard__fnLengthDesc.configurable) return fn;

  Object.defineProperty(fn, 'length', {
    get: function () {
      if (isChainable) {
        throw Error('Invalid Chai property: ' + assertionName + '.length. Due' + ' to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
      }

      throw Error('Invalid Chai property: ' + assertionName + '.length. See' + ' docs for proper usage of "' + assertionName + '".');
    }
  });

  return fn;
};
/*≠≠ node_modules/chai/lib/chai/utils/addLengthGuard.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/proxify.js ==*/
$m['chai/lib/chai/utils/proxify'] = { exports: {} };
var chailibchaiutilsproxify__config = $m['chai/lib/chai/config'].exports;
var chailibchaiutilsproxify__flag = $m['chai/lib/chai/utils/flag'].exports;
var chailibchaiutilsproxify__getProperties = $m['chai/lib/chai/utils/getProperties'].exports;
var chailibchaiutilsproxify__isProxyEnabled = $m['chai/lib/chai/utils/isProxyEnabled'].exports;

/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .proxify(object)
 *
 * Return a proxy of given object that throws an error when a non-existent
 * property is read. By default, the root cause is assumed to be a misspelled
 * property, and thus an attempt is made to offer a reasonable suggestion from
 * the list of existing properties. However, if a nonChainableMethodName is
 * provided, then the root cause is instead a failure to invoke a non-chainable
 * method prior to reading the non-existent property.
 * 
 * If proxies are unsupported or disabled via the user's Chai config, then
 * return object without modification.
 *
 * @param {Object} obj
 * @param {String} nonChainableMethodName
 * @namespace Utils
 * @name proxify
 */

var chailibchaiutilsproxify__builtins = ['__flags', '__methods', '_obj', 'assert'];

$m['chai/lib/chai/utils/proxify'].exports = function proxify(obj, nonChainableMethodName) {
  if (!chailibchaiutilsproxify__isProxyEnabled()) return obj;

  return new Proxy(obj, {
    get: function proxyGetter(target, property) {
      // This check is here because we should not throw errors on Symbol properties
      // such as `Symbol.toStringTag`.
      // The values for which an error should be thrown can be configured using
      // the `config.proxyExcludedKeys` setting.
      if (typeof property === 'string' && chailibchaiutilsproxify__config.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
        // Special message for invalid property access of non-chainable methods.
        if (nonChainableMethodName) {
          throw Error('Invalid Chai property: ' + nonChainableMethodName + '.' + property + '. See docs for proper usage of "' + nonChainableMethodName + '".');
        }

        var orderedProperties = chailibchaiutilsproxify__getProperties(target).filter(function (property) {
          return !Object.prototype.hasOwnProperty(property) && chailibchaiutilsproxify__builtins.indexOf(property) === -1;
        }).sort(function (a, b) {
          return chailibchaiutilsproxify__stringDistance(property, a) - chailibchaiutilsproxify__stringDistance(property, b);
        });

        if (orderedProperties.length && chailibchaiutilsproxify__stringDistance(orderedProperties[0], property) < 4) {
          // If the property is reasonably close to an existing Chai property,
          // suggest that property to the user.
          throw Error('Invalid Chai property: ' + property + '. Did you mean "' + orderedProperties[0] + '"?');
        } else {
          throw Error('Invalid Chai property: ' + property);
        }
      }

      // Use this proxy getter as the starting point for removing implementation
      // frames from the stack trace of a failed assertion. For property
      // assertions, this prevents the proxy getter from showing up in the stack
      // trace since it's invoked before the property getter. For method and
      // chainable method assertions, this flag will end up getting changed to
      // the method wrapper, which is good since this frame will no longer be in
      // the stack once the method is invoked. Note that Chai builtin assertion
      // properties such as `__flags` are skipped since this is only meant to
      // capture the starting point of an assertion. This step is also skipped
      // if the `lockSsfi` flag is set, thus indicating that this assertion is
      // being called from within another assertion. In that case, the `ssfi`
      // flag is already set to the outer assertion's starting point.
      if (chailibchaiutilsproxify__builtins.indexOf(property) === -1 && !chailibchaiutilsproxify__flag(target, 'lockSsfi')) {
        chailibchaiutilsproxify__flag(target, 'ssfi', proxyGetter);
      }

      return Reflect.get(target, property);
    }
  });
};

/**
 * # stringDistance(strA, strB)
 * Return the Levenshtein distance between two strings.
 * @param {string} strA
 * @param {string} strB
 * @return {number} the string distance between strA and strB
 * @api private
 */

function chailibchaiutilsproxify__stringDistance(strA, strB, memo) {
  if (!memo) {
    // `memo` is a two-dimensional array containing a cache of distances
    // memo[i][j] is the distance between strA.slice(0, i) and
    // strB.slice(0, j).
    memo = [];
    for (var i = 0; i <= strA.length; i++) {
      memo[i] = [];
    }
  }

  if (!memo[strA.length] || !memo[strA.length][strB.length]) {
    if (strA.length === 0 || strB.length === 0) {
      memo[strA.length][strB.length] = Math.max(strA.length, strB.length);
    } else {
      memo[strA.length][strB.length] = Math.min(chailibchaiutilsproxify__stringDistance(strA.slice(0, -1), strB, memo) + 1, chailibchaiutilsproxify__stringDistance(strA, strB.slice(0, -1), memo) + 1, chailibchaiutilsproxify__stringDistance(strA.slice(0, -1), strB.slice(0, -1), memo) + (strA.slice(-1) === strB.slice(-1) ? 0 : 1));
    }
  }

  return memo[strA.length][strB.length];
}
/*≠≠ node_modules/chai/lib/chai/utils/proxify.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js ==*/
$m['chai/lib/chai/utils/getOwnEnumerableProperties'] = { exports: {} };
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var chailibchaiutilsgetOwnEnumerableProperties__getOwnEnumerablePropertySymbols = $m['chai/lib/chai/utils/getOwnEnumerablePropertySymbols'].exports;

/**
 * ### .getOwnEnumerableProperties(object)
 *
 * This allows the retrieval of directly-owned enumerable property names and
 * symbols of an object. This function is necessary because Object.keys only
 * returns enumerable property names, not enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerableProperties
 * @api public
 */

$m['chai/lib/chai/utils/getOwnEnumerableProperties'].exports = function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(chailibchaiutilsgetOwnEnumerableProperties__getOwnEnumerablePropertySymbols(obj));
};
/*≠≠ node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/inspect.js ==*/
$m['chai/lib/chai/utils/inspect'] = { exports: {} };
// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var chailibchaiutilsinspect__getName = $m['get-func-name'].exports;
var chailibchaiutilsinspect__getProperties = $m['chai/lib/chai/utils/getProperties'].exports;
var chailibchaiutilsinspect__getEnumerableProperties = $m['chai/lib/chai/utils/getEnumerableProperties'].exports;
var chailibchaiutilsinspect__config = $m['chai/lib/chai/config'].exports;

$m['chai/lib/chai/utils/inspect'].exports = chailibchaiutilsinspect__inspect;

/**
 * ### .inspect(obj, [showHidden], [depth], [colors])
 *
 * Echoes the value of a value. Tries to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects. Default is false.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @namespace Utils
 * @name inspect
 */
function chailibchaiutilsinspect__inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: function (str) {
      return str;
    }
  };
  return chailibchaiutilsinspect__formatValue(ctx, obj, typeof depth === 'undefined' ? 2 : depth);
}

// Returns true if object is a DOM element.
var chailibchaiutilsinspect__isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object && typeof object === 'object' && 'nodeType' in object && object.nodeType === 1 && typeof object.nodeName === 'string';
  }
};

function chailibchaiutilsinspect__formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
  // Filter out the util module, it's inspect function is special
  value.inspect !== $m['chai/lib/chai/utils/inspect'].exports.inspect &&
  // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (typeof ret !== 'string') {
      ret = chailibchaiutilsinspect__formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = chailibchaiutilsinspect__formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // If this is a DOM element, try to get the outer HTML.
  if (chailibchaiutilsinspect__isDOMElement(value)) {
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
    } else {
      // Attempt to serialize it
      try {
        if (document.xmlVersion) {
          var xmlSerializer = new XMLSerializer();
          return xmlSerializer.serializeToString(value);
        } else {
          // Firefox 11- do not support outerHTML
          //   It does, however, support innerHTML
          //   Use the following to render the element
          var ns = "http://www.w3.org/1999/xhtml";
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          var html = container.innerHTML.replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = chailibchaiutilsinspect__getEnumerableProperties(value);
  var keys = ctx.showHidden ? chailibchaiutilsinspect__getProperties(value) : visibleKeys;

  var name, nameSuffix;

  // Some type of object without properties can be shortcutted.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || chailibchaiutilsinspect__isError(value) && (keys.length === 1 && keys[0] === 'stack' || keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')) {
    if (typeof value === 'function') {
      name = chailibchaiutilsinspect__getName(value);
      nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (chailibchaiutilsinspect__isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (chailibchaiutilsinspect__isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (chailibchaiutilsinspect__isError(value)) {
      return chailibchaiutilsinspect__formatError(value);
    }
  }

  var base = '',
      array = false,
      typedArray = false,
      braces = ['{', '}'];

  if (chailibchaiutilsinspect__isTypedArray(value)) {
    typedArray = true;
    braces = ['[', ']'];
  }

  // Make Array say that they are Array
  if (chailibchaiutilsinspect__isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    name = chailibchaiutilsinspect__getName(value);
    nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (chailibchaiutilsinspect__isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (chailibchaiutilsinspect__isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (chailibchaiutilsinspect__isError(value)) {
    return chailibchaiutilsinspect__formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (chailibchaiutilsinspect__isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = chailibchaiutilsinspect__formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else if (typedArray) {
    return chailibchaiutilsinspect__formatTypedArray(value);
  } else {
    output = keys.map(function (key) {
      return chailibchaiutilsinspect__formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return chailibchaiutilsinspect__reduceToSingleString(output, base, braces);
}

function chailibchaiutilsinspect__formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && 1 / value === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');

    case 'symbol':
      return ctx.stylize(value.toString(), 'symbol');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}

function chailibchaiutilsinspect__formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function chailibchaiutilsinspect__formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(chailibchaiutilsinspect__formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(chailibchaiutilsinspect__formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function chailibchaiutilsinspect__formatTypedArray(value) {
  var str = '[ ';

  for (var i = 0; i < value.length; ++i) {
    if (str.length >= chailibchaiutilsinspect__config.truncateThreshold - 7) {
      str += '...';
      break;
    }
    str += value[i] + ', ';
  }
  str += ' ]';

  // Removing trailing `, ` if the array was not truncated
  if (str.indexOf(',  ]') !== -1) {
    str = str.replace(',  ]', ' ]');
  }

  return str;
}

function chailibchaiutilsinspect__formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name;
  var propDescriptor = Object.getOwnPropertyDescriptor(value, key);
  var str;

  if (propDescriptor) {
    if (propDescriptor.get) {
      if (propDescriptor.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (propDescriptor.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = chailibchaiutilsinspect__formatValue(ctx, value[key], null);
      } else {
        str = chailibchaiutilsinspect__formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function chailibchaiutilsinspect__reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function chailibchaiutilsinspect__isTypedArray(ar) {
  // Unfortunately there's no way to check if an object is a TypedArray
  // We have to check if it's one of these types
  return typeof ar === 'object' && /\w+Array]$/.test(chailibchaiutilsinspect__objectToString(ar));
}

function chailibchaiutilsinspect__isArray(ar) {
  return Array.isArray(ar) || typeof ar === 'object' && chailibchaiutilsinspect__objectToString(ar) === '[object Array]';
}

function chailibchaiutilsinspect__isRegExp(re) {
  return typeof re === 'object' && chailibchaiutilsinspect__objectToString(re) === '[object RegExp]';
}

function chailibchaiutilsinspect__isDate(d) {
  return typeof d === 'object' && chailibchaiutilsinspect__objectToString(d) === '[object Date]';
}

function chailibchaiutilsinspect__isError(e) {
  return typeof e === 'object' && chailibchaiutilsinspect__objectToString(e) === '[object Error]';
}

function chailibchaiutilsinspect__objectToString(o) {
  return Object.prototype.toString.call(o);
}
/*≠≠ node_modules/chai/lib/chai/utils/inspect.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/compareByInspect.js ==*/
$m['chai/lib/chai/utils/compareByInspect'] = { exports: {} };
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var chailibchaiutilscompareByInspect__inspect = $m['chai/lib/chai/utils/inspect'].exports;

/**
 * ### .compareByInspect(mixed, mixed)
 *
 * To be used as a compareFunction with Array.prototype.sort. Compares elements
 * using inspect instead of default behavior of using toString so that Symbols
 * and objects with irregular/missing toString can still be sorted without a
 * TypeError.
 *
 * @param {Mixed} first element to compare
 * @param {Mixed} second element to compare
 * @returns {Number} -1 if 'a' should come before 'b'; otherwise 1 
 * @name compareByInspect
 * @namespace Utils
 * @api public
 */

$m['chai/lib/chai/utils/compareByInspect'].exports = function compareByInspect(a, b) {
  return chailibchaiutilscompareByInspect__inspect(a) < chailibchaiutilscompareByInspect__inspect(b) ? -1 : 1;
};
/*≠≠ node_modules/chai/lib/chai/utils/compareByInspect.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/overwriteChainableMethod.js ==*/
$m['chai/lib/chai/utils/overwriteChainableMethod'] = function () {
$m['chai/lib/chai/utils/overwriteChainableMethod'] = { exports: {} };
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chailibchaiutilsoverwriteChainableMethod__chai = require('chai/lib/chai');
var chailibchaiutilsoverwriteChainableMethod__transferFlags = $m['chai/lib/chai/utils/transferFlags'].exports;

/**
 * ### .overwriteChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Overwites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'lengthOf',
 *       function (_super) {
 *       }
 *     , function (_super) {
 *       }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.lengthOf(3);
 *     expect(myFoo).to.have.lengthOf.above(3);
 *
 * @param {Object} ctx object whose method / property is to be overwritten
 * @param {String} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @namespace Utils
 * @name overwriteChainableMethod
 * @api public
 */

$m['chai/lib/chai/utils/overwriteChainableMethod'].exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];

  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
    var result = chainingBehavior(_chainingBehavior).call(this);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chailibchaiutilsoverwriteChainableMethod__chai.Assertion();
    chailibchaiutilsoverwriteChainableMethod__transferFlags(this, newAssertion);
    return newAssertion;
  };

  var _method = chainableBehavior.method;
  chainableBehavior.method = function overwritingChainableMethodWrapper() {
    var result = method(_method).apply(this, arguments);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chailibchaiutilsoverwriteChainableMethod__chai.Assertion();
    chailibchaiutilsoverwriteChainableMethod__transferFlags(this, newAssertion);
    return newAssertion;
  };
};
};
/*≠≠ node_modules/chai/lib/chai/utils/overwriteChainableMethod.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/addChainableMethod.js ==*/
$m['chai/lib/chai/utils/addChainableMethod'] = function () {
$m['chai/lib/chai/utils/addChainableMethod'] = { exports: {} };
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var chailibchaiutilsaddChainableMethod__addLengthGuard = $m['chai/lib/chai/utils/addLengthGuard'].exports;
var chailibchaiutilsaddChainableMethod__chai = require('chai/lib/chai');
var chailibchaiutilsaddChainableMethod__flag = $m['chai/lib/chai/utils/flag'].exports;
var chailibchaiutilsaddChainableMethod__proxify = $m['chai/lib/chai/utils/proxify'].exports;
var chailibchaiutilsaddChainableMethod__transferFlags = $m['chai/lib/chai/utils/transferFlags'].exports;

/*!
 * Module variables
 */

// Check whether `Object.setPrototypeOf` is supported
var chailibchaiutilsaddChainableMethod__canSetPrototype = typeof Object.setPrototypeOf === 'function';

// Without `Object.setPrototypeOf` support, this module will need to add properties to a function.
// However, some of functions' own props are not configurable and should be skipped.
var chailibchaiutilsaddChainableMethod__testFn = function () {};
var chailibchaiutilsaddChainableMethod__excludeNames = Object.getOwnPropertyNames(chailibchaiutilsaddChainableMethod__testFn).filter(function (name) {
  var propDesc = Object.getOwnPropertyDescriptor(chailibchaiutilsaddChainableMethod__testFn, name);

  // Note: PhantomJS 1.x includes `callee` as one of `testFn`'s own properties,
  // but then returns `undefined` as the property descriptor for `callee`. As a
  // workaround, we perform an otherwise unnecessary type-check for `propDesc`,
  // and then filter it out if it's not an object as it should be.
  if (typeof propDesc !== 'object') return true;

  return !propDesc.configurable;
});

// Cache `Function` properties
var chailibchaiutilsaddChainableMethod__call = Function.prototype.call,
    chailibchaiutilsaddChainableMethod__apply = Function.prototype.apply;

/**
 * ### .addChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @namespace Utils
 * @name addChainableMethod
 * @api public
 */

$m['chai/lib/chai/utils/addChainableMethod'].exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () {};
  }

  var chainableBehavior = {
    method: method,
    chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name, { get: function chainableMethodGetter() {
      chainableBehavior.chainingBehavior.call(this);

      var chainableMethodWrapper = function () {
        // Setting the `ssfi` flag to `chainableMethodWrapper` causes this
        // function to be the starting point for removing implementation
        // frames from the stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set.
        //
        // If the `lockSsfi` flag is set, then this assertion is being
        // invoked from inside of another assertion. In this case, the `ssfi`
        // flag has already been set by the outer assertion.
        //
        // Note that overwriting a chainable method merely replaces the saved
        // methods in `ctx.__methods` instead of completely replacing the
        // overwritten assertion. Therefore, an overwriting assertion won't
        // set the `ssfi` or `lockSsfi` flags.
        if (!chailibchaiutilsaddChainableMethod__flag(this, 'lockSsfi')) {
          chailibchaiutilsaddChainableMethod__flag(this, 'ssfi', chainableMethodWrapper);
        }

        var result = chainableBehavior.method.apply(this, arguments);
        if (result !== undefined) {
          return result;
        }

        var newAssertion = new chailibchaiutilsaddChainableMethod__chai.Assertion();
        chailibchaiutilsaddChainableMethod__transferFlags(this, newAssertion);
        return newAssertion;
      };

      chailibchaiutilsaddChainableMethod__addLengthGuard(chainableMethodWrapper, name, true);

      // Use `Object.setPrototypeOf` if available
      if (chailibchaiutilsaddChainableMethod__canSetPrototype) {
        // Inherit all properties from the object by replacing the `Function` prototype
        var prototype = Object.create(this);
        // Restore the `call` and `apply` methods from `Function`
        prototype.call = chailibchaiutilsaddChainableMethod__call;
        prototype.apply = chailibchaiutilsaddChainableMethod__apply;
        Object.setPrototypeOf(chainableMethodWrapper, prototype);
      }
      // Otherwise, redefine all properties (slow!)
      else {
          var asserterNames = Object.getOwnPropertyNames(ctx);
          asserterNames.forEach(function (asserterName) {
            if (chailibchaiutilsaddChainableMethod__excludeNames.indexOf(asserterName) !== -1) {
              return;
            }

            var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
            Object.defineProperty(chainableMethodWrapper, asserterName, pd);
          });
        }

      chailibchaiutilsaddChainableMethod__transferFlags(this, chainableMethodWrapper);
      return chailibchaiutilsaddChainableMethod__proxify(chainableMethodWrapper);
    },
    configurable: true
  });
};
};
/*≠≠ node_modules/chai/lib/chai/utils/addChainableMethod.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/overwriteMethod.js ==*/
$m['chai/lib/chai/utils/overwriteMethod'] = function () {
$m['chai/lib/chai/utils/overwriteMethod'] = { exports: {} };
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chailibchaiutilsoverwriteMethod__addLengthGuard = $m['chai/lib/chai/utils/addLengthGuard'].exports;
var chailibchaiutilsoverwriteMethod__chai = require('chai/lib/chai');
var chailibchaiutilsoverwriteMethod__flag = $m['chai/lib/chai/utils/flag'].exports;
var chailibchaiutilsoverwriteMethod__proxify = $m['chai/lib/chai/utils/proxify'].exports;
var chailibchaiutilsoverwriteMethod__transferFlags = $m['chai/lib/chai/utils/transferFlags'].exports;

/**
 * ### .overwriteMethod(ctx, name, fn)
 *
 * Overwites an already existing method and provides
 * access to previous function. Must return function
 * to be used for name.
 *
 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.equal('bar');
 *
 * @param {Object} ctx object whose method is to be overwritten
 * @param {String} name of method to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @namespace Utils
 * @name overwriteMethod
 * @api public
 */

$m['chai/lib/chai/utils/overwriteMethod'].exports = function overwriteMethod(ctx, name, method) {
  var _method = ctx[name],
      _super = function () {
    throw new Error(name + ' is not a function');
  };

  if (_method && 'function' === typeof _method) _super = _method;

  var overwritingMethodWrapper = function () {
    // Setting the `ssfi` flag to `overwritingMethodWrapper` causes this
    // function to be the starting point for removing implementation frames from
    // the stack trace of a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!chailibchaiutilsoverwriteMethod__flag(this, 'lockSsfi')) {
      chailibchaiutilsoverwriteMethod__flag(this, 'ssfi', overwritingMethodWrapper);
    }

    // Setting the `lockSsfi` flag to `true` prevents the overwritten assertion
    // from changing the `ssfi` flag. By this point, the `ssfi` flag is already
    // set to the correct starting point for this assertion.
    var origLockSsfi = chailibchaiutilsoverwriteMethod__flag(this, 'lockSsfi');
    chailibchaiutilsoverwriteMethod__flag(this, 'lockSsfi', true);
    var result = method(_super).apply(this, arguments);
    chailibchaiutilsoverwriteMethod__flag(this, 'lockSsfi', origLockSsfi);

    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chailibchaiutilsoverwriteMethod__chai.Assertion();
    chailibchaiutilsoverwriteMethod__transferFlags(this, newAssertion);
    return newAssertion;
  };

  chailibchaiutilsoverwriteMethod__addLengthGuard(overwritingMethodWrapper, name, false);
  ctx[name] = chailibchaiutilsoverwriteMethod__proxify(overwritingMethodWrapper, name);
};
};
/*≠≠ node_modules/chai/lib/chai/utils/overwriteMethod.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/overwriteProperty.js ==*/
$m['chai/lib/chai/utils/overwriteProperty'] = function () {
$m['chai/lib/chai/utils/overwriteProperty'] = { exports: {} };
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chailibchaiutilsoverwriteProperty__chai = require('chai/lib/chai');
var chailibchaiutilsoverwriteProperty__flag = $m['chai/lib/chai/utils/flag'].exports;
var chailibchaiutilsoverwriteProperty__isProxyEnabled = $m['chai/lib/chai/utils/isProxyEnabled'].exports;
var chailibchaiutilsoverwriteProperty__transferFlags = $m['chai/lib/chai/utils/transferFlags'].exports;

/**
 * ### .overwriteProperty(ctx, name, fn)
 *
 * Overwites an already existing property getter and provides
 * access to previous value. Must return function to use as getter.
 *
 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
 *
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.ok;
 *
 * @param {Object} ctx object whose property is to be overwritten
 * @param {String} name of property to overwrite
 * @param {Function} getter function that returns a getter function to be used for name
 * @namespace Utils
 * @name overwriteProperty
 * @api public
 */

$m['chai/lib/chai/utils/overwriteProperty'].exports = function overwriteProperty(ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name),
      _super = function () {};

  if (_get && 'function' === typeof _get.get) _super = _get.get;

  Object.defineProperty(ctx, name, { get: function overwritingPropertyGetter() {
      // Setting the `ssfi` flag to `overwritingPropertyGetter` causes this
      // function to be the starting point for removing implementation frames
      // from the stack trace of a failed assertion.
      //
      // However, we only want to use this function as the starting point if
      // the `lockSsfi` flag isn't set and proxy protection is disabled.
      //
      // If the `lockSsfi` flag is set, then either this assertion has been
      // overwritten by another assertion, or this assertion is being invoked
      // from inside of another assertion. In the first case, the `ssfi` flag
      // has already been set by the overwriting assertion. In the second
      // case, the `ssfi` flag has already been set by the outer assertion.
      //
      // If proxy protection is enabled, then the `ssfi` flag has already been
      // set by the proxy getter.
      if (!chailibchaiutilsoverwriteProperty__isProxyEnabled() && !chailibchaiutilsoverwriteProperty__flag(this, 'lockSsfi')) {
        chailibchaiutilsoverwriteProperty__flag(this, 'ssfi', overwritingPropertyGetter);
      }

      // Setting the `lockSsfi` flag to `true` prevents the overwritten
      // assertion from changing the `ssfi` flag. By this point, the `ssfi`
      // flag is already set to the correct starting point for this assertion.
      var origLockSsfi = chailibchaiutilsoverwriteProperty__flag(this, 'lockSsfi');
      chailibchaiutilsoverwriteProperty__flag(this, 'lockSsfi', true);
      var result = getter(_super).call(this);
      chailibchaiutilsoverwriteProperty__flag(this, 'lockSsfi', origLockSsfi);

      if (result !== undefined) {
        return result;
      }

      var newAssertion = new chailibchaiutilsoverwriteProperty__chai.Assertion();
      chailibchaiutilsoverwriteProperty__transferFlags(this, newAssertion);
      return newAssertion;
    },
    configurable: true
  });
};
};
/*≠≠ node_modules/chai/lib/chai/utils/overwriteProperty.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/addMethod.js ==*/
$m['chai/lib/chai/utils/addMethod'] = function () {
$m['chai/lib/chai/utils/addMethod'] = { exports: {} };
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chailibchaiutilsaddMethod__addLengthGuard = $m['chai/lib/chai/utils/addLengthGuard'].exports;
var chailibchaiutilsaddMethod__chai = require('chai/lib/chai');
var chailibchaiutilsaddMethod__flag = $m['chai/lib/chai/utils/flag'].exports;
var chailibchaiutilsaddMethod__proxify = $m['chai/lib/chai/utils/proxify'].exports;
var chailibchaiutilsaddMethod__transferFlags = $m['chai/lib/chai/utils/transferFlags'].exports;

/**
 * ### .addMethod(ctx, name, method)
 *
 * Adds a method to the prototype of an object.
 *
 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(fooStr).to.be.foo('bar');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for name
 * @namespace Utils
 * @name addMethod
 * @api public
 */

$m['chai/lib/chai/utils/addMethod'].exports = function addMethod(ctx, name, method) {
  var methodWrapper = function () {
    // Setting the `ssfi` flag to `methodWrapper` causes this function to be the
    // starting point for removing implementation frames from the stack trace of
    // a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!chailibchaiutilsaddMethod__flag(this, 'lockSsfi')) {
      chailibchaiutilsaddMethod__flag(this, 'ssfi', methodWrapper);
    }

    var result = method.apply(this, arguments);
    if (result !== undefined) return result;

    var newAssertion = new chailibchaiutilsaddMethod__chai.Assertion();
    chailibchaiutilsaddMethod__transferFlags(this, newAssertion);
    return newAssertion;
  };

  chailibchaiutilsaddMethod__addLengthGuard(methodWrapper, name, false);
  ctx[name] = chailibchaiutilsaddMethod__proxify(methodWrapper, name);
};
};
/*≠≠ node_modules/chai/lib/chai/utils/addMethod.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/addProperty.js ==*/
$m['chai/lib/chai/utils/addProperty'] = function () {
$m['chai/lib/chai/utils/addProperty'] = { exports: {} };
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chailibchaiutilsaddProperty__chai = require('chai/lib/chai');
var chailibchaiutilsaddProperty__flag = $m['chai/lib/chai/utils/flag'].exports;
var chailibchaiutilsaddProperty__isProxyEnabled = $m['chai/lib/chai/utils/isProxyEnabled'].exports;
var chailibchaiutilsaddProperty__transferFlags = $m['chai/lib/chai/utils/transferFlags'].exports;

/**
 * ### .addProperty(ctx, name, getter)
 *
 * Adds a property to the prototype of an object.
 *
 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.foo;
 *
 * @param {Object} ctx object to which the property is added
 * @param {String} name of property to add
 * @param {Function} getter function to be used for name
 * @namespace Utils
 * @name addProperty
 * @api public
 */

$m['chai/lib/chai/utils/addProperty'].exports = function addProperty(ctx, name, getter) {
  getter = getter === undefined ? new Function() : getter;

  Object.defineProperty(ctx, name, { get: function propertyGetter() {
      // Setting the `ssfi` flag to `propertyGetter` causes this function to
      // be the starting point for removing implementation frames from the
      // stack trace of a failed assertion.
      //
      // However, we only want to use this function as the starting point if
      // the `lockSsfi` flag isn't set and proxy protection is disabled.
      //
      // If the `lockSsfi` flag is set, then either this assertion has been
      // overwritten by another assertion, or this assertion is being invoked
      // from inside of another assertion. In the first case, the `ssfi` flag
      // has already been set by the overwriting assertion. In the second
      // case, the `ssfi` flag has already been set by the outer assertion.
      //
      // If proxy protection is enabled, then the `ssfi` flag has already been
      // set by the proxy getter.
      if (!chailibchaiutilsaddProperty__isProxyEnabled() && !chailibchaiutilsaddProperty__flag(this, 'lockSsfi')) {
        chailibchaiutilsaddProperty__flag(this, 'ssfi', propertyGetter);
      }

      var result = getter.call(this);
      if (result !== undefined) return result;

      var newAssertion = new chailibchaiutilsaddProperty__chai.Assertion();
      chailibchaiutilsaddProperty__transferFlags(this, newAssertion);
      return newAssertion;
    },
    configurable: true
  });
};
};
/*≠≠ node_modules/chai/lib/chai/utils/addProperty.js ≠≠*/


/*== node_modules/deep-eql/index.js ==*/
$m['deep-eql'] = { exports: {} };
/* globals Symbol: true, Uint8Array: true, WeakMap: true */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var deepeql__type = $m['type-detect#3.0.0'].exports;
function deepeql__FakeMap() {
  this.clear();
}
deepeql__FakeMap.prototype = {
  clear: function clearMap() {
    this.keys = [];
    this.values = [];
    return this;
  },
  set: function setMap(key, value) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
    return this;
  },
  get: function getMap(key) {
    return this.values[this.keys.indexOf(key)];
  },
  delete: function deleteMap(key) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values = this.values.slice(0, index).concat(this.values.slice(index + 1));
      this.keys = this.keys.slice(0, index).concat(this.keys.slice(index + 1));
    }
    return this;
  }
};

var deepeql__MemoizeMap = null;
if (typeof WeakMap === 'function') {
  deepeql__MemoizeMap = WeakMap;
} else {
  deepeql__MemoizeMap = deepeql__FakeMap;
}

/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function deepeql__memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || deepeql__isPrimitive(leftHandOperand) || deepeql__isPrimitive(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === 'boolean') {
      return result;
    }
  }
  return null;
}

/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function deepeql__memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || deepeql__isPrimitive(leftHandOperand) || deepeql__isPrimitive(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new deepeql__MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}

/*!
 * Primary Export
 */

$m['deep-eql'].exports = deepeql__deepEqual;
$m['deep-eql'].exports.MemoizeMap = deepeql__MemoizeMap;

/**
 * Assert deeply nested sameValue equality between two objects of any type.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
 */
function deepeql__deepEqual(leftHandOperand, rightHandOperand, options) {
  // If we have a comparator, we can't assume anything; so bail to its check first.
  if (options && options.comparator) {
    return deepeql__extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }

  var simpleResult = deepeql__simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }

  // Deeper comparisons are pushed through to a larger function
  return deepeql__extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}

/**
 * Many comparisons can be canceled out early via simple equality or primitive checks.
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @return {Boolean|null} equal match
 */
function deepeql__simpleEqual(leftHandOperand, rightHandOperand) {
  // Equal references (except for Numbers) can be returned early
  if (leftHandOperand === rightHandOperand) {
    // Handle +-0 cases
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }

  // handle NaN cases
  if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
  rightHandOperand !== rightHandOperand // eslint-disable-line no-self-compare
  ) {
      return true;
    }

  // Anything that is not an 'object', i.e. symbols, functions, booleans, numbers,
  // strings, and undefined, can be compared by reference.
  if (deepeql__isPrimitive(leftHandOperand) || deepeql__isPrimitive(rightHandOperand)) {
    // Easy out b/c it would have passed the first equality check
    return false;
  }
  return null;
}

/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function deepeql__extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new deepeql__MemoizeMap();
  var comparator = options && options.comparator;

  // Check if a memoized result exists.
  var memoizeResultLeft = deepeql__memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = deepeql__memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }

  // If a comparator is present, use it.
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    // Comparators may return null, in which case we want to go back to default behavior.
    if (comparatorResult === false || comparatorResult === true) {
      deepeql__memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    // To allow comparators to override *any* behavior, we ran them first. Since it didn't decide
    // what to do, we need to make sure to return the basic tests first before we move on.
    var simpleResult = deepeql__simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      // Don't memoize this, it takes longer to set/retrieve than to just compare.
      return simpleResult;
    }
  }

  var leftHandType = deepeql__type(leftHandOperand);
  if (leftHandType !== deepeql__type(rightHandOperand)) {
    deepeql__memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }

  // Temporarily set the operands in the memoize object to prevent blowing the stack
  deepeql__memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);

  var result = deepeql__extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  deepeql__memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}

function deepeql__extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
      // If these types are their instance types (e.g. `new Number`) then re-deepEqual against their values
      return deepeql__deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case 'Promise':
    case 'Symbol':
    case 'function':
    case 'WeakMap':
    case 'WeakSet':
    case 'Error':
      return leftHandOperand === rightHandOperand;
    case 'Arguments':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Array':
      return deepeql__iterableEqual(leftHandOperand, rightHandOperand, options);
    case 'RegExp':
      return deepeql__regexpEqual(leftHandOperand, rightHandOperand);
    case 'Generator':
      return deepeql__generatorEqual(leftHandOperand, rightHandOperand, options);
    case 'DataView':
      return deepeql__iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case 'ArrayBuffer':
      return deepeql__iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case 'Set':
      return deepeql__entriesEqual(leftHandOperand, rightHandOperand, options);
    case 'Map':
      return deepeql__entriesEqual(leftHandOperand, rightHandOperand, options);
    default:
      return deepeql__objectEqual(leftHandOperand, rightHandOperand, options);
  }
}

/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */

function deepeql__regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}

/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function deepeql__entriesEqual(leftHandOperand, rightHandOperand, options) {
  // IE11 doesn't support Set#entries or Set#@@iterator, so we need manually populate using Set#forEach
  if (leftHandOperand.size !== rightHandOperand.size) {
    return false;
  }
  if (leftHandOperand.size === 0) {
    return true;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(function gatherEntries(key, value) {
    leftHandItems.push([key, value]);
  });
  rightHandOperand.forEach(function gatherEntries(key, value) {
    rightHandItems.push([key, value]);
  });
  return deepeql__iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}

/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function deepeql__iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index = -1;
  while (++index < length) {
    if (deepeql__deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function deepeql__generatorEqual(leftHandOperand, rightHandOperand, options) {
  return deepeql__iterableEqual(deepeql__getGeneratorEntries(leftHandOperand), deepeql__getGeneratorEntries(rightHandOperand), options);
}

/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function deepeql__hasIteratorFunction(target) {
  return typeof Symbol !== 'undefined' && typeof target === 'object' && typeof Symbol.iterator !== 'undefined' && typeof target[Symbol.iterator] === 'function';
}

/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function deepeql__getIteratorEntries(target) {
  if (deepeql__hasIteratorFunction(target)) {
    try {
      return deepeql__getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}

/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function deepeql__getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [generatorResult.value];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}

/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function deepeql__getEnumerableKeys(target) {
  var keys = [];
  for (var key in target) {
    keys.push(key);
  }
  return keys;
}

/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function deepeql__keysEqual(leftHandOperand, rightHandOperand, keys, options) {
  var length = keys.length;
  if (length === 0) {
    return true;
  }
  for (var i = 0; i < length; i += 1) {
    if (deepeql__deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function deepeql__objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = deepeql__getEnumerableKeys(leftHandOperand);
  var rightHandKeys = deepeql__getEnumerableKeys(rightHandOperand);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    leftHandKeys.sort();
    rightHandKeys.sort();
    if (deepeql__iterableEqual(leftHandKeys, rightHandKeys) === false) {
      return false;
    }
    return deepeql__keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }

  var leftHandEntries = deepeql__getIteratorEntries(leftHandOperand);
  var rightHandEntries = deepeql__getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return deepeql__iterableEqual(leftHandEntries, rightHandEntries, options);
  }

  if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
    return true;
  }

  return false;
}

/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function deepeql__isPrimitive(value) {
  return value === null || typeof value !== 'object';
}
/*≠≠ node_modules/deep-eql/index.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/objDisplay.js ==*/
$m['chai/lib/chai/utils/objDisplay'] = { exports: {} };
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var chailibchaiutilsobjDisplay__inspect = $m['chai/lib/chai/utils/inspect'].exports;
var chailibchaiutilsobjDisplay__config = $m['chai/lib/chai/config'].exports;

/**
 * ### .objDisplay(object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @namespace Utils
 * @api public
 */

$m['chai/lib/chai/utils/objDisplay'].exports = function objDisplay(obj) {
  var str = chailibchaiutilsobjDisplay__inspect(obj),
      type = Object.prototype.toString.call(obj);

  if (chailibchaiutilsobjDisplay__config.truncateThreshold && str.length >= chailibchaiutilsobjDisplay__config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === '' ? '[Function]' : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj),
          kstr = keys.length > 2 ? keys.splice(0, 2).join(', ') + ', ...' : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};
/*≠≠ node_modules/chai/lib/chai/utils/objDisplay.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/getMessage.js ==*/
$m['chai/lib/chai/utils/getMessage'] = { exports: {} };
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var chailibchaiutilsgetMessage__flag = $m['chai/lib/chai/utils/flag'].exports,
    chailibchaiutilsgetMessage__getActual = $m['chai/lib/chai/utils/getActual'].exports,
    chailibchaiutilsgetMessage__inspect = $m['chai/lib/chai/utils/inspect'].exports,
    chailibchaiutilsgetMessage__objDisplay = $m['chai/lib/chai/utils/objDisplay'].exports;

/**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getMessage
 * @api public
 */

$m['chai/lib/chai/utils/getMessage'].exports = function getMessage(obj, args) {
  var negate = chailibchaiutilsgetMessage__flag(obj, 'negate'),
      val = chailibchaiutilsgetMessage__flag(obj, 'object'),
      expected = args[3],
      actual = chailibchaiutilsgetMessage__getActual(obj, args),
      msg = negate ? args[2] : args[1],
      flagMsg = chailibchaiutilsgetMessage__flag(obj, 'message');

  if (typeof msg === "function") msg = msg();
  msg = msg || '';
  msg = msg.replace(/#\{this\}/g, function () {
    return chailibchaiutilsgetMessage__objDisplay(val);
  }).replace(/#\{act\}/g, function () {
    return chailibchaiutilsgetMessage__objDisplay(actual);
  }).replace(/#\{exp\}/g, function () {
    return chailibchaiutilsgetMessage__objDisplay(expected);
  });

  return flagMsg ? flagMsg + ': ' + msg : msg;
};
/*≠≠ node_modules/chai/lib/chai/utils/getMessage.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/expectTypes.js ==*/
$m['chai/lib/chai/utils/expectTypes'] = { exports: {} };
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .expectTypes(obj, types)
 *
 * Ensures that the object being tested against is of a valid type.
 *
 *     utils.expectTypes(this, ['array', 'object', 'string']);
 *
 * @param {Mixed} obj constructed Assertion
 * @param {Array} type A list of allowed types for this assertion
 * @namespace Utils
 * @name expectTypes
 * @api public
 */

var chailibchaiutilsexpectTypes__AssertionError = $m['assertion-error'].exports;
var chailibchaiutilsexpectTypes__flag = $m['chai/lib/chai/utils/flag'].exports;
var chailibchaiutilsexpectTypes__type = $m['type-detect'].exports;

$m['chai/lib/chai/utils/expectTypes'].exports = function expectTypes(obj, types) {
  var flagMsg = chailibchaiutilsexpectTypes__flag(obj, 'message');
  var ssfi = chailibchaiutilsexpectTypes__flag(obj, 'ssfi');

  flagMsg = flagMsg ? flagMsg + ': ' : '';

  obj = chailibchaiutilsexpectTypes__flag(obj, 'object');
  types = types.map(function (t) {
    return t.toLowerCase();
  });
  types.sort();

  // Transforms ['lorem', 'ipsum'] into 'a lorem, or an ipsum'
  var str = types.map(function (t, index) {
    var art = ~['a', 'e', 'i', 'o', 'u'].indexOf(t.charAt(0)) ? 'an' : 'a';
    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
    return or + art + ' ' + t;
  }).join(', ');

  var objType = chailibchaiutilsexpectTypes__type(obj).toLowerCase();

  if (!types.some(function (expected) {
    return objType === expected;
  })) {
    throw new chailibchaiutilsexpectTypes__AssertionError(flagMsg + 'object tested must be ' + str + ', but ' + objType + ' given', undefined, ssfi);
  }
};
/*≠≠ node_modules/chai/lib/chai/utils/expectTypes.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/test.js ==*/
$m['chai/lib/chai/utils/test'] = { exports: {} };
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var chailibchaiutilstest__flag = $m['chai/lib/chai/utils/flag'].exports;

/**
 * ### .test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name test
 */

$m['chai/lib/chai/utils/test'].exports = function test(obj, args) {
  var negate = chailibchaiutilstest__flag(obj, 'negate'),
      expr = args[0];
  return negate ? !expr : expr;
};
/*≠≠ node_modules/chai/lib/chai/utils/test.js ≠≠*/


/*== node_modules/chai/lib/chai/utils/index.js ==*/
$m['chai/lib/chai/utils/index'] = function () {
$m['chai/lib/chai/utils/index'] = { exports: {} };
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Dependencies that are used for multiple exports are required here only once
 */

var chailibchaiutilsindex__pathval = $m['pathval'].exports;

/*!
 * test utility
 */

$m['chai/lib/chai/utils/index'].exports.test = $m['chai/lib/chai/utils/test'].exports;

/*!
 * type utility
 */

$m['chai/lib/chai/utils/index'].exports.type = $m['type-detect'].exports;

/*!
 * expectTypes utility
 */
$m['chai/lib/chai/utils/index'].exports.expectTypes = $m['chai/lib/chai/utils/expectTypes'].exports;

/*!
 * message utility
 */

$m['chai/lib/chai/utils/index'].exports.getMessage = $m['chai/lib/chai/utils/getMessage'].exports;

/*!
 * actual utility
 */

$m['chai/lib/chai/utils/index'].exports.getActual = $m['chai/lib/chai/utils/getActual'].exports;

/*!
 * Inspect util
 */

$m['chai/lib/chai/utils/index'].exports.inspect = $m['chai/lib/chai/utils/inspect'].exports;

/*!
 * Object Display util
 */

$m['chai/lib/chai/utils/index'].exports.objDisplay = $m['chai/lib/chai/utils/objDisplay'].exports;

/*!
 * Flag utility
 */

$m['chai/lib/chai/utils/index'].exports.flag = $m['chai/lib/chai/utils/flag'].exports;

/*!
 * Flag transferring utility
 */

$m['chai/lib/chai/utils/index'].exports.transferFlags = $m['chai/lib/chai/utils/transferFlags'].exports;

/*!
 * Deep equal utility
 */

$m['chai/lib/chai/utils/index'].exports.eql = $m['deep-eql'].exports;

/*!
 * Deep path info
 */

$m['chai/lib/chai/utils/index'].exports.getPathInfo = chailibchaiutilsindex__pathval.getPathInfo;

/*!
 * Check if a property exists
 */

$m['chai/lib/chai/utils/index'].exports.hasProperty = chailibchaiutilsindex__pathval.hasProperty;

/*!
 * Function name
 */

$m['chai/lib/chai/utils/index'].exports.getName = $m['get-func-name'].exports;

/*!
 * add Property
 */

$m['chai/lib/chai/utils/index'].exports.addProperty = require('chai/lib/chai/utils/addProperty');

/*!
 * add Method
 */

$m['chai/lib/chai/utils/index'].exports.addMethod = require('chai/lib/chai/utils/addMethod');

/*!
 * overwrite Property
 */

$m['chai/lib/chai/utils/index'].exports.overwriteProperty = require('chai/lib/chai/utils/overwriteProperty');

/*!
 * overwrite Method
 */

$m['chai/lib/chai/utils/index'].exports.overwriteMethod = require('chai/lib/chai/utils/overwriteMethod');

/*!
 * Add a chainable method
 */

$m['chai/lib/chai/utils/index'].exports.addChainableMethod = require('chai/lib/chai/utils/addChainableMethod');

/*!
 * Overwrite chainable method
 */

$m['chai/lib/chai/utils/index'].exports.overwriteChainableMethod = require('chai/lib/chai/utils/overwriteChainableMethod');

/*!
 * Compare by inspect method
 */

$m['chai/lib/chai/utils/index'].exports.compareByInspect = $m['chai/lib/chai/utils/compareByInspect'].exports;

/*!
 * Get own enumerable property symbols method
 */

$m['chai/lib/chai/utils/index'].exports.getOwnEnumerablePropertySymbols = $m['chai/lib/chai/utils/getOwnEnumerablePropertySymbols'].exports;

/*!
 * Get own enumerable properties method
 */

$m['chai/lib/chai/utils/index'].exports.getOwnEnumerableProperties = $m['chai/lib/chai/utils/getOwnEnumerableProperties'].exports;

/*!
 * Checks error against a given set of criteria
 */

$m['chai/lib/chai/utils/index'].exports.checkError = $m['check-error'].exports;

/*!
 * Proxify util
 */

$m['chai/lib/chai/utils/index'].exports.proxify = $m['chai/lib/chai/utils/proxify'].exports;

/*!
 * addLengthGuard util
 */

$m['chai/lib/chai/utils/index'].exports.addLengthGuard = $m['chai/lib/chai/utils/addLengthGuard'].exports;

/*!
 * isProxyEnabled helper
 */

$m['chai/lib/chai/utils/index'].exports.isProxyEnabled = $m['chai/lib/chai/utils/isProxyEnabled'].exports;

/*!
 * isNaN method
 */

$m['chai/lib/chai/utils/index'].exports.isNaN = $m['chai/lib/chai/utils/isNaN'].exports;
};
/*≠≠ node_modules/chai/lib/chai/utils/index.js ≠≠*/


/*== node_modules/chai/lib/chai.js ==*/
$m['chai/lib/chai'] = function () {
$m['chai/lib/chai'] = { exports: {} };
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chailibchai__used = [];

/*!
 * Chai version
 */

$m['chai/lib/chai'].exports.version = '4.1.1';

/*!
 * Assertion Error
 */

$m['chai/lib/chai'].exports.AssertionError = $m['assertion-error'].exports;

/*!
 * Utils for plugins (not exported)
 */

var chailibchai__util = require('chai/lib/chai/utils/index');

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai.
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

$m['chai/lib/chai'].exports.use = function (fn) {
  if (!~chailibchai__used.indexOf(fn)) {
    fn($m['chai/lib/chai'].exports, chailibchai__util);
    chailibchai__used.push(fn);
  }

  return $m['chai/lib/chai'].exports;
};

/*!
 * Utility Functions
 */

$m['chai/lib/chai'].exports.util = chailibchai__util;

/*!
 * Configuration
 */

var chailibchai__config = $m['chai/lib/chai/config'].exports;
$m['chai/lib/chai'].exports.config = chailibchai__config;

/*!
 * Primary `Assertion` prototype
 */

var chailibchai__assertion = $m['chai/lib/chai/assertion'].exports;
$m['chai/lib/chai'].exports.use(chailibchai__assertion);

/*!
 * Core Assertions
 */

var chailibchai__core = $m['chai/lib/chai/core/assertions'].exports;
$m['chai/lib/chai'].exports.use(chailibchai__core);

/*!
 * Expect interface
 */

var chailibchai__expect = $m['chai/lib/chai/interface/expect'].exports;
$m['chai/lib/chai'].exports.use(chailibchai__expect);

/*!
 * Should interface
 */

var chailibchai__should = $m['chai/lib/chai/interface/should'].exports;
$m['chai/lib/chai'].exports.use(chailibchai__should);

/*!
 * Assert interface
 */

var chailibchai__assert = $m['chai/lib/chai/interface/assert'].exports;
$m['chai/lib/chai'].exports.use(chailibchai__assert);
};
/*≠≠ node_modules/chai/lib/chai.js ≠≠*/


/*== node_modules/chai/index.js ==*/
$m['chai'] = { exports: {} };
$m['chai'].exports = require('chai/lib/chai');
/*≠≠ node_modules/chai/index.js ≠≠*/


/*== lib/Provider.js ==*/
$m['lib/Provider'] = { exports: {} };

var libProvider___require = $m['@yr/component'].exports,
    libProvider__Component = libProvider___require.Component,
    libProvider__define = libProvider___require.define,
    libProvider__PropTypes = libProvider___require.PropTypes;

var libProvider__assign = $m['object-assign'].exports;
var libProvider__runtime = $m['@yr/runtime'].exports;
var libProvider__Subscription = $m['lib/Subscription'].exports;

var libProvider__DEFAULT_CONTEXT_SHAPE = {
  data: libProvider__PropTypes.object,
  subscription: libProvider__PropTypes.object
};

$m['lib/Provider'].exports = {
  /**
   * Create component definition with configurable 'contextShape'.
   * Defines child context based on passed props
   * @param {Object} contextShape
   * @returns {Class}
   */
  create: function create() {
    var contextShape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var shape = libProvider__assign({}, libProvider__DEFAULT_CONTEXT_SHAPE, contextShape);

    libProvider__Component.contextTypes = shape;

    return libProvider__define({
      displayName: 'DataStoreProvider',
      propTypes: shape,

      getChildContext: function getChildContext() {
        var context = {};

        for (var key in shape) {
          context[key] = this.props[key];
        }

        if (context.subscription === undefined) {
          // Subscription has no purpose for server rendering
          context.subscription = libProvider__runtime.isBrowser ? new libProvider__Subscription(context.data) : {};
        }

        return context;
      },
      render: function render(props) {
        return Array.isArray(props.children) ? props.children[0] : props.children;
      }
    });
  }
};
/*≠≠ lib/Provider.js ≠≠*/


/*== lib/connect.js ==*/
$m['lib/connect'] = { exports: {} };

var libconnect___require = $m['@yr/component'].exports,
    libconnect__define = libconnect___require.define,
    libconnect__el = libconnect___require.el;

var libconnect__isEqual = $m['@yr/is-equal'].exports;
var libconnect__runtime = $m['@yr/runtime'].exports;
var libconnect__Subscription = $m['lib/Subscription'].exports;

$m['lib/connect'].exports = function connect(generateProps) {
  return function wrapWithConnect(ComponentToWrap) {
    return libconnect__define({
      displayName: 'DataStoreConnector',

      init: function init(props, context) {
        var data = context.data,
            subscription = context.subscription;

        this.data = data;
        this.state = {
          props: generateProps(data, props)
        };
        if (libconnect__runtime.isBrowser && subscription != null) {
          this.unsubscribe = subscription.subscribe(this.onNotify);
          this.subscription = new libconnect__Subscription(data);
        }
      },
      onNotify: function onNotify(data) {
        this.setState({
          props: generateProps(data, this.props)
        });
      },
      getChildContext: function getChildContext() {
        return {
          subscription: this.subscription
        };
      },

      // Handle render from parent (not called during mounting)
      componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
          props: generateProps(nextContext.data, nextProps)
        });
      },
      shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        var shouldUpdate = !libconnect__isEqual(this.state.props, nextState.props);

        // No render, so notify connected children manually
        if (!shouldUpdate) {
          this.subscription.notify();
        }

        return shouldUpdate;
      },
      componentWillUnmount: function componentWillUnmount() {
        if (this.unsubscribe !== undefined) {
          this.unsubscribe();
        }
        if (this.subscription !== undefined) {
          this.subscription.destroy();
        }
      },
      render: function render(props, state, context) {
        return libconnect__el(ComponentToWrap, state.props);
      }
    });
  };
};
/*≠≠ lib/connect.js ≠≠*/


/*== index.js ==*/
$m['@yr/data-store-component'] = { exports: {} };

$m['@yr/data-store-component'].exports = {
  connect: $m['lib/connect'].exports,
  Provider: $m['lib/Provider'].exports,
  Subscription: $m['lib/Subscription'].exports
};
/*≠≠ index.js ≠≠*/


/*== test/src/test-browser.js ==*/
$m['test/src/test-browser'] = { exports: {} };

const { connect, Provider, Subscription } = $m['@yr/data-store-component'].exports;
const { expect } = $m['chai'].exports;
const { Component, define, el, PropTypes, render } = $m['@yr/component'].exports;
const testsrctestbrowser__dataStore = $m['@yr/data-store'].exports;

let testsrctestbrowser__data, testsrctestbrowser__root;

describe('data-store-component', () => {
  before(() => {
    testsrctestbrowser__root = document.createElement('div');
    testsrctestbrowser__root.id = 'root';
    document.body.appendChild(testsrctestbrowser__root);
  });
  beforeEach(() => {
    testsrctestbrowser__data = testsrctestbrowser__dataStore.create('test', {
      foo: 'foo'
    });
  });

  afterEach(() => {
    if (testsrctestbrowser__data) testsrctestbrowser__data.destroy();
    testsrctestbrowser__root.innerHTML = '';
  });

  describe('Provider', () => {
    it('should render a passed child component', () => {
      render(el(Provider.create(), { data: testsrctestbrowser__data }, el('div')), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div></div>');
    });
    it('should render a passed child component with props', () => {
      const app = define({
        render({ text }) {
          return el('div', null, text);
        }
      });

      render(el(Provider.create(), { data: testsrctestbrowser__data }, el(app, { text: 'foo' })), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div>foo</div>');
    });
    it('should provide default context', () => {
      const app = define({
        render(props, state, { data }) {
          return el('div', null, data.get('foo'));
        }
      });

      render(el(Provider.create(), { data: testsrctestbrowser__data }, el(app)), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div>foo</div>');
    });
    it('should provide passed context', () => {
      const app = define({
        render(props, state, { locale }) {
          return el('div', null, locale.foo);
        }
      });

      render(el(Provider.create({ locale: PropTypes.object }), { data: testsrctestbrowser__data, locale: { foo: 'le foo' } }, el(app)), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div>le foo</div>');
      expect(Component.contextTypes).to.have.property('locale');
    });
  });

  describe('connect()', () => {
    it('should render a connected component on init', () => {
      const Container = connect((data, props) => {})(define({
        render(props, state, context) {
          return el('div');
        }
      }));

      render(el(Provider.create(), { data: testsrctestbrowser__data }, el(Container)), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div></div>');
    });
    it('should render a connected component on init with selected props', () => {
      const Container = connect((data, props) => {
        return {
          text: `${props.text}ly`
        };
      })(define({
        render(props, state, context) {
          return el('div', null, props.text);
        }
      }));

      render(el(Provider.create(), { data: testsrctestbrowser__data }, el(Container, { text: 'foo' })), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div>fooly</div>');
    });
    it('should render a connected component on init with selected data props', () => {
      const Container = connect((data, props) => {
        return {
          text: data.get('foo')
        };
      })(define({
        render(props, state, context) {
          return el('div', null, props.text);
        }
      }));

      render(el(Provider.create(), { data: testsrctestbrowser__data }, el(Container)), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div>foo</div>');
    });
    it('should rerender a connected component on updated data', done => {
      const Container = connect((data, props) => {
        return {
          text: data.get('foo'),
          onSubmit() {
            data.trigger('foo');
          }
        };
      })(define({
        render(props, state, context) {
          return el('div', null, props.text);
        }
      }));
      const subscription = new Subscription(testsrctestbrowser__data);

      render(el(Provider.create(), { data: testsrctestbrowser__data, subscription }, el(Container)), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div>foo</div>');
      testsrctestbrowser__data.set('foo', 'bar');
      subscription.notify();
      setTimeout(() => {
        expect(testsrctestbrowser__root.innerHTML).to.equal('<div>bar</div>');
        done();
      }, 10);
    });
    it('should rerender a tree of connected components on updated data', done => {
      const ChildContainer = connect((data, props) => {
        return {
          text: data.get('bar')
        };
      })(define({
        render(props, state, context) {
          return el('span', null, props.text);
        }
      }));
      const ParentContainer = connect((data, props) => {
        return {
          text: data.get('foo')
        };
      })(define({
        render(props, state, context) {
          return el('div', null, el('span', null, props.text), el(ChildContainer));
        }
      }));
      const subscription = new Subscription(testsrctestbrowser__data);
      const oldComponentWillReceiveProps = ChildContainer.prototype.componentWillReceiveProps;
      const oldOnNotify = ChildContainer.prototype.onNotify;
      const called = [];

      ChildContainer.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        called.push('componentWillReceiveProps');
        oldComponentWillReceiveProps.call(this, nextProps, nextContext);
      };
      ChildContainer.prototype.onNotify = function (data) {
        called.push('onNotify');
        oldOnNotify.call(this, data);
      };

      testsrctestbrowser__data.set('bar', 'bar');
      render(el(Provider.create(), { data: testsrctestbrowser__data, subscription }, el(ParentContainer)), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div><span>foo</span><span>bar</span></div>');
      testsrctestbrowser__data.setAll({ foo: 'bar', bar: 'foo' });
      subscription.notify();
      setTimeout(() => {
        expect(testsrctestbrowser__root.innerHTML).to.equal('<div><span>bar</span><span>foo</span></div>');
        expect(called).to.eql(['componentWillReceiveProps']);
        done();
      }, 10);
    });
    it('should rerender a nested subtree of connected components on updated data', done => {
      const subscription = new Subscription(testsrctestbrowser__data);
      const ChildContainer = connect((data, props) => {
        return {
          text: data.get('bar')
        };
      })(define({
        render(props, state, context) {
          expect(testsrctestbrowser__data).to.equal(context.data);
          expect(subscription).to.not.equal(context.subscription);
          return el('span', null, props.text);
        }
      }));
      const ParentContainer = connect((data, props) => {
        return {
          text: data.get('foo')
        };
      })(define({
        render(props, state, context) {
          return el('div', null, el('span', null, props.text), el(ChildContainer));
        }
      }));
      const oldComponentWillReceiveProps = ChildContainer.prototype.componentWillReceiveProps;
      const oldOnNotify = ChildContainer.prototype.onNotify;
      const called = [];

      ChildContainer.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        called.push('componentWillReceiveProps');
        oldComponentWillReceiveProps.call(this, nextProps, nextContext);
      };
      ChildContainer.prototype.onNotify = function (data) {
        called.push('onNotify');
        oldOnNotify.call(this, data);
      };

      testsrctestbrowser__data.set('bar', 'bar');
      render(el(Provider.create(), { data: testsrctestbrowser__data, subscription }, el(ParentContainer)), testsrctestbrowser__root);
      expect(testsrctestbrowser__root.innerHTML).to.equal('<div><span>foo</span><span>bar</span></div>');
      testsrctestbrowser__data.set('bar', 'foo');
      subscription.notify();
      setTimeout(() => {
        expect(testsrctestbrowser__root.innerHTML).to.equal('<div><span>foo</span><span>foo</span></div>');
        expect(called).to.eql(['onNotify']);
        done();
      }, 10);
    });
  });
});
/*≠≠ test/src/test-browser.js ≠≠*/
})()