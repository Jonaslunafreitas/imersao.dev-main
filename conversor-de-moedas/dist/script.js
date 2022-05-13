//var valorEmDolarTexto = prompt("Qual o valor em dolar você quer converter ?");

//var valorEmDolarNumero = parseFloat(valorEmDolarTexto);

//var valorEmReal = valorEmDolarNumero * 5.50;
//var valorEmRealDecimal = valorEmReal.toFixed(2);

//alert(valorEmRealDecimal);

function capturar() {
    var capturando = "";
    var valorEmDolar = document.getElementById("valor").value;
    var dolarDecimal = parseFloat(valorEmDolar);
    var valorEmReal = dolarDecimal * 5.50;
    var valorEmRealDecimal = valorEmReal.toFixed(2);
    capturando = document.getElementById("valor").value;
    document.getElementById("valorCapturado").innerHTML = valorEmRealDecimal;
}