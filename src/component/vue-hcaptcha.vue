<template>
  <div>
    <div id="hcap-script" />
  </div>
</template>
<script>
const CaptchaScript = (cb, chosenlang) => {
    let script = document.createElement("script");
    script.async = true;
    script.src = "https://hcaptcha.com/1/api.js?render=explicit";

    if(typeof chosenlang !== 'undefined') {
        script.src += `&hl=${chosenlang}`;
    }

    script.addEventListener('load', cb, true);

    return script;
};

module.exports = {
    name: "VueHcaptcha",
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
    mounted() {
        if (typeof window.hcaptcha === 'undefined') { //if not loaded, create script tag, and wait to render hcaptcha element
            let script = CaptchaScript(this.onloadScript, this.language);
            let container = document.getElementById("hcap-script");

            if (document.getElementsByTagName('head').length > 0) {
                container = document.getElementsByTagName('head')[0];
            }

            container.appendChild(script);  //append this here, this appends the tag to the start of the app.
        }
        else {
            this.onloadScript();
        }
    },
    methods: {
        onloadScript() {
            //set options for VueHcaptcha to be passed to the onload script
            let opt = {
                sitekey: this.sitekey,
                theme: this.theme ? this.theme : '',
                size: this.size ? this.size : '',
                tabindex: this.tabindex ? this.tabindex : '',
                callback: this.onVerify,
                "expired-callback": this.onExpired,
                "error-callback": this.onError,
                "open-callback": this.onOpen,
                "close-callback": this.onClose
            }
            // Render hCaptcha widget and provide neccessary callbacks
            if (typeof window.hcaptcha !== 'undefined') {
                let hcaptcha = window.hcaptcha; // convienence var to access 
                let container = this.$slots.default ? this.$el.children[0] : this.$el;
                this.$widgetId = hcaptcha.render(container, opt);
            }
        },
        onError(e) {
            if (window.hcaptcha === 'undefined') {
                return;
            }

            this.$emit('error',e);
            this.reset(); //reset the captcha
        },
        //let user handle the errors, etc
        onVerify(response) {
            this.$emit('verify', response);
        },
        onExpired() {
            this.$emit('expired');
        },
        execute() {
            window.hcaptcha.execute(this.$widgetId);
        },
        reset() {
            window.hcaptcha.reset(this.$widgetId);
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
