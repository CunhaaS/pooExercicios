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
let carros = []
class Carro {
    constructor(marca, matricula, cor, depositoAtual, tipoCombustivel) {
        this.marca = marca
        this.matricula = matricula
        this.cor = cor
        this.depositoAtual = depositoAtual
        this.tipoCombustivel = tipoCombustivel
    }

    get marca() {
        return this._marca
    }

    set marca(novaMarca) {
        this._marca = novaMarca
    }

    get cor() {
        return this._cor
    }

    set cor(novaCor) {
        this._cor = novaCor
    }

    get depositoAtual() {
        return this._depositoAtual
    }

    set depositoAtual(novoDeposito) {
        if (novoDeposito >= 0) {
            this._depositoAtual = novoDeposito
        } else {
            console.log("Não é possível fazer esses kms com o depósito atual!")
        }       
    }

    consumir(km) {
        this.depositoAtual -= km * 5 / 100
    }

}

function funcC() {
    // Criação de 2 instâncias de carro
    let meuCarro = new Carro("Ford","91-GH-15","verde", 40, "Gasóleo")
    let meuCarro2 = new Carro("Opel","23-AB-23","brano", 50, "Gasolina")

    // Adição das instâncias anteriores a um array
    carros.push(meuCarro, meuCarro2)

    // Analisar depósito do 2º carro
    show("Depósito atual-> " + meuCarro2.depositoAtual)
    meuCarro2.consumir(22)
    show("Depósito atual-> " + meuCarro2.depositoAtual)
    meuCarro2.consumir(11122)
    show("Depósito atual-> " + meuCarro2.depositoAtual)
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
