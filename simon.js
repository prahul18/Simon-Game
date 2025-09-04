
let gameSeq = [];
let userSeq = [];
let btnClr = ['red', 'yellow', 'green', 'purple'];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){
    if(started == false){
         started = true;
         levelUp()
    }
})

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 400)
}

function userFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 400)
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;
    let ranIdx = Math.floor(Math.random()*3);
    let ranClr = btnClr[ranIdx];
    let ranBtn = document.querySelector(`.${ranClr}`)
    gameSeq.push(ranClr);
    userFlash(ranBtn)
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h3.innerHTML = `Game over!! <b> Your level is : ${level} <b/> <br/> Press any key to restart`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = '';
        }, 400)
        reset()
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id')
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1)
}

let allBtn = document.querySelectorAll('.btn');
for(btn of allBtn){
    btn.addEventListener("click", btnPress)
}

function reset(){
    gameSeq = [];
    level = 0;
    started = false;
}


















