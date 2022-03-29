//set interval-count down clock
var timeInterval;
var timeCap =10;
var time = 100;
var timer = document.querySelector('#timer');

var startSection = document.querySelector('#start');
var endSection = document.querySelector("#end");
var button = document.querySelector('#test');
var startBtn = document.querySelector('#start-btn');
var h3 = document.querySelector('#h3')
var h2 = document.querySelector('#h2');
var divEl0 = document.querySelector('#Q0');
var divEl1 = document.querySelector('#Q1');
var divEl2 = document.querySelector('#Q2');
var divEl3 = document.querySelector('#Q3');
var divEl4 = document.querySelector('#Q4');


var questionIndex = 0; // 1 , 2
var questionDivElArr = [divEl0, divEl1, divEl2, divEl3, divEl4];
var correctAnswerArr = ['As many as you want', 'All of the above', '.', 'sessionStorage and localStorage', 'PAY ATTENTION TO INSTRUCTOR!!!']
var interval;

//hope this is the right place and function
var randomNumber = function(min,max) {
    var value =Math.floor(math.random() * (max - min + 1) +min);
    return value;
}
//need function to subtract score due to wrong answers vs right answers
//playerInfo.time = Math.max(0, playerInfo.time -10);


// This practice//add code toupdate the time time

var answerBtn = document.querySelectorAll('.answerBtn')
answerBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log(this.value);
        // console.log(answerBtn);
    
        if(this.value === correctAnswerArr[questionIndex]) {
            console.log("correct")
        } else {
            console.log("wrong");
            time -= 10
        }
        questionDivElArr[questionIndex].classList.add("hide");
        questionIndex+= 1
        displayQuestion();
    })

})



// create a function that starts the quiz

// must hide start button, start timer, and display first question
// var startBtn =document.querySelector('start-btn') 
//console.log('start-btn');
startBtn.addEventListener('click', start);
//startBtn.classList.add('hide');





function start () {
    timer.textContent = time;
    console.log('start');
    interval = setInterval(function() {
        time = time - 1;
        timer.textContent = time;

        if (time <= 0) {
            end()
        }
    }, 1000);
    startSection.classList.add('hide');


    displayQuestion()
}

// create a function to display a question
function displayQuestion () {
    if (questionIndex<questionDivElArr.length){
    var currentQuestionDivEl = questionDivElArr[questionIndex];
    currentQuestionDivEl.classList.remove('hide');
    }else { end()

    };
    


};


// create a function that handles a button click for an answer
// button.addEventListener('click', funtion(){
//     console.log('answer');
//     Q1.style.display = "none";
//     Q2.style.display = "block";
// })

//attach an event object and event handler

// must checked to see if it is correct, if false substract time
// must also hide current question and display new question by calling displayQuestion



// write var h3,and h2 format for all the sections
// button.addEventListener('click', function(){
    // console.log('clicked');
    //h2.setAttribute('class', 'hide');
    // Q0.style.display = "none";//to show and hide screen options
    // Q1.style.display = "block";
   
// })

// NOTES ABOVE


//querySelector for start screen, quiz screen, end screen, timer,any element inside quiz screen, end screen

//end screen whatever time is remaining, if answer, minuses more time
//leftover time as the final score bonus to score

function end () {
    clearInterval(interval);

    var getPlayerName = function() {
        var name = "";
        while (name === "" || name === null) {
            name = prompt("Enter initials here");
        }
        console.log("Your initials here"+ name);
        return name;
    };


    var playerInfo ={
        name: getPlayerName(),
        time: time,
    }


    
//check localStorage for high score, if it's not there, use 0
    
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    //if player has more time left with a high score, player has new high score

    if (playerInfo.time > highScore){
        localStorage.setItem("highScore", playerInfo.time);
        localStorage.setItem("name", playerInfo.name);

    }
    
   endSection.classList.remove("hide");

    var listEl =document.createElement('p');
    listEl.textContent = playerInfo.name + " " + playerInfo.time;
    endSection.appendChild(listEl);

};


    //add visibility stuff


