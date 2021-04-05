window.onload = function(){
    Game.exe();
};

let Game = {
    oWrap :document.getElementById('wrap'),
    exe(){
        this.createMap(this.level);
        document.getElementById('prev').onclick = this.prev;
        document.getElementById('prevLevel').onclick = ()=>{
            if(this.level > 0){
                this.level--;
                this.createMap(this.level);
            }else{
                alert('this is the first level');
            }
        };
        document.getElementById('nextLevel').onclick = ()=>{
            if(this.level < this.mapData.length-1){
                this.level++;
                this.createMap(this.level);
            }else{
                alert('this is the last level');
            }
        }
    },
    level:0,
    size:{
        x:16,
        y:16,
    },
    createMap(lv){
        this.oWrap.innerHTML = '';
        this.step.person = [];
        this.step.box = [];
        this.stepNum = 0;
        this.oWrap.style.cssText = `width:${this.size.x*35}px;height:${this.size.y*35}px;`
        let oDiv,oImg,oPerson;
        for(let i = 0; i<this.size.x * this.size.y;i++){
            switch(this.mapData[lv][i]){
                case 1:
                    appDiv.call(this,i)
                    oImg.src = 'img/wall.png';
                    oDiv.className = 'wall';
                    break;
                case 2:
                    appDiv.call(this,i)
                    oImg.src = 'img/box.png';
                    oDiv.className = 'box';
                    break;
                case 3:
                    appDiv.call(this,i)
                    oImg.src = 'img/ball.png';
                    oDiv.className = 'ball'; 
                    break;
                case 4:
                    appDiv.call(this,i)
                    oImg.src = 'img/down.png';
                    oDiv.className = 'person';
                    oPerson = oImg;                 
                    break;
            }
        };
        //function package appDiv
        function appDiv(i){
            var x = i%this.size.x;//when i = 70; 70%16 = 6
            var y = parseInt(i/this.size.y)//when i = 70; 70/16 = 4.375
            oDiv = document.createElement('div');
            oImg = new Image();
            oDiv.x = x;
            oDiv.y = y;
            oDiv.style.cssText = `left:${x*35}px; top:${y*35}px`
            oDiv.appendChild(oImg);
            this.oWrap.appendChild(oDiv);
        };
        this.controlPerson(oPerson)
    },
    step:{
        person:[

        ],
        box:[

        ],
    },
    controlPerson(Op){
        let oPersonMove = Op.parentNode;
        document.onkeydown = (ev)=>{
            ev = ev || window.event
            //console.log(e.keyCode);//left 37 up 38 right 39 down 40;
            var keycode = ev.keyCode;
           
            this.step.person[this.stepNum] = {};
            this.step.person[this.stepNum].src = oPersonMove.children[0].src;
            
            switch(keycode){
                case 37:
                    Op.src='img/left.png';
                    this.movePerson({x:-1},oPersonMove);
                    break;
                case 38:
                    Op.src='img/up.png';
                    this.movePerson({y:-1},oPersonMove);
                    break;
                case 39:
                    Op.src='img/right.png';
                    this.movePerson({x:1},oPersonMove);
                    break;
                case 40:
                    Op.src='img/down.png';
                    this.movePerson({y:1},oPersonMove);
                    break;
            }
        }
    },
    stepNum:0,
    prev(){
       var This = Game;
       var oPerson = This.getClass('person',This.oWrap)[0];
       var oBox = This.getClass('box',This.oWrap);
       var oBoxNow

       if(This.stepNum != 0){
           oPerson.x = This.step.person[This.stepNum -1].x;
           oPerson.y = This.step.person[This.stepNum -1].y;
           oPerson.style.left = oPerson.x * 35 +'px';
           oPerson.style.top = oPerson.y * 35 +'px';
           oPerson.children[0].src = This.step.person[This.stepNum -1].src;

           if(This.step.box[This.stepNum-1]){
               oBoxNow = oBox[This.step.box[This.stepNum -1].index];
               oBoxNow.x = This.step.box[This.stepNum -1].x;
               oBoxNow.y = This.step.box[This.stepNum -1].y;
               oBoxNow.style.left = oBoxNow.x *35 + 'px';
               oBoxNow.style.top = oBoxNow.y *35 + 'px';
           }
           This.stepNum --;
       }
    },
    movePerson(myJson,oParent) {
        
        var x = myJson.x || 0;
        var y = myJson.y || 0;
        var oBox = this.getClass('box',this.oWrap);
        
        if(this.mapData[this.level][(oParent.x+x)+(oParent.y+y)*this.size.y] != 1){
           
            this.step.person[this.stepNum].x = oParent.x;
            this.step.person[this.stepNum].y = oParent.y;

            oParent.x += x;
            oParent.y += y;
            oParent.style.left = `${oParent.x*35}px`;
            oParent.style.top = `${oParent.y*35}px`;
            oParent.style.zIndex = oParent.x + oParent.y*this.size.y;

            this.stepNum++;
            for(let i = 0; i < oBox.length; i++){
                
                if(oBox[i].x == oParent.x && oBox[i].y == oParent.y){
                    
                    if(this.mapData[this.level][(oBox[i].x+x)+(oBox[i].y+y)*this.size.y] != 1){

                        if(this.collision(oBox[i],x,y)){

                            this.step.box[this.stepNum -1]={};
                            this.step.box[this.stepNum -1].index = i;
                            this.step.box[this.stepNum -1].x = oBox[i].x;
                            this.step.box[this.stepNum -1].y = oBox[i].y;

                            oBox[i].x += x;
                            oBox[i].y += y;
                            oBox[i].style.left = `${oBox[i].x*35}px`;
                            oBox[i].style.top = `${oBox[i].y*35}px`;
                            oBox[i].style.zIndex = oBox[i].x + oBox[i].y*this.size.y;
                            this.pass();
                        }else{
                            oParent.x -= x;
                            oParent.y -= y;
                            oParent.style.left = `${oParent.x*35}px`;
                            oParent.style.top = `${oParent.y*35}px`;
                            oParent.style.zIndex = oParent.x + oParent.y*this.size.y;

                            this.stepNum--;
                            this.step.person.pop();
                        };
                    }else{
                        oParent.x -= x;
                        oParent.y -= y;
                        oParent.style.left = `${oParent.x*35}px`;
                        oParent.style.top = `${oParent.y*35}px`;
                        oParent.style.zIndex = oParent.x + oParent.y*this.size.y;

                        this.stepNum--;
                        this.step.person.pop();
                    }
                }else{}
            }

        }else{};
    },
    collision(obj,x,y){
        var oBox = this.getClass('box',this.oWrap);
        for(var i = 0; i < oBox.length; i++){
            if(oBox[i].x === obj.x+x && oBox[i].y === obj.y+y){
                return false;
            }
        }
        return true;
    },
    pass(){
        var oBox = this.getClass('box',this.oWrap);
        var oBall = this.getClass('ball',this.oWrap);
        var passNum = 0;
        for(var i = 0; i < oBox.length;i++){

            for(var j = 0; j < oBall.length;j++){
                
                if(oBox[i].x === oBall[j].x && oBox[i].y === oBall[j].y){
                    passNum++;
                }
            }
            if(passNum === oBall.length){
                alert('you are passed');
                this.level++;
                this.createMap(this.level);
            }
        }
    },
    getClass(cName,obj){
        obj = obj || document;
        if(obj.getElementsByClassName){
            return obj.getElementsByClassName(cName);
        }
    },
    mapData:[
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,
            0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,
            0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,
            0,0,0,0,1,1,1,2,0,2,3,1,0,0,0,0,
            0,0,0,0,1,3,0,2,4,1,1,1,0,0,0,0,
            0,0,0,0,1,1,1,1,2,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ],
        [   
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,
            0,0,0,0,1,4,0,0,1,0,0,0,0,0,0,0,
            0,0,0,0,1,0,2,2,1,0,1,1,1,0,0,0,
            0,0,0,0,1,0,2,0,1,0,1,3,1,0,0,0,
            0,0,0,0,1,1,1,0,1,1,1,3,1,0,0,0,
            0,0,0,0,0,1,1,0,0,0,0,3,1,0,0,0,
            0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,
            0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,
            0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ],
        //3
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,
            0,0,0,0,0,1,0,0,0,1,3,0,1,0,0,0,
            0,0,0,0,1,1,0,0,0,0,3,3,1,0,0,0,
            0,0,0,0,1,0,0,2,0,1,5,3,1,0,0,0,
            0,0,0,1,1,0,1,1,2,1,0,1,1,0,0,0,
            0,0,0,1,0,0,0,2,0,0,2,0,1,0,0,0,
            0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,
            0,0,0,1,1,1,1,1,1,1,4,0,1,0,0,0,
            0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ],
        //4
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,
            0,0,0,0,1,1,1,1,1,1,4,1,1,0,0,0,
            0,0,0,0,1,3,3,3,3,1,2,0,1,1,0,0,
            0,0,0,0,1,3,3,3,3,1,0,2,0,1,0,0,
            0,0,0,0,1,3,3,3,3,0,2,0,0,1,0,0,
            0,0,0,0,1,0,3,3,3,1,0,0,0,1,0,0,
            1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,
            1,0,2,0,2,0,0,0,2,0,0,1,0,0,1,0,
            1,0,0,0,0,2,2,0,0,0,2,0,2,0,1,0,
            1,1,1,0,2,0,2,0,2,0,0,1,1,1,1,0,
            0,0,1,1,0,0,0,2,0,2,0,1,0,0,0,0,
            0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,
            0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ],
        [
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,
            0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,
            0,1,0,0,0,3,1,1,1,0,1,0,0,0,0,0,
            0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,
            0,1,0,1,0,2,0,2,1,3,0,1,0,0,0,0,
            0,1,0,1,0,0,5,0,0,1,0,1,0,0,0,0,
            0,1,0,3,1,2,0,2,0,1,0,1,0,0,0,0,
            0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,
            0,0,1,0,1,1,1,3,0,0,0,0,4,1,0,0,
            0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,
            0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]

    ],
      
};