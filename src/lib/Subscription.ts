export class Subscription {
  data: any;
  listeners: Function[];

  constructor(data: any) {
    this.data = data;
    this.listeners = [];
  }

  /**
   * Subscribe to update notifications
   * @returns {Function}
   */
  subscribe(listener: Function) {
    const listeners = this.listeners;

    listeners.push(listener);
    return function unsubscribe() {
      const idx = listeners.indexOf(listener);

      if (idx > -1) {
        listeners.splice(idx, 1);
      }
    };
  }

  /**
   * Notify listeners
   */
  notify() {
    const listeners = this.listeners.slice();

    for (let i = 0; i < listeners.length; i++) {
      listeners[i](this.data);
    }
  }

  /**
   * Destroy instance
   */
  destroy() {
    this.data = null;
    this.listeners = [];
  }
}
