const path = require("node:path");

console.log(__filename); // /home/ajeet/Documents/personal/nodejs-learning/node/path-modules/index.js

console.log(__dirname); // /home/ajeet/Documents/personal/nodejs-learning/node/path-modules

console.log(path.extname(__filename)); //.js
console.log(path.extname(__dirname)); // empty found

console.log(path.parse(__filename));
//output of above line 
//{
//   root: '/',
//   dir: '/home/ajeet/Documents/personal/nodejs-learning/node/path-modules',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }
console.log(path.format(path.parse(__filename))); // /home/ajeet/Documents/personal/nodejs-learning/node/path-modules/index.js

console.log(path.isAbsolute(__filename));  // true
console.log(path.isAbsolute("./data.json")); // false

// path.join

console.log(path.join("folder1", "folder2", "index.html"));   // folder1/folder2/index.html
console.log(path.join("/folder1", "folder2", "index.html"));   // /folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "index.html"));   // /folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "../index.html"));   // /folder1/index.html
console.log(path.join(__dirname,"index.html")); // /home/ajeet/Documents/personal/nodejs-learning/node/path-modules/index.html



// path.resolve

console.log(path.resolve("folder1", "folder2", "index.html")); // prints absolute path bcz there is no forwad slash (/) 
//output - /home/ajeet/Documents/personal/nodejs-learning/node/path-modules/folder1/folder2/index.html
console.log(path.resolve("/folder1", "folder2", "index.html")); // where it found slash resolve from there (/folder1/folder2/index.html)
// output - /folder1/folder2/index.html
console.log(path.resolve("/folder1", "//folder2", "index.html"));  
// output - /folder2/index.html 
console.log(path.resolve("/folder1", "//folder2", "../index.html"));   // here ../ goes one step up that's why only index.js (/folder2/../index.js) - resultant index.js
//output - index.js
console.log(path.resolve(__dirname,"index.html")); 
//output-  /home/ajeet/Documents/personal/nodejs-learning/node/path-modules/index.html
