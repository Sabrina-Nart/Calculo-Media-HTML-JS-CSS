var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var operacao = "+";
var operacaoChange = false;

function toggleResult(show) {

  var classList = spanResultado.parentElement.classList;
  if (show) {
    classList.remove("hidden");
  } else {
    classList.add("hidden");
  }
}

function setNumero1(input) {
  numero1 = +input.value;
  console.log("Número 1: ", numero1);
  toggleResult(false);
}

function setNumero2(input) {
  numero2 = +input.value;
  console.log("Número 2: ", numero2);
  toggleResult(false);
}

function setNumero3(input) {
    setNumero3 = +input.value;
    console.log("Número 3: ", numero3);
    toggleResult(false);
}


function setOperacao(select) {
  operacao = select.value;
  console.log("Operação: ", numero2);
  toggleResult(false);
  operacaoChange = true;
}

function calcular() {

    console.log(numero1, operacao, numero2, numero3);

    var resultado;

    resultado = (numero1 + numero2 + numero3) / 3 ;
  
    console.log("Resultado: ", resultado);


    var spanResultado = document.getElementsByTagName("span")[0];

    console.log("spanResultado: ", spanResultado);

    if (spanResultado.firstChild) {
        spanResultado.removeChild(spanResultado.firstChild);
    }

    var textResultado = document.createTextNode(resultado);
    
    console.log("textResultado: ", textResultado);

    spanResultado.appendChild(textResultado);

    toggleResult(true);
}

function validaNumero(input) {

  var numero = +input.value;
  var spanParent = input.parentElement.getElementsByTagName("span")[0];

    if (isNaN(numero)) {

        var spanElement = document.createElement("span");

            spanElement.style.color = 'red';
            spanElement.style.fontWeight = 'bold';
            spanElement.classList.add("invalid");

        var textNode = document.createTextNode("Valor inválido!");
            spanElement.appendChild(textNode);

        var spanParent = input.parentElement.getElementsByTagName("span")[0];

        if (!spanParent) {
            input.parentElement.appendChild(spanElement);
        }
    } else if (spanParent) {
        spanParent.remove();
    }
}

function enableCalc() {

  var value1 = document.getElementById("inputNumero1").value;
  var hasValue = value1;

  document.getElementById('calcular').disabled = !hasValue;
}