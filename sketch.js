var currentturn = "o";
var didSomeoneWin = false;
var symbollocationx = [166, 500, 833, 166, 500, 833, 166, 500, 833];
var symbollocationy = [833, 833, 833, 500, 500, 500, 166, 166, 166];
var winningLetter = "idkyet";
var winningPositions = [0, 0, 0];
var squares = [
  "blank",
  "blank",
  "blank",
  "blank",
  "blank",
  "blank",
  "blank",
  "blank",
  "blank",
];

function setup() {
  createCanvas(1500, 1000);
}

function draw() {
  background(255);
  square(7.5, 0, 990);
  line(333, 0, 333, 1000);
  line(666, 0, 666, 1000);
  line(0, 333, 1000, 333);
  line(0, 666, 1000, 666);
  strokeWeight(15);
  for (let i = 0; i < squares.length; i++) {
    if(squares[i] == "o") {
        circle(symbollocationx[i], symbollocationy[i], 200);
        noFill();
    }
    if(squares[i] == "x"){
      line(symbollocationx[i] - 100, symbollocationy[i] + 100, symbollocationx[i] + 100, symbollocationy[i] - 100);
      line(symbollocationx[i] - 100, symbollocationy[i] - 100, symbollocationx[i] + 100, symbollocationy[i] + 100);
    }
    if((i == 0 || i == 3 || i == 6) && squares[i] == squares[i + 1] && squares[i + 1] == squares[i + 2] && squares[i] != "blank"){
      line(0, 833 - i / 3 * 333, 1000, 833 - i / 3 * 333);
      winningLetter = squares[i];
      console.log(winningLetter);
      didSomeoneWin = true;
    }
    if(i > 5 && squares[i] == squares[i - 3] && squares[i] == squares[i - 6] && squares[i] != "blank"){
      if(i == 6){
        line(166, 0, 166, 1000);
      }
      if(i == 7){
        line(500, 0, 500, 1000);
      }
      if(i == 8){
        line(833, 0, 833, 1000);
      }
      winningLetter = squares[i];
      console.log(winningLetter);
      didSomeoneWin = true;
    }
    if(i == 6 && squares[i] == squares[i - 2] && squares[i] == squares[i - 4] && squares[i] != "blank" ){
      line(0, 0, 1000, 1000);
      winningLetter = squares[i];
      console.log(winningLetter);
      didSomeoneWin = true;
    }
    if(i == 8 && squares[i] == squares[i - 4] && squares[i] == squares[i - 8] && squares[i] != "blank"){
      line(1000, 0, 0, 1000);
      winningLetter = squares[i];
      console.log(winningLetter);
      didSomeoneWin = true;
    }
    if(squares.indexOf("blank") == -1 && didSomeoneWin == false){
        fill("black");
        textSize(40);
        text("Tie!", 1200, 500);
        text("Press G to play again.", 1050, 600)
        fill("white");
    }
    if(squares[i] == "blank"){
      fill("white");
      square(symbollocationx[i] - 120, symbollocationy[i] + 1200);
      noFill();
    }
  }
  if(didSomeoneWin == true){
    if(winningLetter == "o"){
      fill("black");
      textSize(40);
      text("O won!", 1200, 500);
      text("Press G to play again.", 1050, 600);
      fill("white");
    }
    if(winningLetter == "x"){
      fill("black");
      textSize(40);
      text("X won!", 1200, 500);
      text("Press G to play again.", 1050, 600);
      fill("white");
    }
    }
  }

function keyTyped() {
  console.log(key);
  if (winningLetter != "o" && winningLetter != "x") {
    if (currentturn == "o") {
      if (squares[key - 1] == "blank") {
        squares[key - 1] = "o";
        currentturn = "x";
      }
    }
    if (currentturn == "x") {
      if (squares[key - 1] == "blank") {
        squares[key - 1] = "x";
        currentturn = "o";
      }
    }
  }
    if(key == "g" && (didSomeoneWin == true || squares.indexOf("blank") == -1)){
      squares = ["blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank"];
      currentturn = "o";
      winningLetter = "idkyet";
      didSomeoneWin = false;
    }
  }