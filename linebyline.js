const lineReader = require('line-reader');
const fs = require("fs");


var text = ''

lineReader.eachLine('gpt.txt', (line) => {
    try {
        var word = line.split(" ")[1]
        if(word[word.length -1] == ':') {
            fs.appendFile('gpt_new.txt', line + '\n', function (err) {
            });
        }
    } catch (err) {
        
    }
});

// fs.writeFile('Output.txt', text, (err) => {
//     if (err) return console.error(err);
// });