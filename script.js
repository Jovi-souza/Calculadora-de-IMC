function calcular() {
    document.getElementById("abaixoDoPeso").classList.add("hiden")
    document.getElementById("pesoNormal").classList.add("hiden")
    document.getElementById("acimaDoPeso").classList.add("hiden")

    let Weight = document.querySelector('#Weight')
    let height = document.querySelector('#height')

    let resultIMC = (Weight.value / ((Number(height.value) / 100) * (Number(height.value) / 100)))

    mensagemDeResultado.innerHTML = `Resultado: ${resultIMC.toFixed(1)}`

    let FirstPage = document.getElementById("FirstPage")
    FirstPage.classList.add("hiden")

    if (resultIMC < 18.5) {
        resultIMCAbaixo.innerHTML = 'Abaixo do Peso Normal'
        let abaixoDoPeso = document.getElementById("abaixoDoPeso")
        abaixoDoPeso.classList.toggle("hiden")

    } else if (resultIMC < 25) {
        resultIMCNormal.innerHTML = 'Peso Normal'
        let pesoNormal = document.getElementById("pesoNormal")
        pesoNormal.classList.toggle("hiden")

    } else if (resultIMC < 30) {
        resultIMCAcima.innerHTML = 'Exceso de peso'
        let acimaDoPeso = document.getElementById("acimaDoPeso")
        acimaDoPeso.classList.toggle("hiden")

    } else if (resultIMC < 35) {
        resultIMCAcima.innerHTML = 'Obesidade Classe I'
        let acimaDoPeso = document.getElementById("acimaDoPeso")
        acimaDoPeso.classList.toggle("hiden")

    } else if (resultIMC < 40) {
        resultIMCAcima.innerHTML = 'Obesidade Classe II'
        let acimaDoPeso = document.getElementById("acimaDoPeso")
        acimaDoPeso.classList.toggle("hiden")

    } else if (resultIMC > 40) {
        resultIMCAcima.innerHTML = 'Obesidade Classe III'
        let acimaDoPeso = document.getElementById("acimaDoPeso")
        acimaDoPeso.classList.toggle("hiden")
    }
}