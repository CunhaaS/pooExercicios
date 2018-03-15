function a() {
    let frase = prompt("Escolha a frase")
    console.log(frase.length)
}
function b() {
    let nome = prompt("Escolha o nome")
    let apelido = prompt("Escolha o apelido")
    console.log(apelido.toUpperCase() + ", "+ nome.toUpperCase())
}
function c() {
    let frase = prompt("Escolha a frase")
    let contadora = 0
    let aeiou = ["a","e","i","o","u","A","E","I","O","U"]
    for (let i = 0; i < frase.length; i++) {
        for (let j = 0; j < aeiou.length; j++) {
            if(frase[i]==aeiou[j])
            {
                contadora++
            }
        }
    }
    console.log(contadora)
}
function c() {
    let frase = prompt("Escolha a frase")
    let contadora = 0
    let aeiou = ["a","e","i","o","u","A","E","I","O","U"]
    for (let i = 0; i < frase.length; i++) {
        for (let j = 0; j < aeiou.length; j++) {
            if(frase[i]==aeiou[j])
            {
                contadora++
            }
        }
    }
    console.log(contadora)
}
function d() {
    let frase = prompt("Escolha a frase")
    let contadora = 0
    let espaco = " "
    for (let i = 0; i < frase.length; i++) {
        if(frase[i] != espaco)
        {
            if(frase[i + 1] == espaco)
            {
                contadora++
            }
        }
        if(frase[i] == espaco)
        {
            if(frase[i + 1]!=espaco)
            {
                contadora++
            }
        }
    }
    console.log(contadora)
}
function e() {
    let frase = prompt("Escolha a frase")
    let fraseInvertida = frase.split("").reverse().join("")
    console.log(fraseInvertida)
}
function f() {
    let frase = prompt("Escolha a frase")
    let caracter = prompt("Escolha o caracter")
    let frase2 = frase
    for (let i = 0; i < frase.length; i++) {
        if(frase.charAt(i) == caracter)
        {
            frase2 = frase2.replace(caracter,"")
        }
    }
    console.log(frase2)
}
function g() {
    let segundos = parseInt(prompt("Digite os segundos"))
    let segundos2 = segundos
    let horas = parseInt(segundos / 3600)
    segundos = segundos - (horas*3600)
    let min = parseInt(segundos/60)
    segundos = segundos - (min*60)
    let txt = segundos2 + "s = "+horas+"h e "+ min +"min e "+ segundos +"s"
    console.log(txt)
}
function h() {
    let frase = prompt("Escolha a frase")
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let numero = parseInt(prompt(""))
    let code = ""
    for (let i = 0; i < frase.length; i++) {
        for (let j = 0; j < abc.length; j++) {
            if (frase[i]==abc[j]) {
                code = code + abc[j + numero]
            }
        }
    }
    console.log(code)
}