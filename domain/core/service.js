/**
 * Service file.
 * This class inherits from Event Emitter, and serve as base class to all services.
 * 
 * @module Service
 */

const EventEmitter = require('events');
const define = Object.defineProperty;

export class Service extends EventEmitter {
  on(output, handler) {
    return this.addListener(output, handler);
  }
}
