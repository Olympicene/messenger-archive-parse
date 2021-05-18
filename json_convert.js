const lineReader = require('line-reader');
const fs = require("fs");
var stringSimilarity = require("string-similarity");

var args = process.argv.slice(2);

switch (args[0]) {
    case 'add':
        console.log('adding to gpt.json');
        break;
    case 'wipe':
        fs.writeFile('gpt.json', '[]', function(){console.log('wiped gpt.json \n')})
        break;
    default:
        console.log('adding to gpt.json');
    }


var prev_text = ''

lineReader.eachLine('input.txt', (line) => { 

    if (line[0] == '\'' && line[line.length-1] == '\'' && line.split(" ").length > 2) {

        var text = line.substring(1, line.length-1);

        if (stringSimilarity.compareTwoStrings(text, prev_text) < 0.9 && text.length > 1) {

            var messages = JSON.parse(fs.readFileSync('gpt.json'))   
        
            messages.push(text)
        
            fs.writeFileSync('gpt.json', JSON.stringify(messages, null, '\t'));
        }

        prev_text = text;

    }

});