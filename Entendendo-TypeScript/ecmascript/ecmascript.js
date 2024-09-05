// let & const
var seraQuePode = '?';
console.log(seraQuePode);
//var seraQuePode = '?' //hoisting
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco';
    console.log(acao);
}
;
var cpf = '123.456.789-00';
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
;
revelar();
console.log(segredo);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
