const lineReader = require('line-reader');
const fs = require("fs");


lineReader.eachLine('Output.txt', (line) => {  
    try {
        var messages = JSON.parse(fs.readFileSync('Output.json'));   
        messages.push(line)
        fs.writeFileSync('Output.json', JSON.stringify(messages, null, "\t"));
    } catch (err) {
        console.log(err)
    }

});

// console.log(text)

// fs.writeFile('Out.json', JSON.stringify(text, null, "\t"), (err) => {
//     if (err) return console.error(err);
// });