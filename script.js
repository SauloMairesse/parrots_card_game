// Declarando e Preparando Variáveis Globais
const nCartas = parseInt(prompt('Entre 2 e 7 pares, Quantos Pares de carta deseja?'));
const imagem = ["arquivosUteis/bobrossparrot.gif","arquivosUteis/explodyparrot.gif","arquivosUteis/fiestaparrot.gif","arquivosUteis/metalparrot.gif","arquivosUteis/revertitparrot.gif","arquivosUteis/tripletsparrot.gif","arquivosUteis/unicornparrot.gif",];
function comparador() { 
	return Math.random() - 0.5;
}
imagem.sort(comparador); //Imagens embaralhadas.
let mainHTML = document.querySelector('main');
let asCartas = [];

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
    diviSelecionada.classList.add('escolhida');
    anem();
}
function anem(){
    let cartasEscolhidas = document.querySelectorAll('.escolhida .costas img');
    if(cartasEscolhidas[0].innerHTML !== cartasEscolhidas[1].innerHTML){
        document.querySelector('.escolhida').classList.remove('viradinha');
        document.querySelector('.escolhida').classList.remove('escolhida');
        }
    console.log(cartasEscolhidas);
}