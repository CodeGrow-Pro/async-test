const fs = require('fs');

console.time('blockingReadStart');

for (let i = 0; i < 10; i++) {
    fs.readFile('./sample.jpeg', (err, data) => {
        if (err)
            return console.log('Error in reading file')
        console.log(`File length: ${data.length / 1e6}MB`);
    });
}

fs.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.timeEnd('blockingReadStart')