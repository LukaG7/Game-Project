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
        if(ballTwo.y <= 0) {
            //checks for top of screen
            ballTwo.vy = -ballTwo.vy
        }
        if(ballTwo.y + ballTwo.height >= canvas.height){
            //checks for bottom of screen
            ballTwo.vy = -ballTwo.vy
        }
        if(ballTwo.x <= 0){
            //checks for left side of screen
            console.log('blue player loses');
            let myScore = document.querySelector('#score2');
            myScore.textContent = Number(myScore.textContent) +1
            ballTwo.vx = Math.random() < 0.5 ? -1 : 1;
            ballTwo.vy = Math.random() < 0.5 ? -1 : 1;
            ballTwo.x = 500;
            ballTwo.y = 300;
        }
        if(ballTwo.x + ballTwo.width >= canvas.width){
            //checks for right side of screen
            console.log('pink player loses');
            let myScore = document.querySelector('#score1');
            myScore.textContent = Number(myScore.textContent) +1
            ballTwo.vx = Math.random() < 0.5 ? -1 : 1;
            ballTwo.vy = Math.random() < 0.5 ? -1 : 1;
            ballTwo.x = 500;
            ballTwo.y = 300;
        }
        if (playerOne.x < ballTwo.x + ballTwo.width &&
            playerOne.x + playerOne.width > ballTwo.x &&
            playerOne.y < ballTwo.y + ballTwo.height &&
            playerOne.height + playerOne.y > ballTwo.y){
          // Collision detected!
          console.log('Blue Player Collision')
          ballTwo.vx = -ballTwo.vx
          
        }
        if (playerTwo.x < ballTwo.x + ballTwo.width &&
            playerTwo.x + playerTwo.width > ballTwo.x &&
            playerTwo.y < ballTwo.y + ballTwo.height &&
            playerTwo.height + playerTwo.y > ballTwo.y){
          // Collision detected!
          console.log('Pink Player Collision')
          ballTwo.vx = -ballTwo.vx
          
        }
      
    },

    // collision(){
    //     if(ballTwo.x + ballTwo.width + ballTwo.vx >= canvas.width){
    //         ballTwo.vx--
    //         ballTwo.vy=0 
    //     } else if 
    //         (ballTwo.y + ballTwo.height + ballTwo.vy >= canvas.height) {
    //             ballTwo.vy-=2
    //         }
    //         // else if(ballTwo.y + ballTwo.height + ballTwo.vy <= canvas.height){
    //         // ballTwo.vy+=2
    //     else if (ballTwo.x + ballTwo.width + ballTwo.vx <= 10){
    //         ballTwo.vx++
    //      }


    // },

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
        case 'w': ctx.clearRect(0,0, 1000, 500); playerOne.y-=10; playerOne.draw(); playerTwo.draw();  console.log(canvas.height, playerOne.y); if(playerOne.y <= 0){return playerOne.y = 0};
        break;
        case 's': ctx.clearRect(0,0, 1000, 500); playerOne.y+=10; playerOne.draw(); playerTwo.draw();  if(playerOne.y + playerOne.height >= 500){return playerOne.y = 420}
        break;
        case 'ArrowUp': ctx.clearRect(0,0, 1000, 500); playerTwo.y-=10; playerTwo.draw(); playerOne.draw();  if(playerTwo.y <= 0){return playerTwo.y = 0};
        break;
        case 'ArrowDown': ctx.clearRect(0,0, 1000, 500); playerTwo.y+=10; playerTwo.draw(); playerOne.draw();console.log(canvas.height, playerTwo.y); if(playerTwo.y + playerTwo.height >= 500){return playerTwo.y = 420}
        break;
    } 
})

