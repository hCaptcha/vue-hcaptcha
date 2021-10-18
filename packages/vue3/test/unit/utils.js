import {mount, shallowMount} from '@vue/test-utils';
import VueHcaptcha from '../../../vue2/src/hcaptcha.vue';

export const DEBUG_SITE_KEY = '10000000-ffff-ffff-ffff-000000000001';

export function getTestWrapper(
    props = {
        sitekey: DEBUG_SITE_KEY
    },
    shallow = false,
    attachTo = document.body
) {
    const mountFn = shallow ? shallowMount : mount;
    return mountFn(VueHcaptcha, {
        propsData: props,
        attachTo: attachTo
    });
}
