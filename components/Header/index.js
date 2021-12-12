const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${location.origin}/components/Header/Header.css">
    <header>Movie App</header>
`

class Header extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("app-header", Header);