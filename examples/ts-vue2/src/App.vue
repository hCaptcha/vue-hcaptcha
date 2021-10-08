<template>
    <div id="app">
        <vue-hcaptcha
            ref="hcaptchaEl"
            sitekey="10000000-ffff-ffff-ffff-000000000001"
        />
        <button @click="execute">Execute programmatically</button>
        <button @click="reset">Reset programmatically</button>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Ref} from 'vue-property-decorator';
// import VueHcaptcha from '@hcaptcha/vue-hcaptcha'; // for production
import VueHcaptcha from '../../../src/hcaptcha'; // for development


@Component({
    components: {
        VueHcaptcha
    },
})
export default class App extends Vue {
    @Ref() readonly hcaptchaEl!: VueHcaptcha

    execute(){
        this.hcaptchaEl.execute();
        this.hcaptchaEl.$on('verify', (token: string, eKey: string) => {
            console.log('Verified', {token, eKey});
        });
    }

    reset(){
        this.hcaptchaEl.reset();
        this.hcaptchaEl.$on('reset', () => {
            console.log('hCaptcha reset');
        });
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
button {
    display: block;
    margin: 15px auto;
    padding: 10px;
}
</style>
