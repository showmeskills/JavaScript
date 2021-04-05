const fs = require('fs');
const path = require('path');
const content = 'this is a test content'
//create a file
let createFile = ()=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(path.join(__dirname,'test.txt'),content,(err)=>{
            if(err) reject(err);
            resolve('your file has been created');
        })
    })
}
createFile()
.then((result)=>{
    console.log(result)
},(err)=>{
    console.log(err)
})

let readFile = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path.join(__dirname,'test.txt'),(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}

readFile()
.then((result)=>{
console.log(result.toString())
},(err)=>{
console.log(err)
})