// let n = parseInt();

let n = parseInt()
let entrada = somatorio()

function somatorio(n) {
  var soma = 0
  for (var i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}
console.log(somatorio(4))