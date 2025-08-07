import {App, Plugin} from "vue";
import "../style.css";
import {default as libComponent} from "./lib-components/LktDot.vue";


const LktDot: Plugin = {
    install: (app: App) => {
        if (app.component('lkt-dot') === undefined) app.component('lkt-dot', libComponent)
    },
};

export default LktDot;