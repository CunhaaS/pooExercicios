
function olaMundo(){
    console.log("Olá Mundo!")
}
function olaNome(){
    let nome = "José"
    console.log("Olá "+nome+"!")
}
function areas(){
    let lado1 = prompt ("digite um lado:")
    let lado2 = prompt ("digite o outro lado:")
    let area = lado1 * lado2
    console.log("A area do seu rectangulo é: " + area)
}
function calculadora(){
    let numero1 = prompt ("digite um valor:")
    let numero2 = prompt ("digite o outro valor:")
    let valorAritmetico = prompt ("(+,*,-)")
    let valorFinal
    if(valorAritmetico == "+"){
        valorFinal = parseInt(numero1) + parseInt(numero2)
        console.log(valorFinal);
    } else if(valorAritmetico == "*"){
        valorFinal = parseInt(numero1) * parseInt(numero2)
        console.log(valorFinal);
    } else if(valorAritmetico == "-"){
        valorFinal = parseInt(numero1) - parseInt(numero2)
        console.log(valorFinal);
    }
}
function imc(){
    let altura = prompt ("digite a sua altura:")
    let peso = prompt ("digite o seu peso")
    let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
    if( parseFloat(imc) < 18.5){
        console.log("Abaixo de peso")
    } else if(18.5 < parseFloat(imc) && parseFloat(imc) < 24.9){
        console.log("Peso normal")
    } else if(24.9 < parseFloat(imc) && parseFloat(imc) < 29.9){
        console.log("Sobrepeso")
    } else if(29.9 < parseFloat(imc) && parseFloat(imc) < 34.9){
        console.log("Obesidade grau I")
    } else if(34.9 < parseFloat(imc) && parseFloat(imc) < 39.9){
        console.log("Obesidade grau II")
    } else {
        console.log("Obesidade grau III ou mórbida");
    }
}
function eco(){
    let nome = prompt ("Insira o seu nome:")
    let repete = prompt ("Insira o numero de repetições:")

    for (let i = 0; i < repete; i++) {
        console.log(nome)
    }
}
function numeros() {
    let numero1 = prompt ("Insira o primeiro numero:")
    let numero2 = prompt ("Insira o segundo numero:")

    for (let i = parseInt(numero1); i < (parseInt(numero2) + 1); i++) {
        console.log(i)
    }
}
function tabuada(){
    let numero = prompt ("Escolha a tabuada")

    for (let i = 1; i <= 10; i++) {
        console.log (numero +" x "+ i + " = " + (numero*i))
    }
}
function somadosmultiplosde3(){
    let numero = prompt ("Escolha o 1 numero")
    let numero2 = prompt ("Escolha o 2 numero")
    let contadora = 0
    for (let i = parseInt(numero); i <= parseInt(numero2); i++) {
        if((i%3) == 0)
        {
            contadora = parseInt(contadora) + parseInt(i)
        }
    }
    console.log(contadora)
}
function primos(){
    let numero = prompt ("Escolha o numero")
    let resultado
    if (numero == 2)
    {
        console.log("Sim")
    }
    else
    {
        for (let i = 2; i < numero; i++) {
            if((numero%i) == 0)
            {
                resultado = "Não"
                break
            }
            else
            {
                resultado = "Sim"
            }
        }
        console.log(resultado)
    }
    
}