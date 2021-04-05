    let canvas = document.getElementById('clock');
    let ctx = canvas.getContext('2d');
    let canvasW = ctx.canvas.width;
    let canvasH = ctx.canvas.height;
    //get a radius of circle
    let r = canvasW/2
    //draw a background
    function drawBackground(){
        ctx.save();
        //start point from x=r,y=r
        ctx.translate(r,r)
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
        ctx.closePath();
        ctx.stroke();

        //draw hours and minutes from 3 to 1 because the circle start from the direction of 3 o'clock
        let arrHours = ['3', '4', '5', '6', '7', '8','9', '10', '11', '12','1','2'];
        //arrHours in map
        arrHours.map((num,i)=>{
            //count each number in each arc degree
            let rad = 2*Math.PI/12*i;
            //there uses sin and cos so that we need to get x and y 
            let x = Math.cos(rad) * (r-30);
            let y = Math.sin(rad) * (r-30);

            //set up font style
            ctx.font = '18px Arial'
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            //text
            ctx.fillText(num,x,y);
        });

            //draw minutes
            for(let i = 0; i < 60; i++){
                let rad = 2*Math.PI/60*i;
                var x = Math.cos(rad) * (r - 18);
                var y = Math.sin(rad) * (r - 18);
                ctx.beginPath();
                //We should pay attention here, we have to recognise hours number and minutes
                if(i%5 == 0){
                    ctx.fillStyle = "#000"
                    ctx.arc(x,y,2,0,2*Math.PI,false);
                }else{
                    ctx.fillStyle = "#ccc"
                    ctx.arc(x,y,2,0,2*Math.PI,false);
                }
                ctx.fill();
            }
    };
    //draw hour movement 
    function hours(hour,minute){
        ctx.save();
        let rad = 2*Math.PI/12*hour;
        let mad = 2*Math.PI/12/60*minute;
        ctx.rotate(rad+mad);
        ctx.beginPath();
        ctx.lineWidth =6;
        ctx.lineCap = 'round';
        ctx.moveTo(0,10);
        ctx.lineTo(10,-r/2);
        ctx.stroke();
        ctx.restore();
    };

    //draw a minute movement
    function minute(minute){
        ctx.save();
        let rad = 2*Math.PI/60*minute;
        ctx.rotate(rad);
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.moveTo(0,10);
        ctx.lineTo(0,-r+60);
        ctx.stroke();
        ctx.restore();
    }
    //draw second movement
    function second(second){
        ctx.save();
        let rad = 2*Math.PI/60*second;
        ctx.rotate(rad);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.moveTo(-2,20);
        ctx.lineTo(2,20);
        ctx.lineTo(1,-r+20);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    //draw a dot 
    function dot(){
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(0,0,5,0,2*Math.PI,false);
        ctx.fill();
    }
    function movement(){
        ctx.clearRect(0,0,canvasW,canvasH);
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        drawBackground();
        hours(hour,min);
        minute(min);
        second(sec);
        dot();
        ctx.restore();
    };
//finally using a setInterval
setInterval(movement,1000);
