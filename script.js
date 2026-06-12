// =========================
// TEXTO INICIAL DIGITANDO
// =========================


let mensagem =
"Preparei um presente especial para você... 💙";


let i = 0;


function escrever(){


let texto =
document.getElementById("textoInicial");



if(!texto) return;



if(i < mensagem.length){


texto.innerHTML += mensagem.charAt(i);


i++;


setTimeout(escrever,60);


}


}



window.onload = escrever;









// =========================
// BOTÃO ABRIR PRESENTE
// =========================


function abrirHistoria(){


document
.getElementById("historia")
.scrollIntoView({

behavior:"smooth"

});


criarCoracao();


}









// =========================
// MÚSICA
// =========================



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









// =========================
// CORAÇÕES
// =========================


function criarCoracao(){


let coracao =
document.createElement("div");



coracao.innerHTML="❤️";


coracao.style.position="fixed";

coracao.style.left =
Math.random()*90+"%";


coracao.style.bottom="0";


coracao.style.fontSize="30px";


coracao.style.zIndex="200";


coracao.style.animation=
"subir 2s linear";



document.body.appendChild(coracao);



setTimeout(()=>{


coracao.remove();


},2000);



}








// =========================
// FOTO FULLSCREEN
// =========================



function abrirFoto(src){



let tela =
document.getElementById("fotoGrande");



let imagem =
document.getElementById("imagemAberta");



imagem.src=src;



tela.style.display="flex";



}



function fecharFoto(){


document
.getElementById("fotoGrande")
.style.display="none";


}










// =========================
// CARTA
// =========================



function abrirCarta(){


let carta =
document.getElementById("carta");



carta.style.transform=
"scale(1.05)";



carta.style.transition=
".5s";



criarCoracao();


}









// =========================
// CONTADORES
// =========================



let beijo =
new Date("2024-10-11T00:00:00");



let juntos =
new Date("2024-12-26T00:00:00");





function tempo(data){


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



dias%=365;



let meses =
Math.floor(
dias/30
);



dias%=30;



return{


anos,

meses,

dias,

horas:
horas%24,


minutos:
minutos%60,


segundos:
segundos%60


};


}








function atualizar(){



let b =
tempo(beijo);



if(document.getElementById("anos")){


anos.innerHTML=b.anos;

meses.innerHTML=b.meses;

dias.innerHTML=b.dias;


}





let t =
tempo(juntos);




if(document.getElementById("a")){


a.innerHTML=t.anos;

m.innerHTML=t.meses;

d.innerHTML=t.dias;

h.innerHTML=t.horas;

min.innerHTML=t.minutos;

s.innerHTML=t.segundos;


}



}



setInterval(atualizar,1000);


atualizar();









// =========================
// ANIMAÇÃO DOS CORAÇÕES
// =========================


let estilo =
document.createElement("style");



estilo.innerHTML=`


@keyframes subir{


0%{

transform:translateY(0);

opacity:1;

}


100%{

transform:
translateY(-300px);

opacity:0;

}


}


`;



document.head.appendChild(estilo);
