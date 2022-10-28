import { EventEmitter } from 'node:events';

const firstEmitter = EventEmitter();

firstEmitter.emit('My first event');
