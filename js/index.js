backgroundCanvas = document.getElementById('background-canvas');
ctx = backgroundCanvas.getContext('2d');

mainCanvas = document.getElementById('main-canvas');
mainCtx = mainCanvas.getContext('2d');

const music = document.querySelector("#my-music");

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

const speakerLeft = new Image();
speakerLeft.src = 'images/loudspeaker-left.png'
const speakerRight = new Image();
speakerRight.src = 'images/loudspeaker-right.png'

let charOneMoves = [];
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
    setTimeout(() => {this.draw();}, 500)
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

let size = 170;


function animateSpeakers(){
    mainCtx.clearRect(10, 10, 220, 220);
    mainCtx.clearRect(455, 10, 220, 220);
    mainCtx.drawImage(speakerLeft, 10, 10, size, size);
    mainCtx.drawImage(speakerRight, 455, 10, size, size);
    size += 2;
    if(size == 180){
        size = 170;
    }

    // function boom(){
    //     size = 210;
    //     requestAnimationFrame(boom);
    // }

    requestAnimationFrame(animateSpeakers);
}





const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

const computerMoves = async () => {
    let danceNum = Math.floor(Math.random() * 4) + 1;
    charTwoMoves.push(danceNum);
    for(let i = 0; i<charTwoMoves.length; i++){
        if(charTwoMoves[i] === 1){
            await sleep(500)
            computer.dance(charTwoUp)
        }
        if(charTwoMoves[i] === 2){
            await sleep(500)
            computer.dance(charTwoDown)
        }
        if(charTwoMoves[i] === 3){
            await sleep(500)
            computer.dance(charTwoRight)
        }
        if(charTwoMoves[i] === 4){
            await sleep(500)
            computer.dance(charTwoLeft)
        }
    }
        console.log(charTwoMoves);
    }


    function whoops(){
                score += 10;
                if(score > highScore){
                highScore += 10;
                }
                updateMainCanvas();
            }
  
  function updateMainCanvas() {
    updateScore();
    setTimeout(() => {computerMoves()}, 500);
    charOneMoves = [];
  }

  function updateScore() {
    mainCtx.clearRect(0, 0, 500, 400);
    mainCtx.font = '40px serif';
    mainCtx.fillStyle = 'white';
    mainCtx.fillText(`Score: ${score}`, 253, 100);
    console.log(score)
  }

  function checkArrays(a, b) {
      return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
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
        charOneMoves.push(1);
        break;
    case 'ArrowDown':
        dancerBoi.dance(charOneDown);
        charOneMoves.push(2);
        break;
    case 'ArrowRight':
        dancerBoi.dance(charOneRight);
        charOneMoves.push(3);
        break;
    case 'ArrowLeft':
        dancerBoi.dance(charOneLeft);
        charOneMoves.push(4);
        break;
    }
    if(charOneMoves.length === charTwoMoves.length){
    if(checkArrays(charOneMoves, charTwoMoves) == false){
        gameOver()
    } else {
        whoops();
    }
    }
    
});
document.addEventListener("keydown", e => {
    if(e.key === ' '){
        startGame();
    }
    if(e.key === "m"){
        music.muted = !music.muted;
        // if(music.play()){
        //     music.pause()
        // }
        // if(music.pause()) {
        //     music.play();
        // }
    }
});

// document.addEventListener("load", () => {
//     dancerBoi.draw();
// })

function startGame(){
    animateCanvas();
    document.querySelector('.game-intro').setAttribute("style", "visibility: hidden;");
    document.querySelector('#game-boards').removeAttribute("style");
    music.play();
    dancerBoi.draw();
    computer.draw();
    charTwoMoves = [];
    charOneMoves = [];
    score = 0;
    updateScore();
    updateMainCanvas();
}
document.getElementById('start-button').onclick = () => {
    animateSpeakers();
    startGame();
}