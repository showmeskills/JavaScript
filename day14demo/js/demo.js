window.onload = function(){
    calculator.eve()
}
let calculator = {
    container: document.getElementById('container'),
    wrap:document.createElement('div'),
    eve(){
        this.container.appendChild(this.wrap)
        this.wrap.className = 'wrap';
        this.wrap.style.width = this.size.w + 'px';
        this.wrap.style.height = this.size.h + 'px';
        this.header();
        this.bodi(this.wrap);
    },
    currentNumber:'',
    previousNumber:'',
    operatorClick:null,
    flag:true,
    size:{
        w:500,
        h:800
    },
    headerSize:{
        h:200,
    },
    bodiSize:{
        h:600
    },
    numberSize:{
        x:4,
        y:5
    },
    header(){
        let header = document.createElement('div')
        let wrap = document.getElementsByClassName('wrap')[0]
        header.className = 'header';
        wrap.appendChild(header)
        header.style.height = this.headerSize.h + 'px';
        header.innerHTML = ''
    },
    bodi(wrap){
        let bodi = document.createElement('div')
        bodi.className = 'bodi';
        wrap.appendChild(bodi);
        bodi.style.height = this.bodiSize.h + 'px';
        this.btn(bodi)
    },
    btn(bodi){
        let ul = document.createElement('ul');
        ul.className = 'btn_list';
        bodi.appendChild(ul);
        for(let i = 0; i < this.array.all.length; i++){
            let ul = document.getElementsByClassName('btn_list')[0];
            let oBtn = document.createElement('li');
            oBtn.className = 'oBtn';
            ul.appendChild(oBtn);
            oBtn.style.width = `${this.numberSize.x*26}px`
            oBtn.style.height = `${this.numberSize.y*20}px`
            oBtn.innerHTML = this.array.all[i]
        }
        document.getElementsByClassName('oBtn')[16].style = `width:${this.numberSize.x*26*2}px; border-radius:40%`;
        this.operation();
    },
    operation(){
        let oBtn = document.getElementsByClassName('oBtn');
        let This = this
            //clear btn
            oBtn[0].onclick = ()=>{this.clearBtn()}
            //sign btn
            oBtn[1].onclick = ()=>{this.signBtn()};
            //precentage
            oBtn[2].onclick = ()=>{this.precentage()};
            //numberType
            oBtn[4].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[5].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[6].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[8].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[9].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[10].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[12].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[13].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[14].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            oBtn[16].onclick = function(){
                This.numberType(this.innerHTML)       
            }
            //dot
            oBtn[17].onclick = ()=>{this.dot()}
            //dividen
            oBtn[3].onclick = ()=>{this.dividen()}
            //times
            oBtn[7].onclick = ()=>{this.times()}
            //minus
            oBtn[11].onclick = ()=>{this.minus()}
            //add
            oBtn[15].onclick = ()=>{this.add()}
            //equal
            oBtn[18].onclick = ()=>{this.equal()}
    },
    clearBtn(){
        document.getElementsByClassName('header')[0].innerHTML = '';
    },
    signBtn(){
        let header = document.getElementsByClassName('header')[0];
        header.innerHTML = header.innerHTML.charAt(0) === '-' ?
        header.innerHTML.slice(1) : `-${header.innerHTML}`
    },
    precentage(){
        document.getElementsByClassName('header')[0].innerHTML = `${parseFloat(document.getElementsByClassName('header')[0].innerHTML) /100}`
    },
    numberType(number){
        let header = document.getElementsByClassName('header')[0];
        if(this.operatorClick){
            header.innerHTML = '';
            this.operatorClick = false;
        }
        header.innerHTML = `${header.innerHTML}${number}`
    },
    dot(){
        let header = document.getElementsByClassName('header')[0];
        if(header.innerHTML.indexOf('.') === -1){
            header.append('.');
        }
    },
    dividen(){
        this.operator=(a,b)=>a / b;
        this.run()
    },
    times(){
        this.operator=(a,b)=>a * b;
       this.run()
    },
    minus(){
        this.operator=(a,b)=>a - b;
        this.run()
    },
    add(){
        this.operator=(a,b)=>a + b;
        this.run()
    },
    equal(){
        let header = document.getElementsByClassName('header')[0];
        this.currentNumber = Number(header.innerHTML)
        if(this.flag){
            this.operatorClick = true;
            header.innerHTML = `${
                this.operator(
                  parseFloat(this.previousNumber),
                  parseFloat(this.currentNumber)
              )}`
        }
   },
   operator(){},
   run(){
    let header = document.getElementsByClassName('header')[0];
    this.previousNumber = Number(header.innerHTML)
    this.operatorClick = true;
    this.flag = true;
   },
    array:{
        all:[
            'C','+/-','%','/','7','8','9',
            'X','4','5','6','-','1','2','3',
            '+','0','.','='
        ]
    }
}