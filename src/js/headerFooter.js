import { loader } from "./utils.js";

export function renderloader() {
    const headerSelector = ".main-header";
    const headerPath = "./partials/header.html";

    const footerSelector = ".main-footer";
    const footerPath = "./partials/footer.html";

    const navSelector = ".navbar-menu";
    const navPath = "./partials/nav.html";

    loader(headerPath, headerSelector);
    loader(footerPath, footerSelector);
    loader(navPath, navSelector);
}