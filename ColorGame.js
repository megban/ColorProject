
var squareLength = 6;
var squareColors = generateRandomColor(squareLength);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var rightAnswer = pickColor();
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
colorDisplay.textContent = rightAnswer;
setUpSquares();

reset.addEventListener("click" , function(){
  h1.style.backgroundColor = "#232323";
  squareColors = generateRandomColor(squareLength);
  rightAnswer = pickColor();
  reset.textContent = "New Colors";
  setUpSquares();
});

easy.addEventListener("click" , function(){
  reset.textContent = "New Colors";
  h1.style.backgroundColor = "#232323";
  squareLength = 3;
  squareColors = generateRandomColor(squareLength);
  rightAnswer = pickColor();

  for(var i = squareLength; i < 6; i++)
  {
    squares[i].style.backgroundColor = "#232323";
    squares[i].removeEventListener("click", squareEvent, false);
  }
  setUpSquares();

});

hard.addEventListener("click" , function(){
  squareLength = 6;
  h1.style.backgroundColor = "#232323";
  reset.textContent = "New Colors";
  squareColors = generateRandomColor(squareLength);
  rightAnswer = pickColor();
  setUpSquares();

});

function setUpSquares()
{
  for(var i = 0; i < squareLength; i++)
  {
    squares[i].style.backgroundColor = squareColors[i];
    squares[i].addEventListener( "click", squareEvent);
  }
}

function squareEvent()
{
  if(this.style.backgroundColor === rightAnswer)
  {
    message.textContent = "Correct!";
    changeColor(rightAnswer);
    h1.style.backgroundColor = rightAnswer;
    reset.textContent = "Play Again?"
  }
  else {
    message.textContent = "Try Again!";
    this.style.backgroundColor = "#232323";
  }
}



function changeColor(rightAnswer)
{
  for(var i = 0; i < squareLength; i++)
  {
    squares[i].style.backgroundColor = rightAnswer;
  }
}

function pickColor()
{
  var random = Math.floor(Math.random() * squareLength);
  return squareColors[random];
}

function generateRandomColor(n)
{
  var arr = [];
  for(var i = 0; i < n; i++)
  {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor()
{
  var  r = Math.floor(Math.random() * 256);
  var  g = Math.floor(Math.random() * 256);
  var  b = Math.floor(Math.random() * 256);

  //rgb(r, g, b)
  return "rgb(" + r + ", " + g + ", " + b + ")";


}
