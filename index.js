let gameseq=[];
let userseq=[];
let btns=["yellow", "red","purple","green"];

let started= false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUP();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelUP(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randbtn);
}
function checkAns(idx){

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUP,1000);
        }

    }
    else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> </br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}
function btnPress(){
    let btn=this;
   btnFlash(btn);

   userColor=btn.getAttribute("id");
   console.log(userColor);
   userseq.push(userColor);
   checkAns(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}