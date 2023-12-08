<script>
import { mapActions } from 'pinia';
import { useSessionStore } from '../stores/sessionStores'
export default {
  name: 'LoginPage',
  data() {
    return {
      log: '',
    };
  },
  methods: {
    callback(response) {
        this.log = response;
        this.loginGoogle(response)
    },
    ...mapActions(useSessionStore, ['loginGoogle'])
    
  },
};
</script>

<template>
  <GoogleLogin :callback="callback" prompt />
</template>