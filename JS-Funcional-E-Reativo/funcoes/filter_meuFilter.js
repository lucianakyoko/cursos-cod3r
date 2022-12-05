Array,prototype.meuFiter = function(fn) {
  const novoArray = [];

  for(let i = 0; i < this.length; i++) {
    if(fn(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}