const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');


const hero = {
    body: {},
    direction: "",

    // (eng) set up hero size and location 
    // (js) making this.body be an object with specific properties/values
    initializeHero: function(){
        this.body = {
            x: 58, 
            y: 37, 
            r: 12.5, 
            e: 0
        }
    },

    drawBody: function() {
        ctx.beginPath();
        ctx.arc(hero.body.x, hero.body.y, hero.body.r, hero.body.e, Math.PI*2)
        // ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    },
    
    move: function(){
        if(hero.direction === 'right'){
            if(hero.body.x + 10 < 400){
                // move hero right along x axis
            hero.body = {x: hero.body.x + 10, y: hero.body.y, r: 12.5, e:0}
            }
            
        }else if(hero.direction === "left"){
            // move left from x axis
            hero.body = {x: hero.body.x - 10, y: hero.body.y, r: 12.5, e:0}
        }else if(hero.direction === "up"){
            hero.body = {x: hero.body.x, y: hero.body.y - 10, r: 12.5, e:0}
        }else if(hero.direction === "down"){
            hero.body = {x: hero.body.x, y: hero.body.y + 10, r: 12.5, e:0}
        }
    }
};


document.addEventListener('keydown', moveHeroAround)



function moveHeroAround(event) {

    let key = event.which;
    
    if(key === 39){
        // set direction property of hero object to "right"
        hero.direction = "right";

    }else if (key === 37){
        hero.direction = "left";

    }else if (key === 38){
        hero.direction = "up";

    }else if (key === 40){
        hero.direction = "down";

    }
    // erase the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // this calls the 'move' method of the hero object
    hero.move();

    // this calls the 'drawBody' method of the hero object
    hero.drawBody();
    console.log(key);

}





// let animateCanvas = function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     hero.drawBody();
    //requestAnimationFrame?
//     window.requestAnimatedFrame(animateCanvas)
// }


// hero.move();



hero.initializeHero();
hero.drawBody();








