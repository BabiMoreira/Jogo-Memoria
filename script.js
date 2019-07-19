const quadrados = document.querySelectorAll('.card');
function virarCard(){
    this.classList.toggle('flip');
    // console.log('fui clicado');
    // console.log(this);
}
quadrados.forEach(quadrado => quadrado.addEventListener('click', virarCard));
// colocamos efeito de FLIP nas cartas

// function listaCartas (quadrados){
//     let numeroCartas= quadrados[i];
//     let embaralhar= Math.floor(Math.random()*i);

// //     let numeroCartas;
// //     let embaralhar;

// for(let i = quadrados.length - 1; i !== 0; i --){
//     quadrados[i]= quadrados[embaralhar];
//     quadrados[embaralhar] = numeroCartas;
// }

// console.log(quadrados)
// return quadrados;
// }
