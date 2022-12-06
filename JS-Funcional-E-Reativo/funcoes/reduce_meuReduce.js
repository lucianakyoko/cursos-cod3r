Array.prototype.meuReduce = function(fn, inicial) {
  let acc = inicial;
  for(let i = 0; i < this.length; i++) {
    if(!acc && 1 === 0) {
      acc = this[i]
      continue
    }
    acc = fn(acc, this[i], i, this)
  }
  return acc
}