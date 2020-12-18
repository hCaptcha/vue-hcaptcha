import {mount, shallowMount} from '@vue/test-utils';
import VueHcaptcha from '@/main';

export const DEBUG_SITE_KEY = '10000000-ffff-ffff-ffff-000000000001';

export function getTestWrapper(
    shallow = false,
    attachToDocument = true,
    siteKey = DEBUG_SITE_KEY,
    language = null
) {
    return getTestWrapperWithProps(shallow, attachToDocument, {
        sitekey: siteKey,
        language: language
    });
}

export function getTestWrapperWithProps(
    shallow = false,
    attachToDocument = true,
    props
) {
    const mountFn = shallow ? shallowMount : mount;
    return mountFn(VueHcaptcha, {
        propsData: props,
        attachToDocument: attachToDocument
    })
}
