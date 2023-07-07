export function renderloader() {
    const headerSelector = ".main-header";
    const headerPath = "./headerfooter/header.html";

    const footerSelector = ".main-footer";
    const footerPath = "./headerfooter/footer.html";

    loader(headerPath, headerSelector);
    loader(footerPath, footerSelector);
}

async function loader(path, selector) {
    const element = await fetch(path);
    const text = await element.text();
    document.querySelector(selector).innerHTML = text;
}