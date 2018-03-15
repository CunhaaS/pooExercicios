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
    let listage = listagem(student)
    let tamanh = tamanho(student)
    let remove = remover(student)
    show("A.a -> " + listage)
    show("A.b -> " + remove)
    show("A.c -> " + tamanh)
}
function listagem(student){
    let txt = ""
    for (let x in student) 
    {
        txt = txt + "nome: " + x + "\n"
    }
    return(txt)
}
function remover(student) {
    let txt = ""
    for (let x in student) 
    {
        txt += " valor: " + student[x] + "\n"
    }
    txt += "Removendo o grade \n"
    delete student.grade
    for (let x in student) 
    {
        txt += " valor: " + student[x] + "\n"
    }
    return(txt)
}
function tamanho(student){
    let txt = 0
    for (let x in student) 
    {
        txt++
    }
    return(txt)
}
// Alinea B
function funcB(){
    let grades = [
        {
        name: 'Rui',
        grade: 8
        },
        {
        name: 'Ana',
        grade: 12
        },
        {
        name: 'Carla',
        grade: 14
        }
    ]
    let inserido = inserir(grades)
    let media = calculo(grades)
    let positivo = notas(grades)
    show("B.a -> " + inserido)
    show("B.b -> " + media)
    show("B.c -> " + positivo)
}
function inserir(grades){
    
    let txt = ""
    let nome = prompt("Insira o seu Nome!")
    let valor = prompt("Insira a sua Nota!")
    for (let x in grades) 
    {
        txt += "nome: " + grades[x].name + " valor: " + grades[x].grade + "\n"
    }
    return(txt)
}
function calculo(grades){
    
    let soma = 0
    let contadora = 0
    let media = 0
    for (let x in grades) 
    {
        soma += grades[x].grade
        contadora++
    }
    media = soma / contadora
    return(parseFloat(media.toFixed(2)) + "\n")
}
function notas(grades){
    
    let txt = ""
    for (let x in grades) 
    {
        if(grades[x].grade >= 9.5)
        {
            txt += "nome: " + grades[x].name + " valor: " + grades[x].grade + "\n"
        }
        
    }
    return(txt)
}