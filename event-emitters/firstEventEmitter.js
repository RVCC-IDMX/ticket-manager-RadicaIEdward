import { EventEmitter } from 'node:events';

const firstEmitter = new EventEmitter();

firstEmitter.emit('My first event');
