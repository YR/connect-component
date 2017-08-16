'use strict';

const { connect, Provider } = require('../src');
const { expect } = require('chai');
const { Component, define, el, PropTypes, render } = require('@yr/component');
const dataStore = require('@yr/data-store');

let data;

describe('data-store-component', () => {
  afterEach(() => {
    if (data) data.destroy();
  });

  describe('Provider', () => {
    beforeEach(() => {
      data = dataStore.create('test', {
        foo: 'foo'
      });
    });

    it('should render a passed child component', () => {
      expect(render(el(Provider.create(), { data }, el('div')))).to.equal('<div></div>');
    });
    it('should render a passed child component with props', () => {
      const app = define({
        render({ text }) {
          return el('div', null, text);
        }
      });

      expect(render(el(Provider.create(), { data }, el(app, { text: 'foo' })))).to.equal('<div>foo</div>');
    });
    it('should provide default context', () => {
      const app = define({
        render(props, state, { data }) {
          return el('div', null, data.get('foo'));
        }
      });

      expect(render(el(Provider.create(), { data }, el(app)))).to.equal('<div>foo</div>');
    });
    it('should provide passed context', () => {
      const app = define({
        render(props, state, { locale }) {
          return el('div', null, locale.foo);
        }
      });

      expect(
        render(el(Provider.create({ locale: PropTypes.object }), { data, locale: { foo: 'le foo' } }, el(app)))
      ).to.equal('<div>le foo</div>');
      expect(Component.contextTypes).to.have.property('locale');
    });
  });

  describe('connect()', () => {
    beforeEach(() => {
      data = dataStore.create('test', {
        foo: 'foo'
      });
    });

    it('should', () => {

    });
  });
});
