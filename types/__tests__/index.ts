import Vue from 'vue';
import VueHcaptcha from '../';

const app = new Vue({
    render (h) {
        return h(VueHcaptcha, {props: {s: 'foo'}})
    }
});
