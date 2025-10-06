/*var buttons = document.querySelectorAll("button");  /* burada var yerine const da kullanılabilirdi bu konuyu oğren */
/*buttons.forEach((btn) => {  /* burada yazdığım btn bir isim herhangi birşey olabilir. => ise function demek sadece karakter olarak gösterimi => bu şekilde */
/*    btn.addEventListener("click",handleClick)
})*/
/* üst taraftaki kodu ben ve yapay zeka yaptık foreach gösterdi sadece bana alt taraftakini ise hoca ve ben yaptık */


//tıklandığında çalışan system
var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    system(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
  });
}


//klavyeden basıldığında çalışan system
document.addEventListener ("keypress", function(event){//keypress yerine keydown da oluyor farkı bilmiyorum.
    
    system(event.key);
    buttonAnimation(event.key);

})

function system(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 's':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'j':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            break;
    }
}

//buton animasyonu
function buttonAnimation (callanimation) {
    var animation = document.querySelector("." + callanimation);
    animation.classList.add("pressed");

    setTimeout(function(){
        animation.classList.remove("pressed");
    }, 100);
}






















































/* document.onkeypress = function(e) {
    e = e || window.event;
    var key = e.key.toLowerCase(); // basılan tuşu al

    switch(key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "j":
            new Audio("sounds/crash.mp3").play();
            break;
        case "k":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("sounds/snare.mp3").play();
            break;
        default:
            console.log(key + " için ses yok");
    }
}; */
