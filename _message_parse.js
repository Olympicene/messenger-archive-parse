var path = require("path");
const fs = require("fs");

const databaseDir = path.resolve(__dirname + "/database/");


const length = fs.readdirSync(databaseDir).length

var wrap = ''

for (var i = 1; i <= length; i++) {
    var file = JSON.parse(fs.readFileSync(databaseDir + `/message_${i}.json`));

    var data = ''

    for (var message in file.messages) {
        if ('content' in file.messages[message] && 'reactions' in file.messages[message]) {
            if (file.messages[message].reactions.length > 2) {
                data += '\'' + file.messages[message].content + '\'' + '\n'
            }
        }
    }

    wrap += data;
}

fs.writeFile('Output.txt', wrap, (err) => {
    if (err) return console.error(err);
});

