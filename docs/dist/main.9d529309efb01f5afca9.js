/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((module) => {

/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_627__) => {

// ESM COMPAT FLAG
__nested_webpack_require_627__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_627__.d(__webpack_exports__, {
  "default": () => /* binding */ module_Splide
});

// NAMESPACE OBJECT: ./src/js/constants/states.js
var states_namespaceObject = {};
__nested_webpack_require_627__.r(states_namespaceObject);
__nested_webpack_require_627__.d(states_namespaceObject, {
  "CREATED": () => CREATED,
  "DESTROYED": () => DESTROYED,
  "IDLE": () => IDLE,
  "MOUNTED": () => MOUNTED,
  "MOVING": () => MOVING
});

;// CONCATENATED MODULE: ./src/js/core/event.js
/**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function for providing an Event object simply managing events.
 */
/* harmony default export */ const core_event = (function () {
  /**
   * Store all event data.
   *
   * @type {Array}
   */
  var data = [];
  var Event = {
    /**
     * Subscribe the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     */
    on: function on(events, handler, elm, options) {
      if (elm === void 0) {
        elm = null;
      }

      if (options === void 0) {
        options = {};
      }

      events.split(' ').forEach(function (event) {
        if (elm) {
          elm.addEventListener(event, handler, options);
        }

        data.push({
          event: event,
          handler: handler,
          elm: elm,
          options: options
        });
      });
    },

    /**
     * Unsubscribe the given event(s).
     *
     * @param {string}  events - A event name or names split by space.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     */
    off: function off(events, elm) {
      if (elm === void 0) {
        elm = null;
      }

      events.split(' ').forEach(function (event) {
        data = data.filter(function (item) {
          if (item && item.event === event && item.elm === elm) {
            unsubscribe(item);
            return false;
          }

          return true;
        });
      });
    },

    /**
     * Emit an event.
     * This method is only for custom events.
     *
     * @param {string}  event - An event name.
     * @param {*}       args  - Any number of arguments passed to handlers.
     */
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      data.forEach(function (item) {
        if (!item.elm && item.event.split('.')[0] === event) {
          item.handler.apply(item, args);
        }
      });
    },

    /**
     * Clear event data.
     */
    destroy: function destroy() {
      data.forEach(unsubscribe);
      data = [];
    }
  };
  /**
   * Remove the registered event listener.
   *
   * @param {Object} item - An object containing event data.
   */

  function unsubscribe(item) {
    if (item.elm) {
      item.elm.removeEventListener(item.event, item.handler, item.options);
    }
  }

  return Event;
});
;// CONCATENATED MODULE: ./src/js/core/state.js
/**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */
/* harmony default export */ const state = (function (initialState) {
  /**
   * Store the current state.
   *
   * @type {string|number}
   */
  var curr = initialState;
  return {
    /**
     * Change state.
     *
     * @param {string|number} state - A new state.
     */
    set: function set(state) {
      curr = state;
    },

    /**
     * Verify if the current state is given one or not.
     *
     * @param {string|number} state - A state name to be verified.
     *
     * @return {boolean} - True if the current state is the given one.
     */
    is: function is(state) {
      return state === curr;
    }
  };
});
;// CONCATENATED MODULE: ./src/js/utils/object.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Some utility functions related with Object, supporting IE.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */
var keys = Object.keys;
/**
 * Iterate an object like Array.forEach.
 * IE doesn't support forEach of HTMLCollection.
 *
 * @param {Object}    obj       - An object.
 * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
 */

function each(obj, callback) {
  keys(obj).some(function (key, index) {
    return callback(obj[key], key, index);
  });
}
/**
 * Return values of the given object as an array.
 * IE doesn't support Object.values.
 *
 * @param {Object} obj - An object.
 *
 * @return {Array} - An array containing all values of the given object.
 */

function values(obj) {
  return keys(obj).map(function (key) {
    return obj[key];
  });
}
/**
 * Check if the given subject is object or not.
 *
 * @param {*} subject - A subject to be verified.
 *
 * @return {boolean} - True if object, false otherwise.
 */

function isObject(subject) {
  return typeof subject === 'object';
}
/**
 * Merge two objects deeply.
 *
 * @param {Object} to   - An object where "from" is merged.
 * @param {Object} from - An object merged to "to".
 *
 * @return {Object} - A merged object.
 */

function merge(_ref, from) {
  var to = _extends({}, _ref);

  each(from, function (value, key) {
    if (isObject(value)) {
      if (!isObject(to[key])) {
        to[key] = {};
      }

      to[key] = merge(to[key], value);
    } else {
      to[key] = value;
    }
  });
  return to;
}
/**
 * Assign all properties "from" to "to" object.
 *
 * @param {Object} to   - An object where properties are assigned.
 * @param {Object} from - An object whose properties are assigned to "to".
 *
 * @return {Object} - An assigned object.
 */

function object_assign(to, from) {
  keys(from).forEach(function (key) {
    if (!to[key]) {
      Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
    }
  });
  return to;
}
;// CONCATENATED MODULE: ./src/js/utils/utils.js
/**
 * A package of some miscellaneous utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Convert the given value to array.
 *
 * @param {*} value - Any value.
 *
 * @return {*[]} - Array containing the given value.
 */

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * Check if the given value is between min and max.
 * Min will be returned when the value is less than min or max will do when greater than max.
 *
 * @param {number} value - A number to be checked.
 * @param {number} m1    - Minimum or maximum number.
 * @param {number} m2    - Maximum or minimum number.
 *
 * @return {number} - A value itself, min or max.
 */

function between(value, m1, m2) {
  return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
}
/**
 * The sprintf method with minimum functionality.
 *
 * @param {string}       format       - The string format.
 * @param {string|Array} replacements - Replacements accepting multiple arguments.
 *
 * @returns {string} - Converted string.
 */

function sprintf(format, replacements) {
  var i = 0;
  return format.replace(/%s/g, function () {
    return toArray(replacements)[i++];
  });
}
/**
 * Append px unit to the given subject if necessary.
 *
 * @param {number|string} value - A value that may not include an unit.
 *
 * @return {string} - If the value is string, return itself.
 *                    If number, do value + "px". An empty string, otherwise.
 */

function unit(value) {
  var type = typeof value;

  if (type === 'number' && value > 0) {
    return parseFloat(value) + 'px';
  }

  return type === 'string' ? value : '';
}
/**
 * Pad start with 0.
 *
 * @param {number} number - A number to be filled with 0.
 *
 * @return {string|number} - Padded number.
 */

function pad(number) {
  return number < 10 ? '0' + number : number;
}
/**
 * Convert the given value to pixel.
 *
 * @param {Element}       root  - Root element where a dummy div is appended.
 * @param {string|number} value - CSS value to be converted, such as 10rem.
 *
 * @return {number} - Pixel.
 */

function toPixel(root, value) {
  if (typeof value === 'string') {
    var div = create('div', {});
    applyStyle(div, {
      position: 'absolute',
      width: value
    });
    append(root, div);
    value = div.clientWidth;
    dom_remove(div);
  }

  return +value || 0;
}
;// CONCATENATED MODULE: ./src/js/utils/dom.js
/**
 * Some utility functions related with DOM.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Find the first element matching the given selector.
 * Be aware that all selectors after a space are ignored.
 *
 * @param {Element|Node}  elm       - An ancestor element.
 * @param {string}        selector  - DOMString.
 *
 * @return {Element|null} - A found element or null.
 */

function find(elm, selector) {
  return elm ? elm.querySelector(selector.split(' ')[0]) : null;
}
/**
 * Find a first child having the given tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element|undefined} - A found element on success or undefined on failure.
 */

function child(parent, tagOrClassName) {
  return children(parent, tagOrClassName)[0];
}
/**
 * Return chile elements that matches the provided tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element[]} - Found elements.
 */

function children(parent, tagOrClassName) {
  if (parent) {
    return values(parent.children).filter(function (child) {
      return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
    });
  }

  return [];
}
/**
 * Create an element with some optional attributes.
 *
 * @param {string} tag   - A tag name.
 * @param {Object} attrs - An object any attribute pairs of name and value.
 *
 * @return {Element} - A created element.
 */

function create(tag, attrs) {
  var elm = document.createElement(tag);
  each(attrs, function (value, key) {
    return setAttribute(elm, key, value);
  });
  return elm;
}
/**
 * Convert HTML string to DOM node.
 *
 * @param {string} html - HTML string.
 *
 * @return {Node} - A created node.
 */

function domify(html) {
  var div = create('div', {});
  div.innerHTML = html;
  return div.firstChild;
}
/**
 * Remove a given element from a DOM tree.
 *
 * @param {Element|Element[]} elms - Element(s) to be removed.
 */

function dom_remove(elms) {
  toArray(elms).forEach(function (elm) {
    if (elm) {
      var parent = elm.parentElement;
      parent && parent.removeChild(elm);
    }
  });
}
/**
 * Append a child to a given element.
 *
 * @param {Element} parent - A parent element.
 * @param {Element} child  - An element to be appended.
 */

function append(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
/**
 * Insert an element before the reference element.
 *
 * @param {Element|Node} ref - A reference element.
 * @param {Element}      elm - An element to be inserted.
 */

function before(elm, ref) {
  if (elm && ref) {
    var parent = ref.parentElement;
    parent && parent.insertBefore(elm, ref);
  }
}
/**
 * Apply styles to the given element.
 *
 * @param {Element} elm     - An element where styles are applied.
 * @param {Object}  styles  - Object containing styles.
 */

function applyStyle(elm, styles) {
  if (elm) {
    each(styles, function (value, prop) {
      if (value !== null) {
        elm.style[prop] = value;
      }
    });
  }
}
/**
 * Add or remove classes to/from the element.
 * This function is for internal usage.
 *
 * @param {Element}         elm     - An element where classes are added.
 * @param {string|string[]} classes - Class names being added.
 * @param {boolean}         remove  - Whether to remove or add classes.
 */

function addOrRemoveClasses(elm, classes, remove) {
  if (elm) {
    toArray(classes).forEach(function (name) {
      if (name) {
        elm.classList[remove ? 'remove' : 'add'](name);
      }
    });
  }
}
/**
 * Add classes to the element.
 *
 * @param {Element}          elm     - An element where classes are added.
 * @param {string|string[]}  classes - Class names being added.
 */


function addClass(elm, classes) {
  addOrRemoveClasses(elm, classes, false);
}
/**
 * Remove a class from the element.
 *
 * @param {Element}         elm     - An element where classes are removed.
 * @param {string|string[]} classes - A class name being removed.
 */

function removeClass(elm, classes) {
  addOrRemoveClasses(elm, classes, true);
}
/**
 * Verify if the provided element has the class or not.
 *
 * @param {Element} elm       - An element.
 * @param {string}  className - A class name.
 *
 * @return {boolean} - True if the element has the class or false if not.
 */

function hasClass(elm, className) {
  return !!elm && elm.classList.contains(className);
}
/**
 * Set attribute to the given element.
 *
 * @param {Element}                 elm   - An element where an attribute is assigned.
 * @param {string}                  name  - Attribute name.
 * @param {string|number|boolean}   value - Attribute value.
 */

function setAttribute(elm, name, value) {
  if (elm) {
    elm.setAttribute(name, value);
  }
}
/**
 * Get attribute from the given element.
 *
 * @param {Element} elm  - An element where an attribute is assigned.
 * @param {string}  name - Attribute name.
 *
 * @return {string} - The value of the given attribute if available. An empty string if not.
 */

function getAttribute(elm, name) {
  return elm ? elm.getAttribute(name) : '';
}
/**
 * Remove attribute from the given element.
 *
 * @param {Element|Element[]} elms  - An element where an attribute is removed.
 * @param {string|string[]}      names - Attribute name.
 */

function removeAttribute(elms, names) {
  toArray(names).forEach(function (name) {
    toArray(elms).forEach(function (elm) {
      return elm && elm.removeAttribute(name);
    });
  });
}
/**
 * Return the Rect object of the provided object.
 *
 * @param {Element} elm - An element.
 *
 * @return {ClientRect|DOMRect} - A rect object.
 */

function getRect(elm) {
  return elm.getBoundingClientRect();
}
/**
 * Trigger the given callback after all images contained by the element are loaded.
 *
 * @param {Element}  elm      - Element that may contain images.
 * @param {Function} callback - Callback function fired right after all images are loaded.
 */

function loaded(elm, callback) {
  var images = elm.querySelectorAll('img');
  var length = images.length;

  if (length) {
    var count = 0;
    each(images, function (img) {
      img.onload = img.onerror = function () {
        if (++count === length) {
          callback();
        }
      };
    });
  } else {
    // Trigger the callback immediately if there is no image.
    callback();
  }
}
;// CONCATENATED MODULE: ./src/js/constants/types.js
/**
 * Export slider types.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Normal slider.
 *
 * @type {string}
 */
var SLIDE = 'slide';
/**
 * Loop after the last slide and before the first one.
 *
 * @type {string}
 */

var LOOP = 'loop';
/**
 * The track doesn't move.
 *
 * @type {string}
 */

var FADE = 'fade';
;// CONCATENATED MODULE: ./src/js/transitions/slide/index.js
/**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const slide = (function (Splide, Components) {
  /**
   * Hold the list element.
   *
   * @type {Element}
   */
  var list;
  /**
   * Hold the onEnd callback function.
   *
   * @type {function}
   */

  var endCallback;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      list = Components.Elements.list;
      Splide.on('transitionend', function (e) {
        if (e.target === list && endCallback) {
          endCallback();
        }
      }, list);
    },

    /**
     * Start transition.
     *
     * @param {number}   destIndex - Destination slide index that might be clone's.
     * @param {number}   newIndex  - New index.
     * @param {number}   prevIndex - Previous index.
     * @param {Object}   coord     - Destination coordinates.
     * @param {function} done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var options = Splide.options;
      var edgeIndex = Components.Controller.edgeIndex;
      var speed = options.speed;
      endCallback = done;

      if (Splide.is(SLIDE)) {
        if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
          speed = options.rewindSpeed || speed;
        }
      }

      applyStyle(list, {
        transition: "transform " + speed + "ms " + options.easing,
        transform: "translate(" + coord.x + "px," + coord.y + "px)"
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/transitions/fade/index.js
/**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const fade = (function (Splide, Components) {
  var Fade = {
    /**
     * Called when the component is mounted.
     * Apply transition style to the first slide.
     */
    mount: function mount() {
      apply(Splide.index);
    },

    /**
     * Start transition.
     *
     * @param {number}    destIndex - Destination slide index that might be clone's.
     * @param {number}    newIndex  - New index.
     * @param {number}    prevIndex - Previous index.
     * @param {Object}    coord     - Destination coordinates.
     * @param {function}  done      - Callback function must be invoked when transition is completed.
     */
    start: function start(destIndex, newIndex, prevIndex, coord, done) {
      var track = Components.Elements.track;
      applyStyle(track, {
        height: unit(track.clientHeight)
      });
      apply(newIndex);
      setTimeout(function () {
        done();
        applyStyle(track, {
          height: ''
        });
      });
    }
  };
  /**
   * Apply transition style to the slide specified by the given index.
   *
   * @param {number} index - A slide index.
   */

  function apply(index) {
    var options = Splide.options;
    applyStyle(Components.Elements.slides[index], {
      transition: "opacity " + options.speed + "ms " + options.easing
    });
  }

  return Fade;
});
;// CONCATENATED MODULE: ./src/js/transitions/index.js
/**
 * Export transition components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


;// CONCATENATED MODULE: ./src/js/core/composer.js
/**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * Compose components.
 *
 * @param {Splide}   Splide     - Splide instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */

function compose(Splide, Components, Transition) {
  var components = {};
  each(Components, function (Component, name) {
    components[name] = Component(Splide, components, name.toLowerCase());
  });

  if (!Transition) {
    Transition = Splide.is(FADE) ? fade : slide;
  }

  components.Transition = Transition(Splide, components);
  return components;
}
;// CONCATENATED MODULE: ./src/js/utils/error.js
/**
 * Utility functions for outputting logs.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Prefix of an error massage.
 *
 * @type {string}
 */
var MESSAGE_PREFIX = '[SPLIDE]';
/**
 * Display an error message on the browser console.
 *
 * @param {string} message - An error message.
 */

function error(message) {
  console.error(MESSAGE_PREFIX + " " + message);
}
/**
 * Check existence of the given object and throw an error if it doesn't.
 *
 * @throws {Error}
 *
 * @param {*}      subject - A subject to be confirmed.
 * @param {string} message - An error message.
 */

function exist(subject, message) {
  if (!subject) {
    throw new Error(message);
  }
}
;// CONCATENATED MODULE: ./src/js/constants/classes.js
/**
 * Export class names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * A root class name.
 *
 * @type {string}
 */
var ROOT = 'splide';
/**
 * The definition table of all classes for elements.
 * They might be modified by options.
 *
 * @type {Object}
 */

var ELEMENT_CLASSES = {
  root: ROOT,
  slider: ROOT + "__slider",
  track: ROOT + "__track",
  list: ROOT + "__list",
  slide: ROOT + "__slide",
  container: ROOT + "__slide__container",
  arrows: ROOT + "__arrows",
  arrow: ROOT + "__arrow",
  prev: ROOT + "__arrow--prev",
  next: ROOT + "__arrow--next",
  pagination: ROOT + "__pagination",
  page: ROOT + "__pagination__page",
  clone: ROOT + "__slide--clone",
  progress: ROOT + "__progress",
  bar: ROOT + "__progress__bar",
  autoplay: ROOT + "__autoplay",
  play: ROOT + "__play",
  pause: ROOT + "__pause",
  spinner: ROOT + "__spinner",
  sr: ROOT + "__sr"
};
/**
 * Definitions of status classes.
 *
 * @type {Object}
 */

var STATUS_CLASSES = {
  active: 'is-active',
  visible: 'is-visible',
  loading: 'is-loading'
};
;// CONCATENATED MODULE: ./src/js/constants/i18n.js
/**
 * Export i18n texts as object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Texts for i18n.
 *
 * @type {Object}
 */
var I18N = {
  prev: 'Previous slide',
  next: 'Next slide',
  first: 'Go to first slide',
  last: 'Go to last slide',
  slideX: 'Go to slide %s',
  pageX: 'Go to page %s',
  play: 'Start autoplay',
  pause: 'Pause autoplay'
};
;// CONCATENATED MODULE: ./src/js/constants/defaults.js
/**
 * Export default options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


var DEFAULTS = {
  /**
   * Determine a slider type.
   * - 'slide': Regular slider.
   * - 'loop' : Carousel slider.
   * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
   *
   * @type {string}
   */
  type: 'slide',

  /**
   * Whether to rewind a slider before the first slide or after the last one.
   * In "loop" mode, this option is ignored.
   *
   * @type {boolean}
   */
  rewind: false,

  /**
   * Transition speed in milliseconds.
   *
   * @type {number}
   */
  speed: 400,

  /**
   * Transition speed on rewind in milliseconds.
   *
   * @type {number}
   */
  rewindSpeed: 0,

  /**
   * Whether to prevent any actions while a slider is transitioning.
   * If false, navigation, drag and swipe work while the slider is running.
   * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Define slider max width.
   *
   * @type {number}
   */
  width: 0,

  /**
   * Define slider height.
   *
   * @type {number}
   */
  height: 0,

  /**
   * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
   * perPage number will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedWidth: 0,

  /**
   * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
   * heightRatio option will be ignored when this option is falsy.
   *
   * @type {number|string}
   */
  fixedHeight: 0,

  /**
   * Determine height of slides by ratio to a slider width.
   * This will be ignored when the fixedHeight is provided.
   *
   * @type {number}
   */
  heightRatio: 0,

  /**
   * If true, slide width will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoWidth: false,

  /**
   * If true, slide height will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */
  autoHeight: false,

  /**
   * Determine how many slides should be displayed per page.
   *
   * @type {number}
   */
  perPage: 1,

  /**
   * Determine how many slides should be moved when a slider goes to next or perv.
   *
   * @type {number}
   */
  perMove: 0,

  /**
   * Determine manually how many clones should be generated on the left and right side.
   * The total number of clones will be twice of this number.
   *
   * @type {number}
   */
  clones: 0,

  /**
   * Start index.
   *
   * @type {number}
   */
  start: 0,

  /**
   * Determine which slide should be focused if there are multiple slides in a page.
   * A string "center" is acceptable for centering slides.
   *
   * @type {boolean|number|string}
   */
  focus: false,

  /**
   * Gap between slides. CSS format is allowed such as 1em.
   *
   * @type {number|string}
   */
  gap: 0,

  /**
   * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
   * Give a single value to set a same size for both sides or
   * do an object for different sizes.
   * Also, CSS format is allowed such as 1em.
   *
   * @example
   * - 10: Number
   * - '1em': CSS format.
   * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
   * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
   *
   * @type {number|string|Object}
   */
  padding: 0,

  /**
   * Whether to append arrows.
   *
   * @type {boolean}
   */
  arrows: true,

  /**
   * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
   *
   * @type {string}
   */
  arrowPath: '',

  /**
   * Whether to append pagination(indicator dots) or not.
   *
   * @type {boolean}
   */
  pagination: true,

  /**
   * Activate autoplay.
   *
   * @type {boolean}
   */
  autoplay: false,

  /**
   * Autoplay interval in milliseconds.
   *
   * @type {number}
   */
  interval: 5000,

  /**
   * Whether to stop autoplay when a slider is hovered.
   *
   * @type {boolean}
   */
  pauseOnHover: true,

  /**
   * Whether to stop autoplay when a slider elements are focused.
   * True is recommended for accessibility.
   *
   * @type {boolean}
   */
  pauseOnFocus: true,

  /**
   * Whether to reset progress of the autoplay timer when resumed.
   *
   * @type {boolean}
   */
  resetProgress: true,

  /**
   * Loading images lazily.
   * Image src must be provided by a data-splide-lazy attribute.
   *
   * - false: Do nothing.
   * - 'nearby': Only images around an active slide will be loaded.
   * - 'sequential': All images will be sequentially loaded.
   *
   * @type {boolean|string}
   */
  lazyLoad: false,

  /**
   * This option works only when a lazyLoad option is "nearby".
   * Determine how many pages(not slides) around an active slide should be loaded beforehand.
   *
   * @type {number}
   */
  preloadPages: 1,

  /**
   * Easing for CSS transition. For example, linear, ease or cubic-bezier().
   *
   * @type {string}
   */
  easing: 'cubic-bezier(.42,.65,.27,.99)',

  /**
   * Whether to enable keyboard shortcuts
   * - true or 'global': Listen to keydown event of the document.
   * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
   * - false: Disable keyboard shortcuts.
   *
   * @type {boolean|string}
   */
  keyboard: 'global',

  /**
   * Whether to allow mouse drag and touch swipe.
   *
   * @type {boolean}
   */
  drag: true,

  /**
   * The angle threshold for drag.
   * The slider starts moving only when the drag angle is less than this threshold.
   *
   * @type {number}
   */
  dragAngleThreshold: 30,

  /**
   * Distance threshold for determining if the action is "flick" or "swipe".
   * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
   *
   * @type {number}
   */
  swipeDistanceThreshold: 150,

  /**
   * Velocity threshold for determining if the action is "flick" or "swipe".
   * Around 0.5 is recommended.
   *
   * @type {number}
   */
  flickVelocityThreshold: .6,

  /**
   * Determine power of flick. The larger number this is, the farther a slider runs by flick.
   * Around 500 is recommended.
   *
   * @type {number}
   */
  flickPower: 600,

  /**
   * Limit a number of pages to move by flick.
   *
   * @type {number}
   */
  flickMaxPages: 1,

  /**
   * Slider direction.
   * - 'ltr': Left to right.
   * - 'rtl': Right to left.
   * - 'ttb': Top to bottom.
   *
   * @type {string}
   */
  direction: 'ltr',

  /**
   * Set img src to background-image of its parent element.
   * Images with various sizes can be displayed as same dimension without cropping work.
   * fixedHeight or heightRatio is required.
   *
   * @type {boolean}
   */
  cover: false,

  /**
   * Whether to enable accessibility(aria and screen reader texts) or not.
   *
   * @type {boolean}
   */
  accessibility: true,

  /**
   * Whether to add tabindex="0" to visible slides or not.
   *
   * @type {boolean}
   */
  slideFocus: true,

  /**
   * Determine if a slider is navigation for another.
   * Use "sync" API to synchronize two sliders.
   *
   * @type {boolean}
   */
  isNavigation: false,

  /**
   * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
   *
   * @type {boolean}
   */
  trimSpace: true,

  /**
   * The "is-active" class is added after transition as default.
   * If true, it will be added before move.
   *
   * @type {boolean}
   */
  updateOnMove: false,

  /**
   * Throttle duration in milliseconds for the resize event.
   *
   * @type {number}
   */
  throttle: 100,

  /**
   * Whether to destroy a slider or not.
   *
   * @type {boolean}
   */
  destroy: false,

  /**
   * Options for specific breakpoints.
   *
   * @example
   * {
   *   1000: {
   *     perPage: 3,
   *     gap: 20
   *   },
   *   600: {
   *     perPage: 1,
   *     gap: 5,
   *   }
   * }
   *
   * @type {boolean|Object}
   */
  breakpoints: false,

  /**
   * Collection of class names.
   *
   * @see ./classes.js
   *
   * @type {Object}
   */
  classes: ELEMENT_CLASSES,

  /**
   * Collection of i18n texts.
   *
   * @see ./i18n.js
   *
   * @type {Object}
   */
  i18n: I18N
};
;// CONCATENATED MODULE: ./src/js/constants/states.js
/**
 * Export state constants.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Splide has been just created.
 *
 * @type {number}
 */
var CREATED = 1;
/**
 * All components have been mounted and initialized.
 *
 * @type {number}
 */

var MOUNTED = 2;
/**
 * Splide is ready for transition.
 *
 * @type {number}
 */

var IDLE = 3;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var MOVING = 4;
/**
 * Splide is moving.
 *
 * @type {number}
 */

var DESTROYED = 5;
;// CONCATENATED MODULE: ./src/js/splide.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The main class for applying Splide to an element.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */








/**
 * The main class for applying Splide to an element,
 * providing some APIs to control the behavior.
 */

var Splide = /*#__PURE__*/function () {
  /**
   * Splide constructor.
   *
   * @throws {Error} When the given root element or selector is invalid.
   *
   * @param {Element|string}  root       - A selector for a root element or an element itself.
   * @param {Object}          options    - Optional. Options to change default behaviour.
   * @param {Object}          Components - Optional. Components.
   */
  function Splide(root, options, Components) {
    if (options === void 0) {
      options = {};
    }

    if (Components === void 0) {
      Components = {};
    }

    this.root = root instanceof Element ? root : document.querySelector(root);
    exist(this.root, 'An invalid element/selector was given.');
    this.Components = null;
    this.Event = core_event();
    this.State = state(CREATED);
    this.STATES = states_namespaceObject;
    this._o = merge(DEFAULTS, options);
    this._i = 0;
    this._c = Components;
    this._e = {}; // Extensions

    this._t = null; // Transition
  }
  /**
   * Compose and mount components.
   *
   * @param {Object}   Extensions - Optional. Additional components.
   * @param {function} Transition - Optional. Set a custom transition component.
   *
   * @return {Splide|undefined} - This instance or undefined if an exception occurred.
   */


  var _proto = Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    if (Extensions === void 0) {
      Extensions = this._e;
    }

    if (Transition === void 0) {
      Transition = this._t;
    }

    // Reset the state.
    this.State.set(CREATED);
    this._e = Extensions;
    this._t = Transition;
    this.Components = compose(this, merge(this._c, Extensions), Transition);

    try {
      each(this.Components, function (component, key) {
        var required = component.required;

        if (required === undefined || required) {
          component.mount && component.mount();
        } else {
          delete _this.Components[key];
        }
      });
    } catch (e) {
      error(e.message);
      return;
    }

    var State = this.State;
    State.set(MOUNTED);
    each(this.Components, function (component) {
      component.mounted && component.mounted();
    });
    this.emit('mounted');
    State.set(IDLE);
    this.emit('ready');
    applyStyle(this.root, {
      visibility: 'visible'
    });
    this.on('move drag', function () {
      return State.set(MOVING);
    }).on('moved dragged', function () {
      return State.set(IDLE);
    });
    return this;
  }
  /**
   * Set sync target.
   *
   * @param {Splide} splide - A Splide instance.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.sync = function sync(splide) {
    this.sibling = splide;
    return this;
  }
  /**
   * Register callback fired on the given event(s).
   *
   * @param {string}   events  - An event name. Use space to separate multiple events.
   *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
   * @param {function} handler - A callback function.
   * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
   * @param {Object}   options - Optional. Options for addEventListener.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.on = function on(events, handler, elm, options) {
    if (elm === void 0) {
      elm = null;
    }

    if (options === void 0) {
      options = {};
    }

    this.Event.on(events, handler, elm, options);
    return this;
  }
  /**
   * Unsubscribe the given event.
   *
   * @param {string}  events - A event name.
   * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
   *
   * @return {Splide} - This instance.
   */
  ;

  _proto.off = function off(events, elm) {
    if (elm === void 0) {
      elm = null;
    }

    this.Event.off(events, elm);
    return this;
  }
  /**
   * Emit an event.
   *
   * @param {string} event - An event name.
   * @param {*}      args  - Any number of arguments passed to handlers.
   */
  ;

  _proto.emit = function emit(event) {
    var _this$Event;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

    return this;
  }
  /**
   * Go to the slide specified by the given control.
   *
   * @param {string|number} control - A control pattern.
   * @param {boolean}       wait    - Optional. Whether to wait for transition.
   */
  ;

  _proto.go = function go(control, wait) {
    if (wait === void 0) {
      wait = this.options.waitForTransition;
    }

    if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) {
      this.Components.Controller.go(control, false);
    }

    return this;
  }
  /**
   * Verify whether the slider type is the given one or not.
   *
   * @param {string} type - A slider type.
   *
   * @return {boolean} - True if the slider type is the provided type or false if not.
   */
  ;

  _proto.is = function is(type) {
    return type === this._o.type;
  }
  /**
   * Insert a slide.
   *
   * @param {Element|string} slide - A slide element to be added.
   * @param {number}         index - A slide will be added at the position.
   */
  ;

  _proto.add = function add(slide, index) {
    if (index === void 0) {
      index = -1;
    }

    this.Components.Elements.add(slide, index, this.refresh.bind(this));
    return this;
  }
  /**
   * Remove the slide designated by the index.
   *
   * @param {number} index - A slide index.
   */
  ;

  _proto.remove = function remove(index) {
    this.Components.Elements.remove(index);
    this.refresh();
    return this;
  }
  /**
   * Destroy all Slide objects and clones and recreate them again.
   */
  ;

  _proto.refresh = function refresh() {
    this.emit('refresh:before').emit('refresh').emit('resize');
    return this;
  }
  /**
   * Destroy the Splide.
   * "Completely" boolean is mainly for breakpoints.
   *
   * @param {boolean} completely - Destroy completely.
   */
  ;

  _proto.destroy = function destroy(completely) {
    var _this2 = this;

    if (completely === void 0) {
      completely = true;
    }

    // Postpone destroy because it should be done after mount.
    if (this.State.is(CREATED)) {
      this.on('ready', function () {
        return _this2.destroy(completely);
      });
      return;
    }

    values(this.Components).reverse().forEach(function (component) {
      component.destroy && component.destroy(completely);
    });
    this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

    this.Event.destroy();
    this.State.set(DESTROYED);
    return this;
  }
  /**
   * Return the current slide index.
   *
   * @return {number} - The current slide index.
   // */
  ;

  _createClass(Splide, [{
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Set the current slide index.
     *
     * @param {number|string} index - A new index.
     */
    ,
    set: function set(index) {
      this._i = parseInt(index);
    }
    /**
     * Return length of slides.
     * This is an alias of Elements.length.
     *
     * @return {number} - A number of slides.
     */

  }, {
    key: "length",
    get: function get() {
      return this.Components.Elements.length;
    }
    /**
     * Return options.
     *
     * @return {Object} - Options object.
     */

  }, {
    key: "options",
    get: function get() {
      return this._o;
    }
    /**
     * Set options with merging the given object to the current one.
     *
     * @param {Object} options - New options.
     */
    ,
    set: function set(options) {
      var created = this.State.is(CREATED);

      if (!created) {
        this.emit('update');
      }

      this._o = merge(this._o, options);

      if (!created) {
        this.emit('updated', this._o);
      }
    }
    /**
     * Return the class list.
     * This is an alias of Splide.options.classList.
     *
     * @return {Object} - An object containing all class list.
     */

  }, {
    key: "classes",
    get: function get() {
      return this._o.classes;
    }
    /**
     * Return the i18n strings.
     * This is an alias of Splide.options.i18n.
     *
     * @return {Object} - An object containing all i18n strings.
     */

  }, {
    key: "i18n",
    get: function get() {
      return this._o.i18n;
    }
  }]);

  return Splide;
}();


;// CONCATENATED MODULE: ./src/js/components/options/index.js
/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const options = (function (Splide) {
  /**
   * Retrieve options from the data attribute.
   * Note that IE10 doesn't support dataset property.
   *
   * @type {string}
   */
  var options = getAttribute(Splide.root, 'data-splide');

  if (options) {
    try {
      Splide.options = JSON.parse(options);
    } catch (e) {
      error(e.message);
    }
  }

  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      if (Splide.State.is(CREATED)) {
        Splide.index = Splide.options.start;
      }
    }
  };
});
;// CONCATENATED MODULE: ./src/js/constants/directions.js
/**
 * Export layout modes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Enumerate slides from left to right.
 *
 * @type {string}
 */
var LTR = 'ltr';
/**
 * Enumerate slides from right to left.
 *
 * @type {string}
 */

var RTL = 'rtl';
/**
 * Enumerate slides in a col.
 *
 * @type {string}
 */

var TTB = 'ttb';
;// CONCATENATED MODULE: ./src/js/components/elements/slide.js
/**
 * The sub component for handling each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */






/**
 * Events for restoring original styles.
 *
 * @type {string}
 */

var STYLE_RESTORE_EVENTS = 'update.slide';
/**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */

/* harmony default export */ const elements_slide = (function (Splide, index, realIndex, slide) {
  /**
   * Whether to update "is-active" class before or after transition.
   *
   * @type {boolean}
   */
  var updateOnMove = Splide.options.updateOnMove;
  /**
   * Events when the slide status is updated.
   * Append a namespace to remove listeners later.
   *
   * @type {string}
   */

  var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
  /**
   * Slide sub component object.
   *
   * @type {Object}
   */

  var Slide = {
    /**
     * Slide element.
     *
     * @type {Element}
     */
    slide: slide,

    /**
     * Slide index.
     *
     * @type {number}
     */
    index: index,

    /**
     * Real index for clones.
     *
     * @type {number}
     */
    realIndex: realIndex,

    /**
     * Container element if available.
     *
     * @type {Element|undefined}
     */
    container: child(slide, Splide.classes.container),

    /**
     * Whether this is a cloned slide or not.
     *
     * @type {boolean}
     */
    isClone: realIndex > -1,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (!this.isClone) {
        slide.id = Splide.root.id + "-slide" + pad(index + 1);
      }

      Splide.on(STATUS_UPDATE_EVENTS, function () {
        return _this.update();
      }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
        return Splide.emit('click', _this);
      }, slide);
      /*
       * Add "is-active" class to a clone element temporarily
       * and it will be removed on "moved" event.
       */

      if (updateOnMove) {
        Splide.on('move.slide', function (newIndex) {
          if (newIndex === realIndex) {
            _update(true, false);
          }
        });
      } // Make sure the slide is shown.


      applyStyle(slide, {
        display: ''
      }); // Hold the original styles.

      this.styles = getAttribute(slide, 'style') || '';
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
      removeClass(slide, values(STATUS_CLASSES));
      restoreStyles();
      removeAttribute(this.container, 'style');
    },

    /**
     * Update active and visible status.
     */
    update: function update() {
      _update(this.isActive(), false);

      _update(this.isVisible(), true);
    },

    /**
     * Check whether this slide is active or not.
     *
     * @return {boolean} - True if the slide is active or false if not.
     */
    isActive: function isActive() {
      return Splide.index === index;
    },

    /**
     * Check whether this slide is visible in the viewport or not.
     *
     * @return {boolean} - True if the slide is visible or false if not.
     */
    isVisible: function isVisible() {
      var active = this.isActive();

      if (Splide.is(FADE) || active) {
        return active;
      }

      var ceil = Math.ceil;
      var trackRect = getRect(Splide.Components.Elements.track);
      var slideRect = getRect(slide);

      if (Splide.options.direction === TTB) {
        return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
      }

      return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
    },

    /**
     * Calculate how far this slide is from another slide and
     * return true if the distance is within the given number.
     *
     * @param {number} from   - Index of a target slide.
     * @param {number} within - True if the slide is within this number.
     *
     * @return {boolean} - True if the slide is within the number or false otherwise.
     */
    isWithin: function isWithin(from, within) {
      var diff = Math.abs(from - index);

      if (!Splide.is(SLIDE) && !this.isClone) {
        diff = Math.min(diff, Splide.length - diff);
      }

      return diff < within;
    }
  };
  /**
   * Update classes for activity or visibility.
   *
   * @param {boolean} active        - Is active/visible or not.
   * @param {boolean} forVisibility - Toggle classes for activity or visibility.
   */

  function _update(active, forVisibility) {
    var type = forVisibility ? 'visible' : 'active';
    var className = STATUS_CLASSES[type];

    if (active) {
      addClass(slide, className);
      Splide.emit("" + type, Slide);
    } else {
      if (hasClass(slide, className)) {
        removeClass(slide, className);
        Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
      }
    }
  }
  /**
   * Restore the original styles.
   */


  function restoreStyles() {
    setAttribute(slide, 'style', Slide.styles);
  }

  return Slide;
});
;// CONCATENATED MODULE: ./src/js/components/elements/index.js
/**
 * The component for main elements.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





/**
 * The property name for UID stored in a window object.
 *
 * @type {string}
 */

var UID_NAME = 'uid';
/**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const components_elements = (function (Splide, Components) {
  /**
   * Hold the root element.
   *
   * @type {Element}
   */
  var root = Splide.root;
  /**
   * Hold the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Store Slide objects.
   *
   * @type {Array}
   */

  var Slides = [];
  /*
   * Assign unique ID to the root element if it doesn't have the one.
   * Note that IE doesn't support padStart() to fill the uid by 0.
   */

  if (!root.id) {
    window.splide = window.splide || {};
    var uid = window.splide[UID_NAME] || 0;
    window.splide[UID_NAME] = ++uid;
    root.id = "splide" + pad(uid);
  }
  /**
   * Elements component object.
   *
   * @type {Object}
   */


  var Elements = {
    /**
     * Called when the component is mounted.
     * Collect main elements and store them as member properties.
     */
    mount: function mount() {
      var _this = this;

      this.init();
      Splide.on('refresh', function () {
        _this.destroy();

        _this.init();
      }).on('updated', function () {
        removeClass(root, getClasses());
        addClass(root, getClasses());
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      Slides.forEach(function (Slide) {
        Slide.destroy();
      });
      Slides = [];
      removeClass(root, getClasses());
    },

    /**
     * Initialization.
     */
    init: function init() {
      var _this2 = this;

      collect();
      addClass(root, getClasses());
      this.slides.forEach(function (slide, index) {
        _this2.register(slide, index, -1);
      });
    },

    /**
     * Register a slide to create a Slide object and handle its behavior.
     *
     * @param {Element} slide     - A slide element.
     * @param {number}  index     - A unique index. This can be negative.
     * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
     */
    register: function register(slide, index, realIndex) {
      var SlideObject = elements_slide(Splide, index, realIndex, slide);
      SlideObject.mount();
      Slides.push(SlideObject);
    },

    /**
     * Return the Slide object designated by the index.
     * Note that "find" is not supported by IE.
     *
     * @return {Object|undefined} - A Slide object if available. Undefined if not.
     */
    getSlide: function getSlide(index) {
      return Slides.filter(function (Slide) {
        return Slide.index === index;
      })[0];
    },

    /**
     * Return all Slide objects.
     *
     * @param {boolean} includeClones - Whether to include cloned slides or not.
     *
     * @return {Object[]} - Slide objects.
     */
    getSlides: function getSlides(includeClones) {
      return includeClones ? Slides : Slides.filter(function (Slide) {
        return !Slide.isClone;
      });
    },

    /**
     * Return Slide objects belonging to the given page.
     *
     * @param {number} page - A page number.
     *
     * @return {Object[]} - An array containing Slide objects.
     */
    getSlidesByPage: function getSlidesByPage(page) {
      var idx = Components.Controller.toIndex(page);
      var options = Splide.options;
      var max = options.focus !== false ? 1 : options.perPage;
      return Slides.filter(function (_ref) {
        var index = _ref.index;
        return idx <= index && index < idx + max;
      });
    },

    /**
     * Insert a slide to a slider.
     * Need to refresh Splide after adding a slide.
     *
     * @param {Node|string} slide    - A slide element to be added.
     * @param {number}      index    - A slide will be added at the position.
     * @param {Function}    callback - Called right after the slide is added to the DOM tree.
     */
    add: function add(slide, index, callback) {
      if (typeof slide === 'string') {
        slide = domify(slide);
      }

      if (slide instanceof Element) {
        var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

        applyStyle(slide, {
          display: 'none'
        });

        if (ref) {
          before(slide, ref);
          this.slides.splice(index, 0, slide);
        } else {
          append(this.list, slide);
          this.slides.push(slide);
        }

        loaded(slide, function () {
          callback && callback(slide);
        });
      }
    },

    /**
     * Remove a slide from a slider.
     * Need to refresh Splide after removing a slide.
     *
     * @param index - Slide index.
     */
    remove: function remove(index) {
      dom_remove(this.slides.splice(index, 1)[0]);
    },

    /**
     * Trigger the provided callback for each Slide object.
     *
     * @param {Function} callback - A callback function. The first argument will be the Slide object.
     */
    each: function each(callback) {
      Slides.forEach(callback);
    },

    /**
     * Return slides length without clones.
     *
     * @return {number} - Slide length.
     */
    get length() {
      return this.slides.length;
    },

    /**
     * Return "SlideObjects" length including clones.
     *
     * @return {number} - Slide length including clones.
     */
    get total() {
      return Slides.length;
    }

  };
  /**
   * Collect elements.
   */

  function collect() {
    Elements.slider = child(root, classes.slider);
    Elements.track = find(root, "." + classes.track);
    Elements.list = child(Elements.track, classes.list);
    exist(Elements.track && Elements.list, 'Track or list was not found.');
    Elements.slides = children(Elements.list, classes.slide);
    var arrows = findParts(classes.arrows);
    Elements.arrows = {
      prev: find(arrows, "." + classes.prev),
      next: find(arrows, "." + classes.next)
    };
    var autoplay = findParts(classes.autoplay);
    Elements.bar = find(findParts(classes.progress), "." + classes.bar);
    Elements.play = find(autoplay, "." + classes.play);
    Elements.pause = find(autoplay, "." + classes.pause);
    Elements.track.id = Elements.track.id || root.id + "-track";
    Elements.list.id = Elements.list.id || root.id + "-list";
  }
  /**
   * Return class names for the root element.
   */


  function getClasses() {
    var rootClass = classes.root;
    var options = Splide.options;
    return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
  }
  /**
   * Find parts only from children of the root or track.
   *
   * @return {Element} - A found element or undefined.
   */


  function findParts(className) {
    return child(root, className) || child(Elements.slider, className);
  }

  return Elements;
});
;// CONCATENATED MODULE: ./src/js/components/controller/index.js
/**
 * The component for controlling the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



var floor = Math.floor;
/**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const controller = (function (Splide, Components) {
  /**
   * Store current options.
   *
   * @type {Object}
   */
  var options;
  /**
   * True if the slide is LOOP mode.
   *
   * @type {boolean}
   */

  var isLoop;
  /**
   * Controller component object.
   *
   * @type {Object}
   */

  var Controller = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      options = Splide.options;
      isLoop = Splide.is(LOOP);
      bind();
    },

    /**
     * Make track run by the given control.
     * - "+{i}" : Increment the slide index by i.
     * - "-{i}" : Decrement the slide index by i.
     * - "{i}"  : Go to the slide whose index is i.
     * - ">"    : Go to next page.
     * - "<"    : Go to prev page.
     * - ">{i}" : Go to page i.
     *
     * @param {string|number} control  - A control pattern.
     * @param {boolean}       silently - Go to the destination without event emission.
     */
    go: function go(control, silently) {
      var destIndex = this.trim(this.parse(control));
      Components.Track.go(destIndex, this.rewind(destIndex), silently);
    },

    /**
     * Parse the given control and return the destination index for the track.
     *
     * @param {string} control - A control target pattern.
     *
     * @return {number} - A parsed target.
     */
    parse: function parse(control) {
      var index = Splide.index;
      var matches = String(control).match(/([+\-<>]+)(\d+)?/);
      var indicator = matches ? matches[1] : '';
      var number = matches ? parseInt(matches[2]) : 0;

      switch (indicator) {
        case '+':
          index += number || 1;
          break;

        case '-':
          index -= number || 1;
          break;

        case '>':
        case '<':
          index = parsePage(number, index, indicator === '<');
          break;

        default:
          index = parseInt(control);
      }

      return index;
    },

    /**
     * Compute index from the given page number.
     *
     * @param {number} page - Page number.
     *
     * @return {number} - A computed page number.
     */
    toIndex: function toIndex(page) {
      if (hasFocus()) {
        return page;
      }

      var length = Splide.length;
      var perPage = options.perPage;
      var index = page * perPage;
      index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

      if (length - perPage <= index && index < length) {
        index = length - perPage;
      }

      return index;
    },

    /**
     * Compute page number from the given slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - A computed page number.
     */
    toPage: function toPage(index) {
      if (hasFocus()) {
        return index;
      }

      var length = Splide.length;
      var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

      if (length - perPage <= index && index < length) {
        return floor((length - 1) / perPage);
      }

      return floor(index / perPage);
    },

    /**
     * Trim the given index according to the current mode.
     * Index being returned could be less than 0 or greater than the length in Loop mode.
     *
     * @param {number} index - An index being trimmed.
     *
     * @return {number} - A trimmed index.
     */
    trim: function trim(index) {
      if (!isLoop) {
        index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
      }

      return index;
    },

    /**
     * Rewind the given index if it's out of range.
     *
     * @param {number} index - An index.
     *
     * @return {number} - A rewound index.
     */
    rewind: function rewind(index) {
      var edge = this.edgeIndex;

      if (isLoop) {
        while (index > edge) {
          index -= edge + 1;
        }

        while (index < 0) {
          index += edge + 1;
        }
      } else {
        if (index > edge) {
          index = 0;
        } else if (index < 0) {
          index = edge;
        }
      }

      return index;
    },

    /**
     * Check if the direction is "rtl" or not.
     *
     * @return {boolean} - True if "rtl" or false if not.
     */
    isRtl: function isRtl() {
      return options.direction === RTL;
    },

    /**
     * Return the page length.
     *
     * @return {number} - Max page number.
     */
    get pageLength() {
      var length = Splide.length;
      return hasFocus() ? length : Math.ceil(length / options.perPage);
    },

    /**
     * Return the edge index.
     *
     * @return {number} - Edge index.
     */
    get edgeIndex() {
      var length = Splide.length;

      if (!length) {
        return 0;
      }

      if (hasFocus() || options.isNavigation || isLoop) {
        return length - 1;
      }

      return length - options.perPage;
    },

    /**
     * Return the index of the previous slide.
     *
     * @return {number} - The index of the previous slide if available. -1 otherwise.
     */
    get prevIndex() {
      var prev = Splide.index - 1;

      if (isLoop || options.rewind) {
        prev = this.rewind(prev);
      }

      return prev > -1 ? prev : -1;
    },

    /**
     * Return the index of the next slide.
     *
     * @return {number} - The index of the next slide if available. -1 otherwise.
     */
    get nextIndex() {
      var next = Splide.index + 1;

      if (isLoop || options.rewind) {
        next = this.rewind(next);
      }

      return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
    }

  };
  /**
   * Listen to some events.
   */

  function bind() {
    Splide.on('move', function (newIndex) {
      Splide.index = newIndex;
    }).on('updated refresh', function (newOptions) {
      options = newOptions || options;
      Splide.index = between(Splide.index, 0, Controller.edgeIndex);
    });
  }
  /**
   * Verify if the focus option is available or not.
   *
   * @return {boolean} - True if a slider has the focus option.
   */


  function hasFocus() {
    return options.focus !== false;
  }
  /**
   * Return the next or previous page index computed by the page number and current index.
   *
   * @param {number}  number - Specify the page number.
   * @param {number}  index  - Current index.
   * @param {boolean} prev   - Prev or next.
   *
   * @return {number} - Slide index.
   */


  function parsePage(number, index, prev) {
    if (number > -1) {
      return Controller.toIndex(number);
    }

    var perMove = options.perMove;
    var sign = prev ? -1 : 1;

    if (perMove) {
      return index + perMove * sign;
    }

    return Controller.toIndex(Controller.toPage(index) + sign);
  }

  return Controller;
});
;// CONCATENATED MODULE: ./src/js/components/track/index.js
/**
 * The component for moving list in the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var abs = Math.abs;
/**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const track = (function (Splide, Components) {
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */
  var Layout;
  /**
   * Hold the Layout component.
   *
   * @type {Object}
   */

  var Elements;
  /**
   * Store the list element.
   *
   * @type {Element}
   */

  var list;
  /**
   * Whether the current direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Whether the slider type is FADE or not.
   *
   * @type {boolean}
   */

  var isFade = Splide.is(FADE);
  /**
   * Whether the slider direction is RTL or not.
   *
   * @type {boolean}
   */

  var isRTL = Splide.options.direction === RTL;
  /**
   * This will be true while transitioning from the last index to the first one.
   *
   * @type {boolean}
   */

  var isLoopPending = false;
  /**
   * Sign for the direction. Only RTL mode uses the positive sign.
   *
   * @type {number}
   */

  var sign = isRTL ? 1 : -1;
  /**
   * Track component object.
   *
   * @type {Object}
   */

  var Track = {
    /**
     * Make public the sign defined locally.
     *
     * @type {number}
     */
    sign: sign,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Elements = Components.Elements;
      Layout = Components.Layout;
      list = Elements.list;
    },

    /**
     * Called after the component is mounted.
     * The resize event must be registered after the Layout's one is done.
     */
    mounted: function mounted() {
      var _this = this;

      if (!isFade) {
        this.jump(0);
        Splide.on('mounted resize updated', function () {
          _this.jump(Splide.index);
        });
      }
    },

    /**
     * Go to the given destination index.
     * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
     *
     * @param {number}  destIndex - A destination index.
     *                              This can be negative or greater than slides length for reaching clones.
     * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
     * @param {boolean} silently  - If true, suppress emitting events.
     */
    go: function go(destIndex, newIndex, silently) {
      var newPosition = getTrimmedPosition(destIndex);
      var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

      if (Splide.State.is(MOVING) && isLoopPending) {
        return;
      }

      isLoopPending = destIndex !== newIndex;

      if (!silently) {
        Splide.emit('move', newIndex, prevIndex, destIndex);
      }

      if (Math.abs(newPosition - this.position) >= 1 || isFade) {
        Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        });
      } else {
        if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
          Components.Controller.go(destIndex + destIndex - prevIndex, silently);
        } else {
          onTransitionEnd(destIndex, newIndex, prevIndex, silently);
        }
      }
    },

    /**
     * Move the track to the specified index.
     *
     * @param {number} index - A destination index where the track jumps.
     */
    jump: function jump(index) {
      this.translate(getTrimmedPosition(index));
    },

    /**
     * Set the list position by CSS translate property.
     *
     * @param {number} position - A new position value.
     */
    translate: function translate(position) {
      applyStyle(list, {
        transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
      });
    },

    /**
     * Cancel the transition and set the list position.
     * Also, loop the slider if necessary.
     */
    cancel: function cancel() {
      if (Splide.is(LOOP)) {
        this.shift();
      } else {
        // Ensure the current position.
        this.translate(this.position);
      }

      applyStyle(list, {
        transition: ''
      });
    },

    /**
     * Shift the slider if it exceeds borders on the edge.
     */
    shift: function shift() {
      var position = abs(this.position);
      var left = abs(this.toPosition(0));
      var right = abs(this.toPosition(Splide.length));
      var innerSize = right - left;

      if (position < left) {
        position += innerSize;
      } else if (position > right) {
        position -= innerSize;
      }

      this.translate(sign * position);
    },

    /**
     * Trim redundant spaces on the left or right edge if necessary.
     *
     * @param {number} position - Position value to be trimmed.
     *
     * @return {number} - Trimmed position.
     */
    trim: function trim(position) {
      if (!Splide.options.trimSpace || Splide.is(LOOP)) {
        return position;
      }

      var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
      return between(position, edge, 0);
    },

    /**
     * Calculate the closest slide index from the given position.
     *
     * @param {number} position - A position converted to an slide index.
     *
     * @return {number} - The closest slide index.
     */
    toIndex: function toIndex(position) {
      var _this2 = this;

      var index = 0;
      var minDistance = Infinity;
      Elements.getSlides(true).forEach(function (Slide) {
        var slideIndex = Slide.index;
        var distance = abs(_this2.toPosition(slideIndex) - position);

        if (distance < minDistance) {
          minDistance = distance;
          index = slideIndex;
        }
      });
      return index;
    },

    /**
     * Return coordinates object by the given position.
     *
     * @param {number} position - A position value.
     *
     * @return {Object} - A coordinates object.
     */
    toCoord: function toCoord(position) {
      return {
        x: isVertical ? 0 : position,
        y: isVertical ? position : 0
      };
    },

    /**
     * Calculate the track position by a slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {Object} - Calculated position.
     */
    toPosition: function toPosition(index) {
      var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
      return sign * (position + this.offset(index));
    },

    /**
     * Return the current offset value, considering direction.
     *
     * @return {number} - Offset amount.
     */
    offset: function offset(index) {
      var focus = Splide.options.focus;
      var slideSize = Layout.slideSize(index);

      if (focus === 'center') {
        return -(Layout.size - slideSize) / 2;
      }

      return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
    },

    /**
     * Return the current position.
     * This returns the correct position even while transitioning by CSS.
     *
     * @return {number} - Current position.
     */
    get position() {
      var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
      return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
    }

  };
  /**
   * Called whenever slides arrive at a destination.
   *
   * @param {number}  destIndex - A destination index.
   * @param {number}  newIndex  - A new index.
   * @param {number}  prevIndex - A previous index.
   * @param {boolean} silently  - If true, suppress emitting events.
   */

  function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
    applyStyle(list, {
      transition: ''
    });
    isLoopPending = false;

    if (!isFade) {
      Track.jump(newIndex);
    }

    if (!silently) {
      Splide.emit('moved', newIndex, prevIndex, destIndex);
    }
  }
  /**
   * Convert index to the trimmed position.
   *
   * @return {number} - Trimmed position.
   */


  function getTrimmedPosition(index) {
    return Track.trim(Track.toPosition(index));
  }

  return Track;
});
;// CONCATENATED MODULE: ./src/js/components/clones/index.js
/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */




/**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const clones = (function (Splide, Components) {
  /**
   * Store information of all clones.
   *
   * @type {Array}
   */
  var clones = [];
  /**
   * Store the current clone count on one side.
   *
   * @type {number}
   */

  var cloneCount = 0;
  /**
   * Keep Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Clones component object.
   *
   * @type {Object}
   */

  var Clones = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      if (Splide.is(LOOP)) {
        init();
        Splide.on('refresh:before', function () {
          _this.destroy();
        }).on('refresh', init).on('resize', function () {
          if (cloneCount !== getCloneCount()) {
            // Destroy before refresh not to collect clones by the Elements component.
            _this.destroy();

            Splide.refresh();
          }
        });
      }
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      dom_remove(clones);
      clones = [];
    },

    /**
     * Return all clones.
     *
     * @return {Element[]} - Cloned elements.
     */
    get clones() {
      return clones;
    },

    /**
     * Return clone length.
     *
     * @return {number} - A length of clones.
     */
    get length() {
      return clones.length;
    }

  };
  /**
   * Initialization.
   */

  function init() {
    Clones.destroy();
    cloneCount = getCloneCount();
    generateClones(cloneCount);
  }
  /**
   * Generate and append/prepend clones.
   *
   * @param {number} count - The half number of clones.
   */


  function generateClones(count) {
    var length = Elements.length,
        register = Elements.register;

    if (length) {
      var slides = Elements.slides;

      while (slides.length < count) {
        slides = slides.concat(slides);
      } // Clones after the last element.


      slides.slice(0, count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        append(Elements.list, clone);
        clones.push(clone);
        register(clone, index + length, index % length);
      }); // Clones before the first element.

      slides.slice(-count).forEach(function (elm, index) {
        var clone = cloneDeeply(elm);
        before(clone, slides[0]);
        clones.push(clone);
        register(clone, index - count, (length + index - count % length) % length);
      });
    }
  }
  /**
   * Return half count of clones to be generated.
   * Clone count is determined by:
   * - "clones" value in the options.
   * - Number of slides that can be placed in a view in "fixed" mode.
   * - Max pages a flick action can move.
   * - Whether the slide length is enough for perPage.
   *
   * @return {number} - Count for clones.
   */


  function getCloneCount() {
    var options = Splide.options;

    if (options.clones) {
      return options.clones;
    } // Use the slide length in autoWidth mode because the number cannot be calculated.


    var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
    var dimension = options.direction === TTB ? 'Height' : 'Width';
    var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

    if (fixedSize) {
      // Roughly calculate the count. This needs not to be strict.
      baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
    }

    return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
  }
  /**
   * Clone deeply the given element.
   *
   * @param {Element} elm - An element being duplicated.
   *
   * @return {Node} - A cloned node(element).
   */


  function cloneDeeply(elm) {
    var clone = elm.cloneNode(true);
    addClass(clone, Splide.classes.clone); // ID should not be duplicated.

    removeAttribute(clone, 'id');
    return clone;
  }

  return Clones;
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/horizontal.js
/**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const horizontal = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options = Splide.options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

    /**
     * Always 0 because the height will be determined by inner contents.
     *
     * @type {number}
     */
    height: 0,

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var left = toPixel(root, padding.left || padding);
      var right = toPixel(root, padding.right || padding);
      this.padding = {
        left: left,
        right: right
      };
      applyStyle(track, {
        paddingLeft: unit(left),
        paddingRight: unit(right)
      });
    },

    /**
     * Return total width from the left of the list to the right of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
     *
     * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
     */
    totalWidth: function totalWidth(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);
      var width = 0;

      if (Slide) {
        var slideRect = getRect(Slide.slide);
        var listRect = getRect(Elements.list);

        if (options.direction === RTL) {
          width = listRect.right - slideRect.left;
        } else {
          width = slideRect.right - listRect.left;
        }

        width += this.gap;
      }

      return width;
    },

    /**
     * Return the slide width in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth(index) {
      if (options.autoWidth) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetWidth : 0;
      }

      var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
      return toPixel(root, width);
    },

    /**
     * Return the slide height in px.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight() {
      var height = options.height || options.fixedHeight || this.width * options.heightRatio;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth - this.padding.left - this.padding.right;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/components/layout/directions/vertical.js
/**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */

/* harmony default export */ const vertical = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Keep the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Keep the track element.
   *
   * @type {Element}
   */

  var track;
  /**
   * Keep the latest options.
   *
   * @type {Element}
   */

  var options;
  return {
    /**
     * Margin property name.
     *
     * @type {string}
     */
    margin: 'marginBottom',

    /**
     * Initialization.
     */
    init: function init() {
      this.resize();
    },

    /**
     * Resize gap and padding.
     * This must be called on init.
     */
    resize: function resize() {
      options = Splide.options;
      track = Elements.track;
      this.gap = toPixel(root, options.gap);
      var padding = options.padding;
      var top = toPixel(root, padding.top || padding);
      var bottom = toPixel(root, padding.bottom || padding);
      this.padding = {
        top: top,
        bottom: bottom
      };
      applyStyle(track, {
        paddingTop: unit(top),
        paddingBottom: unit(bottom)
      });
    },

    /**
     * Return total height from the top of the list to the bottom of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
     *
     * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
     */
    totalHeight: function totalHeight(index) {
      if (index === void 0) {
        index = Splide.length - 1;
      }

      var Slide = Elements.getSlide(index);

      if (Slide) {
        return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
      }

      return 0;
    },

    /**
     * Return the slide width in px.
     *
     * @return {number} - The slide width.
     */
    slideWidth: function slideWidth() {
      return toPixel(root, options.fixedWidth || this.width);
    },

    /**
     * Return the slide height in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide height.
     */
    slideHeight: function slideHeight(index) {
      if (options.autoHeight) {
        var Slide = Elements.getSlide(index);
        return Slide ? Slide.slide.offsetHeight : 0;
      }

      var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
      return toPixel(root, height);
    },

    /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */
    get width() {
      return track.clientWidth;
    },

    /**
     * Return slide height without padding.
     *
     * @return {number} - Slider height.
     */
    get height() {
      var height = options.height || this.width * options.heightRatio;
      exist(height, '"height" or "heightRatio" is missing.');
      return toPixel(root, height) - this.padding.top - this.padding.bottom;
    }

  };
});
;// CONCATENATED MODULE: ./src/js/utils/time.js
/**
 * A package of utility functions related with time.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Simple throttle function that controls how often the given function is executed.
 *
 * @param {function} func - A function to be throttled.
 * @param {number}   wait - Time in millisecond for interval of execution.
 *
 * @return {Function} - A debounced function.
 */
function throttle(func, wait) {
  var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func();
        timeout = null;
      }, wait);
    }
  };
}
/**
 * Custom setInterval function that provides progress rate as callback.
 *
 * @param {function} callback - A callback function fired every time the interval time passes.
 * @param {number}   interval - Interval duration in milliseconds.
 * @param {function} progress - A callback function fired whenever the progress goes.
 *
 * @return {Object} - An object containing play() and pause() functions.
 */

function createInterval(callback, interval, progress) {
  var _window = window,
      requestAnimationFrame = _window.requestAnimationFrame;
  var start,
      elapse,
      rate,
      _pause = true;

  var step = function step(timestamp) {
    if (!_pause) {
      if (!start) {
        start = timestamp;

        if (rate && rate < 1) {
          start -= rate * interval;
        }
      }

      elapse = timestamp - start;
      rate = elapse / interval;

      if (elapse >= interval) {
        start = 0;
        rate = 1;
        callback();
      }

      if (progress) {
        progress(rate);
      }

      requestAnimationFrame(step);
    }
  };

  return {
    pause: function pause() {
      _pause = true;
      start = 0;
    },
    play: function play(reset) {
      start = 0;

      if (reset) {
        rate = 0;
      }

      if (_pause) {
        _pause = false;
        requestAnimationFrame(step);
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/js/components/layout/index.js
/**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */







/**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const layout = (function (Splide, Components) {
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */
  var Elements = Components.Elements;
  /**
   * Whether the slider is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Layout = object_assign({
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      bind();
      init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

      this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
      this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
    },

    /**
     * Destroy the component.
     */
    destroy: function destroy() {
      removeAttribute([Elements.list, Elements.track], 'style');
    },

    /**
     * Return the slider height on the vertical mode or width on the horizontal mode.
     *
     * @return {number}
     */
    get size() {
      return isVertical ? this.height : this.width;
    }

  }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
  /**
   * Init slider styles according to options.
   */

  function init() {
    Layout.init();
    applyStyle(Splide.root, {
      maxWidth: unit(Splide.options.width)
    });
    Elements.each(function (Slide) {
      Slide.slide.style[Layout.margin] = unit(Layout.gap);
    });
    resize();
  }
  /**
   * Listen the resize native event with throttle.
   * Initialize when the component is mounted or options are updated.
   */


  function bind() {
    Splide.on('resize load', throttle(function () {
      Splide.emit('resize');
    }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
  }
  /**
   * Resize the track and slide elements.
   */


  function resize() {
    var options = Splide.options;
    Layout.resize();
    applyStyle(Elements.track, {
      height: unit(Layout.height)
    });
    var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
    Elements.each(function (Slide) {
      applyStyle(Slide.container, {
        height: slideHeight
      });
      applyStyle(Slide.slide, {
        width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
        height: Slide.container ? null : slideHeight
      });
    });
    Splide.emit('resized');
  }

  return Layout;
});
;// CONCATENATED MODULE: ./src/js/components/drag/index.js
/**
 * The component for supporting mouse drag and swipe.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */





var drag_abs = Math.abs;
/**
 * If the absolute velocity is greater thant this value,
 * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
 */

var MIN_VELOCITY = 0.1;
/**
 * Adjust how much the track can be pulled on the first or last page.
 * The larger number this is, the farther the track moves.
 * This should be around 5 - 9.
 *
 * @type {number}
 */

var FRICTION_REDUCER = 7;
/**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const drag = (function (Splide, Components) {
  /**
   * Store the Move component.
   *
   * @type {Object}
   */
  var Track = Components.Track;
  /**
   * Store the Controller component.
   *
   * @type {Object}
   */

  var Controller = Components.Controller;
  /**
   * Coordinate of the track on starting drag.
   *
   * @type {Object}
   */

  var startCoord;
  /**
   * Analyzed info on starting drag.
   *
   * @type {Object|null}
   */

  var startInfo;
  /**
   * Analyzed info being updated while dragging/swiping.
   *
   * @type {Object}
   */

  var currentInfo;
  /**
   * Determine whether slides are being dragged or not.
   *
   * @type {boolean}
   */

  var isDragging;
  /**
   * Whether the slider direction is vertical or not.
   *
   * @type {boolean}
   */

  var isVertical = Splide.options.direction === TTB;
  /**
   * Axis for the direction.
   *
   * @type {string}
   */

  var axis = isVertical ? 'y' : 'x';
  /**
   * Drag component object.
   *
   * @type {Object}
   */

  var Drag = {
    /**
     * Whether dragging is disabled or not.
     *
     * @type {boolean}
     */
    disabled: false,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var _this = this;

      var Elements = Components.Elements;
      var track = Elements.track;
      Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
        passive: false
      }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
        // Prevent dragging an image or anchor itself.
        each(Elements.list.querySelectorAll('img, a'), function (elm) {
          Splide.off('dragstart', elm).on('dragstart', function (e) {
            e.preventDefault();
          }, elm, {
            passive: false
          });
        });
      }).on('mounted updated', function () {
        _this.disabled = !Splide.options.drag;
      });
    }
  };
  /**
   * Called when the track starts to be dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */

  function start(e) {
    if (!Drag.disabled && !isDragging) {
      // These prams are used to evaluate whether the slider should start moving.
      init(e);
    }
  }
  /**
   * Initialize parameters.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function init(e) {
    startCoord = Track.toCoord(Track.position);
    startInfo = analyze(e, {});
    currentInfo = startInfo;
  }
  /**
   * Called while the track being dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */


  function move(e) {
    if (startInfo) {
      currentInfo = analyze(e, startInfo);

      if (isDragging) {
        if (e.cancelable) {
          e.preventDefault();
        }

        if (!Splide.is(FADE)) {
          var position = startCoord[axis] + currentInfo.offset[axis];
          Track.translate(resist(position));
        }
      } else {
        if (shouldMove(currentInfo)) {
          Splide.emit('drag', startInfo);
          isDragging = true;
          Track.cancel(); // These params are actual drag data.

          init(e);
        }
      }
    }
  }
  /**
   * Determine whether to start moving the track or not by drag angle.
   *
   * @param {Object} info - An information object.
   *
   * @return {boolean} - True if the track should be moved or false if not.
   */


  function shouldMove(_ref) {
    var offset = _ref.offset;

    if (Splide.State.is(MOVING) && Splide.options.waitForTransition) {
      return false;
    }

    var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

    if (isVertical) {
      angle = 90 - angle;
    }

    return angle < Splide.options.dragAngleThreshold;
  }
  /**
   * Resist dragging the track on the first/last page because there is no more.
   *
   * @param {number} position - A position being applied to the track.
   *
   * @return {Object} - Adjusted position.
   */


  function resist(position) {
    if (Splide.is(SLIDE)) {
      var sign = Track.sign;

      var _start = sign * Track.trim(Track.toPosition(0));

      var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

      position *= sign;

      if (position < _start) {
        position = _start - FRICTION_REDUCER * Math.log(_start - position);
      } else if (position > _end) {
        position = _end + FRICTION_REDUCER * Math.log(position - _end);
      }

      position *= sign;
    }

    return position;
  }
  /**
   * Called when dragging ends.
   */


  function end() {
    startInfo = null;

    if (isDragging) {
      Splide.emit('dragged', currentInfo);
      go(currentInfo);
      isDragging = false;
    }
  }
  /**
   * Go to the slide determined by the analyzed data.
   *
   * @param {Object} info - An info object.
   */


  function go(info) {
    var velocity = info.velocity[axis];
    var absV = drag_abs(velocity);

    if (absV > 0) {
      var options = Splide.options;
      var index = Splide.index;
      var sign = velocity < 0 ? -1 : 1;
      var destIndex = index;

      if (!Splide.is(FADE)) {
        var destination = Track.position;

        if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
          destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
        }

        destIndex = Track.toIndex(destination);
      }
      /*
       * Do not allow the track to go to a previous position if there is enough velocity.
       * Always use the adjacent index for the fade mode.
       */


      if (destIndex === index && absV > MIN_VELOCITY) {
        destIndex = index + sign * Track.sign;
      }

      if (Splide.is(SLIDE)) {
        destIndex = between(destIndex, 0, Controller.edgeIndex);
      }

      Controller.go(destIndex, options.isNavigation);
    }
  }
  /**
   * Analyze the given event object and return important information for handling swipe behavior.
   *
   * @param {Event}   e          - Touch or Mouse event object.
   * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
   *
   * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
   */


  function analyze(e, startInfo) {
    var timeStamp = e.timeStamp,
        touches = e.touches;

    var _ref2 = touches ? touches[0] : e,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;

    var _ref3 = startInfo.to || {},
        _ref3$x = _ref3.x,
        fromX = _ref3$x === void 0 ? clientX : _ref3$x,
        _ref3$y = _ref3.y,
        fromY = _ref3$y === void 0 ? clientY : _ref3$y;

    var startTime = startInfo.time || 0;
    var offset = {
      x: clientX - fromX,
      y: clientY - fromY
    };
    var duration = timeStamp - startTime;
    var velocity = {
      x: offset.x / duration,
      y: offset.y / duration
    };
    return {
      to: {
        x: clientX,
        y: clientY
      },
      offset: offset,
      time: timeStamp,
      velocity: velocity
    };
  }

  return Drag;
});
;// CONCATENATED MODULE: ./src/js/components/click/index.js
/**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */
/* harmony default export */ const click = (function (Splide, Components) {
  /**
   * Whether click is disabled or not.
   *
   * @type {boolean}
   */
  var disabled = false;
  /**
   * Click component object.
   *
   * @type {Object}
   */

  var Click = {
    /**
     * Mount only when the drag is activated and the slide type is not "fade".
     *
     * @type {boolean}
     */
    required: Splide.options.drag,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('click', onClick, Components.Elements.track, {
        capture: true
      }).on('drag', function () {
        disabled = true;
      }).on('dragged', function () {
        // Make sure the flag is released after the click event is fired.
        setTimeout(function () {
          disabled = false;
        });
      });
    }
  };
  /**
   * Called when a track element is clicked.
   *
   * @param {Event} e - A click event.
   */

  function onClick(e) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  return Click;
});
;// CONCATENATED MODULE: ./src/js/components/autoplay/index.js
/**
 * The component for playing slides automatically.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Set of pause flags.
 */

var PAUSE_FLAGS = {
  HOVER: 1,
  FOCUS: 2,
  MANUAL: 3
};
/**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const autoplay = (function (Splide, Components, name) {
  /**
   * Store pause flags.
   *
   * @type {Array}
   */
  var flags = [];
  /**
   * Store an interval object.
   *
   * @type {Object};
   */

  var interval;
  /**
   * Keep the Elements component.
   *
   * @type {string}
   */

  var Elements = Components.Elements;
  /**
   * Autoplay component object.
   *
   * @type {Object}
   */

  var Autoplay = {
    /**
     * Required only when the autoplay option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.autoplay,

    /**
     * Called when the component is mounted.
     * Note that autoplay starts only if there are slides over perPage number.
     */
    mount: function mount() {
      var options = Splide.options;

      if (Elements.slides.length > options.perPage) {
        interval = createInterval(function () {
          Splide.go('>');
        }, options.interval, function (rate) {
          Splide.emit(name + ":playing", rate);

          if (Elements.bar) {
            applyStyle(Elements.bar, {
              width: rate * 100 + "%"
            });
          }
        });
        bind();
        this.play();
      }
    },

    /**
     * Start autoplay.
     *
     * @param {number} flag - A pause flag to be removed.
     */
    play: function play(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      flags = flags.filter(function (f) {
        return f !== flag;
      });

      if (!flags.length) {
        Splide.emit(name + ":play");
        interval.play(Splide.options.resetProgress);
      }
    },

    /**
     * Pause autoplay.
     * Note that Array.includes is not supported by IE.
     *
     * @param {number} flag - A pause flag to be added.
     */
    pause: function pause(flag) {
      if (flag === void 0) {
        flag = 0;
      }

      interval.pause();

      if (flags.indexOf(flag) === -1) {
        flags.push(flag);
      }

      if (flags.length === 1) {
        Splide.emit(name + ":pause");
      }
    }
  };
  /**
   * Listen some events.
   */

  function bind() {
    var options = Splide.options;
    var sibling = Splide.sibling;
    var elms = [Splide.root, sibling ? sibling.root : null];

    if (options.pauseOnHover) {
      switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
      switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
    }

    if (options.pauseOnFocus) {
      switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
      switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
    }

    if (Elements.play) {
      Splide.on('click', function () {
        // Need to be removed a focus flag at first.
        Autoplay.play(PAUSE_FLAGS.FOCUS);
        Autoplay.play(PAUSE_FLAGS.MANUAL);
      }, Elements.play);
    }

    if (Elements.pause) {
      switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
    }

    Splide.on('move refresh', function () {
      Autoplay.play();
    }) // Rewind the timer.
    .on('destroy', function () {
      Autoplay.pause();
    });
  }
  /**
   * Play or pause on the given event.
   *
   * @param {Element[]} elms  - Elements.
   * @param {string}    event - An event name or names.
   * @param {number}    flag  - A pause flag defined on the top.
   * @param {boolean}   play  - Determine whether to play or pause.
   */


  function switchOn(elms, event, flag, play) {
    elms.forEach(function (elm) {
      Splide.on(event, function () {
        Autoplay[play ? 'play' : 'pause'](flag);
      }, elm);
    });
  }

  return Autoplay;
});
;// CONCATENATED MODULE: ./src/js/components/cover/index.js
/**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const cover = (function (Splide, Components) {
  /**
   * Hold options.
   *
   * @type {Object}
   */
  var options = Splide.options;
  /**
   * Cover component object.
   *
   * @type {Object}
   */

  var Cover = {
    /**
     * Required only when "cover" option is true.
     *
     * @type {boolean}
     */
    required: options.cover,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('lazyload:loaded', function (img) {
        cover(img, false);
      });
      Splide.on('mounted updated refresh', function () {
        return apply(false);
      });
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      apply(true);
    }
  };
  /**
   * Apply "cover" to all slides.
   *
   * @param {boolean} uncover - If true, "cover" will be clear.
   */

  function apply(uncover) {
    Components.Elements.each(function (Slide) {
      var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

      if (img && img.src) {
        cover(img, uncover);
      }
    });
  }
  /**
   * Set background image of the parent element, using source of the given image element.
   *
   * @param {Element} img     - An image element.
   * @param {boolean} uncover - Reset "cover".
   */


  function cover(img, uncover) {
    applyStyle(img.parentElement, {
      background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
    });
    applyStyle(img, {
      display: uncover ? '' : 'none'
    });
  }

  return Cover;
});
;// CONCATENATED MODULE: ./src/js/components/arrows/path.js
/**
 * Export vector path for an arrow.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Namespace definition for SVG element.
 *
 * @type {string}
 */
var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
/**
 * The arrow vector path.
 *
 * @type {number}
 */

var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
/**
 * SVG width and height.
 *
 * @type {number}
 */

var SIZE = 40;
;// CONCATENATED MODULE: ./src/js/components/arrows/index.js
/**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const arrows = (function (Splide, Components, name) {
  /**
   * Previous arrow element.
   *
   * @type {Element|undefined}
   */
  var prev;
  /**
   * Next arrow element.
   *
   * @type {Element|undefined}
   */

  var next;
  /**
   * Store the class list.
   *
   * @type {Object}
   */

  var classes = Splide.classes;
  /**
   * Hold the root element.
   *
   * @type {Element}
   */

  var root = Splide.root;
  /**
   * Whether arrows are created programmatically or not.
   *
   * @type {boolean}
   */

  var created;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Arrows component object.
   *
   * @type {Object}
   */

  var Arrows = {
    /**
     * Required when the arrows option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.arrows,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      // Attempt to get arrows from HTML source.
      prev = Elements.arrows.prev;
      next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

      if ((!prev || !next) && Splide.options.arrows) {
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        appendArrows();
      }

      if (prev && next) {
        bind();
      }

      this.arrows = {
        prev: prev,
        next: next
      };
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      Splide.emit(name + ":mounted", prev, next);
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      removeAttribute([prev, next], 'disabled');

      if (created) {
        dom_remove(prev.parentElement);
      }
    }
  };
  /**
   * Listen to native and custom events.
   */

  function bind() {
    Splide.on('click', function () {
      Splide.go('<');
    }, prev).on('click', function () {
      Splide.go('>');
    }, next).on('mounted move updated refresh', updateDisabled);
  }
  /**
   * Update a disabled attribute.
   */


  function updateDisabled() {
    var _Components$Controlle = Components.Controller,
        prevIndex = _Components$Controlle.prevIndex,
        nextIndex = _Components$Controlle.nextIndex;
    var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
    prev.disabled = prevIndex < 0 || !isEnough;
    next.disabled = nextIndex < 0 || !isEnough;
    Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
  }
  /**
   * Create a wrapper element and append arrows.
   */


  function appendArrows() {
    var wrapper = create('div', {
      "class": classes.arrows
    });
    append(wrapper, prev);
    append(wrapper, next);
    var slider = Elements.slider;
    var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
    before(wrapper, parent.firstElementChild);
  }
  /**
   * Create an arrow element.
   *
   * @param {boolean} prev - Determine to create a prev arrow or next arrow.
   *
   * @return {Element} - A created arrow element.
   */


  function createArrow(prev) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
    return domify(arrow);
  }

  return Arrows;
});
;// CONCATENATED MODULE: ./src/js/components/pagination/index.js
/**
 * The component for handling pagination
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for updating some attributes of pagination nodes.
 *
 * @type {string}
 */

var ATTRIBUTES_UPDATE_EVENT = 'move.page';
/**
 * The event name for recreating pagination.
 *
 * @type {string}
 */

var UPDATE_EVENT = 'updated.page refresh.page';
/**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const pagination = (function (Splide, Components, name) {
  /**
   * Store all data for pagination.
   * - list: A list element.
   * - items: An array that contains objects(li, button, index, page).
   *
   * @type {Object}
   */
  var data = {};
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * Pagination component object.
   *
   * @type {Object}
   */

  var Pagination = {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      var pagination = Splide.options.pagination;

      if (pagination) {
        data = createPagination();
        var slider = Elements.slider;
        var parent = pagination === 'slider' && slider ? slider : Splide.root;
        append(parent, data.list);
        Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
      }

      Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
        Pagination.destroy();

        if (Splide.options.pagination) {
          Pagination.mount();
          Pagination.mounted();
        }
      });
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (Splide.options.pagination) {
        var index = Splide.index;
        Splide.emit(name + ":mounted", data, this.getItem(index));
        updateAttributes(index, -1);
      }
    },

    /**
     * Destroy the pagination.
     * Be aware that node.remove() is not supported by IE.
     */
    destroy: function destroy() {
      dom_remove(data.list);

      if (data.items) {
        data.items.forEach(function (item) {
          Splide.off('click', item.button);
        });
      } // Do not remove UPDATE_EVENT to recreate pagination if needed.


      Splide.off(ATTRIBUTES_UPDATE_EVENT);
      data = {};
    },

    /**
     * Return an item by index.
     *
     * @param {number} index - A slide index.
     *
     * @return {Object|undefined} - An item object on success or undefined on failure.
     */
    getItem: function getItem(index) {
      return data.items[Components.Controller.toPage(index)];
    },

    /**
     * Return object containing pagination data.
     *
     * @return {Object} - Pagination data including list and items.
     */
    get data() {
      return data;
    }

  };
  /**
   * Update attributes.
   *
   * @param {number} index     - Active index.
   * @param {number} prevIndex - Prev index.
   */

  function updateAttributes(index, prevIndex) {
    var prev = Pagination.getItem(prevIndex);
    var curr = Pagination.getItem(index);
    var active = STATUS_CLASSES.active;

    if (prev) {
      removeClass(prev.button, active);
    }

    if (curr) {
      addClass(curr.button, active);
    }

    Splide.emit(name + ":updated", data, prev, curr);
  }
  /**
   * Create a wrapper and button elements.
   *
   * @return {Object} - An object contains all data.
   */


  function createPagination() {
    var options = Splide.options;
    var classes = Splide.classes;
    var list = create('ul', {
      "class": classes.pagination
    });
    var items = Elements.getSlides(false).filter(function (Slide) {
      return options.focus !== false || Slide.index % options.perPage === 0;
    }).map(function (Slide, page) {
      var li = create('li', {});
      var button = create('button', {
        "class": classes.page,
        type: 'button'
      });
      append(li, button);
      append(list, li);
      Splide.on('click', function () {
        Splide.go(">" + page);
      }, button);
      return {
        li: li,
        button: button,
        page: page,
        Slides: Elements.getSlidesByPage(page)
      };
    });
    return {
      list: list,
      items: items
    };
  }

  return Pagination;
});
;// CONCATENATED MODULE: ./src/js/components/lazyload/index.js
/**
 * The component for loading slider images lazily.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The name for a data attribute of src.
 *
 * @type {string}
 */

var SRC_DATA_NAME = 'data-splide-lazy';
/**
 * The name for a data attribute of srcset.
 *
 * @type {string}
 */

var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
/**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const lazyload = (function (Splide, Components, name) {
  /**
   * Next index for sequential loading.
   *
   * @type {number}
   */
  var nextIndex;
  /**
   * Store objects containing an img element and a Slide object.
   *
   * @type {Object[]}
   */

  var images;
  /**
   * Store the options.
   *
   * @type {Object}
   */

  var options = Splide.options;
  /**
   * Whether to load images sequentially or not.
   *
   * @type {boolean}
   */

  var isSequential = options.lazyLoad === 'sequential';
  /**
   * Lazyload component object.
   *
   * @type {Object}
   */

  var Lazyload = {
    /**
     * Mount only when the lazyload option is provided.
     *
     * @type {boolean}
     */
    required: options.lazyLoad,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted refresh', function () {
        init();
        Components.Elements.each(function (Slide) {
          each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
            if (!img.src && !img.srcset) {
              images.push({
                img: img,
                Slide: Slide
              });
              applyStyle(img, {
                display: 'none'
              });
            }
          });
        });

        if (isSequential) {
          loadNext();
        }
      });

      if (!isSequential) {
        Splide.on("mounted refresh moved." + name, check);
      }
    },

    /**
     * Destroy.
     */
    destroy: init
  };
  /**
   * Initialize parameters.
   */

  function init() {
    images = [];
    nextIndex = 0;
  }
  /**
   * Check how close each image is from the active slide and
   * determine whether to start loading or not, according to the distance.
   *
   * @param {number} index - Current index.
   */


  function check(index) {
    index = isNaN(index) ? Splide.index : index;
    images = images.filter(function (image) {
      if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
        load(image.img, image.Slide);
        return false;
      }

      return true;
    }); // Unbind if all images are loaded.

    if (!images[0]) {
      Splide.off("moved." + name);
    }
  }
  /**
   * Start loading an image.
   * Creating a clone of the image element since setting src attribute directly to it
   * often occurs 'hitch', blocking some other processes of a browser.
   *
   * @param {Element} img   - An image element.
   * @param {Object}  Slide - A Slide object.
   */


  function load(img, Slide) {
    addClass(Slide.slide, STATUS_CLASSES.loading);
    var spinner = create('span', {
      "class": Splide.classes.spinner
    });
    append(img.parentElement, spinner);

    img.onload = function () {
      loaded(img, spinner, Slide, false);
    };

    img.onerror = function () {
      loaded(img, spinner, Slide, true);
    };

    setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
    setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
  }
  /**
   * Start loading a next image in images array.
   */


  function loadNext() {
    if (nextIndex < images.length) {
      var image = images[nextIndex];
      load(image.img, image.Slide);
    }

    nextIndex++;
  }
  /**
   * Called just after the image was loaded or loading was aborted by some error.
   *
   * @param {Element} img     - An image element.
   * @param {Element} spinner - A spinner element.
   * @param {Object}  Slide   - A Slide object.
   * @param {boolean} error   - True if the image was loaded successfully or false on error.
   */


  function loaded(img, spinner, Slide, error) {
    removeClass(Slide.slide, STATUS_CLASSES.loading);

    if (!error) {
      dom_remove(spinner);
      applyStyle(img, {
        display: ''
      });
      Splide.emit(name + ":loaded", img).emit('resize');
    }

    if (isSequential) {
      loadNext();
    }
  }

  return Lazyload;
});
;// CONCATENATED MODULE: ./src/js/constants/a11y.js
/**
 * Export aria attribute names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * Attribute name for aria-current.
 *
 * @type {string}
 */
var ARIA_CURRENRT = 'aria-current';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_CONTROLS = 'aria-controls';
/**
 * Attribute name for aria-control.
 *
 * @type {string}
 */

var ARIA_LABEL = 'aria-label';
/**
 * Attribute name for aria-labelledby.
 *
 * @type {string}
 */

var ARIA_LABELLEDBY = 'aria-labelledby';
/**
 * Attribute name for aria-hidden.
 *
 * @type {string}
 */

var ARIA_HIDDEN = 'aria-hidden';
/**
 * Attribute name for tab-index.
 *
 * @type {string}
 */

var TAB_INDEX = 'tabindex';
;// CONCATENATED MODULE: ./src/js/components/keyboard/index.js
/**
 * The component for controlling slides via keyboard.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Map a key to a slide control.
 *
 * @type {Object}
 */

var KEY_MAP = {
  ltr: {
    ArrowLeft: '<',
    ArrowRight: '>',
    // For IE.
    Left: '<',
    Right: '>'
  },
  rtl: {
    ArrowLeft: '>',
    ArrowRight: '<',
    // For IE.
    Left: '>',
    Right: '<'
  },
  ttb: {
    ArrowUp: '<',
    ArrowDown: '>',
    // For IE.
    Up: '<',
    Down: '>'
  }
};
/**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const keyboard = (function (Splide) {
  /**
   * Hold the target element.
   *
   * @type {Element|Document|undefined}
   */
  var target;
  return {
    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('mounted updated', function () {
        var options = Splide.options;
        var root = Splide.root;
        var map = KEY_MAP[options.direction];
        var keyboard = options.keyboard;

        if (target) {
          Splide.off('keydown', target);
          removeAttribute(root, TAB_INDEX);
        }

        if (keyboard) {
          if (keyboard === 'focused') {
            target = root;
            setAttribute(root, TAB_INDEX, 0);
          } else {
            target = document;
          }

          Splide.on('keydown', function (e) {
            if (map[e.key]) {
              Splide.go(map[e.key]);
            }
          }, target);
        }
      });
    }
  };
});
;// CONCATENATED MODULE: ./src/js/components/a11y/index.js
/**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */



/**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const a11y = (function (Splide, Components) {
  /**
   * Hold a i18n object.
   *
   * @type {Object}
   */
  var i18n = Splide.i18n;
  /**
   * Hold the Elements component.
   *
   * @type {Object}
   */

  var Elements = Components.Elements;
  /**
   * All attributes related with A11y.
   *
   * @type {string[]}
   */

  var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
  /**
   * A11y component object.
   *
   * @type {Object}
   */

  var A11y = {
    /**
     * Required only when the accessibility option is true.
     *
     * @type {boolean}
     */
    required: Splide.options.accessibility,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      Splide.on('visible', function (Slide) {
        updateSlide(Slide.slide, true);
      }).on('hidden', function (Slide) {
        updateSlide(Slide.slide, false);
      }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
        removeAttribute(Components.Clones.clones, allAttributes);
      });

      if (Splide.options.isNavigation) {
        Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
          updateNavigation(Slide, true);
        }).on('inactive', function (Slide) {
          updateNavigation(Slide, false);
        });
      }

      initAutoplay();
    },

    /**
     * Destroy.
     */
    destroy: function destroy() {
      var Arrows = Components.Arrows;
      var arrows = Arrows ? Arrows.arrows : {};
      removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
    }
  };
  /**
   * Update slide attributes when it gets visible or hidden.
   *
   * @param {Element} slide   - A slide element.
   * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
   */

  function updateSlide(slide, visible) {
    setAttribute(slide, ARIA_HIDDEN, !visible);

    if (Splide.options.slideFocus) {
      setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
    }
  }
  /**
   * Initialize arrows if they are available.
   * Append screen reader elements and add aria-controls attribute.
   *
   * @param {Element} prev - Previous arrow element.
   * @param {Element} next - Next arrow element.
   */


  function initArrows(prev, next) {
    var controls = Elements.track.id;
    setAttribute(prev, ARIA_CONTROLS, controls);
    setAttribute(next, ARIA_CONTROLS, controls);
  }
  /**
   * Update arrow attributes.
   *
   * @param {Element} prev      - Previous arrow element.
   * @param {Element} next      - Next arrow element.
   * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
   * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
   */


  function updateArrows(prev, next, prevIndex, nextIndex) {
    var index = Splide.index;
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
  }
  /**
   * Initialize pagination if it's available.
   * Append a screen reader element and add aria-controls/label attribute to each item.
   *
   * @param {Object} data       - Data object containing all items.
   * @param {Object} activeItem - An initial active item.
   */


  function initPagination(data, activeItem) {
    if (activeItem) {
      setAttribute(activeItem.button, ARIA_CURRENRT, true);
    }

    data.items.forEach(function (item) {
      var options = Splide.options;
      var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
      var label = sprintf(text, item.page + 1);
      var button = item.button;
      var controls = item.Slides.map(function (Slide) {
        return Slide.slide.id;
      });
      setAttribute(button, ARIA_CONTROLS, controls.join(' '));
      setAttribute(button, ARIA_LABEL, label);
    });
  }
  /**
   * Update pagination attributes.
   *
   * @param {Object}  data - Data object containing all items.
   * @param {Element} prev - A previous active element.
   * @param {Element} curr - A current active element.
   */


  function updatePagination(data, prev, curr) {
    if (prev) {
      removeAttribute(prev.button, ARIA_CURRENRT);
    }

    if (curr) {
      setAttribute(curr.button, ARIA_CURRENRT, true);
    }
  }
  /**
   * Initialize autoplay buttons.
   */


  function initAutoplay() {
    ['play', 'pause'].forEach(function (name) {
      var elm = Elements[name];

      if (elm) {
        if (!isButton(elm)) {
          setAttribute(elm, 'role', 'button');
        }

        setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
        setAttribute(elm, ARIA_LABEL, i18n[name]);
      }
    });
  }
  /**
   * Initialize navigation slider.
   * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
   *
   * @param {Splide} main - A main Splide instance.
   */


  function initNavigation(main) {
    Elements.each(function (Slide) {
      var slide = Slide.slide;
      var realIndex = Slide.realIndex;

      if (!isButton(slide)) {
        setAttribute(slide, 'role', 'button');
      }

      var slideIndex = realIndex > -1 ? realIndex : Slide.index;
      var label = sprintf(i18n.slideX, slideIndex + 1);
      var mainSlide = main.Components.Elements.getSlide(slideIndex);
      setAttribute(slide, ARIA_LABEL, label);

      if (mainSlide) {
        setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
      }
    });
  }
  /**
   * Update navigation attributes.
   *
   * @param {Object}  Slide  - A target Slide object.
   * @param {boolean} active - True if the slide is active or false if inactive.
   */


  function updateNavigation(_ref, active) {
    var slide = _ref.slide;

    if (active) {
      setAttribute(slide, ARIA_CURRENRT, true);
    } else {
      removeAttribute(slide, ARIA_CURRENRT);
    }
  }
  /**
   * Check if the given element is button or not.
   *
   * @param {Element} elm - An element to be checked.
   *
   * @return {boolean} - True if the given element is button.
   */


  function isButton(elm) {
    return elm.tagName === 'BUTTON';
  }

  return A11y;
});
;// CONCATENATED MODULE: ./src/js/components/sync/index.js
/**
 * The component for synchronizing a slider with another.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * The event name for sync.
 *
 * @type {string}
 */

var SYNC_EVENT = 'move.sync';
/**
 * The event names for click navigation.
 * @type {string}
 */

var CLICK_EVENTS = 'mouseup touchend';
/**
 * The keys for triggering the navigation button.
 *
 * @type {String[]}
 */

var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
/**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const sync = (function (Splide) {
  /**
   * Keep the sibling Splide instance.
   *
   * @type {Splide}
   */
  var sibling = Splide.sibling;
  /**
   * Whether the sibling slider is navigation or not.
   *
   * @type {Splide|boolean}
   */

  var isNavigation = sibling && sibling.options.isNavigation;
  /**
   * Layout component object.
   *
   * @type {Object}
   */

  var Sync = {
    /**
     * Required only when the sub slider is available.
     *
     * @type {boolean}
     */
    required: !!sibling,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      syncMain();
      syncSibling();

      if (isNavigation) {
        bind();
        Splide.on('refresh', function () {
          setTimeout(function () {
            bind();
            sibling.emit('navigation:updated', Splide);
          });
        });
      }
    },

    /**
     * Called after all components are mounted.
     */
    mounted: function mounted() {
      if (isNavigation) {
        sibling.emit('navigation:mounted', Splide);
      }
    }
  };
  /**
   * Listen the primary slider event to move secondary one.
   * Must unbind a handler at first to avoid infinite loop.
   */

  function syncMain() {
    Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
      syncSibling();
    });
  }
  /**
   * Listen the secondary slider event to move primary one.
   * Must unbind a handler at first to avoid infinite loop.
   */


  function syncSibling() {
    sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
      Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
      syncMain();
    });
  }
  /**
   * Listen some events on each slide.
   */


  function bind() {
    sibling.Components.Elements.each(function (_ref) {
      var slide = _ref.slide,
          index = _ref.index;

      /*
       * Listen mouseup and touchend events to handle click.
       */
      Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
        // Ignore a middle or right click.
        if (!e.button || e.button === 0) {
          moveSibling(index);
        }
      }, slide);
      /*
       * Subscribe keyup to handle Enter and Space key.
       * Note that Array.includes is not supported by IE.
       */

      Splide.off('keyup', slide).on('keyup', function (e) {
        if (TRIGGER_KEYS.indexOf(e.key) > -1) {
          e.preventDefault();
          moveSibling(index);
        }
      }, slide, {
        passive: false
      });
    });
  }
  /**
   * Move the sibling to the given index.
   * Need to check "IDLE" status because slides can be moving by Drag component.
   *
   * @param {number} index - Target index.
   */


  function moveSibling(index) {
    if (Splide.State.is(IDLE)) {
      sibling.go(index);
    }
  }

  return Sync;
});
;// CONCATENATED MODULE: ./src/js/components/breakpoints/index.js
/**
 * The component for updating options according to a current window width.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Interval time for throttle.
 *
 * @type {number}
 */

var THROTTLE = 50;
/**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */

/* harmony default export */ const breakpoints = (function (Splide) {
  /**
   * Store breakpoints.
   *
   * @type {Object|boolean}
   */
  var breakpoints = Splide.options.breakpoints;
  /**
   * The check function whose frequency of call is reduced.
   *
   * @type {Function}
   */

  var throttledCheck = throttle(check, THROTTLE);
  /**
   * Keep initial options.
   *
   * @type {Object}
   */

  var initialOptions;
  /**
   * An array containing objects of point and MediaQueryList.
   *
   * @type {Object[]}
   */

  var map = [];
  /**
   * Hold the previous breakpoint.
   *
   * @type {number|undefined}
   */

  var prevPoint;
  /**
   * Breakpoints component object.
   *
   * @type {Object}
   */

  var Breakpoints = {
    /**
     * Required only when the breakpoints definition is provided and browser supports matchMedia.
     *
     * @type {boolean}
     */
    required: breakpoints && matchMedia,

    /**
     * Called when the component is mounted.
     */
    mount: function mount() {
      map = Object.keys(breakpoints).sort(function (n, m) {
        return +n - +m;
      }).map(function (point) {
        return {
          point: point,
          mql: matchMedia("(max-width:" + point + "px)")
        };
      });
      /*
       * To keep monitoring resize event after destruction without "completely",
       * use native addEventListener instead of Splide.on.
       */

      this.destroy(true);
      addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

      initialOptions = Splide.options;
      check();
    },

    /**
     * Destroy.
     *
     * @param {boolean} completely - Whether to destroy Splide completely.
     */
    destroy: function destroy(completely) {
      if (completely) {
        removeEventListener('resize', throttledCheck);
      }
    }
  };
  /**
   * Check the breakpoint.
   */

  function check() {
    var point = getPoint();

    if (point !== prevPoint) {
      prevPoint = point;
      var State = Splide.State;
      var options = breakpoints[point] || initialOptions;
      var destroy = options.destroy;

      if (destroy) {
        Splide.options = initialOptions;
        Splide.destroy(destroy === 'completely');
      } else {
        if (State.is(DESTROYED)) {
          Splide.mount();
        }

        Splide.options = options;
      }
    }
  }
  /**
   * Return the breakpoint matching current window width.
   * Note that Array.prototype.find is not supported by IE.
   *
   * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
   */


  function getPoint() {
    var item = map.filter(function (item) {
      return item.mql.matches;
    })[0];
    return item ? item.point : -1;
  }

  return Breakpoints;
});
;// CONCATENATED MODULE: ./src/js/components/index.js
/**
 * Export components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

















var COMPLETE = {
  Options: options,
  Breakpoints: breakpoints,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Autoplay: autoplay,
  Cover: cover,
  Arrows: arrows,
  Pagination: pagination,
  LazyLoad: lazyload,
  Keyboard: keyboard,
  Sync: sync,
  A11y: a11y
};
var LIGHT = {
  Options: options,
  Controller: controller,
  Elements: components_elements,
  Track: track,
  Clones: clones,
  Layout: layout,
  Drag: drag,
  Click: click,
  Arrows: arrows,
  Pagination: pagination,
  A11y: a11y
};
;// CONCATENATED MODULE: ./build/module/module.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Export Splide class for import.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */


/**
 * Export Splide class for import from other projects.
 */

var module_Splide = /*#__PURE__*/function (_Core) {
  _inheritsLoose(Splide, _Core);

  function Splide(root, options) {
    return _Core.call(this, root, options, COMPLETE) || this;
  }

  return Splide;
}(Splide);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_139193__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_139193__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_139193__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_139193__.o(definition, key) && !__nested_webpack_require_139193__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_139193__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_139193__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_139193__(311);
/******/ })()
;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_fonts_OratorStd_otf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/fonts/OratorStd.otf */ "./src/fonts/OratorStd.otf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_src_fonts_OratorStd_otf__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Orator\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n}\nbody {\n  background: white;\n  height: 100%;\n  background-color: #2c2a2b;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./main.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,+DAAA;AACF;AACA;EACE,iBAAA;EACA,YAAA;EACA,yBAAA;AACF;;AACA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAEF","sourcesContent":["@font-face {\r\n  font-family: \"Orator\";\r\n  src: url(\"./src/fonts/OratorStd.otf\") format(\"opentype\");\r\n}\r\nbody {\r\n  background: white;\r\n  height: 100%;\r\n  background-color: #2c2a2b;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/galleryPage/gallery.module.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/galleryPage/gallery.module.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gallery-module__gallery-image-container--3mPYn {\n  background: #2c2a2b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.gallery-module__gallery-image-container--3mPYn .gallery-module__gallery-images--Av5Gh {\n  display: grid;\n  max-width: 100%;\n  padding: 100px;\n  gap: 30px;\n  grid-template-columns: minmax(0, 350px) minmax(0, 350px);\n  grid-template-rows: minmax(0, 180px) minmax(0, 180px) minmax(0, 180px);\n}\n.gallery-module__gallery-image-container--3mPYn .gallery-module__gallery-images--Av5Gh .gallery-module__gallery-property-image-container--1wmDT .gallery-module__gallery-property-image--20WAj {\n  object-fit: cover;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./gallery.module.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AACF;AACE;EACE,aAAA;EACA,eAAA;EACA,cAAA;EACA,SAAA;EAEA,wDAAA;EACA,sEAAA;AAAJ;AAEM;EACE,iBAAA;EAEA,WAAA;AADR","sourcesContent":[".gallery-image-container {\r\n  background: #2c2a2b;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .gallery-images {\r\n    display: grid;\r\n    max-width: 100%;\r\n    padding: 100px;\r\n    gap: 30px;\r\n\r\n    grid-template-columns: minmax(0, 350px) minmax(0, 350px);\r\n    grid-template-rows: minmax(0, 180px) minmax(0, 180px) minmax(0, 180px);\r\n    .gallery-property-image-container {\r\n      .gallery-property-image {\r\n        object-fit: cover;\r\n\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"gallery-image-container": "gallery-module__gallery-image-container--3mPYn",
	"gallery-images": "gallery-module__gallery-images--Av5Gh",
	"gallery-property-image-container": "gallery-module__gallery-property-image-container--1wmDT",
	"gallery-property-image": "gallery-module__gallery-property-image--20WAj"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/leftContainer/leftContainer.module.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/leftContainer/leftContainer.module.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".leftContainer-module__container--nQ_0d {\n  background-color: #2c2a2b;\n  height: 100vh;\n  width: 100%;\n}\n\n.leftContainer-module__content-container--2Wut- {\n  width: 100%;\n  height: 100%;\n}\n\n.leftContainer-module__logo-container--1Yezw {\n  display: flex;\n  height: 100%;\n  justify-content: flex-end;\n  align-items: center;\n}\n.leftContainer-module__logo-container--1Yezw .leftContainer-module__logo--2j3Rn {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./leftContainer.module.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,aAAA;EACA,WAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF;;AAGA;EACE,aAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;AAAF;AACE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AACJ","sourcesContent":[".container {\r\n  background-color: #2c2a2b;\r\n  height: 100vh;\r\n  width: 100%;\r\n\r\n}\r\n.content-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.logo-container {\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  .logo {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "leftContainer-module__container--nQ_0d",
	"content-container": "leftContainer-module__content-container--2Wut-",
	"logo-container": "leftContainer-module__logo-container--1Yezw",
	"logo": "leftContainer-module__logo--2j3Rn"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/miscStyles/pages.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/miscStyles/pages.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pages-module__hidden-logo-container-brown--2qjJ8 {\n  width: 550px;\n  position: absolute;\n  bottom: -200px;\n  left: 0;\n}\n.pages-module__hidden-logo-container-brown--2qjJ8 .pages-module__hidden-logo-brown--2llPV {\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n\n.pages-module__hidden-logo-container-grey--1PfD_ {\n  width: 550px;\n  position: absolute;\n  bottom: -200px;\n  right: 0;\n}\n.pages-module__hidden-logo-container-grey--1PfD_ .pages-module__hidden-logo-grey--1nesL {\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n\n.pages-module__expand-hover--1K0fQ {\n  overflow: hidden;\n}\n.pages-module__expand-hover--1K0fQ:hover .pages-module__image-page--3J1Fh {\n  transform: scale(1.5);\n  transition: all 0.7s ease;\n}\n\n.pages-module__play-button--1Rkst {\n  position: absolute;\n  width: 160px;\n  position: absolute;\n  top: 50%;\n  /* position the top  edge of the element at the middle of the parent */\n  left: 50%;\n  /* position the left edge of the element at the middle of the parent */\n  transform: translate(-50%, -50%);\n  height: auto;\n  z-index: 5;\n  object-fit: cover;\n}\n\n.pages-module__content-header--3KPQg {\n  font-size: 80px;\n  font-weight: 100;\n}\n\n.pages-module__blur--1bexO {\n  left: 0;\n  right: 0;\n  z-index: 0;\n  position: relative;\n}\n.pages-module__blur--1bexO::before {\n  position: absolute;\n  content: \"\";\n  height: 100%;\n  display: block;\n  left: 0;\n  right: 0;\n  top: 0;\n  backdrop-filter: blur(5px);\n}\n\n.pages-module__container--DoLEg {\n  background-color: #2c2a2b;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  position: relative;\n  color: white;\n  overflow: hidden;\n}\n.pages-module__container--DoLEg .pages-module__image-content--3C8cG {\n  width: 100vw;\n}\n.pages-module__container--DoLEg .pages-module__image-container--3eRUi {\n  height: 100%;\n}\n.pages-module__container--DoLEg .pages-module__image-container--3eRUi .pages-module__image-page--3J1Fh {\n  width: 100%;\n  object-fit: cover;\n  height: 100%;\n  transition: all 0.7s ease;\n}\n.pages-module__container--DoLEg .pages-module__content-text--18QtU {\n  font-weight: 300;\n  text-align: left;\n  font-size: 12px;\n  width: 100%;\n  word-spacing: 3px;\n  letter-spacing: 1.3px;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.pages-module__text-content--2BwcO {\n  padding: 0 250px;\n}\n\n.pages-module__brown-bg--Z7Cbw {\n  background-color: #a4632e;\n}", "",{"version":3,"sources":["webpack://./pages.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EAEA,iBAAA;AACJ;;AAEA;EACE,YAAA;EACA,kBAAA;EACA,cAAA;EACA,QAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EAEA,iBAAA;AACJ;;AAEA;EACE,gBAAA;AACF;AACI;EACE,qBAAA;EACA,yBAAA;AACN;;AAGA;EACE,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EAAU,sEAAA;EACV,SAAA;EAAW,sEAAA;EAEX,gCAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;AACF;;AACA;EACE,eAAA;EACA,gBAAA;AAEF;;AAAA;EACE,OAAA;EACA,QAAA;EACA,UAAA;EACA,kBAAA;AAGF;AAFE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EAEA,0BAAA;AAGJ;;AAAA;EACE,yBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;AAGF;AADE;EACE,YAAA;AAGJ;AADE;EACE,YAAA;AAGJ;AAFI;EACE,WAAA;EACA,iBAAA;EACA,YAAA;EACA,yBAAA;AAIN;AAAE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;EACA,qBAAA;EACA,gBAAA;EACA,iCAAA;AAEJ;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,yBAAA;AAGF","sourcesContent":[".hidden-logo-container-brown {\r\n  width: 550px;\r\n  position: absolute;\r\n  bottom: -200px;\r\n  left: 0;\r\n  .hidden-logo-brown {\r\n    width: 100%;\r\n    height: auto;\r\n\r\n    object-fit: cover;\r\n  }\r\n}\r\n.hidden-logo-container-grey {\r\n  width: 550px;\r\n  position: absolute;\r\n  bottom: -200px;\r\n  right: 0;\r\n  .hidden-logo-grey {\r\n    width: 100%;\r\n    height: auto;\r\n\r\n    object-fit: cover;\r\n  }\r\n}\r\n.expand-hover {\r\n  overflow: hidden;\r\n  &:hover {\r\n    .image-page {\r\n      transform: scale(1.5);\r\n      transition: all 0.7s ease;\r\n    }\r\n  }\r\n}\r\n.play-button {\r\n  position: absolute;\r\n  width: 160px;\r\n  position: absolute;\r\n  top: 50%; /* position the top  edge of the element at the middle of the parent */\r\n  left: 50%; /* position the left edge of the element at the middle of the parent */\r\n\r\n  transform: translate(-50%, -50%);\r\n  height: auto;\r\n  z-index: 5;\r\n  object-fit: cover;\r\n}\r\n.content-header {\r\n  font-size: 80px;\r\n  font-weight: 100;\r\n}\r\n.blur {\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 0;\r\n  position: relative;\r\n  &::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 100%;\r\n    display: block;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n\r\n    backdrop-filter: blur(5px);\r\n  }\r\n}\r\n.container {\r\n  background-color: #2c2a2b;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  position: relative;\r\n  color: white;\r\n  overflow: hidden;\r\n\r\n  .image-content {\r\n    width: 100vw;\r\n  }\r\n  .image-container {\r\n    height: 100%;\r\n    .image-page {\r\n      width: 100%;\r\n      object-fit: cover;\r\n      height: 100%;\r\n      transition: all 0.7s ease;\r\n    }\r\n  }\r\n\r\n  .content-text {\r\n    font-weight: 300;\r\n    text-align: left;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    word-spacing: 3px;\r\n    letter-spacing: 1.3px;\r\n    line-height: 1.6;\r\n    font-family: \"Roboto\", sans-serif;\r\n  }\r\n}\r\n.text-content {\r\n  padding: 0 250px;\r\n}\r\n.brown-bg {\r\n  background-color: #a4632e;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden-logo-container-brown": "pages-module__hidden-logo-container-brown--2qjJ8",
	"hidden-logo-brown": "pages-module__hidden-logo-brown--2llPV",
	"hidden-logo-container-grey": "pages-module__hidden-logo-container-grey--1PfD_",
	"hidden-logo-grey": "pages-module__hidden-logo-grey--1nesL",
	"expand-hover": "pages-module__expand-hover--1K0fQ",
	"image-page": "pages-module__image-page--3J1Fh",
	"play-button": "pages-module__play-button--1Rkst",
	"content-header": "pages-module__content-header--3KPQg",
	"blur": "pages-module__blur--1bexO",
	"container": "pages-module__container--DoLEg",
	"image-content": "pages-module__image-content--3C8cG",
	"image-container": "pages-module__image-container--3eRUi",
	"content-text": "pages-module__content-text--18QtU",
	"text-content": "pages-module__text-content--2BwcO",
	"brown-bg": "pages-module__brown-bg--Z7Cbw"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/modal.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/modal.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-module__wrapper--CU9Ig {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n}\n\n.modal-module__modal-container--2T_-E {\n  width: 1200px;\n}\n\n.modal-module__main-content--1WgHK {\n  width: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./modal.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,aAAA;EACA,MAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,oCAAA;EACA,eAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGC;EACG,WAAA;EACA,iBAAA;AAAJ","sourcesContent":[".wrapper {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  position: fixed;\r\n}\r\n\r\n.modal-container {\r\n  width: 1200px;\r\n \r\n}\r\n .main-content {\r\n    width: 100%;\r\n    object-fit: cover;\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "modal-module__wrapper--CU9Ig",
	"modal-container": "modal-module__modal-container--2T_-E",
	"main-content": "modal-module__main-content--1WgHK"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/burger.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/burger.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".burger-module__container--1SKpi {\n  width: 100%;\n  position: fixed;\n  z-index: 3000;\n}\n.burger-module__container--1SKpi .burger-module__content--2JUDS {\n  padding: 12px 15px;\n  display: flex;\n  z-index: 1;\n  align-items: center;\n  color: black;\n  width: 100%;\n  font-size: 14px;\n  justify-content: space-between;\n  position: relative;\n}\n.burger-module__container--1SKpi .burger-module__item-container--3UPig {\n  font-size: 14px;\n  display: flex;\n  font-weight: 600;\n  text-align: center;\n  justify-content: center;\n  text-transform: uppercase;\n  gap: 12px;\n  flex: 1;\n}\n.burger-module__container--1SKpi .burger-module__item-container--3UPig li {\n  white-space: nowrap;\n  display: list-item;\n  cursor: pointer;\n}\n.burger-module__container--1SKpi .burger-module__logo--1d4Zf {\n  object-position: center center;\n  max-width: 78px;\n  width: 100%;\n  display: block;\n  height: auto;\n  cursor: pointer;\n}\n.burger-module__container--1SKpi .burger-module__logo-container--3DE-t {\n  flex: 1;\n}\n.burger-module__container--1SKpi .burger-module__user-options-container--4RcyO {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: flex;\n  gap: 10px;\n  cursor: pointer;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.burger-module__burger-label--1yPc1 {\n  block-size: 18px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  inline-size: 18px;\n  font-size: 14px;\n  margin-left: 10px;\n  line-height: 21px;\n  block-size: calc(20px + 10px);\n  align-items: center;\n}\n.burger-module__burger-label--1yPc1 .burger-module__main-trigger-icon-container--2rTxr {\n  position: relative;\n  display: block;\n  block-size: 18px;\n  inline-size: 100%;\n}\n.burger-module__burger-label--1yPc1 .burger-module__main-trigger-icon-container--2rTxr .burger-module__main-trigger-icon--2LKnd {\n  background-color: white;\n  inline-size: 100%;\n  position: absolute;\n  display: block;\n  transition: all 300ms ease-in-out;\n  block-size: calc(20px / 10);\n  top: calc(36% + 2px);\n}\n.burger-module__burger-label--1yPc1 .burger-module__main-trigger-icon-container--2rTxr .burger-module__main-trigger-icon--2LKnd:before {\n  transition: all 300ms ease-in-out;\n  block-size: calc(20px / 10);\n  background-color: white;\n  content: \"\";\n  top: -5px;\n  display: block;\n  position: absolute;\n  inline-size: 100%;\n}\n.burger-module__burger-label--1yPc1 .burger-module__main-trigger-icon-container--2rTxr .burger-module__main-trigger-icon--2LKnd:after {\n  transition: all 300ms ease-in-out;\n  block-size: calc(20px / 10);\n  background-color: white;\n  content: \"\";\n  top: 5px;\n  display: block;\n  position: absolute;\n  inline-size: 100%;\n}\n\n.burger-module__burger-input--1S_Fa {\n  opacity: 1;\n  display: none;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__burger-label--1yPc1 {\n  z-index: 4;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__burger-label--1yPc1 .burger-module__main-trigger-icon--2LKnd {\n  transition: all 300ms ease-in-out;\n  background-color: transparent;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__burger-label--1yPc1 .burger-module__main-trigger-icon--2LKnd:before {\n  top: 0;\n  z-index: 4;\n  background-color: black;\n  transform: rotate(45deg);\n  transition: all 300ms ease-in-out;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__burger-label--1yPc1 .burger-module__main-trigger-icon--2LKnd:after {\n  top: 0;\n  z-index: 4;\n  background-color: black;\n  transform: rotate(-45deg);\n  transition: all 300ms ease-in-out;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__side-menu-container--2cIUs {\n  background-color: white;\n  height: 100vh;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  transition: all 400ms ease-in-out;\n  z-index: 3;\n  left: 0;\n  position: absolute;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7 {\n  padding: 40px 8px;\n  overflow-y: scroll;\n  height: 100%;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7::-webkit-scrollbar {\n  display: none;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7 li:nth-child(-n+7) {\n  font-size: 23px;\n  font-weight: 600;\n  display: flex;\n  text-transform: uppercase;\n  align-items: center;\n  color: black;\n  padding: 20px 110px 20px 20px;\n  border-bottom: 1px solid #d0d1d2;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7 li:nth-child(8) {\n  display: flex;\n  height: 40%;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n}\n.burger-module__burger-input--1S_Fa:checked ~ .burger-module__header-mask--L9vH4 {\n  position: fixed;\n  block-size: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  bottom: 0;\n  inline-size: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.burger-module__hide-scroll--2iIe9 {\n  overflow: hidden;\n}\n\n.burger-module__side-menu-container--2cIUs {\n  background-color: white;\n  height: 100vh;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  transition: all 400ms ease-in-out;\n  z-index: 3;\n  left: -600px;\n  position: absolute;\n}\n.burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7 {\n  padding: 40px 8px;\n  overflow-y: scroll;\n  height: 100%;\n}\n.burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7::-webkit-scrollbar {\n  display: none;\n}\n.burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7 li:nth-child(-n+7) {\n  font-size: 23px;\n  font-weight: 600;\n  display: flex;\n  text-transform: uppercase;\n  align-items: center;\n  color: black;\n  padding: 20px 110px 20px 20px;\n  border-bottom: 1px solid #d0d1d2;\n}\n.burger-module__side-menu-container--2cIUs .burger-module__side-menu-item-container--3mnv7 li:nth-child(8) {\n  display: flex;\n  height: 40%;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n}\n\n.burger-module__sidebar-logo-container--B6_lw {\n  width: 240px;\n  display: flex;\n  align-items: flex-end;\n  padding: 60px 20px 20px 20px;\n}\n.burger-module__sidebar-logo-container--B6_lw .burger-module__sidebar-logo--3QJ8t {\n  width: 100%;\n  display: block;\n  height: auto;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./burger.module.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin side-menu-container($leftValue) {\r\n  background-color: white;\r\n  height: 100vh;\r\n\r\n  bottom: 0;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transition: all 400ms ease-in-out;\r\n  z-index: 3;\r\n  left: $leftValue;\r\n\r\n  position: absolute;\r\n  .side-menu-item-container {\r\n    padding: 40px 8px;\r\n    overflow-y: scroll;\r\n    height: 100%;\r\n    &::-webkit-scrollbar {\r\n      display: none;\r\n    }\r\n    li:nth-child(-n + 7) {\r\n      font-size: 23px;\r\n      font-weight: 600;\r\n      display: flex;\r\n      text-transform: uppercase;\r\n      align-items: center;\r\n      color: black;\r\n\r\n      padding: 20px 110px 20px 20px;\r\n\r\n      border-bottom: 1px solid #d0d1d2;\r\n    }\r\n    li:nth-child(8) {\r\n      display: flex;\r\n      height: 40%;\r\n      align-items: flex-end;\r\n      justify-content: center;\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n.container {\r\n  width: 100%;\r\n  position: fixed;\r\n  z-index: 3000;\r\n  .content {\r\n    padding: 12px 15px;\r\n    display: flex;\r\n    z-index: 1;\r\n    align-items: center;\r\n    color: black;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    justify-content: space-between;\r\n    position: relative;\r\n  }\r\n  .item-container {\r\n    font-size: 14px;\r\n    display: flex;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n\r\n    gap: 12px;\r\n    flex: 1;\r\n\r\n    li {\r\n      white-space: nowrap;\r\n      display: list-item;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  .logo {\r\n    object-position: center center;\r\n    max-width: 78px;\r\n    width: 100%;\r\n    display: block;\r\n    height: auto;\r\n    cursor: pointer;\r\n  }\r\n  .logo-container {\r\n    flex: 1;\r\n  }\r\n  .user-options-container {\r\n    flex: 1;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n}\r\n.burger-label {\r\n  block-size: 18px;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  inline-size: 18px;\r\n  font-size: 14px;\r\n  margin-left: 10px;\r\n  line-height: 21px;\r\n  block-size: calc(20px + 10px);\r\n  align-items: center;\r\n  .main-trigger-icon-container {\r\n    position: relative;\r\n    display: block;\r\n    block-size: 18px;\r\n    inline-size: 100%;\r\n    .main-trigger-icon {\r\n      background-color: white;\r\n      inline-size: 100%;\r\n      position: absolute;\r\n      display: block;\r\n      transition: all 300ms ease-in-out;\r\n      block-size: calc(20px / 10);\r\n      top: calc(36% + 2px);\r\n\r\n      &:before {\r\n        transition: all 300ms ease-in-out;\r\n        block-size: calc(20px / 10);\r\n        background-color: white;\r\n        content: \"\";\r\n        top: -5px;\r\n        display: block;\r\n        position: absolute;\r\n        inline-size: 100%;\r\n      }\r\n      &:after {\r\n        transition: all 300ms ease-in-out;\r\n        block-size: calc(20px / 10);\r\n        background-color: white;\r\n        content: \"\";\r\n        top: 5px;\r\n        display: block;\r\n        position: absolute;\r\n        inline-size: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n.burger-input {\r\n  opacity: 1;\r\n  display: none;\r\n  &:checked ~ .burger-label {\r\n    z-index: 4;\r\n\r\n    .main-trigger-icon {\r\n      transition: all 300ms ease-in-out;\r\n      background-color: transparent;\r\n\r\n      &:before {\r\n        top: 0;\r\n        z-index: 4;\r\n        background-color: black;\r\n        transform: rotate(45deg);\r\n        transition: all 300ms ease-in-out;\r\n      }\r\n      &:after {\r\n        top: 0;\r\n        z-index: 4;\r\n        background-color: black;\r\n        transform: rotate(-45deg);\r\n        transition: all 300ms ease-in-out;\r\n      }\r\n    }\r\n  }\r\n\r\n  &:checked ~ .side-menu-container {\r\n    @include side-menu-container(0);\r\n  }\r\n  &:checked ~ .header-mask {\r\n    position: fixed;\r\n    block-size: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    bottom: 0;\r\n    inline-size: 100%;\r\n\r\n    // pointer-events: none;\r\n    // cursor: not-allowed;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n}\r\n.hide-scroll {\r\n  overflow: hidden;\r\n}\r\n.side-menu-container {\r\n  @include side-menu-container(-600px);\r\n}\r\n.sidebar-logo-container {\r\n  width: 240px;\r\n  display: flex;\r\n  align-items: flex-end;\r\n\r\n  padding: 60px 20px 20px 20px;\r\n\r\n  .sidebar-logo {\r\n    width: 100%;\r\n    display: block;\r\n    height: auto;\r\n    object-fit: cover;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "burger-module__container--1SKpi",
	"content": "burger-module__content--2JUDS",
	"item-container": "burger-module__item-container--3UPig",
	"logo": "burger-module__logo--1d4Zf",
	"logo-container": "burger-module__logo-container--3DE-t",
	"user-options-container": "burger-module__user-options-container--4RcyO",
	"burger-label": "burger-module__burger-label--1yPc1",
	"main-trigger-icon-container": "burger-module__main-trigger-icon-container--2rTxr",
	"main-trigger-icon": "burger-module__main-trigger-icon--2LKnd",
	"burger-input": "burger-module__burger-input--1S_Fa",
	"side-menu-container": "burger-module__side-menu-container--2cIUs",
	"side-menu-item-container": "burger-module__side-menu-item-container--3mnv7",
	"header-mask": "burger-module__header-mask--L9vH4",
	"hide-scroll": "burger-module__hide-scroll--2iIe9",
	"sidebar-logo-container": "burger-module__sidebar-logo-container--B6_lw",
	"sidebar-logo": "burger-module__sidebar-logo--3QJ8t"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar-module__wrapper--u8_B5 {\n  width: 100vw;\n  position: fixed;\n  z-index: 4;\n}\n\n.navbar-module__container--19Kbc {\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Orator\";\n  padding: 20px 40px;\n  font-weight: 100;\n}\n.navbar-module__container--19Kbc .navbar-module__left-container--7WxRu {\n  display: flex;\n  font-size: 20px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  align-items: center;\n  color: white;\n  gap: 9px;\n}\n.navbar-module__container--19Kbc .navbar-module__logo-container--13fOX {\n  width: 150px;\n  height: auto;\n}\n.navbar-module__container--19Kbc .navbar-module__logo-container--13fOX .navbar-module__logo--3mxC_ {\n  object-fit: cover;\n  height: auto;\n  width: 100%;\n}\n\n.navbar-module__menu-label--3I1M1 {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./navbar.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,eAAA;EACA,UAAA;AACF;;AACA;EACE,aAAA;EACA,8BAAA;EAEA,qBAAA;EACA,kBAAA;EAEA,gBAAA;AAAF;AAEE;EACE,aAAA;EACA,eAAA;EAEA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,QAAA;AADJ;AAGE;EACE,YAAA;EACA,YAAA;AADJ;AAEI;EACE,iBAAA;EACA,YAAA;EACA,WAAA;AAAN;;AAIA;EACE,eAAA;AADF","sourcesContent":[".wrapper {\r\n  width: 100vw;\r\n  position: fixed;\r\n  z-index: 4;\r\n}\r\n.container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  font-family: \"Orator\";\r\n  padding: 20px 40px;\r\n\r\n  font-weight: 100;\r\n\r\n  .left-container {\r\n    display: flex;\r\n    font-size: 20px;\r\n\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    align-items: center;\r\n    color: white;\r\n    gap: 9px;\r\n  }\r\n  .logo-container {\r\n    width: 150px;\r\n    height: auto;\r\n    .logo {\r\n      object-fit: cover;\r\n      height: auto;\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n.menu-label {\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "navbar-module__wrapper--u8_B5",
	"container": "navbar-module__container--19Kbc",
	"left-container": "navbar-module__left-container--7WxRu",
	"logo-container": "navbar-module__logo-container--13fOX",
	"logo": "navbar-module__logo--3mxC_",
	"menu-label": "navbar-module__menu-label--3I1M1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rightContainer/rightContainer.module.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rightContainer/rightContainer.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".rightContainer-module__container--XEeIe {\n  background-color: #2c2a2b;\n  height: 100%;\n  width: 100%;\n}\n\n.rightContainer-module__discover-container--QJ6Yz {\n  background-color: #2c2a2b;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  color: white;\n  padding: 0 250px;\n}\n.rightContainer-module__discover-container--QJ6Yz .rightContainer-module__discover-header--3_w82 {\n  font-size: 80px;\n  font-weight: 100;\n}\n.rightContainer-module__discover-container--QJ6Yz .rightContainer-module__discover-text--3m3tc {\n  font-weight: 300;\n  text-align: left;\n  font-size: 12px;\n  width: 100%;\n  word-spacing: 3px;\n  letter-spacing: 1.3px;\n  line-height: 1.6;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.rightContainer-module__logo-container--21pEv {\n  display: flex;\n  height: 100%;\n  justify-content: flex-start;\n  align-items: center;\n}\n.rightContainer-module__logo-container--21pEv .rightContainer-module__logo--25fFx {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./rightContainer.module.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;AACF;;AACA;EACE,yBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EAEA,YAAA;EACA,gBAAA;AACF;AAAE;EACE,eAAA;EACA,gBAAA;AAEJ;AAAE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;EACA,qBAAA;EACA,gBAAA;EACA,iCAAA;AAEJ;;AACA;EACE,aAAA;EACA,YAAA;EACA,2BAAA;EACA,mBAAA;AAEF;AADE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAGJ","sourcesContent":[".container {\r\n  background-color: #2c2a2b;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.discover-container {\r\n  background-color: #2c2a2b;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 30px;\r\n\r\n  color: white;\r\n  padding: 0 250px;\r\n  .discover-header {\r\n    font-size: 80px;\r\n    font-weight: 100;\r\n  }\r\n  .discover-text {\r\n    font-weight: 300;\r\n    text-align: left;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    word-spacing: 3px;\r\n    letter-spacing: 1.3px;\r\n    line-height: 1.6;\r\n    font-family: \"Roboto\", sans-serif;\r\n  }\r\n}\r\n.logo-container {\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  .logo {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "rightContainer-module__container--XEeIe",
	"discover-container": "rightContainer-module__discover-container--QJ6Yz",
	"discover-header": "rightContainer-module__discover-header--3_w82",
	"discover-text": "rightContainer-module__discover-text--3m3tc",
	"logo-container": "rightContainer-module__logo-container--21pEv",
	"logo": "rightContainer-module__logo--25fFx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/socials/socials.module.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/socials/socials.module.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".socials-module__container--1YVEX {\n  position: fixed;\n  z-index: 3;\n  right: 40px;\n  bottom: 25px;\n  width: 15px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://./socials.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EAEA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,iBAAA;AADF","sourcesContent":[".container {\r\n  position: fixed;\r\n  z-index: 3;\r\n  right: 40px;\r\n  bottom: 25px;\r\n\r\n  width: 15px;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 18px;\r\n\r\n  object-fit: cover;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "socials-module__container--1YVEX"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/wrapper/wrapper.module.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/wrapper/wrapper.module.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Orator\";\n}\n\nbody {\n  overflow-y: hidden;\n  width: 100%;\n  height: 100vh;\n}\n\n.wrapper-module__scroll-wrapper--AWVdk {\n  display: flex;\n  height: 100vh;\n}\n\n@keyframes wrapper-module__mover--3hIB4 {\n  0% {\n    transform: translateY(0) rotate(45deg);\n  }\n  100% {\n    transform: translateY(-10px) rotate(45deg);\n  }\n}\n.wrapper-module__arrow-container--1wF1D .wrapper-module__arrow--2i_qB {\n  position: absolute;\n  bottom: 30px;\n  left: 49.3%;\n  animation: wrapper-module__mover--3hIB4 1s infinite alternate;\n  transform: translate(-50%);\n  border: solid white;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 10px;\n}\n\n.wrapper-module__fixed-socials-container--3AqyZ {\n  position: fixed;\n  z-index: 3;\n  right: 40px;\n  bottom: 25px;\n  width: 15px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  object-fit: cover;\n}\n\n.wrapper-module__gallery-image-container--1u82P {\n  background: #2c2a2b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.wrapper-module__gallery-image-container--1u82P .wrapper-module__gallery-images--A243r {\n  display: grid;\n  max-width: 100%;\n  gap: 80px;\n  grid-template-columns: minmax(0, 350px) minmax(0, 350px);\n  grid-template-rows: minmax(0, 180px) minmax(0, 180px) minmax(0, 180px);\n}\n.wrapper-module__gallery-image-container--1u82P .wrapper-module__gallery-images--A243r img {\n  object-fit: cover;\n  width: 100%;\n}\n\n.wrapper-module__left-container--2JKnQ {\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50vw;\n  transition: all 1s ease-out;\n}\n\n.wrapper-module__right-container--PM2Dt {\n  height: 100vh;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50vw;\n  transition: all 1s ease-out;\n}", "",{"version":3,"sources":["webpack://./wrapper.module.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;EACA,qBAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;EACA,aAAA;AACF;;AAEA;EACE,aAAA;EACA,aAAA;AACF;;AAGA;EACE;IACE,sCAAA;EAAF;EAEA;IACE,0CAAA;EAAF;AACF;AAGE;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,6DAAA;EACA,0BAAA;EAEA,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,aApBO;AAkBX;;AAKA;EACE,eAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EAEA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,iBAAA;AAJF;;AAMA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAHF;AAKE;EACE,aAAA;EACA,eAAA;EAEA,SAAA;EAEA,wDAAA;EACA,sEAAA;AALJ;AAMI;EACE,iBAAA;EAEA,WAAA;AALN;;AASA;EACE,aAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,2BAAA;AANF;;AAQA;EACE,aAAA;EACA,kBAAA;EACA,QAAA;EACA,MAAA;EACA,WAAA;EACA,2BAAA;AALF","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Orator\";\r\n}\r\n\r\nbody {\r\n  overflow-y: hidden;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.scroll-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n}\r\n\r\n$variable: 10px;\r\n@keyframes mover {\r\n  0% {\r\n    transform: translateY(0) rotate(45deg);\r\n  }\r\n  100% {\r\n    transform: translateY(-10px) rotate(45deg);\r\n  }\r\n}\r\n.arrow-container {\r\n  .arrow {\r\n    position: absolute;\r\n    bottom: 30px;\r\n    left: 49.3%;\r\n    animation: mover 1s infinite alternate;\r\n    transform: translate(-50%);\r\n\r\n    border: solid white;\r\n    border-width: 0 5px 5px 0;\r\n    display: inline-block;\r\n    padding: $variable;\r\n  }\r\n}\r\n.fixed-socials-container {\r\n  position: fixed;\r\n  z-index: 3;\r\n  right: 40px;\r\n  bottom: 25px;\r\n\r\n  width: 15px;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 18px;\r\n\r\n  object-fit: cover;\r\n}\r\n.gallery-image-container {\r\n  background: #2c2a2b;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .gallery-images {\r\n    display: grid;\r\n    max-width: 100%;\r\n\r\n    gap: 80px;\r\n\r\n    grid-template-columns: minmax(0, 350px) minmax(0, 350px);\r\n    grid-template-rows: minmax(0, 180px) minmax(0, 180px) minmax(0, 180px);\r\n    img {\r\n      object-fit: cover;\r\n\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n.left-container {\r\n  height: 100vh;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 50vw;\r\n  transition: all 1s ease-out;\r\n}\r\n.right-container {\r\n  height: 100vh;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 50vw;\r\n  transition: all 1s ease-out;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"scroll-wrapper": "wrapper-module__scroll-wrapper--AWVdk",
	"arrow-container": "wrapper-module__arrow-container--1wF1D",
	"arrow": "wrapper-module__arrow--2i_qB",
	"mover": "wrapper-module__mover--3hIB4",
	"fixed-socials-container": "wrapper-module__fixed-socials-container--3AqyZ",
	"gallery-image-container": "wrapper-module__gallery-image-container--1u82P",
	"gallery-images": "wrapper-module__gallery-images--A243r",
	"left-container": "wrapper-module__left-container--2JKnQ",
	"right-container": "wrapper-module__right-container--PM2Dt"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/galleryPage/gallery.module.scss":
/*!********************************************************!*\
  !*** ./src/components/galleryPage/gallery.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_gallery_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./gallery.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/galleryPage/gallery.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_gallery_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_gallery_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/leftContainer/leftContainer.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/leftContainer/leftContainer.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_leftContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./leftContainer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/leftContainer/leftContainer.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_leftContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_leftContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/miscStyles/pages.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/miscStyles/pages.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./pages.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/miscStyles/pages.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/modal/modal.module.scss":
/*!************************************************!*\
  !*** ./src/components/modal/modal.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./modal.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/modal.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/navbar/burger.module.scss":
/*!**************************************************!*\
  !*** ./src/components/navbar/burger.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_burger_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./burger.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/burger.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_burger_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_burger_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/navbar/navbar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/navbar/navbar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./navbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/rightContainer/rightContainer.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/rightContainer/rightContainer.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_rightContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./rightContainer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rightContainer/rightContainer.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_rightContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_rightContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/socials/socials.module.scss":
/*!****************************************************!*\
  !*** ./src/components/socials/socials.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_socials_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./socials.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/socials/socials.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_socials_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_socials_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/wrapper/wrapper.module.scss":
/*!****************************************************!*\
  !*** ./src/components/wrapper/wrapper.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./wrapper.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/wrapper/wrapper.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},s=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",b=function(t,n){return t.getAttribute(g+n)},p=function(t){return b(t,v)},h=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i)}(t,0,n)},m=function(t){return h(t,null)},E=function(t){return null===p(t)},y=function(t){return p(t)===_},I=[l,u,d,f],A=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},L=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},w=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(t){return t.llTempImage},O=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},x=function(t,n){t&&(t.loadingCount+=n)},z=function(t,n){t&&(t.toLoadCount=n)},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e)},M=function(t,n){t.removeAttribute(n)},R=function(t){return!!t.llOriginalAttrs},T=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},G=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes)}},D=function(t,n){N(t,"sizes",b(t,n.data_sizes)),N(t,"srcset",b(t,n.data_srcset)),N(t,"src",b(t,n.data_src))},V=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes")},j=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n)},F={IMG:function(t,n){j(t,(function(t){T(t),D(t,n)})),T(t),D(t,n)},IFRAME:function(t,n){N(t,"src",b(t,n.data_src))},VIDEO:function(t,n){!function(t,e){C(t).forEach((function(t){N(t,"src",b(t,n.data_src))}))}(t),N(t,"poster",b(t,n.data_poster)),N(t,"src",b(t,n.data_src)),t.load()}},P=function(t,n){var e=F[t.tagName];e&&e(t,n)},S=function(t,n,e){x(e,1),L(t,n.class_loading),h(t,l),A(n.callback_loading,t,e)},U=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||A(t.callback_finish,n)},q=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},H=function(t,n,e){t.removeEventListener(n,e)},B=function(t){return!!t.llEvLisnrs},J=function(t){if(B(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];H(t,e,i)}delete t.llEvLisnrs}},K=function(t,n,e){!function(t){delete t.llTempImage}(t),x(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),w(t,n.class_loading),n.unobserve_completed&&O(t,e)},Q=function(t,n,e){var i=k(t)||t;B(i)||function(t,n,e){B(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,n),q(t,"error",e)}(i,(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_loaded),h(n,u),A(e.callback_loaded,n,i),o||$(e,i)}(0,t,n,e),J(i)}),(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_error),h(n,f),A(e.callback_error,n,i),o||$(e,i)}(0,t,n,e),J(i)}))},W=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),Q(t,n,e),function(t,n,e){var i=b(t,n.data_bg),o=b(t,n.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),k(t).setAttribute("src",a),S(t,n,e))}(t,n,e),function(t,n,e){var i=b(t,n.data_bg_multi),o=b(t,n.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,function(t,n,e){L(t,n.class_applied),h(t,d),n.unobserve_completed&&O(t,n),A(n.callback_applied,t,e)}(t,n,e))}(t,n,e)},X=function(t,n,e){!function(t){return U.indexOf(t.tagName)>-1}(t)?W(t,n,e):function(t,n,e){Q(t,n,e),P(t,n),S(t,n,e)}(t,n,e)},Y=["IMG","IFRAME","VIDEO"],Z=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},tt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){var o=function(t){return I.indexOf(p(t))>=0}(t);h(t,"entered"),L(t,e.class_entered),w(t,e.class_exited),function(t,n,e){n.unobserve_entered&&O(t,e)}(t,e,i),A(e.callback_enter,t,n,i),o||X(t,e,i)}(t.target,t,n,e):function(t,n,e,i){E(t)||(L(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return p(t)===l}(t)&&"IMG"===t.tagName&&(J(t),function(t){j(t,(function(t){V(t)})),V(t)}(t),function(t){j(t,(function(t){G(t)})),G(t)}(t),w(t,e.class_loading),x(i,-1),m(t),A(e.callback_cancel,t,n,i))}(t,n,e,i),A(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},nt=function(t){return Array.prototype.slice.call(t)},et=function(t){return t.container.querySelectorAll(t.elements_selector)},it=function(t){return function(t){return p(t)===f}(t)},ot=function(t,n){return function(t){return nt(t).filter(E)}(t||et(n))},rt=function(t,e){var o=c(t);this._settings=o,this.loadingCount=0,function(t,n){i&&!Z(t)&&(n._observer=new IntersectionObserver((function(e){tt(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(o,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=et(t),nt(e).filter(it)).forEach((function(n){w(n,t.class_error),m(n)})),n.update()}(t,e)}))}(o,this),this.update(e)};return rt.prototype={update:function(t){var n,o,r=this._settings,a=ot(t,r);z(this,a.length),!e&&i?Z(r)?function(t,n,e){t.forEach((function(t){-1!==Y.indexOf(t.tagName)&&function(t,n,e){t.setAttribute("loading","lazy"),Q(t,n,e),P(t,n),h(t,_)}(t,n,e)})),z(e,0)}(a,r,this):(o=a,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,o)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),et(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;ot(t,e).forEach((function(t){O(t,n),X(t,e,n)}))}},rt.load=function(t,n){var e=c(n);X(t,e)},rt.resetStatus=function(t){m(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n)}(rt,window.lazyLoadOptions),rt}));


/***/ }),

/***/ "./src/components/galleryPage/gallery.js":
/*!***********************************************!*\
  !*** ./src/components/galleryPage/gallery.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGallery": () => (/* binding */ renderGallery)
/* harmony export */ });
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.module.scss */ "./src/components/galleryPage/gallery.module.scss");


const element = document.createElement("div");
const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(
  __webpack_require__("./src/components/galleryPage/images/properyImages sync \\.(png|jpe?g|svg)$")
);

Object.entries(cache).map((module) => module[1].default);

const renderGallery = (pos) => {
  if (pos === "l") {
    element.innerHTML = /* HTML */ `
      <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-image-container"]}>
        <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-images"]}>
          <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
              data-src=${cache["./1.jpg"]}
              alt=""
            />
          </div>
          <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
              data-src=${cache["./2.jpg"]}
              alt=""
            />
          </div>
          <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
              data-src=${cache["./5.jpg"]}
              alt=""
            />
          </div>
          <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
              data-src=${cache["./6.jpg"]}
              alt=""
            />
          </div>
          <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
              data-src=${cache["./9.jpg"]}
              alt=""
            />
          </div>
          <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
              data-src=${cache["./10.jpg"]}
              alt=""
            />
          </div>
        </div>
      </div>
    `;
    return element.firstElementChild;
  }
  element.innerHTML = /* HTML */ `
    <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-image-container"]}>
      <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-images"]}>
        <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
            data-src=${cache["./3.jpg"]}
            alt=""
          />
        </div>
        <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
            data-src=${cache["./4.jpg"]}
            alt=""
          />
        </div>
        <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
            data-src=${cache["./7.jpg"]}
            alt=""
          />
        </div>
        <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
            data-src=${cache["./9.jpg"]}
            alt=""
          />
        </div>
        <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
            data-src=${cache["./11.jpg"]}
            alt=""
          />
        </div>
        <div class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${_gallery_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["gallery-property-image"]}
            data-src=${cache["./12.jpg"]}
            alt=""
          />
        </div>
      </div>
    </div>
  `;
  return element.firstElementChild;
};


/***/ }),

/***/ "./src/components/galleryPage/images/properyImages sync \\.(png|jpe?g|svg)$":
/*!***********************************************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpg": "./src/components/galleryPage/images/properyImages/1.jpg",
	"./10.jpg": "./src/components/galleryPage/images/properyImages/10.jpg",
	"./11.jpg": "./src/components/galleryPage/images/properyImages/11.jpg",
	"./12.jpg": "./src/components/galleryPage/images/properyImages/12.jpg",
	"./2.jpg": "./src/components/galleryPage/images/properyImages/2.jpg",
	"./3.jpg": "./src/components/galleryPage/images/properyImages/3.jpg",
	"./4.jpg": "./src/components/galleryPage/images/properyImages/4.jpg",
	"./5.jpg": "./src/components/galleryPage/images/properyImages/5.jpg",
	"./6.jpg": "./src/components/galleryPage/images/properyImages/6.jpg",
	"./7.jpg": "./src/components/galleryPage/images/properyImages/7.jpg",
	"./8.jpg": "./src/components/galleryPage/images/properyImages/8.jpg",
	"./9.jpg": "./src/components/galleryPage/images/properyImages/9.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/galleryPage/images/properyImages sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/components/leftContainer/leftContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/leftContainer/leftContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLeftEle": () => (/* binding */ createLeftEle),
/* harmony export */   "leftContainer": () => (/* binding */ leftContainer)
/* harmony export */ });
/* harmony import */ var _leftContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftContainer.module.scss */ "./src/components/leftContainer/leftContainer.module.scss");
/* harmony import */ var _images_Maliview_Left_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Maliview Left Logo.png */ "./src/components/leftContainer/images/Maliview Left Logo.png");
/* harmony import */ var _images_Malibu_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Malibu.jpg */ "./src/components/leftContainer/images/Malibu.jpg");
/* harmony import */ var _galleryPage_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../galleryPage/gallery */ "./src/components/galleryPage/gallery.js");
/* harmony import */ var _images_mulholland_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mulholland.jpg */ "./src/components/leftContainer/images/mulholland.jpg");
/* harmony import */ var _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../miscStyles/pages.module.scss */ "./src/components/miscStyles/pages.module.scss");
/* harmony import */ var _images_hiddenLogoBrown_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/hiddenLogoBrown.png */ "./src/components/leftContainer/images/hiddenLogoBrown.png");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_7__);









const leftContainer = [];

function createLeftEle(innerEle, classNameArr) {
  const container = document.createElement("div");

  const html = /* HTML */ ` <div class="">${innerEle}</div>`;

  container.innerHTML = html;

  classNameArr.forEach((name) => {
    container.firstElementChild.classList.add(name);
  });
  leftContainer.push(container.firstElementChild.outerHTML);
}
createLeftEle(
  /* HTML */ ` <span class=${_leftContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["logo-container"]}>
    <img src=${_images_Maliview_Left_Logo_png__WEBPACK_IMPORTED_MODULE_1__} alt="" />
  </span>`,
  [_leftContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container]
);
createLeftEle(
  /* HTML */ ` <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default.container}>
    <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["image-container"]}>
      <img class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["image-page"]} src=${_images_Malibu_jpg__WEBPACK_IMPORTED_MODULE_2__} alt="" />
    </div>
  </div>`,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["image-content"]]
);
createLeftEle(
  /* HTML */ `<div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["hidden-logo-container-brown"]}>
      <div class="hidden-logo-container">
        <img
          data-id="lazy"
          data-src=${_images_hiddenLogoBrown_png__WEBPACK_IMPORTED_MODULE_6__}
          class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["hidden-logo-brown"]}
          alt=""
        />
      </div>
    </div>
    <h5 class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["content-header"]}>discover</h5>
    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["content-text"]}>
      Maliview Estates. This unique architectural design by Amit Apel Design,
      Inc. presents a style of its own. The Worldwide architect has received
      multiple awards and Amit Apel, Inc. was most recently recognized in its
      hometown as one of the best firms by Home Builder Digest.
    </p>

    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["content-text"]}>
      The villa will have open space plan with high ceilings with a touch of
      nature coming indoors. The home includes 4 perfectly placed bedrooms with
      views to admire the scenery as well as 4.5 bathrooms. All of the interior
      will be featuring custom interior design by Amit Apel Design, Inc. From an
      infinity pool you will be enjoying the ocean in the horizon, the view of
      Santa Monica Mountains, and overwhelming sunrises, and sunsets.
    </p>

    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["content-text"]}>
      Currently under construction with a completion date early fall. Please
      note that both exterior and interior paint colors can be changed.
    </p>`,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["text-content"], _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["brown-bg"]]
);
createLeftEle(
  /* HTML */ ` <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default.container}>
    <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["image-container"]}>
      <img
        class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["image-page"]}
        data-id="lazy"
        data-src=${_images_mulholland_jpg__WEBPACK_IMPORTED_MODULE_4__}
        alt=""
      />
    </div>
  </div>`,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["image-content"]]
);
createLeftEle(
  /* HTML */ `<div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["hidden-logo-container-brown"]}>
      <div class="hidden-logo-container">
        <img
          src=${_images_hiddenLogoBrown_png__WEBPACK_IMPORTED_MODULE_6__}
          class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["hidden-logo-brown"]}
          alt=""
        />
      </div>
    </div>
    <h5 class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["content-header"]}>video render</h5>
    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["content-text"]}>
      Take a dive into Maliview with our 3D rendering. To get a feeling of the
      completed project and vision, please click on the video to the right.
    </p> `,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["text-content"], _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_5__.default["brown-bg"]]
);
const gallery = (0,_galleryPage_gallery__WEBPACK_IMPORTED_MODULE_3__.renderGallery)("l");
createLeftEle(/* HTML */ `${gallery.outerHTML}`, [_leftContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container]);



/***/ }),

/***/ "./src/components/modal/attachModalListeners.js":
/*!******************************************************!*\
  !*** ./src/components/modal/attachModalListeners.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/components/modal/modal.js");
/* harmony import */ var _navbar_burger_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/burger.module.scss */ "./src/components/navbar/burger.module.scss");


const videoTrigger = document.getElementById("video-modal-trigger");

document.body.addEventListener("click", function (e) {
  
  if (e.target === videoTrigger || e.target.name === "play-button") {
    
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.renderModal)();
  }
  if (e.target.id === "wrapper-trigger") {
    
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
  }
  if (e.target.name === "gallery-image-container") {
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.renderModal)("gallery", e.target.src);
  }
  let targetElement = document.querySelector(`input.${_navbar_burger_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["burger-input"]}`);
  
  if (e.target.getAttribute("data-id") === "header-mask") {
    
    targetElement.checked = false;
  }
});


/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderModal": () => (/* binding */ renderModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.module.scss */ "./src/components/modal/modal.module.scss");


const element = document.createElement("div");

const renderModal = (type, image) => {
  const mainEle =
    type === "gallery"
      ? `
      <img class=${_modal_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["main-content"]} src=${image} alt="" />
    `
      : `<iframe
        width="100%"
        height="611"
        src="https://www.youtube.com/embed/nTS10ZQM5Ms?enablejsapi=1&version=3&playerapiid=ytplayer"
        title="YouTube video player"
        id="main-video-player"
        allowfullscreen
      ></iframe>`;
  element.innerHTML = /* HTML */ `
    <div id="wrapper-trigger" class=${_modal_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.wrapper}>
      <div id="modal-backdrop" class=${_modal_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["modal-container"]}>
        ${mainEle}
      </div>
    </div>
  `;
  document.body.appendChild(element.firstElementChild);
};
function closeModal() {
  const eleToRemove = document.getElementById("wrapper-trigger");
  
  document.body.removeChild(eleToRemove);
}


/***/ }),

/***/ "./src/components/navbar/burgerMenu.js":
/*!*********************************************!*\
  !*** ./src/components/navbar/burgerMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _burger_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.module.scss */ "./src/components/navbar/burger.module.scss");
/* harmony import */ var _images_logo_black_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo-black.png */ "./src/components/navbar/images/logo-black.png");


const html = /* HTML */ ` <input
    type="checkbox"
    id="burger-trigger"
    class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["burger-input"]}
  />
  <label for="burger-trigger" class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["burger-label"]}>
    <span class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["main-trigger-icon-container"]}>
      <i class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["main-trigger-icon"]}></i>
    </span>
  </label>
  <label class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["nav-menu-label"]} for="burger-trigger"
    ><span>menu</span></label
  >
  <div class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["side-menu-container"]}>
    <ul class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["side-menu-item-container"]}>
      <li>home</li>
      <li>malibu life</li>
      <li>discover</li>
      <li>equestrian</li>
      <li>video</li>
      <li>pictures</li>
      <li>contact</li>
      <li>
        <div class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["sidebar-logo-container"]}>
          <img class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["sidebar-logo"]} src=${_images_logo_black_png__WEBPACK_IMPORTED_MODULE_1__} alt="" />
        </div>
      </li>
    </ul>
  </div>
  <div data-id="header-mask" class=${_burger_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["header-mask"]}></div>`;


/***/ }),

/***/ "./src/components/navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
/* harmony import */ var _navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.module.scss */ "./src/components/navbar/navbar.module.scss");
/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burgerMenu */ "./src/components/navbar/burgerMenu.js");
/* harmony import */ var _images_logo_white_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo-white.png */ "./src/components/navbar/images/logo-white.png");



const element = document.createElement("div");

const renderNav = (fragment) => {
  
  element.innerHTML = /* HTML */ `
    <nav class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.wrapper}>
      <div class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
        <div class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["left-container"]}>${_burgerMenu__WEBPACK_IMPORTED_MODULE_1__.html}</div>

        <div class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["logo-container"]}>
          <img class=${_navbar_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.logo} src=${_images_logo_white_png__WEBPACK_IMPORTED_MODULE_2__} alt="" />
        </div>
      </div>
    </nav>
  `;
  fragment.appendChild(element.firstElementChild);
};


/***/ }),

/***/ "./src/components/rightContainer/rightContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/rightContainer/rightContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRightEle": () => (/* binding */ createRightEle),
/* harmony export */   "rightContainer": () => (/* binding */ rightContainer)
/* harmony export */ });
/* harmony import */ var _rightContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rightContainer.module.scss */ "./src/components/rightContainer/rightContainer.module.scss");
/* harmony import */ var _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscStyles/pages.module.scss */ "./src/components/miscStyles/pages.module.scss");
/* harmony import */ var _images_Maliview_Right_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Maliview Right Logo.png */ "./src/components/rightContainer/images/Maliview Right Logo.png");
/* harmony import */ var _images_hiddenLogoGrey_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/hiddenLogoGrey.png */ "./src/components/rightContainer/images/hiddenLogoGrey.png");
/* harmony import */ var _images_maliview_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/maliview.jpg */ "./src/components/rightContainer/images/maliview.jpg");
/* harmony import */ var _images_33340_Mulholland_IMG_1A_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/33340 Mulholland IMG 1A.jpg */ "./src/components/rightContainer/images/33340 Mulholland IMG 1A.jpg");
/* harmony import */ var _images_playButton_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/playButton.png */ "./src/components/rightContainer/images/playButton.png");
/* harmony import */ var _images_hiddenLogoBrown_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/hiddenLogoBrown.png */ "./src/components/rightContainer/images/hiddenLogoBrown.png");
/* harmony import */ var _galleryPage_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../galleryPage/gallery */ "./src/components/galleryPage/gallery.js");










const rightContainer = [];

function createRightEle(innerEle, classNameArr) {
  const container = document.createElement("div");

  const html = /* HTML */ ` <div class="">${innerEle}</div>`;

  container.innerHTML = html;

  classNameArr.forEach((name) => {
    container.firstElementChild.classList.add(name);
  });

  rightContainer.push(container.firstElementChild.outerHTML);
}
const gallery = (0,_galleryPage_gallery__WEBPACK_IMPORTED_MODULE_8__.renderGallery)("r");
createRightEle(/* HTML */ `${gallery.outerHTML}`, [_rightContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container]);

createRightEle(
  /* HTML */ ` <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.container}>
    <div
      class="${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["image-container"] +
      " " +
      `${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["expand-hover"]}` +
      " " +
      `${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.blur}`}"
    >
      <img
        name="play-button"
        class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["play-button"]}
        src=${_images_playButton_png__WEBPACK_IMPORTED_MODULE_6__}
        alt=""
      />
      <img
        id="video-modal-trigger"
        class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["image-page"]}
        data-src=${_images_33340_Mulholland_IMG_1A_jpg__WEBPACK_IMPORTED_MODULE_5__}
        data-id="lazy"
        alt=""
      />
    </div>
  </div>`,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["image-content"]]
);
createRightEle(
  /* HTML */ ` <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["hidden-logo-container-grey"]}>
      <img
        src=${_images_hiddenLogoGrey_png__WEBPACK_IMPORTED_MODULE_3__}
        class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["hidden-logo-grey"]}
        alt=""
      />
    </div>
    <h5 class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-header"]}>equestrian</h5>
    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-text"]}>
      This equestrian property will present a barn with stalls on a lower
      portion of a four-acre space with its own separate driveway and plenty of
      room for the horses, other equestrians, or your trailer. You will have
      access to trails directly from the property and a creek of your own. You
      can call this paradise your home!
    </p>

    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-text"]}>(More Equestrian Info Here)</p>

    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-text"]}>
      As much as it feels remote, you will be only 15 minutes away from PCH and
      less than 20 minutes away from Westlake Village. Great school district
      with plenty of activities. Come by to see this beautifully planned home in
      the making for yourself.
    </p>`,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["text-content"]]
);
createRightEle(
  /* HTML */ ` <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.container}>
    <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["image-container"]}>
      <img
        class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["image-page"]}
        data-id="lazy"
        data-src=${_images_maliview_jpg__WEBPACK_IMPORTED_MODULE_4__}
        alt=""
      />
    </div>
  </div>`,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["image-content"]]
);
createRightEle(
  /* HTML */ ` <div class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["hidden-logo-container-grey"]}>
      <img
        src=${_images_hiddenLogoGrey_png__WEBPACK_IMPORTED_MODULE_3__}
        class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["hidden-logo-grey"]}
        alt=""
      />
    </div>
    <h5 class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-header"]}>malibu</h5>
    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-text"]}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, sunt,
      assumenda expedita eaque saepe distinctio consequuntur quam vel odit
      fugiat, ut doloremque nemo voluptate numquam cum nobis facere voluptatibus
      ad!
    </p>

    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-text"]}>(More Equestrian Info Here)</p>

    <p class=${_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["content-text"]}>
      As much as it feels remote, you will be only 15 minutes away from PCH and
      less than 20 minutes away from Westlake Village. Great school district
      with plenty of activities. Come by to see this beautifully planned home in
      the making for yourself.
    </p>`,
  [_miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.container, _miscStyles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__.default["text-content"]]
);
createRightEle(
  /* HTML */ ` <span class=${_rightContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["logo-container"]}>
    <img src=${_images_Maliview_Right_Logo_png__WEBPACK_IMPORTED_MODULE_2__} alt="" />
  </span>`,
  [_rightContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container]
);




/***/ }),

/***/ "./src/components/socials/images sync \\.(png|jpe?g|svg)$":
/*!*****************************************************************************!*\
  !*** ./src/components/socials/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./facebook.svg": "./src/components/socials/images/facebook.svg",
	"./instagram.svg": "./src/components/socials/images/instagram.svg",
	"./linkedin.svg": "./src/components/socials/images/linkedin.svg",
	"./twitter.svg": "./src/components/socials/images/twitter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/socials/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/components/socials/socials.js":
/*!*******************************************!*\
  !*** ./src/components/socials/socials.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSocialBar": () => (/* binding */ renderSocialBar)
/* harmony export */ });
/* harmony import */ var _socials_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socials.module.scss */ "./src/components/socials/socials.module.scss");


const element = document.createElement("div");
const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(__webpack_require__("./src/components/socials/images sync \\.(png|jpe?g|svg)$"));

Object.entries(cache).map((module) => module[1].default);

const renderSocialBar = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${_socials_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.container}>
      <img  src=${cache["./facebook.svg"]} alt="" />
      <img src=${cache["./instagram.svg"]} alt="" />
      <img src=${cache["./twitter.svg"]} alt="" />
      <img src=${cache["./linkedin.svg"]} alt="" />
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};


/***/ }),

/***/ "./src/components/wrapper/wrapper.js":
/*!*******************************************!*\
  !*** ./src/components/wrapper/wrapper.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderWrapper": () => (/* binding */ renderWrapper)
/* harmony export */ });
/* harmony import */ var _wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper.module.scss */ "./src/components/wrapper/wrapper.module.scss");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leftContainer_leftContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../leftContainer/leftContainer */ "./src/components/leftContainer/leftContainer.js");
/* harmony import */ var _rightContainer_rightContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rightContainer/rightContainer */ "./src/components/rightContainer/rightContainer.js");





const element = document.createElement("div");

const renderWrapper = (fragment) => {
  element.innerHTML = /* HTML */ `<div class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["scroll-wrapper"]}>
    <div
      style="transform: translate3d(0px, 0px, 0px)"
      id="left-container-scroll"
      class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["left-container"]}
    ></div>
    <div
      id="right-container-scroll"
      style="transform: translate3d(0px, 0px, 0px)"
      class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["right-container"]}
    ></div>
    <div class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default["arrow-container"]}>
      <div class=${_wrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__.default.arrow}></div>
    </div>
  </div>`;
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  fragment.appendChild(element.firstChild);

  const leftContainer = fragment.getElementById("left-container-scroll");

  const rightContainer = fragment.getElementById("right-container-scroll");

  _leftContainer_leftContainer__WEBPACK_IMPORTED_MODULE_2__.leftContainer.forEach((ele) => {
    const newEle = document.createElement("div");
    newEle.innerHTML = ele;

    leftContainer.appendChild(newEle.children[0]);
  });
  _rightContainer_rightContainer__WEBPACK_IMPORTED_MODULE_3__.rightContainer.forEach((ele) => {
    const newEle = document.createElement("div");
    newEle.innerHTML = ele;

    rightContainer.appendChild(newEle.children[0]);
  });
  console.log(_leftContainer_leftContainer__WEBPACK_IMPORTED_MODULE_2__.leftContainer.length);

  let shouldScroll = true;

  let windowHeight = window.innerHeight;

  let currentPage = 0;
  let currentContainerSizeLeft = 0;
  let currentContainerSizeRight = -windowHeight * (_leftContainer_leftContainer__WEBPACK_IMPORTED_MODULE_2__.leftContainer.length - 1);

  rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;

  window.addEventListener("wheel", function (e) {
    if (rightContainer.style.transition !== "all 1s ease-out") {
      rightContainer.style.transition = "all 1s ease-out";
    }

    // if (e.deltaY < 0 && currentPage === 0) {
    //   return;
    // }
    if (shouldScroll) {
      if (e.deltaY > 0 && currentPage < _leftContainer_leftContainer__WEBPACK_IMPORTED_MODULE_2__.leftContainer.length - 1) {
        currentContainerSizeLeft += windowHeight;
        currentContainerSizeRight += windowHeight;
        currentPage += 1;

        leftContainer.style.transform = `translate3d(0px, -${currentContainerSizeLeft}px, 0px)`;
        rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;
      }
      if (e.deltaY < 0 && currentPage > 0) {
        currentContainerSizeLeft -= windowHeight;
        currentContainerSizeRight -= windowHeight;
        currentPage -= 1;
        leftContainer.style.transform = `translate3d(0px, -${currentContainerSizeLeft}px, 0px)`;
        rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;
      }
      this.setTimeout(() => {
        shouldScroll = true;
      }, 1100);
    }

    shouldScroll = false;
  });

  return element;
};


/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/1.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/1.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cfbb1a3112916b4a1ef8.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/10.jpg":
/*!****************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/10.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "758b85d0f48dd61b537f.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/11.jpg":
/*!****************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/11.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "80bffafb94ddb8400e1f.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/12.jpg":
/*!****************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/12.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a03e88a4a364dee6fa9.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/2.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/2.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "efac990dc7fd4f21238f.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/3.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/3.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b74155e5e355e36fa45f.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/4.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/4.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "30bbca74b505cdf8b040.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/5.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/5.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7077bc92c0a53667b6c4.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/6.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/6.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9016780c85fec0a18c62.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/7.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/7.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "782529a2bd8762a821cc.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/8.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/8.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d11b8d008e7b4a58c27.jpg";

/***/ }),

/***/ "./src/components/galleryPage/images/properyImages/9.jpg":
/*!***************************************************************!*\
  !*** ./src/components/galleryPage/images/properyImages/9.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "891a1ebbfd814842cedd.jpg";

/***/ }),

/***/ "./src/components/leftContainer/images/Malibu.jpg":
/*!********************************************************!*\
  !*** ./src/components/leftContainer/images/Malibu.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1439d4ceb1127457512e.jpg";

/***/ }),

/***/ "./src/components/leftContainer/images/Maliview Left Logo.png":
/*!********************************************************************!*\
  !*** ./src/components/leftContainer/images/Maliview Left Logo.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "db8bf2092be0f88ba1d3.png";

/***/ }),

/***/ "./src/components/leftContainer/images/hiddenLogoBrown.png":
/*!*****************************************************************!*\
  !*** ./src/components/leftContainer/images/hiddenLogoBrown.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef2f0455f7fe0308a71c.png";

/***/ }),

/***/ "./src/components/leftContainer/images/mulholland.jpg":
/*!************************************************************!*\
  !*** ./src/components/leftContainer/images/mulholland.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7bbdb737eaafe1cab6f4.jpg";

/***/ }),

/***/ "./src/components/navbar/images/logo-black.png":
/*!*****************************************************!*\
  !*** ./src/components/navbar/images/logo-black.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "80dc89d176427d1ef9a9.png";

/***/ }),

/***/ "./src/components/navbar/images/logo-white.png":
/*!*****************************************************!*\
  !*** ./src/components/navbar/images/logo-white.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3a7446ca22e369116cf4.png";

/***/ }),

/***/ "./src/components/rightContainer/images/33340 Mulholland IMG 1A.jpg":
/*!**************************************************************************!*\
  !*** ./src/components/rightContainer/images/33340 Mulholland IMG 1A.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31fda5e74a9279d40437.jpg";

/***/ }),

/***/ "./src/components/rightContainer/images/Maliview Right Logo.png":
/*!**********************************************************************!*\
  !*** ./src/components/rightContainer/images/Maliview Right Logo.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "52dd8b20a668f0b38cd8.png";

/***/ }),

/***/ "./src/components/rightContainer/images/hiddenLogoBrown.png":
/*!******************************************************************!*\
  !*** ./src/components/rightContainer/images/hiddenLogoBrown.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef2f0455f7fe0308a71c.png";

/***/ }),

/***/ "./src/components/rightContainer/images/hiddenLogoGrey.png":
/*!*****************************************************************!*\
  !*** ./src/components/rightContainer/images/hiddenLogoGrey.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e3aa67d345bef99c9e7.png";

/***/ }),

/***/ "./src/components/rightContainer/images/maliview.jpg":
/*!***********************************************************!*\
  !*** ./src/components/rightContainer/images/maliview.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "71ae29bc59f375d2897c.jpg";

/***/ }),

/***/ "./src/components/rightContainer/images/playButton.png":
/*!*************************************************************!*\
  !*** ./src/components/rightContainer/images/playButton.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6531f5cec2e1565b408.png";

/***/ }),

/***/ "./src/components/socials/images/facebook.svg":
/*!****************************************************!*\
  !*** ./src/components/socials/images/facebook.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a7fe193d6019581adc4c.svg";

/***/ }),

/***/ "./src/components/socials/images/instagram.svg":
/*!*****************************************************!*\
  !*** ./src/components/socials/images/instagram.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a20f0573be6450666b55.svg";

/***/ }),

/***/ "./src/components/socials/images/linkedin.svg":
/*!****************************************************!*\
  !*** ./src/components/socials/images/linkedin.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a9d095f943ff604d2d5f.svg";

/***/ }),

/***/ "./src/components/socials/images/twitter.svg":
/*!***************************************************!*\
  !*** ./src/components/socials/images/twitter.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54d57eaed92714b8fd07.svg";

/***/ }),

/***/ "./src/fonts/OratorStd.otf":
/*!*********************************!*\
  !*** ./src/fonts/OratorStd.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8d5c1670acaae02594da.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar */ "./src/components/navbar/navbar.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.scss */ "./main.scss");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/wrapper/wrapper */ "./src/components/wrapper/wrapper.js");
/* harmony import */ var _components_socials_socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/socials/socials */ "./src/components/socials/socials.js");







const docFrag = new DocumentFragment();
const body = document.createElement("div");

body.setAttribute("id", "#root");
(0,_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)(docFrag);
(0,_components_socials_socials__WEBPACK_IMPORTED_MODULE_4__.renderSocialBar)(docFrag);
const wrapper = (0,_components_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__.renderWrapper)(docFrag);

document.body.appendChild(docFrag);
const videoTrigger = document.getElementById("video-modal-trigger");
const closeModalTrigger = document.getElementById("wrapper-trigger");
function test() {
  console.log("lazyasfdf");
}
const lazy = new (vanilla_lazyload__WEBPACK_IMPORTED_MODULE_2___default())({
  elements_selector: '[data-id="lazy"]',
  threshold: "1800",
  callback_enter: test,
});
const x = lazy.update();
console.log(lazy);
__webpack_require__(/*! ./components/modal/attachModalListeners */ "./src/components/modal/attachModalListeners.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsb0JBQW9CO0FBQzdCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDZDtBQUNrQjtBQUN4QztBQUN1RDtBQUNNO0FBQ0U7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBUztBQUNULDRFQUFlO0FBQ2YsZ0JBQWdCLDBFQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsbUJBQU8sQ0FBQywrRkFBeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9qcy9zcGxpZGUuZXNtLmpzIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL2dhbGxlcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL2xlZnRDb250YWluZXIvbGVmdENvbnRhaW5lci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvbWlzY1N0eWxlcy9wYWdlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL25hdmJhci9idXJnZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL3JpZ2h0Q29udGFpbmVyL3JpZ2h0Q29udGFpbmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL3NvY2lhbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL3dyYXBwZXIvd3JhcHBlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL21haW4uc2Nzcz9kMTVjIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9nYWxsZXJ5Lm1vZHVsZS5zY3NzPzUwOGMiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL2xlZnRDb250YWluZXIvbGVmdENvbnRhaW5lci5tb2R1bGUuc2Nzcz8zY2E4Iiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9zcmMvY29tcG9uZW50cy9taXNjU3R5bGVzL3BhZ2VzLm1vZHVsZS5zY3NzPzg5MDIiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLm1vZHVsZS5zY3NzPzZlMGUiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL25hdmJhci9idXJnZXIubW9kdWxlLnNjc3M/MjVhYSIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5tb2R1bGUuc2Nzcz9jOWVkIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9zcmMvY29tcG9uZW50cy9yaWdodENvbnRhaW5lci9yaWdodENvbnRhaW5lci5tb2R1bGUuc2Nzcz8yZDUwIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL3NvY2lhbHMubW9kdWxlLnNjc3M/ODNiNCIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvd3JhcHBlci93cmFwcGVyLm1vZHVsZS5zY3NzP2ZjZWIiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL2ltYWdlcy9wcm9wZXJ5SW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL2xlZnRDb250YWluZXIvbGVmdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvYXR0YWNoTW9kYWxMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvYnVyZ2VyTWVudS5qcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvcmlnaHRDb250YWluZXIvcmlnaHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC8uKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHMvc29jaWFscy5qcyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrLy4vc3JjL2NvbXBvbmVudHMvd3JhcHBlci93cmFwcGVyLmpzIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJjaGFwcHdlYmFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcmNoYXBwd2ViYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyY2hhcHB3ZWJhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBTcGxpZGUuanNcbiAqIFZlcnNpb24gIDogMi40LjIwXG4gKiBMaWNlbnNlICA6IE1JVFxuICogQ29weXJpZ2h0OiAyMDIwIE5hb3Rvc2hpIEZ1aml0YVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTcGxpZGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3BsaWRlXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKCgpID0+IHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHRcInVzZSBzdHJpY3RcIjtcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyAzMTE6XG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbi8vIEVTTSBDT01QQVQgRkxBR1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBcImRlZmF1bHRcIjogKCkgPT4gLyogYmluZGluZyAqLyBtb2R1bGVfU3BsaWRlXG59KTtcblxuLy8gTkFNRVNQQUNFIE9CSkVDVDogLi9zcmMvanMvY29uc3RhbnRzL3N0YXRlcy5qc1xudmFyIHN0YXRlc19uYW1lc3BhY2VPYmplY3QgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18ucihzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0KTtcbl9fd2VicGFja19yZXF1aXJlX18uZChzdGF0ZXNfbmFtZXNwYWNlT2JqZWN0LCB7XG4gIFwiQ1JFQVRFRFwiOiAoKSA9PiBDUkVBVEVELFxuICBcIkRFU1RST1lFRFwiOiAoKSA9PiBERVNUUk9ZRUQsXG4gIFwiSURMRVwiOiAoKSA9PiBJRExFLFxuICBcIk1PVU5URURcIjogKCkgPT4gTU9VTlRFRCxcbiAgXCJNT1ZJTkdcIjogKCkgPT4gTU9WSU5HXG59KTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvZXZlbnQuanNcbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhbiBFdmVudCBvYmplY3Qgc2ltcGx5IG1hbmFnaW5nIGV2ZW50cy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYW4gRXZlbnQgb2JqZWN0IHNpbXBseSBtYW5hZ2luZyBldmVudHMuXHJcbiAqL1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb3JlX2V2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgYWxsIGV2ZW50IGRhdGEuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICovXG4gIHZhciBkYXRhID0gW107XG4gIHZhciBFdmVudCA9IHtcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQocykuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnRzICAtIEFuIGV2ZW50IG5hbWUuIFVzZSBzcGFjZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSBldmVudHMuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxzbywgbmFtZXNwYWNlIGlzIGFjY2VwdGVkIGJ5IGRvdCwgc3VjaCBhcyAncmVzaXplLntuYW1lc3BhY2V9Jy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAtIE9wdGlvbmFsLiBOYXRpdmUgZXZlbnQgd2lsbCBiZSBsaXN0ZW5lZCB0byB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgb3B0aW9ucyAtIE9wdGlvbmFsLiBPcHRpb25zIGZvciBhZGRFdmVudExpc3RlbmVyLlxyXG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgZWxtLCBvcHRpb25zKSB7XG4gICAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgICAgZWxtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChlbG0pIHtcbiAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgIGVsbTogZWxtLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSB0aGUgZ2l2ZW4gZXZlbnQocykuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBldmVudHMgLSBBIGV2ZW50IG5hbWUgb3IgbmFtZXMgc3BsaXQgYnkgc3BhY2UuXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAtIE9wdGlvbmFsLiByZW1vdmVFdmVudExpc3RlbmVyKCkgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGlzIGFyZyBpcyBwcm92aWRlZC5cclxuICAgICAqL1xuICAgIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWxtKSB7XG4gICAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgICAgZWxtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5ldmVudCA9PT0gZXZlbnQgJiYgaXRlbS5lbG0gPT09IGVsbSkge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRW1pdCBhbiBldmVudC5cclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgZm9yIGN1c3RvbSBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBldmVudCAtIEFuIGV2ZW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0geyp9ICAgICAgIGFyZ3MgIC0gQW55IG51bWJlciBvZiBhcmd1bWVudHMgcGFzc2VkIHRvIGhhbmRsZXJzLlxyXG4gICAgICovXG4gICAgZW1pdDogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmICghaXRlbS5lbG0gJiYgaXRlbS5ldmVudC5zcGxpdCgnLicpWzBdID09PSBldmVudCkge1xuICAgICAgICAgIGl0ZW0uaGFuZGxlci5hcHBseShpdGVtLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgZXZlbnQgZGF0YS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkYXRhLmZvckVhY2godW5zdWJzY3JpYmUpO1xuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5lbG0pIHtcbiAgICAgIGl0ZW0uZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoaXRlbS5ldmVudCwgaXRlbS5oYW5kbGVyLCBpdGVtLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBFdmVudDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvcmUvc3RhdGUuanNcbi8qKlxyXG4gKiBUaGUgZnVuY3Rpb24gcHJvdmlkaW5nIGEgc3VwZXIgc2ltcGxlIHN0YXRlIHN5c3RlbS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIHByb3ZpZGluZyBhIHN1cGVyIHNpbXBsZSBzdGF0ZSBzeXN0ZW0uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaW5pdGlhbFN0YXRlIC0gUHJvdmlkZSB0aGUgaW5pdGlhbCBzdGF0ZSB2YWx1ZS5cclxuICovXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHN0YXRlID0gKGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGN1cnJlbnQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cclxuICAgKi9cbiAgdmFyIGN1cnIgPSBpbml0aWFsU3RhdGU7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBzdGF0ZSAtIEEgbmV3IHN0YXRlLlxyXG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIGN1cnIgPSBzdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZnkgaWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgZ2l2ZW4gb25lIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHN0YXRlIC0gQSBzdGF0ZSBuYW1lIHRvIGJlIHZlcmlmaWVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB0aGUgZ2l2ZW4gb25lLlxyXG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUgPT09IGN1cnI7XG4gICAgfVxuICB9O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvb2JqZWN0LmpzXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcclxuICogU29tZSB1dGlsaXR5IGZ1bmN0aW9ucyByZWxhdGVkIHdpdGggT2JqZWN0LCBzdXBwb3J0aW5nIElFLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuLyoqXHJcbiAqIEl0ZXJhdGUgYW4gb2JqZWN0IGxpa2UgQXJyYXkuZm9yRWFjaC5cclxuICogSUUgZG9lc24ndCBzdXBwb3J0IGZvckVhY2ggb2YgSFRNTENvbGxlY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICBvYmogICAgICAgLSBBbiBvYmplY3QuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICBjYWxsYmFjayAgLSBBIGZ1bmN0aW9uIGhhbmRsaW5nIGVhY2ggdmFsdWUuIEFyZ3VtZW50cyBhcmUgdmFsdWUsIHByb3BlcnR5IGFuZCBpbmRleC5cclxuICovXG5cbmZ1bmN0aW9uIGVhY2gob2JqLCBjYWxsYmFjaykge1xuICBrZXlzKG9iaikuc29tZShmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xuICAgIHJldHVybiBjYWxsYmFjayhvYmpba2V5XSwga2V5LCBpbmRleCk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIFJldHVybiB2YWx1ZXMgb2YgdGhlIGdpdmVuIG9iamVjdCBhcyBhbiBhcnJheS5cclxuICogSUUgZG9lc24ndCBzdXBwb3J0IE9iamVjdC52YWx1ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBBbiBvYmplY3QuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0FycmF5fSAtIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gdmFsdWVzKG9iaikge1xuICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gc3ViamVjdCBpcyBvYmplY3Qgb3Igbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHN1YmplY3QgLSBBIHN1YmplY3QgdG8gYmUgdmVyaWZpZWQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiBvYmplY3QsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0Jztcbn1cbi8qKlxyXG4gKiBNZXJnZSB0d28gb2JqZWN0cyBkZWVwbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0byAgIC0gQW4gb2JqZWN0IHdoZXJlIFwiZnJvbVwiIGlzIG1lcmdlZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBBbiBvYmplY3QgbWVyZ2VkIHRvIFwidG9cIi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEEgbWVyZ2VkIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIG1lcmdlKF9yZWYsIGZyb20pIHtcbiAgdmFyIHRvID0gX2V4dGVuZHMoe30sIF9yZWYpO1xuXG4gIGVhY2goZnJvbSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KHRvW2tleV0pKSB7XG4gICAgICAgIHRvW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgdG9ba2V5XSA9IG1lcmdlKHRvW2tleV0sIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9ba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0bztcbn1cbi8qKlxyXG4gKiBBc3NpZ24gYWxsIHByb3BlcnRpZXMgXCJmcm9tXCIgdG8gXCJ0b1wiIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRvICAgLSBBbiBvYmplY3Qgd2hlcmUgcHJvcGVydGllcyBhcmUgYXNzaWduZWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gQW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGFzc2lnbmVkIHRvIFwidG9cIi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIGFzc2lnbmVkIG9iamVjdC5cclxuICovXG5cbmZ1bmN0aW9uIG9iamVjdF9hc3NpZ24odG8sIGZyb20pIHtcbiAga2V5cyhmcm9tKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIXRvW2tleV0pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0bywga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZyb20sIGtleSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0bztcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy91dGlscy91dGlscy5qc1xuLyoqXHJcbiAqIEEgcGFja2FnZSBvZiBzb21lIG1pc2NlbGxhbmVvdXMgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIHZhbHVlIHRvIGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gQW55IHZhbHVlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHsqW119IC0gQXJyYXkgY29udGFpbmluZyB0aGUgZ2l2ZW4gdmFsdWUuXHJcbiAqL1xuXG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYmV0d2VlbiBtaW4gYW5kIG1heC5cclxuICogTWluIHdpbGwgYmUgcmV0dXJuZWQgd2hlbiB0aGUgdmFsdWUgaXMgbGVzcyB0aGFuIG1pbiBvciBtYXggd2lsbCBkbyB3aGVuIGdyZWF0ZXIgdGhhbiBtYXguXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIEEgbnVtYmVyIHRvIGJlIGNoZWNrZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtMSAgICAtIE1pbmltdW0gb3IgbWF4aW11bSBudW1iZXIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtMiAgICAtIE1heGltdW0gb3IgbWluaW11bSBudW1iZXIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gLSBBIHZhbHVlIGl0c2VsZiwgbWluIG9yIG1heC5cclxuICovXG5cbmZ1bmN0aW9uIGJldHdlZW4odmFsdWUsIG0xLCBtMikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG0xID4gbTIgPyBtMiA6IG0xKSwgbTEgPiBtMiA/IG0xIDogbTIpO1xufVxuLyoqXHJcbiAqIFRoZSBzcHJpbnRmIG1ldGhvZCB3aXRoIG1pbmltdW0gZnVuY3Rpb25hbGl0eS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgIGZvcm1hdCAgICAgICAtIFRoZSBzdHJpbmcgZm9ybWF0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gcmVwbGFjZW1lbnRzIC0gUmVwbGFjZW1lbnRzIGFjY2VwdGluZyBtdWx0aXBsZSBhcmd1bWVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udmVydGVkIHN0cmluZy5cclxuICovXG5cbmZ1bmN0aW9uIHNwcmludGYoZm9ybWF0LCByZXBsYWNlbWVudHMpIHtcbiAgdmFyIGkgPSAwO1xuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9BcnJheShyZXBsYWNlbWVudHMpW2krK107XG4gIH0pO1xufVxuLyoqXHJcbiAqIEFwcGVuZCBweCB1bml0IHRvIHRoZSBnaXZlbiBzdWJqZWN0IGlmIG5lY2Vzc2FyeS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZSAtIEEgdmFsdWUgdGhhdCBtYXkgbm90IGluY2x1ZGUgYW4gdW5pdC5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSAtIElmIHRoZSB2YWx1ZSBpcyBzdHJpbmcsIHJldHVybiBpdHNlbGYuXHJcbiAqICAgICAgICAgICAgICAgICAgICBJZiBudW1iZXIsIGRvIHZhbHVlICsgXCJweFwiLiBBbiBlbXB0eSBzdHJpbmcsIG90aGVyd2lzZS5cclxuICovXG5cbmZ1bmN0aW9uIHVuaXQodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xufVxuLyoqXHJcbiAqIFBhZCBzdGFydCB3aXRoIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBBIG51bWJlciB0byBiZSBmaWxsZWQgd2l0aCAwLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfSAtIFBhZGRlZCBudW1iZXIuXHJcbiAqL1xuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIgPCAxMCA/ICcwJyArIG51bWJlciA6IG51bWJlcjtcbn1cbi8qKlxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSB0byBwaXhlbC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICByb290ICAtIFJvb3QgZWxlbWVudCB3aGVyZSBhIGR1bW15IGRpdiBpcyBhcHBlbmRlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWx1ZSAtIENTUyB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQsIHN1Y2ggYXMgMTByZW0uXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gLSBQaXhlbC5cclxuICovXG5cbmZ1bmN0aW9uIHRvUGl4ZWwocm9vdCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZGl2ID0gY3JlYXRlKCdkaXYnLCB7fSk7XG4gICAgYXBwbHlTdHlsZShkaXYsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6IHZhbHVlXG4gICAgfSk7XG4gICAgYXBwZW5kKHJvb3QsIGRpdik7XG4gICAgdmFsdWUgPSBkaXYuY2xpZW50V2lkdGg7XG4gICAgZG9tX3JlbW92ZShkaXYpO1xuICB9XG5cbiAgcmV0dXJuICt2YWx1ZSB8fCAwO1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL2RvbS5qc1xuLyoqXHJcbiAqIFNvbWUgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIERPTS5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBGaW5kIHRoZSBmaXJzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBnaXZlbiBzZWxlY3Rvci5cclxuICogQmUgYXdhcmUgdGhhdCBhbGwgc2VsZWN0b3JzIGFmdGVyIGEgc3BhY2UgYXJlIGlnbm9yZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxOb2RlfSAgZWxtICAgICAgIC0gQW4gYW5jZXN0b3IgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICBzZWxlY3RvciAgLSBET01TdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gLSBBIGZvdW5kIGVsZW1lbnQgb3IgbnVsbC5cclxuICovXG5cbmZ1bmN0aW9uIGZpbmQoZWxtLCBzZWxlY3Rvcikge1xuICByZXR1cm4gZWxtID8gZWxtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3Iuc3BsaXQoJyAnKVswXSkgOiBudWxsO1xufVxuLyoqXHJcbiAqIEZpbmQgYSBmaXJzdCBjaGlsZCBoYXZpbmcgdGhlIGdpdmVuIHRhZyBvciBjbGFzcyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCAgICAgICAgIC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICB0YWdPckNsYXNzTmFtZSAtIEEgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR8dW5kZWZpbmVkfSAtIEEgZm91bmQgZWxlbWVudCBvbiBzdWNjZXNzIG9yIHVuZGVmaW5lZCBvbiBmYWlsdXJlLlxyXG4gKi9cblxuZnVuY3Rpb24gY2hpbGQocGFyZW50LCB0YWdPckNsYXNzTmFtZSkge1xuICByZXR1cm4gY2hpbGRyZW4ocGFyZW50LCB0YWdPckNsYXNzTmFtZSlbMF07XG59XG4vKipcclxuICogUmV0dXJuIGNoaWxlIGVsZW1lbnRzIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgdGFnIG9yIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50ICAgICAgICAgLSBBIHBhcmVudCBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIHRhZ09yQ2xhc3NOYW1lIC0gQSB0YWcgb3IgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7RWxlbWVudFtdfSAtIEZvdW5kIGVsZW1lbnRzLlxyXG4gKi9cblxuZnVuY3Rpb24gY2hpbGRyZW4ocGFyZW50LCB0YWdPckNsYXNzTmFtZSkge1xuICBpZiAocGFyZW50KSB7XG4gICAgcmV0dXJuIHZhbHVlcyhwYXJlbnQuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBoYXNDbGFzcyhjaGlsZCwgdGFnT3JDbGFzc05hbWUuc3BsaXQoJyAnKVswXSkgfHwgY2hpbGQudGFnTmFtZSA9PT0gdGFnT3JDbGFzc05hbWU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW107XG59XG4vKipcclxuICogQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBzb21lIG9wdGlvbmFsIGF0dHJpYnV0ZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgICAtIEEgdGFnIG5hbWUuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyAtIEFuIG9iamVjdCBhbnkgYXR0cmlidXRlIHBhaXJzIG9mIG5hbWUgYW5kIHZhbHVlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fSAtIEEgY3JlYXRlZCBlbGVtZW50LlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgYXR0cnMpIHtcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWFjaChhdHRycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gc2V0QXR0cmlidXRlKGVsbSwga2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gZWxtO1xufVxuLyoqXHJcbiAqIENvbnZlcnQgSFRNTCBzdHJpbmcgdG8gRE9NIG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIC0gSFRNTCBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge05vZGV9IC0gQSBjcmVhdGVkIG5vZGUuXHJcbiAqL1xuXG5mdW5jdGlvbiBkb21pZnkoaHRtbCkge1xuICB2YXIgZGl2ID0gY3JlYXRlKCdkaXYnLCB7fSk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XG59XG4vKipcclxuICogUmVtb3ZlIGEgZ2l2ZW4gZWxlbWVudCBmcm9tIGEgRE9NIHRyZWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W119IGVsbXMgLSBFbGVtZW50KHMpIHRvIGJlIHJlbW92ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBkb21fcmVtb3ZlKGVsbXMpIHtcbiAgdG9BcnJheShlbG1zKS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICBpZiAoZWxtKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZWxtLnBhcmVudEVsZW1lbnQ7XG4gICAgICBwYXJlbnQgJiYgcGFyZW50LnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxyXG4gKiBBcHBlbmQgYSBjaGlsZCB0byBhIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50IC0gQSBwYXJlbnQgZWxlbWVudC5cclxuICogQHBhcmFtIHtFbGVtZW50fSBjaGlsZCAgLSBBbiBlbGVtZW50IHRvIGJlIGFwcGVuZGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kKHBhcmVudCwgY2hpbGQpIHtcbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cbn1cbi8qKlxyXG4gKiBJbnNlcnQgYW4gZWxlbWVudCBiZWZvcmUgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR8Tm9kZX0gcmVmIC0gQSByZWZlcmVuY2UgZWxlbWVudC5cclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgIGVsbSAtIEFuIGVsZW1lbnQgdG8gYmUgaW5zZXJ0ZWQuXHJcbiAqL1xuXG5mdW5jdGlvbiBiZWZvcmUoZWxtLCByZWYpIHtcbiAgaWYgKGVsbSAmJiByZWYpIHtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50ICYmIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxtLCByZWYpO1xuICB9XG59XG4vKipcclxuICogQXBwbHkgc3R5bGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIHN0eWxlcyBhcmUgYXBwbGllZC5cclxuICogQHBhcmFtIHtPYmplY3R9ICBzdHlsZXMgIC0gT2JqZWN0IGNvbnRhaW5pbmcgc3R5bGVzLlxyXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlTdHlsZShlbG0sIHN0eWxlcykge1xuICBpZiAoZWxtKSB7XG4gICAgZWFjaChzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGVsbS5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4vKipcclxuICogQWRkIG9yIHJlbW92ZSBjbGFzc2VzIHRvL2Zyb20gdGhlIGVsZW1lbnQuXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgZm9yIGludGVybmFsIHVzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgY2xhc3NlcyBhcmUgYWRkZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBjbGFzc2VzIC0gQ2xhc3MgbmFtZXMgYmVpbmcgYWRkZWQuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgICByZW1vdmUgIC0gV2hldGhlciB0byByZW1vdmUgb3IgYWRkIGNsYXNzZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCByZW1vdmUpIHtcbiAgaWYgKGVsbSkge1xuICAgIHRvQXJyYXkoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZWxtLmNsYXNzTGlzdFtyZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnXShuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuLyoqXHJcbiAqIEFkZCBjbGFzc2VzIHRvIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgIGVsbSAgICAgLSBBbiBlbGVtZW50IHdoZXJlIGNsYXNzZXMgYXJlIGFkZGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gIGNsYXNzZXMgLSBDbGFzcyBuYW1lcyBiZWluZyBhZGRlZC5cclxuICovXG5cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3NlcyhlbG0sIGNsYXNzZXMsIGZhbHNlKTtcbn1cbi8qKlxyXG4gKiBSZW1vdmUgYSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICAgICAgICAgZWxtICAgICAtIEFuIGVsZW1lbnQgd2hlcmUgY2xhc3NlcyBhcmUgcmVtb3ZlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGNsYXNzZXMgLSBBIGNsYXNzIG5hbWUgYmVpbmcgcmVtb3ZlZC5cclxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsbSwgY2xhc3Nlcykge1xuICBhZGRPclJlbW92ZUNsYXNzZXMoZWxtLCBjbGFzc2VzLCB0cnVlKTtcbn1cbi8qKlxyXG4gKiBWZXJpZnkgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgaGFzIHRoZSBjbGFzcyBvciBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgICAgIC0gQW4gZWxlbWVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICBjbGFzc05hbWUgLSBBIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIG9yIGZhbHNlIGlmIG5vdC5cclxuICovXG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiAhIWVsbSAmJiBlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59XG4vKipcclxuICogU2V0IGF0dHJpYnV0ZSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSAgICAgICAgICAgICAgICAgZWxtICAgLSBBbiBlbGVtZW50IHdoZXJlIGFuIGF0dHJpYnV0ZSBpcyBhc3NpZ25lZC5cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgbmFtZSAgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW59ICAgdmFsdWUgLSBBdHRyaWJ1dGUgdmFsdWUuXHJcbiAqL1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWxtLCBuYW1lLCB2YWx1ZSkge1xuICBpZiAoZWxtKSB7XG4gICAgZWxtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBHZXQgYXR0cmlidXRlIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAtIEFuIGVsZW1lbnQgd2hlcmUgYW4gYXR0cmlidXRlIGlzIGFzc2lnbmVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYXR0cmlidXRlIGlmIGF2YWlsYWJsZS4gQW4gZW1wdHkgc3RyaW5nIGlmIG5vdC5cclxuICovXG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbG0sIG5hbWUpIHtcbiAgcmV0dXJuIGVsbSA/IGVsbS5nZXRBdHRyaWJ1dGUobmFtZSkgOiAnJztcbn1cbi8qKlxyXG4gKiBSZW1vdmUgYXR0cmlidXRlIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxFbGVtZW50W119IGVsbXMgIC0gQW4gZWxlbWVudCB3aGVyZSBhbiBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119ICAgICAgbmFtZXMgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbG1zLCBuYW1lcykge1xuICB0b0FycmF5KG5hbWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdG9BcnJheShlbG1zKS5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gJiYgZWxtLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG4vKipcclxuICogUmV0dXJuIHRoZSBSZWN0IG9iamVjdCBvZiB0aGUgcHJvdmlkZWQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0NsaWVudFJlY3R8RE9NUmVjdH0gLSBBIHJlY3Qgb2JqZWN0LlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0UmVjdChlbG0pIHtcbiAgcmV0dXJuIGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cbi8qKlxyXG4gKiBUcmlnZ2VyIHRoZSBnaXZlbiBjYWxsYmFjayBhZnRlciBhbGwgaW1hZ2VzIGNvbnRhaW5lZCBieSB0aGUgZWxlbWVudCBhcmUgbG9hZGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9ICBlbG0gICAgICAtIEVsZW1lbnQgdGhhdCBtYXkgY29udGFpbiBpbWFnZXMuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgcmlnaHQgYWZ0ZXIgYWxsIGltYWdlcyBhcmUgbG9hZGVkLlxyXG4gKi9cblxuZnVuY3Rpb24gbG9hZGVkKGVsbSwgY2FsbGJhY2spIHtcbiAgdmFyIGltYWdlcyA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgdmFyIGxlbmd0aCA9IGltYWdlcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZWFjaChpbWFnZXMsIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVHJpZ2dlciB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkgaWYgdGhlcmUgaXMgbm8gaW1hZ2UuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy90eXBlcy5qc1xuLyoqXHJcbiAqIEV4cG9ydCBzbGlkZXIgdHlwZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIE5vcm1hbCBzbGlkZXIuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIFNMSURFID0gJ3NsaWRlJztcbi8qKlxyXG4gKiBMb29wIGFmdGVyIHRoZSBsYXN0IHNsaWRlIGFuZCBiZWZvcmUgdGhlIGZpcnN0IG9uZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBMT09QID0gJ2xvb3AnO1xuLyoqXHJcbiAqIFRoZSB0cmFjayBkb2Vzbid0IG1vdmUuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgRkFERSA9ICdmYWRlJztcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9zbGlkZS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGdlbmVyYWwgc2xpZGUgZWZmZWN0IHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZ2VuZXJhbCBzbGlkZSBlZmZlY3QgdHJhbnNpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHNsaWRlID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgbGlzdCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG4gIHZhciBsaXN0O1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBvbkVuZCBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cclxuICAgKi9cblxuICB2YXIgZW5kQ2FsbGJhY2s7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBsaXN0ID0gQ29tcG9uZW50cy5FbGVtZW50cy5saXN0O1xuICAgICAgU3BsaWRlLm9uKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBsaXN0ICYmIGVuZENhbGxiYWNrKSB7XG4gICAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSwgbGlzdCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdHJhbnNpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBkZXN0SW5kZXggLSBEZXN0aW5hdGlvbiBzbGlkZSBpbmRleCB0aGF0IG1pZ2h0IGJlIGNsb25lJ3MuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBuZXdJbmRleCAgLSBOZXcgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICBwcmV2SW5kZXggLSBQcmV2aW91cyBpbmRleC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgIGNvb3JkICAgICAtIERlc3RpbmF0aW9uIGNvb3JkaW5hdGVzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSAgICAgIC0gQ2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBjb29yZCwgZG9uZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHZhciBlZGdlSW5kZXggPSBDb21wb25lbnRzLkNvbnRyb2xsZXIuZWRnZUluZGV4O1xuICAgICAgdmFyIHNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgICAgIGVuZENhbGxiYWNrID0gZG9uZTtcblxuICAgICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgICAgaWYgKHByZXZJbmRleCA9PT0gMCAmJiBuZXdJbmRleCA+PSBlZGdlSW5kZXggfHwgcHJldkluZGV4ID49IGVkZ2VJbmRleCAmJiBuZXdJbmRleCA9PT0gMCkge1xuICAgICAgICAgIHNwZWVkID0gb3B0aW9ucy5yZXdpbmRTcGVlZCB8fCBzcGVlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHBseVN0eWxlKGxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gXCIgKyBzcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIGNvb3JkLnggKyBcInB4LFwiICsgY29vcmQueSArIFwicHgpXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3RyYW5zaXRpb25zL2ZhZGUvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBmYWRlIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZmFkZSB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgZmFkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIHZhciBGYWRlID0ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogQXBwbHkgdHJhbnNpdGlvbiBzdHlsZSB0byB0aGUgZmlyc3Qgc2xpZGUuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBhcHBseShTcGxpZGUuaW5kZXgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRyYW5zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgIGRlc3RJbmRleCAtIERlc3RpbmF0aW9uIHNsaWRlIGluZGV4IHRoYXQgbWlnaHQgYmUgY2xvbmUncy5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgICBuZXdJbmRleCAgLSBOZXcgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgcHJldkluZGV4IC0gUHJldmlvdXMgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgY29vcmQgICAgIC0gRGVzdGluYXRpb24gY29vcmRpbmF0ZXMuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgZG9uZSAgICAgIC0gQ2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBjb29yZCwgZG9uZSkge1xuICAgICAgdmFyIHRyYWNrID0gQ29tcG9uZW50cy5FbGVtZW50cy50cmFjaztcbiAgICAgIGFwcGx5U3R5bGUodHJhY2ssIHtcbiAgICAgICAgaGVpZ2h0OiB1bml0KHRyYWNrLmNsaWVudEhlaWdodClcbiAgICAgIH0pO1xuICAgICAgYXBwbHkobmV3SW5kZXgpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICAgIGhlaWdodDogJydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICAqIEFwcGx5IHRyYW5zaXRpb24gc3R5bGUgdG8gdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gaW5kZXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIHNsaWRlIGluZGV4LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFwcGx5KGluZGV4KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICBhcHBseVN0eWxlKENvbXBvbmVudHMuRWxlbWVudHMuc2xpZGVzW2luZGV4XSwge1xuICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IFwiICsgb3B0aW9ucy5zcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZ1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEZhZGU7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy90cmFuc2l0aW9ucy9pbmRleC5qc1xuLyoqXHJcbiAqIEV4cG9ydCB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29yZS9jb21wb3Nlci5qc1xuLyoqXHJcbiAqIFByb3ZpZGUgYSBmdW5jdGlvbiBmb3IgY29tcG9zaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBDb21wb3NlIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSAgIFNwbGlkZSAgICAgLSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIENvbXBvbmVudHMgLSBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFRyYW5zaXRpb24gLSBDaGFuZ2UgY29tcG9uZW50IGZvciB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNvbXBvbmVudHMuXHJcbiAqL1xuXG5mdW5jdGlvbiBjb21wb3NlKFNwbGlkZSwgQ29tcG9uZW50cywgVHJhbnNpdGlvbikge1xuICB2YXIgY29tcG9uZW50cyA9IHt9O1xuICBlYWNoKENvbXBvbmVudHMsIGZ1bmN0aW9uIChDb21wb25lbnQsIG5hbWUpIHtcbiAgICBjb21wb25lbnRzW25hbWVdID0gQ29tcG9uZW50KFNwbGlkZSwgY29tcG9uZW50cywgbmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgaWYgKCFUcmFuc2l0aW9uKSB7XG4gICAgVHJhbnNpdGlvbiA9IFNwbGlkZS5pcyhGQURFKSA/IGZhZGUgOiBzbGlkZTtcbiAgfVxuXG4gIGNvbXBvbmVudHMuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb24oU3BsaWRlLCBjb21wb25lbnRzKTtcbiAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvdXRpbHMvZXJyb3IuanNcbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3Igb3V0cHV0dGluZyBsb2dzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBQcmVmaXggb2YgYW4gZXJyb3IgbWFzc2FnZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgTUVTU0FHRV9QUkVGSVggPSAnW1NQTElERV0nO1xuLyoqXHJcbiAqIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBvbiB0aGUgYnJvd3NlciBjb25zb2xlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEFuIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoTUVTU0FHRV9QUkVGSVggKyBcIiBcIiArIG1lc3NhZ2UpO1xufVxuLyoqXHJcbiAqIENoZWNrIGV4aXN0ZW5jZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0IGFuZCB0aHJvdyBhbiBlcnJvciBpZiBpdCBkb2Vzbid0LlxyXG4gKlxyXG4gKiBAdGhyb3dzIHtFcnJvcn1cclxuICpcclxuICogQHBhcmFtIHsqfSAgICAgIHN1YmplY3QgLSBBIHN1YmplY3QgdG8gYmUgY29uZmlybWVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIEFuIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBleGlzdChzdWJqZWN0LCBtZXNzYWdlKSB7XG4gIGlmICghc3ViamVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9jbGFzc2VzLmpzXG4vKipcclxuICogRXhwb3J0IGNsYXNzIG5hbWVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBBIHJvb3QgY2xhc3MgbmFtZS5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG52YXIgUk9PVCA9ICdzcGxpZGUnO1xuLyoqXHJcbiAqIFRoZSBkZWZpbml0aW9uIHRhYmxlIG9mIGFsbCBjbGFzc2VzIGZvciBlbGVtZW50cy5cclxuICogVGhleSBtaWdodCBiZSBtb2RpZmllZCBieSBvcHRpb25zLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cblxudmFyIEVMRU1FTlRfQ0xBU1NFUyA9IHtcbiAgcm9vdDogUk9PVCxcbiAgc2xpZGVyOiBST09UICsgXCJfX3NsaWRlclwiLFxuICB0cmFjazogUk9PVCArIFwiX190cmFja1wiLFxuICBsaXN0OiBST09UICsgXCJfX2xpc3RcIixcbiAgc2xpZGU6IFJPT1QgKyBcIl9fc2xpZGVcIixcbiAgY29udGFpbmVyOiBST09UICsgXCJfX3NsaWRlX19jb250YWluZXJcIixcbiAgYXJyb3dzOiBST09UICsgXCJfX2Fycm93c1wiLFxuICBhcnJvdzogUk9PVCArIFwiX19hcnJvd1wiLFxuICBwcmV2OiBST09UICsgXCJfX2Fycm93LS1wcmV2XCIsXG4gIG5leHQ6IFJPT1QgKyBcIl9fYXJyb3ctLW5leHRcIixcbiAgcGFnaW5hdGlvbjogUk9PVCArIFwiX19wYWdpbmF0aW9uXCIsXG4gIHBhZ2U6IFJPT1QgKyBcIl9fcGFnaW5hdGlvbl9fcGFnZVwiLFxuICBjbG9uZTogUk9PVCArIFwiX19zbGlkZS0tY2xvbmVcIixcbiAgcHJvZ3Jlc3M6IFJPT1QgKyBcIl9fcHJvZ3Jlc3NcIixcbiAgYmFyOiBST09UICsgXCJfX3Byb2dyZXNzX19iYXJcIixcbiAgYXV0b3BsYXk6IFJPT1QgKyBcIl9fYXV0b3BsYXlcIixcbiAgcGxheTogUk9PVCArIFwiX19wbGF5XCIsXG4gIHBhdXNlOiBST09UICsgXCJfX3BhdXNlXCIsXG4gIHNwaW5uZXI6IFJPT1QgKyBcIl9fc3Bpbm5lclwiLFxuICBzcjogUk9PVCArIFwiX19zclwiXG59O1xuLyoqXHJcbiAqIERlZmluaXRpb25zIG9mIHN0YXR1cyBjbGFzc2VzLlxyXG4gKlxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cblxudmFyIFNUQVRVU19DTEFTU0VTID0ge1xuICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICB2aXNpYmxlOiAnaXMtdmlzaWJsZScsXG4gIGxvYWRpbmc6ICdpcy1sb2FkaW5nJ1xufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvaTE4bi5qc1xuLyoqXHJcbiAqIEV4cG9ydCBpMThuIHRleHRzIGFzIG9iamVjdC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGV4dHMgZm9yIGkxOG4uXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xudmFyIEkxOE4gPSB7XG4gIHByZXY6ICdQcmV2aW91cyBzbGlkZScsXG4gIG5leHQ6ICdOZXh0IHNsaWRlJyxcbiAgZmlyc3Q6ICdHbyB0byBmaXJzdCBzbGlkZScsXG4gIGxhc3Q6ICdHbyB0byBsYXN0IHNsaWRlJyxcbiAgc2xpZGVYOiAnR28gdG8gc2xpZGUgJXMnLFxuICBwYWdlWDogJ0dvIHRvIHBhZ2UgJXMnLFxuICBwbGF5OiAnU3RhcnQgYXV0b3BsYXknLFxuICBwYXVzZTogJ1BhdXNlIGF1dG9wbGF5J1xufTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb25zdGFudHMvZGVmYXVsdHMuanNcbi8qKlxyXG4gKiBFeHBvcnQgZGVmYXVsdCBvcHRpb25zLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxudmFyIERFRkFVTFRTID0ge1xuICAvKipcclxuICAgKiBEZXRlcm1pbmUgYSBzbGlkZXIgdHlwZS5cclxuICAgKiAtICdzbGlkZSc6IFJlZ3VsYXIgc2xpZGVyLlxyXG4gICAqIC0gJ2xvb3AnIDogQ2Fyb3VzZWwgc2xpZGVyLlxyXG4gICAqIC0gJ2ZhZGUnIDogQ2hhbmdlIHNsaWRlcyB3aXRoIGZhZGUgdHJhbnNpdGlvbi4gcGVyUGFnZSwgZHJhZyBvcHRpb25zIGFyZSBpZ25vcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdHlwZTogJ3NsaWRlJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJld2luZCBhIHNsaWRlciBiZWZvcmUgdGhlIGZpcnN0IHNsaWRlIG9yIGFmdGVyIHRoZSBsYXN0IG9uZS5cclxuICAgKiBJbiBcImxvb3BcIiBtb2RlLCB0aGlzIG9wdGlvbiBpcyBpZ25vcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHJld2luZDogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVHJhbnNpdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBzcGVlZDogNDAwLFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zaXRpb24gc3BlZWQgb24gcmV3aW5kIGluIG1pbGxpc2Vjb25kcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHJld2luZFNwZWVkOiAwLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gcHJldmVudCBhbnkgYWN0aW9ucyB3aGlsZSBhIHNsaWRlciBpcyB0cmFuc2l0aW9uaW5nLlxyXG4gICAqIElmIGZhbHNlLCBuYXZpZ2F0aW9uLCBkcmFnIGFuZCBzd2lwZSB3b3JrIHdoaWxlIHRoZSBzbGlkZXIgaXMgcnVubmluZy5cclxuICAgKiBFdmVuIHNvLCBpdCB3aWxsIGJlIGZvcmNlZCB0byB3YWl0IGZvciB0cmFuc2l0aW9uIGluIHNvbWUgY2FzZXMgaW4gdGhlIGxvb3AgbW9kZSB0byBzaGlmdCBhIHNsaWRlci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBEZWZpbmUgc2xpZGVyIG1heCB3aWR0aC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHdpZHRoOiAwLFxuXG4gIC8qKlxyXG4gICAqIERlZmluZSBzbGlkZXIgaGVpZ2h0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaGVpZ2h0OiAwLFxuXG4gIC8qKlxyXG4gICAqIEZpeCB3aWR0aCBvZiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDEwZW0sIDgwJSBvciA4MHZ3LlxyXG4gICAqIHBlclBhZ2UgbnVtYmVyIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoaXMgb3B0aW9uIGlzIGZhbHN5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZpeGVkV2lkdGg6IDAsXG5cbiAgLyoqXHJcbiAgICogRml4IGhlaWdodCBvZiBzbGlkZXMuIENTUyBmb3JtYXQgaXMgYWxsb3dlZCBzdWNoIGFzIDEwZW0sIDgwdmggYnV0ICUgdW5pdCBpcyBub3QgYWNjZXB0ZWQuXHJcbiAgICogaGVpZ2h0UmF0aW8gb3B0aW9uIHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoaXMgb3B0aW9uIGlzIGZhbHN5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGZpeGVkSGVpZ2h0OiAwLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBoZWlnaHQgb2Ygc2xpZGVzIGJ5IHJhdGlvIHRvIGEgc2xpZGVyIHdpZHRoLlxyXG4gICAqIFRoaXMgd2lsbCBiZSBpZ25vcmVkIHdoZW4gdGhlIGZpeGVkSGVpZ2h0IGlzIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgaGVpZ2h0UmF0aW86IDAsXG5cbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSwgc2xpZGUgd2lkdGggd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBlbGVtZW50IHdpZHRoIGl0c2VsZi5cclxuICAgKiAtIHBlclBhZ2UvcGVyTW92ZSBzaG91bGQgYmUgMS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhdXRvV2lkdGg6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIElmIHRydWUsIHNsaWRlIGhlaWdodCB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIGVsZW1lbnQgd2lkdGggaXRzZWxmLlxyXG4gICAqIC0gcGVyUGFnZS9wZXJNb3ZlIHNob3VsZCBiZSAxLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBob3cgbWFueSBzbGlkZXMgc2hvdWxkIGJlIGRpc3BsYXllZCBwZXIgcGFnZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHBlclBhZ2U6IDEsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGhvdyBtYW55IHNsaWRlcyBzaG91bGQgYmUgbW92ZWQgd2hlbiBhIHNsaWRlciBnb2VzIHRvIG5leHQgb3IgcGVydi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIHBlck1vdmU6IDAsXG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIG1hbnVhbGx5IGhvdyBtYW55IGNsb25lcyBzaG91bGQgYmUgZ2VuZXJhdGVkIG9uIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlLlxyXG4gICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgY2xvbmVzIHdpbGwgYmUgdHdpY2Ugb2YgdGhpcyBudW1iZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBjbG9uZXM6IDAsXG5cbiAgLyoqXHJcbiAgICogU3RhcnQgaW5kZXguXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBzdGFydDogMCxcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hpY2ggc2xpZGUgc2hvdWxkIGJlIGZvY3VzZWQgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHNsaWRlcyBpbiBhIHBhZ2UuXHJcbiAgICogQSBzdHJpbmcgXCJjZW50ZXJcIiBpcyBhY2NlcHRhYmxlIGZvciBjZW50ZXJpbmcgc2xpZGVzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58bnVtYmVyfHN0cmluZ31cclxuICAgKi9cbiAgZm9jdXM6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIEdhcCBiZXR3ZWVuIHNsaWRlcy4gQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMWVtLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XHJcbiAgICovXG4gIGdhcDogMCxcblxuICAvKipcclxuICAgKiBTZXQgcGFkZGluZy1sZWZ0L3JpZ2h0IGluIGhvcml6b250YWwgbW9kZSBvciBwYWRkaW5nLXRvcC9ib3R0b20gaW4gdmVydGljYWwgb25lLlxyXG4gICAqIEdpdmUgYSBzaW5nbGUgdmFsdWUgdG8gc2V0IGEgc2FtZSBzaXplIGZvciBib3RoIHNpZGVzIG9yXHJcbiAgICogZG8gYW4gb2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMuXHJcbiAgICogQWxzbywgQ1NTIGZvcm1hdCBpcyBhbGxvd2VkIHN1Y2ggYXMgMWVtLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAtIDEwOiBOdW1iZXJcclxuICAgKiAtICcxZW0nOiBDU1MgZm9ybWF0LlxyXG4gICAqIC0geyBsZWZ0OiAwLCByaWdodDogMjAgfTogT2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMgaW4gaG9yaXpvbnRhbCBtb2RlLlxyXG4gICAqIC0geyB0b3A6IDAsIGJvdHRvbTogMjAgfTogT2JqZWN0IGZvciBkaWZmZXJlbnQgc2l6ZXMgaW4gdmVydGljYWwgbW9kZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfE9iamVjdH1cclxuICAgKi9cbiAgcGFkZGluZzogMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCBhcnJvd3MuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgYXJyb3dzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgYXJyb3cgU1ZHIHBhdGggbGlrZSAnbTcuNjEgMC44MDctMi4xMi4uLicuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xuICBhcnJvd1BhdGg6ICcnLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIHBhZ2luYXRpb24oaW5kaWNhdG9yIGRvdHMpIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBwYWdpbmF0aW9uOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIGF1dG9wbGF5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcclxuICAgKiBBdXRvcGxheSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBpbnRlcnZhbDogNTAwMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHN0b3AgYXV0b3BsYXkgd2hlbiBhIHNsaWRlciBpcyBob3ZlcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHN0b3AgYXV0b3BsYXkgd2hlbiBhIHNsaWRlciBlbGVtZW50cyBhcmUgZm9jdXNlZC5cclxuICAgKiBUcnVlIGlzIHJlY29tbWVuZGVkIGZvciBhY2Nlc3NpYmlsaXR5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHBhdXNlT25Gb2N1czogdHJ1ZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHJlc2V0IHByb2dyZXNzIG9mIHRoZSBhdXRvcGxheSB0aW1lciB3aGVuIHJlc3VtZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgcmVzZXRQcm9ncmVzczogdHJ1ZSxcblxuICAvKipcclxuICAgKiBMb2FkaW5nIGltYWdlcyBsYXppbHkuXHJcbiAgICogSW1hZ2Ugc3JjIG11c3QgYmUgcHJvdmlkZWQgYnkgYSBkYXRhLXNwbGlkZS1sYXp5IGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqIC0gZmFsc2U6IERvIG5vdGhpbmcuXHJcbiAgICogLSAnbmVhcmJ5JzogT25seSBpbWFnZXMgYXJvdW5kIGFuIGFjdGl2ZSBzbGlkZSB3aWxsIGJlIGxvYWRlZC5cclxuICAgKiAtICdzZXF1ZW50aWFsJzogQWxsIGltYWdlcyB3aWxsIGJlIHNlcXVlbnRpYWxseSBsb2FkZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbnxzdHJpbmd9XHJcbiAgICovXG4gIGxhenlMb2FkOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBUaGlzIG9wdGlvbiB3b3JrcyBvbmx5IHdoZW4gYSBsYXp5TG9hZCBvcHRpb24gaXMgXCJuZWFyYnlcIi5cclxuICAgKiBEZXRlcm1pbmUgaG93IG1hbnkgcGFnZXMobm90IHNsaWRlcykgYXJvdW5kIGFuIGFjdGl2ZSBzbGlkZSBzaG91bGQgYmUgbG9hZGVkIGJlZm9yZWhhbmQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBwcmVsb2FkUGFnZXM6IDEsXG5cbiAgLyoqXHJcbiAgICogRWFzaW5nIGZvciBDU1MgdHJhbnNpdGlvbi4gRm9yIGV4YW1wbGUsIGxpbmVhciwgZWFzZSBvciBjdWJpYy1iZXppZXIoKS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIGVhc2luZzogJ2N1YmljLWJlemllciguNDIsLjY1LC4yNywuOTkpJyxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBrZXlib2FyZCBzaG9ydGN1dHNcclxuICAgKiAtIHRydWUgb3IgJ2dsb2JhbCc6IExpc3RlbiB0byBrZXlkb3duIGV2ZW50IG9mIHRoZSBkb2N1bWVudC5cclxuICAgKiAtICdmb2N1c2VkJzogTGlzdGVuIHRvIHRoZSBrZXlkb3duIGV2ZW50IG9mIHRoZSBzbGlkZXIgcm9vdCBlbGVtZW50LiB0YWJpbmRleD1cIjBcIiB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxyXG4gICAqIC0gZmFsc2U6IERpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxyXG4gICAqL1xuICBrZXlib2FyZDogJ2dsb2JhbCcsXG5cbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBhbGxvdyBtb3VzZSBkcmFnIGFuZCB0b3VjaCBzd2lwZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBkcmFnOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBhbmdsZSB0aHJlc2hvbGQgZm9yIGRyYWcuXHJcbiAgICogVGhlIHNsaWRlciBzdGFydHMgbW92aW5nIG9ubHkgd2hlbiB0aGUgZHJhZyBhbmdsZSBpcyBsZXNzIHRoYW4gdGhpcyB0aHJlc2hvbGQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBkcmFnQW5nbGVUaHJlc2hvbGQ6IDMwLFxuXG4gIC8qKlxyXG4gICAqIERpc3RhbmNlIHRocmVzaG9sZCBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGFjdGlvbiBpcyBcImZsaWNrXCIgb3IgXCJzd2lwZVwiLlxyXG4gICAqIFdoZW4gYSBkcmFnIGRpc3RhbmNlIGlzIG92ZXIgdGhpcyB2YWx1ZSwgdGhlIGFjdGlvbiB3aWxsIGJlIHRyZWF0ZWQgYXMgXCJzd2lwZVwiLCBub3QgXCJmbGlja1wiLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgc3dpcGVEaXN0YW5jZVRocmVzaG9sZDogMTUwLFxuXG4gIC8qKlxyXG4gICAqIFZlbG9jaXR5IHRocmVzaG9sZCBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGFjdGlvbiBpcyBcImZsaWNrXCIgb3IgXCJzd2lwZVwiLlxyXG4gICAqIEFyb3VuZCAwLjUgaXMgcmVjb21tZW5kZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xuICBmbGlja1ZlbG9jaXR5VGhyZXNob2xkOiAuNixcblxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgcG93ZXIgb2YgZmxpY2suIFRoZSBsYXJnZXIgbnVtYmVyIHRoaXMgaXMsIHRoZSBmYXJ0aGVyIGEgc2xpZGVyIHJ1bnMgYnkgZmxpY2suXHJcbiAgICogQXJvdW5kIDUwMCBpcyByZWNvbW1lbmRlZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG4gIGZsaWNrUG93ZXI6IDYwMCxcblxuICAvKipcclxuICAgKiBMaW1pdCBhIG51bWJlciBvZiBwYWdlcyB0byBtb3ZlIGJ5IGZsaWNrLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgZmxpY2tNYXhQYWdlczogMSxcblxuICAvKipcclxuICAgKiBTbGlkZXIgZGlyZWN0aW9uLlxyXG4gICAqIC0gJ2x0cic6IExlZnQgdG8gcmlnaHQuXHJcbiAgICogLSAncnRsJzogUmlnaHQgdG8gbGVmdC5cclxuICAgKiAtICd0dGInOiBUb3AgdG8gYm90dG9tLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgZGlyZWN0aW9uOiAnbHRyJyxcblxuICAvKipcclxuICAgKiBTZXQgaW1nIHNyYyB0byBiYWNrZ3JvdW5kLWltYWdlIG9mIGl0cyBwYXJlbnQgZWxlbWVudC5cclxuICAgKiBJbWFnZXMgd2l0aCB2YXJpb3VzIHNpemVzIGNhbiBiZSBkaXNwbGF5ZWQgYXMgc2FtZSBkaW1lbnNpb24gd2l0aG91dCBjcm9wcGluZyB3b3JrLlxyXG4gICAqIGZpeGVkSGVpZ2h0IG9yIGhlaWdodFJhdGlvIGlzIHJlcXVpcmVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGNvdmVyOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBhY2Nlc3NpYmlsaXR5KGFyaWEgYW5kIHNjcmVlbiByZWFkZXIgdGV4dHMpIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gYWRkIHRhYmluZGV4PVwiMFwiIHRvIHZpc2libGUgc2xpZGVzIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuICBzbGlkZUZvY3VzOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiBhIHNsaWRlciBpcyBuYXZpZ2F0aW9uIGZvciBhbm90aGVyLlxyXG4gICAqIFVzZSBcInN5bmNcIiBBUEkgdG8gc3luY2hyb25pemUgdHdvIHNsaWRlcnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgaXNOYXZpZ2F0aW9uOiBmYWxzZSxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHRyaW0gc3BhY2VzIGJlZm9yZSB0aGUgZmlzdCBzbGlkZSBvciBhZnRlciB0aGUgbGFzdCBvbmUgd2hlbiBcImZvY3VzXCIgaXMgbm90IDAuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdHJpbVNwYWNlOiB0cnVlLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBcImlzLWFjdGl2ZVwiIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRyYW5zaXRpb24gYXMgZGVmYXVsdC5cclxuICAgKiBJZiB0cnVlLCBpdCB3aWxsIGJlIGFkZGVkIGJlZm9yZSBtb3ZlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHVwZGF0ZU9uTW92ZTogZmFsc2UsXG5cbiAgLyoqXHJcbiAgICogVGhyb3R0bGUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgcmVzaXplIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgdGhyb3R0bGU6IDEwMCxcblxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGRlc3Ryb3kgYSBzbGlkZXIgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIGRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgZm9yIHNwZWNpZmljIGJyZWFrcG9pbnRzLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB7XHJcbiAgICogICAxMDAwOiB7XHJcbiAgICogICAgIHBlclBhZ2U6IDMsXHJcbiAgICogICAgIGdhcDogMjBcclxuICAgKiAgIH0sXHJcbiAgICogICA2MDA6IHtcclxuICAgKiAgICAgcGVyUGFnZTogMSxcclxuICAgKiAgICAgZ2FwOiA1LFxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufE9iamVjdH1cclxuICAgKi9cbiAgYnJlYWtwb2ludHM6IGZhbHNlLFxuXG4gIC8qKlxyXG4gICAqIENvbGxlY3Rpb24gb2YgY2xhc3MgbmFtZXMuXHJcbiAgICpcclxuICAgKiBAc2VlIC4vY2xhc3Nlcy5qc1xyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgY2xhc3NlczogRUxFTUVOVF9DTEFTU0VTLFxuXG4gIC8qKlxyXG4gICAqIENvbGxlY3Rpb24gb2YgaTE4biB0ZXh0cy5cclxuICAgKlxyXG4gICAqIEBzZWUgLi9pMThuLmpzXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICBpMThuOiBJMThOXG59O1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9zdGF0ZXMuanNcbi8qKlxyXG4gKiBFeHBvcnQgc3RhdGUgY29uc3RhbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBTcGxpZGUgaGFzIGJlZW4ganVzdCBjcmVhdGVkLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cbnZhciBDUkVBVEVEID0gMTtcbi8qKlxyXG4gKiBBbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gbW91bnRlZCBhbmQgaW5pdGlhbGl6ZWQuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgTU9VTlRFRCA9IDI7XG4vKipcclxuICogU3BsaWRlIGlzIHJlYWR5IGZvciB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIElETEUgPSAzO1xuLyoqXHJcbiAqIFNwbGlkZSBpcyBtb3ZpbmcuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgTU9WSU5HID0gNDtcbi8qKlxyXG4gKiBTcGxpZGUgaXMgbW92aW5nLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIERFU1RST1lFRCA9IDU7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvc3BsaWRlLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qKlxyXG4gKiBUaGUgbWFpbiBjbGFzcyBmb3IgYXBwbHlpbmcgU3BsaWRlIHRvIGFuIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG5cblxuXG4vKipcclxuICogVGhlIG1haW4gY2xhc3MgZm9yIGFwcGx5aW5nIFNwbGlkZSB0byBhbiBlbGVtZW50LFxyXG4gKiBwcm92aWRpbmcgc29tZSBBUElzIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yLlxyXG4gKi9cblxudmFyIFNwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIFNwbGlkZSBjb25zdHJ1Y3Rvci5cclxuICAgKlxyXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuIHRoZSBnaXZlbiByb290IGVsZW1lbnQgb3Igc2VsZWN0b3IgaXMgaW52YWxpZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9ICByb290ICAgICAgIC0gQSBzZWxlY3RvciBmb3IgYSByb290IGVsZW1lbnQgb3IgYW4gZWxlbWVudCBpdHNlbGYuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIG9wdGlvbnMgICAgLSBPcHRpb25hbC4gT3B0aW9ucyB0byBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIENvbXBvbmVudHMgLSBPcHRpb25hbC4gQ29tcG9uZW50cy5cclxuICAgKi9cbiAgZnVuY3Rpb24gU3BsaWRlKHJvb3QsIG9wdGlvbnMsIENvbXBvbmVudHMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKENvbXBvbmVudHMgPT09IHZvaWQgMCkge1xuICAgICAgQ29tcG9uZW50cyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50ID8gcm9vdCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdCk7XG4gICAgZXhpc3QodGhpcy5yb290LCAnQW4gaW52YWxpZCBlbGVtZW50L3NlbGVjdG9yIHdhcyBnaXZlbi4nKTtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSBudWxsO1xuICAgIHRoaXMuRXZlbnQgPSBjb3JlX2V2ZW50KCk7XG4gICAgdGhpcy5TdGF0ZSA9IHN0YXRlKENSRUFURUQpO1xuICAgIHRoaXMuU1RBVEVTID0gc3RhdGVzX25hbWVzcGFjZU9iamVjdDtcbiAgICB0aGlzLl9vID0gbWVyZ2UoREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgIHRoaXMuX2kgPSAwO1xuICAgIHRoaXMuX2MgPSBDb21wb25lbnRzO1xuICAgIHRoaXMuX2UgPSB7fTsgLy8gRXh0ZW5zaW9uc1xuXG4gICAgdGhpcy5fdCA9IG51bGw7IC8vIFRyYW5zaXRpb25cbiAgfVxuICAvKipcclxuICAgKiBDb21wb3NlIGFuZCBtb3VudCBjb21wb25lbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgRXh0ZW5zaW9ucyAtIE9wdGlvbmFsLiBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gVHJhbnNpdGlvbiAtIE9wdGlvbmFsLiBTZXQgYSBjdXN0b20gdHJhbnNpdGlvbiBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV8dW5kZWZpbmVkfSAtIFRoaXMgaW5zdGFuY2Ugb3IgdW5kZWZpbmVkIGlmIGFuIGV4Y2VwdGlvbiBvY2N1cnJlZC5cclxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBTcGxpZGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KEV4dGVuc2lvbnMsIFRyYW5zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKEV4dGVuc2lvbnMgPT09IHZvaWQgMCkge1xuICAgICAgRXh0ZW5zaW9ucyA9IHRoaXMuX2U7XG4gICAgfVxuXG4gICAgaWYgKFRyYW5zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgVHJhbnNpdGlvbiA9IHRoaXMuX3Q7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgdGhlIHN0YXRlLlxuICAgIHRoaXMuU3RhdGUuc2V0KENSRUFURUQpO1xuICAgIHRoaXMuX2UgPSBFeHRlbnNpb25zO1xuICAgIHRoaXMuX3QgPSBUcmFuc2l0aW9uO1xuICAgIHRoaXMuQ29tcG9uZW50cyA9IGNvbXBvc2UodGhpcywgbWVyZ2UodGhpcy5fYywgRXh0ZW5zaW9ucyksIFRyYW5zaXRpb24pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGVhY2godGhpcy5Db21wb25lbnRzLCBmdW5jdGlvbiAoY29tcG9uZW50LCBrZXkpIHtcbiAgICAgICAgdmFyIHJlcXVpcmVkID0gY29tcG9uZW50LnJlcXVpcmVkO1xuXG4gICAgICAgIGlmIChyZXF1aXJlZCA9PT0gdW5kZWZpbmVkIHx8IHJlcXVpcmVkKSB7XG4gICAgICAgICAgY29tcG9uZW50Lm1vdW50ICYmIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBfdGhpcy5Db21wb25lbnRzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yKGUubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIFN0YXRlID0gdGhpcy5TdGF0ZTtcbiAgICBTdGF0ZS5zZXQoTU9VTlRFRCk7XG4gICAgZWFjaCh0aGlzLkNvbXBvbmVudHMsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5tb3VudGVkICYmIGNvbXBvbmVudC5tb3VudGVkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdtb3VudGVkJyk7XG4gICAgU3RhdGUuc2V0KElETEUpO1xuICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICBhcHBseVN0eWxlKHRoaXMucm9vdCwge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gICAgfSk7XG4gICAgdGhpcy5vbignbW92ZSBkcmFnJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN0YXRlLnNldChNT1ZJTkcpO1xuICAgIH0pLm9uKCdtb3ZlZCBkcmFnZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFN0YXRlLnNldChJRExFKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBTZXQgc3luYyB0YXJnZXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwbGlkZX0gc3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTcGxpZGV9IC0gVGhpcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zeW5jID0gZnVuY3Rpb24gc3luYyhzcGxpZGUpIHtcbiAgICB0aGlzLnNpYmxpbmcgPSBzcGxpZGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgY2FsbGJhY2sgZmlyZWQgb24gdGhlIGdpdmVuIGV2ZW50KHMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnRzICAtIEFuIGV2ZW50IG5hbWUuIFVzZSBzcGFjZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSBldmVudHMuXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsc28sIG5hbWVzcGFjZSBpcyBhY2NlcHRlZCBieSBkb3QsIHN1Y2ggYXMgJ3Jlc2l6ZS57bmFtZXNwYWNlfScuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIEEgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSAgZWxtICAgICAtIE9wdGlvbmFsLiBOYXRpdmUgZXZlbnQgd2lsbCBiZSBsaXN0ZW5lZCB0byB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgIG9wdGlvbnMgLSBPcHRpb25hbC4gT3B0aW9ucyBmb3IgYWRkRXZlbnRMaXN0ZW5lci5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1NwbGlkZX0gLSBUaGlzIGluc3RhbmNlLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uID0gZnVuY3Rpb24gb24oZXZlbnRzLCBoYW5kbGVyLCBlbG0sIG9wdGlvbnMpIHtcbiAgICBpZiAoZWxtID09PSB2b2lkIDApIHtcbiAgICAgIGVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuRXZlbnQub24oZXZlbnRzLCBoYW5kbGVyLCBlbG0sIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlIHRoZSBnaXZlbiBldmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgZXZlbnRzIC0gQSBldmVudCBuYW1lLlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtICAgIC0gT3B0aW9uYWwuIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoaXMgYXJnIGlzIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3BsaWRlfSAtIFRoaXMgaW5zdGFuY2UuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWxtKSB7XG4gICAgaWYgKGVsbSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbG0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuRXZlbnQub2ZmKGV2ZW50cywgZWxtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gQW4gZXZlbnQgbmFtZS5cclxuICAgKiBAcGFyYW0geyp9ICAgICAgYXJncyAgLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyBwYXNzZWQgdG8gaGFuZGxlcnMuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMkRXZlbnQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAoX3RoaXMkRXZlbnQgPSB0aGlzLkV2ZW50KS5lbWl0LmFwcGx5KF90aGlzJEV2ZW50LCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBHbyB0byB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb250cm9sIC0gQSBjb250cm9sIHBhdHRlcm4uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgICAgICB3YWl0ICAgIC0gT3B0aW9uYWwuIFdoZXRoZXIgdG8gd2FpdCBmb3IgdHJhbnNpdGlvbi5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nbyA9IGZ1bmN0aW9uIGdvKGNvbnRyb2wsIHdhaXQpIHtcbiAgICBpZiAod2FpdCA9PT0gdm9pZCAwKSB7XG4gICAgICB3YWl0ID0gdGhpcy5vcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLlN0YXRlLmlzKElETEUpIHx8IHRoaXMuU3RhdGUuaXMoTU9WSU5HKSAmJiAhd2FpdCkge1xuICAgICAgdGhpcy5Db21wb25lbnRzLkNvbnRyb2xsZXIuZ28oY29udHJvbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxyXG4gICAqIFZlcmlmeSB3aGV0aGVyIHRoZSBzbGlkZXIgdHlwZSBpcyB0aGUgZ2l2ZW4gb25lIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQSBzbGlkZXIgdHlwZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGVyIHR5cGUgaXMgdGhlIHByb3ZpZGVkIHR5cGUgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmlzID0gZnVuY3Rpb24gaXModHlwZSkge1xuICAgIHJldHVybiB0eXBlID09PSB0aGlzLl9vLnR5cGU7XG4gIH1cbiAgLyoqXHJcbiAgICogSW5zZXJ0IGEgc2xpZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBzbGlkZSAtIEEgc2xpZGUgZWxlbWVudCB0byBiZSBhZGRlZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gICAgICAgICBpbmRleCAtIEEgc2xpZGUgd2lsbCBiZSBhZGRlZCBhdCB0aGUgcG9zaXRpb24uXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNsaWRlLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5hZGQoc2xpZGUsIGluZGV4LCB0aGlzLnJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBzbGlkZSBkZXNpZ25hdGVkIGJ5IHRoZSBpbmRleC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIEEgc2xpZGUgaW5kZXguXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5Db21wb25lbnRzLkVsZW1lbnRzLnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRGVzdHJveSBhbGwgU2xpZGUgb2JqZWN0cyBhbmQgY2xvbmVzIGFuZCByZWNyZWF0ZSB0aGVtIGFnYWluLlxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHRoaXMuZW1pdCgncmVmcmVzaDpiZWZvcmUnKS5lbWl0KCdyZWZyZXNoJykuZW1pdCgncmVzaXplJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogRGVzdHJveSB0aGUgU3BsaWRlLlxyXG4gICAqIFwiQ29tcGxldGVseVwiIGJvb2xlYW4gaXMgbWFpbmx5IGZvciBicmVha3BvaW50cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tcGxldGVseSAtIERlc3Ryb3kgY29tcGxldGVseS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoY29tcGxldGVseSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb21wbGV0ZWx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQb3N0cG9uZSBkZXN0cm95IGJlY2F1c2UgaXQgc2hvdWxkIGJlIGRvbmUgYWZ0ZXIgbW91bnQuXG4gICAgaWYgKHRoaXMuU3RhdGUuaXMoQ1JFQVRFRCkpIHtcbiAgICAgIHRoaXMub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZXModGhpcy5Db21wb25lbnRzKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQuZGVzdHJveSAmJiBjb21wb25lbnQuZGVzdHJveShjb21wbGV0ZWx5KTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knLCBjb21wbGV0ZWx5KTsgLy8gRGVzdHJveSBhbGwgZXZlbnQgaGFuZGxlcnMsIGluY2x1ZGluZyBvbmVzIGZvciBuYXRpdmUgZXZlbnRzLlxuXG4gICAgdGhpcy5FdmVudC5kZXN0cm95KCk7XG4gICAgdGhpcy5TdGF0ZS5zZXQoREVTVFJPWUVEKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGN1cnJlbnQgc2xpZGUgaW5kZXguXHJcbiAgIC8vICovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoU3BsaWRlLCBbe1xuICAgIGtleTogXCJpbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaW5kZXggLSBBIG5ldyBpbmRleC5cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmRleCkge1xuICAgICAgdGhpcy5faSA9IHBhcnNlSW50KGluZGV4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gbGVuZ3RoIG9mIHNsaWRlcy5cclxuICAgICAqIFRoaXMgaXMgYW4gYWxpYXMgb2YgRWxlbWVudHMubGVuZ3RoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIG51bWJlciBvZiBzbGlkZXMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuQ29tcG9uZW50cy5FbGVtZW50cy5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIE9wdGlvbnMgb2JqZWN0LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcHRpb25zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb3B0aW9ucyB3aXRoIG1lcmdpbmcgdGhlIGdpdmVuIG9iamVjdCB0byB0aGUgY3VycmVudCBvbmUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBOZXcgb3B0aW9ucy5cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB2YXIgY3JlYXRlZCA9IHRoaXMuU3RhdGUuaXMoQ1JFQVRFRCk7XG5cbiAgICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vID0gbWVyZ2UodGhpcy5fbywgb3B0aW9ucyk7XG5cbiAgICAgIGlmICghY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQnLCB0aGlzLl9vKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGNsYXNzIGxpc3QuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIFNwbGlkZS5vcHRpb25zLmNsYXNzTGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNsYXNzIGxpc3QuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNsYXNzZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vLmNsYXNzZXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBpMThuIHN0cmluZ3MuXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFsaWFzIG9mIFNwbGlkZS5vcHRpb25zLmkxOG4uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBpMThuIHN0cmluZ3MuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImkxOG5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vLmkxOG47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNwbGlkZTtcbn0oKTtcblxuXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9vcHRpb25zL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaW5pdGlhbGl6aW5nIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBpbml0aWFsaXppbmcgb3B0aW9ucy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IG9wdGlvbnMgPSAoZnVuY3Rpb24gKFNwbGlkZSkge1xuICAvKipcclxuICAgKiBSZXRyaWV2ZSBvcHRpb25zIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlLlxyXG4gICAqIE5vdGUgdGhhdCBJRTEwIGRvZXNuJ3Qgc3VwcG9ydCBkYXRhc2V0IHByb3BlcnR5LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIG9wdGlvbnMgPSBnZXRBdHRyaWJ1dGUoU3BsaWRlLnJvb3QsICdkYXRhLXNwbGlkZScpO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgIFNwbGlkZS5vcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICAgIFNwbGlkZS5pbmRleCA9IFNwbGlkZS5vcHRpb25zLnN0YXJ0O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbnN0YW50cy9kaXJlY3Rpb25zLmpzXG4vKipcclxuICogRXhwb3J0IGxheW91dCBtb2Rlcy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogRW51bWVyYXRlIHNsaWRlcyBmcm9tIGxlZnQgdG8gcmlnaHQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIExUUiA9ICdsdHInO1xuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFJUTCA9ICdydGwnO1xuLyoqXHJcbiAqIEVudW1lcmF0ZSBzbGlkZXMgaW4gYSBjb2wuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgVFRCID0gJ3R0Yic7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9lbGVtZW50cy9zbGlkZS5qc1xuLyoqXHJcbiAqIFRoZSBzdWIgY29tcG9uZW50IGZvciBoYW5kbGluZyBlYWNoIHNsaWRlLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG4vKipcclxuICogRXZlbnRzIGZvciByZXN0b3Jpbmcgb3JpZ2luYWwgc3R5bGVzLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNUWUxFX1JFU1RPUkVfRVZFTlRTID0gJ3VwZGF0ZS5zbGlkZSc7XG4vKipcclxuICogVGhlIHN1YiBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGVhY2ggc2xpZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSAgU3BsaWRlICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgaW5kZXggICAgIC0gQW4gdW5pcXVlIHNsaWRlIGluZGV4LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gIHJlYWxJbmRleCAtIENsb25lcyBzaG91bGQgcGFzcyBhIHJlYWwgc2xpZGUgaW5kZXguXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2xpZGUgICAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHN1YiBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBlbGVtZW50c19zbGlkZSA9IChmdW5jdGlvbiAoU3BsaWRlLCBpbmRleCwgcmVhbEluZGV4LCBzbGlkZSkge1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHVwZGF0ZSBcImlzLWFjdGl2ZVwiIGNsYXNzIGJlZm9yZSBvciBhZnRlciB0cmFuc2l0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG4gIHZhciB1cGRhdGVPbk1vdmUgPSBTcGxpZGUub3B0aW9ucy51cGRhdGVPbk1vdmU7XG4gIC8qKlxyXG4gICAqIEV2ZW50cyB3aGVuIHRoZSBzbGlkZSBzdGF0dXMgaXMgdXBkYXRlZC5cclxuICAgKiBBcHBlbmQgYSBuYW1lc3BhY2UgdG8gcmVtb3ZlIGxpc3RlbmVycyBsYXRlci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG5cbiAgdmFyIFNUQVRVU19VUERBVEVfRVZFTlRTID0gJ3JlYWR5LnNsaWRlIHVwZGF0ZWQuc2xpZGUgcmVzaXplZC5zbGlkZSBtb3ZlZC5zbGlkZScgKyAodXBkYXRlT25Nb3ZlID8gJyBtb3ZlLnNsaWRlJyA6ICcnKTtcbiAgLyoqXHJcbiAgICogU2xpZGUgc3ViIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBTbGlkZSA9IHtcbiAgICAvKipcclxuICAgICAqIFNsaWRlIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICAgKi9cbiAgICBzbGlkZTogc2xpZGUsXG5cbiAgICAvKipcclxuICAgICAqIFNsaWRlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBpbmRleDogaW5kZXgsXG5cbiAgICAvKipcclxuICAgICAqIFJlYWwgaW5kZXggZm9yIGNsb25lcy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgcmVhbEluZGV4OiByZWFsSW5kZXgsXG5cbiAgICAvKipcclxuICAgICAqIENvbnRhaW5lciBlbGVtZW50IGlmIGF2YWlsYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICAgKi9cbiAgICBjb250YWluZXI6IGNoaWxkKHNsaWRlLCBTcGxpZGUuY2xhc3Nlcy5jb250YWluZXIpLFxuXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgaXMgYSBjbG9uZWQgc2xpZGUgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgaXNDbG9uZTogcmVhbEluZGV4ID4gLTEsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5pc0Nsb25lKSB7XG4gICAgICAgIHNsaWRlLmlkID0gU3BsaWRlLnJvb3QuaWQgKyBcIi1zbGlkZVwiICsgcGFkKGluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIFNwbGlkZS5vbihTVEFUVVNfVVBEQVRFX0VWRU5UUywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlKCk7XG4gICAgICB9KS5vbihTVFlMRV9SRVNUT1JFX0VWRU5UUywgcmVzdG9yZVN0eWxlcykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3BsaWRlLmVtaXQoJ2NsaWNrJywgX3RoaXMpO1xuICAgICAgfSwgc2xpZGUpO1xuICAgICAgLypcclxuICAgICAgICogQWRkIFwiaXMtYWN0aXZlXCIgY2xhc3MgdG8gYSBjbG9uZSBlbGVtZW50IHRlbXBvcmFyaWx5XHJcbiAgICAgICAqIGFuZCBpdCB3aWxsIGJlIHJlbW92ZWQgb24gXCJtb3ZlZFwiIGV2ZW50LlxyXG4gICAgICAgKi9cblxuICAgICAgaWYgKHVwZGF0ZU9uTW92ZSkge1xuICAgICAgICBTcGxpZGUub24oJ21vdmUuc2xpZGUnLCBmdW5jdGlvbiAobmV3SW5kZXgpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPT09IHJlYWxJbmRleCkge1xuICAgICAgICAgICAgX3VwZGF0ZSh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gTWFrZSBzdXJlIHRoZSBzbGlkZSBpcyBzaG93bi5cblxuXG4gICAgICBhcHBseVN0eWxlKHNsaWRlLCB7XG4gICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICB9KTsgLy8gSG9sZCB0aGUgb3JpZ2luYWwgc3R5bGVzLlxuXG4gICAgICB0aGlzLnN0eWxlcyA9IGdldEF0dHJpYnV0ZShzbGlkZSwgJ3N0eWxlJykgfHwgJyc7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBTcGxpZGUub2ZmKFNUQVRVU19VUERBVEVfRVZFTlRTKS5vZmYoU1RZTEVfUkVTVE9SRV9FVkVOVFMpLm9mZignY2xpY2snLCBzbGlkZSk7XG4gICAgICByZW1vdmVDbGFzcyhzbGlkZSwgdmFsdWVzKFNUQVRVU19DTEFTU0VTKSk7XG4gICAgICByZXN0b3JlU3R5bGVzKCk7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsICdzdHlsZScpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBhY3RpdmUgYW5kIHZpc2libGUgc3RhdHVzLlxyXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBfdXBkYXRlKHRoaXMuaXNBY3RpdmUoKSwgZmFsc2UpO1xuXG4gICAgICBfdXBkYXRlKHRoaXMuaXNWaXNpYmxlKCksIHRydWUpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzbGlkZSBpcyBhY3RpdmUgb3Igbm90LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgYWN0aXZlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICAgIHJldHVybiBTcGxpZGUuaW5kZXggPT09IGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzbGlkZSBpcyB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydCBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBzbGlkZSBpcyB2aXNpYmxlIG9yIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xuICAgIGlzVmlzaWJsZTogZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcblxuICAgICAgaWYgKFNwbGlkZS5pcyhGQURFKSB8fCBhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNlaWwgPSBNYXRoLmNlaWw7XG4gICAgICB2YXIgdHJhY2tSZWN0ID0gZ2V0UmVjdChTcGxpZGUuQ29tcG9uZW50cy5FbGVtZW50cy50cmFjayk7XG4gICAgICB2YXIgc2xpZGVSZWN0ID0gZ2V0UmVjdChzbGlkZSk7XG5cbiAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQikge1xuICAgICAgICByZXR1cm4gdHJhY2tSZWN0LnRvcCA8PSBzbGlkZVJlY3QudG9wICYmIHNsaWRlUmVjdC5ib3R0b20gPD0gY2VpbCh0cmFja1JlY3QuYm90dG9tKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYWNrUmVjdC5sZWZ0IDw9IHNsaWRlUmVjdC5sZWZ0ICYmIHNsaWRlUmVjdC5yaWdodCA8PSBjZWlsKHRyYWNrUmVjdC5yaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIGhvdyBmYXIgdGhpcyBzbGlkZSBpcyBmcm9tIGFub3RoZXIgc2xpZGUgYW5kXHJcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiB0aGUgZGlzdGFuY2UgaXMgd2l0aGluIHRoZSBnaXZlbiBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZyb20gICAtIEluZGV4IG9mIGEgdGFyZ2V0IHNsaWRlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpdGhpbiAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIHdpdGhpbiB0aGlzIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgdGhlIHNsaWRlIGlzIHdpdGhpbiB0aGUgbnVtYmVyIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xuICAgIGlzV2l0aGluOiBmdW5jdGlvbiBpc1dpdGhpbihmcm9tLCB3aXRoaW4pIHtcbiAgICAgIHZhciBkaWZmID0gTWF0aC5hYnMoZnJvbSAtIGluZGV4KTtcblxuICAgICAgaWYgKCFTcGxpZGUuaXMoU0xJREUpICYmICF0aGlzLmlzQ2xvbmUpIHtcbiAgICAgICAgZGlmZiA9IE1hdGgubWluKGRpZmYsIFNwbGlkZS5sZW5ndGggLSBkaWZmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpZmYgPCB3aXRoaW47XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBVcGRhdGUgY2xhc3NlcyBmb3IgYWN0aXZpdHkgb3IgdmlzaWJpbGl0eS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlICAgICAgICAtIElzIGFjdGl2ZS92aXNpYmxlIG9yIG5vdC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvclZpc2liaWxpdHkgLSBUb2dnbGUgY2xhc3NlcyBmb3IgYWN0aXZpdHkgb3IgdmlzaWJpbGl0eS5cclxuICAgKi9cblxuICBmdW5jdGlvbiBfdXBkYXRlKGFjdGl2ZSwgZm9yVmlzaWJpbGl0eSkge1xuICAgIHZhciB0eXBlID0gZm9yVmlzaWJpbGl0eSA/ICd2aXNpYmxlJyA6ICdhY3RpdmUnO1xuICAgIHZhciBjbGFzc05hbWUgPSBTVEFUVVNfQ0xBU1NFU1t0eXBlXTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFkZENsYXNzKHNsaWRlLCBjbGFzc05hbWUpO1xuICAgICAgU3BsaWRlLmVtaXQoXCJcIiArIHR5cGUsIFNsaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhc0NsYXNzKHNsaWRlLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlLCBjbGFzc05hbWUpO1xuICAgICAgICBTcGxpZGUuZW1pdChcIlwiICsgKGZvclZpc2liaWxpdHkgPyAnaGlkZGVuJyA6ICdpbmFjdGl2ZScpLCBTbGlkZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHN0eWxlcy5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVTdHlsZXMoKSB7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCAnc3R5bGUnLCBTbGlkZS5zdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIFNsaWRlO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9lbGVtZW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1haW4gZWxlbWVudHMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG4vKipcclxuICogVGhlIHByb3BlcnR5IG5hbWUgZm9yIFVJRCBzdG9yZWQgaW4gYSB3aW5kb3cgb2JqZWN0LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFVJRF9OQU1FID0gJ3VpZCc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbWFpbiBlbGVtZW50cy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvbXBvbmVudHNfZWxlbWVudHMgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBIb2xkIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cbiAgdmFyIHJvb3QgPSBTcGxpZGUucm9vdDtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgY2xhc3MgbGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIGNsYXNzZXMgPSBTcGxpZGUuY2xhc3NlcztcbiAgLyoqXHJcbiAgICogU3RvcmUgU2xpZGUgb2JqZWN0cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cblxuICB2YXIgU2xpZGVzID0gW107XG4gIC8qXHJcbiAgICogQXNzaWduIHVuaXF1ZSBJRCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGl0IGRvZXNuJ3QgaGF2ZSB0aGUgb25lLlxyXG4gICAqIE5vdGUgdGhhdCBJRSBkb2Vzbid0IHN1cHBvcnQgcGFkU3RhcnQoKSB0byBmaWxsIHRoZSB1aWQgYnkgMC5cclxuICAgKi9cblxuICBpZiAoIXJvb3QuaWQpIHtcbiAgICB3aW5kb3cuc3BsaWRlID0gd2luZG93LnNwbGlkZSB8fCB7fTtcbiAgICB2YXIgdWlkID0gd2luZG93LnNwbGlkZVtVSURfTkFNRV0gfHwgMDtcbiAgICB3aW5kb3cuc3BsaWRlW1VJRF9OQU1FXSA9ICsrdWlkO1xuICAgIHJvb3QuaWQgPSBcInNwbGlkZVwiICsgcGFkKHVpZCk7XG4gIH1cbiAgLyoqXHJcbiAgICogRWxlbWVudHMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cblxuICB2YXIgRWxlbWVudHMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBDb2xsZWN0IG1haW4gZWxlbWVudHMgYW5kIHN0b3JlIHRoZW0gYXMgbWVtYmVyIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIFNwbGlkZS5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuXG4gICAgICAgIF90aGlzLmluaXQoKTtcbiAgICAgIH0pLm9uKCd1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgICBhZGRDbGFzcyhyb290LCBnZXRDbGFzc2VzKCkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBTbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgU2xpZGUuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBTbGlkZXMgPSBbXTtcbiAgICAgIHJlbW92ZUNsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGNvbGxlY3QoKTtcbiAgICAgIGFkZENsYXNzKHJvb3QsIGdldENsYXNzZXMoKSk7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaW5kZXgpIHtcbiAgICAgICAgX3RoaXMyLnJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgLTEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBzbGlkZSB0byBjcmVhdGUgYSBTbGlkZSBvYmplY3QgYW5kIGhhbmRsZSBpdHMgYmVoYXZpb3IuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBzbGlkZSAgICAgLSBBIHNsaWRlIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAgICAtIEEgdW5pcXVlIGluZGV4LiBUaGlzIGNhbiBiZSBuZWdhdGl2ZS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgcmVhbEluZGV4IC0gQSByZWFsIGluZGV4IGZvciBjbG9uZXMuIFNldCAtMSBmb3IgcmVhbCBzbGlkZXMuXHJcbiAgICAgKi9cbiAgICByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCByZWFsSW5kZXgpIHtcbiAgICAgIHZhciBTbGlkZU9iamVjdCA9IGVsZW1lbnRzX3NsaWRlKFNwbGlkZSwgaW5kZXgsIHJlYWxJbmRleCwgc2xpZGUpO1xuICAgICAgU2xpZGVPYmplY3QubW91bnQoKTtcbiAgICAgIFNsaWRlcy5wdXNoKFNsaWRlT2JqZWN0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIFNsaWRlIG9iamVjdCBkZXNpZ25hdGVkIGJ5IHRoZSBpbmRleC5cclxuICAgICAqIE5vdGUgdGhhdCBcImZpbmRcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9IC0gQSBTbGlkZSBvYmplY3QgaWYgYXZhaWxhYmxlLiBVbmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXG4gICAgZ2V0U2xpZGU6IGZ1bmN0aW9uIGdldFNsaWRlKGluZGV4KSB7XG4gICAgICByZXR1cm4gU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLmluZGV4ID09PSBpbmRleDtcbiAgICAgIH0pWzBdO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbGwgU2xpZGUgb2JqZWN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDbG9uZXMgLSBXaGV0aGVyIHRvIGluY2x1ZGUgY2xvbmVkIHNsaWRlcyBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0W119IC0gU2xpZGUgb2JqZWN0cy5cclxuICAgICAqL1xuICAgIGdldFNsaWRlczogZnVuY3Rpb24gZ2V0U2xpZGVzKGluY2x1ZGVDbG9uZXMpIHtcbiAgICAgIHJldHVybiBpbmNsdWRlQ2xvbmVzID8gU2xpZGVzIDogU2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuICFTbGlkZS5pc0Nsb25lO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIFNsaWRlIG9iamVjdHMgYmVsb25naW5nIHRvIHRoZSBnaXZlbiBwYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gQSBwYWdlIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gLSBBbiBhcnJheSBjb250YWluaW5nIFNsaWRlIG9iamVjdHMuXHJcbiAgICAgKi9cbiAgICBnZXRTbGlkZXNCeVBhZ2U6IGZ1bmN0aW9uIGdldFNsaWRlc0J5UGFnZShwYWdlKSB7XG4gICAgICB2YXIgaWR4ID0gQ29tcG9uZW50cy5Db250cm9sbGVyLnRvSW5kZXgocGFnZSk7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIG1heCA9IG9wdGlvbnMuZm9jdXMgIT09IGZhbHNlID8gMSA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICAgIHJldHVybiBTbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBpbmRleCA9IF9yZWYuaW5kZXg7XG4gICAgICAgIHJldHVybiBpZHggPD0gaW5kZXggJiYgaW5kZXggPCBpZHggKyBtYXg7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnQgYSBzbGlkZSB0byBhIHNsaWRlci5cclxuICAgICAqIE5lZWQgdG8gcmVmcmVzaCBTcGxpZGUgYWZ0ZXIgYWRkaW5nIGEgc2xpZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtOb2RlfHN0cmluZ30gc2xpZGUgICAgLSBBIHNsaWRlIGVsZW1lbnQgdG8gYmUgYWRkZWQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gICAgICBpbmRleCAgICAtIEEgc2xpZGUgd2lsbCBiZSBhZGRlZCBhdCB0aGUgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgICBjYWxsYmFjayAtIENhbGxlZCByaWdodCBhZnRlciB0aGUgc2xpZGUgaXMgYWRkZWQgdG8gdGhlIERPTSB0cmVlLlxyXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoc2xpZGUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2xpZGUgPSBkb21pZnkoc2xpZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2xpZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHZhciByZWYgPSB0aGlzLnNsaWRlc1tpbmRleF07IC8vIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIG1vdW50KCkgb2YgYSBTbGlkZSBjb21wb25lbnQuXG5cbiAgICAgICAgYXBwbHlTdHlsZShzbGlkZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgYmVmb3JlKHNsaWRlLCByZWYpO1xuICAgICAgICAgIHRoaXMuc2xpZGVzLnNwbGljZShpbmRleCwgMCwgc2xpZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcGVuZCh0aGlzLmxpc3QsIHNsaWRlKTtcbiAgICAgICAgICB0aGlzLnNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRlZChzbGlkZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc2xpZGUgZnJvbSBhIHNsaWRlci5cclxuICAgICAqIE5lZWQgdG8gcmVmcmVzaCBTcGxpZGUgYWZ0ZXIgcmVtb3ZpbmcgYSBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XG4gICAgICBkb21fcmVtb3ZlKHRoaXMuc2xpZGVzLnNwbGljZShpbmRleCwgMSlbMF0pO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIGZvciBlYWNoIFNsaWRlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb24uIFRoZSBmaXJzdCBhcmd1bWVudCB3aWxsIGJlIHRoZSBTbGlkZSBvYmplY3QuXHJcbiAgICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gICAgICBTbGlkZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlcyBsZW5ndGggd2l0aG91dCBjbG9uZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlIGxlbmd0aC5cclxuICAgICAqL1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBcIlNsaWRlT2JqZWN0c1wiIGxlbmd0aCBpbmNsdWRpbmcgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBTbGlkZSBsZW5ndGggaW5jbHVkaW5nIGNsb25lcy5cclxuICAgICAqL1xuICAgIGdldCB0b3RhbCgpIHtcbiAgICAgIHJldHVybiBTbGlkZXMubGVuZ3RoO1xuICAgIH1cblxuICB9O1xuICAvKipcclxuICAgKiBDb2xsZWN0IGVsZW1lbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgRWxlbWVudHMuc2xpZGVyID0gY2hpbGQocm9vdCwgY2xhc3Nlcy5zbGlkZXIpO1xuICAgIEVsZW1lbnRzLnRyYWNrID0gZmluZChyb290LCBcIi5cIiArIGNsYXNzZXMudHJhY2spO1xuICAgIEVsZW1lbnRzLmxpc3QgPSBjaGlsZChFbGVtZW50cy50cmFjaywgY2xhc3Nlcy5saXN0KTtcbiAgICBleGlzdChFbGVtZW50cy50cmFjayAmJiBFbGVtZW50cy5saXN0LCAnVHJhY2sgb3IgbGlzdCB3YXMgbm90IGZvdW5kLicpO1xuICAgIEVsZW1lbnRzLnNsaWRlcyA9IGNoaWxkcmVuKEVsZW1lbnRzLmxpc3QsIGNsYXNzZXMuc2xpZGUpO1xuICAgIHZhciBhcnJvd3MgPSBmaW5kUGFydHMoY2xhc3Nlcy5hcnJvd3MpO1xuICAgIEVsZW1lbnRzLmFycm93cyA9IHtcbiAgICAgIHByZXY6IGZpbmQoYXJyb3dzLCBcIi5cIiArIGNsYXNzZXMucHJldiksXG4gICAgICBuZXh0OiBmaW5kKGFycm93cywgXCIuXCIgKyBjbGFzc2VzLm5leHQpXG4gICAgfTtcbiAgICB2YXIgYXV0b3BsYXkgPSBmaW5kUGFydHMoY2xhc3Nlcy5hdXRvcGxheSk7XG4gICAgRWxlbWVudHMuYmFyID0gZmluZChmaW5kUGFydHMoY2xhc3Nlcy5wcm9ncmVzcyksIFwiLlwiICsgY2xhc3Nlcy5iYXIpO1xuICAgIEVsZW1lbnRzLnBsYXkgPSBmaW5kKGF1dG9wbGF5LCBcIi5cIiArIGNsYXNzZXMucGxheSk7XG4gICAgRWxlbWVudHMucGF1c2UgPSBmaW5kKGF1dG9wbGF5LCBcIi5cIiArIGNsYXNzZXMucGF1c2UpO1xuICAgIEVsZW1lbnRzLnRyYWNrLmlkID0gRWxlbWVudHMudHJhY2suaWQgfHwgcm9vdC5pZCArIFwiLXRyYWNrXCI7XG4gICAgRWxlbWVudHMubGlzdC5pZCA9IEVsZW1lbnRzLmxpc3QuaWQgfHwgcm9vdC5pZCArIFwiLWxpc3RcIjtcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm4gY2xhc3MgbmFtZXMgZm9yIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKCkge1xuICAgIHZhciByb290Q2xhc3MgPSBjbGFzc2VzLnJvb3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICByZXR1cm4gW3Jvb3RDbGFzcyArIFwiLS1cIiArIG9wdGlvbnMudHlwZSwgcm9vdENsYXNzICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24sIG9wdGlvbnMuZHJhZyA/IHJvb3RDbGFzcyArIFwiLS1kcmFnZ2FibGVcIiA6ICcnLCBvcHRpb25zLmlzTmF2aWdhdGlvbiA/IHJvb3RDbGFzcyArIFwiLS1uYXZcIiA6ICcnLCBTVEFUVVNfQ0xBU1NFUy5hY3RpdmVdO1xuICB9XG4gIC8qKlxyXG4gICAqIEZpbmQgcGFydHMgb25seSBmcm9tIGNoaWxkcmVuIG9mIHRoZSByb290IG9yIHRyYWNrLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7RWxlbWVudH0gLSBBIGZvdW5kIGVsZW1lbnQgb3IgdW5kZWZpbmVkLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZmluZFBhcnRzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjaGlsZChyb290LCBjbGFzc05hbWUpIHx8IGNoaWxkKEVsZW1lbnRzLnNsaWRlciwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBFbGVtZW50cztcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvY29udHJvbGxlci9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogU3RvcmUgY3VycmVudCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIG9wdGlvbnM7XG4gIC8qKlxyXG4gICAqIFRydWUgaWYgdGhlIHNsaWRlIGlzIExPT1AgbW9kZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0xvb3A7XG4gIC8qKlxyXG4gICAqIENvbnRyb2xsZXIgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENvbnRyb2xsZXIgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICBpc0xvb3AgPSBTcGxpZGUuaXMoTE9PUCk7XG4gICAgICBiaW5kKCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogTWFrZSB0cmFjayBydW4gYnkgdGhlIGdpdmVuIGNvbnRyb2wuXHJcbiAgICAgKiAtIFwiK3tpfVwiIDogSW5jcmVtZW50IHRoZSBzbGlkZSBpbmRleCBieSBpLlxyXG4gICAgICogLSBcIi17aX1cIiA6IERlY3JlbWVudCB0aGUgc2xpZGUgaW5kZXggYnkgaS5cclxuICAgICAqIC0gXCJ7aX1cIiAgOiBHbyB0byB0aGUgc2xpZGUgd2hvc2UgaW5kZXggaXMgaS5cclxuICAgICAqIC0gXCI+XCIgICAgOiBHbyB0byBuZXh0IHBhZ2UuXHJcbiAgICAgKiAtIFwiPFwiICAgIDogR28gdG8gcHJldiBwYWdlLlxyXG4gICAgICogLSBcIj57aX1cIiA6IEdvIHRvIHBhZ2UgaS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGNvbnRyb2wgIC0gQSBjb250cm9sIHBhdHRlcm4uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgIHNpbGVudGx5IC0gR28gdG8gdGhlIGRlc3RpbmF0aW9uIHdpdGhvdXQgZXZlbnQgZW1pc3Npb24uXHJcbiAgICAgKi9cbiAgICBnbzogZnVuY3Rpb24gZ28oY29udHJvbCwgc2lsZW50bHkpIHtcbiAgICAgIHZhciBkZXN0SW5kZXggPSB0aGlzLnRyaW0odGhpcy5wYXJzZShjb250cm9sKSk7XG4gICAgICBDb21wb25lbnRzLlRyYWNrLmdvKGRlc3RJbmRleCwgdGhpcy5yZXdpbmQoZGVzdEluZGV4KSwgc2lsZW50bHkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFBhcnNlIHRoZSBnaXZlbiBjb250cm9sIGFuZCByZXR1cm4gdGhlIGRlc3RpbmF0aW9uIGluZGV4IGZvciB0aGUgdHJhY2suXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRyb2wgLSBBIGNvbnRyb2wgdGFyZ2V0IHBhdHRlcm4uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgcGFyc2VkIHRhcmdldC5cclxuICAgICAqL1xuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShjb250cm9sKSB7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgICB2YXIgbWF0Y2hlcyA9IFN0cmluZyhjb250cm9sKS5tYXRjaCgvKFsrXFwtPD5dKykoXFxkKyk/Lyk7XG4gICAgICB2YXIgaW5kaWNhdG9yID0gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiAnJztcbiAgICAgIHZhciBudW1iZXIgPSBtYXRjaGVzID8gcGFyc2VJbnQobWF0Y2hlc1syXSkgOiAwO1xuXG4gICAgICBzd2l0Y2ggKGluZGljYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBpbmRleCArPSBudW1iZXIgfHwgMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBpbmRleCAtPSBudW1iZXIgfHwgMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgaW5kZXggPSBwYXJzZVBhZ2UobnVtYmVyLCBpbmRleCwgaW5kaWNhdG9yID09PSAnPCcpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludChjb250cm9sKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgaW5kZXggZnJvbSB0aGUgZ2l2ZW4gcGFnZSBudW1iZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSBjb21wdXRlZCBwYWdlIG51bWJlci5cclxuICAgICAqL1xuICAgIHRvSW5kZXg6IGZ1bmN0aW9uIHRvSW5kZXgocGFnZSkge1xuICAgICAgaWYgKGhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuICAgICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgICB2YXIgaW5kZXggPSBwYWdlICogcGVyUGFnZTtcbiAgICAgIGluZGV4ID0gaW5kZXggLSAodGhpcy5wYWdlTGVuZ3RoICogcGVyUGFnZSAtIGxlbmd0aCkgKiBmbG9vcihpbmRleCAvIGxlbmd0aCk7IC8vIEFkanVzdG1lbnQgZm9yIHRoZSBsYXN0IHBhZ2UuXG5cbiAgICAgIGlmIChsZW5ndGggLSBwZXJQYWdlIDw9IGluZGV4ICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gbGVuZ3RoIC0gcGVyUGFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgcGFnZSBudW1iZXIgZnJvbSB0aGUgZ2l2ZW4gc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgY29tcHV0ZWQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cbiAgICB0b1BhZ2U6IGZ1bmN0aW9uIHRvUGFnZShpbmRleCkge1xuICAgICAgaWYgKGhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHZhciBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlOyAvLyBNYWtlIHRoZSBsYXN0IFwicGVyUGFnZVwiIG51bWJlciBvZiBzbGlkZXMgYmVsb25nIHRvIHRoZSBsYXN0IHBhZ2UuXG5cbiAgICAgIGlmIChsZW5ndGggLSBwZXJQYWdlIDw9IGluZGV4ICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmbG9vcigobGVuZ3RoIC0gMSkgLyBwZXJQYWdlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsb29yKGluZGV4IC8gcGVyUGFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVHJpbSB0aGUgZ2l2ZW4gaW5kZXggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IG1vZGUuXHJcbiAgICAgKiBJbmRleCBiZWluZyByZXR1cm5lZCBjb3VsZCBiZSBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBpbiBMb29wIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQW4gaW5kZXggYmVpbmcgdHJpbW1lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQSB0cmltbWVkIGluZGV4LlxyXG4gICAgICovXG4gICAgdHJpbTogZnVuY3Rpb24gdHJpbShpbmRleCkge1xuICAgICAgaWYgKCFpc0xvb3ApIHtcbiAgICAgICAgaW5kZXggPSBvcHRpb25zLnJld2luZCA/IHRoaXMucmV3aW5kKGluZGV4KSA6IGJldHdlZW4oaW5kZXgsIDAsIHRoaXMuZWRnZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJld2luZCB0aGUgZ2l2ZW4gaW5kZXggaWYgaXQncyBvdXQgb2YgcmFuZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQW4gaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEEgcmV3b3VuZCBpbmRleC5cclxuICAgICAqL1xuICAgIHJld2luZDogZnVuY3Rpb24gcmV3aW5kKGluZGV4KSB7XG4gICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZUluZGV4O1xuXG4gICAgICBpZiAoaXNMb29wKSB7XG4gICAgICAgIHdoaWxlIChpbmRleCA+IGVkZ2UpIHtcbiAgICAgICAgICBpbmRleCAtPSBlZGdlICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCArPSBlZGdlICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluZGV4ID4gZWRnZSkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCA9IGVkZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBkaXJlY3Rpb24gaXMgXCJydGxcIiBvciBub3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIFwicnRsXCIgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAgICovXG4gICAgaXNSdGw6IGZ1bmN0aW9uIGlzUnRsKCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEw7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBwYWdlIGxlbmd0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gTWF4IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgZ2V0IHBhZ2VMZW5ndGgoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gU3BsaWRlLmxlbmd0aDtcbiAgICAgIHJldHVybiBoYXNGb2N1cygpID8gbGVuZ3RoIDogTWF0aC5jZWlsKGxlbmd0aCAvIG9wdGlvbnMucGVyUGFnZSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBlZGdlIGluZGV4LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBFZGdlIGluZGV4LlxyXG4gICAgICovXG4gICAgZ2V0IGVkZ2VJbmRleCgpIHtcbiAgICAgIHZhciBsZW5ndGggPSBTcGxpZGUubGVuZ3RoO1xuXG4gICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0ZvY3VzKCkgfHwgb3B0aW9ucy5pc05hdmlnYXRpb24gfHwgaXNMb29wKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gb3B0aW9ucy5wZXJQYWdlO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIHNsaWRlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIHNsaWRlIGlmIGF2YWlsYWJsZS4gLTEgb3RoZXJ3aXNlLlxyXG4gICAgICovXG4gICAgZ2V0IHByZXZJbmRleCgpIHtcbiAgICAgIHZhciBwcmV2ID0gU3BsaWRlLmluZGV4IC0gMTtcblxuICAgICAgaWYgKGlzTG9vcCB8fCBvcHRpb25zLnJld2luZCkge1xuICAgICAgICBwcmV2ID0gdGhpcy5yZXdpbmQocHJldik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2ID4gLTEgPyBwcmV2IDogLTE7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBzbGlkZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIGluZGV4IG9mIHRoZSBuZXh0IHNsaWRlIGlmIGF2YWlsYWJsZS4gLTEgb3RoZXJ3aXNlLlxyXG4gICAgICovXG4gICAgZ2V0IG5leHRJbmRleCgpIHtcbiAgICAgIHZhciBuZXh0ID0gU3BsaWRlLmluZGV4ICsgMTtcblxuICAgICAgaWYgKGlzTG9vcCB8fCBvcHRpb25zLnJld2luZCkge1xuICAgICAgICBuZXh0ID0gdGhpcy5yZXdpbmQobmV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBTcGxpZGUuaW5kZXggPCBuZXh0ICYmIG5leHQgPD0gdGhpcy5lZGdlSW5kZXggfHwgbmV4dCA9PT0gMCA/IG5leHQgOiAtMTtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIHNvbWUgZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgU3BsaWRlLm9uKCdtb3ZlJywgZnVuY3Rpb24gKG5ld0luZGV4KSB7XG4gICAgICBTcGxpZGUuaW5kZXggPSBuZXdJbmRleDtcbiAgICB9KS5vbigndXBkYXRlZCByZWZyZXNoJywgZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBuZXdPcHRpb25zIHx8IG9wdGlvbnM7XG4gICAgICBTcGxpZGUuaW5kZXggPSBiZXR3ZWVuKFNwbGlkZS5pbmRleCwgMCwgQ29udHJvbGxlci5lZGdlSW5kZXgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFZlcmlmeSBpZiB0aGUgZm9jdXMgb3B0aW9uIGlzIGF2YWlsYWJsZSBvciBub3QuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgYSBzbGlkZXIgaGFzIHRoZSBmb2N1cyBvcHRpb24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBoYXNGb2N1cygpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5mb2N1cyAhPT0gZmFsc2U7XG4gIH1cbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBuZXh0IG9yIHByZXZpb3VzIHBhZ2UgaW5kZXggY29tcHV0ZWQgYnkgdGhlIHBhZ2UgbnVtYmVyIGFuZCBjdXJyZW50IGluZGV4LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBudW1iZXIgLSBTcGVjaWZ5IHRoZSBwYWdlIG51bWJlci5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIGluZGV4ICAtIEN1cnJlbnQgaW5kZXguXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwcmV2ICAgLSBQcmV2IG9yIG5leHQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gU2xpZGUgaW5kZXguXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBwYXJzZVBhZ2UobnVtYmVyLCBpbmRleCwgcHJldikge1xuICAgIGlmIChudW1iZXIgPiAtMSkge1xuICAgICAgcmV0dXJuIENvbnRyb2xsZXIudG9JbmRleChudW1iZXIpO1xuICAgIH1cblxuICAgIHZhciBwZXJNb3ZlID0gb3B0aW9ucy5wZXJNb3ZlO1xuICAgIHZhciBzaWduID0gcHJldiA/IC0xIDogMTtcblxuICAgIGlmIChwZXJNb3ZlKSB7XG4gICAgICByZXR1cm4gaW5kZXggKyBwZXJNb3ZlICogc2lnbjtcbiAgICB9XG5cbiAgICByZXR1cm4gQ29udHJvbGxlci50b0luZGV4KENvbnRyb2xsZXIudG9QYWdlKGluZGV4KSArIHNpZ24pO1xuICB9XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3RyYWNrL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbW92aW5nIGxpc3QgaW4gdGhlIHRyYWNrLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxudmFyIGFicyA9IE1hdGguYWJzO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIG1vdmluZyBsaXN0IGluIHRoZSB0cmFjay5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IHRyYWNrID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgTGF5b3V0IGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBMYXlvdXQ7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIExheW91dCBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cztcbiAgLyoqXHJcbiAgICogU3RvcmUgdGhlIGxpc3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciBsaXN0O1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50IGRpcmVjdGlvbiBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBzbGlkZXIgdHlwZSBpcyBGQURFIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0ZhZGUgPSBTcGxpZGUuaXMoRkFERSk7XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBkaXJlY3Rpb24gaXMgUlRMIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1JUTCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMO1xuICAvKipcclxuICAgKiBUaGlzIHdpbGwgYmUgdHJ1ZSB3aGlsZSB0cmFuc2l0aW9uaW5nIGZyb20gdGhlIGxhc3QgaW5kZXggdG8gdGhlIGZpcnN0IG9uZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc0xvb3BQZW5kaW5nID0gZmFsc2U7XG4gIC8qKlxyXG4gICAqIFNpZ24gZm9yIHRoZSBkaXJlY3Rpb24uIE9ubHkgUlRMIG1vZGUgdXNlcyB0aGUgcG9zaXRpdmUgc2lnbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXG5cbiAgdmFyIHNpZ24gPSBpc1JUTCA/IDEgOiAtMTtcbiAgLyoqXHJcbiAgICogVHJhY2sgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIFRyYWNrID0ge1xuICAgIC8qKlxyXG4gICAgICogTWFrZSBwdWJsaWMgdGhlIHNpZ24gZGVmaW5lZCBsb2NhbGx5LlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cbiAgICBzaWduOiBzaWduLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gICAgICBMYXlvdXQgPSBDb21wb25lbnRzLkxheW91dDtcbiAgICAgIGxpc3QgPSBFbGVtZW50cy5saXN0O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBUaGUgcmVzaXplIGV2ZW50IG11c3QgYmUgcmVnaXN0ZXJlZCBhZnRlciB0aGUgTGF5b3V0J3Mgb25lIGlzIGRvbmUuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFpc0ZhZGUpIHtcbiAgICAgICAgdGhpcy5qdW1wKDApO1xuICAgICAgICBTcGxpZGUub24oJ21vdW50ZWQgcmVzaXplIHVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuanVtcChTcGxpZGUuaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBHbyB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICAgKiBBZnRlciBhcnJpdmluZyB0aGVyZSwgdGhlIHRyYWNrIGlzIGp1bXAgdG8gdGhlIG5ldyBpbmRleCB3aXRob3V0IGFuaW1hdGlvbiwgbWFpbmx5IGZvciBsb29wIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBkZXN0SW5kZXggLSBBIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNhbiBiZSBuZWdhdGl2ZSBvciBncmVhdGVyIHRoYW4gc2xpZGVzIGxlbmd0aCBmb3IgcmVhY2hpbmcgY2xvbmVzLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXdJbmRleCAgLSBBbiBhY3R1YWwgbmV3IGluZGV4LiBUaGV5IGFyZSBhbHdheXMgc2FtZSBpbiBTbGlkZSBhbmQgUmV3aW5kIG1vZGUuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudGx5ICAtIElmIHRydWUsIHN1cHByZXNzIGVtaXR0aW5nIGV2ZW50cy5cclxuICAgICAqL1xuICAgIGdvOiBmdW5jdGlvbiBnbyhkZXN0SW5kZXgsIG5ld0luZGV4LCBzaWxlbnRseSkge1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gZ2V0VHJpbW1lZFBvc2l0aW9uKGRlc3RJbmRleCk7XG4gICAgICB2YXIgcHJldkluZGV4ID0gU3BsaWRlLmluZGV4OyAvLyBQcmV2ZW50IGFueSBhY3Rpb25zIHdoaWxlIHRyYW5zaXRpb25pbmcgZnJvbSB0aGUgbGFzdCBpbmRleCB0byB0aGUgZmlyc3Qgb25lIGZvciBqdW1wLlxuXG4gICAgICBpZiAoU3BsaWRlLlN0YXRlLmlzKE1PVklORykgJiYgaXNMb29wUGVuZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzTG9vcFBlbmRpbmcgPSBkZXN0SW5kZXggIT09IG5ld0luZGV4O1xuXG4gICAgICBpZiAoIXNpbGVudGx5KSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KCdtb3ZlJywgbmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKE1hdGguYWJzKG5ld1Bvc2l0aW9uIC0gdGhpcy5wb3NpdGlvbikgPj0gMSB8fCBpc0ZhZGUpIHtcbiAgICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLnN0YXJ0KGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgdGhpcy50b0Nvb3JkKG5ld1Bvc2l0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZChkZXN0SW5kZXgsIG5ld0luZGV4LCBwcmV2SW5kZXgsIHNpbGVudGx5KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGVzdEluZGV4ICE9PSBwcmV2SW5kZXggJiYgU3BsaWRlLm9wdGlvbnMudHJpbVNwYWNlID09PSAnbW92ZScpIHtcbiAgICAgICAgICBDb21wb25lbnRzLkNvbnRyb2xsZXIuZ28oZGVzdEluZGV4ICsgZGVzdEluZGV4IC0gcHJldkluZGV4LCBzaWxlbnRseSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25UcmFuc2l0aW9uRW5kKGRlc3RJbmRleCwgbmV3SW5kZXgsIHByZXZJbmRleCwgc2lsZW50bHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgdHJhY2sgdG8gdGhlIHNwZWNpZmllZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBBIGRlc3RpbmF0aW9uIGluZGV4IHdoZXJlIHRoZSB0cmFjayBqdW1wcy5cclxuICAgICAqL1xuICAgIGp1bXA6IGZ1bmN0aW9uIGp1bXAoaW5kZXgpIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlKGdldFRyaW1tZWRQb3NpdGlvbihpbmRleCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbGlzdCBwb3NpdGlvbiBieSBDU1MgdHJhbnNsYXRlIHByb3BlcnR5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgbmV3IHBvc2l0aW9uIHZhbHVlLlxyXG4gICAgICovXG4gICAgdHJhbnNsYXRlOiBmdW5jdGlvbiB0cmFuc2xhdGUocG9zaXRpb24pIHtcbiAgICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlXCIgKyAoaXNWZXJ0aWNhbCA/ICdZJyA6ICdYJykgKyBcIihcIiArIHBvc2l0aW9uICsgXCJweClcIlxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FuY2VsIHRoZSB0cmFuc2l0aW9uIGFuZCBzZXQgdGhlIGxpc3QgcG9zaXRpb24uXHJcbiAgICAgKiBBbHNvLCBsb29wIHRoZSBzbGlkZXIgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICovXG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICBpZiAoU3BsaWRlLmlzKExPT1ApKSB7XG4gICAgICAgIHRoaXMuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVuc3VyZSB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgICAgdGhpcy50cmFuc2xhdGUodGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgICB0cmFuc2l0aW9uOiAnJ1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogU2hpZnQgdGhlIHNsaWRlciBpZiBpdCBleGNlZWRzIGJvcmRlcnMgb24gdGhlIGVkZ2UuXHJcbiAgICAgKi9cbiAgICBzaGlmdDogZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBhYnModGhpcy5wb3NpdGlvbik7XG4gICAgICB2YXIgbGVmdCA9IGFicyh0aGlzLnRvUG9zaXRpb24oMCkpO1xuICAgICAgdmFyIHJpZ2h0ID0gYWJzKHRoaXMudG9Qb3NpdGlvbihTcGxpZGUubGVuZ3RoKSk7XG4gICAgICB2YXIgaW5uZXJTaXplID0gcmlnaHQgLSBsZWZ0O1xuXG4gICAgICBpZiAocG9zaXRpb24gPCBsZWZ0KSB7XG4gICAgICAgIHBvc2l0aW9uICs9IGlubmVyU2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiByaWdodCkge1xuICAgICAgICBwb3NpdGlvbiAtPSBpbm5lclNpemU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNsYXRlKHNpZ24gKiBwb3NpdGlvbik7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogVHJpbSByZWR1bmRhbnQgc3BhY2VzIG9uIHRoZSBsZWZ0IG9yIHJpZ2h0IGVkZ2UgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIFBvc2l0aW9uIHZhbHVlIHRvIGJlIHRyaW1tZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRyaW1tZWQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICB0cmltOiBmdW5jdGlvbiB0cmltKHBvc2l0aW9uKSB7XG4gICAgICBpZiAoIVNwbGlkZS5vcHRpb25zLnRyaW1TcGFjZSB8fCBTcGxpZGUuaXMoTE9PUCkpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWRnZSA9IHNpZ24gKiAoTGF5b3V0LnRvdGFsU2l6ZSgpIC0gTGF5b3V0LnNpemUgLSBMYXlvdXQuZ2FwKTtcbiAgICAgIHJldHVybiBiZXR3ZWVuKHBvc2l0aW9uLCBlZGdlLCAwKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGNsb3Nlc3Qgc2xpZGUgaW5kZXggZnJvbSB0aGUgZ2l2ZW4gcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBwb3NpdGlvbiBjb252ZXJ0ZWQgdG8gYW4gc2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBjbG9zZXN0IHNsaWRlIGluZGV4LlxyXG4gICAgICovXG4gICAgdG9JbmRleDogZnVuY3Rpb24gdG9JbmRleChwb3NpdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgIEVsZW1lbnRzLmdldFNsaWRlcyh0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB2YXIgc2xpZGVJbmRleCA9IFNsaWRlLmluZGV4O1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBhYnMoX3RoaXMyLnRvUG9zaXRpb24oc2xpZGVJbmRleCkgLSBwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgIGluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGNvb3JkaW5hdGVzIG9iamVjdCBieSB0aGUgZ2l2ZW4gcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIC0gQSBwb3NpdGlvbiB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQSBjb29yZGluYXRlcyBvYmplY3QuXHJcbiAgICAgKi9cbiAgICB0b0Nvb3JkOiBmdW5jdGlvbiB0b0Nvb3JkKHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBpc1ZlcnRpY2FsID8gMCA6IHBvc2l0aW9uLFxuICAgICAgICB5OiBpc1ZlcnRpY2FsID8gcG9zaXRpb24gOiAwXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgdHJhY2sgcG9zaXRpb24gYnkgYSBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQ2FsY3VsYXRlZCBwb3NpdGlvbi5cclxuICAgICAqL1xuICAgIHRvUG9zaXRpb246IGZ1bmN0aW9uIHRvUG9zaXRpb24oaW5kZXgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IExheW91dC50b3RhbFNpemUoaW5kZXgpIC0gTGF5b3V0LnNsaWRlU2l6ZShpbmRleCkgLSBMYXlvdXQuZ2FwO1xuICAgICAgcmV0dXJuIHNpZ24gKiAocG9zaXRpb24gKyB0aGlzLm9mZnNldChpbmRleCkpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBvZmZzZXQgdmFsdWUsIGNvbnNpZGVyaW5nIGRpcmVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gT2Zmc2V0IGFtb3VudC5cclxuICAgICAqL1xuICAgIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGluZGV4KSB7XG4gICAgICB2YXIgZm9jdXMgPSBTcGxpZGUub3B0aW9ucy5mb2N1cztcbiAgICAgIHZhciBzbGlkZVNpemUgPSBMYXlvdXQuc2xpZGVTaXplKGluZGV4KTtcblxuICAgICAgaWYgKGZvY3VzID09PSAnY2VudGVyJykge1xuICAgICAgICByZXR1cm4gLShMYXlvdXQuc2l6ZSAtIHNsaWRlU2l6ZSkgLyAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLShwYXJzZUludChmb2N1cykgfHwgMCkgKiAoc2xpZGVTaXplICsgTGF5b3V0LmdhcCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxyXG4gICAgICogVGhpcyByZXR1cm5zIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGV2ZW4gd2hpbGUgdHJhbnNpdGlvbmluZyBieSBDU1MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICB2YXIgcHJvcCA9IGlzVmVydGljYWwgPyAndG9wJyA6IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgIHJldHVybiBnZXRSZWN0KGxpc3QpW3Byb3BdIC0gKGdldFJlY3QoRWxlbWVudHMudHJhY2spW3Byb3BdIC0gTGF5b3V0LnBhZGRpbmdbcHJvcF0gKiBzaWduKTtcbiAgICB9XG5cbiAgfTtcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW5ldmVyIHNsaWRlcyBhcnJpdmUgYXQgYSBkZXN0aW5hdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgZGVzdEluZGV4IC0gQSBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gIG5ld0luZGV4ICAtIEEgbmV3IGluZGV4LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgcHJldkluZGV4IC0gQSBwcmV2aW91cyBpbmRleC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNpbGVudGx5ICAtIElmIHRydWUsIHN1cHByZXNzIGVtaXR0aW5nIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZGVzdEluZGV4LCBuZXdJbmRleCwgcHJldkluZGV4LCBzaWxlbnRseSkge1xuICAgIGFwcGx5U3R5bGUobGlzdCwge1xuICAgICAgdHJhbnNpdGlvbjogJydcbiAgICB9KTtcbiAgICBpc0xvb3BQZW5kaW5nID0gZmFsc2U7XG5cbiAgICBpZiAoIWlzRmFkZSkge1xuICAgICAgVHJhY2suanVtcChuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKCFzaWxlbnRseSkge1xuICAgICAgU3BsaWRlLmVtaXQoJ21vdmVkJywgbmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQ29udmVydCBpbmRleCB0byB0aGUgdHJpbW1lZCBwb3NpdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBUcmltbWVkIHBvc2l0aW9uLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0VHJpbW1lZFBvc2l0aW9uKGluZGV4KSB7XG4gICAgcmV0dXJuIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbihpbmRleCkpO1xuICB9XG5cbiAgcmV0dXJuIFRyYWNrO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jbG9uZXMvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjbG9uaW5nIHNvbWUgc2xpZGVzIGZvciBcImxvb3BcIiBtb2RlIG9mIHRoZSB0cmFjay5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgY2xvbmluZyBzb21lIHNsaWRlcyBmb3IgXCJsb29wXCIgbW9kZSBvZiB0aGUgdHJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBjbG9uZXMgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBTdG9yZSBpbmZvcm1hdGlvbiBvZiBhbGwgY2xvbmVzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqL1xuICB2YXIgY2xvbmVzID0gW107XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjdXJyZW50IGNsb25lIGNvdW50IG9uIG9uZSBzaWRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cblxuICB2YXIgY2xvbmVDb3VudCA9IDA7XG4gIC8qKlxyXG4gICAqIEtlZXAgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBDbG9uZXMgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENsb25lcyA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChTcGxpZGUuaXMoTE9PUCkpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBTcGxpZGUub24oJ3JlZnJlc2g6YmVmb3JlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSkub24oJ3JlZnJlc2gnLCBpbml0KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjbG9uZUNvdW50ICE9PSBnZXRDbG9uZUNvdW50KCkpIHtcbiAgICAgICAgICAgIC8vIERlc3Ryb3kgYmVmb3JlIHJlZnJlc2ggbm90IHRvIGNvbGxlY3QgY2xvbmVzIGJ5IHRoZSBFbGVtZW50cyBjb21wb25lbnQuXG4gICAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIFNwbGlkZS5yZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRvbV9yZW1vdmUoY2xvbmVzKTtcbiAgICAgIGNsb25lcyA9IFtdO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiBhbGwgY2xvbmVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnRbXX0gLSBDbG9uZWQgZWxlbWVudHMuXHJcbiAgICAgKi9cbiAgICBnZXQgY2xvbmVzKCkge1xuICAgICAgcmV0dXJuIGNsb25lcztcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gY2xvbmUgbGVuZ3RoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBBIGxlbmd0aCBvZiBjbG9uZXMuXHJcbiAgICAgKi9cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGNsb25lcy5sZW5ndGg7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgQ2xvbmVzLmRlc3Ryb3koKTtcbiAgICBjbG9uZUNvdW50ID0gZ2V0Q2xvbmVDb3VudCgpO1xuICAgIGdlbmVyYXRlQ2xvbmVzKGNsb25lQ291bnQpO1xuICB9XG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIGFuZCBhcHBlbmQvcHJlcGVuZCBjbG9uZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBUaGUgaGFsZiBudW1iZXIgb2YgY2xvbmVzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDbG9uZXMoY291bnQpIHtcbiAgICB2YXIgbGVuZ3RoID0gRWxlbWVudHMubGVuZ3RoLFxuICAgICAgICByZWdpc3RlciA9IEVsZW1lbnRzLnJlZ2lzdGVyO1xuXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgdmFyIHNsaWRlcyA9IEVsZW1lbnRzLnNsaWRlcztcblxuICAgICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICBzbGlkZXMgPSBzbGlkZXMuY29uY2F0KHNsaWRlcyk7XG4gICAgICB9IC8vIENsb25lcyBhZnRlciB0aGUgbGFzdCBlbGVtZW50LlxuXG5cbiAgICAgIHNsaWRlcy5zbGljZSgwLCBjb3VudCkuZm9yRWFjaChmdW5jdGlvbiAoZWxtLCBpbmRleCkge1xuICAgICAgICB2YXIgY2xvbmUgPSBjbG9uZURlZXBseShlbG0pO1xuICAgICAgICBhcHBlbmQoRWxlbWVudHMubGlzdCwgY2xvbmUpO1xuICAgICAgICBjbG9uZXMucHVzaChjbG9uZSk7XG4gICAgICAgIHJlZ2lzdGVyKGNsb25lLCBpbmRleCArIGxlbmd0aCwgaW5kZXggJSBsZW5ndGgpO1xuICAgICAgfSk7IC8vIENsb25lcyBiZWZvcmUgdGhlIGZpcnN0IGVsZW1lbnQuXG5cbiAgICAgIHNsaWRlcy5zbGljZSgtY291bnQpLmZvckVhY2goZnVuY3Rpb24gKGVsbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsb25lID0gY2xvbmVEZWVwbHkoZWxtKTtcbiAgICAgICAgYmVmb3JlKGNsb25lLCBzbGlkZXNbMF0pO1xuICAgICAgICBjbG9uZXMucHVzaChjbG9uZSk7XG4gICAgICAgIHJlZ2lzdGVyKGNsb25lLCBpbmRleCAtIGNvdW50LCAobGVuZ3RoICsgaW5kZXggLSBjb3VudCAlIGxlbmd0aCkgJSBsZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiBoYWxmIGNvdW50IG9mIGNsb25lcyB0byBiZSBnZW5lcmF0ZWQuXHJcbiAgICogQ2xvbmUgY291bnQgaXMgZGV0ZXJtaW5lZCBieTpcclxuICAgKiAtIFwiY2xvbmVzXCIgdmFsdWUgaW4gdGhlIG9wdGlvbnMuXHJcbiAgICogLSBOdW1iZXIgb2Ygc2xpZGVzIHRoYXQgY2FuIGJlIHBsYWNlZCBpbiBhIHZpZXcgaW4gXCJmaXhlZFwiIG1vZGUuXHJcbiAgICogLSBNYXggcGFnZXMgYSBmbGljayBhY3Rpb24gY2FuIG1vdmUuXHJcbiAgICogLSBXaGV0aGVyIHRoZSBzbGlkZSBsZW5ndGggaXMgZW5vdWdoIGZvciBwZXJQYWdlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSAtIENvdW50IGZvciBjbG9uZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRDbG9uZUNvdW50KCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG5cbiAgICBpZiAob3B0aW9ucy5jbG9uZXMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmNsb25lcztcbiAgICB9IC8vIFVzZSB0aGUgc2xpZGUgbGVuZ3RoIGluIGF1dG9XaWR0aCBtb2RlIGJlY2F1c2UgdGhlIG51bWJlciBjYW5ub3QgYmUgY2FsY3VsYXRlZC5cblxuXG4gICAgdmFyIGJhc2VDb3VudCA9IG9wdGlvbnMuYXV0b1dpZHRoIHx8IG9wdGlvbnMuYXV0b0hlaWdodCA/IEVsZW1lbnRzLmxlbmd0aCA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICB2YXIgZGltZW5zaW9uID0gb3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQiA/ICdIZWlnaHQnIDogJ1dpZHRoJztcbiAgICB2YXIgZml4ZWRTaXplID0gdG9QaXhlbChTcGxpZGUucm9vdCwgb3B0aW9uc1tcImZpeGVkXCIgKyBkaW1lbnNpb25dKTtcblxuICAgIGlmIChmaXhlZFNpemUpIHtcbiAgICAgIC8vIFJvdWdobHkgY2FsY3VsYXRlIHRoZSBjb3VudC4gVGhpcyBuZWVkcyBub3QgdG8gYmUgc3RyaWN0LlxuICAgICAgYmFzZUNvdW50ID0gTWF0aC5jZWlsKEVsZW1lbnRzLnRyYWNrW1wiY2xpZW50XCIgKyBkaW1lbnNpb25dIC8gZml4ZWRTaXplKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZUNvdW50ICogKG9wdGlvbnMuZHJhZyA/IG9wdGlvbnMuZmxpY2tNYXhQYWdlcyArIDEgOiAxKTtcbiAgfVxuICAvKipcclxuICAgKiBDbG9uZSBkZWVwbHkgdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsbSAtIEFuIGVsZW1lbnQgYmVpbmcgZHVwbGljYXRlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge05vZGV9IC0gQSBjbG9uZWQgbm9kZShlbGVtZW50KS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNsb25lRGVlcGx5KGVsbSkge1xuICAgIHZhciBjbG9uZSA9IGVsbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYWRkQ2xhc3MoY2xvbmUsIFNwbGlkZS5jbGFzc2VzLmNsb25lKTsgLy8gSUQgc2hvdWxkIG5vdCBiZSBkdXBsaWNhdGVkLlxuXG4gICAgcmVtb3ZlQXR0cmlidXRlKGNsb25lLCAnaWQnKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICByZXR1cm4gQ2xvbmVzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZGlyZWN0aW9ucy9ob3Jpem9udGFsLmpzXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgaG9yaXpvbnRhbCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgcmVzb2x2ZXIgY29tcG9uZW50IGZvciBob3Jpem9udGFsIGxheW91dC5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIHJlc29sdmVyIG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgaG9yaXpvbnRhbCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHRyYWNrIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgdHJhY2s7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIGxhdGVzdCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgcmV0dXJuIHtcbiAgICAvKipcclxuICAgICAqIE1hcmdpbiBwcm9wZXJ0eSBuYW1lLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cbiAgICBtYXJnaW46ICdtYXJnaW4nICsgKG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEwgPyAnTGVmdCcgOiAnUmlnaHQnKSxcblxuICAgIC8qKlxyXG4gICAgICogQWx3YXlzIDAgYmVjYXVzZSB0aGUgaGVpZ2h0IHdpbGwgYmUgZGV0ZXJtaW5lZCBieSBpbm5lciBjb250ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXG4gICAgaGVpZ2h0OiAwLFxuXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXphdGlvbi5cclxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJlc2l6ZSBnYXAgYW5kIHBhZGRpbmcuXHJcbiAgICAgKiBUaGlzIG11c3QgYmUgY2FsbGVkIG9uIGluaXQuXHJcbiAgICAgKi9cbiAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICAgIHRyYWNrID0gRWxlbWVudHMudHJhY2s7XG4gICAgICB0aGlzLmdhcCA9IHRvUGl4ZWwocm9vdCwgb3B0aW9ucy5nYXApO1xuICAgICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgICB2YXIgbGVmdCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy5sZWZ0IHx8IHBhZGRpbmcpO1xuICAgICAgdmFyIHJpZ2h0ID0gdG9QaXhlbChyb290LCBwYWRkaW5nLnJpZ2h0IHx8IHBhZGRpbmcpO1xuICAgICAgdGhpcy5wYWRkaW5nID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHRcbiAgICAgIH07XG4gICAgICBhcHBseVN0eWxlKHRyYWNrLCB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiB1bml0KGxlZnQpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHVuaXQocmlnaHQpXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdG90YWwgd2lkdGggZnJvbSB0aGUgbGVmdCBvZiB0aGUgbGlzdCB0byB0aGUgcmlnaHQgb2YgdGhlIHNsaWRlIHNwZWNpZmllZCBieSB0aGUgcHJvdmlkZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gT3B0aW9uYWwuIEEgc2xpZGUgaW5kZXguIElmIHVuZGVmaW5lZCwgdG90YWwgd2lkdGggb2YgdGhlIHNsaWRlciB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUb3RhbCB3aWR0aCB0byB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgc3BlY2lmaWVkIHNsaWRlLCBvciAwIGZvciBhbiBpbnZhbGlkIGluZGV4LlxyXG4gICAgICovXG4gICAgdG90YWxXaWR0aDogZnVuY3Rpb24gdG90YWxXaWR0aChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXggPSBTcGxpZGUubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIFNsaWRlID0gRWxlbWVudHMuZ2V0U2xpZGUoaW5kZXgpO1xuICAgICAgdmFyIHdpZHRoID0gMDtcblxuICAgICAgaWYgKFNsaWRlKSB7XG4gICAgICAgIHZhciBzbGlkZVJlY3QgPSBnZXRSZWN0KFNsaWRlLnNsaWRlKTtcbiAgICAgICAgdmFyIGxpc3RSZWN0ID0gZ2V0UmVjdChFbGVtZW50cy5saXN0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTCkge1xuICAgICAgICAgIHdpZHRoID0gbGlzdFJlY3QucmlnaHQgLSBzbGlkZVJlY3QubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aCA9IHNsaWRlUmVjdC5yaWdodCAtIGxpc3RSZWN0LmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCArPSB0aGlzLmdhcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGUgd2lkdGggaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gU2xpZGUgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSB3aWR0aC5cclxuICAgICAqL1xuICAgIHNsaWRlV2lkdGg6IGZ1bmN0aW9uIHNsaWRlV2lkdGgoaW5kZXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmF1dG9XaWR0aCkge1xuICAgICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG4gICAgICAgIHJldHVybiBTbGlkZSA/IFNsaWRlLnNsaWRlLm9mZnNldFdpZHRoIDogMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy5maXhlZFdpZHRoIHx8ICh0aGlzLndpZHRoICsgdGhpcy5nYXApIC8gb3B0aW9ucy5wZXJQYWdlIC0gdGhpcy5nYXA7XG4gICAgICByZXR1cm4gdG9QaXhlbChyb290LCB3aWR0aCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSBoZWlnaHQgaW4gcHguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBzbGlkZSBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBzbGlkZUhlaWdodDogZnVuY3Rpb24gc2xpZGVIZWlnaHQoKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgb3B0aW9ucy5maXhlZEhlaWdodCB8fCB0aGlzLndpZHRoICogb3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlciB3aWR0aCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIEN1cnJlbnQgc2xpZGVyIHdpZHRoLlxyXG4gICAgICovXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRyYWNrLmNsaWVudFdpZHRoIC0gdGhpcy5wYWRkaW5nLmxlZnQgLSB0aGlzLnBhZGRpbmcucmlnaHQ7XG4gICAgfVxuXG4gIH07XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9kaXJlY3Rpb25zL3ZlcnRpY2FsLmpzXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgdmVydGljYWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIHJlc29sdmVyIGNvbXBvbmVudCBmb3IgdmVydGljYWwgbGF5b3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgcmVzb2x2ZXIgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCB2ZXJ0aWNhbCA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAqL1xuXG4gIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHRyYWNrIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgdHJhY2s7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIGxhdGVzdCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnM7XG4gIHJldHVybiB7XG4gICAgLyoqXHJcbiAgICAgKiBNYXJnaW4gcHJvcGVydHkgbmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXG4gICAgbWFyZ2luOiAnbWFyZ2luQm90dG9tJyxcblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemUgZ2FwIGFuZCBwYWRkaW5nLlxyXG4gICAgICogVGhpcyBtdXN0IGJlIGNhbGxlZCBvbiBpbml0LlxyXG4gICAgICovXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgdGhpcy5nYXAgPSB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZ2FwKTtcbiAgICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgICAgdmFyIHRvcCA9IHRvUGl4ZWwocm9vdCwgcGFkZGluZy50b3AgfHwgcGFkZGluZyk7XG4gICAgICB2YXIgYm90dG9tID0gdG9QaXhlbChyb290LCBwYWRkaW5nLmJvdHRvbSB8fCBwYWRkaW5nKTtcbiAgICAgIHRoaXMucGFkZGluZyA9IHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYXBwbHlTdHlsZSh0cmFjaywge1xuICAgICAgICBwYWRkaW5nVG9wOiB1bml0KHRvcCksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHVuaXQoYm90dG9tKVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRvdGFsIGhlaWdodCBmcm9tIHRoZSB0b3Agb2YgdGhlIGxpc3QgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2xpZGUgc3BlY2lmaWVkIGJ5IHRoZSBwcm92aWRlZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBPcHRpb25hbC4gQSBzbGlkZSBpbmRleC4gSWYgdW5kZWZpbmVkLCB0b3RhbCBoZWlnaHQgb2YgdGhlIHNsaWRlciB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBUb3RhbCBoZWlnaHQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc3BlY2lmaWVkIHNsaWRlLCBvciAwIGZvciBhbiBpbnZhbGlkIGluZGV4LlxyXG4gICAgICovXG4gICAgdG90YWxIZWlnaHQ6IGZ1bmN0aW9uIHRvdGFsSGVpZ2h0KGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICBpbmRleCA9IFNwbGlkZS5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG5cbiAgICAgIGlmIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gZ2V0UmVjdChTbGlkZS5zbGlkZSkuYm90dG9tIC0gZ2V0UmVjdChFbGVtZW50cy5saXN0KS50b3AgKyB0aGlzLmdhcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzbGlkZSB3aWR0aCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIHdpZHRoLlxyXG4gICAgICovXG4gICAgc2xpZGVXaWR0aDogZnVuY3Rpb24gc2xpZGVXaWR0aCgpIHtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIG9wdGlvbnMuZml4ZWRXaWR0aCB8fCB0aGlzLndpZHRoKTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlIGhlaWdodCBpbiBweC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBTbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gVGhlIHNsaWRlIGhlaWdodC5cclxuICAgICAqL1xuICAgIHNsaWRlSGVpZ2h0OiBmdW5jdGlvbiBzbGlkZUhlaWdodChpbmRleCkge1xuICAgICAgaWYgKG9wdGlvbnMuYXV0b0hlaWdodCkge1xuICAgICAgICB2YXIgU2xpZGUgPSBFbGVtZW50cy5nZXRTbGlkZShpbmRleCk7XG4gICAgICAgIHJldHVybiBTbGlkZSA/IFNsaWRlLnNsaWRlLm9mZnNldEhlaWdodCA6IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHQgPSBvcHRpb25zLmZpeGVkSGVpZ2h0IHx8ICh0aGlzLmhlaWdodCArIHRoaXMuZ2FwKSAvIG9wdGlvbnMucGVyUGFnZSAtIHRoaXMuZ2FwO1xuICAgICAgcmV0dXJuIHRvUGl4ZWwocm9vdCwgaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gc2xpZGVyIHdpZHRoIHdpdGhvdXQgcGFkZGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gQ3VycmVudCBzbGlkZXIgd2lkdGguXHJcbiAgICAgKi9cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICByZXR1cm4gdHJhY2suY2xpZW50V2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHNsaWRlIGhlaWdodCB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIFNsaWRlciBoZWlnaHQuXHJcbiAgICAgKi9cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IHRoaXMud2lkdGggKiBvcHRpb25zLmhlaWdodFJhdGlvO1xuICAgICAgZXhpc3QoaGVpZ2h0LCAnXCJoZWlnaHRcIiBvciBcImhlaWdodFJhdGlvXCIgaXMgbWlzc2luZy4nKTtcbiAgICAgIHJldHVybiB0b1BpeGVsKHJvb3QsIGhlaWdodCkgLSB0aGlzLnBhZGRpbmcudG9wIC0gdGhpcy5wYWRkaW5nLmJvdHRvbTtcbiAgICB9XG5cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL3V0aWxzL3RpbWUuanNcbi8qKlxyXG4gKiBBIHBhY2thZ2Ugb2YgdXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB3aXRoIHRpbWUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIFNpbXBsZSB0aHJvdHRsZSBmdW5jdGlvbiB0aGF0IGNvbnRyb2xzIGhvdyBvZnRlbiB0aGUgZ2l2ZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBBIGZ1bmN0aW9uIHRvIGJlIHRocm90dGxlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9ICAgd2FpdCAtIFRpbWUgaW4gbWlsbGlzZWNvbmQgZm9yIGludGVydmFsIG9mIGV4ZWN1dGlvbi5cclxuICpcclxuICogQHJldHVybiB7RnVuY3Rpb259IC0gQSBkZWJvdW5jZWQgZnVuY3Rpb24uXHJcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICB2YXIgdGltZW91dDsgLy8gRGVjbGFyZSBmdW5jdGlvbiBieSB0aGUgXCJmdW5jdGlvblwiIGtleXdvcmQgdG8gcHJldmVudCBcInRoaXNcIiBmcm9tIGJlaW5nIGluaGVyaXRlZC5cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jKCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgd2FpdCk7XG4gICAgfVxuICB9O1xufVxuLyoqXHJcbiAqIEN1c3RvbSBzZXRJbnRlcnZhbCBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIHByb2dyZXNzIHJhdGUgYXMgY2FsbGJhY2suXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayBmdW5jdGlvbiBmaXJlZCBldmVyeSB0aW1lIHRoZSBpbnRlcnZhbCB0aW1lIHBhc3Nlcy5cclxuICogQHBhcmFtIHtudW1iZXJ9ICAgaW50ZXJ2YWwgLSBJbnRlcnZhbCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb2dyZXNzIC0gQSBjYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuZXZlciB0aGUgcHJvZ3Jlc3MgZ29lcy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIHBsYXkoKSBhbmQgcGF1c2UoKSBmdW5jdGlvbnMuXHJcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVJbnRlcnZhbChjYWxsYmFjaywgaW50ZXJ2YWwsIHByb2dyZXNzKSB7XG4gIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gX3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIHZhciBzdGFydCxcbiAgICAgIGVsYXBzZSxcbiAgICAgIHJhdGUsXG4gICAgICBfcGF1c2UgPSB0cnVlO1xuXG4gIHZhciBzdGVwID0gZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICBpZiAoIV9wYXVzZSkge1xuICAgICAgaWYgKCFzdGFydCkge1xuICAgICAgICBzdGFydCA9IHRpbWVzdGFtcDtcblxuICAgICAgICBpZiAocmF0ZSAmJiByYXRlIDwgMSkge1xuICAgICAgICAgIHN0YXJ0IC09IHJhdGUgKiBpbnRlcnZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbGFwc2UgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAgIHJhdGUgPSBlbGFwc2UgLyBpbnRlcnZhbDtcblxuICAgICAgaWYgKGVsYXBzZSA+PSBpbnRlcnZhbCkge1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIHJhdGUgPSAxO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvZ3Jlc3MocmF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICBfcGF1c2UgPSB0cnVlO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH0sXG4gICAgcGxheTogZnVuY3Rpb24gcGxheShyZXNldCkge1xuICAgICAgc3RhcnQgPSAwO1xuXG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgcmF0ZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChfcGF1c2UpIHtcbiAgICAgICAgX3BhdXNlID0gZmFsc2U7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kaW5nIHNsaWRlIGxheW91dHMgYW5kIHRoZWlyIHNpemVzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kaW5nIHNsaWRlIGxheW91dHMgYW5kIHRoZWlyIHNpemVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgbGF5b3V0ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIGlzIHZlcnRpY2FsIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gU3BsaWRlLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gIC8qKlxyXG4gICAqIExheW91dCBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgTGF5b3V0ID0gb2JqZWN0X2Fzc2lnbih7XG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBiaW5kKCk7XG4gICAgICBpbml0KCk7IC8vIFRoZSB3b3JkIFwic2l6ZVwiIG1lYW5zIHdpZHRoIGZvciBhIGhvcml6b250YWwgc2xpZGVyIGFuZCBoZWlnaHQgZm9yIGEgdmVydGljYWwgc2xpZGVyLlxuXG4gICAgICB0aGlzLnRvdGFsU2l6ZSA9IGlzVmVydGljYWwgPyB0aGlzLnRvdGFsSGVpZ2h0IDogdGhpcy50b3RhbFdpZHRoO1xuICAgICAgdGhpcy5zbGlkZVNpemUgPSBpc1ZlcnRpY2FsID8gdGhpcy5zbGlkZUhlaWdodCA6IHRoaXMuc2xpZGVXaWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnQuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKFtFbGVtZW50cy5saXN0LCBFbGVtZW50cy50cmFja10sICdzdHlsZScpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgc2xpZGVyIGhlaWdodCBvbiB0aGUgdmVydGljYWwgbW9kZSBvciB3aWR0aCBvbiB0aGUgaG9yaXpvbnRhbCBtb2RlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGlzVmVydGljYWwgPyB0aGlzLmhlaWdodCA6IHRoaXMud2lkdGg7XG4gICAgfVxuXG4gIH0sIGlzVmVydGljYWwgPyB2ZXJ0aWNhbChTcGxpZGUsIENvbXBvbmVudHMpIDogaG9yaXpvbnRhbChTcGxpZGUsIENvbXBvbmVudHMpKTtcbiAgLyoqXHJcbiAgICogSW5pdCBzbGlkZXIgc3R5bGVzIGFjY29yZGluZyB0byBvcHRpb25zLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgTGF5b3V0LmluaXQoKTtcbiAgICBhcHBseVN0eWxlKFNwbGlkZS5yb290LCB7XG4gICAgICBtYXhXaWR0aDogdW5pdChTcGxpZGUub3B0aW9ucy53aWR0aClcbiAgICB9KTtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgU2xpZGUuc2xpZGUuc3R5bGVbTGF5b3V0Lm1hcmdpbl0gPSB1bml0KExheW91dC5nYXApO1xuICAgIH0pO1xuICAgIHJlc2l6ZSgpO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0aGUgcmVzaXplIG5hdGl2ZSBldmVudCB3aXRoIHRocm90dGxlLlxyXG4gICAqIEluaXRpYWxpemUgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgb3Igb3B0aW9ucyBhcmUgdXBkYXRlZC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgU3BsaWRlLm9uKCdyZXNpemUgbG9hZCcsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIFNwbGlkZS5lbWl0KCdyZXNpemUnKTtcbiAgICB9LCBTcGxpZGUub3B0aW9ucy50aHJvdHRsZSksIHdpbmRvdykub24oJ3Jlc2l6ZScsIHJlc2l6ZSkub24oJ3VwZGF0ZWQgcmVmcmVzaCcsIGluaXQpO1xuICB9XG4gIC8qKlxyXG4gICAqIFJlc2l6ZSB0aGUgdHJhY2sgYW5kIHNsaWRlIGVsZW1lbnRzLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgTGF5b3V0LnJlc2l6ZSgpO1xuICAgIGFwcGx5U3R5bGUoRWxlbWVudHMudHJhY2ssIHtcbiAgICAgIGhlaWdodDogdW5pdChMYXlvdXQuaGVpZ2h0KVxuICAgIH0pO1xuICAgIHZhciBzbGlkZUhlaWdodCA9IG9wdGlvbnMuYXV0b0hlaWdodCA/IG51bGwgOiB1bml0KExheW91dC5zbGlkZUhlaWdodCgpKTtcbiAgICBFbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgYXBwbHlTdHlsZShTbGlkZS5jb250YWluZXIsIHtcbiAgICAgICAgaGVpZ2h0OiBzbGlkZUhlaWdodFxuICAgICAgfSk7XG4gICAgICBhcHBseVN0eWxlKFNsaWRlLnNsaWRlLCB7XG4gICAgICAgIHdpZHRoOiBvcHRpb25zLmF1dG9XaWR0aCA/IG51bGwgOiB1bml0KExheW91dC5zbGlkZVdpZHRoKFNsaWRlLmluZGV4KSksXG4gICAgICAgIGhlaWdodDogU2xpZGUuY29udGFpbmVyID8gbnVsbCA6IHNsaWRlSGVpZ2h0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBTcGxpZGUuZW1pdCgncmVzaXplZCcpO1xuICB9XG5cbiAgcmV0dXJuIExheW91dDtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN1cHBvcnRpbmcgbW91c2UgZHJhZyBhbmQgc3dpcGUuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cblxuXG52YXIgZHJhZ19hYnMgPSBNYXRoLmFicztcbi8qKlxyXG4gKiBJZiB0aGUgYWJzb2x1dGUgdmVsb2NpdHkgaXMgZ3JlYXRlciB0aGFudCB0aGlzIHZhbHVlLFxyXG4gKiBhIHNsaWRlciBhbHdheXMgZ29lcyB0byBhIGRpZmZlcmVudCBzbGlkZSBhZnRlciBkcmFnLCBub3QgYWxsb3dlZCB0byBzdGF5IG9uIGEgY3VycmVudCBzbGlkZS5cclxuICovXG5cbnZhciBNSU5fVkVMT0NJVFkgPSAwLjE7XG4vKipcclxuICogQWRqdXN0IGhvdyBtdWNoIHRoZSB0cmFjayBjYW4gYmUgcHVsbGVkIG9uIHRoZSBmaXJzdCBvciBsYXN0IHBhZ2UuXHJcbiAqIFRoZSBsYXJnZXIgbnVtYmVyIHRoaXMgaXMsIHRoZSBmYXJ0aGVyIHRoZSB0cmFjayBtb3Zlcy5cclxuICogVGhpcyBzaG91bGQgYmUgYXJvdW5kIDUgLSA5LlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIEZSSUNUSU9OX1JFRFVDRVIgPSA3O1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgc3VwcG9ydGluZyBtb3VzZSBkcmFnIGFuZCBzd2lwZS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGRyYWcgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cykge1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgTW92ZSBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuICB2YXIgVHJhY2sgPSBDb21wb25lbnRzLlRyYWNrO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgQ29udHJvbGxlciBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDb250cm9sbGVyID0gQ29tcG9uZW50cy5Db250cm9sbGVyO1xuICAvKipcclxuICAgKiBDb29yZGluYXRlIG9mIHRoZSB0cmFjayBvbiBzdGFydGluZyBkcmFnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgc3RhcnRDb29yZDtcbiAgLyoqXHJcbiAgICogQW5hbHl6ZWQgaW5mbyBvbiBzdGFydGluZyBkcmFnLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdHxudWxsfVxyXG4gICAqL1xuXG4gIHZhciBzdGFydEluZm87XG4gIC8qKlxyXG4gICAqIEFuYWx5emVkIGluZm8gYmVpbmcgdXBkYXRlZCB3aGlsZSBkcmFnZ2luZy9zd2lwaW5nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgY3VycmVudEluZm87XG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIHNsaWRlcyBhcmUgYmVpbmcgZHJhZ2dlZCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNEcmFnZ2luZztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2xpZGVyIGRpcmVjdGlvbiBpcyB2ZXJ0aWNhbCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cblxuICB2YXIgaXNWZXJ0aWNhbCA9IFNwbGlkZS5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAvKipcclxuICAgKiBBeGlzIGZvciB0aGUgZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cblxuICB2YXIgYXhpcyA9IGlzVmVydGljYWwgPyAneScgOiAneCc7XG4gIC8qKlxyXG4gICAqIERyYWcgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIERyYWcgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIGRyYWdnaW5nIGlzIGRpc2FibGVkIG9yIG5vdC5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIGRpc2FibGVkOiBmYWxzZSxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgICAgIHZhciB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICAgICAgU3BsaWRlLm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIHN0YXJ0LCB0cmFjaykub24oJ3RvdWNobW92ZSBtb3VzZW1vdmUnLCBtb3ZlLCB0cmFjaywge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSkub24oJ3RvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNlbGVhdmUgbW91c2V1cCBkcmFnZW5kJywgZW5kLCB0cmFjaykub24oJ21vdW50ZWQgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUHJldmVudCBkcmFnZ2luZyBhbiBpbWFnZSBvciBhbmNob3IgaXRzZWxmLlxuICAgICAgICBlYWNoKEVsZW1lbnRzLmxpc3QucXVlcnlTZWxlY3RvckFsbCgnaW1nLCBhJyksIGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgICAgICBTcGxpZGUub2ZmKCdkcmFnc3RhcnQnLCBlbG0pLm9uKCdkcmFnc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0sIGVsbSwge1xuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5vbignbW91bnRlZCB1cGRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9ICFTcGxpZGUub3B0aW9ucy5kcmFnO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdHJhY2sgc3RhcnRzIHRvIGJlIGRyYWdnZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8TW91c2VFdmVudH0gZSAtIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICovXG5cbiAgZnVuY3Rpb24gc3RhcnQoZSkge1xuICAgIGlmICghRHJhZy5kaXNhYmxlZCAmJiAhaXNEcmFnZ2luZykge1xuICAgICAgLy8gVGhlc2UgcHJhbXMgYXJlIHVzZWQgdG8gZXZhbHVhdGUgd2hldGhlciB0aGUgc2xpZGVyIHNob3VsZCBzdGFydCBtb3ZpbmcuXG4gICAgICBpbml0KGUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHBhcmFtZXRlcnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8TW91c2VFdmVudH0gZSAtIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0KGUpIHtcbiAgICBzdGFydENvb3JkID0gVHJhY2sudG9Db29yZChUcmFjay5wb3NpdGlvbik7XG4gICAgc3RhcnRJbmZvID0gYW5hbHl6ZShlLCB7fSk7XG4gICAgY3VycmVudEluZm8gPSBzdGFydEluZm87XG4gIH1cbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoaWxlIHRoZSB0cmFjayBiZWluZyBkcmFnZ2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fE1vdXNlRXZlbnR9IGUgLSBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQgb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgaWYgKHN0YXJ0SW5mbykge1xuICAgICAgY3VycmVudEluZm8gPSBhbmFseXplKGUsIHN0YXJ0SW5mbyk7XG5cbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVNwbGlkZS5pcyhGQURFKSkge1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHN0YXJ0Q29vcmRbYXhpc10gKyBjdXJyZW50SW5mby5vZmZzZXRbYXhpc107XG4gICAgICAgICAgVHJhY2sudHJhbnNsYXRlKHJlc2lzdChwb3NpdGlvbikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2hvdWxkTW92ZShjdXJyZW50SW5mbykpIHtcbiAgICAgICAgICBTcGxpZGUuZW1pdCgnZHJhZycsIHN0YXJ0SW5mbyk7XG4gICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgVHJhY2suY2FuY2VsKCk7IC8vIFRoZXNlIHBhcmFtcyBhcmUgYWN0dWFsIGRyYWcgZGF0YS5cblxuICAgICAgICAgIGluaXQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdG8gc3RhcnQgbW92aW5nIHRoZSB0cmFjayBvciBub3QgYnkgZHJhZyBhbmdsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbmZvIC0gQW4gaW5mb3JtYXRpb24gb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSB0cmFjayBzaG91bGQgYmUgbW92ZWQgb3IgZmFsc2UgaWYgbm90LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc2hvdWxkTW92ZShfcmVmKSB7XG4gICAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuXG4gICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhNT1ZJTkcpICYmIFNwbGlkZS5vcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuKGRyYWdfYWJzKG9mZnNldC55KSAvIGRyYWdfYWJzKG9mZnNldC54KSkgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgIGFuZ2xlID0gOTAgLSBhbmdsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5nbGUgPCBTcGxpZGUub3B0aW9ucy5kcmFnQW5nbGVUaHJlc2hvbGQ7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVzaXN0IGRyYWdnaW5nIHRoZSB0cmFjayBvbiB0aGUgZmlyc3QvbGFzdCBwYWdlIGJlY2F1c2UgdGhlcmUgaXMgbm8gbW9yZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiAtIEEgcG9zaXRpb24gYmVpbmcgYXBwbGllZCB0byB0aGUgdHJhY2suXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQWRqdXN0ZWQgcG9zaXRpb24uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiByZXNpc3QocG9zaXRpb24pIHtcbiAgICBpZiAoU3BsaWRlLmlzKFNMSURFKSkge1xuICAgICAgdmFyIHNpZ24gPSBUcmFjay5zaWduO1xuXG4gICAgICB2YXIgX3N0YXJ0ID0gc2lnbiAqIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbigwKSk7XG5cbiAgICAgIHZhciBfZW5kID0gc2lnbiAqIFRyYWNrLnRyaW0oVHJhY2sudG9Qb3NpdGlvbihDb250cm9sbGVyLmVkZ2VJbmRleCkpO1xuXG4gICAgICBwb3NpdGlvbiAqPSBzaWduO1xuXG4gICAgICBpZiAocG9zaXRpb24gPCBfc3RhcnQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBfc3RhcnQgLSBGUklDVElPTl9SRURVQ0VSICogTWF0aC5sb2coX3N0YXJ0IC0gcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+IF9lbmQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBfZW5kICsgRlJJQ1RJT05fUkVEVUNFUiAqIE1hdGgubG9nKHBvc2l0aW9uIC0gX2VuZCk7XG4gICAgICB9XG5cbiAgICAgIHBvc2l0aW9uICo9IHNpZ247XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIGVuZHMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBlbmQoKSB7XG4gICAgc3RhcnRJbmZvID0gbnVsbDtcblxuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBTcGxpZGUuZW1pdCgnZHJhZ2dlZCcsIGN1cnJlbnRJbmZvKTtcbiAgICAgIGdvKGN1cnJlbnRJbmZvKTtcbiAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogR28gdG8gdGhlIHNsaWRlIGRldGVybWluZWQgYnkgdGhlIGFuYWx5emVkIGRhdGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIEFuIGluZm8gb2JqZWN0LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ28oaW5mbykge1xuICAgIHZhciB2ZWxvY2l0eSA9IGluZm8udmVsb2NpdHlbYXhpc107XG4gICAgdmFyIGFic1YgPSBkcmFnX2Ficyh2ZWxvY2l0eSk7XG5cbiAgICBpZiAoYWJzViA+IDApIHtcbiAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUuaW5kZXg7XG4gICAgICB2YXIgc2lnbiA9IHZlbG9jaXR5IDwgMCA/IC0xIDogMTtcbiAgICAgIHZhciBkZXN0SW5kZXggPSBpbmRleDtcblxuICAgICAgaWYgKCFTcGxpZGUuaXMoRkFERSkpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gVHJhY2sucG9zaXRpb247XG5cbiAgICAgICAgaWYgKGFic1YgPiBvcHRpb25zLmZsaWNrVmVsb2NpdHlUaHJlc2hvbGQgJiYgZHJhZ19hYnMoaW5mby5vZmZzZXRbYXhpc10pIDwgb3B0aW9ucy5zd2lwZURpc3RhbmNlVGhyZXNob2xkKSB7XG4gICAgICAgICAgZGVzdGluYXRpb24gKz0gc2lnbiAqIE1hdGgubWluKGFic1YgKiBvcHRpb25zLmZsaWNrUG93ZXIsIENvbXBvbmVudHMuTGF5b3V0LnNpemUgKiAob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc3RJbmRleCA9IFRyYWNrLnRvSW5kZXgoZGVzdGluYXRpb24pO1xuICAgICAgfVxuICAgICAgLypcclxuICAgICAgICogRG8gbm90IGFsbG93IHRoZSB0cmFjayB0byBnbyB0byBhIHByZXZpb3VzIHBvc2l0aW9uIGlmIHRoZXJlIGlzIGVub3VnaCB2ZWxvY2l0eS5cclxuICAgICAgICogQWx3YXlzIHVzZSB0aGUgYWRqYWNlbnQgaW5kZXggZm9yIHRoZSBmYWRlIG1vZGUuXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmIChkZXN0SW5kZXggPT09IGluZGV4ICYmIGFic1YgPiBNSU5fVkVMT0NJVFkpIHtcbiAgICAgICAgZGVzdEluZGV4ID0gaW5kZXggKyBzaWduICogVHJhY2suc2lnbjtcbiAgICAgIH1cblxuICAgICAgaWYgKFNwbGlkZS5pcyhTTElERSkpIHtcbiAgICAgICAgZGVzdEluZGV4ID0gYmV0d2VlbihkZXN0SW5kZXgsIDAsIENvbnRyb2xsZXIuZWRnZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgQ29udHJvbGxlci5nbyhkZXN0SW5kZXgsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQW5hbHl6ZSB0aGUgZ2l2ZW4gZXZlbnQgb2JqZWN0IGFuZCByZXR1cm4gaW1wb3J0YW50IGluZm9ybWF0aW9uIGZvciBoYW5kbGluZyBzd2lwZSBiZWhhdmlvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9ICAgZSAgICAgICAgICAtIFRvdWNoIG9yIE1vdXNlIGV2ZW50IG9iamVjdC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gIHN0YXJ0SW5mbyAgLSBJbmZvcm1hdGlvbiBhbmFseXplZCBvbiBzdGFydCBmb3IgY2FsY3VsYXRpbmcgZGlmZmVyZW5jZSBmcm9tIHRoZSBjdXJyZW50IG9uZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyBhbmFseXplZCBpbmZvcm1hdGlvbiwgc3VjaCBhcyBvZmZzZXQsIHZlbG9jaXR5LCBldGMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBhbmFseXplKGUsIHN0YXJ0SW5mbykge1xuICAgIHZhciB0aW1lU3RhbXAgPSBlLnRpbWVTdGFtcCxcbiAgICAgICAgdG91Y2hlcyA9IGUudG91Y2hlcztcblxuICAgIHZhciBfcmVmMiA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdIDogZSxcbiAgICAgICAgY2xpZW50WCA9IF9yZWYyLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBfcmVmMi5jbGllbnRZO1xuXG4gICAgdmFyIF9yZWYzID0gc3RhcnRJbmZvLnRvIHx8IHt9LFxuICAgICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgICAgZnJvbVggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyBjbGllbnRYIDogX3JlZjMkeCxcbiAgICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICAgIGZyb21ZID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gY2xpZW50WSA6IF9yZWYzJHk7XG5cbiAgICB2YXIgc3RhcnRUaW1lID0gc3RhcnRJbmZvLnRpbWUgfHwgMDtcbiAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgeDogY2xpZW50WCAtIGZyb21YLFxuICAgICAgeTogY2xpZW50WSAtIGZyb21ZXG4gICAgfTtcbiAgICB2YXIgZHVyYXRpb24gPSB0aW1lU3RhbXAgLSBzdGFydFRpbWU7XG4gICAgdmFyIHZlbG9jaXR5ID0ge1xuICAgICAgeDogb2Zmc2V0LnggLyBkdXJhdGlvbixcbiAgICAgIHk6IG9mZnNldC55IC8gZHVyYXRpb25cbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICB0bzoge1xuICAgICAgICB4OiBjbGllbnRYLFxuICAgICAgICB5OiBjbGllbnRZXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICB0aW1lOiB0aW1lU3RhbXAsXG4gICAgICB2ZWxvY2l0eTogdmVsb2NpdHlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIERyYWc7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2NsaWNrL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgYSBjbGljayBldmVudC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgYSBjbGljayBldmVudC5cclxuICogQ2xpY2sgc2hvdWxkIGJlIGRpc2FibGVkIGR1cmluZyBkcmFnL3N3aXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNsaWNrID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogV2hldGhlciBjbGljayBpcyBkaXNhYmxlZCBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKi9cbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIC8qKlxyXG4gICAqIENsaWNrIGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBDbGljayA9IHtcbiAgICAvKipcclxuICAgICAqIE1vdW50IG9ubHkgd2hlbiB0aGUgZHJhZyBpcyBhY3RpdmF0ZWQgYW5kIHRoZSBzbGlkZSB0eXBlIGlzIG5vdCBcImZhZGVcIi5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBTcGxpZGUub3B0aW9ucy5kcmFnLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgb25DbGljaywgQ29tcG9uZW50cy5FbGVtZW50cy50cmFjaywge1xuICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICB9KS5vbignZHJhZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSkub24oJ2RyYWdnZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgZmxhZyBpcyByZWxlYXNlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDYWxsZWQgd2hlbiBhIHRyYWNrIGVsZW1lbnQgaXMgY2xpY2tlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBBIGNsaWNrIGV2ZW50LlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIENsaWNrO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9hdXRvcGxheS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHBsYXlpbmcgc2xpZGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogU2V0IG9mIHBhdXNlIGZsYWdzLlxyXG4gKi9cblxudmFyIFBBVVNFX0ZMQUdTID0ge1xuICBIT1ZFUjogMSxcbiAgRk9DVVM6IDIsXG4gIE1BTlVBTDogM1xufTtcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBwbGF5aW5nIHNsaWRlcyBhdXRvbWF0aWNhbGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgYXV0b3BsYXkgPSAoZnVuY3Rpb24gKFNwbGlkZSwgQ29tcG9uZW50cywgbmFtZSkge1xuICAvKipcclxuICAgKiBTdG9yZSBwYXVzZSBmbGFncy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtBcnJheX1cclxuICAgKi9cbiAgdmFyIGZsYWdzID0gW107XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFuIGludGVydmFsIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9O1xyXG4gICAqL1xuXG4gIHZhciBpbnRlcnZhbDtcbiAgLyoqXHJcbiAgICogS2VlcCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBdXRvcGxheSBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQXV0b3BsYXkgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIGF1dG9wbGF5IG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmF1dG9wbGF5LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKiBOb3RlIHRoYXQgYXV0b3BsYXkgc3RhcnRzIG9ubHkgaWYgdGhlcmUgYXJlIHNsaWRlcyBvdmVyIHBlclBhZ2UgbnVtYmVyLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcblxuICAgICAgaWYgKEVsZW1lbnRzLnNsaWRlcy5sZW5ndGggPiBvcHRpb25zLnBlclBhZ2UpIHtcbiAgICAgICAgaW50ZXJ2YWwgPSBjcmVhdGVJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgU3BsaWRlLmdvKCc+Jyk7XG4gICAgICAgIH0sIG9wdGlvbnMuaW50ZXJ2YWwsIGZ1bmN0aW9uIChyYXRlKSB7XG4gICAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnBsYXlpbmdcIiwgcmF0ZSk7XG5cbiAgICAgICAgICBpZiAoRWxlbWVudHMuYmFyKSB7XG4gICAgICAgICAgICBhcHBseVN0eWxlKEVsZW1lbnRzLmJhciwge1xuICAgICAgICAgICAgICB3aWR0aDogcmF0ZSAqIDEwMCArIFwiJVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBiaW5kKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGF1dG9wbGF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnIC0gQSBwYXVzZSBmbGFnIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgKi9cbiAgICBwbGF5OiBmdW5jdGlvbiBwbGF5KGZsYWcpIHtcbiAgICAgIGlmIChmbGFnID09PSB2b2lkIDApIHtcbiAgICAgICAgZmxhZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZsYWdzID0gZmxhZ3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmICE9PSBmbGFnO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghZmxhZ3MubGVuZ3RoKSB7XG4gICAgICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjpwbGF5XCIpO1xuICAgICAgICBpbnRlcnZhbC5wbGF5KFNwbGlkZS5vcHRpb25zLnJlc2V0UHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIFBhdXNlIGF1dG9wbGF5LlxyXG4gICAgICogTm90ZSB0aGF0IEFycmF5LmluY2x1ZGVzIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWcgLSBBIHBhdXNlIGZsYWcgdG8gYmUgYWRkZWQuXHJcbiAgICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoZmxhZykge1xuICAgICAgaWYgKGZsYWcgPT09IHZvaWQgMCkge1xuICAgICAgICBmbGFnID0gMDtcbiAgICAgIH1cblxuICAgICAgaW50ZXJ2YWwucGF1c2UoKTtcblxuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoZmxhZykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzLnB1c2goZmxhZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGFncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOnBhdXNlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHNvbWUgZXZlbnRzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgICB2YXIgc2libGluZyA9IFNwbGlkZS5zaWJsaW5nO1xuICAgIHZhciBlbG1zID0gW1NwbGlkZS5yb290LCBzaWJsaW5nID8gc2libGluZy5yb290IDogbnVsbF07XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHN3aXRjaE9uKGVsbXMsICdtb3VzZWxlYXZlJywgUEFVU0VfRkxBR1MuSE9WRVIsIHRydWUpO1xuICAgICAgc3dpdGNoT24oZWxtcywgJ21vdXNlZW50ZXInLCBQQVVTRV9GTEFHUy5IT1ZFUiwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhdXNlT25Gb2N1cykge1xuICAgICAgc3dpdGNoT24oZWxtcywgJ2ZvY3Vzb3V0JywgUEFVU0VfRkxBR1MuRk9DVVMsIHRydWUpO1xuICAgICAgc3dpdGNoT24oZWxtcywgJ2ZvY3VzaW4nLCBQQVVTRV9GTEFHUy5GT0NVUywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChFbGVtZW50cy5wbGF5KSB7XG4gICAgICBTcGxpZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZWVkIHRvIGJlIHJlbW92ZWQgYSBmb2N1cyBmbGFnIGF0IGZpcnN0LlxuICAgICAgICBBdXRvcGxheS5wbGF5KFBBVVNFX0ZMQUdTLkZPQ1VTKTtcbiAgICAgICAgQXV0b3BsYXkucGxheShQQVVTRV9GTEFHUy5NQU5VQUwpO1xuICAgICAgfSwgRWxlbWVudHMucGxheSk7XG4gICAgfVxuXG4gICAgaWYgKEVsZW1lbnRzLnBhdXNlKSB7XG4gICAgICBzd2l0Y2hPbihbRWxlbWVudHMucGF1c2VdLCAnY2xpY2snLCBQQVVTRV9GTEFHUy5NQU5VQUwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBTcGxpZGUub24oJ21vdmUgcmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIEF1dG9wbGF5LnBsYXkoKTtcbiAgICB9KSAvLyBSZXdpbmQgdGhlIHRpbWVyLlxuICAgIC5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIEF1dG9wbGF5LnBhdXNlKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogUGxheSBvciBwYXVzZSBvbiB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxtcyAgLSBFbGVtZW50cy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgZXZlbnQgLSBBbiBldmVudCBuYW1lIG9yIG5hbWVzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgICBmbGFnICAtIEEgcGF1c2UgZmxhZyBkZWZpbmVkIG9uIHRoZSB0b3AuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgIHBsYXkgIC0gRGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGxheSBvciBwYXVzZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN3aXRjaE9uKGVsbXMsIGV2ZW50LCBmbGFnLCBwbGF5KSB7XG4gICAgZWxtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgIFNwbGlkZS5vbihldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBBdXRvcGxheVtwbGF5ID8gJ3BsYXknIDogJ3BhdXNlJ10oZmxhZyk7XG4gICAgICB9LCBlbG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEF1dG9wbGF5O1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9jb3Zlci9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNoYW5nZSBhbiBpbWcgZWxlbWVudCB0byBiYWNrZ3JvdW5kIGltYWdlIG9mIGl0cyB3cmFwcGVyLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjaGFuZ2UgYW4gaW1nIGVsZW1lbnQgdG8gYmFja2dyb3VuZCBpbWFnZSBvZiBpdHMgd3JhcHBlci5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGNvdmVyID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgLyoqXHJcbiAgICogQ292ZXIgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIENvdmVyID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIFwiY292ZXJcIiBvcHRpb24gaXMgdHJ1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBvcHRpb25zLmNvdmVyLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBTcGxpZGUub24oJ2xhenlsb2FkOmxvYWRlZCcsIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgY292ZXIoaW1nLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIFNwbGlkZS5vbignbW91bnRlZCB1cGRhdGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcHBseShmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGFwcGx5KHRydWUpO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogQXBwbHkgXCJjb3ZlclwiIHRvIGFsbCBzbGlkZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuY292ZXIgLSBJZiB0cnVlLCBcImNvdmVyXCIgd2lsbCBiZSBjbGVhci5cclxuICAgKi9cblxuICBmdW5jdGlvbiBhcHBseSh1bmNvdmVyKSB7XG4gICAgQ29tcG9uZW50cy5FbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIGltZyA9IGNoaWxkKFNsaWRlLnNsaWRlLCAnSU1HJykgfHwgY2hpbGQoU2xpZGUuY29udGFpbmVyLCAnSU1HJyk7XG5cbiAgICAgIGlmIChpbWcgJiYgaW1nLnNyYykge1xuICAgICAgICBjb3ZlcihpbWcsIHVuY292ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFNldCBiYWNrZ3JvdW5kIGltYWdlIG9mIHRoZSBwYXJlbnQgZWxlbWVudCwgdXNpbmcgc291cmNlIG9mIHRoZSBnaXZlbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBpbWcgICAgIC0gQW4gaW1hZ2UgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuY292ZXIgLSBSZXNldCBcImNvdmVyXCIuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBjb3ZlcihpbWcsIHVuY292ZXIpIHtcbiAgICBhcHBseVN0eWxlKGltZy5wYXJlbnRFbGVtZW50LCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1bmNvdmVyID8gJycgOiBcImNlbnRlci9jb3ZlciBuby1yZXBlYXQgdXJsKFxcXCJcIiArIGltZy5zcmMgKyBcIlxcXCIpXCJcbiAgICB9KTtcbiAgICBhcHBseVN0eWxlKGltZywge1xuICAgICAgZGlzcGxheTogdW5jb3ZlciA/ICcnIDogJ25vbmUnXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gQ292ZXI7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2Fycm93cy9wYXRoLmpzXG4vKipcclxuICogRXhwb3J0IHZlY3RvciBwYXRoIGZvciBhbiBhcnJvdy5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cbnZhciBYTUxfTkFNRV9TUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4vKipcclxuICogVGhlIGFycm93IHZlY3RvciBwYXRoLlxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cblxudmFyIFBBVEggPSAnbTE1LjUgMC45MzItNC4zIDQuMzggMTQuNSAxNC42LTE0LjUgMTQuNSA0LjMgNC40IDE0LjYtMTQuNiA0LjQtNC4zLTQuNC00LjQtMTQuNi0xNC42eic7XG4vKipcclxuICogU1ZHIHdpZHRoIGFuZCBoZWlnaHQuXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xuXG52YXIgU0laRSA9IDQwO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYXJyb3dzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgYXBwZW5kaW5nIHByZXYvbmV4dCBhcnJvd3MuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBhcHBlbmRpbmcgcHJldi9uZXh0IGFycm93cy5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGFycm93cyA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICovXG4gIHZhciBwcmV2O1xuICAvKipcclxuICAgKiBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XHJcbiAgICovXG5cbiAgdmFyIG5leHQ7XG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSBjbGFzcyBsaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgY2xhc3NlcyA9IFNwbGlkZS5jbGFzc2VzO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSByb290IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKi9cblxuICB2YXIgcm9vdCA9IFNwbGlkZS5yb290O1xuICAvKipcclxuICAgKiBXaGV0aGVyIGFycm93cyBhcmUgY3JlYXRlZCBwcm9ncmFtbWF0aWNhbGx5IG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqL1xuXG4gIHZhciBjcmVhdGVkO1xuICAvKipcclxuICAgKiBIb2xkIHRoZSBFbGVtZW50cyBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMuRWxlbWVudHM7XG4gIC8qKlxyXG4gICAqIEFycm93cyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQXJyb3dzID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgd2hlbiB0aGUgYXJyb3dzIG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmFycm93cyxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgLy8gQXR0ZW1wdCB0byBnZXQgYXJyb3dzIGZyb20gSFRNTCBzb3VyY2UuXG4gICAgICBwcmV2ID0gRWxlbWVudHMuYXJyb3dzLnByZXY7XG4gICAgICBuZXh0ID0gRWxlbWVudHMuYXJyb3dzLm5leHQ7IC8vIElmIGFycm93cyB3ZXJlIG5vdCBmb3VuZCBpbiBIVE1MLCBsZXQncyBnZW5lcmF0ZSB0aGVtLlxuXG4gICAgICBpZiAoKCFwcmV2IHx8ICFuZXh0KSAmJiBTcGxpZGUub3B0aW9ucy5hcnJvd3MpIHtcbiAgICAgICAgcHJldiA9IGNyZWF0ZUFycm93KHRydWUpO1xuICAgICAgICBuZXh0ID0gY3JlYXRlQXJyb3coZmFsc2UpO1xuICAgICAgICBjcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgYXBwZW5kQXJyb3dzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2ICYmIG5leHQpIHtcbiAgICAgICAgYmluZCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFycm93cyA9IHtcbiAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgbmV4dDogbmV4dFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOm1vdW50ZWRcIiwgcHJldiwgbmV4dCk7XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoW3ByZXYsIG5leHRdLCAnZGlzYWJsZWQnKTtcblxuICAgICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgICAgZG9tX3JlbW92ZShwcmV2LnBhcmVudEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIG5hdGl2ZSBhbmQgY3VzdG9tIGV2ZW50cy5cclxuICAgKi9cblxuICBmdW5jdGlvbiBiaW5kKCkge1xuICAgIFNwbGlkZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZ28oJzwnKTtcbiAgICB9LCBwcmV2KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBTcGxpZGUuZ28oJz4nKTtcbiAgICB9LCBuZXh0KS5vbignbW91bnRlZCBtb3ZlIHVwZGF0ZWQgcmVmcmVzaCcsIHVwZGF0ZURpc2FibGVkKTtcbiAgfVxuICAvKipcclxuICAgKiBVcGRhdGUgYSBkaXNhYmxlZCBhdHRyaWJ1dGUuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiB1cGRhdGVEaXNhYmxlZCgpIHtcbiAgICB2YXIgX0NvbXBvbmVudHMkQ29udHJvbGxlID0gQ29tcG9uZW50cy5Db250cm9sbGVyLFxuICAgICAgICBwcmV2SW5kZXggPSBfQ29tcG9uZW50cyRDb250cm9sbGUucHJldkluZGV4LFxuICAgICAgICBuZXh0SW5kZXggPSBfQ29tcG9uZW50cyRDb250cm9sbGUubmV4dEluZGV4O1xuICAgIHZhciBpc0Vub3VnaCA9IFNwbGlkZS5sZW5ndGggPiBTcGxpZGUub3B0aW9ucy5wZXJQYWdlIHx8IFNwbGlkZS5pcyhMT09QKTtcbiAgICBwcmV2LmRpc2FibGVkID0gcHJldkluZGV4IDwgMCB8fCAhaXNFbm91Z2g7XG4gICAgbmV4dC5kaXNhYmxlZCA9IG5leHRJbmRleCA8IDAgfHwgIWlzRW5vdWdoO1xuICAgIFNwbGlkZS5lbWl0KG5hbWUgKyBcIjp1cGRhdGVkXCIsIHByZXYsIG5leHQsIHByZXZJbmRleCwgbmV4dEluZGV4KTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSB3cmFwcGVyIGVsZW1lbnQgYW5kIGFwcGVuZCBhcnJvd3MuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBhcHBlbmRBcnJvd3MoKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBjcmVhdGUoJ2RpdicsIHtcbiAgICAgIFwiY2xhc3NcIjogY2xhc3Nlcy5hcnJvd3NcbiAgICB9KTtcbiAgICBhcHBlbmQod3JhcHBlciwgcHJldik7XG4gICAgYXBwZW5kKHdyYXBwZXIsIG5leHQpO1xuICAgIHZhciBzbGlkZXIgPSBFbGVtZW50cy5zbGlkZXI7XG4gICAgdmFyIHBhcmVudCA9IFNwbGlkZS5vcHRpb25zLmFycm93cyA9PT0gJ3NsaWRlcicgJiYgc2xpZGVyID8gc2xpZGVyIDogcm9vdDtcbiAgICBiZWZvcmUod3JhcHBlciwgcGFyZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gYXJyb3cgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJldiAtIERldGVybWluZSB0byBjcmVhdGUgYSBwcmV2IGFycm93IG9yIG5leHQgYXJyb3cuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSAtIEEgY3JlYXRlZCBhcnJvdyBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyb3cocHJldikge1xuICAgIHZhciBhcnJvdyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiXCIgKyBjbGFzc2VzLmFycm93ICsgXCIgXCIgKyAocHJldiA/IGNsYXNzZXMucHJldiA6IGNsYXNzZXMubmV4dCkgKyBcIlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cIiArIChcIjxzdmcgeG1sbnM9XFxcIlwiICsgWE1MX05BTUVfU1BBQ0UgKyBcIlxcXCJcXHR2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiXFx0d2lkdGg9XFxcIlwiICsgU0laRSArIFwiXFxcIlxcdGhlaWdodD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiPlwiKSArIChcIjxwYXRoIGQ9XFxcIlwiICsgKFNwbGlkZS5vcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPlwiKTtcbiAgICByZXR1cm4gZG9taWZ5KGFycm93KTtcbiAgfVxuXG4gIHJldHVybiBBcnJvd3M7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanNcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBoYW5kbGluZyBwYWdpbmF0aW9uXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogVGhlIGV2ZW50IG5hbWUgZm9yIHVwZGF0aW5nIHNvbWUgYXR0cmlidXRlcyBvZiBwYWdpbmF0aW9uIG5vZGVzLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFUVFJJQlVURVNfVVBEQVRFX0VWRU5UID0gJ21vdmUucGFnZSc7XG4vKipcclxuICogVGhlIGV2ZW50IG5hbWUgZm9yIHJlY3JlYXRpbmcgcGFnaW5hdGlvbi5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBVUERBVEVfRVZFTlQgPSAndXBkYXRlZC5wYWdlIHJlZnJlc2gucGFnZSc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlICAgICAtIEEgU3BsaWRlIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQ29tcG9uZW50cyAtIEFuIG9iamVjdCBjb250YWluaW5nIGNvbXBvbmVudHMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgIC0gQSBjb21wb25lbnQgbmFtZSBhcyBhIGxvd2VyY2FzZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgcGFnaW5hdGlvbiA9IChmdW5jdGlvbiAoU3BsaWRlLCBDb21wb25lbnRzLCBuYW1lKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGFsbCBkYXRhIGZvciBwYWdpbmF0aW9uLlxyXG4gICAqIC0gbGlzdDogQSBsaXN0IGVsZW1lbnQuXHJcbiAgICogLSBpdGVtczogQW4gYXJyYXkgdGhhdCBjb250YWlucyBvYmplY3RzKGxpLCBidXR0b24sIGluZGV4LCBwYWdlKS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG4gIHZhciBkYXRhID0ge307XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIEVsZW1lbnRzIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50cy5FbGVtZW50cztcbiAgLyoqXHJcbiAgICogUGFnaW5hdGlvbiBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgUGFnaW5hdGlvbiA9IHtcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHZhciBwYWdpbmF0aW9uID0gU3BsaWRlLm9wdGlvbnMucGFnaW5hdGlvbjtcblxuICAgICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgICAgZGF0YSA9IGNyZWF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgdmFyIHNsaWRlciA9IEVsZW1lbnRzLnNsaWRlcjtcbiAgICAgICAgdmFyIHBhcmVudCA9IHBhZ2luYXRpb24gPT09ICdzbGlkZXInICYmIHNsaWRlciA/IHNsaWRlciA6IFNwbGlkZS5yb290O1xuICAgICAgICBhcHBlbmQocGFyZW50LCBkYXRhLmxpc3QpO1xuICAgICAgICBTcGxpZGUub24oQVRUUklCVVRFU19VUERBVEVfRVZFTlQsIHVwZGF0ZUF0dHJpYnV0ZXMpO1xuICAgICAgfVxuXG4gICAgICBTcGxpZGUub2ZmKFVQREFURV9FVkVOVCkub24oVVBEQVRFX0VWRU5ULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFBhZ2luYXRpb24uZGVzdHJveSgpO1xuXG4gICAgICAgIGlmIChTcGxpZGUub3B0aW9ucy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgUGFnaW5hdGlvbi5tb3VudCgpO1xuICAgICAgICAgIFBhZ2luYXRpb24ubW91bnRlZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgaWYgKFNwbGlkZS5vcHRpb25zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gU3BsaWRlLmluZGV4O1xuICAgICAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6bW91bnRlZFwiLCBkYXRhLCB0aGlzLmdldEl0ZW0oaW5kZXgpKTtcbiAgICAgICAgdXBkYXRlQXR0cmlidXRlcyhpbmRleCwgLTEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgdGhlIHBhZ2luYXRpb24uXHJcbiAgICAgKiBCZSBhd2FyZSB0aGF0IG5vZGUucmVtb3ZlKCkgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBkb21fcmVtb3ZlKGRhdGEubGlzdCk7XG5cbiAgICAgIGlmIChkYXRhLml0ZW1zKSB7XG4gICAgICAgIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIFNwbGlkZS5vZmYoJ2NsaWNrJywgaXRlbS5idXR0b24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRG8gbm90IHJlbW92ZSBVUERBVEVfRVZFTlQgdG8gcmVjcmVhdGUgcGFnaW5hdGlvbiBpZiBuZWVkZWQuXG5cblxuICAgICAgU3BsaWRlLm9mZihBVFRSSUJVVEVTX1VQREFURV9FVkVOVCk7XG4gICAgICBkYXRhID0ge307XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGFuIGl0ZW0gYnkgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gQSBzbGlkZSBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfSAtIEFuIGl0ZW0gb2JqZWN0IG9uIHN1Y2Nlc3Mgb3IgdW5kZWZpbmVkIG9uIGZhaWx1cmUuXHJcbiAgICAgKi9cbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKGluZGV4KSB7XG4gICAgICByZXR1cm4gZGF0YS5pdGVtc1tDb21wb25lbnRzLkNvbnRyb2xsZXIudG9QYWdlKGluZGV4KV07XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIG9iamVjdCBjb250YWluaW5nIHBhZ2luYXRpb24gZGF0YS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gUGFnaW5hdGlvbiBkYXRhIGluY2x1ZGluZyBsaXN0IGFuZCBpdGVtcy5cclxuICAgICAqL1xuICAgIGdldCBkYXRhKCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gIH07XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhdHRyaWJ1dGVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4ICAgICAtIEFjdGl2ZSBpbmRleC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gcHJldkluZGV4IC0gUHJldiBpbmRleC5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGVzKGluZGV4LCBwcmV2SW5kZXgpIHtcbiAgICB2YXIgcHJldiA9IFBhZ2luYXRpb24uZ2V0SXRlbShwcmV2SW5kZXgpO1xuICAgIHZhciBjdXJyID0gUGFnaW5hdGlvbi5nZXRJdGVtKGluZGV4KTtcbiAgICB2YXIgYWN0aXZlID0gU1RBVFVTX0NMQVNTRVMuYWN0aXZlO1xuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHByZXYuYnV0dG9uLCBhY3RpdmUpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICBhZGRDbGFzcyhjdXJyLmJ1dHRvbiwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICBTcGxpZGUuZW1pdChuYW1lICsgXCI6dXBkYXRlZFwiLCBkYXRhLCBwcmV2LCBjdXJyKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSB3cmFwcGVyIGFuZCBidXR0b24gZWxlbWVudHMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5zIGFsbCBkYXRhLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgIHZhciBjbGFzc2VzID0gU3BsaWRlLmNsYXNzZXM7XG4gICAgdmFyIGxpc3QgPSBjcmVhdGUoJ3VsJywge1xuICAgICAgXCJjbGFzc1wiOiBjbGFzc2VzLnBhZ2luYXRpb25cbiAgICB9KTtcbiAgICB2YXIgaXRlbXMgPSBFbGVtZW50cy5nZXRTbGlkZXMoZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZvY3VzICE9PSBmYWxzZSB8fCBTbGlkZS5pbmRleCAlIG9wdGlvbnMucGVyUGFnZSA9PT0gMDtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKFNsaWRlLCBwYWdlKSB7XG4gICAgICB2YXIgbGkgPSBjcmVhdGUoJ2xpJywge30pO1xuICAgICAgdmFyIGJ1dHRvbiA9IGNyZWF0ZSgnYnV0dG9uJywge1xuICAgICAgICBcImNsYXNzXCI6IGNsYXNzZXMucGFnZSxcbiAgICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICAgIH0pO1xuICAgICAgYXBwZW5kKGxpLCBidXR0b24pO1xuICAgICAgYXBwZW5kKGxpc3QsIGxpKTtcbiAgICAgIFNwbGlkZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFNwbGlkZS5nbyhcIj5cIiArIHBhZ2UpO1xuICAgICAgfSwgYnV0dG9uKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpOiBsaSxcbiAgICAgICAgYnV0dG9uOiBidXR0b24sXG4gICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgIFNsaWRlczogRWxlbWVudHMuZ2V0U2xpZGVzQnlQYWdlKHBhZ2UpXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0OiBsaXN0LFxuICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBQYWdpbmF0aW9uO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9sYXp5bG9hZC9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGxvYWRpbmcgc2xpZGVyIGltYWdlcyBsYXppbHkuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG5cbi8qKlxyXG4gKiBUaGUgbmFtZSBmb3IgYSBkYXRhIGF0dHJpYnV0ZSBvZiBzcmMuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1JDX0RBVEFfTkFNRSA9ICdkYXRhLXNwbGlkZS1sYXp5Jztcbi8qKlxyXG4gKiBUaGUgbmFtZSBmb3IgYSBkYXRhIGF0dHJpYnV0ZSBvZiBzcmNzZXQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgU1JDU0VUX0RBVEFfTkFNRSA9ICdkYXRhLXNwbGlkZS1sYXp5LXNyY3NldCc7XG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgbG9hZGluZyBzbGlkZXIgaW1hZ2VzIGxhemlseS5cclxuICpcclxuICogQHBhcmFtIHtTcGxpZGV9IFNwbGlkZSAgICAgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICogQHBhcmFtIHtPYmplY3R9IENvbXBvbmVudHMgLSBBbiBvYmplY3QgY29udGFpbmluZyBjb21wb25lbnRzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgICAgICAtIEEgY29tcG9uZW50IG5hbWUgYXMgYSBsb3dlcmNhc2Ugc3RyaW5nLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gVGhlIGNvbXBvbmVudCBvYmplY3QuXHJcbiAqL1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIGNvbnN0IGxhenlsb2FkID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMsIG5hbWUpIHtcbiAgLyoqXHJcbiAgICogTmV4dCBpbmRleCBmb3Igc2VxdWVudGlhbCBsb2FkaW5nLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cbiAgdmFyIG5leHRJbmRleDtcbiAgLyoqXHJcbiAgICogU3RvcmUgb2JqZWN0cyBjb250YWluaW5nIGFuIGltZyBlbGVtZW50IGFuZCBhIFNsaWRlIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3RbXX1cclxuICAgKi9cblxuICB2YXIgaW1hZ2VzO1xuICAvKipcclxuICAgKiBTdG9yZSB0aGUgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIG9wdGlvbnMgPSBTcGxpZGUub3B0aW9ucztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBsb2FkIGltYWdlcyBzZXF1ZW50aWFsbHkgb3Igbm90LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzU2VxdWVudGlhbCA9IG9wdGlvbnMubGF6eUxvYWQgPT09ICdzZXF1ZW50aWFsJztcbiAgLyoqXHJcbiAgICogTGF6eWxvYWQgY29tcG9uZW50IG9iamVjdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXG5cbiAgdmFyIExhenlsb2FkID0ge1xuICAgIC8qKlxyXG4gICAgICogTW91bnQgb25seSB3aGVuIHRoZSBsYXp5bG9hZCBvcHRpb24gaXMgcHJvdmlkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cbiAgICByZXF1aXJlZDogb3B0aW9ucy5sYXp5TG9hZCxcblxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHJlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgQ29tcG9uZW50cy5FbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIGVhY2goU2xpZGUuc2xpZGUucXVlcnlTZWxlY3RvckFsbChcIltcIiArIFNSQ19EQVRBX05BTUUgKyBcIl0sIFtcIiArIFNSQ1NFVF9EQVRBX05BTUUgKyBcIl1cIiksIGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgIGlmICghaW1nLnNyYyAmJiAhaW1nLnNyY3NldCkge1xuICAgICAgICAgICAgICBpbWFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW1nOiBpbWcsXG4gICAgICAgICAgICAgICAgU2xpZGU6IFNsaWRlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBhcHBseVN0eWxlKGltZywge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzU2VxdWVudGlhbCkge1xuICAgICAgICAgIGxvYWROZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWlzU2VxdWVudGlhbCkge1xuICAgICAgICBTcGxpZGUub24oXCJtb3VudGVkIHJlZnJlc2ggbW92ZWQuXCIgKyBuYW1lLCBjaGVjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveS5cclxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGluaXRcbiAgfTtcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwYXJhbWV0ZXJzLlxyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW1hZ2VzID0gW107XG4gICAgbmV4dEluZGV4ID0gMDtcbiAgfVxuICAvKipcclxuICAgKiBDaGVjayBob3cgY2xvc2UgZWFjaCBpbWFnZSBpcyBmcm9tIHRoZSBhY3RpdmUgc2xpZGUgYW5kXHJcbiAgICogZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc3RhcnQgbG9hZGluZyBvciBub3QsIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBDdXJyZW50IGluZGV4LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY2hlY2soaW5kZXgpIHtcbiAgICBpbmRleCA9IGlzTmFOKGluZGV4KSA/IFNwbGlkZS5pbmRleCA6IGluZGV4O1xuICAgIGltYWdlcyA9IGltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICBpZiAoaW1hZ2UuU2xpZGUuaXNXaXRoaW4oaW5kZXgsIG9wdGlvbnMucGVyUGFnZSAqIChvcHRpb25zLnByZWxvYWRQYWdlcyArIDEpKSkge1xuICAgICAgICBsb2FkKGltYWdlLmltZywgaW1hZ2UuU2xpZGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pOyAvLyBVbmJpbmQgaWYgYWxsIGltYWdlcyBhcmUgbG9hZGVkLlxuXG4gICAgaWYgKCFpbWFnZXNbMF0pIHtcbiAgICAgIFNwbGlkZS5vZmYoXCJtb3ZlZC5cIiArIG5hbWUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBTdGFydCBsb2FkaW5nIGFuIGltYWdlLlxyXG4gICAqIENyZWF0aW5nIGEgY2xvbmUgb2YgdGhlIGltYWdlIGVsZW1lbnQgc2luY2Ugc2V0dGluZyBzcmMgYXR0cmlidXRlIGRpcmVjdGx5IHRvIGl0XHJcbiAgICogb2Z0ZW4gb2NjdXJzICdoaXRjaCcsIGJsb2NraW5nIHNvbWUgb3RoZXIgcHJvY2Vzc2VzIG9mIGEgYnJvd3Nlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgLSBBbiBpbWFnZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgLSBBIFNsaWRlIG9iamVjdC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGxvYWQoaW1nLCBTbGlkZSkge1xuICAgIGFkZENsYXNzKFNsaWRlLnNsaWRlLCBTVEFUVVNfQ0xBU1NFUy5sb2FkaW5nKTtcbiAgICB2YXIgc3Bpbm5lciA9IGNyZWF0ZSgnc3BhbicsIHtcbiAgICAgIFwiY2xhc3NcIjogU3BsaWRlLmNsYXNzZXMuc3Bpbm5lclxuICAgIH0pO1xuICAgIGFwcGVuZChpbWcucGFyZW50RWxlbWVudCwgc3Bpbm5lcik7XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgbG9hZGVkKGltZywgc3Bpbm5lciwgU2xpZGUsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsb2FkZWQoaW1nLCBzcGlubmVyLCBTbGlkZSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHNldEF0dHJpYnV0ZShpbWcsICdzcmNzZXQnLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9OQU1FKSB8fCAnJyk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgJ3NyYycsIGdldEF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX05BTUUpIHx8ICcnKTtcbiAgfVxuICAvKipcclxuICAgKiBTdGFydCBsb2FkaW5nIGEgbmV4dCBpbWFnZSBpbiBpbWFnZXMgYXJyYXkuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkTmV4dCgpIHtcbiAgICBpZiAobmV4dEluZGV4IDwgaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgdmFyIGltYWdlID0gaW1hZ2VzW25leHRJbmRleF07XG4gICAgICBsb2FkKGltYWdlLmltZywgaW1hZ2UuU2xpZGUpO1xuICAgIH1cblxuICAgIG5leHRJbmRleCsrO1xuICB9XG4gIC8qKlxyXG4gICAqIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBpbWFnZSB3YXMgbG9hZGVkIG9yIGxvYWRpbmcgd2FzIGFib3J0ZWQgYnkgc29tZSBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW1nICAgICAtIEFuIGltYWdlIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzcGlubmVyIC0gQSBzcGlubmVyIGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICBTbGlkZSAgIC0gQSBTbGlkZSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBlcnJvciAgIC0gVHJ1ZSBpZiB0aGUgaW1hZ2Ugd2FzIGxvYWRlZCBzdWNjZXNzZnVsbHkgb3IgZmFsc2Ugb24gZXJyb3IuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBsb2FkZWQoaW1nLCBzcGlubmVyLCBTbGlkZSwgZXJyb3IpIHtcbiAgICByZW1vdmVDbGFzcyhTbGlkZS5zbGlkZSwgU1RBVFVTX0NMQVNTRVMubG9hZGluZyk7XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBkb21fcmVtb3ZlKHNwaW5uZXIpO1xuICAgICAgYXBwbHlTdHlsZShpbWcsIHtcbiAgICAgICAgZGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgICAgU3BsaWRlLmVtaXQobmFtZSArIFwiOmxvYWRlZFwiLCBpbWcpLmVtaXQoJ3Jlc2l6ZScpO1xuICAgIH1cblxuICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgIGxvYWROZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIExhenlsb2FkO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29uc3RhbnRzL2ExMXkuanNcbi8qKlxyXG4gKiBFeHBvcnQgYXJpYSBhdHRyaWJ1dGUgbmFtZXMuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWN1cnJlbnQuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xudmFyIEFSSUFfQ1VSUkVOUlQgPSAnYXJpYS1jdXJyZW50Jztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgYXJpYS1jb250cm9sLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfQ09OVFJPTFMgPSAnYXJpYS1jb250cm9scyc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtY29udHJvbC5cclxuICpcclxuICogQHR5cGUge3N0cmluZ31cclxuICovXG5cbnZhciBBUklBX0xBQkVMID0gJ2FyaWEtbGFiZWwnO1xuLyoqXHJcbiAqIEF0dHJpYnV0ZSBuYW1lIGZvciBhcmlhLWxhYmVsbGVkYnkuXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQVJJQV9MQUJFTExFREJZID0gJ2FyaWEtbGFiZWxsZWRieSc7XG4vKipcclxuICogQXR0cmlidXRlIG5hbWUgZm9yIGFyaWEtaGlkZGVuLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIEFSSUFfSElEREVOID0gJ2FyaWEtaGlkZGVuJztcbi8qKlxyXG4gKiBBdHRyaWJ1dGUgbmFtZSBmb3IgdGFiLWluZGV4LlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFRBQl9JTkRFWCA9ICd0YWJpbmRleCc7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9rZXlib2FyZC9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHNsaWRlcyB2aWEga2V5Ym9hcmQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgTmFvdG9zaGkgRnVqaXRhXHJcbiAqIEBjb3B5cmlnaHQgTmFvdG9zaGkgRnVqaXRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi9cblxuXG4vKipcclxuICogTWFwIGEga2V5IHRvIGEgc2xpZGUgY29udHJvbC5cclxuICpcclxuICogQHR5cGUge09iamVjdH1cclxuICovXG5cbnZhciBLRVlfTUFQID0ge1xuICBsdHI6IHtcbiAgICBBcnJvd0xlZnQ6ICc8JyxcbiAgICBBcnJvd1JpZ2h0OiAnPicsXG4gICAgLy8gRm9yIElFLlxuICAgIExlZnQ6ICc8JyxcbiAgICBSaWdodDogJz4nXG4gIH0sXG4gIHJ0bDoge1xuICAgIEFycm93TGVmdDogJz4nLFxuICAgIEFycm93UmlnaHQ6ICc8JyxcbiAgICAvLyBGb3IgSUUuXG4gICAgTGVmdDogJz4nLFxuICAgIFJpZ2h0OiAnPCdcbiAgfSxcbiAgdHRiOiB7XG4gICAgQXJyb3dVcDogJzwnLFxuICAgIEFycm93RG93bjogJz4nLFxuICAgIC8vIEZvciBJRS5cbiAgICBVcDogJzwnLFxuICAgIERvd246ICc+J1xuICB9XG59O1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGNvbnRyb2xsaW5nIHNsaWRlcyB2aWEga2V5Ym9hcmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBrZXlib2FyZCA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHRhcmdldCBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnR8RG9jdW1lbnR8dW5kZWZpbmVkfVxyXG4gICAqL1xuICB2YXIgdGFyZ2V0O1xuICByZXR1cm4ge1xuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgU3BsaWRlLm9uKCdtb3VudGVkIHVwZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICAgIHZhciByb290ID0gU3BsaWRlLnJvb3Q7XG4gICAgICAgIHZhciBtYXAgPSBLRVlfTUFQW29wdGlvbnMuZGlyZWN0aW9uXTtcbiAgICAgICAgdmFyIGtleWJvYXJkID0gb3B0aW9ucy5rZXlib2FyZDtcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgU3BsaWRlLm9mZigna2V5ZG93bicsIHRhcmdldCk7XG4gICAgICAgICAgcmVtb3ZlQXR0cmlidXRlKHJvb3QsIFRBQl9JTkRFWCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5Ym9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5Ym9hcmQgPT09ICdmb2N1c2VkJykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gcm9vdDtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZShyb290LCBUQUJfSU5ERVgsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBTcGxpZGUub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKG1hcFtlLmtleV0pIHtcbiAgICAgICAgICAgICAgU3BsaWRlLmdvKG1hcFtlLmtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvYTExeS9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIGVuaGFuY2luZyBhY2Nlc3NpYmlsaXR5LlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgZW5oYW5jaW5nIGFjY2Vzc2liaWxpdHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgICAgIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBDb21wb25lbnRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tcG9uZW50cy5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBhMTF5ID0gKGZ1bmN0aW9uIChTcGxpZGUsIENvbXBvbmVudHMpIHtcbiAgLyoqXHJcbiAgICogSG9sZCBhIGkxOG4gb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cbiAgdmFyIGkxOG4gPSBTcGxpZGUuaTE4bjtcbiAgLyoqXHJcbiAgICogSG9sZCB0aGUgRWxlbWVudHMgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzLkVsZW1lbnRzO1xuICAvKipcclxuICAgKiBBbGwgYXR0cmlidXRlcyByZWxhdGVkIHdpdGggQTExeS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgKi9cblxuICB2YXIgYWxsQXR0cmlidXRlcyA9IFtBUklBX0hJRERFTiwgVEFCX0lOREVYLCBBUklBX0NPTlRST0xTLCBBUklBX0xBQkVMLCBBUklBX0NVUlJFTlJULCAncm9sZSddO1xuICAvKipcclxuICAgKiBBMTF5IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBBMTF5ID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBhY2Nlc3NpYmlsaXR5IG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IFNwbGlkZS5vcHRpb25zLmFjY2Vzc2liaWxpdHksXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIFNwbGlkZS5vbigndmlzaWJsZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICB1cGRhdGVTbGlkZShTbGlkZS5zbGlkZSwgdHJ1ZSk7XG4gICAgICB9KS5vbignaGlkZGVuJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHVwZGF0ZVNsaWRlKFNsaWRlLnNsaWRlLCBmYWxzZSk7XG4gICAgICB9KS5vbignYXJyb3dzOm1vdW50ZWQnLCBpbml0QXJyb3dzKS5vbignYXJyb3dzOnVwZGF0ZWQnLCB1cGRhdGVBcnJvd3MpLm9uKCdwYWdpbmF0aW9uOm1vdW50ZWQnLCBpbml0UGFnaW5hdGlvbikub24oJ3BhZ2luYXRpb246dXBkYXRlZCcsIHVwZGF0ZVBhZ2luYXRpb24pLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVBdHRyaWJ1dGUoQ29tcG9uZW50cy5DbG9uZXMuY2xvbmVzLCBhbGxBdHRyaWJ1dGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoU3BsaWRlLm9wdGlvbnMuaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIFNwbGlkZS5vbignbmF2aWdhdGlvbjptb3VudGVkIG5hdmlnYXRpb246dXBkYXRlZCcsIGluaXROYXZpZ2F0aW9uKS5vbignYWN0aXZlJywgZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbihTbGlkZSwgdHJ1ZSk7XG4gICAgICAgIH0pLm9uKCdpbmFjdGl2ZScsIGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb24oU2xpZGUsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGluaXRBdXRvcGxheSgpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIEFycm93cyA9IENvbXBvbmVudHMuQXJyb3dzO1xuICAgICAgdmFyIGFycm93cyA9IEFycm93cyA/IEFycm93cy5hcnJvd3MgOiB7fTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShFbGVtZW50cy5zbGlkZXMuY29uY2F0KFthcnJvd3MucHJldiwgYXJyb3dzLm5leHQsIEVsZW1lbnRzLnBsYXksIEVsZW1lbnRzLnBhdXNlXSksIGFsbEF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgfTtcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNsaWRlIGF0dHJpYnV0ZXMgd2hlbiBpdCBnZXRzIHZpc2libGUgb3IgaGlkZGVuLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzbGlkZSAgIC0gQSBzbGlkZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmlzaWJsZSAtIFRydWUgd2hlbiB0aGUgc2xpZGUgZ2V0cyB2aXNpYmxlLCBvciBmYWxzZSB3aGVuIGhpZGRlbi5cclxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGVTbGlkZShzbGlkZSwgdmlzaWJsZSkge1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ISURERU4sICF2aXNpYmxlKTtcblxuICAgIGlmIChTcGxpZGUub3B0aW9ucy5zbGlkZUZvY3VzKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFRBQl9JTkRFWCwgdmlzaWJsZSA/IDAgOiAtMSk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYXJyb3dzIGlmIHRoZXkgYXJlIGF2YWlsYWJsZS5cclxuICAgKiBBcHBlbmQgc2NyZWVuIHJlYWRlciBlbGVtZW50cyBhbmQgYWRkIGFyaWEtY29udHJvbHMgYXR0cmlidXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwcmV2IC0gUHJldmlvdXMgYXJyb3cgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5leHQgLSBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0QXJyb3dzKHByZXYsIG5leHQpIHtcbiAgICB2YXIgY29udHJvbHMgPSBFbGVtZW50cy50cmFjay5pZDtcbiAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMpO1xuICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0NPTlRST0xTLCBjb250cm9scyk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIGFycm93IGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXYgICAgICAtIFByZXZpb3VzIGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBuZXh0ICAgICAgLSBOZXh0IGFycm93IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmV2SW5kZXggLSBQcmV2aW91cyBzbGlkZSBpbmRleCBvciAtMSB3aGVuIHRoZXJlIGlzIG5vIHByZWNlZGUgc2xpZGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBuZXh0SW5kZXggLSBOZXh0IHNsaWRlIGluZGV4IG9yIC0xIHdoZW4gdGhlcmUgaXMgbm8gbmV4dCBzbGlkZS5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFycm93cyhwcmV2LCBuZXh0LCBwcmV2SW5kZXgsIG5leHRJbmRleCkge1xuICAgIHZhciBpbmRleCA9IFNwbGlkZS5pbmRleDtcbiAgICB2YXIgcHJldkxhYmVsID0gcHJldkluZGV4ID4gLTEgJiYgaW5kZXggPCBwcmV2SW5kZXggPyBpMThuLmxhc3QgOiBpMThuLnByZXY7XG4gICAgdmFyIG5leHRMYWJlbCA9IG5leHRJbmRleCA+IC0xICYmIGluZGV4ID4gbmV4dEluZGV4ID8gaTE4bi5maXJzdCA6IGkxOG4ubmV4dDtcbiAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9MQUJFTCwgcHJldkxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUobmV4dCwgQVJJQV9MQUJFTCwgbmV4dExhYmVsKTtcbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHBhZ2luYXRpb24gaWYgaXQncyBhdmFpbGFibGUuXHJcbiAgICogQXBwZW5kIGEgc2NyZWVuIHJlYWRlciBlbGVtZW50IGFuZCBhZGQgYXJpYS1jb250cm9scy9sYWJlbCBhdHRyaWJ1dGUgdG8gZWFjaCBpdGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgICAgLSBEYXRhIG9iamVjdCBjb250YWluaW5nIGFsbCBpdGVtcy5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aXZlSXRlbSAtIEFuIGluaXRpYWwgYWN0aXZlIGl0ZW0uXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0UGFnaW5hdGlvbihkYXRhLCBhY3RpdmVJdGVtKSB7XG4gICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgIHNldEF0dHJpYnV0ZShhY3RpdmVJdGVtLmJ1dHRvbiwgQVJJQV9DVVJSRU5SVCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IFNwbGlkZS5vcHRpb25zO1xuICAgICAgdmFyIHRleHQgPSBvcHRpb25zLmZvY3VzID09PSBmYWxzZSAmJiBvcHRpb25zLnBlclBhZ2UgPiAxID8gaTE4bi5wYWdlWCA6IGkxOG4uc2xpZGVYO1xuICAgICAgdmFyIGxhYmVsID0gc3ByaW50Zih0ZXh0LCBpdGVtLnBhZ2UgKyAxKTtcbiAgICAgIHZhciBidXR0b24gPSBpdGVtLmJ1dHRvbjtcbiAgICAgIHZhciBjb250cm9scyA9IGl0ZW0uU2xpZGVzLm1hcChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLnNsaWRlLmlkO1xuICAgICAgfSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0NPTlRST0xTLCBjb250cm9scy5qb2luKCcgJykpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9MQUJFTCwgbGFiZWwpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBwYWdpbmF0aW9uIGF0dHJpYnV0ZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gIGRhdGEgLSBEYXRhIG9iamVjdCBjb250YWluaW5nIGFsbCBpdGVtcy5cclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXYgLSBBIHByZXZpb3VzIGFjdGl2ZSBlbGVtZW50LlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY3VyciAtIEEgY3VycmVudCBhY3RpdmUgZWxlbWVudC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oZGF0YSwgcHJldiwgY3Vycikge1xuICAgIGlmIChwcmV2KSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUocHJldi5idXR0b24sIEFSSUFfQ1VSUkVOUlQpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoY3Vyci5idXR0b24sIEFSSUFfQ1VSUkVOUlQsIHRydWUpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGF1dG9wbGF5IGJ1dHRvbnMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBpbml0QXV0b3BsYXkoKSB7XG4gICAgWydwbGF5JywgJ3BhdXNlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsbSA9IEVsZW1lbnRzW25hbWVdO1xuXG4gICAgICBpZiAoZWxtKSB7XG4gICAgICAgIGlmICghaXNCdXR0b24oZWxtKSkge1xuICAgICAgICAgIHNldEF0dHJpYnV0ZShlbG0sICdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QXR0cmlidXRlKGVsbSwgQVJJQV9DT05UUk9MUywgRWxlbWVudHMudHJhY2suaWQpO1xuICAgICAgICBzZXRBdHRyaWJ1dGUoZWxtLCBBUklBX0xBQkVMLCBpMThuW25hbWVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplIG5hdmlnYXRpb24gc2xpZGVyLlxyXG4gICAqIEFkZCBidXR0b24gcm9sZSwgYXJpYS1sYWJlbCwgYXJpYS1jb250cm9scyB0byBzbGlkZSBlbGVtZW50cyBhbmQgYXBwZW5kIHNjcmVlbiByZWFkZXIgdGV4dCB0byB0aGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGxpZGV9IG1haW4gLSBBIG1haW4gU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaW5pdE5hdmlnYXRpb24obWFpbikge1xuICAgIEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICB2YXIgc2xpZGUgPSBTbGlkZS5zbGlkZTtcbiAgICAgIHZhciByZWFsSW5kZXggPSBTbGlkZS5yZWFsSW5kZXg7XG5cbiAgICAgIGlmICghaXNCdXR0b24oc2xpZGUpKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzbGlkZUluZGV4ID0gcmVhbEluZGV4ID4gLTEgPyByZWFsSW5kZXggOiBTbGlkZS5pbmRleDtcbiAgICAgIHZhciBsYWJlbCA9IHNwcmludGYoaTE4bi5zbGlkZVgsIHNsaWRlSW5kZXggKyAxKTtcbiAgICAgIHZhciBtYWluU2xpZGUgPSBtYWluLkNvbXBvbmVudHMuRWxlbWVudHMuZ2V0U2xpZGUoc2xpZGVJbmRleCk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsKTtcblxuICAgICAgaWYgKG1haW5TbGlkZSkge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ09OVFJPTFMsIG1haW5TbGlkZS5zbGlkZS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogVXBkYXRlIG5hdmlnYXRpb24gYXR0cmlidXRlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgU2xpZGUgIC0gQSB0YXJnZXQgU2xpZGUgb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlIC0gVHJ1ZSBpZiB0aGUgc2xpZGUgaXMgYWN0aXZlIG9yIGZhbHNlIGlmIGluYWN0aXZlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbihfcmVmLCBhY3RpdmUpIHtcbiAgICB2YXIgc2xpZGUgPSBfcmVmLnNsaWRlO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlJULCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlJUKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgYnV0dG9uIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxtIC0gQW4gZWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBUcnVlIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGJ1dHRvbi5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGlzQnV0dG9uKGVsbSkge1xuICAgIHJldHVybiBlbG0udGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gIH1cblxuICByZXR1cm4gQTExeTtcbn0pO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2pzL2NvbXBvbmVudHMvc3luYy9pbmRleC5qc1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN5bmNocm9uaXppbmcgYSBzbGlkZXIgd2l0aCBhbm90aGVyLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuLyoqXHJcbiAqIFRoZSBldmVudCBuYW1lIGZvciBzeW5jLlxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cblxudmFyIFNZTkNfRVZFTlQgPSAnbW92ZS5zeW5jJztcbi8qKlxyXG4gKiBUaGUgZXZlbnQgbmFtZXMgZm9yIGNsaWNrIG5hdmlnYXRpb24uXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xuXG52YXIgQ0xJQ0tfRVZFTlRTID0gJ21vdXNldXAgdG91Y2hlbmQnO1xuLyoqXHJcbiAqIFRoZSBrZXlzIGZvciB0cmlnZ2VyaW5nIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbi5cclxuICpcclxuICogQHR5cGUge1N0cmluZ1tdfVxyXG4gKi9cblxudmFyIFRSSUdHRVJfS0VZUyA9IFsnICcsICdFbnRlcicsICdTcGFjZWJhciddO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHN5bmNocm9uaXppbmcgYSBzbGlkZXIgd2l0aCBhbm90aGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwbGlkZX0gU3BsaWRlIC0gQSBTcGxpZGUgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgY29tcG9uZW50IG9iamVjdC5cclxuICovXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3Qgc3luYyA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIEtlZXAgdGhlIHNpYmxpbmcgU3BsaWRlIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge1NwbGlkZX1cclxuICAgKi9cbiAgdmFyIHNpYmxpbmcgPSBTcGxpZGUuc2libGluZztcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgc2libGluZyBzbGlkZXIgaXMgbmF2aWdhdGlvbiBvciBub3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7U3BsaWRlfGJvb2xlYW59XHJcbiAgICovXG5cbiAgdmFyIGlzTmF2aWdhdGlvbiA9IHNpYmxpbmcgJiYgc2libGluZy5vcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgLyoqXHJcbiAgICogTGF5b3V0IGNvbXBvbmVudCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBTeW5jID0ge1xuICAgIC8qKlxyXG4gICAgICogUmVxdWlyZWQgb25seSB3aGVuIHRoZSBzdWIgc2xpZGVyIGlzIGF2YWlsYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiAhIXNpYmxpbmcsXG5cbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHN5bmNNYWluKCk7XG4gICAgICBzeW5jU2libGluZygpO1xuXG4gICAgICBpZiAoaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIGJpbmQoKTtcbiAgICAgICAgU3BsaWRlLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmluZCgpO1xuICAgICAgICAgICAgc2libGluZy5lbWl0KCduYXZpZ2F0aW9uOnVwZGF0ZWQnLCBTcGxpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgYXJlIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgICBzaWJsaW5nLmVtaXQoJ25hdmlnYXRpb246bW91bnRlZCcsIFNwbGlkZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBMaXN0ZW4gdGhlIHByaW1hcnkgc2xpZGVyIGV2ZW50IHRvIG1vdmUgc2Vjb25kYXJ5IG9uZS5cclxuICAgKiBNdXN0IHVuYmluZCBhIGhhbmRsZXIgYXQgZmlyc3QgdG8gYXZvaWQgaW5maW5pdGUgbG9vcC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBzeW5jTWFpbigpIHtcbiAgICBTcGxpZGUub24oU1lOQ19FVkVOVCwgZnVuY3Rpb24gKG5ld0luZGV4LCBwcmV2SW5kZXgsIGRlc3RJbmRleCkge1xuICAgICAgc2libGluZy5vZmYoU1lOQ19FVkVOVCkuZ28oc2libGluZy5pcyhMT09QKSA/IGRlc3RJbmRleCA6IG5ld0luZGV4LCBmYWxzZSk7XG4gICAgICBzeW5jU2libGluZygpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiB0aGUgc2Vjb25kYXJ5IHNsaWRlciBldmVudCB0byBtb3ZlIHByaW1hcnkgb25lLlxyXG4gICAqIE11c3QgdW5iaW5kIGEgaGFuZGxlciBhdCBmaXJzdCB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3luY1NpYmxpbmcoKSB7XG4gICAgc2libGluZy5vbihTWU5DX0VWRU5ULCBmdW5jdGlvbiAobmV3SW5kZXgsIHByZXZJbmRleCwgZGVzdEluZGV4KSB7XG4gICAgICBTcGxpZGUub2ZmKFNZTkNfRVZFTlQpLmdvKFNwbGlkZS5pcyhMT09QKSA/IGRlc3RJbmRleCA6IG5ld0luZGV4LCBmYWxzZSk7XG4gICAgICBzeW5jTWFpbigpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxyXG4gICAqIExpc3RlbiBzb21lIGV2ZW50cyBvbiBlYWNoIHNsaWRlLlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBzaWJsaW5nLkNvbXBvbmVudHMuRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHNsaWRlID0gX3JlZi5zbGlkZSxcbiAgICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXg7XG5cbiAgICAgIC8qXHJcbiAgICAgICAqIExpc3RlbiBtb3VzZXVwIGFuZCB0b3VjaGVuZCBldmVudHMgdG8gaGFuZGxlIGNsaWNrLlxyXG4gICAgICAgKi9cbiAgICAgIFNwbGlkZS5vZmYoQ0xJQ0tfRVZFTlRTLCBzbGlkZSkub24oQ0xJQ0tfRVZFTlRTLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBJZ25vcmUgYSBtaWRkbGUgb3IgcmlnaHQgY2xpY2suXG4gICAgICAgIGlmICghZS5idXR0b24gfHwgZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICBtb3ZlU2libGluZyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNsaWRlKTtcbiAgICAgIC8qXHJcbiAgICAgICAqIFN1YnNjcmliZSBrZXl1cCB0byBoYW5kbGUgRW50ZXIgYW5kIFNwYWNlIGtleS5cclxuICAgICAgICogTm90ZSB0aGF0IEFycmF5LmluY2x1ZGVzIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUuXHJcbiAgICAgICAqL1xuXG4gICAgICBTcGxpZGUub2ZmKCdrZXl1cCcsIHNsaWRlKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoVFJJR0dFUl9LRVlTLmluZGV4T2YoZS5rZXkpID4gLTEpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbW92ZVNpYmxpbmcoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBzbGlkZSwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgc2libGluZyB0byB0aGUgZ2l2ZW4gaW5kZXguXHJcbiAgICogTmVlZCB0byBjaGVjayBcIklETEVcIiBzdGF0dXMgYmVjYXVzZSBzbGlkZXMgY2FuIGJlIG1vdmluZyBieSBEcmFnIGNvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRhcmdldCBpbmRleC5cclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG1vdmVTaWJsaW5nKGluZGV4KSB7XG4gICAgaWYgKFNwbGlkZS5TdGF0ZS5pcyhJRExFKSkge1xuICAgICAgc2libGluZy5nbyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN5bmM7XG59KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9qcy9jb21wb25lbnRzL2JyZWFrcG9pbnRzL2luZGV4LmpzXG4vKipcclxuICogVGhlIGNvbXBvbmVudCBmb3IgdXBkYXRpbmcgb3B0aW9ucyBhY2NvcmRpbmcgdG8gYSBjdXJyZW50IHdpbmRvdyB3aWR0aC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBJbnRlcnZhbCB0aW1lIGZvciB0aHJvdHRsZS5cclxuICpcclxuICogQHR5cGUge251bWJlcn1cclxuICovXG5cbnZhciBUSFJPVFRMRSA9IDUwO1xuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgZm9yIHVwZGF0aW5nIG9wdGlvbnMgYWNjb3JkaW5nIHRvIGEgY3VycmVudCB3aW5kb3cgd2lkdGguXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BsaWRlfSBTcGxpZGUgLSBBIFNwbGlkZSBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSAtIFRoZSBjb21wb25lbnQgb2JqZWN0LlxyXG4gKi9cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBicmVha3BvaW50cyA9IChmdW5jdGlvbiAoU3BsaWRlKSB7XG4gIC8qKlxyXG4gICAqIFN0b3JlIGJyZWFrcG9pbnRzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdHxib29sZWFufVxyXG4gICAqL1xuICB2YXIgYnJlYWtwb2ludHMgPSBTcGxpZGUub3B0aW9ucy5icmVha3BvaW50cztcbiAgLyoqXHJcbiAgICogVGhlIGNoZWNrIGZ1bmN0aW9uIHdob3NlIGZyZXF1ZW5jeSBvZiBjYWxsIGlzIHJlZHVjZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICovXG5cbiAgdmFyIHRocm90dGxlZENoZWNrID0gdGhyb3R0bGUoY2hlY2ssIFRIUk9UVExFKTtcbiAgLyoqXHJcbiAgICogS2VlcCBpbml0aWFsIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xuXG4gIHZhciBpbml0aWFsT3B0aW9ucztcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgY29udGFpbmluZyBvYmplY3RzIG9mIHBvaW50IGFuZCBNZWRpYVF1ZXJ5TGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3RbXX1cclxuICAgKi9cblxuICB2YXIgbWFwID0gW107XG4gIC8qKlxyXG4gICAqIEhvbGQgdGhlIHByZXZpb3VzIGJyZWFrcG9pbnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cclxuICAgKi9cblxuICB2YXIgcHJldlBvaW50O1xuICAvKipcclxuICAgKiBCcmVha3BvaW50cyBjb21wb25lbnQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cblxuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBSZXF1aXJlZCBvbmx5IHdoZW4gdGhlIGJyZWFrcG9pbnRzIGRlZmluaXRpb24gaXMgcHJvdmlkZWQgYW5kIGJyb3dzZXIgc3VwcG9ydHMgbWF0Y2hNZWRpYS5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xuICAgIHJlcXVpcmVkOiBicmVha3BvaW50cyAmJiBtYXRjaE1lZGlhLFxuXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBtYXAgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgICByZXR1cm4gK24gLSArbTtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgICAgbXFsOiBtYXRjaE1lZGlhKFwiKG1heC13aWR0aDpcIiArIHBvaW50ICsgXCJweClcIilcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgLypcclxuICAgICAgICogVG8ga2VlcCBtb25pdG9yaW5nIHJlc2l6ZSBldmVudCBhZnRlciBkZXN0cnVjdGlvbiB3aXRob3V0IFwiY29tcGxldGVseVwiLFxyXG4gICAgICAgKiB1c2UgbmF0aXZlIGFkZEV2ZW50TGlzdGVuZXIgaW5zdGVhZCBvZiBTcGxpZGUub24uXHJcbiAgICAgICAqL1xuXG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVjayk7IC8vIEtlZXAgaW5pdGlhbCBvcHRpb25zIHRvIGFwcGx5IHRoZW0gd2hlbiBubyBicmVha3BvaW50IG1hdGNoZXMuXG5cbiAgICAgIGluaXRpYWxPcHRpb25zID0gU3BsaWRlLm9wdGlvbnM7XG4gICAgICBjaGVjaygpO1xuICAgIH0sXG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0ZWx5IC0gV2hldGhlciB0byBkZXN0cm95IFNwbGlkZSBjb21wbGV0ZWx5LlxyXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgICBpZiAoY29tcGxldGVseSkge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVjayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcclxuICAgKiBDaGVjayB0aGUgYnJlYWtwb2ludC5cclxuICAgKi9cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICB2YXIgcG9pbnQgPSBnZXRQb2ludCgpO1xuXG4gICAgaWYgKHBvaW50ICE9PSBwcmV2UG9pbnQpIHtcbiAgICAgIHByZXZQb2ludCA9IHBvaW50O1xuICAgICAgdmFyIFN0YXRlID0gU3BsaWRlLlN0YXRlO1xuICAgICAgdmFyIG9wdGlvbnMgPSBicmVha3BvaW50c1twb2ludF0gfHwgaW5pdGlhbE9wdGlvbnM7XG4gICAgICB2YXIgZGVzdHJveSA9IG9wdGlvbnMuZGVzdHJveTtcblxuICAgICAgaWYgKGRlc3Ryb3kpIHtcbiAgICAgICAgU3BsaWRlLm9wdGlvbnMgPSBpbml0aWFsT3B0aW9ucztcbiAgICAgICAgU3BsaWRlLmRlc3Ryb3koZGVzdHJveSA9PT0gJ2NvbXBsZXRlbHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChTdGF0ZS5pcyhERVNUUk9ZRUQpKSB7XG4gICAgICAgICAgU3BsaWRlLm1vdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBTcGxpZGUub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgYnJlYWtwb2ludCBtYXRjaGluZyBjdXJyZW50IHdpbmRvdyB3aWR0aC5cclxuICAgKiBOb3RlIHRoYXQgQXJyYXkucHJvdG90eXBlLmZpbmQgaXMgbm90IHN1cHBvcnRlZCBieSBJRS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge251bWJlcnxzdHJpbmd9IC0gQSBicmVha3BvaW50IGFzIG51bWJlciBvciBzdHJpbmcuIC0xIGlmIG5vIHBvaW50IG1hdGNoZXMuXHJcbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRQb2ludCgpIHtcbiAgICB2YXIgaXRlbSA9IG1hcC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLm1xbC5tYXRjaGVzO1xuICAgIH0pWzBdO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5wb2ludCA6IC0xO1xuICB9XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvanMvY29tcG9uZW50cy9pbmRleC5qc1xuLyoqXHJcbiAqIEV4cG9ydCBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIE5hb3Rvc2hpIEZ1aml0YVxyXG4gKiBAY29weXJpZ2h0IE5hb3Rvc2hpIEZ1aml0YS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIENPTVBMRVRFID0ge1xuICBPcHRpb25zOiBvcHRpb25zLFxuICBCcmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gIENvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gIEVsZW1lbnRzOiBjb21wb25lbnRzX2VsZW1lbnRzLFxuICBUcmFjazogdHJhY2ssXG4gIENsb25lczogY2xvbmVzLFxuICBMYXlvdXQ6IGxheW91dCxcbiAgRHJhZzogZHJhZyxcbiAgQ2xpY2s6IGNsaWNrLFxuICBBdXRvcGxheTogYXV0b3BsYXksXG4gIENvdmVyOiBjb3ZlcixcbiAgQXJyb3dzOiBhcnJvd3MsXG4gIFBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gIExhenlMb2FkOiBsYXp5bG9hZCxcbiAgS2V5Ym9hcmQ6IGtleWJvYXJkLFxuICBTeW5jOiBzeW5jLFxuICBBMTF5OiBhMTF5XG59O1xudmFyIExJR0hUID0ge1xuICBPcHRpb25zOiBvcHRpb25zLFxuICBDb250cm9sbGVyOiBjb250cm9sbGVyLFxuICBFbGVtZW50czogY29tcG9uZW50c19lbGVtZW50cyxcbiAgVHJhY2s6IHRyYWNrLFxuICBDbG9uZXM6IGNsb25lcyxcbiAgTGF5b3V0OiBsYXlvdXQsXG4gIERyYWc6IGRyYWcsXG4gIENsaWNrOiBjbGljayxcbiAgQXJyb3dzOiBhcnJvd3MsXG4gIFBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gIEExMXk6IGExMXlcbn07XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9idWlsZC9tb2R1bGUvbW9kdWxlLmpzXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXHJcbiAqIEV4cG9ydCBTcGxpZGUgY2xhc3MgZm9yIGltcG9ydC5cclxuICpcclxuICogQGF1dGhvciAgICBOYW90b3NoaSBGdWppdGFcclxuICogQGNvcHlyaWdodCBOYW90b3NoaSBGdWppdGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqL1xuXG5cbi8qKlxyXG4gKiBFeHBvcnQgU3BsaWRlIGNsYXNzIGZvciBpbXBvcnQgZnJvbSBvdGhlciBwcm9qZWN0cy5cclxuICovXG5cbnZhciBtb2R1bGVfU3BsaWRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29yZSkge1xuICBfaW5oZXJpdHNMb29zZShTcGxpZGUsIF9Db3JlKTtcblxuICBmdW5jdGlvbiBTcGxpZGUocm9vdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfQ29yZS5jYWxsKHRoaXMsIHJvb3QsIG9wdGlvbnMsIENPTVBMRVRFKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIFNwbGlkZTtcbn0oU3BsaWRlKTtcblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMzExKTtcbi8qKioqKiovIH0pKClcbjtcbn0pOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9zcmMvZm9udHMvT3JhdG9yU3RkLm90ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmF0b3JcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJhMmI7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsK0RBQUE7QUFDRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JhdG9yXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL3NyYy9mb250cy9PcmF0b3JTdGQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmEyYjtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FsbGVyeS1tb2R1bGVfX2dhbGxlcnktaW1hZ2UtY29udGFpbmVyLS0zbVBZbiB7XFxuICBiYWNrZ3JvdW5kOiAjMmMyYTJiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2FsbGVyeS1tb2R1bGVfX2dhbGxlcnktaW1hZ2UtY29udGFpbmVyLS0zbVBZbiAuZ2FsbGVyeS1tb2R1bGVfX2dhbGxlcnktaW1hZ2VzLS1BdjVHaCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAzNTBweCkgbWlubWF4KDAsIDM1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDAsIDE4MHB4KSBtaW5tYXgoMCwgMTgwcHgpIG1pbm1heCgwLCAxODBweCk7XFxufVxcbi5nYWxsZXJ5LW1vZHVsZV9fZ2FsbGVyeS1pbWFnZS1jb250YWluZXItLTNtUFluIC5nYWxsZXJ5LW1vZHVsZV9fZ2FsbGVyeS1pbWFnZXMtLUF2NUdoIC5nYWxsZXJ5LW1vZHVsZV9fZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZS1jb250YWluZXItLTF3bURUIC5nYWxsZXJ5LW1vZHVsZV9fZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZS0tMjBXQWoge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZ2FsbGVyeS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBRUEsd0RBQUE7RUFDQSxzRUFBQTtBQUFKO0FBRU07RUFDRSxpQkFBQTtFQUVBLFdBQUE7QUFEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FsbGVyeS1pbWFnZS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzJjMmEyYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIC5nYWxsZXJ5LWltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTAwcHg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG5cXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMzUwcHgpIG1pbm1heCgwLCAzNTBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDAsIDE4MHB4KSBtaW5tYXgoMCwgMTgwcHgpIG1pbm1heCgwLCAxODBweCk7XFxyXFxuICAgIC5nYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgLmdhbGxlcnktcHJvcGVydHktaW1hZ2Uge1xcclxcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZ2FsbGVyeS1pbWFnZS1jb250YWluZXJcIjogXCJnYWxsZXJ5LW1vZHVsZV9fZ2FsbGVyeS1pbWFnZS1jb250YWluZXItLTNtUFluXCIsXG5cdFwiZ2FsbGVyeS1pbWFnZXNcIjogXCJnYWxsZXJ5LW1vZHVsZV9fZ2FsbGVyeS1pbWFnZXMtLUF2NUdoXCIsXG5cdFwiZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZS1jb250YWluZXJcIjogXCJnYWxsZXJ5LW1vZHVsZV9fZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZS1jb250YWluZXItLTF3bURUXCIsXG5cdFwiZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZVwiOiBcImdhbGxlcnktbW9kdWxlX19nYWxsZXJ5LXByb3BlcnR5LWltYWdlLS0yMFdBalwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sZWZ0Q29udGFpbmVyLW1vZHVsZV9fY29udGFpbmVyLS1uUV8wZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYTJiO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGVmdENvbnRhaW5lci1tb2R1bGVfX2NvbnRlbnQtY29udGFpbmVyLS0yV3V0LSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxlZnRDb250YWluZXItbW9kdWxlX19sb2dvLWNvbnRhaW5lci0tMVllencge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubGVmdENvbnRhaW5lci1tb2R1bGVfX2xvZ28tY29udGFpbmVyLS0xWWV6dyAubGVmdENvbnRhaW5lci1tb2R1bGVfX2xvZ28tLTJqM1JuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2xlZnRDb250YWluZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJhMmI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxufVxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImxlZnRDb250YWluZXItbW9kdWxlX19jb250YWluZXItLW5RXzBkXCIsXG5cdFwiY29udGVudC1jb250YWluZXJcIjogXCJsZWZ0Q29udGFpbmVyLW1vZHVsZV9fY29udGVudC1jb250YWluZXItLTJXdXQtXCIsXG5cdFwibG9nby1jb250YWluZXJcIjogXCJsZWZ0Q29udGFpbmVyLW1vZHVsZV9fbG9nby1jb250YWluZXItLTFZZXp3XCIsXG5cdFwibG9nb1wiOiBcImxlZnRDb250YWluZXItbW9kdWxlX19sb2dvLS0yajNSblwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlcy1tb2R1bGVfX2hpZGRlbi1sb2dvLWNvbnRhaW5lci1icm93bi0tMnFqSjgge1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjAwcHg7XFxuICBsZWZ0OiAwO1xcbn1cXG4ucGFnZXMtbW9kdWxlX19oaWRkZW4tbG9nby1jb250YWluZXItYnJvd24tLTJxako4IC5wYWdlcy1tb2R1bGVfX2hpZGRlbi1sb2dvLWJyb3duLS0ybGxQViB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucGFnZXMtbW9kdWxlX19oaWRkZW4tbG9nby1jb250YWluZXItZ3JleS0tMVBmRF8ge1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjAwcHg7XFxuICByaWdodDogMDtcXG59XFxuLnBhZ2VzLW1vZHVsZV9faGlkZGVuLWxvZ28tY29udGFpbmVyLWdyZXktLTFQZkRfIC5wYWdlcy1tb2R1bGVfX2hpZGRlbi1sb2dvLWdyZXktLTFuZXNMIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5wYWdlcy1tb2R1bGVfX2V4cGFuZC1ob3Zlci0tMUswZlEge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnBhZ2VzLW1vZHVsZV9fZXhwYW5kLWhvdmVyLS0xSzBmUTpob3ZlciAucGFnZXMtbW9kdWxlX19pbWFnZS1wYWdlLS0zSjFGaCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG5cXG4ucGFnZXMtbW9kdWxlX19wbGF5LWJ1dHRvbi0tMVJrc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICAvKiBwb3NpdGlvbiB0aGUgdG9wICBlZGdlIG9mIHRoZSBlbGVtZW50IGF0IHRoZSBtaWRkbGUgb2YgdGhlIHBhcmVudCAqL1xcbiAgbGVmdDogNTAlO1xcbiAgLyogcG9zaXRpb24gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgei1pbmRleDogNTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucGFnZXMtbW9kdWxlX19jb250ZW50LWhlYWRlci0tM0tQUWcge1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnBhZ2VzLW1vZHVsZV9fYmx1ci0tMWJleE8ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnBhZ2VzLW1vZHVsZV9fYmx1ci0tMWJleE86OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5wYWdlcy1tb2R1bGVfX2NvbnRhaW5lci0tRG9MRWcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmEyYjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wYWdlcy1tb2R1bGVfX2NvbnRhaW5lci0tRG9MRWcgLnBhZ2VzLW1vZHVsZV9faW1hZ2UtY29udGVudC0tM0M4Y0cge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG4ucGFnZXMtbW9kdWxlX19jb250YWluZXItLURvTEVnIC5wYWdlcy1tb2R1bGVfX2ltYWdlLWNvbnRhaW5lci0tM2VSVWkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGFnZXMtbW9kdWxlX19jb250YWluZXItLURvTEVnIC5wYWdlcy1tb2R1bGVfX2ltYWdlLWNvbnRhaW5lci0tM2VSVWkgLnBhZ2VzLW1vZHVsZV9faW1hZ2UtcGFnZS0tM0oxRmgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxufVxcbi5wYWdlcy1tb2R1bGVfX2NvbnRhaW5lci0tRG9MRWcgLnBhZ2VzLW1vZHVsZV9fY29udGVudC10ZXh0LS0xOFF0VSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucGFnZXMtbW9kdWxlX190ZXh0LWNvbnRlbnQtLTJCd2NPIHtcXG4gIHBhZGRpbmc6IDAgMjUwcHg7XFxufVxcblxcbi5wYWdlcy1tb2R1bGVfX2Jyb3duLWJnLS1aN0NidyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ2MzJlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wYWdlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDSTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFDTjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLHNFQUFBO0VBQ1YsU0FBQTtFQUFXLHNFQUFBO0VBRVgsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBRUEsMEJBQUE7QUFHSjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQURFO0VBQ0UsWUFBQTtBQUdKO0FBREU7RUFDRSxZQUFBO0FBR0o7QUFGSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUlOO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhpZGRlbi1sb2dvLWNvbnRhaW5lci1icm93biB7XFxyXFxuICB3aWR0aDogNTUwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0yMDBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICAuaGlkZGVuLWxvZ28tYnJvd24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcblxcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhpZGRlbi1sb2dvLWNvbnRhaW5lci1ncmV5IHtcXHJcXG4gIHdpZHRoOiA1NTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTIwMHB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICAuaGlkZGVuLWxvZ28tZ3JleSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZXhwYW5kLWhvdmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgLmltYWdlLXBhZ2Uge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5wbGF5LWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTsgLyogcG9zaXRpb24gdGhlIHRvcCAgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cXHJcXG4gIGxlZnQ6IDUwJTsgLyogcG9zaXRpb24gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cXHJcXG5cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgei1pbmRleDogNTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4uY29udGVudC1oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuLmJsdXIge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuXFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJhMmI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgLmltYWdlLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICB9XFxyXFxuICAuaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAuaW1hZ2UtcGFnZSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50LXRleHQge1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB9XFxyXFxufVxcclxcbi50ZXh0LWNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMCAyNTBweDtcXHJcXG59XFxyXFxuLmJyb3duLWJnIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDYzMmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhpZGRlbi1sb2dvLWNvbnRhaW5lci1icm93blwiOiBcInBhZ2VzLW1vZHVsZV9faGlkZGVuLWxvZ28tY29udGFpbmVyLWJyb3duLS0ycWpKOFwiLFxuXHRcImhpZGRlbi1sb2dvLWJyb3duXCI6IFwicGFnZXMtbW9kdWxlX19oaWRkZW4tbG9nby1icm93bi0tMmxsUFZcIixcblx0XCJoaWRkZW4tbG9nby1jb250YWluZXItZ3JleVwiOiBcInBhZ2VzLW1vZHVsZV9faGlkZGVuLWxvZ28tY29udGFpbmVyLWdyZXktLTFQZkRfXCIsXG5cdFwiaGlkZGVuLWxvZ28tZ3JleVwiOiBcInBhZ2VzLW1vZHVsZV9faGlkZGVuLWxvZ28tZ3JleS0tMW5lc0xcIixcblx0XCJleHBhbmQtaG92ZXJcIjogXCJwYWdlcy1tb2R1bGVfX2V4cGFuZC1ob3Zlci0tMUswZlFcIixcblx0XCJpbWFnZS1wYWdlXCI6IFwicGFnZXMtbW9kdWxlX19pbWFnZS1wYWdlLS0zSjFGaFwiLFxuXHRcInBsYXktYnV0dG9uXCI6IFwicGFnZXMtbW9kdWxlX19wbGF5LWJ1dHRvbi0tMVJrc3RcIixcblx0XCJjb250ZW50LWhlYWRlclwiOiBcInBhZ2VzLW1vZHVsZV9fY29udGVudC1oZWFkZXItLTNLUFFnXCIsXG5cdFwiYmx1clwiOiBcInBhZ2VzLW1vZHVsZV9fYmx1ci0tMWJleE9cIixcblx0XCJjb250YWluZXJcIjogXCJwYWdlcy1tb2R1bGVfX2NvbnRhaW5lci0tRG9MRWdcIixcblx0XCJpbWFnZS1jb250ZW50XCI6IFwicGFnZXMtbW9kdWxlX19pbWFnZS1jb250ZW50LS0zQzhjR1wiLFxuXHRcImltYWdlLWNvbnRhaW5lclwiOiBcInBhZ2VzLW1vZHVsZV9faW1hZ2UtY29udGFpbmVyLS0zZVJVaVwiLFxuXHRcImNvbnRlbnQtdGV4dFwiOiBcInBhZ2VzLW1vZHVsZV9fY29udGVudC10ZXh0LS0xOFF0VVwiLFxuXHRcInRleHQtY29udGVudFwiOiBcInBhZ2VzLW1vZHVsZV9fdGV4dC1jb250ZW50LS0yQndjT1wiLFxuXHRcImJyb3duLWJnXCI6IFwicGFnZXMtbW9kdWxlX19icm93bi1iZy0tWjdDYndcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWwtbW9kdWxlX193cmFwcGVyLS1DVTlJZyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLm1vZGFsLW1vZHVsZV9fbW9kYWwtY29udGFpbmVyLS0yVF8tRSB7XFxuICB3aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4ubW9kYWwtbW9kdWxlX19tYWluLWNvbnRlbnQtLTFXZ0hLIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL21vZGFsLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQ0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQztFQUNHLFdBQUE7RUFDQSxpQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMjAwcHg7XFxyXFxuIFxcclxcbn1cXHJcXG4gLm1haW4tY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwibW9kYWwtbW9kdWxlX193cmFwcGVyLS1DVTlJZ1wiLFxuXHRcIm1vZGFsLWNvbnRhaW5lclwiOiBcIm1vZGFsLW1vZHVsZV9fbW9kYWwtY29udGFpbmVyLS0yVF8tRVwiLFxuXHRcIm1haW4tY29udGVudFwiOiBcIm1vZGFsLW1vZHVsZV9fbWFpbi1jb250ZW50LS0xV2dIS1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5idXJnZXItbW9kdWxlX19jb250YWluZXItLTFTS3BpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMzAwMDtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2NvbnRhaW5lci0tMVNLcGkgLmJ1cmdlci1tb2R1bGVfX2NvbnRlbnQtLTJKVURTIHtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB6LWluZGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fY29udGFpbmVyLS0xU0twaSAuYnVyZ2VyLW1vZHVsZV9faXRlbS1jb250YWluZXItLTNVUGlnIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZmxleDogMTtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2NvbnRhaW5lci0tMVNLcGkgLmJ1cmdlci1tb2R1bGVfX2l0ZW0tY29udGFpbmVyLS0zVVBpZyBsaSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fY29udGFpbmVyLS0xU0twaSAuYnVyZ2VyLW1vZHVsZV9fbG9nby0tMWQ0WmYge1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA3OHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2NvbnRhaW5lci0tMVNLcGkgLmJ1cmdlci1tb2R1bGVfX2xvZ28tY29udGFpbmVyLS0zREUtdCB7XFxuICBmbGV4OiAxO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fY29udGFpbmVyLS0xU0twaSAuYnVyZ2VyLW1vZHVsZV9fdXNlci1vcHRpb25zLWNvbnRhaW5lci0tNFJjeU8ge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWxhYmVsLS0xeVBjMSB7XFxuICBibG9jay1zaXplOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaW5saW5lLXNpemU6IDE4cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgYmxvY2stc2l6ZTogY2FsYygyMHB4ICsgMTBweCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWxhYmVsLS0xeVBjMSAuYnVyZ2VyLW1vZHVsZV9fbWFpbi10cmlnZ2VyLWljb24tY29udGFpbmVyLS0yclR4ciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJsb2NrLXNpemU6IDE4cHg7XFxuICBpbmxpbmUtc2l6ZTogMTAwJTtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1sYWJlbC0tMXlQYzEgLmJ1cmdlci1tb2R1bGVfX21haW4tdHJpZ2dlci1pY29uLWNvbnRhaW5lci0tMnJUeHIgLmJ1cmdlci1tb2R1bGVfX21haW4tdHJpZ2dlci1pY29uLS0yTEtuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICBibG9jay1zaXplOiBjYWxjKDIwcHggLyAxMCk7XFxuICB0b3A6IGNhbGMoMzYlICsgMnB4KTtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1sYWJlbC0tMXlQYzEgLmJ1cmdlci1tb2R1bGVfX21haW4tdHJpZ2dlci1pY29uLWNvbnRhaW5lci0tMnJUeHIgLmJ1cmdlci1tb2R1bGVfX21haW4tdHJpZ2dlci1pY29uLS0yTEtuZDpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmxvY2stc2l6ZTogY2FsYygyMHB4IC8gMTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogLTVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5saW5lLXNpemU6IDEwMCU7XFxufVxcbi5idXJnZXItbW9kdWxlX19idXJnZXItbGFiZWwtLTF5UGMxIC5idXJnZXItbW9kdWxlX19tYWluLXRyaWdnZXItaWNvbi1jb250YWluZXItLTJyVHhyIC5idXJnZXItbW9kdWxlX19tYWluLXRyaWdnZXItaWNvbi0tMkxLbmQ6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYmxvY2stc2l6ZTogY2FsYygyMHB4IC8gMTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbmxpbmUtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1pbnB1dC0tMVNfRmEge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idXJnZXItbW9kdWxlX19idXJnZXItaW5wdXQtLTFTX0ZhOmNoZWNrZWQgfiAuYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWxhYmVsLS0xeVBjMSB7XFxuICB6LWluZGV4OiA0O1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWlucHV0LS0xU19GYTpjaGVja2VkIH4gLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1sYWJlbC0tMXlQYzEgLmJ1cmdlci1tb2R1bGVfX21haW4tdHJpZ2dlci1pY29uLS0yTEtuZCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1pbnB1dC0tMVNfRmE6Y2hlY2tlZCB+IC5idXJnZXItbW9kdWxlX19idXJnZXItbGFiZWwtLTF5UGMxIC5idXJnZXItbW9kdWxlX19tYWluLXRyaWdnZXItaWNvbi0tMkxLbmQ6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1pbnB1dC0tMVNfRmE6Y2hlY2tlZCB+IC5idXJnZXItbW9kdWxlX19idXJnZXItbGFiZWwtLTF5UGMxIC5idXJnZXItbW9kdWxlX19tYWluLXRyaWdnZXItaWNvbi0tMkxLbmQ6YWZ0ZXIge1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1pbnB1dC0tMVNfRmE6Y2hlY2tlZCB+IC5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtY29udGFpbmVyLS0yY0lVcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3R0b206IDA7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDM7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWlucHV0LS0xU19GYTpjaGVja2VkIH4gLmJ1cmdlci1tb2R1bGVfX3NpZGUtbWVudS1jb250YWluZXItLTJjSVVzIC5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtaXRlbS1jb250YWluZXItLTNtbnY3IHtcXG4gIHBhZGRpbmc6IDQwcHggOHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWlucHV0LS0xU19GYTpjaGVja2VkIH4gLmJ1cmdlci1tb2R1bGVfX3NpZGUtbWVudS1jb250YWluZXItLTJjSVVzIC5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtaXRlbS1jb250YWluZXItLTNtbnY3Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWlucHV0LS0xU19GYTpjaGVja2VkIH4gLmJ1cmdlci1tb2R1bGVfX3NpZGUtbWVudS1jb250YWluZXItLTJjSVVzIC5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtaXRlbS1jb250YWluZXItLTNtbnY3IGxpOm50aC1jaGlsZCgtbis3KSB7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMjBweCAxMTBweCAyMHB4IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDFkMjtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1pbnB1dC0tMVNfRmE6Y2hlY2tlZCB+IC5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtY29udGFpbmVyLS0yY0lVcyAuYnVyZ2VyLW1vZHVsZV9fc2lkZS1tZW51LWl0ZW0tY29udGFpbmVyLS0zbW52NyBsaTpudGgtY2hpbGQoOCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDAlO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX2J1cmdlci1pbnB1dC0tMVNfRmE6Y2hlY2tlZCB+IC5idXJnZXItbW9kdWxlX19oZWFkZXItbWFzay0tTDl2SDQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmxvY2stc2l6ZTogMTAwdmg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGJvdHRvbTogMDtcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uYnVyZ2VyLW1vZHVsZV9faGlkZS1zY3JvbGwtLTJpSWU5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtY29udGFpbmVyLS0yY0lVcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBib3R0b206IDA7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDM7XFxuICBsZWZ0OiAtNjAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtY29udGFpbmVyLS0yY0lVcyAuYnVyZ2VyLW1vZHVsZV9fc2lkZS1tZW51LWl0ZW0tY29udGFpbmVyLS0zbW52NyB7XFxuICBwYWRkaW5nOiA0MHB4IDhweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX3NpZGUtbWVudS1jb250YWluZXItLTJjSVVzIC5idXJnZXItbW9kdWxlX19zaWRlLW1lbnUtaXRlbS1jb250YWluZXItLTNtbnY3Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fc2lkZS1tZW51LWNvbnRhaW5lci0tMmNJVXMgLmJ1cmdlci1tb2R1bGVfX3NpZGUtbWVudS1pdGVtLWNvbnRhaW5lci0tM21udjcgbGk6bnRoLWNoaWxkKC1uKzcpIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4IDExMHB4IDIwcHggMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMWQyO1xcbn1cXG4uYnVyZ2VyLW1vZHVsZV9fc2lkZS1tZW51LWNvbnRhaW5lci0tMmNJVXMgLmJ1cmdlci1tb2R1bGVfX3NpZGUtbWVudS1pdGVtLWNvbnRhaW5lci0tM21udjcgbGk6bnRoLWNoaWxkKDgpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idXJnZXItbW9kdWxlX19zaWRlYmFyLWxvZ28tY29udGFpbmVyLS1CNl9sdyB7XFxuICB3aWR0aDogMjQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogNjBweCAyMHB4IDIwcHggMjBweDtcXG59XFxuLmJ1cmdlci1tb2R1bGVfX3NpZGViYXItbG9nby1jb250YWluZXItLUI2X2x3IC5idXJnZXItbW9kdWxlX19zaWRlYmFyLWxvZ28tLTNRSjh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYnVyZ2VyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXlDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQXhDRjtBQXlDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUF2Q0o7QUF5Q0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBRUEsU0FBQTtFQUNBLE9BQUE7QUF4Q0o7QUEwQ0k7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXhDTjtBQTJDRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF6Q0o7QUEyQ0U7RUFDRSxPQUFBO0FBekNKO0FBMkNFO0VBQ0UsT0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtBQTFDSjs7QUE2Q0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQTFDRjtBQTJDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF6Q0o7QUEwQ0k7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBeENOO0FBMENNO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXhDUjtBQTBDTTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF4Q1I7O0FBNkNBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUExQ0Y7QUEyQ0U7RUFDRSxVQUFBO0FBekNKO0FBMkNJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQXpDTjtBQTJDTTtFQUNFLE1BQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0FBekNSO0FBMkNNO0VBQ0UsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUF6Q1I7QUE4Q0U7RUEzS0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsU0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxPQW1LK0I7RUFqSy9CLGtCQUFBO0FBOEhGO0FBN0hFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUErSEo7QUE5SEk7RUFDRSxhQUFBO0FBZ0lOO0FBOUhJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsNkJBQUE7RUFFQSxnQ0FBQTtBQThITjtBQTVISTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUE4SE47QUFZRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUlBLG9DQUFBO0FBYko7O0FBZ0JBO0VBQ0UsZ0JBQUE7QUFiRjs7QUFlQTtFQS9MRSx1QkFBQTtFQUNBLGFBQUE7RUFFQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBdUw2QjtFQXJMN0Isa0JBQUE7QUFrTEY7QUFqTEU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW1MSjtBQWxMSTtFQUNFLGFBQUE7QUFvTE47QUFsTEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSw2QkFBQTtFQUVBLGdDQUFBO0FBa0xOO0FBaExJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQWtMTjs7QUFwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7QUFzQkY7QUFwQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXNCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gc2lkZS1tZW51LWNvbnRhaW5lcigkbGVmdFZhbHVlKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICBsZWZ0OiAkbGVmdFZhbHVlO1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLnNpZGUtbWVudS1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggOHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgbGk6bnRoLWNoaWxkKC1uICsgNykge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4gICAgICBwYWRkaW5nOiAyMHB4IDExMHB4IDIwcHggMjBweDtcXHJcXG5cXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDFkMjtcXHJcXG4gICAgfVxcclxcbiAgICBsaTpudGgtY2hpbGQoOCkge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAzMDAwO1xcclxcbiAgLmNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICAuaXRlbS1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNzhweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuICAudXNlci1vcHRpb25zLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5idXJnZXItbGFiZWwge1xcclxcbiAgYmxvY2stc2l6ZTogMThweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGlubGluZS1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gIGJsb2NrLXNpemU6IGNhbGMoMjBweCArIDEwcHgpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC5tYWluLXRyaWdnZXItaWNvbi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBibG9jay1zaXplOiAxOHB4O1xcclxcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcXHJcXG4gICAgLm1haW4tdHJpZ2dlci1pY29uIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgIGJsb2NrLXNpemU6IGNhbGMoMjBweCAvIDEwKTtcXHJcXG4gICAgICB0b3A6IGNhbGMoMzYlICsgMnB4KTtcXHJcXG5cXHJcXG4gICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICBibG9jay1zaXplOiBjYWxjKDIwcHggLyAxMCk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgdG9wOiAtNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBpbmxpbmUtc2l6ZTogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICBibG9jay1zaXplOiBjYWxjKDIwcHggLyAxMCk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGlubGluZS1zaXplOiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uYnVyZ2VyLWlucHV0IHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgJjpjaGVja2VkIH4gLmJ1cmdlci1sYWJlbCB7XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuXFxyXFxuICAgIC5tYWluLXRyaWdnZXItaWNvbiB7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcbiAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiA0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJjpjaGVja2VkIH4gLnNpZGUtbWVudS1jb250YWluZXIge1xcclxcbiAgICBAaW5jbHVkZSBzaWRlLW1lbnUtY29udGFpbmVyKDApO1xcclxcbiAgfVxcclxcbiAgJjpjaGVja2VkIH4gLmhlYWRlci1tYXNrIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBibG9jay1zaXplOiAxMDB2aDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGlubGluZS1zaXplOiAxMDAlO1xcclxcblxcclxcbiAgICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgLy8gY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaGlkZS1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLnNpZGUtbWVudS1jb250YWluZXIge1xcclxcbiAgQGluY2x1ZGUgc2lkZS1tZW51LWNvbnRhaW5lcigtNjAwcHgpO1xcclxcbn1cXHJcXG4uc2lkZWJhci1sb2dvLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMjQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcblxcclxcbiAgcGFkZGluZzogNjBweCAyMHB4IDIwcHggMjBweDtcXHJcXG5cXHJcXG4gIC5zaWRlYmFyLWxvZ28ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImJ1cmdlci1tb2R1bGVfX2NvbnRhaW5lci0tMVNLcGlcIixcblx0XCJjb250ZW50XCI6IFwiYnVyZ2VyLW1vZHVsZV9fY29udGVudC0tMkpVRFNcIixcblx0XCJpdGVtLWNvbnRhaW5lclwiOiBcImJ1cmdlci1tb2R1bGVfX2l0ZW0tY29udGFpbmVyLS0zVVBpZ1wiLFxuXHRcImxvZ29cIjogXCJidXJnZXItbW9kdWxlX19sb2dvLS0xZDRaZlwiLFxuXHRcImxvZ28tY29udGFpbmVyXCI6IFwiYnVyZ2VyLW1vZHVsZV9fbG9nby1jb250YWluZXItLTNERS10XCIsXG5cdFwidXNlci1vcHRpb25zLWNvbnRhaW5lclwiOiBcImJ1cmdlci1tb2R1bGVfX3VzZXItb3B0aW9ucy1jb250YWluZXItLTRSY3lPXCIsXG5cdFwiYnVyZ2VyLWxhYmVsXCI6IFwiYnVyZ2VyLW1vZHVsZV9fYnVyZ2VyLWxhYmVsLS0xeVBjMVwiLFxuXHRcIm1haW4tdHJpZ2dlci1pY29uLWNvbnRhaW5lclwiOiBcImJ1cmdlci1tb2R1bGVfX21haW4tdHJpZ2dlci1pY29uLWNvbnRhaW5lci0tMnJUeHJcIixcblx0XCJtYWluLXRyaWdnZXItaWNvblwiOiBcImJ1cmdlci1tb2R1bGVfX21haW4tdHJpZ2dlci1pY29uLS0yTEtuZFwiLFxuXHRcImJ1cmdlci1pbnB1dFwiOiBcImJ1cmdlci1tb2R1bGVfX2J1cmdlci1pbnB1dC0tMVNfRmFcIixcblx0XCJzaWRlLW1lbnUtY29udGFpbmVyXCI6IFwiYnVyZ2VyLW1vZHVsZV9fc2lkZS1tZW51LWNvbnRhaW5lci0tMmNJVXNcIixcblx0XCJzaWRlLW1lbnUtaXRlbS1jb250YWluZXJcIjogXCJidXJnZXItbW9kdWxlX19zaWRlLW1lbnUtaXRlbS1jb250YWluZXItLTNtbnY3XCIsXG5cdFwiaGVhZGVyLW1hc2tcIjogXCJidXJnZXItbW9kdWxlX19oZWFkZXItbWFzay0tTDl2SDRcIixcblx0XCJoaWRlLXNjcm9sbFwiOiBcImJ1cmdlci1tb2R1bGVfX2hpZGUtc2Nyb2xsLS0yaUllOVwiLFxuXHRcInNpZGViYXItbG9nby1jb250YWluZXJcIjogXCJidXJnZXItbW9kdWxlX19zaWRlYmFyLWxvZ28tY29udGFpbmVyLS1CNl9sd1wiLFxuXHRcInNpZGViYXItbG9nb1wiOiBcImJ1cmdlci1tb2R1bGVfX3NpZGViYXItbG9nby0tM1FKOHRcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2YmFyLW1vZHVsZV9fd3JhcHBlci0tdThfQjUge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogNDtcXG59XFxuXFxuLm5hdmJhci1tb2R1bGVfX2NvbnRhaW5lci0tMTlLYmMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JhdG9yXFxcIjtcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5uYXZiYXItbW9kdWxlX19jb250YWluZXItLTE5S2JjIC5uYXZiYXItbW9kdWxlX19sZWZ0LWNvbnRhaW5lci0tN1d4UnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogOXB4O1xcbn1cXG4ubmF2YmFyLW1vZHVsZV9fY29udGFpbmVyLS0xOUtiYyAubmF2YmFyLW1vZHVsZV9fbG9nby1jb250YWluZXItLTEzZk9YIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm5hdmJhci1tb2R1bGVfX2NvbnRhaW5lci0tMTlLYmMgLm5hdmJhci1tb2R1bGVfX2xvZ28tY29udGFpbmVyLS0xM2ZPWCAubmF2YmFyLW1vZHVsZV9fbG9nby0tM214Q18ge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhci1tb2R1bGVfX21lbnUtbGFiZWwtLTNJMU0xIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbmF2YmFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQURKO0FBR0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQURKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQU47O0FBSUE7RUFDRSxlQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogNDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmF0b3JcXFwiO1xcclxcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcblxcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG5cXHJcXG4gIC5sZWZ0LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBnYXA6IDlweDtcXHJcXG4gIH1cXHJcXG4gIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAubG9nbyB7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5tZW51LWxhYmVsIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIm5hdmJhci1tb2R1bGVfX3dyYXBwZXItLXU4X0I1XCIsXG5cdFwiY29udGFpbmVyXCI6IFwibmF2YmFyLW1vZHVsZV9fY29udGFpbmVyLS0xOUtiY1wiLFxuXHRcImxlZnQtY29udGFpbmVyXCI6IFwibmF2YmFyLW1vZHVsZV9fbGVmdC1jb250YWluZXItLTdXeFJ1XCIsXG5cdFwibG9nby1jb250YWluZXJcIjogXCJuYXZiYXItbW9kdWxlX19sb2dvLWNvbnRhaW5lci0tMTNmT1hcIixcblx0XCJsb2dvXCI6IFwibmF2YmFyLW1vZHVsZV9fbG9nby0tM214Q19cIixcblx0XCJtZW51LWxhYmVsXCI6IFwibmF2YmFyLW1vZHVsZV9fbWVudS1sYWJlbC0tM0kxTTFcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmlnaHRDb250YWluZXItbW9kdWxlX19jb250YWluZXItLVhFZUllIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJhMmI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fZGlzY292ZXItY29udGFpbmVyLS1RSjZZeiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYTJiO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMCAyNTBweDtcXG59XFxuLnJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fZGlzY292ZXItY29udGFpbmVyLS1RSjZZeiAucmlnaHRDb250YWluZXItbW9kdWxlX19kaXNjb3Zlci1oZWFkZXItLTNfdzgyIHtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5yaWdodENvbnRhaW5lci1tb2R1bGVfX2Rpc2NvdmVyLWNvbnRhaW5lci0tUUo2WXogLnJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fZGlzY292ZXItdGV4dC0tM20zdGMge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHdvcmQtc3BhY2luZzogM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fbG9nby1jb250YWluZXItLTIxcEV2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucmlnaHRDb250YWluZXItbW9kdWxlX19sb2dvLWNvbnRhaW5lci0tMjFwRXYgLnJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fbG9nby0tMjVmRngge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmlnaHRDb250YWluZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFFSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYTJiO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5kaXNjb3Zlci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmEyYjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDAgMjUwcHg7XFxyXFxuICAuZGlzY292ZXItaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgfVxcclxcbiAgLmRpc2NvdmVyLXRleHQge1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB9XFxyXFxufVxcclxcbi5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fY29udGFpbmVyLS1YRWVJZVwiLFxuXHRcImRpc2NvdmVyLWNvbnRhaW5lclwiOiBcInJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fZGlzY292ZXItY29udGFpbmVyLS1RSjZZelwiLFxuXHRcImRpc2NvdmVyLWhlYWRlclwiOiBcInJpZ2h0Q29udGFpbmVyLW1vZHVsZV9fZGlzY292ZXItaGVhZGVyLS0zX3c4MlwiLFxuXHRcImRpc2NvdmVyLXRleHRcIjogXCJyaWdodENvbnRhaW5lci1tb2R1bGVfX2Rpc2NvdmVyLXRleHQtLTNtM3RjXCIsXG5cdFwibG9nby1jb250YWluZXJcIjogXCJyaWdodENvbnRhaW5lci1tb2R1bGVfX2xvZ28tY29udGFpbmVyLS0yMXBFdlwiLFxuXHRcImxvZ29cIjogXCJyaWdodENvbnRhaW5lci1tb2R1bGVfX2xvZ28tLTI1ZkZ4XCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNvY2lhbHMtbW9kdWxlX19jb250YWluZXItLTFZVkVYIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDM7XFxuICByaWdodDogNDBweDtcXG4gIGJvdHRvbTogMjVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE4cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc29jaWFscy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtBQURGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHJpZ2h0OiA0MHB4O1xcclxcbiAgYm90dG9tOiAyNXB4O1xcclxcblxcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMThweDtcXHJcXG5cXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzb2NpYWxzLW1vZHVsZV9fY29udGFpbmVyLS0xWVZFWFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JhdG9yXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi53cmFwcGVyLW1vZHVsZV9fc2Nyb2xsLXdyYXBwZXItLUFXVmRrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdyYXBwZXItbW9kdWxlX19tb3Zlci0tM2hJQjQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxufVxcbi53cmFwcGVyLW1vZHVsZV9fYXJyb3ctY29udGFpbmVyLS0xd0YxRCAud3JhcHBlci1tb2R1bGVfX2Fycm93LS0yaV9xQiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDMwcHg7XFxuICBsZWZ0OiA0OS4zJTtcXG4gIGFuaW1hdGlvbjogd3JhcHBlci1tb2R1bGVfX21vdmVyLS0zaElCNCAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLndyYXBwZXItbW9kdWxlX19maXhlZC1zb2NpYWxzLWNvbnRhaW5lci0tM0FxeVoge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMztcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgYm90dG9tOiAyNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMThweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ud3JhcHBlci1tb2R1bGVfX2dhbGxlcnktaW1hZ2UtY29udGFpbmVyLS0xdTgyUCB7XFxuICBiYWNrZ3JvdW5kOiAjMmMyYTJiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ud3JhcHBlci1tb2R1bGVfX2dhbGxlcnktaW1hZ2UtY29udGFpbmVyLS0xdTgyUCAud3JhcHBlci1tb2R1bGVfX2dhbGxlcnktaW1hZ2VzLS1BMjQzciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA4MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMzUwcHgpIG1pbm1heCgwLCAzNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgwLCAxODBweCkgbWlubWF4KDAsIDE4MHB4KSBtaW5tYXgoMCwgMTgwcHgpO1xcbn1cXG4ud3JhcHBlci1tb2R1bGVfX2dhbGxlcnktaW1hZ2UtY29udGFpbmVyLS0xdTgyUCAud3JhcHBlci1tb2R1bGVfX2dhbGxlcnktaW1hZ2VzLS1BMjQzciBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndyYXBwZXItbW9kdWxlX19sZWZ0LWNvbnRhaW5lci0tMkpLblEge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogNTB2dztcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXG59XFxuXFxuLndyYXBwZXItbW9kdWxlX19yaWdodC1jb250YWluZXItLVBNMkR0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93cmFwcGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFHQTtFQUNFO0lBQ0Usc0NBQUE7RUFBRjtFQUVBO0lBQ0UsMENBQUE7RUFBRjtBQUNGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSwwQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBcEJPO0FBa0JYOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUVBLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSxTQUFBO0VBRUEsd0RBQUE7RUFDQSxzRUFBQTtBQUxKO0FBTUk7RUFDRSxpQkFBQTtFQUVBLFdBQUE7QUFMTjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBTkY7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUxGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JhdG9yXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5zY3JvbGwtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuJHZhcmlhYmxlOiAxMHB4O1xcclxcbkBrZXlmcmFtZXMgbW92ZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5hcnJvdy1jb250YWluZXIge1xcclxcbiAgLmFycm93IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDMwcHg7XFxyXFxuICAgIGxlZnQ6IDQ5LjMlO1xcclxcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCA1cHggNXB4IDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogJHZhcmlhYmxlO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZml4ZWQtc29jaWFscy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHJpZ2h0OiA0MHB4O1xcclxcbiAgYm90dG9tOiAyNXB4O1xcclxcblxcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMThweDtcXHJcXG5cXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG4uZ2FsbGVyeS1pbWFnZS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzJjMmEyYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIC5nYWxsZXJ5LWltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgZ2FwOiA4MHB4O1xcclxcblxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAzNTBweCkgbWlubWF4KDAsIDM1MHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMCwgMTgwcHgpIG1pbm1heCgwLCAxODBweCkgbWlubWF4KDAsIDE4MHB4KTtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4ubGVmdC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuLnJpZ2h0LWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2Nyb2xsLXdyYXBwZXJcIjogXCJ3cmFwcGVyLW1vZHVsZV9fc2Nyb2xsLXdyYXBwZXItLUFXVmRrXCIsXG5cdFwiYXJyb3ctY29udGFpbmVyXCI6IFwid3JhcHBlci1tb2R1bGVfX2Fycm93LWNvbnRhaW5lci0tMXdGMURcIixcblx0XCJhcnJvd1wiOiBcIndyYXBwZXItbW9kdWxlX19hcnJvdy0tMmlfcUJcIixcblx0XCJtb3ZlclwiOiBcIndyYXBwZXItbW9kdWxlX19tb3Zlci0tM2hJQjRcIixcblx0XCJmaXhlZC1zb2NpYWxzLWNvbnRhaW5lclwiOiBcIndyYXBwZXItbW9kdWxlX19maXhlZC1zb2NpYWxzLWNvbnRhaW5lci0tM0FxeVpcIixcblx0XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiOiBcIndyYXBwZXItbW9kdWxlX19nYWxsZXJ5LWltYWdlLWNvbnRhaW5lci0tMXU4MlBcIixcblx0XCJnYWxsZXJ5LWltYWdlc1wiOiBcIndyYXBwZXItbW9kdWxlX19nYWxsZXJ5LWltYWdlcy0tQTI0M3JcIixcblx0XCJsZWZ0LWNvbnRhaW5lclwiOiBcIndyYXBwZXItbW9kdWxlX19sZWZ0LWNvbnRhaW5lci0tMkpLblFcIixcblx0XCJyaWdodC1jb250YWluZXJcIjogXCJ3cmFwcGVyLW1vZHVsZV9fcmlnaHQtY29udGFpbmVyLS1QTTJEdFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FsbGVyeS5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xlZnRDb250YWluZXIubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlcy5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnVyZ2VyLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmlnaHRDb250YWluZXIubW9kdWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zb2NpYWxzLm1vZHVsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd3JhcHBlci5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5MYXp5TG9hZD1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCgpe3JldHVybih0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBlPWFyZ3VtZW50c1tuXTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmKHRbaV09ZVtpXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyxlPW4mJiEoXCJvbnNjcm9sbFwiaW4gd2luZG93KXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmLyhnbGV8aW5nfHJvKWJvdHxjcmF3bHxzcGlkZXIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGk9biYmXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiaW4gd2luZG93LG89biYmXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLHI9biYmd2luZG93LmRldmljZVBpeGVsUmF0aW8+MSxhPXtlbGVtZW50c19zZWxlY3RvcjpcIi5sYXp5XCIsY29udGFpbmVyOmV8fG4/ZG9jdW1lbnQ6bnVsbCx0aHJlc2hvbGQ6MzAwLHRocmVzaG9sZHM6bnVsbCxkYXRhX3NyYzpcInNyY1wiLGRhdGFfc3Jjc2V0Olwic3Jjc2V0XCIsZGF0YV9zaXplczpcInNpemVzXCIsZGF0YV9iZzpcImJnXCIsZGF0YV9iZ19oaWRwaTpcImJnLWhpZHBpXCIsZGF0YV9iZ19tdWx0aTpcImJnLW11bHRpXCIsZGF0YV9iZ19tdWx0aV9oaWRwaTpcImJnLW11bHRpLWhpZHBpXCIsZGF0YV9wb3N0ZXI6XCJwb3N0ZXJcIixjbGFzc19hcHBsaWVkOlwiYXBwbGllZFwiLGNsYXNzX2xvYWRpbmc6XCJsb2FkaW5nXCIsY2xhc3NfbG9hZGVkOlwibG9hZGVkXCIsY2xhc3NfZXJyb3I6XCJlcnJvclwiLGNsYXNzX2VudGVyZWQ6XCJlbnRlcmVkXCIsY2xhc3NfZXhpdGVkOlwiZXhpdGVkXCIsdW5vYnNlcnZlX2NvbXBsZXRlZDohMCx1bm9ic2VydmVfZW50ZXJlZDohMSxjYW5jZWxfb25fZXhpdDohMCxjYWxsYmFja19lbnRlcjpudWxsLGNhbGxiYWNrX2V4aXQ6bnVsbCxjYWxsYmFja19hcHBsaWVkOm51bGwsY2FsbGJhY2tfbG9hZGluZzpudWxsLGNhbGxiYWNrX2xvYWRlZDpudWxsLGNhbGxiYWNrX2Vycm9yOm51bGwsY2FsbGJhY2tfZmluaXNoOm51bGwsY2FsbGJhY2tfY2FuY2VsOm51bGwsdXNlX25hdGl2ZTohMX0sYz1mdW5jdGlvbihuKXtyZXR1cm4gdCh7fSxhLG4pfSxzPWZ1bmN0aW9uKHQsbil7dmFyIGUsaT1cIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLG89bmV3IHQobik7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDp7aW5zdGFuY2U6b319KX1jYXRjaCh0KXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoaSwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSxsPVwibG9hZGluZ1wiLHU9XCJsb2FkZWRcIixkPVwiYXBwbGllZFwiLGY9XCJlcnJvclwiLF89XCJuYXRpdmVcIixnPVwiZGF0YS1cIix2PVwibGwtc3RhdHVzXCIsYj1mdW5jdGlvbih0LG4pe3JldHVybiB0LmdldEF0dHJpYnV0ZShnK24pfSxwPWZ1bmN0aW9uKHQpe3JldHVybiBiKHQsdil9LGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24odCxuLGUpe3ZhciBpPVwiZGF0YS1sbC1zdGF0dXNcIjtudWxsIT09ZT90LnNldEF0dHJpYnV0ZShpLGUpOnQucmVtb3ZlQXR0cmlidXRlKGkpfSh0LDAsbil9LG09ZnVuY3Rpb24odCl7cmV0dXJuIGgodCxudWxsKX0sRT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09PXAodCl9LHk9ZnVuY3Rpb24odCl7cmV0dXJuIHAodCk9PT1ffSxJPVtsLHUsZCxmXSxBPWZ1bmN0aW9uKHQsbixlLGkpe3QmJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/dChuKTp0KG4sZSk6dChuLGUsaSkpfSxMPWZ1bmN0aW9uKHQsbil7bz90LmNsYXNzTGlzdC5hZGQobik6dC5jbGFzc05hbWUrPSh0LmNsYXNzTmFtZT9cIiBcIjpcIlwiKStufSx3PWZ1bmN0aW9uKHQsbil7bz90LmNsYXNzTGlzdC5yZW1vdmUobik6dC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiK24rXCIoXFxcXHMrfCQpXCIpLFwiIFwiKS5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFxzKyQvLFwiXCIpfSxrPWZ1bmN0aW9uKHQpe3JldHVybiB0LmxsVGVtcEltYWdlfSxPPWZ1bmN0aW9uKHQsbil7aWYobil7dmFyIGU9bi5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUodCl9fSx4PWZ1bmN0aW9uKHQsbil7dCYmKHQubG9hZGluZ0NvdW50Kz1uKX0sej1mdW5jdGlvbih0LG4pe3QmJih0LnRvTG9hZENvdW50PW4pfSxDPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPVtdLGk9MDtuPXQuY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09bi50YWdOYW1lJiZlLnB1c2gobik7cmV0dXJuIGV9LE49ZnVuY3Rpb24odCxuLGUpe2UmJnQuc2V0QXR0cmlidXRlKG4sZSl9LE09ZnVuY3Rpb24odCxuKXt0LnJlbW92ZUF0dHJpYnV0ZShuKX0sUj1mdW5jdGlvbih0KXtyZXR1cm4hIXQubGxPcmlnaW5hbEF0dHJzfSxUPWZ1bmN0aW9uKHQpe2lmKCFSKHQpKXt2YXIgbj17fTtuLnNyYz10LmdldEF0dHJpYnV0ZShcInNyY1wiKSxuLnNyY3NldD10LmdldEF0dHJpYnV0ZShcInNyY3NldFwiKSxuLnNpemVzPXQuZ2V0QXR0cmlidXRlKFwic2l6ZXNcIiksdC5sbE9yaWdpbmFsQXR0cnM9bn19LEc9ZnVuY3Rpb24odCl7aWYoUih0KSl7dmFyIG49dC5sbE9yaWdpbmFsQXR0cnM7Tih0LFwic3JjXCIsbi5zcmMpLE4odCxcInNyY3NldFwiLG4uc3Jjc2V0KSxOKHQsXCJzaXplc1wiLG4uc2l6ZXMpfX0sRD1mdW5jdGlvbih0LG4pe04odCxcInNpemVzXCIsYih0LG4uZGF0YV9zaXplcykpLE4odCxcInNyY3NldFwiLGIodCxuLmRhdGFfc3Jjc2V0KSksTih0LFwic3JjXCIsYih0LG4uZGF0YV9zcmMpKX0sVj1mdW5jdGlvbih0KXtNKHQsXCJzcmNcIiksTSh0LFwic3Jjc2V0XCIpLE0odCxcInNpemVzXCIpfSxqPWZ1bmN0aW9uKHQsbil7dmFyIGU9dC5wYXJlbnROb2RlO2UmJlwiUElDVFVSRVwiPT09ZS50YWdOYW1lJiZDKGUpLmZvckVhY2gobil9LEY9e0lNRzpmdW5jdGlvbih0LG4pe2oodCwoZnVuY3Rpb24odCl7VCh0KSxEKHQsbil9KSksVCh0KSxEKHQsbil9LElGUkFNRTpmdW5jdGlvbih0LG4pe04odCxcInNyY1wiLGIodCxuLmRhdGFfc3JjKSl9LFZJREVPOmZ1bmN0aW9uKHQsbil7IWZ1bmN0aW9uKHQsZSl7Qyh0KS5mb3JFYWNoKChmdW5jdGlvbih0KXtOKHQsXCJzcmNcIixiKHQsbi5kYXRhX3NyYykpfSkpfSh0KSxOKHQsXCJwb3N0ZXJcIixiKHQsbi5kYXRhX3Bvc3RlcikpLE4odCxcInNyY1wiLGIodCxuLmRhdGFfc3JjKSksdC5sb2FkKCl9fSxQPWZ1bmN0aW9uKHQsbil7dmFyIGU9Rlt0LnRhZ05hbWVdO2UmJmUodCxuKX0sUz1mdW5jdGlvbih0LG4sZSl7eChlLDEpLEwodCxuLmNsYXNzX2xvYWRpbmcpLGgodCxsKSxBKG4uY2FsbGJhY2tfbG9hZGluZyx0LGUpfSxVPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiXSwkPWZ1bmN0aW9uKHQsbil7IW58fGZ1bmN0aW9uKHQpe3JldHVybiB0LmxvYWRpbmdDb3VudD4wfShuKXx8ZnVuY3Rpb24odCl7cmV0dXJuIHQudG9Mb2FkQ291bnQ+MH0obil8fEEodC5jYWxsYmFja19maW5pc2gsbil9LHE9ZnVuY3Rpb24odCxuLGUpe3QuYWRkRXZlbnRMaXN0ZW5lcihuLGUpLHQubGxFdkxpc25yc1tuXT1lfSxIPWZ1bmN0aW9uKHQsbixlKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIobixlKX0sQj1mdW5jdGlvbih0KXtyZXR1cm4hIXQubGxFdkxpc25yc30sSj1mdW5jdGlvbih0KXtpZihCKHQpKXt2YXIgbj10LmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIG4pe3ZhciBpPW5bZV07SCh0LGUsaSl9ZGVsZXRlIHQubGxFdkxpc25yc319LEs9ZnVuY3Rpb24odCxuLGUpeyFmdW5jdGlvbih0KXtkZWxldGUgdC5sbFRlbXBJbWFnZX0odCkseChlLC0xKSxmdW5jdGlvbih0KXt0JiYodC50b0xvYWRDb3VudC09MSl9KGUpLHcodCxuLmNsYXNzX2xvYWRpbmcpLG4udW5vYnNlcnZlX2NvbXBsZXRlZCYmTyh0LGUpfSxRPWZ1bmN0aW9uKHQsbixlKXt2YXIgaT1rKHQpfHx0O0IoaSl8fGZ1bmN0aW9uKHQsbixlKXtCKHQpfHwodC5sbEV2TGlzbnJzPXt9KTt2YXIgaT1cIlZJREVPXCI9PT10LnRhZ05hbWU/XCJsb2FkZWRkYXRhXCI6XCJsb2FkXCI7cSh0LGksbikscSh0LFwiZXJyb3JcIixlKX0oaSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBvPXkobik7SyhuLGUsaSksTChuLGUuY2xhc3NfbG9hZGVkKSxoKG4sdSksQShlLmNhbGxiYWNrX2xvYWRlZCxuLGkpLG98fCQoZSxpKX0oMCx0LG4sZSksSihpKX0pLChmdW5jdGlvbihvKXshZnVuY3Rpb24odCxuLGUsaSl7dmFyIG89eShuKTtLKG4sZSxpKSxMKG4sZS5jbGFzc19lcnJvciksaChuLGYpLEEoZS5jYWxsYmFja19lcnJvcixuLGkpLG98fCQoZSxpKX0oMCx0LG4sZSksSihpKX0pKX0sVz1mdW5jdGlvbih0LG4sZSl7IWZ1bmN0aW9uKHQpe3QubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0odCksUSh0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPWIodCxuLmRhdGFfYmcpLG89Yih0LG4uZGF0YV9iZ19oaWRwaSksYT1yJiZvP286aTthJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KGEsJ1wiKScpLGsodCkuc2V0QXR0cmlidXRlKFwic3JjXCIsYSksUyh0LG4sZSkpfSh0LG4sZSksZnVuY3Rpb24odCxuLGUpe3ZhciBpPWIodCxuLmRhdGFfYmdfbXVsdGkpLG89Yih0LG4uZGF0YV9iZ19tdWx0aV9oaWRwaSksYT1yJiZvP286aTthJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YSxmdW5jdGlvbih0LG4sZSl7TCh0LG4uY2xhc3NfYXBwbGllZCksaCh0LGQpLG4udW5vYnNlcnZlX2NvbXBsZXRlZCYmTyh0LG4pLEEobi5jYWxsYmFja19hcHBsaWVkLHQsZSl9KHQsbixlKSl9KHQsbixlKX0sWD1mdW5jdGlvbih0LG4sZSl7IWZ1bmN0aW9uKHQpe3JldHVybiBVLmluZGV4T2YodC50YWdOYW1lKT4tMX0odCk/Vyh0LG4sZSk6ZnVuY3Rpb24odCxuLGUpe1EodCxuLGUpLFAodCxuKSxTKHQsbixlKX0odCxuLGUpfSxZPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiXSxaPWZ1bmN0aW9uKHQpe3JldHVybiB0LnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHR0PWZ1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdC5pc0ludGVyc2VjdGluZ3x8dC5pbnRlcnNlY3Rpb25SYXRpbz4wfSh0KT9mdW5jdGlvbih0LG4sZSxpKXt2YXIgbz1mdW5jdGlvbih0KXtyZXR1cm4gSS5pbmRleE9mKHAodCkpPj0wfSh0KTtoKHQsXCJlbnRlcmVkXCIpLEwodCxlLmNsYXNzX2VudGVyZWQpLHcodCxlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24odCxuLGUpe24udW5vYnNlcnZlX2VudGVyZWQmJk8odCxlKX0odCxlLGkpLEEoZS5jYWxsYmFja19lbnRlcix0LG4saSksb3x8WCh0LGUsaSl9KHQudGFyZ2V0LHQsbixlKTpmdW5jdGlvbih0LG4sZSxpKXtFKHQpfHwoTCh0LGUuY2xhc3NfZXhpdGVkKSxmdW5jdGlvbih0LG4sZSxpKXtlLmNhbmNlbF9vbl9leGl0JiZmdW5jdGlvbih0KXtyZXR1cm4gcCh0KT09PWx9KHQpJiZcIklNR1wiPT09dC50YWdOYW1lJiYoSih0KSxmdW5jdGlvbih0KXtqKHQsKGZ1bmN0aW9uKHQpe1YodCl9KSksVih0KX0odCksZnVuY3Rpb24odCl7aih0LChmdW5jdGlvbih0KXtHKHQpfSkpLEcodCl9KHQpLHcodCxlLmNsYXNzX2xvYWRpbmcpLHgoaSwtMSksbSh0KSxBKGUuY2FsbGJhY2tfY2FuY2VsLHQsbixpKSl9KHQsbixlLGkpLEEoZS5jYWxsYmFja19leGl0LHQsbixpKSl9KHQudGFyZ2V0LHQsbixlKX0pKX0sbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpfSxldD1mdW5jdGlvbih0KXtyZXR1cm4gdC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0LmVsZW1lbnRzX3NlbGVjdG9yKX0saXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBwKHQpPT09Zn0odCl9LG90PWZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBudCh0KS5maWx0ZXIoRSl9KHR8fGV0KG4pKX0scnQ9ZnVuY3Rpb24odCxlKXt2YXIgbz1jKHQpO3RoaXMuX3NldHRpbmdzPW8sdGhpcy5sb2FkaW5nQ291bnQ9MCxmdW5jdGlvbih0LG4pe2kmJiFaKHQpJiYobi5fb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChmdW5jdGlvbihlKXt0dChlLHQsbil9KSxmdW5jdGlvbih0KXtyZXR1cm57cm9vdDp0LmNvbnRhaW5lcj09PWRvY3VtZW50P251bGw6dC5jb250YWluZXIscm9vdE1hcmdpbjp0LnRocmVzaG9sZHN8fHQudGhyZXNob2xkK1wicHhcIn19KHQpKSl9KG8sdGhpcyksZnVuY3Rpb24odCxlKXtuJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLChmdW5jdGlvbigpeyFmdW5jdGlvbih0LG4pe3ZhciBlOyhlPWV0KHQpLG50KGUpLmZpbHRlcihpdCkpLmZvckVhY2goKGZ1bmN0aW9uKG4pe3cobix0LmNsYXNzX2Vycm9yKSxtKG4pfSkpLG4udXBkYXRlKCl9KHQsZSl9KSl9KG8sdGhpcyksdGhpcy51cGRhdGUoZSl9O3JldHVybiBydC5wcm90b3R5cGU9e3VwZGF0ZTpmdW5jdGlvbih0KXt2YXIgbixvLHI9dGhpcy5fc2V0dGluZ3MsYT1vdCh0LHIpO3oodGhpcyxhLmxlbmd0aCksIWUmJmk/WihyKT9mdW5jdGlvbih0LG4sZSl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXstMSE9PVkuaW5kZXhPZih0LnRhZ05hbWUpJiZmdW5jdGlvbih0LG4sZSl7dC5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsXCJsYXp5XCIpLFEodCxuLGUpLFAodCxuKSxoKHQsXyl9KHQsbixlKX0pKSx6KGUsMCl9KGEscix0aGlzKToobz1hLGZ1bmN0aW9uKHQpe3QuZGlzY29ubmVjdCgpfShuPXRoaXMuX29ic2VydmVyKSxmdW5jdGlvbih0LG4pe24uZm9yRWFjaCgoZnVuY3Rpb24obil7dC5vYnNlcnZlKG4pfSkpfShuLG8pKTp0aGlzLmxvYWRBbGwoYSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9vYnNlcnZlciYmdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLGV0KHRoaXMuX3NldHRpbmdzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtkZWxldGUgdC5sbE9yaWdpbmFsQXR0cnN9KSksZGVsZXRlIHRoaXMuX29ic2VydmVyLGRlbGV0ZSB0aGlzLl9zZXR0aW5ncyxkZWxldGUgdGhpcy5sb2FkaW5nQ291bnQsZGVsZXRlIHRoaXMudG9Mb2FkQ291bnR9LGxvYWRBbGw6ZnVuY3Rpb24odCl7dmFyIG49dGhpcyxlPXRoaXMuX3NldHRpbmdzO290KHQsZSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7Tyh0LG4pLFgodCxlLG4pfSkpfX0scnQubG9hZD1mdW5jdGlvbih0LG4pe3ZhciBlPWMobik7WCh0LGUpfSxydC5yZXNldFN0YXR1cz1mdW5jdGlvbih0KXttKHQpfSxuJiZmdW5jdGlvbih0LG4pe2lmKG4paWYobi5sZW5ndGgpZm9yKHZhciBlLGk9MDtlPW5baV07aSs9MSlzKHQsZSk7ZWxzZSBzKHQsbil9KHJ0LHdpbmRvdy5sYXp5TG9hZE9wdGlvbnMpLHJ0fSkpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9nYWxsZXJ5Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgY2FjaGUgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAoY2FjaGVba2V5XSA9IHIoa2V5KSkpO1xyXG59XHJcbi8vIE5vdGUgZnJvbSB0aGUgZG9jcyAtPiBXYXJuaW5nOiBUaGUgYXJndW1lbnRzIHBhc3NlZCB0byByZXF1aXJlLmNvbnRleHQgbXVzdCBiZSBsaXRlcmFscyFcclxuaW1wb3J0QWxsKFxyXG4gIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2VzL3Byb3BlcnlJbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLylcclxuKTtcclxuXHJcbk9iamVjdC5lbnRyaWVzKGNhY2hlKS5tYXAoKG1vZHVsZSkgPT4gbW9kdWxlWzFdLmRlZmF1bHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdhbGxlcnkgPSAocG9zKSA9PiB7XHJcbiAgaWYgKHBvcyA9PT0gXCJsXCIpIHtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gLyogSFRNTCAqLyBgXHJcbiAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImdhbGxlcnktaW1hZ2VzXCJdfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICAgIGRhdGEtc3JjPSR7Y2FjaGVbXCIuLzEuanBnXCJdfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICAgIGRhdGEtc3JjPSR7Y2FjaGVbXCIuLzIuanBnXCJdfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICAgIGRhdGEtc3JjPSR7Y2FjaGVbXCIuLzUuanBnXCJdfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICAgIGRhdGEtc3JjPSR7Y2FjaGVbXCIuLzYuanBnXCJdfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICAgIGRhdGEtc3JjPSR7Y2FjaGVbXCIuLzkuanBnXCJdfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICAgIGRhdGEtc3JjPSR7Y2FjaGVbXCIuLzEwLmpwZ1wiXX1cclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHJldHVybiBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gIH1cclxuICBlbGVtZW50LmlubmVySFRNTCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImdhbGxlcnktaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImdhbGxlcnktaW1hZ2VzXCJdfT5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZS1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgIGRhdGEtaWQ9XCJsYXp5XCJcclxuICAgICAgICAgICAgbmFtZT1cImdhbGxlcnktaW1hZ2UtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICBkYXRhLXNyYz0ke2NhY2hlW1wiLi8zLmpwZ1wiXX1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImdhbGxlcnktcHJvcGVydHktaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQ0MHg1NjA/dGV4dD1JbWcrMDFcIlxyXG4gICAgICAgICAgICBkYXRhLWlkPVwibGF6eVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIGNsYXNzPSR7c3R5bGVzW1wiZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZVwiXX1cclxuICAgICAgICAgICAgZGF0YS1zcmM9JHtjYWNoZVtcIi4vNC5qcGdcIl19XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80NDB4NTYwP3RleHQ9SW1nKzAxXCJcclxuICAgICAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZ2FsbGVyeS1pbWFnZS1jb250YWluZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz0ke3N0eWxlc1tcImdhbGxlcnktcHJvcGVydHktaW1hZ2VcIl19XHJcbiAgICAgICAgICAgIGRhdGEtc3JjPSR7Y2FjaGVbXCIuLzcuanBnXCJdfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZS1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgIGRhdGEtaWQ9XCJsYXp5XCJcclxuICAgICAgICAgICAgbmFtZT1cImdhbGxlcnktaW1hZ2UtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICBkYXRhLXNyYz0ke2NhY2hlW1wiLi85LmpwZ1wiXX1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImdhbGxlcnktcHJvcGVydHktaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQ0MHg1NjA/dGV4dD1JbWcrMDFcIlxyXG4gICAgICAgICAgICBkYXRhLWlkPVwibGF6eVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJnYWxsZXJ5LWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIGNsYXNzPSR7c3R5bGVzW1wiZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZVwiXX1cclxuICAgICAgICAgICAgZGF0YS1zcmM9JHtjYWNoZVtcIi4vMTEuanBnXCJdfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiZ2FsbGVyeS1wcm9wZXJ0eS1pbWFnZS1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNDQweDU2MD90ZXh0PUltZyswMVwiXHJcbiAgICAgICAgICAgIGRhdGEtaWQ9XCJsYXp5XCJcclxuICAgICAgICAgICAgbmFtZT1cImdhbGxlcnktaW1hZ2UtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgY2xhc3M9JHtzdHlsZXNbXCJnYWxsZXJ5LXByb3BlcnR5LWltYWdlXCJdfVxyXG4gICAgICAgICAgICBkYXRhLXNyYz0ke2NhY2hlW1wiLi8xMi5qcGdcIl19XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgcmV0dXJuIGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbn07XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi8xLmpwZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeVBhZ2UvaW1hZ2VzL3Byb3BlcnlJbWFnZXMvMS5qcGdcIixcblx0XCIuLzEwLmpwZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeVBhZ2UvaW1hZ2VzL3Byb3BlcnlJbWFnZXMvMTAuanBnXCIsXG5cdFwiLi8xMS5qcGdcIjogXCIuL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL2ltYWdlcy9wcm9wZXJ5SW1hZ2VzLzExLmpwZ1wiLFxuXHRcIi4vMTIuanBnXCI6IFwiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9pbWFnZXMvcHJvcGVyeUltYWdlcy8xMi5qcGdcIixcblx0XCIuLzIuanBnXCI6IFwiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9pbWFnZXMvcHJvcGVyeUltYWdlcy8yLmpwZ1wiLFxuXHRcIi4vMy5qcGdcIjogXCIuL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL2ltYWdlcy9wcm9wZXJ5SW1hZ2VzLzMuanBnXCIsXG5cdFwiLi80LmpwZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeVBhZ2UvaW1hZ2VzL3Byb3BlcnlJbWFnZXMvNC5qcGdcIixcblx0XCIuLzUuanBnXCI6IFwiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9pbWFnZXMvcHJvcGVyeUltYWdlcy81LmpwZ1wiLFxuXHRcIi4vNi5qcGdcIjogXCIuL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL2ltYWdlcy9wcm9wZXJ5SW1hZ2VzLzYuanBnXCIsXG5cdFwiLi83LmpwZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeVBhZ2UvaW1hZ2VzL3Byb3BlcnlJbWFnZXMvNy5qcGdcIixcblx0XCIuLzguanBnXCI6IFwiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9pbWFnZXMvcHJvcGVyeUltYWdlcy84LmpwZ1wiLFxuXHRcIi4vOS5qcGdcIjogXCIuL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL2ltYWdlcy9wcm9wZXJ5SW1hZ2VzLzkuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeVBhZ2UvaW1hZ2VzL3Byb3BlcnlJbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xlZnRDb250YWluZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGxlZnRMb2dvIGZyb20gXCIuL2ltYWdlcy9NYWxpdmlldyBMZWZ0IExvZ28ucG5nXCI7XHJcbmltcG9ydCBtYWxpYnUgZnJvbSBcIi4vaW1hZ2VzL01hbGlidS5qcGdcIjtcclxuaW1wb3J0IHsgcmVuZGVyR2FsbGVyeSB9IGZyb20gXCIuLi9nYWxsZXJ5UGFnZS9nYWxsZXJ5XCI7XHJcbmltcG9ydCBtdWxob2xsYW5kIGZyb20gXCIuL2ltYWdlcy9tdWxob2xsYW5kLmpwZ1wiO1xyXG5pbXBvcnQgcGFnZVN0eWxlIGZyb20gXCIuLi9taXNjU3R5bGVzL3BhZ2VzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBoaWRkZW5Mb2dvQnJvd24gZnJvbSBcIi4vaW1hZ2VzL2hpZGRlbkxvZ29Ccm93bi5wbmdcIjtcclxuaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xyXG5cclxuY29uc3QgbGVmdENvbnRhaW5lciA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxlZnRFbGUoaW5uZXJFbGUsIGNsYXNzTmFtZUFycikge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0IGh0bWwgPSAvKiBIVE1MICovIGAgPGRpdiBjbGFzcz1cIlwiPiR7aW5uZXJFbGV9PC9kaXY+YDtcclxuXHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gIGNsYXNzTmFtZUFyci5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuICB9KTtcclxuICBsZWZ0Q29udGFpbmVyLnB1c2goY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLm91dGVySFRNTCk7XHJcbn1cclxuY3JlYXRlTGVmdEVsZShcclxuICAvKiBIVE1MICovIGAgPHNwYW4gY2xhc3M9JHtzdHlsZXNbXCJsb2dvLWNvbnRhaW5lclwiXX0+XHJcbiAgICA8aW1nIHNyYz0ke2xlZnRMb2dvfSBhbHQ9XCJcIiAvPlxyXG4gIDwvc3Bhbj5gLFxyXG4gIFtzdHlsZXNbXCJjb250YWluZXJcIl1dXHJcbik7XHJcbmNyZWF0ZUxlZnRFbGUoXHJcbiAgLyogSFRNTCAqLyBgIDxkaXYgY2xhc3M9JHtwYWdlU3R5bGVbXCJjb250YWluZXJcIl19PlxyXG4gICAgPGRpdiBjbGFzcz0ke3BhZ2VTdHlsZVtcImltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxpbWcgY2xhc3M9JHtwYWdlU3R5bGVbXCJpbWFnZS1wYWdlXCJdfSBzcmM9JHttYWxpYnV9IGFsdD1cIlwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gLFxyXG4gIFtwYWdlU3R5bGVbXCJjb250YWluZXJcIl0sIHBhZ2VTdHlsZVtcImltYWdlLWNvbnRlbnRcIl1dXHJcbik7XHJcbmNyZWF0ZUxlZnRFbGUoXHJcbiAgLyogSFRNTCAqLyBgPGRpdiBjbGFzcz0ke3BhZ2VTdHlsZVtcImhpZGRlbi1sb2dvLWNvbnRhaW5lci1icm93blwiXX0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4tbG9nby1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBkYXRhLWlkPVwibGF6eVwiXHJcbiAgICAgICAgICBkYXRhLXNyYz0ke2hpZGRlbkxvZ29Ccm93bn1cclxuICAgICAgICAgIGNsYXNzPSR7cGFnZVN0eWxlW1wiaGlkZGVuLWxvZ28tYnJvd25cIl19XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDUgY2xhc3M9JHtwYWdlU3R5bGVbXCJjb250ZW50LWhlYWRlclwiXX0+ZGlzY292ZXI8L2g1PlxyXG4gICAgPHAgY2xhc3M9JHtwYWdlU3R5bGVbXCJjb250ZW50LXRleHRcIl19PlxyXG4gICAgICBNYWxpdmlldyBFc3RhdGVzLiBUaGlzIHVuaXF1ZSBhcmNoaXRlY3R1cmFsIGRlc2lnbiBieSBBbWl0IEFwZWwgRGVzaWduLFxyXG4gICAgICBJbmMuIHByZXNlbnRzIGEgc3R5bGUgb2YgaXRzIG93bi4gVGhlIFdvcmxkd2lkZSBhcmNoaXRlY3QgaGFzIHJlY2VpdmVkXHJcbiAgICAgIG11bHRpcGxlIGF3YXJkcyBhbmQgQW1pdCBBcGVsLCBJbmMuIHdhcyBtb3N0IHJlY2VudGx5IHJlY29nbml6ZWQgaW4gaXRzXHJcbiAgICAgIGhvbWV0b3duIGFzIG9uZSBvZiB0aGUgYmVzdCBmaXJtcyBieSBIb21lIEJ1aWxkZXIgRGlnZXN0LlxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxwIGNsYXNzPSR7cGFnZVN0eWxlW1wiY29udGVudC10ZXh0XCJdfT5cclxuICAgICAgVGhlIHZpbGxhIHdpbGwgaGF2ZSBvcGVuIHNwYWNlIHBsYW4gd2l0aCBoaWdoIGNlaWxpbmdzIHdpdGggYSB0b3VjaCBvZlxyXG4gICAgICBuYXR1cmUgY29taW5nIGluZG9vcnMuIFRoZSBob21lIGluY2x1ZGVzIDQgcGVyZmVjdGx5IHBsYWNlZCBiZWRyb29tcyB3aXRoXHJcbiAgICAgIHZpZXdzIHRvIGFkbWlyZSB0aGUgc2NlbmVyeSBhcyB3ZWxsIGFzIDQuNSBiYXRocm9vbXMuIEFsbCBvZiB0aGUgaW50ZXJpb3JcclxuICAgICAgd2lsbCBiZSBmZWF0dXJpbmcgY3VzdG9tIGludGVyaW9yIGRlc2lnbiBieSBBbWl0IEFwZWwgRGVzaWduLCBJbmMuIEZyb20gYW5cclxuICAgICAgaW5maW5pdHkgcG9vbCB5b3Ugd2lsbCBiZSBlbmpveWluZyB0aGUgb2NlYW4gaW4gdGhlIGhvcml6b24sIHRoZSB2aWV3IG9mXHJcbiAgICAgIFNhbnRhIE1vbmljYSBNb3VudGFpbnMsIGFuZCBvdmVyd2hlbG1pbmcgc3VucmlzZXMsIGFuZCBzdW5zZXRzLlxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxwIGNsYXNzPSR7cGFnZVN0eWxlW1wiY29udGVudC10ZXh0XCJdfT5cclxuICAgICAgQ3VycmVudGx5IHVuZGVyIGNvbnN0cnVjdGlvbiB3aXRoIGEgY29tcGxldGlvbiBkYXRlIGVhcmx5IGZhbGwuIFBsZWFzZVxyXG4gICAgICBub3RlIHRoYXQgYm90aCBleHRlcmlvciBhbmQgaW50ZXJpb3IgcGFpbnQgY29sb3JzIGNhbiBiZSBjaGFuZ2VkLlxyXG4gICAgPC9wPmAsXHJcbiAgW3BhZ2VTdHlsZVtcImNvbnRhaW5lclwiXSwgcGFnZVN0eWxlW1widGV4dC1jb250ZW50XCJdLCBwYWdlU3R5bGVbXCJicm93bi1iZ1wiXV1cclxuKTtcclxuY3JlYXRlTGVmdEVsZShcclxuICAvKiBIVE1MICovIGAgPGRpdiBjbGFzcz0ke3BhZ2VTdHlsZVtcImNvbnRhaW5lclwiXX0+XHJcbiAgICA8ZGl2IGNsYXNzPSR7cGFnZVN0eWxlW1wiaW1hZ2UtY29udGFpbmVyXCJdfT5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzPSR7cGFnZVN0eWxlW1wiaW1hZ2UtcGFnZVwiXX1cclxuICAgICAgICBkYXRhLWlkPVwibGF6eVwiXHJcbiAgICAgICAgZGF0YS1zcmM9JHttdWxob2xsYW5kfVxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gLFxyXG4gIFtwYWdlU3R5bGVbXCJjb250YWluZXJcIl0sIHBhZ2VTdHlsZVtcImltYWdlLWNvbnRlbnRcIl1dXHJcbik7XHJcbmNyZWF0ZUxlZnRFbGUoXHJcbiAgLyogSFRNTCAqLyBgPGRpdiBjbGFzcz0ke3BhZ2VTdHlsZVtcImhpZGRlbi1sb2dvLWNvbnRhaW5lci1icm93blwiXX0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4tbG9nby1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9JHtoaWRkZW5Mb2dvQnJvd259XHJcbiAgICAgICAgICBjbGFzcz0ke3BhZ2VTdHlsZVtcImhpZGRlbi1sb2dvLWJyb3duXCJdfVxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGg1IGNsYXNzPSR7cGFnZVN0eWxlW1wiY29udGVudC1oZWFkZXJcIl19PnZpZGVvIHJlbmRlcjwvaDU+XHJcbiAgICA8cCBjbGFzcz0ke3BhZ2VTdHlsZVtcImNvbnRlbnQtdGV4dFwiXX0+XHJcbiAgICAgIFRha2UgYSBkaXZlIGludG8gTWFsaXZpZXcgd2l0aCBvdXIgM0QgcmVuZGVyaW5nLiBUbyBnZXQgYSBmZWVsaW5nIG9mIHRoZVxyXG4gICAgICBjb21wbGV0ZWQgcHJvamVjdCBhbmQgdmlzaW9uLCBwbGVhc2UgY2xpY2sgb24gdGhlIHZpZGVvIHRvIHRoZSByaWdodC5cclxuICAgIDwvcD4gYCxcclxuICBbcGFnZVN0eWxlW1wiY29udGFpbmVyXCJdLCBwYWdlU3R5bGVbXCJ0ZXh0LWNvbnRlbnRcIl0sIHBhZ2VTdHlsZVtcImJyb3duLWJnXCJdXVxyXG4pO1xyXG5jb25zdCBnYWxsZXJ5ID0gcmVuZGVyR2FsbGVyeShcImxcIik7XHJcbmNyZWF0ZUxlZnRFbGUoLyogSFRNTCAqLyBgJHtnYWxsZXJ5Lm91dGVySFRNTH1gLCBbc3R5bGVzW1wiY29udGFpbmVyXCJdXSk7XHJcbmV4cG9ydCB7IGxlZnRDb250YWluZXIgfTtcclxuIiwiaW1wb3J0IHsgcmVuZGVyTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9uYXZiYXIvYnVyZ2VyLm1vZHVsZS5zY3NzXCI7XHJcbmNvbnN0IHZpZGVvVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW8tbW9kYWwtdHJpZ2dlclwiKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgXHJcbiAgaWYgKGUudGFyZ2V0ID09PSB2aWRlb1RyaWdnZXIgfHwgZS50YXJnZXQubmFtZSA9PT0gXCJwbGF5LWJ1dHRvblwiKSB7XHJcbiAgICBcclxuICAgIHJlbmRlck1vZGFsKCk7XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ3cmFwcGVyLXRyaWdnZXJcIikge1xyXG4gICAgXHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5uYW1lID09PSBcImdhbGxlcnktaW1hZ2UtY29udGFpbmVyXCIpIHtcclxuICAgIHJlbmRlck1vZGFsKFwiZ2FsbGVyeVwiLCBlLnRhcmdldC5zcmMpO1xyXG4gIH1cclxuICBsZXQgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0LiR7c3R5bGVzW1wiYnVyZ2VyLWlucHV0XCJdfWApO1xyXG4gIFxyXG4gIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpID09PSBcImhlYWRlci1tYXNrXCIpIHtcclxuICAgIFxyXG4gICAgdGFyZ2V0RWxlbWVudC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tb2RhbC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTW9kYWwgPSAodHlwZSwgaW1hZ2UpID0+IHtcclxuICBjb25zdCBtYWluRWxlID1cclxuICAgIHR5cGUgPT09IFwiZ2FsbGVyeVwiXHJcbiAgICAgID8gYFxyXG4gICAgICA8aW1nIGNsYXNzPSR7c3R5bGVzW1wibWFpbi1jb250ZW50XCJdfSBzcmM9JHtpbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgIGBcclxuICAgICAgOiBgPGlmcmFtZVxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNjExXCJcclxuICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9uVFMxMFpRTTVNcz9lbmFibGVqc2FwaT0xJnZlcnNpb249MyZwbGF5ZXJhcGlpZD15dHBsYXllclwiXHJcbiAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXHJcbiAgICAgICAgaWQ9XCJtYWluLXZpZGVvLXBsYXllclwiXHJcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuXHJcbiAgICAgID48L2lmcmFtZT5gO1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gLyogSFRNTCAqLyBgXHJcbiAgICA8ZGl2IGlkPVwid3JhcHBlci10cmlnZ2VyXCIgY2xhc3M9JHtzdHlsZXNbXCJ3cmFwcGVyXCJdfT5cclxuICAgICAgPGRpdiBpZD1cIm1vZGFsLWJhY2tkcm9wXCIgY2xhc3M9JHtzdHlsZXNbXCJtb2RhbC1jb250YWluZXJcIl19PlxyXG4gICAgICAgICR7bWFpbkVsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gIGNvbnN0IGVsZVRvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwcGVyLXRyaWdnZXJcIik7XHJcbiAgXHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVUb1JlbW92ZSk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9idXJnZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1hZ2VzL2xvZ28tYmxhY2sucG5nXCI7XHJcbmV4cG9ydCBjb25zdCBodG1sID0gLyogSFRNTCAqLyBgIDxpbnB1dFxyXG4gICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgIGlkPVwiYnVyZ2VyLXRyaWdnZXJcIlxyXG4gICAgY2xhc3M9JHtzdHlsZXNbXCJidXJnZXItaW5wdXRcIl19XHJcbiAgLz5cclxuICA8bGFiZWwgZm9yPVwiYnVyZ2VyLXRyaWdnZXJcIiBjbGFzcz0ke3N0eWxlc1tcImJ1cmdlci1sYWJlbFwiXX0+XHJcbiAgICA8c3BhbiBjbGFzcz0ke3N0eWxlc1tcIm1haW4tdHJpZ2dlci1pY29uLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxpIGNsYXNzPSR7c3R5bGVzW1wibWFpbi10cmlnZ2VyLWljb25cIl19PjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG4gIDxsYWJlbCBjbGFzcz0ke3N0eWxlc1tcIm5hdi1tZW51LWxhYmVsXCJdfSBmb3I9XCJidXJnZXItdHJpZ2dlclwiXHJcbiAgICA+PHNwYW4+bWVudTwvc3Bhbj48L2xhYmVsXHJcbiAgPlxyXG4gIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJzaWRlLW1lbnUtY29udGFpbmVyXCJdfT5cclxuICAgIDx1bCBjbGFzcz0ke3N0eWxlc1tcInNpZGUtbWVudS1pdGVtLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxsaT5ob21lPC9saT5cclxuICAgICAgPGxpPm1hbGlidSBsaWZlPC9saT5cclxuICAgICAgPGxpPmRpc2NvdmVyPC9saT5cclxuICAgICAgPGxpPmVxdWVzdHJpYW48L2xpPlxyXG4gICAgICA8bGk+dmlkZW88L2xpPlxyXG4gICAgICA8bGk+cGljdHVyZXM8L2xpPlxyXG4gICAgICA8bGk+Y29udGFjdDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wic2lkZWJhci1sb2dvLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPSR7c3R5bGVzW1wic2lkZWJhci1sb2dvXCJdfSBzcmM9JHtsb2dvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGRhdGEtaWQ9XCJoZWFkZXItbWFza1wiIGNsYXNzPSR7c3R5bGVzW1wiaGVhZGVyLW1hc2tcIl19PjwvZGl2PmA7XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2YmFyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiLi9idXJnZXJNZW51XCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLXdoaXRlLnBuZ1wiO1xyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJOYXYgPSAoZnJhZ21lbnQpID0+IHtcclxuICBcclxuICBlbGVtZW50LmlubmVySFRNTCA9IC8qIEhUTUwgKi8gYFxyXG4gICAgPG5hdiBjbGFzcz0ke3N0eWxlc1tcIndyYXBwZXJcIl19PlxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wibGVmdC1jb250YWluZXJcIl19PiR7aHRtbH08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz0ke3N0eWxlc1tcImxvZ28tY29udGFpbmVyXCJdfT5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9JHtzdHlsZXNbXCJsb2dvXCJdfSBzcmM9JHtsb2dvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gIGA7XHJcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbn07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcmlnaHRDb250YWluZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHBhZ2VTdHlsZSBmcm9tIFwiLi4vbWlzY1N0eWxlcy9wYWdlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgcmlnaHRMb2dvIGZyb20gXCIuL2ltYWdlcy9NYWxpdmlldyBSaWdodCBMb2dvLnBuZ1wiO1xyXG5pbXBvcnQgaGlkZGVuTG9nb0dyZXkgZnJvbSBcIi4vaW1hZ2VzL2hpZGRlbkxvZ29HcmV5LnBuZ1wiO1xyXG5pbXBvcnQgbWFsaXZpZXcgZnJvbSBcIi4vaW1hZ2VzL21hbGl2aWV3LmpwZ1wiO1xyXG5pbXBvcnQgbXVsbGhvbGxhbmQgZnJvbSBcIi4vaW1hZ2VzLzMzMzQwIE11bGhvbGxhbmQgSU1HIDFBLmpwZ1wiO1xyXG5pbXBvcnQgcGxheUJ1dHRvbiBmcm9tIFwiLi9pbWFnZXMvcGxheUJ1dHRvbi5wbmdcIjtcclxuaW1wb3J0IGhpZGRlbkxvZ29Ccm93biBmcm9tIFwiLi9pbWFnZXMvaGlkZGVuTG9nb0Jyb3duLnBuZ1wiO1xyXG5pbXBvcnQgeyByZW5kZXJHYWxsZXJ5IH0gZnJvbSBcIi4uL2dhbGxlcnlQYWdlL2dhbGxlcnlcIjtcclxuXHJcbmNvbnN0IHJpZ2h0Q29udGFpbmVyID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmlnaHRFbGUoaW5uZXJFbGUsIGNsYXNzTmFtZUFycikge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0IGh0bWwgPSAvKiBIVE1MICovIGAgPGRpdiBjbGFzcz1cIlwiPiR7aW5uZXJFbGV9PC9kaXY+YDtcclxuXHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gIGNsYXNzTmFtZUFyci5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuICB9KTtcclxuXHJcbiAgcmlnaHRDb250YWluZXIucHVzaChjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQub3V0ZXJIVE1MKTtcclxufVxyXG5jb25zdCBnYWxsZXJ5ID0gcmVuZGVyR2FsbGVyeShcInJcIik7XHJcbmNyZWF0ZVJpZ2h0RWxlKC8qIEhUTUwgKi8gYCR7Z2FsbGVyeS5vdXRlckhUTUx9YCwgW3N0eWxlc1tcImNvbnRhaW5lclwiXV0pO1xyXG5cclxuY3JlYXRlUmlnaHRFbGUoXHJcbiAgLyogSFRNTCAqLyBgIDxkaXYgY2xhc3M9JHtwYWdlU3R5bGVbXCJjb250YWluZXJcIl19PlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cIiR7cGFnZVN0eWxlW1wiaW1hZ2UtY29udGFpbmVyXCJdICtcclxuICAgICAgXCIgXCIgK1xyXG4gICAgICBgJHtwYWdlU3R5bGVbXCJleHBhbmQtaG92ZXJcIl19YCArXHJcbiAgICAgIFwiIFwiICtcclxuICAgICAgYCR7cGFnZVN0eWxlW1wiYmx1clwiXX1gfVwiXHJcbiAgICA+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBuYW1lPVwicGxheS1idXR0b25cIlxyXG4gICAgICAgIGNsYXNzPSR7cGFnZVN0eWxlW1wicGxheS1idXR0b25cIl19XHJcbiAgICAgICAgc3JjPSR7cGxheUJ1dHRvbn1cclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgaWQ9XCJ2aWRlby1tb2RhbC10cmlnZ2VyXCJcclxuICAgICAgICBjbGFzcz0ke3BhZ2VTdHlsZVtcImltYWdlLXBhZ2VcIl19XHJcbiAgICAgICAgZGF0YS1zcmM9JHttdWxsaG9sbGFuZH1cclxuICAgICAgICBkYXRhLWlkPVwibGF6eVwiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmAsXHJcbiAgW3BhZ2VTdHlsZVtcImNvbnRhaW5lclwiXSwgcGFnZVN0eWxlW1wiaW1hZ2UtY29udGVudFwiXV1cclxuKTtcclxuY3JlYXRlUmlnaHRFbGUoXHJcbiAgLyogSFRNTCAqLyBgIDxkaXYgY2xhc3M9JHtwYWdlU3R5bGVbXCJoaWRkZW4tbG9nby1jb250YWluZXItZ3JleVwiXX0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9JHtoaWRkZW5Mb2dvR3JleX1cclxuICAgICAgICBjbGFzcz0ke3BhZ2VTdHlsZVtcImhpZGRlbi1sb2dvLWdyZXlcIl19XHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGg1IGNsYXNzPSR7cGFnZVN0eWxlW1wiY29udGVudC1oZWFkZXJcIl19PmVxdWVzdHJpYW48L2g1PlxyXG4gICAgPHAgY2xhc3M9JHtwYWdlU3R5bGVbXCJjb250ZW50LXRleHRcIl19PlxyXG4gICAgICBUaGlzIGVxdWVzdHJpYW4gcHJvcGVydHkgd2lsbCBwcmVzZW50IGEgYmFybiB3aXRoIHN0YWxscyBvbiBhIGxvd2VyXHJcbiAgICAgIHBvcnRpb24gb2YgYSBmb3VyLWFjcmUgc3BhY2Ugd2l0aCBpdHMgb3duIHNlcGFyYXRlIGRyaXZld2F5IGFuZCBwbGVudHkgb2ZcclxuICAgICAgcm9vbSBmb3IgdGhlIGhvcnNlcywgb3RoZXIgZXF1ZXN0cmlhbnMsIG9yIHlvdXIgdHJhaWxlci4gWW91IHdpbGwgaGF2ZVxyXG4gICAgICBhY2Nlc3MgdG8gdHJhaWxzIGRpcmVjdGx5IGZyb20gdGhlIHByb3BlcnR5IGFuZCBhIGNyZWVrIG9mIHlvdXIgb3duLiBZb3VcclxuICAgICAgY2FuIGNhbGwgdGhpcyBwYXJhZGlzZSB5b3VyIGhvbWUhXHJcbiAgICA8L3A+XHJcblxyXG4gICAgPHAgY2xhc3M9JHtwYWdlU3R5bGVbXCJjb250ZW50LXRleHRcIl19PihNb3JlIEVxdWVzdHJpYW4gSW5mbyBIZXJlKTwvcD5cclxuXHJcbiAgICA8cCBjbGFzcz0ke3BhZ2VTdHlsZVtcImNvbnRlbnQtdGV4dFwiXX0+XHJcbiAgICAgIEFzIG11Y2ggYXMgaXQgZmVlbHMgcmVtb3RlLCB5b3Ugd2lsbCBiZSBvbmx5IDE1IG1pbnV0ZXMgYXdheSBmcm9tIFBDSCBhbmRcclxuICAgICAgbGVzcyB0aGFuIDIwIG1pbnV0ZXMgYXdheSBmcm9tIFdlc3RsYWtlIFZpbGxhZ2UuIEdyZWF0IHNjaG9vbCBkaXN0cmljdFxyXG4gICAgICB3aXRoIHBsZW50eSBvZiBhY3Rpdml0aWVzLiBDb21lIGJ5IHRvIHNlZSB0aGlzIGJlYXV0aWZ1bGx5IHBsYW5uZWQgaG9tZSBpblxyXG4gICAgICB0aGUgbWFraW5nIGZvciB5b3Vyc2VsZi5cclxuICAgIDwvcD5gLFxyXG4gIFtwYWdlU3R5bGVbXCJjb250YWluZXJcIl0sIHBhZ2VTdHlsZVtcInRleHQtY29udGVudFwiXV1cclxuKTtcclxuY3JlYXRlUmlnaHRFbGUoXHJcbiAgLyogSFRNTCAqLyBgIDxkaXYgY2xhc3M9JHtwYWdlU3R5bGVbXCJjb250YWluZXJcIl19PlxyXG4gICAgPGRpdiBjbGFzcz0ke3BhZ2VTdHlsZVtcImltYWdlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz0ke3BhZ2VTdHlsZVtcImltYWdlLXBhZ2VcIl19XHJcbiAgICAgICAgZGF0YS1pZD1cImxhenlcIlxyXG4gICAgICAgIGRhdGEtc3JjPSR7bWFsaXZpZXd9XHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmAsXHJcbiAgW3BhZ2VTdHlsZVtcImNvbnRhaW5lclwiXSwgcGFnZVN0eWxlW1wiaW1hZ2UtY29udGVudFwiXV1cclxuKTtcclxuY3JlYXRlUmlnaHRFbGUoXHJcbiAgLyogSFRNTCAqLyBgIDxkaXYgY2xhc3M9JHtwYWdlU3R5bGVbXCJoaWRkZW4tbG9nby1jb250YWluZXItZ3JleVwiXX0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9JHtoaWRkZW5Mb2dvR3JleX1cclxuICAgICAgICBjbGFzcz0ke3BhZ2VTdHlsZVtcImhpZGRlbi1sb2dvLWdyZXlcIl19XHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGg1IGNsYXNzPSR7cGFnZVN0eWxlW1wiY29udGVudC1oZWFkZXJcIl19Pm1hbGlidTwvaDU+XHJcbiAgICA8cCBjbGFzcz0ke3BhZ2VTdHlsZVtcImNvbnRlbnQtdGV4dFwiXX0+XHJcbiAgICAgIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50LCBzdW50LFxyXG4gICAgICBhc3N1bWVuZGEgZXhwZWRpdGEgZWFxdWUgc2FlcGUgZGlzdGluY3RpbyBjb25zZXF1dW50dXIgcXVhbSB2ZWwgb2RpdFxyXG4gICAgICBmdWdpYXQsIHV0IGRvbG9yZW1xdWUgbmVtbyB2b2x1cHRhdGUgbnVtcXVhbSBjdW0gbm9iaXMgZmFjZXJlIHZvbHVwdGF0aWJ1c1xyXG4gICAgICBhZCFcclxuICAgIDwvcD5cclxuXHJcbiAgICA8cCBjbGFzcz0ke3BhZ2VTdHlsZVtcImNvbnRlbnQtdGV4dFwiXX0+KE1vcmUgRXF1ZXN0cmlhbiBJbmZvIEhlcmUpPC9wPlxyXG5cclxuICAgIDxwIGNsYXNzPSR7cGFnZVN0eWxlW1wiY29udGVudC10ZXh0XCJdfT5cclxuICAgICAgQXMgbXVjaCBhcyBpdCBmZWVscyByZW1vdGUsIHlvdSB3aWxsIGJlIG9ubHkgMTUgbWludXRlcyBhd2F5IGZyb20gUENIIGFuZFxyXG4gICAgICBsZXNzIHRoYW4gMjAgbWludXRlcyBhd2F5IGZyb20gV2VzdGxha2UgVmlsbGFnZS4gR3JlYXQgc2Nob29sIGRpc3RyaWN0XHJcbiAgICAgIHdpdGggcGxlbnR5IG9mIGFjdGl2aXRpZXMuIENvbWUgYnkgdG8gc2VlIHRoaXMgYmVhdXRpZnVsbHkgcGxhbm5lZCBob21lIGluXHJcbiAgICAgIHRoZSBtYWtpbmcgZm9yIHlvdXJzZWxmLlxyXG4gICAgPC9wPmAsXHJcbiAgW3BhZ2VTdHlsZVtcImNvbnRhaW5lclwiXSwgcGFnZVN0eWxlW1widGV4dC1jb250ZW50XCJdXVxyXG4pO1xyXG5jcmVhdGVSaWdodEVsZShcclxuICAvKiBIVE1MICovIGAgPHNwYW4gY2xhc3M9JHtzdHlsZXNbXCJsb2dvLWNvbnRhaW5lclwiXX0+XHJcbiAgICA8aW1nIHNyYz0ke3JpZ2h0TG9nb30gYWx0PVwiXCIgLz5cclxuICA8L3NwYW4+YCxcclxuICBbc3R5bGVzW1wiY29udGFpbmVyXCJdXVxyXG4pO1xyXG5cclxuZXhwb3J0IHsgcmlnaHRDb250YWluZXIgfTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ZhY2Vib29rLnN2Z1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbWFnZXMvZmFjZWJvb2suc3ZnXCIsXG5cdFwiLi9pbnN0YWdyYW0uc3ZnXCI6IFwiLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIsXG5cdFwiLi9saW5rZWRpbi5zdmdcIjogXCIuL3NyYy9jb21wb25lbnRzL3NvY2lhbHMvaW1hZ2VzL2xpbmtlZGluLnN2Z1wiLFxuXHRcIi4vdHdpdHRlci5zdmdcIjogXCIuL3NyYy9jb21wb25lbnRzL3NvY2lhbHMvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NvY2lhbHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBjYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChjYWNoZVtrZXldID0gcihrZXkpKSk7XHJcbn1cclxuLy8gTm90ZSBmcm9tIHRoZSBkb2NzIC0+IFdhcm5pbmc6IFRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHJlcXVpcmUuY29udGV4dCBtdXN0IGJlIGxpdGVyYWxzIVxyXG5pbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG5cclxuT2JqZWN0LmVudHJpZXMoY2FjaGUpLm1hcCgobW9kdWxlKSA9PiBtb2R1bGVbMV0uZGVmYXVsdCk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyU29jaWFsQmFyID0gKGZyYWdtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSAvKiBIVE1MICovIGBcclxuICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJjb250YWluZXJcIl19PlxyXG4gICAgICA8aW1nICBzcmM9JHtjYWNoZVtcIi4vZmFjZWJvb2suc3ZnXCJdfSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8aW1nIHNyYz0ke2NhY2hlW1wiLi9pbnN0YWdyYW0uc3ZnXCJdfSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8aW1nIHNyYz0ke2NhY2hlW1wiLi90d2l0dGVyLnN2Z1wiXX0gYWx0PVwiXCIgLz5cclxuICAgICAgPGltZyBzcmM9JHtjYWNoZVtcIi4vbGlua2VkaW4uc3ZnXCJdfSBhbHQ9XCJcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi93cmFwcGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTcGxpZGUgZnJvbSBcIkBzcGxpZGVqcy9zcGxpZGVcIjtcclxuaW1wb3J0IHsgbGVmdENvbnRhaW5lciBhcyBsZWZ0Q29udGFpbmVyQXJyIH0gZnJvbSBcIi4uL2xlZnRDb250YWluZXIvbGVmdENvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyByaWdodENvbnRhaW5lciBhcyByaWdodENvbnRhaW5lckFyciB9IGZyb20gXCIuLi9yaWdodENvbnRhaW5lci9yaWdodENvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyV3JhcHBlciA9IChmcmFnbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gLyogSFRNTCAqLyBgPGRpdiBjbGFzcz0ke3N0eWxlc1tcInNjcm9sbC13cmFwcGVyXCJdfT5cclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCJcclxuICAgICAgaWQ9XCJsZWZ0LWNvbnRhaW5lci1zY3JvbGxcIlxyXG4gICAgICBjbGFzcz0ke3N0eWxlc1tcImxlZnQtY29udGFpbmVyXCJdfVxyXG4gICAgPjwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cInJpZ2h0LWNvbnRhaW5lci1zY3JvbGxcIlxyXG4gICAgICBzdHlsZT1cInRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIlxyXG4gICAgICBjbGFzcz0ke3N0eWxlc1tcInJpZ2h0LWNvbnRhaW5lclwiXX1cclxuICAgID48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9JHtzdHlsZXNbXCJhcnJvdy1jb250YWluZXJcIl19PlxyXG4gICAgICA8ZGl2IGNsYXNzPSR7c3R5bGVzW1wiYXJyb3dcIl19PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICBpZiAoXCJzY3JvbGxSZXN0b3JhdGlvblwiIGluIHdpbmRvdy5oaXN0b3J5KSB7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XHJcbiAgfVxyXG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblxyXG4gIGNvbnN0IGxlZnRDb250YWluZXIgPSBmcmFnbWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtY29udGFpbmVyLXNjcm9sbFwiKTtcclxuXHJcbiAgY29uc3QgcmlnaHRDb250YWluZXIgPSBmcmFnbWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWNvbnRhaW5lci1zY3JvbGxcIik7XHJcblxyXG4gIGxlZnRDb250YWluZXJBcnIuZm9yRWFjaCgoZWxlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3RWxlLmlubmVySFRNTCA9IGVsZTtcclxuXHJcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZS5jaGlsZHJlblswXSk7XHJcbiAgfSk7XHJcbiAgcmlnaHRDb250YWluZXJBcnIuZm9yRWFjaCgoZWxlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3RWxlLmlubmVySFRNTCA9IGVsZTtcclxuXHJcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGUuY2hpbGRyZW5bMF0pO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGxlZnRDb250YWluZXJBcnIubGVuZ3RoKTtcclxuXHJcbiAgbGV0IHNob3VsZFNjcm9sbCA9IHRydWU7XHJcblxyXG4gIGxldCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIGxldCBjdXJyZW50UGFnZSA9IDA7XHJcbiAgbGV0IGN1cnJlbnRDb250YWluZXJTaXplTGVmdCA9IDA7XHJcbiAgbGV0IGN1cnJlbnRDb250YWluZXJTaXplUmlnaHQgPSAtd2luZG93SGVpZ2h0ICogKGxlZnRDb250YWluZXJBcnIubGVuZ3RoIC0gMSk7XHJcblxyXG4gIHJpZ2h0Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7Y3VycmVudENvbnRhaW5lclNpemVSaWdodH1weCwgMHB4KWA7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChyaWdodENvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uICE9PSBcImFsbCAxcyBlYXNlLW91dFwiKSB7XHJcbiAgICAgIHJpZ2h0Q29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAxcyBlYXNlLW91dFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIChlLmRlbHRhWSA8IDAgJiYgY3VycmVudFBhZ2UgPT09IDApIHtcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgaWYgKHNob3VsZFNjcm9sbCkge1xyXG4gICAgICBpZiAoZS5kZWx0YVkgPiAwICYmIGN1cnJlbnRQYWdlIDwgbGVmdENvbnRhaW5lckFyci5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgY3VycmVudENvbnRhaW5lclNpemVMZWZ0ICs9IHdpbmRvd0hlaWdodDtcclxuICAgICAgICBjdXJyZW50Q29udGFpbmVyU2l6ZVJpZ2h0ICs9IHdpbmRvd0hlaWdodDtcclxuICAgICAgICBjdXJyZW50UGFnZSArPSAxO1xyXG5cclxuICAgICAgICBsZWZ0Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsIC0ke2N1cnJlbnRDb250YWluZXJTaXplTGVmdH1weCwgMHB4KWA7XHJcbiAgICAgICAgcmlnaHRDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwgJHtjdXJyZW50Q29udGFpbmVyU2l6ZVJpZ2h0fXB4LCAwcHgpYDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS5kZWx0YVkgPCAwICYmIGN1cnJlbnRQYWdlID4gMCkge1xyXG4gICAgICAgIGN1cnJlbnRDb250YWluZXJTaXplTGVmdCAtPSB3aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgY3VycmVudENvbnRhaW5lclNpemVSaWdodCAtPSB3aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgLT0gMTtcclxuICAgICAgICBsZWZ0Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsIC0ke2N1cnJlbnRDb250YWluZXJTaXplTGVmdH1weCwgMHB4KWA7XHJcbiAgICAgICAgcmlnaHRDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwgJHtjdXJyZW50Q29udGFpbmVyU2l6ZVJpZ2h0fXB4LCAwcHgpYDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNob3VsZFNjcm9sbCA9IHRydWU7XHJcbiAgICAgIH0sIDExMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZFNjcm9sbCA9IGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgXCIuLi9tYWluLnNjc3NcIjtcclxuaW1wb3J0IExhenlMb2FkIGZyb20gXCJ2YW5pbGxhLWxhenlsb2FkXCI7XHJcblxyXG5pbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyV3JhcHBlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvd3JhcHBlci93cmFwcGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlclNvY2lhbEJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc29jaWFscy9zb2NpYWxzXCI7XHJcbmNvbnN0IGRvY0ZyYWcgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmJvZHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCIjcm9vdFwiKTtcclxucmVuZGVyTmF2KGRvY0ZyYWcpO1xyXG5yZW5kZXJTb2NpYWxCYXIoZG9jRnJhZyk7XHJcbmNvbnN0IHdyYXBwZXIgPSByZW5kZXJXcmFwcGVyKGRvY0ZyYWcpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2NGcmFnKTtcclxuY29uc3QgdmlkZW9UcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlby1tb2RhbC10cmlnZ2VyXCIpO1xyXG5jb25zdCBjbG9zZU1vZGFsVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid3JhcHBlci10cmlnZ2VyXCIpO1xyXG5mdW5jdGlvbiB0ZXN0KCkge1xyXG4gIGNvbnNvbGUubG9nKFwibGF6eWFzZmRmXCIpO1xyXG59XHJcbmNvbnN0IGxhenkgPSBuZXcgTGF6eUxvYWQoe1xyXG4gIGVsZW1lbnRzX3NlbGVjdG9yOiAnW2RhdGEtaWQ9XCJsYXp5XCJdJyxcclxuICB0aHJlc2hvbGQ6IFwiMTgwMFwiLFxyXG4gIGNhbGxiYWNrX2VudGVyOiB0ZXN0LFxyXG59KTtcclxuY29uc3QgeCA9IGxhenkudXBkYXRlKCk7XHJcbmNvbnNvbGUubG9nKGxhenkpO1xyXG5yZXF1aXJlKFwiLi9jb21wb25lbnRzL21vZGFsL2F0dGFjaE1vZGFsTGlzdGVuZXJzXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=