const fs = require('fs');

const buffer = fs.readFileSync('1-json.json');
const obj = JSON.parse(buffer.toString());

obj.name = 'Nadav';
obj.age=30;

fs.writeFileSync('1-json.json',JSON.stringify(obj));

// const book = {
//     title:'Apology',
//     auther: 'Plato',
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON);
// console.log(data.auther);

// change 1 in test branch
// change 2 in test branch