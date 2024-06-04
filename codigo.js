let caixaDeTexto = document.querySelector("#mensagem");

let caixaDeResposta = document.querySelector("#resposta");

caixaDeTexto.onkeydown = function(event){
  if(event.key === 'Enter') {
      enviar();        
  }
}


let respostas1 = [
  "Oi",
  "Olá!",
  "Bem-vindo ao sistema",
  "Iniciando...",
  "Olar 😊"
];
let aleatorio;

let estado = 0;

function enviar() {
  if (estado == 0) {
    inicio();
    caixaDeTexto.value = "";
  } else if (estado == 1) {
    estado1();
    caixaDeTexto.value = "";
  }
}

function inicio() {
  aleatorio = Math.floor(Math.random() * 5);

  caixaDeResposta.innerHTML += "<hr/><p>" + caixaDeTexto.value + "</p>";

  if (caixaDeTexto.value === "Oi") {
    caixaDeResposta.innerHTML += "<hr/> <p>" + respostas1[aleatorio] + "</p>";
    estado = 1;
    caixaDeResposta.innerHTML +=
      "<hr/><p>1️⃣ Verificar saldo</p>" +
      "<p>2️⃣ Trocar senha</p>" +
      "<p>3️⃣ Extrato de uso</p>";
  } else {
    caixaDeResposta.innerHTML += "Não entendi 🤷‍♀️🤷‍♂️";
  }
}

function estado1() {
  let respostaBot;
  if (caixaDeTexto.value === "saldo") {
    respostaBot = "<hr/><p>***Tela com saldo***</p>";
    estado = 2;
  } else if (caixaDeTexto.value === "extrato" || caixaDeTexto.value === "3") {
    respostaBot =
      "<hr/><p>27/06 | - R$ 120</p>" +
      "<p>28/06 | - R$ 150</p>" +
      "<p>29/06 | - R$ 700</p>";
    estado = 2;
  } else {
    respostaBot = "<hr/><p>Não entendi 🤷‍♀️🤷‍♂️</p>";
  }
  caixaDeResposta.innerHTML += respostaBot;
}
