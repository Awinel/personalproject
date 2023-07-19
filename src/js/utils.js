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

export function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        value = JSON.parse(value);
    }
    return value;
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

    // setLocalStorage('myKey', {myValue: 'value'});

    let myValue = getLocalStorage('myKey');

}

export function divCreator(className, parentSelector) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(className);
  
    const parentDiv = document.querySelector(parentSelector);
    parentDiv.appendChild(newDiv);
  }

export function intergrator(className, content) {
    const el = document.querySelector(className).innerHTML = content;
}