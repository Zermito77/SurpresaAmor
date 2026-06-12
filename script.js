// ==========================
// ABRIR PRESENTE
// ==========================

console.log("script carregou");

function abrirPresente(){


document.body.classList.add("aberto");


efeitoCoracao();


setTimeout(()=>{


document
.getElementById("historia")
.scrollIntoView({

behavior:"smooth"

});


},800);



}










// ==========================
// TEXTO DIGITANDO
// ==========================



let texto = 
"Preparei um presente especial para você...";



let posicao = 0;



function escreverTexto(){


let elemento =
document.getElementById("digitando");



if(!elemento) return;



if(posicao < texto.length){



elemento.innerHTML += 
texto.charAt(posicao);



posicao++;



setTimeout(
escreverTexto,
70
);



}



}



window.addEventListener(
"load",
escreverTexto
);











// ==========================
// MÚSICA
// ==========================



function tocarMusica(){



let musica =
document.getElementById("musica");



if(musica.paused){


musica.play();


}else{


musica.pause();


}



efeitoCoracao();


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


efeitoCoracao();



},900);



}









// ==========================
// SEGUNDA MENSAGEM
// ==========================



function segundaCarta(){



let texto =
document.getElementById("segundaMensagem");



if(!texto) return;



texto.innerHTML =



"✨ Ainda quero viver muitos capítulos dessa história ao seu lado. 🌊💙";



efeitoCoracao();



}









// ==========================
// CONCHA
// ==========================



function mostrarSegredo(){



let concha =
document.querySelector(".concha");



concha.classList.add("abrir");



document
.getElementById("mensagemSecreta")
.innerHTML =



"🌊 O maior tesouro que encontrei no mar foi ter você comigo. 💙";



efeitoCoracao();



}









// ==========================
// CORAÇÕES
// ==========================



function efeitoCoracao(){



let coracao =
document.createElement("div");



coracao.className =
"coracao";



coracao.innerHTML =
"❤️";



coracao.style.left =
Math.random()*90 + "%";



coracao.style.bottom =
"20px";



document.body.appendChild(coracao);



setTimeout(()=>{


coracao.remove();



},2000);



}









// ==========================
// FOTO FULLSCREEN
// ==========================



function abrirFoto(imagem){



let tela =
document.getElementById("visualFoto");



let foto =
document.getElementById("fotoGrande");



foto.src = imagem;



tela.style.display =
"flex";



efeitoCoracao();



}







function fecharFoto(){



document
.getElementById("visualFoto")
.style.display="none";



}









// ==========================
// CONTADORES
// ==========================



const primeiroBeijo =

new Date(
"2024-10-11T00:00:00"
);



const juntos =

new Date(
"2024-12-26T00:00:00"
);







function calcularTempo(data){



let agora =
new Date();



let segundos =

Math.floor(
(agora-data)/1000
);



let minutos =

Math.floor(
segundos/60
);



let horas =

Math.floor(
minutos/60
);



let dias =

Math.floor(
horas/24
);



let anos =

Math.floor(
dias/365
);



dias =
dias % 365;



let meses =

Math.floor(
dias/30
);



dias =
dias % 30;



return {


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



if(document.getElementById("anos")){


document.getElementById("anos")
.innerHTML =
beijo.anos;



document.getElementById("meses")
.innerHTML =
beijo.meses;



document.getElementById("dias")
.innerHTML =
beijo.dias;



}







let tempo =
calcularTempo(juntos);





if(document.getElementById("a")){


document.getElementById("a")
.innerHTML =
tempo.anos;



document.getElementById("m")
.innerHTML =
tempo.meses;



document.getElementById("d")
.innerHTML =
tempo.dias;



document.getElementById("h")
.innerHTML =
tempo.horas;



document.getElementById("min")
.innerHTML =
tempo.minutos;



document.getElementById("s")
.innerHTML =
tempo.segundos;



}








if(document.getElementById("contadorFinal")){


document.getElementById("contadorFinal")
.innerHTML =


"Já vivemos: <br>" +

tempo.dias +
" dias ❤️<br>" +

tempo.horas +
" horas<br>" +

tempo.minutos +
" minutos<br>" +

tempo.segundos +
" segundos";


}



}








setInterval(
atualizarContadores,
1000
);



atualizarContadores();









// ==========================
// PARALLAX
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

`translateY(${-scroll*0.15}px)`;

}



if(estrelas){


estrelas.style.transform =

`translateY(${scroll*0.08}px)`;

}



}

);
