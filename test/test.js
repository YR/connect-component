'use strict';

const dataStore = require('@yr/data-store');
const expect = require('expect.js');
const Props = require('../src/index');

const locales = {
  get (localeCode) {
    return dataStore.create('locale', {
      code: localeCode
    });
  }
};
const settings = dataStore.create('settings', {
  units: {
    mm: 'mm'
  }
});

let data, propsFactory, props;

describe('data-store-component-props', function () {
  before(function () {
    propsFactory = Props.factory(function dataFactory () {
      return dataStore.create();
    }, locales, settings);
  });

  describe('factory()', function () {
    it('should create a new props object', function () {
      props = propsFactory();
      expect(props).to.have.property('data');
      expect(props).to.have.property('settings');
    });
    it('should create a new props object with passed data', function () {
      data = dataStore.create();
      props = propsFactory(data);
      expect(props).to.have.property('data', data);
    });
    it('should create a new props object with additional passed properties', function () {
      props = propsFactory(null, { foo: 'foo' });
      expect(props).to.have.property('data');
      expect(props).to.have.property('settings');
      expect(props).to.have.property('foo', 'foo');
    });
  });

  describe('instance', function () {
    beforeEach(function () {
      data = dataStore.create();
      data.reset({
        foo: 'foo',
        bar: {
          foo: 'bar'
        }
      });
      props = propsFactory(data);
    });

    describe('create()', function () {
      it('should create a new props object with cursor data', function () {
        props = props.create('foo');
        expect(props.data.get()).to.eql('foo');
      });
      it('should create a new props object with cursor data and additional passed properties', function () {
        props = props.create('bar', { bar: 'bar' });
        expect(props.data.get()).to.eql({ foo: 'bar' });
        expect(props).to.have.property('bar', 'bar');
      });
      it('should create a new props object with existing cursor data and additional passed properties', function () {
        props = props.create({ bar: 'bar' });
        expect(props.data.get('foo')).to.eql('foo');
        expect(props).to.have.property('bar', 'bar');
      });
    });

    describe('extract()', function () {
      it('should extract passed keys', function () {
        props.extract(['foo']);
        expect(props.foo).to.eql('foo');
      });
      it('should not overwrite existing keys', function () {
        props = props.create({ foo: 'bar' });
        props.extract(['foo']);
        expect(props.foo).to.eql('bar');
      });
      it('should not attempt writing keys if frozen', function () {
        Object.freeze(props);
        props.extract(['foo']);
        expect(props.foo).to.eql(undefined);
      });
    });

    describe('isEqual()', function () {
      it('should return "true" for the same instance', function () {
        expect(props.isEqual(props)).to.eql(true);
      });
      it('should return "true" for similar instances', function () {
        const props2 = propsFactory(data, { foo: 'foo' });

        props.foo = 'foo';
        expect(props.isEqual(props2)).to.eql(true);
      });
      it('should return "false" for dissimilar instances', function () {
        const props2 = propsFactory(data, { foo: 'foo' });

        props.foo = 'bar';
        expect(props.isEqual(props2)).to.eql(false);
        props.foo = 'foo';
        props2.bar = 'bar';
        expect(props.isEqual(props2)).to.eql(false);
      });
    });

    describe('setLocale()', function () {
      it('should set a locale for "localeCode"', function () {
        props.setLocale('en');
        expect(props.locale.get('code')).to.eql('en');
      });
    });

    describe('get()', function () {
      it('should return a value for "key" set on data', function () {
        props.data.set('foo', 'bar');
        expect(props.get('foo')).to.eql('bar');
        props.data.set('bar', false);
        expect(props.get('bar')).to.eql(false);
      });
      it('should return a value for "key" set on locale', function () {
        props.setLocale('en');
        expect(props.get('code')).to.eql('en');
      });
      it('should return a value for "key" set on settings', function () {
        props.setLocale('en');
        expect(props.get('units/mm')).to.eql('mm');
      });
    });

    describe('clone()', function () {
      it('should return a new instance', function () {
        const cloned = props.clone();

        expect(cloned).to.have.property('data');
        expect(cloned).to.not.equal(props);
      });
      it('should return a new instance with additional passed properties', function () {
        const cloned = props.clone({ foo: 'bar' });

        expect(cloned).to.have.property('foo', 'bar');
      });
    });
  });
});
