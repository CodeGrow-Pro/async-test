const fs = require('fs');

console.time('blockingReadStart');

for(let i = 0; i < 10; i++){
    const result = fs.readFileSync('./sample.jpeg');
    console.log(`File length: ${result.length/1e6}MB`);
}

const data = fs.readFileSync('./file.txt', 'utf-8');
console.log(data);

console.timeEnd('blockingReadStart')