import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));

if (location.pathname == "/dist/") {
    router.setRoutes([
        { path: "/dist/", component: "home-page" },
    ]);
}

else {
    router.setRoutes([
        { path: "/", component: "home-page" },
    ]);
}