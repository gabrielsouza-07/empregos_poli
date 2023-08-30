const menu = document.querySelector(".menu-btn")
const nav = document.querySelector(".categ");

//Expandir / Retrair Menu
menu.addEventListener('click', () => {
    nav.classList.toggle("ext");
})