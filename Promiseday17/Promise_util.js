const path = require('path');
const fs = require('fs');
const util = require('util');
let myReadFile = util.promisify(fs.readFile)
let cont = 'this is a text file content'
let creatFile = ()=>{
    fs.writeFile(path.join(__dirname,'test.txt'),cont,err=>{
        if(err){
            console.log('the file has already been failed')
        }else{
            console.log('the file has been successfully')
        }
    })
}

let start = async ()=>{
    await creatFile()
    await myReadFile(path.join(__dirname,'test.txt')).then(value=>{console.log(value.toString())})
}

start()