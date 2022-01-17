const container = document.getElementById("usersContent")
const formLogin = document.getElementById("form-login")
const formRegistro = document.getElementById("form-registro")
const signUp = document.getElementById("signUp")
const signIn = document.getElementById("signIn")

// MOSTRAR LOGIN O REGISTRO
signUp.addEventListener("click", function mostrarRegistro() {
    formRegistro.style.display = "flex"
    formLogin.style.display = "none"
    container.style.height = "87%"
})
signIn.addEventListener("click", function mostrarLogin() {
    formRegistro.style.display = "none"
    formLogin.style.display = "flex"
    container.style.height = "70%"
})

// INFO
document.querySelector(".button-form").addEventListener("click", e=> {
    e.preventDefault()
    document.getElementById("info2").style.display="flex"
})