// var buffer = new Buffer([1, 2, 3, 4, 5]);	//Result: <Buffer 01 02 03 04 05>
// console.log(buffer);	

// var buffer = new Buffer('Node.js');
// console.log(Buffer.isEncoding('utf8'));	

// var buffer = new Buffer('Node.js');
// console.log(Buffer.isEncoding('ascii'));	

// STRING
// var str1 = new Buffer(15);
// str1.write('NodeJS', 'utf8');
// console.log(str1);

// var str1 = new Buffer(15);
// str1.write('NodeJS Class');
// console.log(str1.toString('utf8'));	//Changes into code

var str1 = new Buffer(15);
str1.write('NodeJS Class');
console.log(str1.toString('utf8', 0, 8));

