const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d")

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

function ball() {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = 'white';
    ctx.fillRect(500, 250, 10, 10)

}

ball()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'w': ctx.clearRect(0,0, 1000, 500); playerOne.y-=20; playerOne.draw(); playerTwo.draw(); ball();
        break;
        case 's': ctx.clearRect(0,0, 1000, 500); playerOne.y+=20; playerOne.draw(); playerTwo.draw(); ball();
        break;
        case 'ArrowUp': ctx.clearRect(0,0, 1000, 500); playerTwo.y-=20; playerTwo.draw(); playerOne.draw(); ball();
        break;
        case 'ArrowDown': ctx.clearRect(0,0, 1000, 500); playerTwo.y+=20; playerTwo.draw(); playerOne.draw(); ball();
        break;
    } 
})


