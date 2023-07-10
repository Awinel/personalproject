export async function getElement(selector) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return document.querySelector(selector);
}

export async function loader(path, selector) {
    const element = await fetch(path);
    const text = await element.text();
    document.querySelector(selector).innerHTML = text;
}