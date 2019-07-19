const quadrados = document.querySelectorAll('.card');
function virarCard(){
    this.classList.toggle('flip');
    // console.log('fui clicado');
    // console.log(this);
}
quadrados.forEach(quadrado => quadrado.addEventListener('click', virarCard));



