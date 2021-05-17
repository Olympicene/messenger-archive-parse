const lineReader = require('line-reader');
const fs = require("fs");
var stringSimilarity = require("string-similarity");


fs.writeFile('output.json', '[]', function(){console.log('wiped output.txt \n')})


var prev_text = ''

lineReader.eachLine('input.txt', (line) => { 

    var text = line.substring(1, line.length-1)
    
    if (stringSimilarity.compareTwoStrings(text, prev_text) < 0.9) {

        var messages = JSON.parse(fs.readFileSync('output.json'))   
    
        messages.push(text)
    
        fs.writeFileSync('output.json', JSON.stringify(messages, null, '\t'));
    }

    prev_text = text;
});