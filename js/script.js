var inputText;
let click = true;

let buttonCript = document.getElementsByClassName("btn-cript")[0];
buttonCript.addEventListener("click", function criptText() {
    inputText = document.getElementById("input-texto").value.split('');

    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case "e":
                inputText[i] = "enter";
                break;
            case "i":
                inputText[i] = "imes";
                break;
            case "a":
                inputText[i] = "ai";
                break;
            case "o":
                inputText[i] = "ober";
                break;
            case "u":
                inputText[i] = "ufat";
                break;
        }
    }

    let newTextCript = inputText.toString().replace(/,/g, "");
    clearArticle();
    createTextAreaEl(newTextCript);
});

let buttonDescript = document.getElementsByClassName("btn-descrip")[0];
buttonDescript.addEventListener("click", function descripText() {
    
    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case "enter":
                inputText[i] = "e";
                break;
            case "imes":
                inputText[i] = "i";
                break;
            case "ai":
                inputText[i] = "a";
                break;
            case "ober":
                inputText[i] = "o";
                break;
            case "ufat":
                inputText[i] = "u";
                break;
        }
    }

    let newTextDescrip = inputText.toString().replace(/,/g, "");
    createTextAreaEl(newTextDescrip);
});

function clearArticle() {
    let node = document.getElementById("article");
    node.innerText = "";
}

function createTextAreaEl(newTextCript) {
    if (click) {
        let articleEl = document.getElementById("article");

        let divEl = document.createElement("div");
        divEl.setAttribute("class", "article-texto");

        let textareaEl = document.createElement("textarea");
        textareaEl.setAttribute("id", "inputText-copy");

        let divButtonEl = document.createElement("div");
        divButtonEl.setAttribute("class", "article-btn");

        let buttonEl = document.createElement("input");

        articleEl.appendChild(divEl);
        articleEl.appendChild(divButtonEl);
        divEl.appendChild(textareaEl);
        divButtonEl.appendChild(buttonEl);

        buttonEl.setAttribute("type", "submit");
        buttonEl.setAttribute("class", "btn-copy");
        buttonEl.value = "Copiar";

        textareaEl.value = newTextCript;

        buttonEl.addEventListener("click", copyText);

        click = false;
    } else {
        document.getElementById("inputText-copy").value = newTextCript;
    }
}

function copyText() {
    let textCopy = document.getElementById("inputText-copy");
    textCopy.select();
    textCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log(textCopy.value);
    textCopy.value = "";
    document.getElementById("input-texto").value = "";
}

