export function toggleMenu() {
    const burguer = document.querySelector(".hamburguer");
    console.log(burguer);
    const navMenu = document.querySelector(".nav-menu");
    console.log(burguer);

    burguer.addEventListener("click", () => {
        burguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}
