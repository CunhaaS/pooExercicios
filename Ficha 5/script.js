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