// ==========================
// ABRIR PRESENTE
// ==========================

function irParaHistoria(){

document
.getElementById("historia")
.scrollIntoView({

behavior:"smooth"

});


criarCoracao();

}







// ==========================
// MUSICA PLAY / PAUSE
// ==========================

function tocarMusica(){


let musica =
document.getElementById("musica");



if(musica.paused){


musica.play();


}else{


musica.pause();


}



criarCoracao();


}








// ==========================
// ENVELOPE + CARTA
// ==========================


function abrirCarta(){


let envelope =
document.querySelector(".envelope");


let carta =
document.getElementById("carta");



envelope.classList.add("aberto");



setTimeout(()=>{


carta.classList.add("mostrar");


},700);



criarCoracao();



}








// ==========================
// CONTADORES
// ==========================


const beijo =
new Date("2024-10-11T00:00:00");



const juntos =
new Date("2024-12-26T00:00:00");






function calcularTempo(data){



let agora =
new Date();



let segundosTotal =
Math.floor(
(agora - data) / 1000
);



let segundos =
segundosTotal % 60;



let minutosTotal =
Math.floor(segundosTotal / 60);



let minutos =
minutosTotal % 60;



let horasTotal =
Math.floor(minutosTotal / 60);



let horas =
horasTotal % 24;



let diasTotal =
Math.floor(horasTotal / 24);



let anos =
Math.floor(
diasTotal / 365
);



let restoDias =
diasTotal % 365;



let meses =
Math.floor(
restoDias / 30
);



let dias =
restoDias % 30;





return {

anos,

meses,

dias,

horas,

minutos,

segundos

};


}








function atualizarContadores(){



let b =
calcularTempo(beijo);





if(document.getElementById("anos")){


document.getElementById("anos").innerHTML =
b.anos;



document.getElementById("meses").innerHTML =
b.meses;



document.getElementById("dias").innerHTML =
b.dias;



document.getElementById("horasBeijo").innerHTML =
b.horas;



document.getElementById("minutosBeijo").innerHTML =
b.minutos;



document.getElementById("segundosBeijo").innerHTML =
b.segundos;


}








let t =
calcularTempo(juntos);




if(document.getElementById("a")){


document.getElementById("a").innerHTML =
t.anos;



document.getElementById("m").innerHTML =
t.meses;



document.getElementById("d").innerHTML =
t.dias;



document.getElementById("h").innerHTML =
t.horas;



document.getElementById("min").innerHTML =
t.minutos;



document.getElementById("s").innerHTML =
t.segundos;


}



}







setInterval(

atualizarContadores,

1000

);



atualizarContadores();











// ==========================
// CORAÇÕES
// ==========================


function criarCoracao(){



let coracao =
document.createElement("div");



coracao.className="coracao";



coracao.innerHTML="❤️";



coracao.style.left =
Math.random()*90 + "%";



document.body.appendChild(coracao);




setTimeout(()=>{


coracao.remove();



},2000);



}












// ==========================
// FOTO AMPLIADA
// ==========================



document
.querySelectorAll(".card img")
.forEach(img=>{



img.addEventListener(
"click",
function(){



let tela =
document.getElementById("visualFoto");



let foto =
document.getElementById("fotoGrande");



foto.src =
this.src;



tela.style.display="flex";



}

);



});







document
.getElementById("visualFoto")
.addEventListener(
"click",
function(){


this.style.display="none";


}

);
