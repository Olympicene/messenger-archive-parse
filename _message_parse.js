var path = require("path");
const fs = require("fs");

const databaseDir = path.resolve(__dirname + "/database/");

fs.writeFile('training_data.txt', '', function(){console.log('wiped training_data.txt' + '\n')})
const length = fs.readdirSync(databaseDir).length

var wrap = ''

for (var i = 1; i <= length; i++) {
    var file = JSON.parse(fs.readFileSync(databaseDir + `/message_${i}.json`));

    var data = ''

    for (var message in file.messages) {
        if ('content' in file.messages[message] && 'reactions' in file.messages[message]) {
            if (file.messages[message].reactions.length > 2) {
                data += '\'' + cleanString(file.messages[message].content) + '\'' + '\n'
            }
        }
    }

    wrap += data;
}

fs.writeFile('training_data.txt', wrap, (err) => {
    if (err) return console.error(err);
});

function cleanString(input) {
    var output = "";
    for (var i=0; i<input.length; i++) {
        if (input.charCodeAt(i) <= 127) {
            output += input.charAt(i);
        }
    }
    return output;
}

