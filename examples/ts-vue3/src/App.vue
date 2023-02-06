<script setup lang="ts">
import { ref } from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

const verified = ref(false);
const expired = ref(false);
const token = ref("");
const eKey = ref("");
const error = ref("");
const invisibleHcaptcha = ref<VueHcaptcha|null>(null);
const asyncExecuteHCaptcha = ref<VueHcaptcha|null>(null);

function onVerify(tokenStr: string, ekey: string) {
  verified.value = true;
  token.value = tokenStr;
  eKey.value = ekey;
  console.log(`Callback token: ${tokenStr}, ekey: ${ekey}`);
}

function onExpire() {
  verified.value = false;
  token.value = '';
  eKey.value = '';
  expired.value = true;
  console.log('Expired');
}

function onChallengeExpire() {
  verified.value = false;
  token.value = '';
  eKey.value = '';
  expired.value = true;
  console.log('Challenge expired');
}

function onError(err: string) {
  token.value = '';
  eKey.value = '';
  error.value = err;
  console.log(`Error: ${err}`);
}

function onSubmit() {
  if (invisibleHcaptcha.value) {
    console.log('Submitting the invisible hCaptcha');
    invisibleHcaptcha.value.execute();
  }
}

async function onAsyncExecute() {
  if (asyncExecuteHCaptcha.value) {
    const res = await asyncExecuteHCaptcha.value.executeAsync();
    console.log("Async execute response", res);
  }
}
</script>

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

    <hr width="100%">

    <h3>Normal checkbox (default props)</h3>
    <vue-hcaptcha
        sitekey="10000000-ffff-ffff-ffff-000000000001"
        @verify="onVerify"
        @expired="onExpire"
        @challenge-expired="onChallengeExpire"
        @error="onError"
    />

    <hr width="100%">

    <h3>Compact and dark theme checkbox</h3>
    <vue-hcaptcha
        sitekey="10000000-ffff-ffff-ffff-000000000001"
        size="compact"
        theme="dark"
        @verify="onVerify"
        @expired="onExpire"
        @challenge-expired="onChallengeExpire"
        @error="onError"
    />

    <hr width="100%">

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

    <hr width="100%">

    <button @click="onAsyncExecute">
      Async execute
    </button>
    <vue-hcaptcha
        ref="asyncExecuteHCaptcha"
        sitekey="10000000-ffff-ffff-ffff-000000000001"
        @verify="onVerify"
        @expired="onExpire"
        @challengeExpired="onChallengeExpire"
        @error="onError"
    />
  </div>
</template>

<style scoped>
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
