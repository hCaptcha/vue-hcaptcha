import 'regenerator-runtime/runtime';
import VueHcaptcha from "../../../vue2/src/hcaptcha.vue";
import { getMockedHcaptcha, MOCK_EKEY, MOCK_TOKEN, MOCK_WIDGET_ID } from "../../../vue2/src/__tests__/hcaptcha.mock.js";
import { getTestWrapper, DEBUG_SITE_KEY } from "./utils.js";
import { loadApiEndpointIfNotAlready } from "../../../vue2/src/hcaptcha-script.js";
import {nextTick} from 'vue';

jest.mock('../../../vue2/src/hcaptcha-script.js', () => ({
    loadApiEndpointIfNotAlready: jest.fn(() => Promise.resolve())
}));

describe('VueHCaptcha', () => {
    let wrapper;

    beforeEach(() => {
        // Clean dom before each test
        document.getElementsByTagName('html')[ 0 ].innerHTML = '';
        window.hcaptcha = getMockedHcaptcha();
        wrapper = getTestWrapper();
    });

    test('has functions', () => {
        const methods = VueHcaptcha.methods;
        expect(typeof methods.execute).toBe('function');
        expect(typeof methods.reset).toBe('function');
    });

    test('component renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    test('emits verify with token and ekey', () => {
        expect(wrapper.emitted()['verify']).toBeFalsy()
        wrapper.vm.onVerify();
        expect(wrapper.emitted().verify).toBeTruthy();
        expect(wrapper.emitted().verify[0][0]).toBe(MOCK_TOKEN);
        expect(wrapper.emitted().verify[0][1]).toBe(MOCK_EKEY);
    });

    test('emits error and calls reset', () => {
        const error = 'invalid-input-response';
        wrapper.vm.onError(error);
        expect(wrapper.emitted().error).toBeTruthy();
        expect(wrapper.emitted().error[0][0]).toBe(error);
        expect(wrapper.vm.hcaptcha.reset.mock.calls.length).toBe(1);
    });

    test('emits events', () => {
        expect(wrapper.emitted()['opened']).toBeFalsy();
        wrapper.vm.onOpen();
        expect(wrapper.emitted()['opened']).toBeTruthy();

        expect(wrapper.emitted()['closed']).toBeFalsy();
        wrapper.vm.onClose();
        expect(wrapper.emitted()['closed']).toBeTruthy();

        expect(wrapper.emitted()['expired']).toBeFalsy();
        wrapper.vm.onExpired();
        expect(wrapper.emitted()['expired']).toBeTruthy();

        expect(wrapper.emitted()['challenge-expired']).toBeFalsy();
        wrapper.vm.onChallengeExpired();
        expect(wrapper.emitted()['challenge-expired']).toBeTruthy();
    });

    test('reset emits event', async() => {
        expect(wrapper.emitted()['reset']).toBeFalsy();
        expect(wrapper.vm.hcaptcha.reset.mock.calls.length).toBe(0);
        wrapper.vm.reset();
        expect(wrapper.vm.hcaptcha.reset.mock.calls.length).toBe(1);
        expect(wrapper.emitted()['reset']).toBeTruthy();
    });

    test('execute emits event', async() => {
        expect(wrapper.emitted()['executed']).toBeFalsy();
        expect(wrapper.vm.hcaptcha.execute.mock.calls.length).toBe(0);
        wrapper.vm.execute();
        expect(wrapper.vm.hcaptcha.execute.mock.calls.length).toBe(1);
        expect(wrapper.emitted()['executed']).toBeTruthy();
    });

    test('calling execute before rendering', async() => {
        wrapper = getTestWrapper();
        wrapper.vm.execute();
        expect(window.hcaptcha.execute.mock.calls.length).toBe(0);
        await nextTick();
        expect(window.hcaptcha.execute.mock.calls.length).toBe(1);
    });

    test('el renders after api loads and a widget id is set', async() => {
        const props = {
            sitekey: DEBUG_SITE_KEY,
            theme: 'dark',
            size: 'compact',
            tabindex: '10',
            language: 'ro',
            reCaptchaCompat: true,
            challengeContainer: 'challenge-container-id',
            rqdata: null,
            sentry: false,
            apiEndpoint: 'https://example.com/api.js',
            endpoint: 'https://endpoint.example.com',
            reportapi: 'https://reportapi.example.com',
            assethost: 'https://assethost.example.com',
            imghost: 'https://imghost.example.com',
        };
        window.hcaptcha = getMockedHcaptcha();
        wrapper = getTestWrapper(props);
        await nextTick();
        expect(wrapper.vm.$data.widgetId).toBe(MOCK_WIDGET_ID);
        expect(wrapper.vm.hcaptcha.render.mock.calls.length).toBe(1);
        expect(wrapper.vm.hcaptcha.render.mock.calls[0][1]).toMatchObject({
            sitekey: props.sitekey,
            theme: props.theme,
            size: props.size,
            tabindex: props.tabindex
        });
    });

    test('mounted - loads api endpoint', async() => {
        const nrCalls = loadApiEndpointIfNotAlready.mock.calls.length;
        wrapper = getTestWrapper();
        expect(loadApiEndpointIfNotAlready.mock.calls.length).toBe(nrCalls + 1);
    });

    test('rqdata is set upon rendering', async() => {
        const props = {
            sitekey: DEBUG_SITE_KEY,
            rqdata: 'mock-rqdata'
        };
        window.hcaptcha = getMockedHcaptcha();
        wrapper = getTestWrapper(props);
        await nextTick();
        expect(wrapper.vm.$data.widgetId).toBe(MOCK_WIDGET_ID);
        expect(wrapper.vm.hcaptcha.render.mock.calls.length).toBe(1);
        expect(wrapper.vm.hcaptcha.setData.mock.calls[0][1]).toMatchObject({
            rqdata: props.rqdata
        });
    });

});