// =======================
// ROLAGEM
// =======================

function irParaHistoria(){

    document
    .getElementById("historia")
    .scrollIntoView({
        behavior:"smooth"
    });

}






// =======================
// MÚSICA MP3
// =======================

function tocarMusica(){

    const musica =
    document.getElementById("musica");


    musica.play();

}






// =======================
// CARTA SECRETA
// =======================


function abrirCarta(){


    let envelope =
    document.querySelector(".envelope");


    let carta =
    document.getElementById("carta");



    envelope.classList.add("aberto");



    setTimeout(()=>{


        envelope.classList.add("sumir");


    },3500);



}









// =======================
// DATAS
// =======================


const primeiroBeijo =
new Date("2024-10-11T00:00:00");



const inicio =
new Date("2024-12-26T00:00:00");







function calcularTempo(data){


    let agora =
    new Date();



    let segundos =
    Math.floor(
        (agora - data) / 1000
    );



    let minutos =
    Math.floor(segundos / 60);



    let horas =
    Math.floor(minutos / 60);



    let dias =
    Math.floor(horas / 24);




    let anos =
    Math.floor(dias / 365);



    dias =
    dias % 365;



    let meses =
    Math.floor(dias / 30);



    dias =
    dias % 30;






    return {


        anos:anos,


        meses:meses,


        dias:dias,


        horas:horas % 24,


        minutos:minutos % 60,


        segundos:segundos % 60



    };


}









// =======================
// ATUALIZAR CONTADORES
// =======================


function atualizar(){



    // primeiro beijo

    let beijo =
    calcularTempo(primeiroBeijo);



    document
    .getElementById("anos")
    .innerHTML =
    beijo.anos;



    document
    .getElementById("meses")
    .innerHTML =
    beijo.meses;



    document
    .getElementById("dias")
    .innerHTML =
    beijo.dias;









    // tempo juntos


    let tempo =
    calcularTempo(inicio);



    document
    .getElementById("a")
    .innerHTML =
    tempo.anos;



    document
    .getElementById("m")
    .innerHTML =
    tempo.meses;



    document
    .getElementById("d")
    .innerHTML =
    tempo.dias;



    document
    .getElementById("h")
    .innerHTML =
    tempo.horas;



    document
    .getElementById("min")
    .innerHTML =
    tempo.minutos;



    document
    .getElementById("s")
    .innerHTML =
    tempo.segundos;



}





setInterval(
    atualizar,
    1000
);



atualizar();









// =======================
// EFEITO NAS FOTOS
// =======================


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


    card.addEventListener(
        "touchstart",
        ()=>{


            card.style.transform =
            "scale(.95)";


        }
    );





    card.addEventListener(
        "touchend",
        ()=>{


            card.style.transform =
            "scale(1)";


        }
    );


});









// =======================
// BRILHO AO TOCAR
// =======================


document.addEventListener(
"touchstart",
(e)=>{


    let brilho =
    document.createElement("div");



    brilho.innerHTML="✨";



    brilho.style.position="fixed";



    brilho.style.left =
    e.touches[0].clientX+"px";



    brilho.style.top =
    e.touches[0].clientY+"px";



    brilho.style.zIndex="9999";



    brilho.style.fontSize="25px";



    brilho.style.pointerEvents="none";



    document.body.appendChild(brilho);




    setTimeout(()=>{


        brilho.remove();


    },700);



});
