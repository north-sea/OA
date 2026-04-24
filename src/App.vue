<template>
  <div id="app">
    <router-view />
    <nsc-modal />
  </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        let res = null ?? 1;
    },
};
</script>
