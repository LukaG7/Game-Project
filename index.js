const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d")
window.onload = () => {
    startGame();
  };

// function draw() {
//     const canvas = document.getElementById("game");
//     const ctx = canvas.getContext("2d");

//     ctx.fillStyle = 'rgb(73, 217, 243)';
//     ctx.fillRect(3, 0, 8, 80);
    
//     ctx.fillStyle = 'rgb(236, 79, 210)';
//     ctx.fillRect(990, 0, 8, 80);
// }

// draw()

class Player { constructor(x, y, width, height, ctx, color){
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height,
    this.ctx = ctx,
    this.color = color
}
draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
}

const playerOne = new Player(3, 200, 8, 80, ctx, 'rgb(73, 217, 243)')
playerOne.draw()

const playerTwo = new Player(990, 200, 8, 80, ctx, 'rgb(236, 79, 210)')
playerTwo.draw()

const ballTwo = {
    x: 500,
    y: 300,
    width: 10,
    height: 10,
    vx: Math.random() < 0.5 ? -1 : 1,
    vy: Math.random() < 0.5 ? -1 : 1,
    draw(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height, );
    },

    velocity(){
        ballTwo.x += ballTwo.vx;
        ballTwo.y += ballTwo.vy;
    },

    collision(){
        if(ballTwo.x + ballTwo.width + ballTwo.vx >= canvas.width){
            ballTwo.vx--
            ballTwo.vy=0 
        } else if 
            (ballTwo.y + ballTwo.height + ballTwo.vy >= canvas.height) {
                ballTwo.vy-=2
            }
            // else if(ballTwo.y + ballTwo.height + ballTwo.vy <= canvas.height){
            // ballTwo.vy+=2
        else if (ballTwo.x + ballTwo.width + ballTwo.vx <= 10){
            ballTwo.vx++
         }


    },

    stopVelocity(){
        
    }

    // moveLeft(){
    //     ballTwo.x 
    // }
}

function startGame() {
    ballTwo.draw()
    update()
}


function update() {
    ballTwo.velocity();
    ctx.clearRect(0,0, canvas.width, canvas.height)
    playerOne.draw();
    playerTwo.draw();
    ballTwo.draw();
    ballTwo.collision();
    requestAnimationFrame(update);
}


window.addEventListener('keydown', (event) => {
    console.log(event.key)
    switch(event.key){
        case 'w': ctx.clearRect(0,0, 1000, 500); playerOne.y-=20; playerOne.draw(); playerTwo.draw(); ball(); console.log(canvas.height, playerOne.y); if(playerOne.y <= 0){return playerOne.y = 20};
        break;
        case 's': ctx.clearRect(0,0, 1000, 500); playerOne.y+=20; playerOne.draw(); playerTwo.draw(); ball(); if(playerOne.y >= 420){return playerOne.y = 400}
        break;
        case 'ArrowUp': ctx.clearRect(0,0, 1000, 500); playerTwo.y-=20; playerTwo.draw(); playerOne.draw(); ball(); if(playerTwo.y <= 0){return playerTwo.y = 20};
        break;
        case 'ArrowDown': ctx.clearRect(0,0, 1000, 500); playerTwo.y+=20; playerTwo.draw(); playerOne.draw(); ball();console.log(canvas.height, playerTwo.y); if(playerTwo.y >= 420){return playerTwo.y = 400}
        break;
    } 
})

