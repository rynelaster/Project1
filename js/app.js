const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');

let cw; //cell width

let food;

let score;

// let snakeArray;


const snake = {
    body: {},
    direction: "",
    snakeArray: [],


    // (eng) set up snake size and location 
    // (js) making this.body be an object with specific properties/values
    initializesnake: function(){
        this.body = {

            x: 58, 
            y: 300, 
            r: 10, 
            e: 0
        }

        // this loop creates an array of 16 objects
        let xValue = 200;

        for(i = 0; i < 16; i++) {
            //1. create object
            let snakeObj = {

                x: xValue, 
                y: 300, 
                r: 10, 
                e: 0

            }
            // 2. push to array
            this.snakeArray.push(snakeObj);

            //3. make it so that the next ball is 10 to the left
            xValue = xValue - 10;

        }
    },

    drawBody: function() {
        for(i = 0; i < this.snakeArray.length; i++){
            ctx.beginPath();
            ctx.arc(this.snakeArray[i].x, this.snakeArray[i].y, this.snakeArray[i].r, this.snakeArray[i].e, Math.PI*2)
            // ctx.strokeStyle = "green";
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();
        }

    },



    move: function(){



        if(snake.direction === 'right'){
         
            //1.  unshift new ball (xval = xval + 10)
            this.snakeArray.unshift({
                x: this.snakeArray[0].x + 10,
                y: this.snakeArray[0].y,
                r: 10,
                e: 0
            })
         
            //2. pop 
            this.snakeArray.pop();

        }else if(snake.direction === "left"){

            this.snakeArray.unshift({
                x: this.snakeArray[0].x - 10,
                y: this.snakeArray[0].y,
                r: 10,
                e: 0
            })
         
            //2. pop 
            this.snakeArray.pop();

        }else if(snake.direction === "up"){

            this.snakeArray.unshift({
                x: this.snakeArray[0].x,
                y: this.snakeArray[0].y - 10,
                r: 10,
                e: 0
            })
         
            //2. pop 
            this.snakeArray.pop();

        }else if(snake.direction === "down"){
                        
            this.snakeArray.unshift({
                x: this.snakeArray[0].x,
                y: this.snakeArray[0].y + 10,
                r: 10,
                e: 0
            })
         
            //2. pop 
            this.snakeArray.pop();

        }






        // if(snake.direction === 'right'){
        //     if(snake.body.x + 10 <= 600){
        //         // move snake right along x axis
        //     snake.body = {x: snake.body.x + 10, y: snake.body.y, r: 10, e:0}
        //     }
            
        // }else if(snake.direction === "left"){
        //     // move left from x axis
        //     snake.body = {x: snake.body.x - 10, y: snake.body.y, r: 10, e:0}
        // }else if(snake.direction === "up"){
        //     snake.body = {x: snake.body.x, y: snake.body.y - 10, r: 10, e:0}
        // }else if(snake.direction === "down"){
        //     snake.body = {x: snake.body.x, y: snake.body.y + 10, r: 10, e:0}
        // }
    }
};





// keyboard key code: left 37; up 38; right 39; down 40
document.addEventListener('keydown', movesnakeAround)



function movesnakeAround(event) {

    let key = event.which;
    
    if(key === 39){
        // set direction property of snake object to "right"
        snake.direction = "right";

    }else if (key === 37){
        snake.direction = "left";

    }else if (key === 38){
        snake.direction = "up";

    }else if (key === 40){
        snake.direction = "down";

    }
    // erase the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // this calls the 'move' method of the snake object
    snake.move();

    // this calls the 'drawBody' method of the snake object
    snake.drawBody();
    console.log(key);

};







// let animateCanvas = function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     snake.drawBody();
    //requestAnimationFrame?
//     window.requestAnimatedFrame(animateCanvas)
// }


// snake.move();



snake.initializesnake();
snake.drawBody();








