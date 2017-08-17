'use strict';

const { connect, Provider, Subscription } = require('../../index.js');
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

  describe('connect()', () => {
    it('should render a connected component on init', () => {
      const Container = connect((data, props) => {})(
        define({
          render(props, state, context) {
            return el('div');
          }
        })
      );

      render(el(Provider.create(), { data }, el(Container)), root);
      expect(root.innerHTML).to.equal('<div></div>');
    });
    it('should render a connected component on init with selected props', () => {
      const Container = connect((data, props) => {
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

      render(el(Provider.create(), { data }, el(Container, { text: 'foo' })), root);
      expect(root.innerHTML).to.equal('<div>fooly</div>');
    });
    it('should render a connected component on init with selected data props', () => {
      const Container = connect((data, props) => {
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

      render(el(Provider.create(), { data }, el(Container)), root);
      expect(root.innerHTML).to.equal('<div>foo</div>');
    });
    it('should rerender a connected component on updated data', done => {
      const Container = connect((data, props) => {
        return {
          text: data.get('foo'),
          onSubmit() {
            data.trigger('foo');
          }
        };
      })(
        define({
          render(props, state, context) {
            return el('div', null, props.text);
          }
        })
      );
      const subscription = new Subscription(data);

      render(el(Provider.create(), { data, subscription }, el(Container)), root);
      expect(root.innerHTML).to.equal('<div>foo</div>');
      data.set('foo', 'bar');
      subscription.notify();
      setTimeout(() => {
        expect(root.innerHTML).to.equal('<div>bar</div>');
        done();
      }, 10);
    });
    it('should rerender a tree of connected components on updated data', done => {
      const ChildContainer = connect((data, props) => {
        return {
          text: data.get('bar')
        };
      })(
        define({
          render(props, state, context) {
            return el('span', null, props.text);
          }
        })
      );
      const ParentContainer = connect((data, props) => {
        return {
          text: data.get('foo')
        };
      })(
        define({
          render(props, state, context) {
            return el('div', null, el('span', null, props.text), el(ChildContainer));
          }
        })
      );
      const subscription = new Subscription(data);
      const oldComponentWillReceiveProps = ChildContainer.prototype.componentWillReceiveProps;
      const oldOnNotify = ChildContainer.prototype.onNotify;
      const called = [];

      ChildContainer.prototype.componentWillReceiveProps = function(nextProps, nextContext) {
        called.push('componentWillReceiveProps');
        oldComponentWillReceiveProps.call(this, nextProps, nextContext);
      };
      ChildContainer.prototype.onNotify = function(data) {
        called.push('onNotify');
        oldOnNotify.call(this, data);
      };

      data.set('bar', 'bar');
      render(el(Provider.create(), { data, subscription }, el(ParentContainer)), root);
      expect(root.innerHTML).to.equal('<div><span>foo</span><span>bar</span></div>');
      data.setAll({ foo: 'bar', bar: 'foo' });
      subscription.notify();
      setTimeout(() => {
        expect(root.innerHTML).to.equal('<div><span>bar</span><span>foo</span></div>');
        expect(called).to.eql(['componentWillReceiveProps']);
        done();
      }, 10);
    });
    it('should rerender a nested subtree of connected components on updated data', done => {
      const subscription = new Subscription(data);
      const ChildContainer = connect((data, props) => {
        return {
          text: data.get('bar')
        };
      })(
        define({
          render(props, state, context) {
            expect(data).to.equal(context.data);
            expect(subscription).to.not.equal(context.subscription);
            return el('span', null, props.text);
          }
        })
      );
      const ParentContainer = connect((data, props) => {
        return {
          text: data.get('foo')
        };
      })(
        define({
          render(props, state, context) {
            return el('div', null, el('span', null, props.text), el(ChildContainer));
          }
        })
      );
      const oldComponentWillReceiveProps = ChildContainer.prototype.componentWillReceiveProps;
      const oldOnNotify = ChildContainer.prototype.onNotify;
      const called = [];

      ChildContainer.prototype.componentWillReceiveProps = function(nextProps, nextContext) {
        called.push('componentWillReceiveProps');
        oldComponentWillReceiveProps.call(this, nextProps, nextContext);
      };
      ChildContainer.prototype.onNotify = function(data) {
        called.push('onNotify');
        oldOnNotify.call(this, data);
      };

      data.set('bar', 'bar');
      render(el(Provider.create(), { data, subscription }, el(ParentContainer)), root);
      expect(root.innerHTML).to.equal('<div><span>foo</span><span>bar</span></div>');
      data.set('bar', 'foo');
      subscription.notify();
      setTimeout(() => {
        expect(root.innerHTML).to.equal('<div><span>foo</span><span>foo</span></div>');
        expect(called).to.eql(['onNotify']);
        done();
      }, 10);
    });
  });
});
