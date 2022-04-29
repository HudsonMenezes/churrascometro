// Carne - 400 gramas por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/Agua - 1000ml por pessoa + 6 horas 1500ml

//Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos') // pega os elementos de cada input
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

// funcão para calcular a quantidade.
function calcular() {
  let adultos = inputAdultos.value // quantidade de adultos
  let criancas = inputCriancas.value // quantidade de crianças
  let duracao = inputDuracao.value

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas
  let qtdTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas
  let qtdTotalCerveja = cervejaPP(duracao) * adultos

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalCerveja / 355
  )} Latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalBebidas / 2000
  )} Garrafas de Refrigerante/Água</p>`
}

//se for mais de 6 hrs de duração, o valor da carne por pessoa (carnePP) muda.
function carnePP(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

//se for mais de 6 hrs de duração, o valor da cerveja por pessoa (cervejaPP) muda.
function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

//se for mais de 6 hrs de duração, o valor da bebida por pessoa (bebidasPP) muda.
function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
