const lineReader = require('line-reader');
const fs = require("fs");

fs.writeFile('output.txt', JSON.stringify('[]'), function(){console.log('wiped output.txt \n')})

lineReader.eachLine('input.txt', (line) => {  

    var messages = fs.readFileSync('output.txt')   
    messages += line.substring(1, line.length-1) + '\n'
    fs.writeFileSync('output.txt', messages);

});