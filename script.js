quadrados = document.querySelectorAll('.card');
function virarCard(){
    this.classList.toggle('flip');
    
    // console.log('fui clicado');
    // console.log(this);
}
quadrados.forEach(quadrado => quadrado.addEventListener('click', virarCard));
// colocamos efeito de FLIP nas cartas




// Manter a Funtion embatalhar dessa forma, estou corrigindo erros.
function embaralhar (quadrados){
    let numeroCartas= quadrados.length;
    let embaralharCartas = 0; 
    let i;
while(0 !== numeroCartas){
       i= Math.floor(Math.random()* numeroCartas);
    numeroCartas -= 1;
    embaralharCartas= quadrados[numeroCartas];
    quadrados[numeroCartas] = quadrados[i];
    quadrados[i] = embaralharCartas;
console.log(embaralhar)   
}

console.log()
return quadrados;''
}
embaralhar(quadrados);
// Não apresenta erros no Console, mas não esta embaralhando as Cartas. Não esquecer de verificar os parametos !

