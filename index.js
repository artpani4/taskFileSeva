const openFile = require("./utils/fileOutput")

const main = async () => {
    try{
        data = await openFile()
        console.log(data)
    }
    catch (e){
        console.log(e)
    }
}

main().then()