const ev = require("events");
const { EventEmitter } = require("stream");
const eventEmit = new ev.EventEmitter();
// create an event handler
const name = () => {
    console.log("MY name is Sajid");
}

// Assign an handler into event
eventEmit.on('scream', name).name;


// firing the event
eventEmit.emit('scream');

