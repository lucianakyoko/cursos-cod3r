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