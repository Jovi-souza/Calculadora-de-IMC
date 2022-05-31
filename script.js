function calcular() {
    let Weight = document.querySelector('#Weight')
    let height = document.querySelector('#height')

    let resultIMC = (Weight.value / ((Number(height.value) / 100) * (Number(height.value) / 100)))

    mensagemDeResultado.innerHTML = `Resultado: ${resultIMC.toFixed(1)}`

    let action = document.getElementById("btnCalcular")

    action.addEventListener("click", function () {
        let FirstPage = document.getElementById("FirstPage")
        FirstPage.classList.add("hiden")
    })

    if (resultIMC < 18.5) {
        resultIMCAbaixo.innerHTML = 'Abaixo do Peso Normal'

        action.addEventListener("click", function () {
            let abaixoDoPeso = document.getElementById("abaixoDoPeso")
            abaixoDoPeso.classList.toggle("hiden")
        })

    } else if (resultIMC < 25) {
        resultIMCNormal.innerHTML = 'Peso Normal'

        action.addEventListener("click", function () {
            let pesoNormal = document.getElementById("pesoNormal")
            pesoNormal.classList.toggle("hiden")
        })

    } else if (resultIMC < 30) {
        resultIMCAcima.innerHTML = 'Exceso de peso'

        action.addEventListener("click", function () {
            let acimaDoPeso = document.getElementById("acimaDoPeso")
            acimaDoPeso.classList.toggle("hiden")
        })

    } else if (resultIMC < 35) {
        resultIMCAcima.innerHTML = 'Obesidade Classe I'

        action.addEventListener("click", function () {
            let acimaDoPeso = document.getElementById("acimaDoPeso")
            acimaDoPeso.classList.toggle("hiden")
        })

    } else if (resultIMC < 40) {
        resultIMCAcima.innerHTML = 'Obesidade Classe II'

        action.addEventListener("click", function () {
            let acimaDoPeso = document.getElementById("acimaDoPeso")
            acimaDoPeso.classList.toggle("hiden")
        })

    } else {
        resultIMCAcima.innerHTML = 'Obesidade Classe III'

        action.addEventListener("click", function () {
            let acimaDoPeso = document.getElementById("acimaDoPeso")
            acimaDoPeso.classList.toggle("hiden")
        })
    }
}