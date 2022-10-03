const fsp = require("fs/promises");
const prompt = require('prompt-sync')();
const path = require("path")


const main = async ()=>{
    console.log("Enter filename:")
    const fileName = prompt()
    try{
        const firstFile = await fsp.readFile(path.resolve(__dirname, fileName), {encoding:"UTF-8"})
        const data = await fsp.readFile(path.resolve(__dirname, firstFile),{encoding:"UTF-8"})
        console.log(data)
    }
    catch (err){
        console.log(err)
    }
}


main().then()
