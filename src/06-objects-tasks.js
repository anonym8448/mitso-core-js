/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.getArea = function getArea() {
    return this.width * this.height;
  };
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  return Object.setPrototypeOf(obj, proto);
}

/**
 * Css selectors builder
 */
const cssSelectorBuilder = {
  selector: {
    element: '',
    id: '',
    classes: [],
    attributes: [],
    pseudoClasses: [],
    pseudoElement: '',
    combinator: null,
    nextSelector: null,
  },

  element(value) {
    if (this.selector.element) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    if (
      this.selector.id
      || this.selector.classes.length > 0
      || this.selector.attributes.length > 0
      || this.selector.pseudoClasses.length > 0
      || this.selector.pseudoElement
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }

    const newBuilder = Object.create(cssSelectorBuilder);
    newBuilder.selector = { ...this.selector, element: value };
    return newBuilder;
  },

  id(value) {
    if (this.selector.id) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    if (
      this.selector.classes.length > 0
      || this.selector.attributes.length > 0
      || this.selector.pseudoClasses.length > 0
      || this.selector.pseudoElement
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }

    const newBuilder = Object.create(cssSelectorBuilder);
    newBuilder.selector = { ...this.selector, id: value };
    return newBuilder;
  },

  class(value) {
    if (
      this.selector.attributes.length > 0
      || this.selector.pseudoClasses.length > 0
      || this.selector.pseudoElement
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }

    const newBuilder = Object.create(cssSelectorBuilder);
    newBuilder.selector = {
      ...this.selector,
      classes: [...this.selector.classes, value],
    };
    return newBuilder;
  },

  attr(value) {
    if (
      this.selector.pseudoClasses.length > 0
      || this.selector.pseudoElement
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }

    const newBuilder = Object.create(cssSelectorBuilder);
    newBuilder.selector = {
      ...this.selector,
      attributes: [...this.selector.attributes, value],
    };
    return newBuilder;
  },

  pseudoClass(value) {
    if (this.selector.pseudoElement) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }

    const newBuilder = Object.create(cssSelectorBuilder);
    newBuilder.selector = {
      ...this.selector,
      pseudoClasses: [...this.selector.pseudoClasses, value],
    };
    return newBuilder;
  },

  pseudoElement(value) {
    if (this.selector.pseudoElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }

    const newBuilder = Object.create(cssSelectorBuilder);
    newBuilder.selector = { ...this.selector, pseudoElement: value };
    return newBuilder;
  },

  combine(selector1, combinator, selector2) {
    const newBuilder = Object.create(cssSelectorBuilder);
    newBuilder.selector = {
      ...selector1.selector,
      combinator,
      nextSelector: selector2,
    };
    return newBuilder;
  },

  stringify() {
    let result = '';

    // Build the main selector
    if (this.selector.element) {
      result += this.selector.element;
    }

    if (this.selector.id) {
      result += `#${this.selector.id}`;
    }

    if (this.selector.classes.length > 0) {
      result += this.selector.classes.map((cls) => `.${cls}`).join('');
    }

    if (this.selector.attributes.length > 0) {
      result += this.selector.attributes.map((attr) => `[${attr}]`).join('');
    }

    if (this.selector.pseudoClasses.length > 0) {
      result += this.selector.pseudoClasses.map((pc) => `:${pc}`).join('');
    }

    if (this.selector.pseudoElement) {
      result += `::${this.selector.pseudoElement}`;
    }

    // Handle combination
    if (this.selector.combinator && this.selector.nextSelector) {
      result += ` ${this.selector.combinator} ${this.selector.nextSelector.stringify()}`;
    }

    return result;
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
