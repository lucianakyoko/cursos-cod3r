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