import VueHcaptcha from '../src/main.js'
import {DEBUG_SITE_KEY, getTestWrapper, getTestWrapperWithProps} from './utils';

/*
 * Test created hook
 */

/*global describe, test, expect, jest*/
/*eslint no-undef: "error"*/

describe('VueHCaptcha', () => {
    // eslint-disable-next-line no-undef
    afterEach(() => {
        // Clean dom before each test
        document.getElementsByTagName('html')[0].innerHTML = '';
    });

    test('is Vue instance', () => {
        const wrapper = getTestWrapper();
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('component renders correctly', () => {
        const wrapper = getTestWrapper();
        expect(wrapper.element).toMatchSnapshot()
    })

    test('has functions', () => {
        expect(typeof VueHcaptcha.methods.onError).toBe('function');
        expect(typeof VueHcaptcha.methods.onVerify).toBe('function');
        expect(typeof VueHcaptcha.methods.onExpired).toBe('function');
        expect(typeof VueHcaptcha.methods.onOpen).toBe('function');
        expect(typeof VueHcaptcha.methods.onClose).toBe('function');
        expect(typeof VueHcaptcha.methods.execute).toBe('function');
        expect(typeof VueHcaptcha.methods.reset).toBe('function');
    })

    test('emits verify', () => {
        const wrapper = getTestWrapper(true);
        const response = {success: true}
        wrapper.vm.onVerify(response)
        expect(wrapper.emitted().verify).toBeTruthy();
        expect(wrapper.emitted().verify[0][0]).toBe(response);
    });

    test('emits error', () => {
        const wrapper = getTestWrapper();
        const error = 'invalid-input-response';
        wrapper.vm.reset = jest.fn();
        wrapper.vm.onError(error);
        expect(wrapper.emitted().error).toBeTruthy();
        expect(wrapper.emitted().error[0][0]).toBe(error);
    });

    test('resets hcaptcha on error', () => {
        const wrapper = getTestWrapper();
        const error = 'invalid-input-response';
        wrapper.vm.reset = jest.fn();
        wrapper.vm.onError(error);
        expect(wrapper.vm.reset.mock.calls.length).toBe(1);
    });

    test('emits expired', () => {
        const wrapper = getTestWrapper();
        wrapper.vm.onExpired();
        expect(wrapper.emitted().expired).toBeTruthy();
    });

    test('emits opened', () => {
        const wrapper = getTestWrapper();
        wrapper.vm.onOpen();
        expect(wrapper.emitted().opened).toBeTruthy();
    });

    test('emits closed', () => {
        const wrapper = getTestWrapper();
        wrapper.vm.onClose();
        expect(wrapper.emitted().closed).toBeTruthy();
    });

    test('reset hcaptcha', () => {
        window.hcaptcha = {
            render: jest.fn(),
            reset: jest.fn()
        };
        const wrapper = getTestWrapper();
        wrapper.vm.reset();
        expect(window.hcaptcha.reset.mock.calls.length).toBe(1);
    });

    test('execute hcaptcha', () => {
        window.hcaptcha = {
            render: jest.fn(),
            execute: jest.fn()
        };
        const wrapper = getTestWrapper();
        wrapper.vm.execute();
        expect(window.hcaptcha.execute.mock.calls.length).toBe(1);
    });

    test('props are passed to hcaptcha render', () => {
        const widgetId = 1234;
        window.hcaptcha = {
            // eslint-disable-next-line no-unused-vars
            render: jest.fn((container, opt) => widgetId)
        };
        const props = {
            sitekey: DEBUG_SITE_KEY,
            theme: 'dark',
            size: 'compact',
            tabindex: '10',
            language: 'ro',
        };
        const wrapper = getTestWrapperWithProps(false, true, props);
        expect(wrapper.vm.$data.widgetId).toBe(widgetId);
        expect(window.hcaptcha.render.mock.calls.length).toBe(1);
        delete props.language; // language is not passed to render, but used when loading api.js
        expect(window.hcaptcha.render.mock.calls[0][1]).toMatchObject(props);
    });

    test('api.js is loaded if not already present', () => {
        window.hcaptcha = null;
        getTestWrapper();
        const docHtml = document.documentElement.innerHTML;
        expect(docHtml).toContain('"https://hcaptcha.com/1/api.js?render=explicit"');
    });

    test('api.js is not loaded if already present', () => {
        window.hcaptcha = {
            render: jest.fn()
        };
        getTestWrapper();
        const docHtml = document.documentElement.innerHTML;
        expect(docHtml).not.toContain('"https://hcaptcha.com/1/api.js?render=explicit"');
        expect(window.hcaptcha.render.mock.calls.length).toBe(1);
    });

    test('api.js is loaded for appropriate language', () => {
        window.hcaptcha = null;
        const language = 'ro';
        getTestWrapper(false, true, "0000", language);
        const docHtml = document.documentElement.innerHTML;
        expect(docHtml).toContain(`https://hcaptcha.com/1/api.js?render=explicit&amp;hl=${language}`);
    });
});
