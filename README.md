# Vue.js hCaptcha Component Library

hCaptcha Component Library for Vue.js, compatible with Vue 2+.

## Installation
You can install this library via npm with:
```
npm install @hcaptcha/vue-hcaptcha --save
```

or via yarn:
```
yarn add @hcaptcha/vue-hcaptcha
```

or via script tag (`Vue` must be globally available)
```
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@hcaptcha/vue-hcaptcha"></script>
```

#### Basic Usage
```
<template>
    <vue-hcaptcha sitekey="**Your sitekey here**"></vue-hcaptcha>
</template>

<script>
  import VueHcaptcha from '@hcaptcha/vue-hcaptcha';
  export default {
    ...
    components: { VueHcaptcha }
  };
</script>
```

The component will automatically include and load the hCaptcha API library and append it to the root component.
This is designed for ease of use with the hCaptcha API!


### Api

#### Props

|Name|Values/Type|Required|Default|Description|
|---|---|---|---|---|
|`sitekey`|String|**Yes**|`-`|This is your sitekey, this allows you to load captcha. If you need a sitekey, please visit [hCaptcha](https://www.hcaptcha.com), and sign up to get your sitekey.|
|`size`|String (normal, compact, invisible)|No|`normal`|This specifies the "size" of the component. hCaptcha allows you to decide how big the component will appear on render, this always defaults to normal.|
|`theme`|String (light, dark)|No|`light`|hCaptcha supports both a light and dark theme. If no theme is inherently set, the captcha will always default to light.|
|`tabindex`|Integer|No|`0`|Set the tabindex of the widget and popup. When appropriate, this can make navigation of your site more intuitive.|
|`language`|String (ISO 639-2 code)|No|`auto`|hCaptcha auto-detects language via the user's browser. This overrides that to set a default UI language.|
|`reCaptchaCompat`|Boolean|No|`true`|Disable drop-in replacement for reCAPTCHA with `false` to prevent hCaptcha from injecting into window.grecaptcha.|
|`challengeContainer`|String|No|`-`|A custom element id to render the hCaptcha challenge.|
|`rqdata`|String|No|-|See Enterprise docs.|
|`sentry`|Boolean|No|-|See Enterprise docs.|
|`apiEndpoint`|String|No|-|See Enterprise docs.|
|`endpoint`|String|No|-|See Enterprise docs.|
|`reportapi`|String|No|-|See Enterprise docs.|
|`assethost`|String|No|-|See Enterprise docs.|
|`imghost`|String|No|-|See Enterprise docs.|


#### Events

|Event|Params|Description|
|---|---|---|
|`error`|`err`|When an error occurs. Component will reset immediately after an error.|
|`verify`|`token, eKey`|When challenge is completed. The `token` and an `eKey` are passed along.|
|`expired`|-|When the current token expires.|
|`challengeExpired`|-|When the unfinished challenge expires.|
|`opened`|-|When the challenge is opened.|
|`closed`|-|When the challenge is opened.|
|`reset`|-|When the challenge is reset.|
|`rendered`|-|When the challenge is rendered.|
|`executed`|-|When the challenge is executed.|

### Methods

|Method|Description|
|---|---|
|`execute()`|Programmatically trigger a challenge request|
|`reset()`|Reset the current challenge|

### FAQ

#### How can I get a sitekey?

Sign up at [hCaptcha](https://www.hcaptcha.com) to get your sitekey today. Check [documentation](https://docs.hcaptcha.com/api#getapikey) for more information.

#### What is hCaptcha?

[hCaptcha](https://www.hcaptcha.com) is a drop-in replacement for reCAPTCHA that earns websites money and helps companies get their data labeled.

### Demo

![Demo](https://raw.githubusercontent.com/hCaptcha/vue-hcaptcha/master/screenshots/demo.gif)

To run the demo, simply ```npm run serve``` after downloading the repo, this will start a development server on localhost:8080. Open your console to see the demo app emitting events.

To test locally, you can run the following NPM commands:
- ```npm run serve```
    - This initiates the hot reload dev server from the vue-cli
- ```npm run build```
    - This will build your version of the component with your customizations for production.
- ```npm run lint``` and ```npm run lint:fix```
    - This will enable ESLint to help keep your code clean!

### TypeScript

Please see the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/44299) entry.


### Note for maintainers: Publishing npm package
Using the proper credentials (granted to @Hcaptcha org), you'll need to do the following to publish:

- `npm login`
- Bump version in package.json
- Commit changes
- `npm publish .`
