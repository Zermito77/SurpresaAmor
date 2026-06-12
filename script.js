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
// CARTA
// ==========================


function abrirCarta(){


let carta =
document.getElementById("carta");



carta.classList.add("mostrar");



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



let total =
Math.floor(
(agora - data) / 1000
);



let segundos =
total % 60;



let minutos =
Math.floor(total / 60) % 60;



let horas =
Math.floor(total / 3600) % 24;



let diasTotal =
Math.floor(total / 86400);



let anos =
Math.floor(diasTotal / 365);



let meses =
Math.floor(
(diasTotal % 365) / 30
);



let dias =
(diasTotal % 365) % 30;




return{


anos,

meses,

dias,

horas,

minutos,

segundos


};


}








function atualizar(){



let b =
calcularTempo(beijo);



if(document.getElementById("anos")){


document.getElementById("anos").innerHTML =
b.anos;


document.getElementById("meses").innerHTML =
b.meses;


document.getElementById("dias").innerHTML =
b.dias;



}




// caso queira adicionar esses IDs depois


if(document.getElementById("horasBeijo")){


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
atualizar,
1000
);


atualizar();









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


img.onclick=function(){


let tela =
document.getElementById("visualFoto");


let foto =
document.getElementById("fotoGrande");



foto.src =
this.src;



tela.style.display="flex";


}



});






document
.getElementById("visualFoto")
.onclick=function(){


this.style.display="none";


}
