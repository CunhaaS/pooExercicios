window.onload = function() {
    init()    
}


function init() {
    let btnTodas = document.getElementById("btnTodas")
    let btnCampus1 = document.getElementById("btnCampus1")
    let btnCampus2 = document.getElementById("btnCampus2")
    let btnCampus3 = document.getElementById("btnCampus3")

    btnTodas.addEventListener("click",function () {
        let refInputs = document.getElementsByTagName("input")
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "gray"            
        }
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })
    btnCampus1.addEventListener("click",function () {
        let refInputs = document.getElementsByClassName("campus1")
        let refInputs1 = document.getElementsByTagName("input")
        for (let i = 0; i < refInputs1.length; i++) {
            refInputs1[i].style.backgroundColor = "gray"            
        }
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })
    btnCampus2.addEventListener("click",function () {
        let refInputs = document.getElementsByClassName("campus2")
        let refInputs1 = document.getElementsByTagName("input")
        for (let i = 0; i < refInputs1.length; i++) {
            refInputs1[i].style.backgroundColor = "gray"            
        }
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })
    btnCampus3.addEventListener("click",function () {
        let refInputs = document.getElementsByClassName("campus3")
        let refInputs1 = document.getElementsByTagName("input")
        for (let i = 0; i < refInputs1.length; i++) {
            refInputs1[i].style.backgroundColor = "gray"            
        }
        for (let i = 0; i < refInputs.length; i++) {
            refInputs[i].style.backgroundColor = "green"            
        }
    })
}