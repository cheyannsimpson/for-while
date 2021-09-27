var ele = document.body.querySelector(".dragons");

var condition= true;

// while loop below
while(condition) {
    var question = prompt("Enter a number 1-5 to hit the dragon");
    if (question===Math.floor(Math.random(0) > 5)){
        condition=false;
        ele.innerHTML="Oops, try again!";
    }
}