const nCartas = parseInt(prompt('Entre 2 e 7 pares, Quantos Pares de carta deseja?'));
var mainHTML = document.querySelector('main');
var cartaNova = '<div class="espaçoDaCarta"><div class="carta"><div class="frente"><img src="arquivosUteis/front.png" alt=""></div><div class="costas"><img src="arquivosUteis/bobrossparrot.gif" alt=""></div></div></div>';
for (var i = 1; i <= (nCartas * 2); i++) {
    mainHTML.innerHTML = mainHTML.innerHTML + cartaNova;
}