



//all the buttons
for(var i = 0; i<document.querySelectorAll(".drum").length; i+=1){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        switch(this.innerHTML){
            case 'w':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;
            case 'a':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;
            case 's':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            case 'j':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            case 'k':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            case 'l':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            default:
                console.log(this.innerHTML);
        }
    })

    document.addEventListener("keydown", function(event){
        var key1 = event.key;

        switch(key1){
            case 'w':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                key1.key.classList.toggle("pressed");
                break;
            case 'a':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;
            case 's':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            case 'j':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            case 'k':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            case 'l':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                this.classList.toggle("pressed");
                break;

            default:
                console.log(this.innerHTML);
        }
    })
}

document.addEventListener("keydown", function(event){
    console.log(event.key);
})


