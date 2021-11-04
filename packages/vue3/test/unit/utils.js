import { mount } from '@vue/test-utils';
import VueHcaptcha from "../../dist/hcaptcha-vue3.es.js";

export const DEBUG_SITE_KEY = '10000000-ffff-ffff-ffff-000000000001';

export function getTestWrapper(
    props = {
        sitekey: DEBUG_SITE_KEY
    },
    shallow = false,
    attachTo = document.body
) {
    return mount(VueHcaptcha, {
        props: props,
        shallow: shallow,
        attachTo: attachTo
    });
}
