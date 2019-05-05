<template>
  <div id="app">
    <GameField/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GameField from "@/components/GameField.vue"
  import {gameManager} from "@/services/GameManager"

  @Component({
    components: {
      GameField,
    },
  })
  export default class App extends Vue {
    public created() {
      gameManager.initialize()
    }
  }
</script>

<style lang="scss">
</style>
