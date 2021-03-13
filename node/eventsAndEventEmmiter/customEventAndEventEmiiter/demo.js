//create custom event using events package

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on("watch",function(name) {
    console.log(name,"is speaking");    
})
//calling event emitter
eventEmitter.emit("watch","peter");