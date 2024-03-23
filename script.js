//Puntatori//

const scissor=document.getElementById("scissor");
const handPaper=document.getElementById("handPaper");
const handRock=document.getElementById("handRock");
const UserChoice=document.getElementById("UserChoice");
const aiChoice=document.getElementById("aiChoice");
const userPoints=document.getElementById("userPoints");
const pcPoints=document.getElementById("pcPoints");
const refresh=document.getElementById("refresh");
//Scelta Forbice = 1
const scissorChoice=document.createElement("i");
scissorChoice.classList.add("fa-solid", "fa-hand-scissors","text-[100px]");
scissor.addEventListener("click",function(){
    if(UserChoice.hasChildNodes()){
        UserChoice.removeChild(UserChoice.children[0]);
    }
    if(aiChoice.hasChildNodes()){
        aiChoice.removeChild(aiChoice.children[0]);
    }
    UserChoice.appendChild(scissorChoice);
    pcChoice(1);  
})
//Scelta Carta = 2
const handPaperChoice=document.createElement("i");
handPaperChoice.classList.add("fa-solid", "fa-hand","text-[100px]");
handPaper.addEventListener("click",function(){
    if(UserChoice.hasChildNodes()){
        UserChoice.removeChild(UserChoice.children[0]);
    }
    if(aiChoice.hasChildNodes()){
        aiChoice.removeChild(aiChoice.children[0]);
    }
    console.log(UserChoice); 
    console.log(handPaperChoice);
    UserChoice.appendChild(handPaperChoice);
    pcChoice(2);
})
//Scelta Sasso = 3
const handRockChoice=document.createElement("i");
handRockChoice.classList.add("fa-solid", "fa-hand-back-fist","text-[100px]");
handRock.addEventListener("click",function(){
    if(UserChoice.hasChildNodes()){
        UserChoice.removeChild(UserChoice.children[0]);
    }
    if(aiChoice.hasChildNodes()){
        aiChoice.removeChild(aiChoice.children[0]);
    }
    console.log(UserChoice); 
    console.log(handRockChoice);
    UserChoice.appendChild(handRockChoice); 
    pcChoice(3); 
});
let indici={
    "1":scissorChoice,
    "2":handPaperChoice,
    "3":handRockChoice
}
function pcChoice(numero){
    let casuale= Math.floor(Math.random()*3) +1;
    aiChoice.appendChild(indici[casuale].cloneNode());
    console.log("casuale:",casuale);
    console.log("numero:",numero)
    if (numero===casuale){
        console.log("Hai Pareggiato");
        draw();
    } else if(numero===3 && casuale===1){
        console.log("Hai Vinto");
        win();
    } else if(numero===2 && casuale===1){
        console.log("Hai Perso");
        lose();
    } else if(numero===1 && casuale===2){
        console.log("Hai Vinto");
        win();
    } else if(numero===3 && casuale===2){
        console.log("Hai Perso");
        lose();
    } else if(numero===2 && casuale===3){
        console.log("Hai Vinto");
        win();
    } else if(numero===1 && casuale===3){
        console.log("Hai Perso");
        lose();
    }
}

function win(){
    let punteggio=parseInt(userPoints.textContent);
    UserChoice.style.backgroundColor="green";
    punteggio++;
    userPoints.textContent=punteggio;

}
function lose(){
    let punteggio=parseInt(pcPoints.textContent);
    UserChoice.style.backgroundColor="red";
    punteggio++;
    pcPoints.textContent=punteggio;
}
function draw(){
    UserChoice.style.backgroundColor="yellow";
}

refresh.addEventListener("click",function(){
    location.reload();
})
