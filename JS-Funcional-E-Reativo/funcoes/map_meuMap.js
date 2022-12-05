Array.prototype.meuMap = function(fn) {
  const novoArray = [];
  for(let i = 0; i < this.length; i++) {
    novoArray.push(fn(this[i], i, this));
  };
  return novoArray
}