const fsp = require("fs/promises");
const path = require("path");
const prompt = require("prompt-sync")()


const openFileConsole = async () =>{
    console.log("Enter filename:")
    const fileName = prompt()
    try{
        console.log(path.resolve(__dirname, "../", fileName))
        const firstFile = await fsp.readFile(_rootifyPath(fileName), {encoding:"UTF-8"})
        const data = await fsp.readFile(_rootifyPath(firstFile),{encoding:"UTF-8"})
        return data
    }
    catch (err){
        throw new Error(err)
    }
}

const _rootifyPath = pathName=>{
    return path.resolve(__dirname, "../", pathName)
}

module.exports = openFileConsole