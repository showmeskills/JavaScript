// reverse string
function reverseString(str){
    let arr = str.split(' ');
    arr.reverse();
    let result = arr.join(' ');
    return result;
}

//one string is an order and anti-order, it returns a same result
function palindrome(str){
    return reverseString(str) === str;
} 
//Revealing a string with some dots in specific numbers
function truncate(str,size){
    return str.slice(0,size) + '...';
}