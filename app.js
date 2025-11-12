// Configurações e Variáveis Globais

let sorteados = [];

// Funções Utilitárias

function obterValor(id) {
  return parseInt(document.getElementById(id).value);
}

function numAleat(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limparCampo(id) {
  document.getElementById(id).value = "";
}

function alterarStatusBotaoReiniciar() {
  const botao = document.getElementById("btn-reiniciar");
  if (!botao) return;
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function mostrarTexto(texto) {
  const resultado = document.getElementById("resultado");
  if (resultado) resultado.innerHTML = `<label class="texto__paragrafo">${texto}</label>`;
}

// Funções Principais

function reiniciar() {
  limparCampo("quantidade");
  limparCampo("de");
  limparCampo("ate");
  mostrarTexto("Números sorteados: nenhum até agora");
  alterarStatusBotaoReiniciar();
  sorteados = [];
}

function sortear() {
  const quantidade = obterValor("quantidade");
  const min = obterValor("de");
  const max = obterValor("ate");
  const range = (max - min + 1);
  sorteados = [];
  
  if (isNaN(quantidade) || isNaN(min) || isNaN(max)) {
    mostrarTexto("Preencha todos os campos com números válidos.");
    alterarStatusBotaoReiniciar();
    return;
  }

  if (min > max) {
    mostrarTexto("O valor mínimo não pode ser maior que o máximo.");
    alterarStatusBotaoReiniciar();
    return;
  }

  if (quantidade > range) {
    mostrarTexto("A quantidade é maior do que o intervalo disponível.");
    alterarStatusBotaoReiniciar();
    return;
    
  }

   if (quantidade <= 0) {
    mostrarTexto("A quantidade deve ser maior que zero.");
    alterarStatusBotaoReiniciar();
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    let numero = numAleat(min, max);

    while (sorteados.includes(numero)) {
      numero = numAleat(min, max);
    }

    sorteados.push(numero);
  }

  mostrarTexto(`Números sorteados: ${sorteados.join(", ")}`);
  alterarStatusBotaoReiniciar();
}
