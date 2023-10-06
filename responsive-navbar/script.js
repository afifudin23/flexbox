const menuToggle = document.querySelector(".menu-toggle #btn-menu");
const nav = document.querySelector("nav ul");
console.log(menuToggle);
console.log(nav);
menuToggle.addEventListener("click", () => {
    nav.classList.toggle('slide');
})