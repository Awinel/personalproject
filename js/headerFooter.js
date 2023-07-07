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

async function loader(path, selector) {
    const element = await fetch(path);
    const text = await element.text();
    document.querySelector(selector).innerHTML = text;
}