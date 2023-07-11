import { loader } from "./utils.js";

export function renderloader() {
    const headerSelector = ".main-header";
    const headerPath = "/personalproject/src/partials/header.html";

    const footerSelector = ".main-footer";
    const footerPath = "/personalproject/src/partials/footer.html";

    const navSelector = ".navbar-menu";
    const navPath = "/personalproject/src/partials/nav.html";

    loader(headerPath, headerSelector);
    loader(footerPath, footerSelector);
    loader(navPath, navSelector);
}