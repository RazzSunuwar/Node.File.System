const fs = require('fs');

// Sync 
// const files = fs.readdirSync('./');	//specify the path(./)
// console.log(files);

// Async
// fs.readdir('./', (err, file) => {
// 	if(err) console.log('Error', err);
// 	else console.log('Files are', file);	//All the async methods take callback function as the last arguments
// })

// Video tutorials Practice

// delete functionality

// Sync
// try {
// 	fs.unlinkSync('./tobedeleted.txt');

// } catch(err) {
// 	console.log('Its error bro', err);
// } finally {
// 	console.log('Done sync delete bro');
// }
// console.log('Do next step after delete');

// Async
// fs.unlink('./tobedeleted.txt', (err) => {	//For try you have to create .txt file bro
// 	if(err) {
// 		console.log('Its error', err);
// 	} else {
// 		console.log('Done async');
// 	}
// })
// console.log('Done async delete bro');

// read functionality

// Sync
// let content = fs.readFileSync('./read.txt', {encoding:"utf8"}); //Second argument inside the parenthesis is to make content readable from buffer
// console.log(content);

// Async
// fs.readFile('./read','utf8', (err, data) => {
// 	if(err){
// 		console.log('Error', err);
// 	} else {
// 		console.log('Content', data);
// 	}
// });
// console.log('its Async method');

// write functionality

// Sync
// const data = 'This is the new content her. You have to checked it.'
// try{
// 	fs.writeFileSync('write.txt', data);
// 	console.log('File has been saved.');
// } catch (error){
// 	console.error(err); 	
// }

// Async
// const data ='I am coder. I love coding.';
// fs.writeFile('write.txt', data, (err) => {
// 	if(err){
// 		console.log('Error', err);
// 	}
// });
// console.log('Check write files');

// append functionality

// Sync
const data = 'This is the new content her. You have to checked it.'
try{
	fs.appendFileSync('write.txt', data);
	console.log('File has been saved.');
} catch (error){
	console.error(err); 	
}

// Async
// const data ='I am coder. I love coding. ';
// fs.appendFile('write.txt', data, (err) => {
// 	if(err){
// 		console.log('Error', err);
// 	}
// });
// console.log('Check write files');






