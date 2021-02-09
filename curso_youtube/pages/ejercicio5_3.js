function inicio (x) {
  function sumar (y) {
    return x + y
  }
  return sumar
}

const calculo = inicio(5)
const resultado = calculo(7)   

console.log(calculo)
console.log(resultado)



// Lo mismo que arriba, pero forma "Currying"

const sum = x => y => x + y;

const resultado2 = sum(5)(7)
console.log("segunda forma:",resultado2)