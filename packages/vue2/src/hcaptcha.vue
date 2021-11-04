<template>
  <div id="hcap-script" />
</template>

<script>
import {loadApiEndpointIfNotAlready} from './hcaptcha-script';

export default {
    name: 'VueHcaptcha',
    props: {
        sitekey: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            default: undefined
        },
        size: {
            type: String,
            default: undefined
        },
        tabindex: {
            type: String,
            default: undefined
        },
        language: {
            type: String,
            default: undefined
        },
        reCaptchaCompat: {
            type: Boolean,
            default: true
        },
        challengeContainer: {
            type: String,
            default: undefined
        },
        rqdata: {
            type: String,
            default: undefined
        },
        sentry: {
            type: Boolean,
            default: true
        },
        apiEndpoint: {
            type: String,
            default: 'https://hcaptcha.com/1/api.js'
        },
        endpoint: {
            type: String,
            default: undefined
        },
        reportapi: {
            type: String,
            default: undefined
        },
        assethost: {
            type: String,
            default: undefined
        },
        imghost: {
            type: String,
            default: undefined
        },
    },
    data: () => {
        return {
            widgetId: null,
            hcaptcha: null
        };
    },
    mounted() {
        return loadApiEndpointIfNotAlready(this.$props).then(this.onApiLoaded).catch(this.onError);
    },
    unmounted() {
        if (this.widgetId) {
            this.hcaptcha.reset(this.widgetId);
            this.hcaptcha.remove(this.widgetId);
        }
    },
    methods: {
        onApiLoaded() {
            this.hcaptcha = window.hcaptcha;
            const opt = {
                sitekey: this.sitekey,
                theme: this.theme,
                size: this.size,
                tabindex: this.tabindex,
                'callback': this.onVerify,
                'expired-callback': this.onExpired,
                'chalexpired-callback': this.onChallengeExpired,
                'error-callback': this.onError,
                'open-callback': this.onOpen,
                'close-callback': this.onClose
            };
            if (this.challengeContainer) {
                opt['challenge-container'] = this.challengeContainer;
            }
            this.widgetId = this.hcaptcha.render(this.$el, opt);
            if (this.rqdata) {
                this.hcaptcha.setData(this.widgetId, {rqdata: this.rqdata});
            }
            this.onRendered();
        },
        execute() {
            if (this.widgetId) {
                this.hcaptcha.execute(this.widgetId);
                this.onExecuted();
            } else {
                // execute after el is rendered
                this.$on('rendered', this.execute);
            }
        },
        reset() {
            if (this.widgetId) {
                this.hcaptcha.reset(this.widgetId);
                this.onReset();
            } else {
                this.$emit('error', 'Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.');
            }
        },
        onRendered() {
            this.$emit('rendered');
        },
        onExecuted() {
            this.$emit('executed');
        },
        onReset() {
            this.$emit('reset');
        },
        onError(e) {
            this.$emit('error', e);
            this.reset();
        },
        onVerify() {
            const token = this.hcaptcha.getResponse(this.widgetId);
            const eKey = this.hcaptcha.getRespKey(this.widgetId);
            this.$emit('verify', token, eKey);
        },
        onExpired() {
            this.$emit('expired');
        },
        onChallengeExpired() {
            // vue3 will transform this `camelCase` event name into `kebab-case`
            this.$emit('challengeExpired');
        },
        onOpen() {
            this.$emit('opened');
        },
        onClose() {
            this.$emit('closed');
        }
    }
};
</script>
