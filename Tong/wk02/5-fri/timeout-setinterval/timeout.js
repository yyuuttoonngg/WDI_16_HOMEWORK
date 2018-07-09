// mini timer

function start(){
    var totalSeconds = Number(document.querySelector("input").value);
    countDown(totalSeconds);
}

function countDown(a){  
    if (a>0){
        setTimeout(function(){console.log(a); 
            if(a%10===0){
                playSound();
                }
        countDown(a-1);
        },1000);
    }
    if (a===0){
        setTimeout(function(){
            console.log('times up');
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector(".timeup").textContent = "TIME'S UP";
        },1000);
    }    
}

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}
