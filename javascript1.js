function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "admin" && senha == "admin") {
    location.href = "rotas_adm.html";
  } else if (login == "user" && senha == "user") {
    location.href = "rotas_user.html";
  } else {
    alert("Usuario ou senha incorretos");
  }
}
