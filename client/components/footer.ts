import { Router } from "@vaadin/router";

const logo = require("../assets/imgs/logo.png");
const instaIcon = require("../assets/imgs/instagram.png");
const twitterIcon = require("../assets/imgs/twitter.png");

export class Footer extends HTMLElement {

    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {

        const divEl = document.createElement('div');
        const style = document.createElement('style');

        style.innerHTML = `
        .footer {
            width: 100%;
            height: 270px;
            display: flex;
            align-items: center;
            background-color: #21221D;
            justify-content: space-between;
        }
        .menu {
            width: 40px;
            height: 40px;
        }

        .logo {
            top: 820px;
            right: 15px;
            width: 150px;
            height: 150px;
            position: absolute;
            border-radius: 15px;
        }

        .social-media-containers {
            gap: 55px;
            display: flex;
            padding: 20px 10px;
            flex-direction: column;
        }

        .link {
            display: flex;
        }

        .img {
            width: 60px;
            height: 60px;
            margin: 0 10px;
            cursor: pointer;
        }

        .social {
            color: #fff;
        }

        .copyright {
            top: 900px;
            right: 15px;
            color: #fff;
            position: sticky;
        }
        `;

        divEl.innerHTML = `
            <footer class="footer">
                
                <div class="social-media-containers">
                    <a class="link" href="https://www.instagram.com/odysseygames_/?hl=es-la">
                        <img style="cursor: pointer;" class="img insta" src="${instaIcon}" alt="instaIcon" />
                        <p class="social"> Instagram </p>
                    </a>

                    <a class="link" href="https://twitter.com/Odyssey__Games">
                        <img style="cursor: pointer;" class="img twit" src="${twitterIcon}" alt="twitterIcon" />
                        <p class="social"> Twitter </p>
                    </a>
                </div>

                <img class="logo" style="cursor: pointer;" src="${logo}" alt="logo">

                <p class="copyright"> All rights reserved © OdysseyGames 20203 </p>
            </footer>
        `;

        divEl.appendChild(style);
        this.shadow.appendChild(divEl);

        const logoHome = this.shadow.querySelector(".logo") as any;
        logoHome.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/");
        });
    }
}

customElements.define('footer-component', Footer);