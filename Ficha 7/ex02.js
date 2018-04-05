window.onload = function () {
    init()
}
function init() {
    let email = document.getElementById("Email").value
    let nome = document.getElementById("Nome").value
    let tel = document.getElementById("tel").value
    let user = document.getElementById("user").value
    let pass1 = document.getElementById("Pass").value
    let pass2 = document.getElementById("Pass2").value
    let login = document.getElementById("Login") 

    login.addEventListener("submit", function() {
        if(pass1 != pass2)
        {
            alert("Palavra-passe diferente")
        }
        else{
            alert("Registado")
        }

    })
}