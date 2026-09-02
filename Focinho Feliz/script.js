// 1) Seleciona os elementos que vamos usar
const botaoMenu = document.getElementById("botao-menu");
const menu = document.querySelector("nav");
 
// 2) Escuta o evento de clique no botão
// 3) Reage alternando a classe "menu-aberto" no <nav>
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("menu-aberto");
});
// 1) Seleciona o botão do mapa (já existe no HTML, com a classe .btn-mapa)
const botaoMapa = document.querySelector(".btn-mapa");
 
// 2) Escuta o clique
// 3) Reage: pergunta antes de deixar o link funcionar normalmente
botaoMapa.addEventListener("click", function (evento) {
  const confirmou = confirm("Você será redirecionado ao Google Maps. Deseja continuar?");
 
  if (!confirmou) {
    evento.preventDefault();
  }
});
