'use strict';

module.exports = class Subscription {
  constructor(data) {
    this.data = data;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return function unsubscribe() {
      this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
  }

  notify() {
    const listeners = this.listeners.slice();

    for (let i = 0; i < listeners.length; i++) {
      listeners[i](this.data);
    }
  }
};