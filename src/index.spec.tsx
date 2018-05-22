import 'mocha';
import { connect, createProvider, select } from './index';
import { expect } from 'chai';
import * as PropTypes from 'prop-types';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
// @ts-ignore
import dataStore from '@yr/data-store';

let data: any;

const shape = {
  data: PropTypes.object,
  locale: PropTypes.object
};

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
      expect(render(React.createElement(createProvider(), { data }, React.createElement('div')))).to.equal(
        '<div></div>'
      );
    });

    it('should render a passed child component with props', () => {
      const app = ({ text }: { text: string }) => {
        return <div> {text}</div>;
      };

      expect(
        render(React.createElement(createProvider(), { data }, React.createElement(app, { text: 'foo' })))
      ).to.equal('<div> foo</div>');
    });

    it('should provide default context', () => {
      const app = class Tmp extends React.Component {
        static contextTypes = shape;
        render() {
          const { data } = this.context;
          return React.createElement('div', null, data.get('foo'));
        }
      };

      expect(render(React.createElement(createProvider(), { data }, React.createElement(app)))).to.equal(
        '<div>foo</div>'
      );
    });

    it('should provide passed context', () => {
      const app = class Tmp extends React.Component {
        render() {
          const { locale } = this.context;
          return React.createElement('div', null, locale.foo);
        }
      };

      expect(
        render(
          React.createElement(
            createProvider({ locale: PropTypes.object }),
            { data, locale: { foo: 'le foo' } },
            React.createElement(app)
          )
        )
      ).to.equal('<div>le foo</div>');
      // @ts-ignore
      expect(React.Component.contextTypes).to.have.property('locale');
    });
  });

  describe('connect()', () => {
    it('should render a connected component on init', () => {
      const container = connect(() => {})(() => <div />);

      expect(render(React.createElement(createProvider(), { data }, React.createElement(container)))).to.equal(
        '<div></div>'
      );
    });

    it('should render a connected component on init with selected props', () => {
      const container: any = connect((_context, props) => {
        return {
          text: `${props.text}ly`
        };
      })((props: any) => <div>{props.text}</div>);

      expect(
        render(React.createElement(createProvider(), { data }, React.createElement(container, { text: 'foo' })))
      ).to.equal('<div>fooly</div>');
    });

    it('should render a connected component on init with selected data props', () => {
      const container = connect(context => {
        return {
          text: context.data.get('foo')
        };
      })((props: any) => React.createElement('div', null, props.text));

      expect(render(React.createElement(createProvider(), { data }, React.createElement(container)))).to.equal(
        '<div>foo</div>'
      );
    });
  });

  describe('select()', () => {
    it('should select a single input from data', () => {
      function fooSelector(context: any) {
        return context.data.get('foo');
      }

      const generateProps = select([fooSelector], ([foo]) => {
        return {
          text: foo
        };
      });

      expect(generateProps({ data })).to.eql({ text: 'foo' });
    });

    it('should select multiple inputs from data', () => {
      function fooSelector(context: any) {
        return context.data.get('foo');
      }
      function barSelector(context: any) {
        return context.data.get('bar');
      }

      const generateProps = select([fooSelector, barSelector], ([foo, bar]) => {
        return {
          text: foo,
          label: bar.foo
        };
      });

      data.set('bar', { foo: 'bar' }, { immutable: true });
      expect(generateProps({ data })).to.eql({ text: 'foo', label: 'bar' });
    });

    // Can't change const in @yr/runtime, so the test is skipped
    describe.skip('memoization', () => {
      before(() => {
        // runtime.isBrowser = true;
      });

      after(() => {
        // runtime.isBrowser = false;
      });

      it('should memoize selector results', () => {
        function fooSelector(context: any) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], ([foo]) => {
          return {
            text: foo
          };
        });

        const results = generateProps({ data });
        const results2 = generateProps({ data });

        expect(results).to.equal(results2);
      });

      it('should not memoize selector results on new input', () => {
        function fooSelector(context: any) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], ([foo]) => {
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
        function fooSelector(context: any) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], ([foo]) => {
          return {
            text: foo
          };
        });

        const results = generateProps({ data }, {});
        const results2 = generateProps({ data }, {});

        expect(results).to.equal(results2);
      });

      it('should not memoize selector results on new props', () => {
        function fooSelector(context: any) {
          return context.data.get('foo');
        }

        const generateProps = select([fooSelector], (_res, _context, { bar }) => {
          return {
            text: bar
          };
        });

        const results = generateProps({ data }, { bar: 'foo' });
        const results2 = generateProps({ data }, { bar: 'bar' });

        expect(results).to.not.equal(results2);
      });
    });
  });
});
