import {mount, shallowMount} from '@vue/test-utils';
import VueHcaptcha from '@/main';

export const DEBUG_SITE_KEY = '10000000-ffff-ffff-ffff-000000000001';

export function getTestWrapper(
    props = {
        sitekey: DEBUG_SITE_KEY
    },
    shallow = false,
    attachToDocument = true
) {
    const mountFn = shallow ? shallowMount : mount;
    return mountFn(VueHcaptcha, {
        propsData: props,
        attachToDocument: attachToDocument
    });
}
