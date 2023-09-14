document.getElementById("limpar").onclick = function () {

  document.getElementById("inputNumero1").value = "";
  document.getElementById("inputNumero2").value = "";
  document.getElementById("inputNumero3").value = "";

    var spanResultado = document.getElementById("spanResultado");

    if (spanResultado.firstChild) {

        spanResultado.removeChild(spanResultado.firstChild);
    }

    document.getElementById("selectOperacao").value = "+";

    toggleResult(false);
    enableCalc();
    operacaoChange = false;
    enableClear();
};

function enableClear() {

    var value1 = document.getElementById("inputNumero1").value;
    var value2 = document.getElementById("inputNumero2").value;
    var value3 = document.getElementById("inputNumero3").value;

    var hasValue = value1 || value2 || value3 || operacaoChange;

    document.getElementById('limpar').disabled = !hasValue;
}
