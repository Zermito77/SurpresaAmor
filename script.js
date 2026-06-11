function irParaHistoria(){

document
.getElementById("historia")
.scrollIntoView({
behavior:"smooth"
});

}







function tocarMusica(){

let musica =
document.getElementById("musica");


musica.play();

}






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








const beijo =
new Date("2024-10-11T00:00:00");


const inicio =
new Date("2024-12-26T00:00:00");





function calcular(data){


let agora = new Date();


let total =
Math.floor((agora-data)/1000);



let minutos =
Math.floor(total/60);


let horas =
Math.floor(minutos/60);


let dias =
Math.floor(horas/24);



let anos =
Math.floor(dias/365);



dias%=365;


let meses =
Math.floor(dias/30);



dias%=30;



return {

anos,

meses,

dias,

horas:horas%24,

minutos:minutos%60,

segundos:total%60

};

}






function atualizar(){


let b =
calcular(beijo);


anos.innerHTML=b.anos;

meses.innerHTML=b.meses;

dias.innerHTML=b.dias;





let t =
calcular(inicio);



a.innerHTML=t.anos;

m.innerHTML=t.meses;

d.innerHTML=t.dias;

h.innerHTML=t.horas;

min.innerHTML=t.minutos;

s.innerHTML=t.segundos;


}


setInterval(atualizar,1000);

atualizar();
