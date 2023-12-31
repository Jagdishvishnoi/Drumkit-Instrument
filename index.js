
//Detecting Button press
var noOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrum; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

    function handleClick() {
        //this.style.color = "gray";
        var key1 = this.innerHTML;
        makeSound(key1);
        buttonAnimation(key1);
    }
}


//Deacting keybord press
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);

});


//Play relvant key sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
        default: console.log(key);
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}