// App Template Div Container
<template>
  <div id="App">
    <div id="Title">
      Vue hCaptcha Demo
    </div>

    <vuehcaptcha
      sitekey="10000000-ffff-ffff-ffff-000000000001"
      theme="dark"
      @verify="onCallback"
      @expired="onExpire"
      @error="onError"
    />
    <verifycomponent
      v-if="verified"
      :value="verified"
      :verified="verified"
    />
    <div id="Header">
      Invisible and Bound to a Button
    </div>
    <p>
      To have your captcha trigger on a certain event, simply set the size prop to invisible, set a ref, and declare a listener.
      In the listener function you can trigger the captcha with <code>this.$refs.invisibleHcaptcha.execute()</code>.
    </p>
    <p>
      You can replace "invisibleHcaptcha" with whatever you named the reference to if you have multiple captchas. 
      If you do not have multiple captchas, it will always default to the first one on the page.
    </p>
    <div>
      <form @submit.prevent="onSubmit">
        <vuehcaptcha
          ref="invisibleHcaptcha"
          sitekey="10000000-ffff-ffff-ffff-000000000001"
          size="invisible"
          @verify="onCallback"
          @expired="onExpire"
        />
        <button type="submit">
          Click Here!
        </button>
      </form>
    </div>
  </div>
</template>


// App Script
<script>

import vuehcaptcha from '../../src/main.js';
import verifycomponent from './component/verify'
export default {
    name: 'App',
    components: {
        vuehcaptcha,
        verifycomponent
    },
    data() {
        return {
            verified: false
        }
    },
    /* eslint-disable no-console */
    methods: {
        onCallback(response) {
            this.verified = true;
            console.log(`Callback Response: ${response}`);
        },
        onExpire() {
            this.verified = false;
            console.log("Expired");
        },
        onError(err) {
            console.log(`Error: ${err}`);
        },
        onSubmit() {
            console.log(this.$refs.invisibleHcaptcha);
            this.$refs.invisibleHcaptcha.execute();
        }
    }
    /* eslint-enable no-console */

}
</script>

<style>
  #App {  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    margin: 0 auto;
    text-align: center;
  }
  #Title, #Header {
    margin-bottom: 25px;
    margin-top: 60px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #2c3e50;
  }
</style>