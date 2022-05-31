function calcular() {
    let Weight = document.querySelector('#Weight')
    let height = document.querySelector('#height')

    let resultIMC = (Weight.value / ((Number(height.value) / 100) * (Number(height.value) / 100)))

    mensagemDeResultado.innerHTML = `Resultado: ${resultIMC.toFixed(1)}`

    if (resultIMC < 18.5) {
        resultIMCAbaixo.innerHTML = 'Abaixo do Peso Normal'

    } else if (resultIMC < 25) {
        resultIMCNormal.innerHTML = 'Peso Normal'

    } else if (resultIMC < 30) {
        resultIMCAcima.innerHTML = 'Exceso de peso'

    } else if (resultIMC < 35) {
        resultIMCAcima.innerHTML = 'Obesidade Classe I'

    } else if (resultIMC < 40) {
        resultIMCAcima.innerHTML = 'Obesidade Classe II'

    } else {
        resultIMCAcima.innerHTML = 'Obesidade Classe III'
    }
}