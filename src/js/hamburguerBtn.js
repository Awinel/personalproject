import { getElement } from "./utils.js";

export async function toggleMenu() {
    const burguer = await getElement(".hamburguer");
    const navMenu = await getElement(".nav-menu");

    burguer.addEventListener("click", () => {
        burguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}