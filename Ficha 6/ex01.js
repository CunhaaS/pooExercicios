window.onload = function() {
    init()    
}

function init() {
    let myP = document.getElementById("myP")
    let myBtn = document.getElementById("myBtn")
    myBtn.addEventListener("click", function(){
        let myTxt = document.getElementById("myTxt")
        console.log(myTxt.value)
        if (myTxt.value != "") {
            myP.innerHTML = "Bem-vindo, " + myTxt.value + "!"            
        } else {
            myP.innerHTML = "Bem-vindo à minha página!"            
        }
    })    
}