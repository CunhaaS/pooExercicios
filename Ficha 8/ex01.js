class Personality{
    //Define the constructor
    constructor(name, year, nacionality, work, photo){
        this.name = name
        this.year = year
        this.nacionality = nacionality
        this.work = work
        this.photo = photo
    }
    // Propriedade Name
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
    // Propriedade Year
    get year() {
        return this._year
    }
    set year(newYear) {
        this._year = newYear
    }
    // Propriedade Nacionality
    get nacionality() {
        return this._nacionality
    }
    set nacionality(newNacionality) {
        this._nacionality = newNacionality
    }
    // Propriedade work
    get work() {
        return this._work
    }
    set work(newWork) {
        this._work = newWork
    }
    // Propriedade photo
    get photo() {
        return this._photo
    }
    set photo(newPhoto) {
        this._photo = newPhoto
    }
}

// Creates an array to store personalities object
let personalities = []

window.onload = function() {
    // Assign the current year to the Max
    let maxYearOfBirth = document.getElementById("InputYear")
    let currentYear = new Date().getFullYear()
    maxYearOfBirth.setAttribute("max", currentYear)
    // Add listener to the form
    let formPersonalities = document.getElementById("formPersonalitites")
    formPersonalities.addEventListener("submit", function() {
        // Get the form values
        let name = document.getElementById("inputName").value
        let year = document.getElementById("inputYear").value
        let nacionality = document.getElementById("inputNacionality").value
        let work = document.getElementById("inputWork").value
        let photo = document.getElementById("inputPhoto").value
        
        //Create an object based on those values
        let newPersonality = new Personality(name, year, nacionality, work, photo)

        // Add the object to an array
        personalities.push(newPersonality)

        // Render the table with all the objects
        for (let i = 0; i < personalities.length; i++) {
            console.log(personalities[i].name)
        }
    })
    
}


function renderTable() {
    let tblPersonalities = document.getElementById("tblPersonalities")
    let strHtml = ""
    strHtml = "<thead class='thead-inverse|thead-default'><tr><th>#</th><th>Name</th><th>Year</th><th>Nacionality</th><th>Main Work</th><th>Photo</th></tr></thead><tbody>"

    for (let i = 0; i < personalities.length; i++) {
        strHtml += "<tr>"+
        "<th scope='row'>"+(i+1)+"</th>"+
        "<td>"+personalities[i].name+"</td>"+
        "<td>"+personalities[i].year+"</td>"+
        "<td>"+personalities[i].nacionality+"</td>"+
        "<td>"+personalities[i].work+"</td>"+
        "<td>"+personalities[i].photo+"</td>"+
        "</tr>"
    }
    strHtml += "</tbody>"
    tblPersonalities.innerHTML = strHtml
}