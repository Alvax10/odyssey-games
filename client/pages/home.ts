
const fondo1 = require('../assets/imgs/CirculoFondo1.png');
const fondo2 = require('../assets/imgs/CirculoFondo2.png');
const fondoArt = require('../assets/imgs/menuPrincipal.png');

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

            .general-container {
                display: flex;
                flex-direction: column;
                background-image: url(${fondo1});
                background-repeat: no-repeat;
                background-size: 510px 330px;
                background-position-y: 80px;
            }

            .title__web {
                margin: 20opx 0;
                text-align: center;
            }

            .upper-body {
                display: flex;
                margin: 20px 0;
                align-items: center;
                flex-direction: column;
            }

            .fondo-arte {
                border-radius: 20px;
            }

            .game-text {
                width: 336px;
                font-size: 18px;
                margin: 25px;
                text-align: center;
            }

            .lower-body {
                display: flex;
                margin: 40px 0;
                flex-direction: column;
                background-position: right;
                background-repeat: no-repeat;
                background-size: 300px 280px;
                background-image: url(${fondo2});
            }

            .sub-title {
                font-size: 28px;
                margin: 40px 0 10px 30px;
                text-align: left;
            }

            .info-text {
                width: 430px;
                font-size: 20px;
                text-align: center;
                align-self: center;
            }
        `;

        divEl.innerHTML = `
            <header-component></header-component>
            <div class="general-container">
                <h2 class="title__web"> We create the untold stories.... </h2>

                <section class="upper-body">
                    <img class="fondo-arte" src="${fondoArt}" alt="fondoArte" />
                    <p class="game-text"> Current game on development “Angry Termy” </p>
                </section>

                <section class="lower-body">
                    <h3 class="sub-title"> ¿Who are we? </h3>
                    <p class="info-text"> We are college students making indie games with the purpose of learning and creating the games we think could leave a mark. Our most recent game is one called “Angry Termy!!”.
                    A game with endless hours of fun that bring new mechanics to the infinite runner type of games. </p>
                </section>
            </div>
            <footer-component></footer-component>

            <!-- <a href="https://www.flaticon.com/free-icons/instagram-logo" title="icons">Instagram logo icons created by Hight Quality Icons - Flaticon</a> -->
        `;

        divEl.appendChild(style);
        this.shadow.appendChild(divEl);
    }
}

customElements.define("home-page", Home);