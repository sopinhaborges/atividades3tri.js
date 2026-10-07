function interagirMenu() {
    let opcao, real, euro, dolar

    while(opcao !== "e"){
        alert("a. Converter de real para euro \n b. Converter de euro para real \n c. Converter de real para dólar \n d. Converter de dólar para real \n e. Fechar o programa.")

        opcao = Number(prompt(""))

        switch (opcao) {
            case "a":
                real = Number(prompt("Digite um valor em real:"))
                euro = real / 5.61
                alert(euro)
                break;

                case "b":
                euro = Number(prompt("Digite um valor em euro:"))
                real = euro / 5.61
                alert(real)
                break;

                case "c":
                real = Number(prompt("Digite um valor em real:"))
                dolar = real / 5
                alert(dolar)
                break;

                 case "d":
                real = Number(prompt("Digite um valor em dólar:"))
                real = dolar / 5
                alert(real)
                break;

                case "e":
                    alert("Fim do programa")
                    break;
        }

    }
}
// achei "complicado" pela conversao, mas o Leo me explicou de uma forma tranquila e facil de entender.