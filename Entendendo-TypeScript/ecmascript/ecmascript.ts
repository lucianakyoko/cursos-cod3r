// let & const

let seraQuePode = '?' 
console.log(seraQuePode);
//var seraQuePode = '?' //hoisting

let estaFrio = true;
if(estaFrio) {
  let acao = 'Colocar o casaco';
  console.log(acao)
};

const cpf: string = '123.456.789-00';

var segredo = 'externo';
function revelar() {
  var segredo = 'interno';
  console.log(segredo)
};

revelar()
console.log(segredo)


for(let i =0; i < 10; i++) {
  console.log(i);

}