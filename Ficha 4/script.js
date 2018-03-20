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
    let valor = parseInt(prompt("Insira a sua Nota!"))
    let adiocionar = {
        name : nome,
        grade: valor
    }
    grades.push(adiocionar)
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
// Alinea C
function funcC(){
    function carro (nome, mat, cor, dep, comb) {
        this.name = nome,
        this.matricula = mat,
        this.cor = cor
        this.deposito = dep
        this.combustivel = comb
    }

    let carros = new carro("Ford",'91-GH-15',"Verde",40,"Gasoleo")
    let carros2 = new carro("Opel","23-AB-23","Branco",50,"Gasolina")
    let txt1 = ""
    for (let x in carros) 
    {
        txt1 = txt1 + "nome: " + carros[x] + "\n"
    }
    let txt2 = ""
    for (let x in carros) 
    {
        txt2 = txt2 + "nome: " + carros2[x] + "\n"
    }
    let mudarCor = mudarCorCarro(carros,carros2)
    let quilometragem = gasolina(carros,carros2)
    show("C.a -> " + txt1 + "\n" + txt2)
    show("C.b -> " + mudarCor)
    show("C.c -> " + quilometragem)

}
function mudarCorCarro(carros,carros2) {
    
    let nome = prompt("Escolha a marca do carro: ")
    let cor = prompt("Escolha a nova cor: ")

    if(carros.name == nome) 
    { 
        carros.cor = cor 
        let txt = ""
        for (let x in carros) 
        {
            txt = txt + "nome: " + carros[x] + "\n"
        }
        return(txt)
    }
    else if(carros2.name == nome) 
    { 
        carros2.cor = cor
        let txt = ""
        for (let x in carros2) 
        {
            txt = txt + "nome: " + carros2[x] + "\n"
        }
        return(txt)
    }
    else 
    {
        return ("Não existe nenhum carro com esse nome")
    }
}
function gasolina(carros,carros2) {
    let nome = prompt("Digite aqui o nome do carro: ")
    let kil = prompt("Numero de Km efetuados: ")
    let gasolGasto = (51*kil)/100
    if(carros.name == nome) 
    { 
        carros.deposito -= gasolGasto
        let txt = ""
        for (let x in carros) 
        {
            txt = txt + "nome: " + carros[x] + "\n"
        }
        return(txt)
    }
    else if(carros2.name == nome) 
    { 
        carros2.deposito -= gasolGasto
        let txt = ""
        for (let x in carros2) 
        {
            txt = txt + "nome: " + carros2[x] + "\n"
        }
        return(txt)
    }
    else 
    {   
        return ("Não existe nenhum carro com esse nome")
    }
}
// Alinea D
class Cylinder {

    constructor(raio,altura){
        this.r = raio
        this.h = altura
    }

    Volume() {
        let volume = (this.r)*(this.r)*(this.h)*(Math.PI)
        return volume
    }
}
function funcD() {
    let cyl = new Cylinder(7, 4)
    console.log('volume =', cyl.Volume().toFixed(4)) 
}
// Alinea E
class Circle {

    constructor(raio){
        this.r = raio
    }

    area() {
        let area = (this.r)*(this.r)*(Math.PI)
        return area
    }
    perimeter() {
        let perimeter = 2*(this.r)*(Math.PI)
        return perimeter
    }
}

function funcE() {
    let c = new Circle(3)
    console.log('Area =', c.area().toFixed(2))
    console.log('perimeter =', c.perimeter().toFixed(2)) 
}
// Alinea F
class inItEnd {
    constructor(word2){
        this.word = word2
    }
    get word() {
        return this._word
    }
    set word(value){
        this._word = value[0] + value[value.length - 1]
    }
}
function funcE() {
    let str = new inItEnd("dog")
    console.log(str.word) 
}
