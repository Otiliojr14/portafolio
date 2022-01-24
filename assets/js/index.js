window.onload = () => {
  console.log("Conectado");
  navButton = document.querySelector("#button-nav");

  navButton.addEventListener("click", mostrarMenu);
};

function mostrarMenu() {
  navMenu = document.querySelector("#navigation");

  navMenu.classList.toggle("navigation__show");
}
