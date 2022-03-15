let user = document.getElementById("user")
let pass = document.getElementById("pass")
let erro = document.getElementById("erro")

//Esta função tem o intuito de apenas de validar se os campos estão vazios

function validar() {
  if (user.value.length == 0 || pass.value.length == 0) {
    erro.style.opacity = 1
  } else {
    erro.style.opacity = 0
  }
}
