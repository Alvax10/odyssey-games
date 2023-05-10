import { Router } from "@vaadin/router";

import logo from "../assets/logo";
import burgerMenu from "../assets/burger-menu.png";
import xButton from "../assets/cross.png";

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
                <h3 class="games"> Games </h3>
                <h3 class="news"> News</h3>
                <h3 class="contact-us"> Contact us </h3>
            </div>
            `;

        this.shadow.appendChild(menuDiv);
        this.shadow.appendChild(menuStyle);

        const burgerHamMenu = this.shadow.querySelector(".menu") as any;
        burgerHamMenu.addEventListener('click', (ev) => {
            ev.preventDefault();

            menuStyle.innerHTML = `

                .menu-open {
                    top: 0%;
                    left: 0%;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    position: absolute;
                    flex-direction: column;
                    background-color: #8AF1FF;
                }

                .close-button {
                    width: 30px;
                    height: 30px;
                    padding: 20px;
                    cursor: pointer;
                    align-self: flex-end;
                }

                .opciones {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-self: center;
                    justify-content: center;
                }

                .games {
                    cursor: pointer;
                    padding-left: 6px;
                }

                .news {
                    cursor: pointer;
                }

                .contact-us {
                    cursor: pointer;
                    padding-left: 30px;
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
            height: 60px;
            display: flex;
            align-items: center;
            background-color: #F8DA54;
            justify-content: space-between;
        }
        .menu {
            width: 40px;
        }

        .logo {
            border-radius: 5px;
        }

        .img {
            width: 60px;
            height: 60px;
            cursor: pointer;
            padding: 0 30px;
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