function loginn() {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(email == "Devuser@gmail.com" && senha ==  "user6789") {
        location.href = "https://shopee.com.br/"
    }else{
        alert('Usuario ou senha incorretos')
    }
}



function mostrarSenha() {
    var inputPassword = document.getElementById('senha')
    var btnIcon = document.getElementById('icon-eye')

    if(inputPassword.type === 'password') {
        inputPassword.setAttribute('type','text')
        btnIcon.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }else{
        inputPassword.setAttribute('type','password')
        btnIcon.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }

}