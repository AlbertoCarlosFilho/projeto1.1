fetch("https://api.example.com/dados")
  .then((response) => response.json())
  .then((data) => {
    // Exibir os dados em um elemento HTML
    const lista = document.getElementById("lista");
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.nome;
      lista.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Erro ao buscar dados:", error);
  });
