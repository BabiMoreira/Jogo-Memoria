let img = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg']

let imagens = img.concat(img)

let card1 
let card2
img = document.querySelectorAll ('img')


quadrados = document.querySelectorAll('.card');
function virarCard(){
    this.classList.toggle('flip');

    classList.toggle(img)    

    // console.log('fui clicado');
    // console.log(this);
}
quadrados.forEach(quadrado => quadrado.addEventListener('click', virarCard));
// colocamos efeito de FLIP nas cartas

// Manter a Funtion embatalhar dessa forma, estou corrigindo erros.

function embaralhar (quadrados2){
    let numeroCartas= quadrados2.length;
    let embaralharCartas = 0; 
    let i;
while(0 !== numeroCartas){
       i= Math.floor(Math.random()* numeroCartas);
    numeroCartas -= 1;
    embaralharCartas= quadrados2[numeroCartas];
    quadrados2[numeroCartas] = quadrados2[i];
    quadrados2[i] = embaralharCartas;
    console.log (embaralharCartas)
}
return quadrados2;
}

embaralhar(img)


// embaralhar(imagens);
// Não apresenta erros no Console, mas não esta embaralhando as Cartas. Não esquecer de verificar os parametos !

