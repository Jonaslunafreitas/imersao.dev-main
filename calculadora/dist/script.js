//var valorEmDolarTexto = prompt("Qual o valor em dolar você quer converter ?");

//var valorEmDolarNumero = parseFloat(valorEmDolarTexto);

//var valorEmReal = valorEmDolarNumero * 5.50;
//var valorEmRealDecimal = valorEmReal.toFixed(2);

//alert(valorEmRealDecimal);

function capturar() {
    var capturando = "";
    var primeiroValor = parseInt(document.getElementById("valor1").value);
    var segundoValor = parseInt(document.getElementById("valor2").value);
    var operacao = document.getElementById("conta").value;

    if (operacao == "adição") {
        var adicao = primeiroValor + segundoValor;
        document.getElementById("valorCapturado").innerHTML = adicao;
    }else{
    }

    if(operacao == "subtração") {
        var subtracao = primeiroValor - segundoValor;
        document.getElementById("valorCapturado").innerHTML = subtracao;
    }else{
    }

    if(operacao == "multiplicação") {
        var multiplicação = primeiroValor * segundoValor;
        document.getElementById("valorCapturado").innerHTML = multiplicação;
    }else{
    }

    if(operacao == "divisão"){
        var divisao = primeiroValor / segundoValor ;
        document.getElementById("valorCapturado").innerHTML = divisao;
    }else{
    }
}

