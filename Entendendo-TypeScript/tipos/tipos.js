"use strict";
//string
let nome = 'João';
console.log(nome);
// nome = 28;
//numbers
let idade = 27;
// idade = 'Ana';
idade = 29;
idade = 29.2;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';
//array
let hobbies = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);
//tuplas
let endereco = ['Av Principal', 90, ''];
console.log(endereco);
endereco = ['Rua Importante', 1260, 'bloco C'];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
//Any
let carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: '2019'
};
console.log(carro);
//funcao
function retornaMeuNome() {
    //return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9));
const teste = function (a, b) {
    return false;
};
//tipo função
let calculo;
// calculo =  digaOi;
// calculo()
//calculo={}
calculo = multiplicar;
console.log(calculo(5, 6));
