let caixaDeTexto = document.querySelector("#mensagem");

let caixaDeResposta = document.querySelector("#resposta");

caixaDeTexto.onkeydown = function(event){
  if(event.key === 'Enter') {
      enviar();        
  }
}

function enviar() {
  let textoUser = "<hr/> <p>" + caixaDeTexto.value + "</p>";
  caixaDeTexto.value = "";
  let respostaBot;

  if (caixaDeTexto.value === "oi") {
    respostaBot = "Olá 😁";
  } else if (caixaDeTexto.value === "sair") {
    respostaBot = "Adeus 👋";
  } else {
    respostaBot = "Não entendi 🤷‍♂️🤷‍♀️";
  }

  caixaDeResposta.innerHTML += textoUser + respostaBot;
}
