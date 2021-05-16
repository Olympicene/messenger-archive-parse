var path = require("path");
const fs = require("fs");

const databaseDir = path.resolve(__dirname + "/database/");
var path = require("path");
const fs = require("fs");

var data = ''
const length = fs.readdirSync(databaseDir).length

for (var i = 1; i <= length; i++) {
    var file = JSON.parse(fs.readFileSync(databaseDir + `/message_${i}.json`));

    for (var message in file.messages) {
        if ('content' in file.messages[message]) {
            data += file.messages[message].sender_name + ": " + file.messages[message].content + '\n'
        }
    }
}

fs.writeFile('Output.txt', data, (err) => {
    if (err) return console.error(err);
});

