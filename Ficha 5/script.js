// Exercício 1
class Retangulo {
    
    constructor(largura = 1,altura = 1){
        this.largura = largura
        this.altura = altura
        this.cor = "Branco"
    }
    //Propriedade Largura
    get largura() {
        return this._largura
    }
    set largura(value){
        if(value == "" || value == 0)
        {
            this._largura = parseInt(prompt("A largura é nula, insira um numero não nulo"))
        }
        this._largura = value
    }
    //Propriedade Altura
    get altura() {
        return this._altura
    }
    set altura(value){
        if(value == "" || value == 0)
        {
            this._altura = parseInt(prompt("A altura é nula, insira um numero não nulo"))
        }
        this._altura = value
    }
    //Propriedade Cor
    get cor() {
        return this._cor
    }
    set cor(value){
        this._cor = value
    }
    //Métodos
    getArea() {
        return this._altura * this._largura
    }
    getPerimetro() {
        return this._altura*2 + this._largura*2
    }
}
function func1(){
    let meuRetangulo = new Retangulo()
    let meuRetangulo1 = new Retangulo(10, 5)
    console.log("Retangulo sem parametros \n ")
    console.log('largura =', meuRetangulo.largura)
    console.log('altura =', meuRetangulo.altura)
    console.log('Area =', meuRetangulo.getArea())
    console.log('Perimetro =', meuRetangulo.getPerimetro())
    console.log('Cor =', meuRetangulo.cor)
    console.log("\nRetangulo (10,5) \n ")
    console.log('largura =', meuRetangulo1.largura)
    console.log('altura =', meuRetangulo1.altura)
    console.log('Area =', meuRetangulo1.getArea())
    console.log('Perimetro =', meuRetangulo1.getPerimetro())
    console.log('Cor =', meuRetangulo1.cor) 
}
// Exercício 2
class Circulo {
    
    constructor(raio = 1){
        this.raio = raio
    }
    //Propriedade raio
    get raio() {
        return this._raio
    }
    set raio(value){
        if(value == "" || value == 0)
        {
            this._raio = parseInt(prompt("O raio é nulo, insira um numero não nulo"))
        }
        this._raio = value
    }
    //Métodos
    getArea() {
        return this._raio * this._raio * Math.PI
    }
    getCircunferencia() {
        return this._raio * 2 * Math.PI
    }
    aumentarRaio(){
       let percentagem = parseInt(prompt("Insira uma percentagem"))
       let raio = this._raio * (percentagem / 100)
       this._raio = this._raio + raio
       return percentagem
    }
}
function func2() {
    let cir = new Circulo(5)
    console.log("Circulo sem Raio Aumentado \n ")
    console.log('raio =', cir.raio)
    console.log('area =', cir.getArea())
    console.log('perimetro =', cir.getCircunferencia())
    console.log("\nCirculo com Raio Aumentado \n ")
    console.log("Percentagem = " + cir.aumentarRaio() + "%")
    console.log('raio =', cir.raio)
    console.log('area =', cir.getArea())
    console.log('perimetro =', cir.getCircunferencia())
}
// Exercício 3
class Ventoinha {
    
    constructor(velocidade = 1, on = false){
        this.velocidade = velocidade
        this.ligado = on
    }
    //Propriedades
    get velocidade() {
        return this._velocidade
    }
    set velocidade(value){
        let nova = prompt("Quer mudar a velocidade?")
        if (nova == "Sim")
        {
            let outra = prompt("Velocidade : Baixa/Média/Alta")
            if(outra == "Baixa")
            {
                this._velocidade = 1
            }
            else if( outra == "Média")
            {
                this._velocidade = 2
            }
            else if(outra == "Alta")
            {
                this._velocidade = 3
            }
        }
        else
        {
            this._velocidade = value
        }
    }
    // Propriedade Ligado
    get ligado() {
        return this._ligado
    }
    set ligado(value){
        let nova = (prompt("Quer ligar/desligar a ventoinha?"))
        if(nova == "Sim")
        {
            let outra = prompt(" A ventoinha está: " + value + "true = ligado, false = desligado")
            if(outra == "Ligar")
            {
                this._ligado = true
            }
            else if(outra == "Desligar")
            {
                this._ligado = false
            }
        }else{
            this._ligado = value
        }
    }
    //Métodos
    toString() {
        let txt = ""
        if(this._velocidade == 1)
        {
            txt = "Velocidade: Baixa;"
        }
        else if( this._velocidade == 2)
        {
            txt = "Velocidade: Média;"
        }
        else if(this._velocidade == 3)
        {
            txt = "Velocidade: Alta;"
        }
        if(this._ligado == true)
        {
            txt += " Ligado: Sim;"
        }
        else 
        {
            txt += " Ligado: Não;"
        }
        return txt
    }
}
function func3() {
    let vento = new Ventoinha()
    let vento2 = new Ventoinha()
    console.log("Ventoinha Padrão \n ")
    console.log(vento.toString())
    console.log("\nVentoinha Não Padrão")
    console.log(vento2.toString())
}
// Exercício 4
class Dado {
    
    constructor(face = 1){
        this.faces = 6
        this.valorFace = face
    }
    //Propriedades Face
    get valorFace() {
        return this._valorFace
    }
    set valorFace(value) {
        if(value <=6 && value >= 1)
        {
            this._valorFace = value
        }
        else
        {
            console.log("Face não válida!")
        }
    }
    //Métodos
    Rolar() {
        let nova = Math.floor((Math.random() * 6) + 1);
        this._valorFace = nova
        return this._valorFace
    }
    getQuantidadeFacesDado() {
        return this.faces
    }
}

function func4() {
    let dado = new Dado()
    console.log(dado.valorFace)
    console.log(dado.Rolar())
    console.log(dado.getQuantidadeFacesDado())
}