function email(str){
    let result = null;
    if(!str){
        return 'email can\'t be empty'
    }else{
        let email = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}/;
        result = email.test(str)
    }
    return result;
};
function phone(str){
    let result = null;
    if(!str){
        return 'email can\'t be empty'
    }else{
        let phone = /^(\+[61,60])-0[3-9]{1}[0-9]{8}/;
        result = phone.test(str)
    }
    return result;
}