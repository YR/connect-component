'use strict';

const { connect, Provider } = require('../src');
const { expect } = require('chai');
const { Component, define, el, PropTypes, render } = require('@yr/component');
const dataStore = require('@yr/data-store');
const runtime = require('@yr/runtime');

let data;

describe('data-store-component', () => {
  beforeEach(() => {
    data = dataStore.create('test', {
      foo: 'foo'
    });
  });

  afterEach(() => {
    if (data) data.destroy();
  });

  describe('Provider', () => {
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
    before(() => {
      runtime.isServer = false;
    });
    after(() => {
      runtime.isServer = true;
    });

    it('should render a connected component on init', () => {
      const container = connect((data, props) => {})(
        define({
          render(props, state, context) {
            return el('div');
          }
        })
      );

      expect(render(el(Provider.create(), { data }, el(container)))).to.equal('<div></div>');
    });
    it('should render a connected component on init with selected props', () => {
      const container = connect((data, props) => {
        return {
          text: `${props.text}ly`
        };
      })(
        define({
          render(props, state, context) {
            return el('div', null, props.text);
          }
        })
      );

      expect(render(el(Provider.create(), { data }, el(container, { text: 'foo' })))).to.equal('<div>fooly</div>');
    });
    it('should render a connected component on init with selected data props', () => {
      const container = connect((data, props) => {
        return {
          text: data.get('foo')
        };
      })(
        define({
          render(props, state, context) {
            return el('div', null, props.text);
          }
        })
      );

      expect(render(el(Provider.create(), { data }, el(container)))).to.equal('<div>foo</div>');
    });
  });
});
