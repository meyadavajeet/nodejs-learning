const buffer = new Buffer.from('Hello, World!');
console.log(buffer.toString()); // Output: Hello, World!
console.log(buffer.length); // Output: 13
console.log(buffer[0]); // Output: 72 (ASCII value of 'H')
console.log(buffer[1]); // Output: 101 (ASCII value of 'e')

console.log(buffer) // Output: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
console.log(buffer.toJSON()); // Output: { type: 'Buffer', data: [ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 ] }

buffer.write('Hello, Node.js!');
console.log(buffer.toString()); // Output: Hello, Node.js!
console.log(buffer.length); // Output: 16 (length of the new string)
console.log(buffer.slice(0, 5).toString()); // Output: Hello (slice the first 5 bytes)
console.log(buffer.indexOf('Node')); // Output: 7 // Index of 'Node' in the buffer
console.log(buffer.includes('World')); // Output: false // Check if 'World' is in the buffer
console.log(buffer.lastIndexOf('!')); // Output: 15 // Last index of '!' in the buffer
console.log(buffer.toString('utf8', 0, 5)); // Output: Hello // Convert the first 5 bytes to a string
console.log(buffer.toString('ascii', 0, 5)); // Output: Hello // Convert the first 5 bytes to a string


buffer.write("Heelllllllllllooooooooooooo")
console.log(buffer.toString()); // output: Heellllllllll