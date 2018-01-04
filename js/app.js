const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');

const w = $("#my-canvas").width();
const h = $("#my-canvas").height();
const cw = 10;


const snakesize = 20;

const snake = {

    body: {},
    direction: "",
    snakeArray: [],


    // (eng) set up snake size and location 
    // (js) making this.body be an object with specific properties/values
    initializesnake: function(){
        // this was the dot
        // this.body = {

        //     x: 58, 
        //     y: 300, 
        //     r: 10, 
        //     e: 0
        // }

// A method is a function that is a property of an object

        // CREATE SNAKE 
        // this loop creates an array of 16 objects
        let xValue = 200;

        for(i = 0; i < snakesize; i++) {
            //1. create object
            let snakeObj = {

                x: xValue, 
                y: 300, 
                r: 10, 
                e: 0

            }
            // 2. push snake obj ontp snake array
            this.snakeArray.push(snakeObj);

            //3. make it so that the next ball is 10 to the left
            xValue = xValue - 10;

        }
    },

    drawBody: function() {
        console.log("snake.drawbody called")
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
        console.log("move called")


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



    }, 
    collisionDetection: function(){
        console.log("collisionDetection called");

        // 1. if you hit the wall you di

        if(this.snakeArray[0].x > 600 || 
            this.snakeArray[0].y > 600 || 
            this.snakeArray[0].x < 0 || 
            this.snakeArray[0].y < 0) {
            // else if (this.snake[0].x == this.snake[0].y) {
            // die()

            console.log("hit the wall");

        }


        // 2. if you eat yourself you die

        for(i = 1; i < this.snakeArray.length; i++) {

            console.log(this.snakeArray[0].x)

            // if the first element touches any other element, dead
            if(this.snakeArray[0].x === this.snakeArray[i].x &&
                this.snakeArray[0].y === this.snakeArray[i].y) {

                console.log("you ate yo self")
            }
    
        }


        // 3. Is the head of the snake eating the food
        let s = this.snakeArray[0];
        let f = game.foodArray[0];

        if(s.x + 10 > f.x &&
            s.y + 10 > f.y &&
            s.x - 10 < f.x + 10 &&
            s.y - 10 < f.y + 10) {
        // if(head.x < food.x + food.w &&
        //     foox.x < 
            // the dot in the middle of the first element in the snake array is to the left of
            // the dot at the upper left corner of food

        

            // console.log(this);
            console.log('you at food!');


        }

   } // end collisionDetection()
    
};           






// const createFood = function(){
//     food {
//         // generate random numbers
//         x: Math.floor((Math.random() * 30) + 1),
//         y: Math.floor((Math.random() * 30) + 1)
//     }
// }

const game = {
    foodArray: [],
    score: 0,
    gameOver: false,
    foodLocation: [],

    createFood: function() {
        //1. CREATE food
        let food = {
            // generate random numbers
            x: Math.floor(Math.random() * w),
            y: Math.floor(Math.random() * h),
            h: 10, 
            w: 10,
        }
        // add food to foodArray
        this.foodArray.push(food);

        // 3. draw the food
    },

    drawFood: function(){
        // get the food
        ctx.fillStyle = "black";
        ctx.fillRect(this.foodArray[0].x, this.foodArray[0].y, this.foodArray[0].h, this.foodArray[0].w);

        // use the food to draw rectangle on canvas
    }
};


// keyboard key code: left 37; up 38; right 39; down 40
document.addEventListener('keydown', movesnakeAround);
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
    game.drawFood();
    snake.collisionDetection();


    // console.log(key);

};


// let animateCanvas = function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     snake.drawBody();
    //requestAnimationFrame?
//     window.requestAnimatedFrame(animateCanvas)
// }


// snake.move();

// THIS CODE IS RUN WHEN THE PAGE LOADS

snake.initializesnake();
snake.drawBody();
game.createFood();    
game.drawFood();







