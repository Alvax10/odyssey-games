
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
        `;

        divEl.innerHTML = `
            <div class="general-container">
                <h2 class="title__web"> Odyssey Games :D </h2>
            </div>
        `;

        this.shadow.appendChild(divEl);
        this.shadow.appendChild(style);
    }
}

customElements.define("home-page", Home);