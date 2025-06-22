const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


// call event emitter
eventEmitter.on("order-pizza", (size, topping) => {
    console.log(`Order received for a ${size} pizza with ${topping} topping.`);
});
// call event emitter
eventEmitter.on("order-pizza", (size, topping) => {
    console.log(`Preparing a ${size} pizza with ${topping} topping.`);
});
// call event emitter
eventEmitter.on("order-pizza", (size, topping) => {
    console.log(`Delivering a ${size} pizza with ${topping} topping.`);
});
// call event emitter
eventEmitter.on("order-pizza", (size, topping) => {
    console.log(`Enjoy your ${size} pizza with ${topping} topping!`);
});
// call event emitter
eventEmitter.on("order-pizza", (size, topping) => {
    console.log(`Thank you for ordering a ${size} pizza with ${topping} topping!`);
});

// call event emitter
eventEmitter.on("order-pizza", (size, topping) => {
    console.log(`Feedback: How was your ${size} pizza with ${topping} topping?`);
});

// Emit the event with parameters
// This will trigger all the listeners registered for the "order-pizza" event 
eventEmitter.on("order-pizza", (size) =>{
  if(size === 'large'){
    console.log(`Large pizza ordered, special discount applied!`);
  }
  else if(size === 'medium'){
    console.log(`Medium pizza ordered, enjoy your meal!`);
  }
  else{
    console.log(`Small pizza ordered, perfect for a snack!`);
  }

})

console.log("check all the event running in non-blocking way");

// register an event listener
eventEmitter.emit("order-pizza", 'large', 'paneer')

eventEmitter.emit("order-pizza", 'medium', 'mushroom')