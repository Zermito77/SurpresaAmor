// ==========================
// ABRIR PRESENTE
// ==========================


function abrirPresente(){


document.body.classList.remove("bloqueado");


document.body.classList.add("aberto");



setTimeout(()=>{


document
.getElementById("historia")
.scrollIntoView({

behavior:"smooth"

});


},1200);



}








// ==========================
// MÚSICA
// ==========================


function tocarMusica(){


let musica =
document.getElementById("musica");



musica.play();



}









// ==========================
// CARTA
// ==========================


function abrirCarta(){


let envelope =
document.querySelector(".envelope");



let carta =
document.getElementById("carta");




envelope.classList.add("saindo");



setTimeout(()=>{


carta.classList.add("mostrar");


},900);



}










// ==========================
// CONCHA SECRETA
// ==========================



function mostrarSegredo(){


let mensagem =
document.getElementById("mensagemSecreta");



mensagem.innerHTML =


"🌊 O maior tesouro que encontrei no mar foi ter você comigo. 💙";



}









// ==========================
// SEGUNDA MENSAGEM
// ==========================



function segundaCarta(){


let texto =
document.getElementById("segundaMensagem");



texto.innerHTML =


"✨ Spoiler: ainda quero viver muitos capítulos dessa história ao seu lado. 🌙💙";



}









// ==========================
// CONTADORES
// ==========================



const primeiroBeijo =
new Date("2024-10-11T00:00:00");



const juntos =
new Date("2024-12-26T00:00:00");









function calcularTempo(data){



let agora =
new Date();



let segundos =

Math.floor(
(agora - data) / 1000
);



let minutos =

Math.floor(
segundos / 60
);



let horas =

Math.floor(
minutos / 60
);



let dias =

Math.floor(
horas / 24
);




let anos =

Math.floor(
dias / 365
);



dias %= 365;



let meses =

Math.floor(
dias / 30
);



dias %= 30;



return{


anos,

meses,

dias,

horas:
horas % 24,


minutos:
minutos % 60,


segundos:
segundos % 60


};



}









function atualizarContadores(){



let beijo =
calcularTempo(primeiroBeijo);




document.getElementById("anos")
.innerHTML = beijo.anos;



document.getElementById("meses")
.innerHTML = beijo.meses;



document.getElementById("dias")
.innerHTML = beijo.dias;







let tempo =
calcularTempo(juntos);




document.getElementById("a")
.innerHTML = tempo.anos;



document.getElementById("m")
.innerHTML = tempo.meses;



document.getElementById("d")
.innerHTML = tempo.dias;



document.getElementById("h")
.innerHTML = tempo.horas;



document.getElementById("min")
.innerHTML = tempo.minutos;



document.getElementById("s")
.innerHTML = tempo.segundos;



}







setInterval(
atualizarContadores,
1000
);



atualizarContadores();








// ==========================
// EFEITO PARALLAX
// ==========================


window.addEventListener(
"scroll",
()=>{


let scroll =
window.scrollY;



let ondas =
document.querySelector(".ondas");



let estrelas =
document.querySelector(".estrelas");



if(ondas){

ondas.style.transform =

`translateY(${-scroll * 0.15}px)`;

}



if(estrelas){

estrelas.style.transform =

`translateY(${scroll * 0.08}px)`;

}



});
