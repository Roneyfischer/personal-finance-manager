var posicao
var produtos = []
var adicaoRecente = []
var nome; // aqui é o nome do gasto que é acrescido de pular linha (<br>) e linha <hr>
var valor; //aqui é o valor do gasto
var preco; // inutilizado
var separador = " | " // para separar os inputs na exibição
var idUnico = 0; // único em toda o sistema. É acrescido um número a cada fRegistro (linha 47).
var idInterno = 0; // copia e armazena em si o idUnico no momento do registro. O idInterno não é mais alterado, e o idUnico continua sendo alterado a cada fRegistro (linha 47).

var idInternoEdicao

//FUNÇÃO DO BOTÃO REGISTRAR PRODUTO
var idPassagem;
var data;

window.addEventListener("click", function(event) {

    modal = this.document.querySelector(".modal")
// const modal = document.querySelector('.modal')


if (event.target == modal) { modal.style.display = "none"; }
});








