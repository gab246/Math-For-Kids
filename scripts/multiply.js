let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let audio = document.getElementById("audio");
let answer = 0;

function generateEquation(){
  let num1 = Math.floor(Math.random() * 10)
  let num2 = Math.floor(Math.random() * 10)
  let wrongAnswer1 = Math.floor(Math.random() * 10)
  let wrongAnswer2 = Math.floor(Math.random() * 10)
  let allAnswers = [];
  let switchAnswers = [];

  answer = num1 * num2

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allAnswers = [answer, wrongAnswer1, wrongAnswer2];

  for( i = allAnswers.length; i --;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  }

  option1.innerHTML = switchAnswers[0]
  option2.innerHTML = switchAnswers[1]
  option3.innerHTML = switchAnswers[2]
  
}


option1.addEventListener("click", function(){
  if(option1.innerHTML == answer){
    generateEquation();
  } else {
    audio.play();
  }
});

option2.addEventListener("click", function(){
  if(option2.innerHTML == answer){
    generateEquation();
  } else {
    audio.play();
  }
});

option3.addEventListener("click", function(){
  if(option3.innerHTML == answer){
    generateEquation();
  } else {
    audio.play();
  }
});


generateEquation();