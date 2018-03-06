
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
    if( imc < 18.5){
        console.log("Abaixo de peso")
    } else if(18.5 <= imc < 24.9){
        console.log("Peso normal")
    } else if(24.9 <= imc < 29.9){
        console.log("Sobrepeso")
    } else if(29.9 <= imc < 34.9){
        console.log("Obesidade grau I")
    } else if(34.9 <= imc < 39.9){
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

    for (let i = numero1; i < numero2+1; i++) {
        console.log(i)
    }
}