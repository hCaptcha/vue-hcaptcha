<template>
  <div>
    <h1>Successfully Verified!</h1>
    <p>You can catch the emitted onVerify event from the vuehcaptcha component with <code>@verify="yourListenerFunction"</code> </p>
  </div>
</template>
<script>
module.export = {
    name: 'verifycomponent',
    props: {
        verified: {
            type: Boolean
        }
    } 
}
</script>
