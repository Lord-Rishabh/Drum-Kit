

/* This will call function when particular selctor is 
clicked.There are many other listeners too. When we write the function name 
in this, we don't add '()' because it will straight up call the fucntion. But 
we won't to call the function when user clicks on the button.
To select all the buttons we will make a 'for' loop.

There are 2 methods to call fucntion : 
1. We can make another function and write the function name without paranthesis.
2. We can make anonymous fucntion like this :
*/
var n = document.querySelectorAll(".drum").length;

 for(var i = 0 ; i<n ; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click",function() {
            //'this' refers to query selected
            var buttonKey = this.innerHTML; 
            makeSound(buttonKey);
            makeAnimation(buttonKey);
        });
 }
// This will detect when we click on a object.


document.addEventListener("keydown" , function(temp) {
    makeSound(temp.key);
    makeAnimation(temp.key);
})
// This will detect any key that we press.

function makeSound(key) {
    switch (key) {
        case "w" :
            var temp1 = new Audio("./sounds/tom-1.mp3");
                temp1.play();
        break;
        
        case "a" :
            var temp2 = new Audio("./sounds/tom-2.mp3");
                temp2.play();
        break;

        case "s" :
            var temp3 = new Audio("./sounds/tom-3.mp3");
                temp3.play();
        break;

        case "d" :
            var temp4 = new Audio("./sounds/tom-4.mp3");
                temp4.play();
        break;

        case "j" :
            var temp5 = new Audio("./sounds/snare.mp3");
                temp5.play();
        break;

        case "k" :
            var temp6 = new Audio("./sounds/crash.mp3");
                temp6.play();
        break;

        case "l" :
            var temp7 = new Audio("./sounds/kick-bass.mp3");
                temp7.play();   
        break;

        default: console.log(buttonKey);
    }
}
//This will make sound when appropriate action occurs. It make use of switch case.s 

function makeAnimation(key) {
    var currentKey = document.querySelector("." + key);

    currentKey.classList.add("pressed");
    setTimeout(function () {currentKey.classList.remove("pressed")},50);
}


//  var temp = new Audio("./sounds/tom-1.mp3");
//            temp.play();