'use strict';

const { connect, Provider } = require('../../index.js');
const { expect } = require('chai');
const { Component, define, el, PropTypes, render } = require('@yr/component');
const dataStore = require('@yr/data-store');

let data, root;

describe('data-store-component', () => {
  before(() => {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
  });
  beforeEach(() => {
    data = dataStore.create('test', {
      foo: 'foo'
    });
  });

  afterEach(() => {
    if (data) data.destroy();
    root.innerHTML = '';
  });

  describe('Provider', () => {
    it('should render a passed child component', () => {
      render(el(Provider.create(), { data }, el('div')), root);
      expect(root.innerHTML).to.equal('<div></div>');
    });
    it('should render a passed child component with props', () => {
      const app = define({
        render({ text }) {
          return el('div', null, text);
        }
      });

      render(el(Provider.create(), { data }, el(app, { text: 'foo' })), root);
      expect(root.innerHTML).to.equal('<div>foo</div>');
    });
    it('should provide default context', () => {
      const app = define({
        render(props, state, { data }) {
          return el('div', null, data.get('foo'));
        }
      });

      render(el(Provider.create(), { data }, el(app)), root);
      expect(root.innerHTML).to.equal('<div>foo</div>');
    });
    it('should provide passed context', () => {
      const app = define({
        render(props, state, { locale }) {
          return el('div', null, locale.foo);
        }
      });

      render(el(Provider.create({ locale: PropTypes.object }), { data, locale: { foo: 'le foo' } }, el(app)), root);
      expect(root.innerHTML).to.equal('<div>le foo</div>');
      expect(Component.contextTypes).to.have.property('locale');
    });
  });
});
