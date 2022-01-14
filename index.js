let btn = document.querySelectorAll('.drum');

btn.forEach(e =>{
    e.addEventListener('click', function(a){
        playSounder(a.target.id);
        animationBtn(a.target.id)       
    })
})



// On keyboard
document.addEventListener('keydown', function(event){
    //console.log(event);
    playSounder(event.key)
    animationBtn(event.key)
})


// FUNCTION WORKIN
function playSounder(key){
    switch(key){
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play()
    
        break;
        case 'a':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        case 's':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
        case 'd':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case 'j':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
        case 'k':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case 'l':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        default:
            alert('Somthing Wrong')
    }
}


// FUNCTION ANIMATION

function animationBtn(current){
    var anim = document.querySelector('#' + current);
    anim.classList.add('pressed');
    setTimeout(() => {
        anim.classList.remove('pressed')
    }, 100);
    
}