// declara as variaveis globais
var numeroSecreto = 0;
var tentativas = 0;

function init() {

    numeroSecreto = parseInt(Math.random() * 10);
    tentativas = 3;
    atualizarTentativas();
    atualizarValorCapturado("");
    limparValor();
}

function limparValor() {
    document.getElementById("valor").value = null;
}

function atualizarTentativas() {
    const txtTentativas = `${tentativas}`;
    document.getElementById("tentativas").innerHTML = tentativas;
}

function capturar() {
    var chute = obterChute();

    try {
        validarSeTemTentativas();
        validarChuteEhMaiorNumeroSecreto(chute);
        validarChuteEhMenorNumeroSecreto(chute);
        processarAcerto();
    } catch (e) {
        tratarErro(e.message);
    }

    atualizarTentativas();
    limparValor();
}

function obterChute() {
    return parseInt(document.getElementById("valor").value);
}

function validarSeTemTentativas() {
    if (tentativas == 0) throw new Error("Você gastou todas tentativas");
}

function validarChuteEhMaiorNumeroSecreto(chute) {
    if (chute > numeroSecreto) throw new Error("O numero secreto e menor!");
}

function validarChuteEhMenorNumeroSecreto(chute) {
    if (chute < numeroSecreto) throw new Error("O numero secreto e maior!");
}

function processarAcerto() {
    atualizarValorCapturado(`Parabens voce acertou o valor secreto ${numeroSecreto}`)
    init();
}

function tratarErro(msgErro) {
    decrementarTentativa();
    atualizarValorCapturado(msgErro);
    validarSeTemTentativasFinalEInformarMensagem();
}

function atualizarValorCapturado(msg) {
    document.getElementById("valorCapturado").innerHTML = msg;
}

function decrementarTentativa() {
    if (tentativas > 0) tentativas--;
}

function validarSeTemTentativasFinalEInformarMensagem() {
    if (tentativas == 0) atualizarValorCapturado("Voce nao acertou a Constante de planck e o demogorgon matou a todos !!! A contante de plank era: " + numeroSecreto);
}


init();