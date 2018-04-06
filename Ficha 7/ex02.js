window.onload = function () {
    init()
}
function init() {
    let email = document.getElementById("Email").value
    let nome = document.getElementById("Nome").value
    let tel = document.getElementById("tel").value
    let data = document.getElementById("date").value
    let user = document.getElementById("user").value
    let pass1 = document.getElementById("Pass").value
    let pass2 = document.getElementById("Pass2").value
    let login = document.getElementById("Login") 

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let dia = mm + '/' + dd + '/' + yyyy
    login.addEventListener("submit", function() {
        
        if(data != null){
            if(data > dia){
                if(pass1 != pass2)
                {
                    alert("Palavra-passe diferente")
                }
                else{
                    alert("Registado")
                }
            }
            else{
                alert("Data inválida")
            }
        }
        else
        {
            if(pass1 != pass2)
                {
                    alert("Palavra-passe diferente")
                }
                else{
                    alert("Registado")
                }
        }
        

    })
}