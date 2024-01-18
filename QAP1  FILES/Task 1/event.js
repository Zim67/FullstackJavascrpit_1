const EventEmitter = require('events');

// Create an EventEmitter object
const myEmitter = new EventEmitter();

// Event listener for 'customEvent'
myEmitter.on('customEvent', (arg) => {
  console.log('Event received with argument:', arg);
});

// Emitting the 'customEvent' with an argument
myEmitter.emit('customEvent', 'Sample Argument');
