const EventEmitter = require('events');
const define = Object.defineProperty;

export class Service extends EventEmitter {
  on(output, handler) {
    return this.addListener(output, handler);
  }
}
