const fs = require('fs');

console.log('started');

fs.readFile('./file.txt','utf-8',(err, data) => {
    console.log(data);
});

console.log('ending process');