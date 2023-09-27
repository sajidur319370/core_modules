
const { on } = require('events');
const fs = require('fs');

const rst = fs.createReadStream('./data.txt')

rst.on('data', (c) => {
    console.log(c);
})
rst.on('open', () => {
    console.log("Stream is open");
})

setTimeout(() => {

    rst.pause();
    console.log("Stream is paused");

}, 10);

setTimeout(() => {

    rst.resume();
    console.log("Stream is resuming");
}, 2000)