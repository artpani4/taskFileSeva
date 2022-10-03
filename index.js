const fsp = require("fs/promises");
const prompt = require('prompt-sync')();
const path = require("path")

console.log("Enter filename:")
const fileName = prompt()

fsp.readFile(path.resolve(__dirname, fileName), {encoding:"UTF-8"})
    .then(
    fname => {
        fsp.readFile(path.resolve(__dirname, fname),{encoding:"UTF-8"})
            .then(data=>console.log(data))
    }
)
    .catch(err => console.log(err))