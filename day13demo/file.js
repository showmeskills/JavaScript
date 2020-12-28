const path = require('path');
const fs = require('fs');

class Textbook {
    constructor(){}

    books(){
        return fs.mkdirSync(path.join(__dirname,'books'))
          
        
    }
    booksA(){
        return fs.writeFile(path.join(__dirname,'books','bookA.txt'),'bookA has content',err=>{
            if(err){
                console.log('bookA is created failed')
            }
            console.log('bookA is created successfully')
        })
    }

    booksB(){
        return fs.writeFile(path.join(__dirname,'books','bookB.txt'),'bookB has content',err=>{
            if(err){
                console.log('bookB is created failed')
            }
            console.log('bookB is created successfully')
        })
    }

    booksC(){
        return fs.writeFile(path.join(__dirname,'books','bookC.txt'),'bookC has content',err=>{
            if(err){
                console.log('bookC is created failed')
            }
            console.log('bookC is created successfully')
        })
    }
}

module.exports = Textbook