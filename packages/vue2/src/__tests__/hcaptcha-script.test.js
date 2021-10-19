import {getScriptSrc, loadApiEndpointIfNotAlready} from '@/hcaptcha-script';

/*global describe, test, expect, beforeEach*/

const config = {
    language: 'ro',
    reCaptchaCompat: true,
    sentry: true,
    apiEndpoint: 'https://hcaptcha.com/1/api.js',
    endpoint: 'https://endpoint',
    reportapi: 'https://reportapi',
    assethost: 'https://assethost',
    imghost: 'https://imghost',
};

describe('hcaptcha-script', () => {
    beforeEach(() => {
        // Clean dom before each test
        document.getElementsByTagName('html')[0].innerHTML = '';
        window.hcaptcha = undefined;
    });

    function assertDomContains(expectedCount, substr) {
        const docHtml = document.documentElement.innerHTML;
        expect(docHtml.split(substr).length - 1).toBe(expectedCount);
    }

    test('does not reload hcaptcha if already present', async() => {
        // Simulate hcaptcha presence
        window.hcaptcha = 1;
        await loadApiEndpointIfNotAlready(config);
        assertDomContains(0, 'https://hcaptcha.com/1/api.js?render=explicit');
    });

    test('does not reload hcaptcha if already requested', () => {
        // request first time should load once
        loadApiEndpointIfNotAlready(config);
        assertDomContains(1, 'https://hcaptcha.com/1/api.js?render=explicit');
        // request second time should not load again
        loadApiEndpointIfNotAlready(config);
        assertDomContains(1, 'https://hcaptcha.com/1/api.js?render=explicit');
    });

    test('loads hcaptcha if not present', async() => {
        window.hcaptcha = undefined;
        const promise = loadApiEndpointIfNotAlready(config);
        assertDomContains(1, 'https://hcaptcha.com/1/api.js?render=explicit');
        // Simulate api onload
        window['_hcaptchaOnLoad']();
        await promise;
    });

    test('script src with custom endpoint', () => {
        expect(getScriptSrc(config))
            .toBe('https://hcaptcha.com/1/api.js?render=explicit&onload=_hcaptchaOnLoad&hl=ro&sentry=true&endpoint=https%3A%2F%2Fendpoint&assethost=https%3A%2F%2Fassethost&imghost=https%3A%2F%2Fimghost&reportapi=https%3A%2F%2Freportapi');
    });

    test('script src with reCaptchaCompat off', () => {
        const cfg = Object.assign({}, config);
        cfg.reCaptchaCompat = false;
        expect(getScriptSrc(cfg))
            .toBe('https://hcaptcha.com/1/api.js?render=explicit&onload=_hcaptchaOnLoad&recaptchacompat=off&hl=ro&sentry=true&endpoint=https%3A%2F%2Fendpoint&assethost=https%3A%2F%2Fassethost&imghost=https%3A%2F%2Fimghost&reportapi=https%3A%2F%2Freportapi');

    });

    test('script src with minimum params', () => {
        const cfg = {
            'apiEndpoint': 'https://example.com/api.js'
        };
        expect(getScriptSrc(cfg))
            .toBe('https://example.com/api.js?render=explicit&onload=_hcaptchaOnLoad');
    });
});
