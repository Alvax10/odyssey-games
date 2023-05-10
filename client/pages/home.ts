
class Home extends HTMLElement {

    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {

        const divEl = document.createElement("div");
        const style = document.createElement("style");

        style.innerHTML = `
            .title__web {
                text-align: center;
            }
        `;

        divEl.innerHTML = `
            <header-component></header-component>
            <div class="general-container">
                <h2 class="title__web"> Odyssey Games :D </h2>
            </div>
            <a href="https://www.flaticon.com/free-icons/instagram-logo" title="icons">Instagram logo icons created by Hight Quality Icons - Flaticon</a>
        `;

        divEl.appendChild(style);
        this.shadow.appendChild(divEl);
    }
}

customElements.define("home-page", Home);