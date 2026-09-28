function calcularIMC (kg, m) {
    imc = kg * (m * m)

    if (IMC < 18.5){
        alert("Abaixo do peso")
    } elseif (imc >= 18.5 && imc < 24.9) {
        alert("Peso normal")
    }
    else{
        alert("Sobrepeso")
    }
}
//achei um pouco complicado, mas ja tinha visto e nao achei tao dificil pra fazer, leo me ajudou muito