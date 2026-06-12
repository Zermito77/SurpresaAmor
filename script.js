// ==========================
// BOTÃO ABRIR PRESENTE
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
// MÚSICA PLAY / PAUSE
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
// CARTA
// ==========================


function abrirCarta(){


let carta =
document.getElementById("carta");


carta.classList.add("mostrar");



criarCoracao();


}







// ==========================
// CONTADOR
// ==========================


const beijo =
new Date("2024-10-11T00:00:00");



const juntos =
new Date("2024-12-26T00:00:00");




function calcular(data){


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



dias = dias % 365;



let meses =
Math.floor(
dias / 30
);



dias = dias % 30;




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








function atualizarContador(){


let b =
calcular(beijo);



if(document.getElementById("anos")){


document.getElementById("anos").innerHTML =
b.anos;


document.getElementById("meses").innerHTML =
b.meses;


document.getElementById("dias").innerHTML =
b.dias;


}






let t =
calcular(juntos);





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
atualizarContador,
1000
);


atualizarContador();









// ==========================
// CORAÇÕES
// ==========================


function criarCoracao(){


let coracao =
document.createElement("div");


coracao.className="coracao";


coracao.innerHTML="❤️";



coracao.style.left =
Math.random()*90+"%";



coracao.style.bottom="20px";



document.body.appendChild(coracao);



setTimeout(()=>{


coracao.remove();


},2000);



}










// ==========================
// CHUVA DE ESTRELAS
// ==========================


function chuvaEstrelas(){


for(let i=0;i<35;i++){



let estrela =
document.createElement("div");



estrela.className="estrela";



estrela.style.left =
Math.random()*100+"vw";



estrela.style.animationDelay =
Math.random()*2+"s";



document.body.appendChild(estrela);



setTimeout(()=>{


estrela.remove();


},4000);



}



}





// a cada 15 segundos

setInterval(
chuvaEstrelas,
15000
);









// ==========================
// FOTO AO CLICAR
// ==========================


document
.querySelectorAll(".card img")
.forEach(img=>{


img.addEventListener(
"click",
()=>{


let tela =
document.getElementById("visualFoto");


let foto =
document.getElementById("fotoGrande");



foto.src =
img.src;



tela.style.display="flex";



}


);



});





document
.getElementById("visualFoto")
.addEventListener(
"click",
()=>{


document
.getElementById("visualFoto")
.style.display="none";


}
);
