let button = document.querySelector(".trocador");
let fundo = document.querySelector(".fundo");
let cor = document.querySelector(".texto");
let i=0;
let arrCores = ["#292929", "#F2F2F2", "#C7C7C7"];


button.addEventListener("click", function trocaCor(){
    i = (i+1) % 3;
    fundo.style.background = arrCores[i];
    cor.innerHTML = "Background: " + arrCores[i];
});