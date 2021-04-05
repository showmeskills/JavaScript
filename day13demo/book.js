const Textbook = require('./file');
const textbook = new Textbook();



function createBook(){
    textbook.books();
    textbook.booksA();
    textbook.booksB();
    textbook.booksC();
}

module.exports = createBook;