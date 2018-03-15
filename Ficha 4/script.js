let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}

// Alinea A
function funcA(){
    let student = {
        name: "David Silva",
        course: "POO",
        grade: 12
    }
    let listagem = listagem(student)
    let tamanho = tamanho(student)
    
    show("A ->" + listagem)
    show("A ->" + tamanho)
}
function listagem(student){
    console.log(Object.keys(student))
    return (Object.keys(student))
}
function tamanho(student){
    console.log(Object.keys(student).length)
    return (Object.keys(student).length)
}