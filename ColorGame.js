
var squareColors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var rightAnswer = pickColor();
var h1 = document.querySelector("h1");
colorDisplay.textContent = rightAnswer;
for(var i = 0; i < squares.length; i++)
{
  squares[i].style.backgroundColor = squareColors[i];
  squares[i].addEventListener( "click", function(){
  if(this.style.backgroundColor === rightAnswer)
  {
    message.textContent = "Correct!";
    changeColor(rightAnswer);
    h1.style.backgroundColor = rightAnswer;
  }
  else {
    message.textContent = "Try Again!";
    this.style.backgroundColor = "#232323";
  }
  });
}

function changeColor(rightAnswer)
{
  for(var i = 0; i < squares.length; i++)
  {
    squares[i].style.backgroundColor = rightAnswer;
  }
}

function pickColor()
{
  var random = Math.floor(Math.random() * squares.length);
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
