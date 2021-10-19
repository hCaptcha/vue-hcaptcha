<template>
    <div id="App">
        <h1>Vue hCaptcha Demo</h1>

        <div v-if="verified" id="verified">
            <h1>Successfully Verified!</h1>
            <p>token: {{ token }}</p>
            <p>eKey: {{ eKey }}</p>
        </div>

        <div v-if="expired" id="expired">
            <h1>Challenge expired!</h1>
        </div>

        <div v-if="error" id="error">
            <h1>Error:</h1>
            <p>{{ error }}</p>
        </div>

        <h3>Normal checkbox (default props)</h3>
        <vue-hcaptcha
            sitekey="10000000-ffff-ffff-ffff-000000000001"
            @verify="onVerify"
            @expired="onExpire"
            @error="onError"
        />

        <h3>Compact and dark theme checkbox</h3>
        <vue-hcaptcha
            sitekey="10000000-ffff-ffff-ffff-000000000001"
            size="compact"
            theme="dark"
            @verify="onVerify"
            @expired="onExpire"
            @error="onError"
        />

        <h3>Invisible checkbox - triggered programmatically by a button</h3>
        <vue-hcaptcha
            ref="invisibleHcaptcha"
            sitekey="10000000-ffff-ffff-ffff-000000000001"
            size="invisible"
            theme="dark"
            @verify="onVerify"
            @expired="onExpire"
            @challenge-expired="onExpire"
            @error="onError"
        />

        <button @click="onSubmit">
            Click Here!
        </button>
    </div>
</template>

<script>
// import VueHcaptcha from '@hcaptcha/vue-hcaptcha'; // for production
import VueHcaptcha from '../../../packages/vue2/src/main'; // for development

export default {
    name: 'App',
    components: {
        VueHcaptcha
    },
    data() {
        return {
            verified: false,
            expired: false,
            token: null,
            eKey: null,
            error: null,
        }
    },
    methods: {
        onVerify(token, ekey) {
            this.verified = true;
            this.token = token;
            this.eKey = ekey;
            console.log(`Callback token: ${token}, ekey: ${ekey}`);
        },
        onExpire() {
            this.verified = false;
            this.token = null;
            this.eKey = null;
            this.expired = true;
            console.log('Expired');
        },
        onError(err) {
            this.token = null;
            this.eKey = null;
            this.error = err;
            console.log(`Error: ${err}`);
        },
        onSubmit() {
            console.log('Submitting the invisible hCaptcha', this.$refs.invisibleHcaptcha);
            this.$refs.invisibleHcaptcha.execute();
        }
    }
}
</script>

<style>
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#App {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

#verified {
    color: white;
    background: green;
}

#error {
    color: white;
    background: red;
}
</style>
