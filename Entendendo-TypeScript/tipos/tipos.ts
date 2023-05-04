//string
let nome:string = 'João';
console.log(nome);
// nome = 28;

//numbers
let idade:number = 27;
// idade = 'Ana';
idade = 29;
idade = 29.2;
console.log(idade)

//boolean
let possuiHobbies:boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';


//array
let hobbies: any[] = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100;
console.log(hobbies)

//tuplas
let endereco:[string, number, string] = ['Av Principal', 90, ''];
console.log(endereco);

endereco = ['Rua Importante', 1260, 'bloco C'];
console.log(endereco);

//enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul=2,
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor:Cor = Cor.Azul;
console.log(minhaCor)

//Any
let carro: any = 'BMW'
console.log(carro)
carro = {
  marca: 'BMW',
  ano: '2019'
}
console.log(carro)

//funcao
function retornaMeuNome(): string {
  //return minhaIdade
  return nome
}

console.log(retornaMeuNome())

function digaOi():void {
  console.log('Oi')
  // return minhaIdade
}

function multiplicar(numA:number, numB:number): number {
  return numA * numB;
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))
const teste = function(a:number, b:number): boolean {
  return false
}

//tipo função
let calculo:(numA:number, numB:number)=>number 
// calculo =  digaOi;
// calculo()
//calculo={}

calculo = multiplicar
console.log(calculo(5,6))

//objetos
let usuario: {nome: string, idade: number} = {
  nome: 'João',
  idade: 27
}
console.log(usuario)

// usuario = {}
// usuario = {
  //   name: 'Maria',
  //   age: 31
  // }

  usuario = {
  idade: 31,
  nome: 'Maria',
}
console.log(usuario)

/* DESAFIO  

  Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto ue recebe a hora(núm) e retorna uma string
      -> Ponto normal (<=8)
      -> Fora do horário (>8)
*/

//Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}
let funcionario: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal';
    } else {
      return 'Fora do horário'
    }
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

let funcionario2: Funcionario= {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal';
    } else {
      return 'Fora do horário'
    }
  }
}

//Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`)

nota = 10
console.log(`Minha nota é ${nota}`)
//nota = true

//checando tipos
let valor = 30;
// valor = false;

if (typeof valor === 'number') {
  console.log('é um número')
} else {
  console.log(typeof valor)
}

// never
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: 'sabão',
  // preco: -1,
  preco: 8,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome')
    }

    if(this.preco <=0) {
      falha('Preço inválido')
    }
  }
}

produto.validarProduto();

let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;


type Contato = {
  nome: string,
  tell1: string,
  tell2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tell1: '123456789',
  tell2: null
}

console.log(contato1.nome)
console.log(contato1.tell1)
console.log(contato1.tell2)

let podeSerNulo = null; //tipo any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

/* DESAFIO */

type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  }
}


type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98745632']
}

correntista.contaBancaria.depositar(3000);
console.log(correntista)