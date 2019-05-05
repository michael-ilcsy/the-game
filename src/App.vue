<template>
  <div id="app">
    <GameField/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GameField from "@/components/GameField.vue"

  @Component({
    components: {
      GameField,
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
</style>
