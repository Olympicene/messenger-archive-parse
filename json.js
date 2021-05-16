var path = require("path");
const fs = require("fs");

const databaseDir = path.resolve(__dirname + "/database/");



const length = fs.readdirSync(databaseDir).length

var wrap = []

for (var i = 1; i <= length; i++) {
    var file = JSON.parse(fs.readFileSync(databaseDir + `/message_${i}.json`));

    var data = []

    for (var message in file.messages) {
        if(data.length < 1000) {
            if ('content' in file.messages[message]) {
                data.push(file.messages[message].content)
            }
        } else {
            wrap.push(data)
            data = []
        }
    }

    wrap.push(data)
    
}

fs.writeFile('Output.json', JSON.stringify(wrap, null, "\t"), (err) => {
    if (err) return console.error(err);
});

