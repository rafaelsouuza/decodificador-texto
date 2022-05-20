let buttonCript = document.getElementsByClassName("btn-cript")[0];
let click = true;
buttonCript.addEventListener("click", criptText);

function criptText() {
    var text = document.getElementById("texto-cript").value.split('');

    for (let i = 0; i < text.length; i++) {

        switch(text[i]) {
            case "e": 
                text[i] = "enter";
                break;
            case "i": 
                text[i] = "imes";
                break;
            case "a": 
                text[i] = "ai";
                break;
            case "o": 
                text[i] = "ober";
                break;
            case "u": 
                text[i] = "ufat";
                break;
        }
    }

    let newTextCript = text.toString().replace(/,/g, "");

    clearArticle();

    createTextAreaEl(newTextCript);

    document.getElementById("texto-cript").value = "";

    console.log(newTextCript);
    
}

function clearArticle() {
    let node = document.getElementById("article");
    node.innerText = "";
}

    

function createTextAreaEl(newTextCript) {

    if(click) {
        let articleEl = document.getElementById("article");

        let divEl = document.createElement("div");
        divEl.setAttribute("class", "article-texto");

        let textareaEl = document.createElement("textarea");

        let divButtonEl = document.createElement("div");
        divButtonEl.setAttribute("class", "article-btn");

        let buttonEl = document.createElement("input");

        articleEl.appendChild(divEl);
        articleEl.appendChild(divButtonEl);
        divEl.appendChild(textareaEl);
        divButtonEl.appendChild(buttonEl);

        //divEl.classList.add(".article-texto");
        //divButtonEl.classList.add(".aside-btn");
        buttonEl.setAttribute("type", "submit");
        buttonEl.setAttribute("class", "btn-copy");
        buttonEl.value = "Copiar";

        textareaEl.value = newTextCript;
        
        click = false;
    }
    
}

