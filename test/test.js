'use strict';

const { connect, Provider, select } = require('../src');
const { expect } = require('chai');
const { Component, define, el, PropTypes, render } = require('@yr/component');
const dataStore = require('@yr/data-store');
const runtime = require('@yr/runtime');

let data;

describe('connect-component', () => {
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
      const container = connect((context, props) => {})(
        define({
          render(props, state, context) {
            return el('div');
          }
        })
      );

      expect(render(el(Provider.create(), { data }, el(container)))).to.equal('<div></div>');
    });
    it('should render a connected component on init with selected props', () => {
      const container = connect((context, props) => {
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
      const container = connect((context, props) => {
        return {
          text: context.data.get('foo')
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

  describe.only('select()', () => {
    it('should select a single input from data', () => {
      function fooSelector(context, props) {
        return context.data.get('foo');
      }

      const generateProps = select([fooSelector], (foo, props) => {
        return {
          text: foo
        };
      });

      expect(generateProps({ data })).to.eql({ text: 'foo' });
    });
    it('should select multiple inputs from data', () => {
      function fooSelector(context, props) {
        return context.data.get('foo');
      }
      function barSelector(context, props) {
        return context.data.get('bar');
      }

      const generateProps = select([fooSelector, barSelector], (foo, bar, props) => {
        return {
          text: foo,
          label: bar.foo
        };
      });

      data.set('bar', { foo: 'bar' }, { immutable: true });
      expect(generateProps({ data })).to.eql({ text: 'foo', label: 'bar' });
    });

    describe('memoization', () => {
      before(() => {
        runtime.isBrowser = true;
      });
      after(() => {
        runtime.isBrowser = false;
      });

      it('should memoize selector results', () => {
        function fooSelector(context, props) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], (foo, props) => {
          return {
            text: foo
          };
        });
        const results = generateProps({ data });
        const results2 = generateProps({ data });

        expect(results).to.equal(results2);
      });
      it('should not memoize selector results on new input', () => {
        function fooSelector(context, props) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], (foo, props) => {
          return {
            text: foo
          };
        });
        const results = generateProps({ data });
        data.set('foo', 'bar');
        const results2 = generateProps({ data });

        expect(results).to.not.equal(results2);
        expect(results2).to.eql({ text: 'bar' });
      });
      it('should memoize selector results on similar props', () => {
        function fooSelector(context, props) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], (foo, props) => {
          return {
            text: foo
          };
        });
        const results = generateProps({ data }, {});
        const results2 = generateProps({ data }, {});

        expect(results).to.equal(results2);
      });
      it('should not memoize selector results on new props', () => {
        function fooSelector(context, props) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], (foo, props) => {
          return {
            text: foo
          };
        });
        const results = generateProps({ data });
        const results2 = generateProps({ data }, {});

        expect(results).to.not.equal(results2);
      });
    });
  });
});
