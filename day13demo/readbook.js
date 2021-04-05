const fs = require('fs');
const path = require('path');
const createBooks = require('./book')();

function bookA(){
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname,'books','bookA.txt'),(err,data) => {
            if(err) reject('err')
            resolve(data);
        })
    })
}

function bookB(){
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname,'books','bookB.txt'),(err,data) => {
            if(err) reject(err)
            resolve(data);
        })
    })
}

function bookC(){
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname,'books','bookC.txt'),(err,data) => {
            if(err) reject(err)
            resolve(data);
        })
    })
}



async function bookDirectory(){    
    let two = await bookA();
    let three = await bookB();
    let four = await bookC();
 
   console.log(two.toString());
   console.log(three.toString())
   console.log(four.toString())
}
bookDirectory()
