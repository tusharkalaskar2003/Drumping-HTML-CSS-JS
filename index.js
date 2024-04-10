
let count = document.querySelectorAll(".drum").length;
for(var i =0; i< count; i++){
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function(event){
        
        makeSound(event.key);
        makeAnimation(event.key);
    
    })}  // here we not use the paranthasis here like handleClick() ==> whick cause the, the function not wait to chick the button


for(var i =0; i< count; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var clickValue = this.innerHTML;
        makeSound(clickValue);
        makeAnimation(clickValue);
    
    })} 


function makeSound(currentEle){
    
    var buttomInnerChar = currentEle;
    switch(buttomInnerChar){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play(); 
        
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
        
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
        
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 

    }
}

function makeAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}