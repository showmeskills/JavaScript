class Promise {
    constructor(executor){
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        this.callbacks = [];
        const _this = this;

        function resolve(data){
            if(_this.PromiseState !== 'pending') return;
            This.PromiseState = 'fulfilled';
            This.PromiseResult = data;
            setTimeout(()=>{
                _this.callbacks.forEach(i=>{i.onResolved(data)});
            })
        };

        function reject(data){
            if(_this.PromiseState !== 'pending') return;
            This.PromiseState = 'rejected';
            This.PromiseResult = data;
            setTimeout(()=>{
                _this.callbacks.forEach(i=>{i.onRejected(data)});
            })
        }
        try{
            executor(resolve, reject)
        }catch(e){
            reject(e);
        }
    }

    then(onResolved,onRejected){
        const _this = this;
        if(typeof onRejected !== 'function'){
            onRejected = reason =>{throw reason}
        };
        if(typeof onResolved !== 'function'){
            onResolved = value =>{return value}
        }

        return new Promise((resolve, reject)=>{
            function callback(type){
                try{
                    let result = type(_this.PromiseResult);
                    if(result instanceof Promise){
                        result.then(v=>resolve(v),r=>reject(r))
                    }else{
                        resolve(result)
                    }
                }catch(e){
                    reject(result)
                }
            }

            if(this.PromiseState === 'fulfilled'){
                setTimeout(()=>{
                    callback(onResolved)
                })
            };

            if(this.PromiseState === 'rejected'){
                setTimeout(()=>{
                    callback(onRejected)
                })
            }

            if(this.PromiseState === 'pending'){
                this.callbacks.push({
                    onResolved(){
                        callback(onResolved)
                    },
                    onRejected(){
                        callback(onRejected)
                    },
                })
            }
        })
    }

    catch(onRejected){
        return this.then(undefined,onRejected)
    }

    static resolve(value){
        return new Promise((resolve, reject) => {
            if(value instanceof Promise){
                value.then(v=>resolve(v),r=>reject(r))
            }else{
                resolve(value)
            }
        })
    }

    static reject(reason){
        return new Promise((resolve, reject)=>{reject(reason)})
    }

    static all(promises){
        
        return new Promise((resolve, reject) =>{
           
            let count = 0;
            let arr = [];
            
            for(let i = 0;i<promises.length;i++){
                promises[i].then(v=>{
                    
                    count++;
                   
                    arr[i] = v;
                    if(count === promises.length){
                        
                        resolve(arr)
                    }
                },r=>{
                    reject(r)
                })
            }
        })
    }
    static race(promises){
        return new Promise((resolve, reject)=>{
            for(let i = 0; i < promises.length;i++){
                promises[i].then(v=>{
                    resolve(v)
                },r=>{
                    reject(r)
                })
            }
        })
    }
}