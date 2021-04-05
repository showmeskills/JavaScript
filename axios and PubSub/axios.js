function axios({method,url,params,data}){
    method = method.toLowerCase();
    return new Promise((resolve,reject) =>{
        //there are four procedures in ajax
        let xhr
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // the url have to concat with query;
        let str = '';
        for(let k in params){
            str += `${k}=${params[k]}&`;
        }
        str.slice(0,-1);
        xhr.open(method,url+'?'+str);

        if(method === "POST" || method === "PUT" || method === "DELETE"){
            //setting up request header
            xhr.setRequestHeader('Content-Type', 'application/json');
            //setting up request body
            xhr.open(JSON.stringify(data))
        }else{
            xhr.open()
        };
        //setting up the result of a type of reponse is json;
        xhr.responseType ='json';
        //final step
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status <300 || xhr.status === 304){
                    resolve({
                        status:xhr.status,
                        message:xhr.responseText,
                        body:xhr.reponse
                    })
                }else{
                    reject(new Error(`Request data has been failed, ${xhr.status}`))
                }
            }
        }
    })
}

const axios = {
    get(url,options){
        let config = Object.assign(options,{method:'GET',url});
        return config;
    },
    put(){
        let config = Object.assign(options,{method:'PUT',url});
        return config;
    },
    post(){
        let config = Object.assign(options,{method:'POST',url});
        return config;
    },
    delete(){
        let config = Object.assign(options,{method:'DELETE',url});
        return config;
    },
}