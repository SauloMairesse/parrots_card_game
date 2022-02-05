// Declarando e Preparando Variáveis Globais
const nCartas = parseInt(prompt('Entre 2 e 7 pares, Quantos Pares de carta deseja?'));
const imagem = ["arquivosUteis/bobrossparrot.gif","arquivosUteis/explodyparrot.gif","arquivosUteis/fiestaparrot.gif","arquivosUteis/metalparrot.gif","arquivosUteis/revertitparrot.gif","arquivosUteis/tripletsparrot.gif","arquivosUteis/unicornparrot.gif",];
function comparador() { 
	return Math.random() - 0.5;
}
imagem.sort(comparador); //Imagens embaralhadas.
let mainHTML = document.querySelector('main');
let asCartas = [];
let primeiraCarta;
let segundaCarta;

// Preparando HTML PARA MOSTRAR O N CERTO DE CARTAS

for (let i = 0; i < nCartas; i++) {
    // novaCarta.document.querySelector(".costas img")).setAttribute('src', `${imagem[i]}`)
    let novaCarta = `<div class="espaçoDaCarta">                          
                        <div class="carta" onclick="virarCarta(this)">
                            <div class="frente">
                                <img src="arquivosUteis/front.png" alt="">
                            </div>
                            <div class="costas">
                                <img src="${imagem[i]}" alt="">
                            </div>
                        </div>
                    </div>`;
    console.log(asCartas)
    asCartas.push(novaCarta);
    asCartas.push(novaCarta);
    asCartas.sort(comparador);
}
// "Postando" As IMAGENS NO HTML

for(let i = 0; i < asCartas.length; i++){
    mainHTML.innerHTML = mainHTML.innerHTML + asCartas[i];
}

//  ------- COMEÇO DO GAME --------

function virarCarta(diviSelecionada){
        diviSelecionada.classList.add('viradinha');
        if(!document.querySelector('.primeiraCarta')){
            diviSelecionada.classList.add('primeiraCarta');
            primeiraCarta = diviSelecionada;
            primeiraCarta.setAttribute('onclick','')
            console.log(primeiraCarta);
            return false;
        }
            diviSelecionada.classList.add('segundaCarta');
            segundaCarta = diviSelecionada;
            console.log(segundaCarta);
            setTimeout(compararCartas,1000);
            console.log(document.querySelectorAll('.estouComMeuPar').length);
            console.log(asCartas.length);
}

function compararCartas(){
    if(primeiraCarta.innerHTML !== segundaCarta.innerHTML){
        primeiraCarta.classList.remove('primeiraCarta');
        primeiraCarta.classList.remove('viradinha');
        segundaCarta.classList.remove('segundaCarta');
        segundaCarta.classList.remove('viradinha');
        primeiraCarta.setAttribute('onclick','virarCarta(this)');
    }
    else{
        primeiraCarta.classList.remove('primeiraCarta');
        primeiraCarta.classList.add('estouComMeuPar');
        primeiraCarta.setAttribute('onclick','');
        segundaCarta.classList.remove('segundaCarta');
        segundaCarta.setAttribute('onclick','');
        segundaCarta.classList.add('estouComMeuPar');
    }
}
// if(document.querySelectorAll('.estouComMeuPar').length === asCartas.length){
//     alert('VOCE GANHOUUUU');
// }
