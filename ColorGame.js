
var squareColors = [
  "rgb(50, 100, 0)",
  "rgb(50, 255, 0)",
  "rgb(255, 100, 0)",
  "rgb(60, 0, 0)",
  "rgb(150, 100, 150)",
  "rgb(50, 100, 200)"
]

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var rightAnswer = pickColor();
colorDisplay.textContent = rightAnswer;
for(var i = 0; i < squares.length; i++)
{
  squares[i].style.backgroundColor = squareColors[i];
  squares[i].addEventListener( "click", function(){
  if(this.style.backgroundColor == rightAnswer)
  {
    message.textContent = "Correct!";
    changeColor(rightAnswer);
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
