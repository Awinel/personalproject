export async function getElement(selector) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return document.querySelector(selector);
}

export async function loader(path, selector) {
    const element = await fetch(path);
    const text = await element.text();
    document.querySelector(selector).innerHTML = text;
}

export function loadHTML(filePath, element) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        element.insertAdjacentHTML('beforeend', this.responseText);
    };
    xhr.send();
}