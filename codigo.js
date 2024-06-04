let caixaDeTexto = document.querySelector("#mensagem");

let caixaDeResposta = document.querySelector("#resposta");

function enviar() {
  caixaDeResposta.innerHTML += "<p>" + caixaDeTexto.value + "</p>";
}
