<template>
  <div>
    <div id="hcap-script" />
  </div>
</template>

<script>
const HCAPTCHA_SCRIPT_ID = 'hcaptcha-api';

module.exports = {
    name: 'VueHcaptcha',
    props: {
        sitekey: {
            type: String,
            required: true
        },
        theme: {
            type: String
        },
        size: {
            type: String
        },
        tabindex: {
            type: String 
        },
        language: {
            type: String
        }
    },
    data: () => {
        return {
            widgetId: null
        };
    },
    mounted() {
        this.loadHcaptchaIfNotPresent();
    },
    methods: {
        loadHcaptchaIfNotPresent() {
            if (window.hcaptcha) {
                return this.onloadScript();
            }
            // Check if async script already present on dom
            const hcaptchaApiScriptEl = document.getElementById(HCAPTCHA_SCRIPT_ID);
            if (hcaptchaApiScriptEl) {
                hcaptchaApiScriptEl.addEventListener('load', this.onloadScript, true);
                return;
            }
            // Otherwise, inject api.js
            const script = this.getHcaptchaScript(this.onloadScript, this.language);
            let container = document.getElementById('hcap-script');
            if (document.getElementsByTagName('head').length > 0) {
                container = document.getElementsByTagName('head')[0];
            }
            container.appendChild(script);  //append this here, this appends the tag to the start of the app.
        },
        getHcaptchaScript(onLoadCb, chosenLang) {
            const script = document.createElement('script');
            script.id = HCAPTCHA_SCRIPT_ID;
            script.async = true;
            script.src = `https://hcaptcha.com/1/api.js?render=explicit${chosenLang ? `&hl=${chosenLang}` : ''}`;
            script.addEventListener('load', onLoadCb, true);
            return script;
        },
        onloadScript() {
            const opt = {
                sitekey: this.sitekey,
                theme: this.theme ? this.theme : '',
                size: this.size ? this.size : '',
                tabindex: this.tabindex ? this.tabindex : '',
                callback: this.onVerify,
                "expired-callback": this.onExpired,
                "error-callback": this.onError,
                "open-callback": this.onOpen,
                "close-callback": this.onClose
            };
            const container = this.$slots.default ? this.$el.children[0] : this.$el;
            this.widgetId = window.hcaptcha.render(container, opt);
        },
        onError(e) {
            this.$emit('error',e);
            this.reset();
        },
        onVerify(response) {
            this.$emit('verify', response);
        },
        onExpired() {
            this.$emit('expired');
        },
        execute() {
            window.hcaptcha.execute(this.widgetId);
        },
        reset() {
            window.hcaptcha.reset(this.widgetId);
        },
        onOpen() {
            this.$emit('opened');
        },
        onClose() {
            this.$emit('closed');
        }
    }
}
</script>
