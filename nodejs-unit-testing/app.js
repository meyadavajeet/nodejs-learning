export function greet(name) {
  return `Hello, ${name}!`;
}

export function greetInItalian(name) {
  return `Ciao, ${name}!`;
}

export function farewell(name) {
  return `Goodbye, ${name}!`;
}

// order functions

export function processOrder(order, dependencies) {
  // some processing logic
  const paymentInfo = dependencies.processPayment(order.amount);
  return paymentInfo;
}

function processPayment(amount) {
  console.log("I am real function");
  // some payment processing logic
  return { id: 123, status: "success", amount: amount };
}

// snapshot testing - used for db call data testing or complex object
export function userData(userId) {
  return {
    id: userId,
    name: "John Doe",
    role : ["user", "admin"],
    lastLogin: new Date("2025-01-01T12:00:00Z").toISOString(),
    preference: {
      notifications: true,
      theme: "dark",
    },
  };
}
