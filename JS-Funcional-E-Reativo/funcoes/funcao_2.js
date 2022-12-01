function bomDia() {
  console.log('Bom dia')
}
function boaTarde() {
  console.log('Boa Tarde')
}

function executarQualquerCoisa(fn) {
  console.log(typeof fn)
  // fn()
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(3);