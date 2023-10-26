const fs = require('fs')

const readFiles = fs.readFileSync('text.txt')

console.log(readFiles.toString('utf8'));




fs.writeFileSync('text.txt','Hello world! 222222')


