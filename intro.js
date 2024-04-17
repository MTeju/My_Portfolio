const txts = document.querySelector(".animated-text").children;
txtsLen = txts.length;
let index = 0;
var Delay = 5650;

function animateText(){
    for(let i=0; i < txtsLen; i++){
        txts[i].classList.remove("text-in");
    }
    txts[index].classList.add("text-in");
    if(index == txtsLen - 1){
        index = 0;
    }else{
        index++;
    }
    setTimeout(animateText,1300);

}

window.onload=animateText;