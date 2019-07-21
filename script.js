let imagensGatos = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
];
let cartas = document.querySelectorAll(".card");
let carta1;
let carta2;
let imagens = imagensGatos.concat(imagensGatos);

// Cria uma lista com dias copias das imagens
imagens = embaralhar(imagens);
// Inicio do jogo
for(carta of cartas){
  abrir(carta);
}
setTimeout(function(){
  iniciarJogada();

},2000);
// Função recebe Vetor com uma lista vazia e embaralha as cartas

function embaralhar(vetor){
  let lugar;
  let posicao;
  
  
  for(let variavel = vetor.length- 1; variavel !== 0; variavel--){
    posicao= Math.floor(Math.random()*variavel);

    lugar = vetor[variavel];
    vetor[variavel]= vetor[posicao];
    vetor[posicao] = lugar;
  }
  console.log(vetor);
  mandarCartas(vetor);
}

function mandarCartas(lista){
  
  for (i = 0; i<lista.length;i++){
    document.querySelectorAll('img')[i].src = lista[i];
    console.log(document.querySelectorAll('img')[i]);
  }
}

// Funções para mostrar frente e verso da carta
function fecharCarta(face){
  face.style.backgroundImage= "url'('img/itachi.jpeg')"
  face.onclick= clique;
}

function abrirCarta(face){
  face.style.backgroundImage= `url('img/${img[Number(carta.id)]}')`;
  carta.onclick= null ;
  
}
// Funções para mostrar frente e verso da carta

// Faz as cartas não funcionar com o click
function cartaParacima(){
  for(let carta of cartas){
    carta.onclick= null;
  }
}
// Função fecha todas as cartas erradas
function cartaParabaixo(){
  for(let carta of cartas){
    if(!carta.classList.contains('certa')){
      fecharCarta(carta);
    }
  }
}

// Compara se as cartas são iguais
function cartasCorretas(event){
  abrirCarta(event.target);
  if(carta1){
    carta2= event.target;
    cartaParacima();
    verificarCartas();
  }
  else{
    carta1= event.target;
  }
}
// Função compara as cartas iguais, se for igual trava as 2 para cima 
function verificarCartas(){
  if(carta1.style.backgroundImage!==carta2.style.backgroundImage){
    setTimeout(function(){
      fecharCarta(carta1);
      fecharCarta(carta2);
      comecarJogo();
    }, 2000);
  }
  else{
    carta1.classList.add('certa');
    carta2.classList.add('certa');
    comecarJogo();
  }
}
// Função para iniciar a jogada
function comecarJogo(){
  carta1= null;
  carta2=null;
  cartaParabaixo();
}
// // console.log(img);

// function virarCard() {
//   this.classList.toggle("flip");
//   classList.toggle();
// }
// quadrados.forEach(quadrado => quadrado.addEventListener("click", virarCard));
// // colocamos efeito de FLIP nas cartas

// // Fun

// function embaralhar(cards) {
//   let tamanhoCards = cards.length - 1;
//   let indiceAleatorio;
//   let valorTemporario;

//   cards.forEach((card, position) => {
//     if (tamanhoCards !== 0) {
//       indiceAleatorio = Math.floor(Math.random() * tamanhoCards);
//       valorTemporario = cards[position];
//       cards[position] = cards[indiceAleatorio];
//       cards[indiceAleatorio] = valorTemporario;
//     }
//   });

//   return cards;
// }

// // const emba =  quadrados[index].getElementById("card").children.length;
// const cardsEmbaralhados = embaralhar(imagens);
// quadrados.forEach((val, index) => {
//   cardsEmbaralhados.forEach(caminhoImagem => {
    
//     quadrados[index].children[0].src = caminhoImagem;  });

//     console.log(val.children[0].src);

// });