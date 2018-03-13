function a(array) {
    let soma = 0
    let media = 0
    for (let i = 0; i < array.length; i++) {
        soma += parseInt(array[i])
    }
    media = soma/array.length
    console.log(media)
}
function b(array) {
    let min = 999
    for (let i = 0; i < array.length; i++) {
        if (min>array[i]) {
            min = array[i]
        }
    }
    console.log(min)
}
function c(array, n) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] != n) {
            newArray.push(array[i])
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i])
    }  
}
function d(array) {
    let nome = ""
    for (let i = 0; i < array.length; i++) {
        nome += array[i]
    }
    console.log(nome)
}
function e(array) {
    array.sort()
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function f(array) {
    array.sort()
    array.reverse()
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
function g(array) {
    let max = 0
    let nome = ""
    let auxiliar = ""
    let contadora = 0
    for (let i = 0; i < array.length; i++) {
        auxiliar = array[i]
        contadora = auxiliar.length
        if (contadora > max) {
            nome = auxiliar
            max = contadora
        }
    }
    console.log(nome)
}
function h(array, string) {
    let contadora = 0
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == string) {
           contadora++
        }
    }
    console.log(contadora)
}
function i(array) {
    let boolean
    for (let i = 0; i < 2; i++) {
        
        if (array[i] == array[i+1]) {
           boolean = true
           break
        }
        else
        {
            boolean = false
            break
        }
    }
    console.log(boolean)
}
function j(array) {
    let p = parseInt(prompt("Posição")) - 1
    console.log(array[p])
}
function k(num) {   
    let nums = [] 
    for(let i = 1; i < num; i++) {
        nums[i - 1] = i
    }
    for(let i = 0; i < num - 1; i++) {
        console.log(nums[i])
    }
}
function l(array) {   
    let newArray = [] 
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            newArray.push(array[i])
        }
    }
    for(let i = 0; i < array.length; i++) {
        console.log(newArray[i])
    }
}
function m(array) {   
    let newArray = [] 
    for(let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1
    }
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function n(array , array2) {   
    let newArray = []
    for(let i = 0; i < array2.length ; i++) {
        newArray.push(parseInt(array[i]) + parseInt(array2[i]))
    }
    for(let i = 0; i < newArray.length; i++) {
        console.log(newArray[i])
    }
}