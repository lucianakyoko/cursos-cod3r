//Function declaration:

function bomdia() {
  console.log('bom dia')
}
bomdia()

//Funcion expression - Trata a função e armazena dentro de uma variável:
const boaTarde = function() {
  console.log('boa tarde')
}
boaTarde()


function somar(a, b) {
  return a + b;
}

let resultado = somar(3, 4)
console.log(resultado);

resultado = somar(3, 5, 5, 6, 7, 8);
console.log(resultado);

resultado = somar(3)
console.log(resultado);