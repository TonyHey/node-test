const events = require('events'),
      eventEmitter = new events.EventEmitter();

const eventTest = () => {
    console.log("Server running at localhot:8888 !");
    // 
    const listener1 = () => {
        console.log("execute listener1");
    }
    const listener2 = () => {
        console.log("execute listener2");
    }

    eventEmitter.addListener("connection", listener1);
    eventEmitter.on("connection", listener2);

    const eventListeners = events.EventEmitter.listenerCount(eventEmitter, "connection");
    console.log(eventListeners + "eventListeners");

    eventEmitter.emit('connection');

    eventEmitter.removeListener('connection',listener1);
    console.log("removed listener1");

    eventEmitter.emit("connection");

    const eventListeners1 = events.EventEmitter.listenerCount(eventEmitter, "connection");
    console.log(eventListeners1 + "eventListeners");

    console.log("events test done!");
}

exports.eventTest = eventTest;