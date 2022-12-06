backgroundCanvas = document.getElementById('background-canvas');
ctx = backgroundCanvas.getContext('2d');

mainCanvas = document.getElementById('main-canvas');
mainCtx = mainCanvas.getContext('2d');

const charOneDefault = new Image();
charOneDefault.src = 'images/char-1-default.png';
const charOneUp = new Image();
charOneUp.src = 'images/char-1-move-up.png';
const charOneDown = new Image();
charOneDown.src = 'images/char-1-move-down.png';
const charOneRight = new Image();
charOneRight.src = 'images/char-1-move-right.png';
const charOneLeft = new Image();
charOneLeft.src = 'images/char-1-move-left.png';

const charTwoDefault = new Image();
charTwoDefault.src = 'images/char-2-default.png';
const charTwoUp = new Image();
charTwoUp.src = 'images/char-2-move-up.png';
const charTwoDown = new Image();
charTwoDown.src = 'images/char-2-move-down.png';
const charTwoRight = new Image();
charTwoRight.src = 'images/char-2-move-right.png';
const charTwoLeft = new Image();
charTwoLeft.src = 'images/char-2-move-left.png';


let charOneMoves1 = [];
let charOneMoves2 = [];
let charTwoMoves = [];

let score = 0;
let highScore = 0;


const color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
    rgb: function () {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
      }
  };


  class Dancer {
    constructor(x, y, img){
        this.x = x;
        this.y = y;
        this.img = img;
    }

    draw(){
    mainCtx.clearRect(this.x, this.y, 170, 170);
    mainCtx.drawImage(this.img, this.x, this.y, 150, 150);
    }

    dance(dir){
    mainCtx.clearRect(this.x, this.y, 170, 170);
    mainCtx.drawImage(dir, this.x, this.y, 150, 150);
    setTimeout(() => {this.draw();}, 1000)
    }

  }

  let dancerBoi = new Dancer(100, 400, charOneDefault);

  let computer = new Dancer(400, 400, charTwoDefault);
  
  function animateCanvas() {
    let num = 0;
    color.red = (color.red + (num += 1)) % 255;
    color.blue = (color.blue + (num += 1)) % 255;
    color.green = (color.green + (num += 1)) % 255;

  function loopDancefloor(tileNum){

    for(let i = 0; i <= 640; i+= 80){
        ctx.clearRect(i, i + tileNum, 80, 80);
        ctx.fillStyle = color.rgb();
        ctx.fillRect(i, i + tileNum, 80, 80);
    }
  }
    loopDancefloor(0);
    loopDancefloor(160);
    loopDancefloor(320);
    loopDancefloor(480);
    loopDancefloor(-160);
    loopDancefloor(-320);
    loopDancefloor(-480);

    requestAnimationFrame(animateCanvas);
} 


function computerMoves(){
    let danceNum = Math.floor(Math.random() * 4) + 1;
    charTwoMoves.push(danceNum);
    charTwoMoves.forEach(move => {
        if(move == 1){
           computer.dance(charTwoUp)
        }
        if(move == 2){
            computer.dance(charTwoDown)
        }
        if(move == 3){
            computer.dance(charTwoRight)
        }
        if(move == 4){
            computer.dance(charTwoLeft)
        }
    })
        
        console.log(charTwoMoves);
    }


    function whoops(){
            // if(+charOneMoves1.slice(-1) !== +charTwoMoves.slice(-1)){
            //     gameOver();
          
            //     // document.querySelector('#game-boards').setAttribute("style", "visibility: hidden;");
            //     // document.querySelector('.game-intro').setAttribute("style", "background-color: black; width: 640px; height: 640px; visibility: visible;");
            //     console.log("BIFFED")
            // } else {
                score += 10;
                if(score > highScore){
                highScore += 10;
                }
                updateMainCanvas();
            }
    // }
  
  function updateMainCanvas() {
    updateScore();
    setTimeout(() => {computerMoves()}, 1000);
    console.log(charOneMoves1, charOneMoves2)
  }

  function updateScore() {
    mainCtx.clearRect(0, 0, 500, 400);
    mainCtx.font = '40px serif';
    mainCtx.fillStyle = 'white';
    mainCtx.fillText(`Score: ${score}`, 253, 100);
    console.log(score)
  }

  function gameOver(){
    mainCtx.clearRect(0, 0, 500, 400);
    mainCtx.font = '50px serif';
    mainCtx.fillStyle = 'white';
    mainCtx.fillText(`GAME OVER!`, 165, 100);
    mainCtx.font = '40px serif';
    mainCtx.fillText(` Final Score: ${score}`, 197, 150);
    mainCtx.fillText(` High Score: ${highScore}`, 198, 200);
    mainCtx.font = '30px serif';
    mainCtx.fillText(`  Hit Spacebar`, 227, 350);
    console.log(score)
  }

document.addEventListener("keydown", e => {
    switch (e.key){
    case 'ArrowUp':
        dancerBoi.dance(charOneUp);
        charOneMoves1.push(1);
        break;
    case 'ArrowDown':
        dancerBoi.dance(charOneDown);
        charOneMoves1.push(2);
        break;
    case 'ArrowRight':
        dancerBoi.dance(charOneRight);
        charOneMoves1.push(3);
        break;
    case 'ArrowLeft':
        dancerBoi.dance(charOneLeft);
        charOneMoves1.push(4);
        break;
    }
    if(charOneMoves1.length > charOneMoves2.length){
        for(let i = 0; i<=charOneMoves1.length - 1; i++){
            if(charOneMoves1[i] === charOneMoves2[i]){
                charOneMoves2.push(charOneMoves1[i]);

            }
            // let newNew = charOneMoves1.slice(-1);
            whoops();
        }
        
    }
    console.log(charOneMoves1)
});
document.addEventListener("keydown", e => {
    if(e.key === ' '){
        startGame();
    }
});

// document.addEventListener("load", () => {
//     dancerBoi.draw();
// })

function startGame(){
    animateCanvas();
    document.querySelector('.game-intro').setAttribute("style", "visibility: hidden;");
    document.querySelector('#game-boards').removeAttribute("style");
    dancerBoi.draw();
    computer.draw();
    charTwoMoves = [];
    charOneMoves1 = [];
    score = 0;
    updateScore();
    updateMainCanvas();
}
document.getElementById('start-button').onclick = () => {
    startGame();
}