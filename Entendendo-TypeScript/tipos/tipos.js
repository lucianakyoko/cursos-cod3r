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
//objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//   name: 'Maria',
//   age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = 10;
console.log(`Minha nota é ${nota}`);
//nota = true
//checando tipos
let valor = 30;
// valor = false;
if (typeof valor === 'number') {
    console.log('é um número');
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabão',
    // preco: -1,
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tell1: '123456789',
    tell2: null
};
console.log(contato1.nome);
console.log(contato1.tell1);
console.log(contato1.tell2);
let podeSerNulo = null; //tipo any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98745632']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
