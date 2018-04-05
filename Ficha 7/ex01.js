window.onload = function() {
    init()
}

function init() {
    let Login = document.getElementById("Login")
    let txtEmail = document.getElementById("Email")
    let txtPass = document.getElementById("Pass")
    
    // Adicionar listener ao botão submit
    Login.addEventListener("submit", function (event) {
        alert(txtPass.value + "#" + txtEmail.value)
        event.preventDefault()
    })
     frmLogin.addEventListener("reset", function () {        
        txtEmail.focus()
    })
}
