var tentativas = 3;
var numeroSecreto = parseInt(Math.random() * 10)+1;

function capturar() {
  var chute = parseInt(document.getElementById("valor").value);
  numeroTentativas();
  if (tentativas == 0) {
    var numeroErrado = "Voce Não tem mais tentativas" + numeroSecreto;
    document.getElementById("valorCapturado"), innerHTML = numeroErrado;
  } else if (numeroSecreto == chute) {
    var acertou = "Parabens voce acertou o valor secreto";
    document.getElementById("valorCapturado").innerHTML = acertou;
  } else if (chute > numeroSecreto) {
    var numeroMenor = "O numero secreto e menor!";
    document.getElementById("valorCapturado").innerHTML = numeroMenor;
    tentativas = tentativas - 1;
  } else if (chute < numeroSecreto) {
    var numeroMaior = "O numero secreto e maior";
    document.getElementById("valorCapturado").innerHTML = numeroMaior;
    tentativas = tentativas - 1;
  }

  numeroTentativas();
  if (tentativas == 0) {
    var numeroErrado = "Voce não acertou a Constante de planck e o demogorgon matou a todos !!! A constante de plank era: " + numeroSecreto;
    document.getElementById("valorCapturado").innerHTML = numeroErrado;
  }
}

function numeroTentativas() {
  let validacaoTentativas = ("O numero atual de tentativas é :" + tentativas);
  document.getElementById("tentativas").innerHTML = validacaoTentativas;
}
