<template>
  <div id="app">
    <Hand/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Hand from "@/components/Hand.vue"

  @Component({
    components: {
      Hand
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
</style>
