import VueHcaptcha from './hcaptcha.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    // Keep this for backwards compatibility
    // eslint-disable-next-line
    Vue.component('vuehcaptcha', VueHcaptcha);
    // Register camelcase which allows component with dash in it: <vue-hcaptcha />
    Vue.component('VueHcaptcha', VueHcaptcha);
}

// Create module definition for Vue.use()
const plugin = {
    install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default VueHcaptcha;
