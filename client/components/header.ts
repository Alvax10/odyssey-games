import { Router } from "@vaadin/router";

const logo = require("../assets/imgs/logo.png");
const burgerMenu = require("../assets/imgs/burger-menu.png");
const xButton = require("../assets/imgs/cross.png");

export class Header extends HTMLElement {

    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    listeners() {

        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-open';

        const menuStyle = document.createElement('style');
        menuStyle.innerHTML = `
                .menu-open {
                    display: none;
                }
            `;

        menuDiv.innerHTML = `
            <img class="close-button" src="${xButton}" alt="x-button">
            <div class="opciones">
                <h3 class="games option"> Games </h3>
                <h3 class="news option"> News</h3>
                <h3 class="contact-us option"> Contact us </h3>
            </div>
            `;

        this.shadow.appendChild(menuDiv);
        this.shadow.appendChild(menuStyle);

        const burgerHamMenu = this.shadow.querySelector(".menu") as any;
        burgerHamMenu.addEventListener('click', (ev) => {
            ev.preventDefault();

            const footer = document.children[0].children[1].children[0].children[0].shadowRoot?.children[0].children[2].shadowRoot?.children[0].children[0] as HTMLElement;
            footer.style.display = "none";

            menuStyle.innerHTML = `

                .menu-open {
                    top: 0%;
                    left: 0%;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    position: absolute;
                    flex-direction: column;
                    background-color: #F8DA54;
                }

                .close-button {
                    width: 60px;
                    height: 60px;
                    padding: 20px;
                    cursor: pointer;
                    align-self: flex-end;
                }

                .opciones {
                    gap: 90px;
                    display: flex;
                    align-self: center;
                    flex-direction: column;
                }

                .option {
                    cursor: pointer;
                    font-size: 45px;
                    text-align: center;
                }
            `;

        });

        const myData = this.shadow.querySelector('.games') as any;
        myData.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/games-page");
        });

        const myMascotsReported = this.shadow.querySelector('.news') as any;
        myMascotsReported.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/news");
        });

        const reportMascot = this.shadow.querySelector('.contact-us') as any;
        reportMascot.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/contact-us");
        });

        const closeButton = this.shadow.querySelector(".close-button") as any;
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();

            const footer = document.children[0].children[1].children[0].children[0].shadowRoot?.children[0].children[2].shadowRoot?.children[0].children[0] as HTMLElement;
            footer.style.display = "";

            menuStyle.innerHTML = `
                .menu-open {
                    display: none;
                }
                .close-button {
                    cursor: pointer;
                }
            `;
        });
    }

    render() {

        const divEl = document.createElement('div');
        const style = document.createElement('style');

        style.innerHTML = `
        .header {
            width: 100%;
            height: 75px;
            display: flex;
            align-items: center;
            background-color: #F8DA54;
            justify-content: space-between;
        }
        .menu {
            width: 40px;
            height: 40px;
        }

        .logo {
            border-radius: 30px;
        }

        .img {
            width: 60px;
            height: 60px;
            margin: 0 10px;
            cursor: pointer;
        }
        `;

        divEl.innerHTML = `
            <header class="header">
                <img class="img logo" style="cursor: pointer;" src="${logo}" alt="logo">
                <img class="img menu" src="${burgerMenu}" alt="menu" >
            </header>
        `;

        divEl.appendChild(style);
        this.shadow.appendChild(divEl);
        this.listeners();

        const logoHome = this.shadow.querySelector(".logo") as any;
        logoHome.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/");
        });
    }
}

customElements.define('header-component', Header);