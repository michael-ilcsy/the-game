<template>
  <div class="info-field">
    <div class="info-item -red">
      山札<br>
      残り: {{ deckRemainingCount }} 枚
    </div>
    <div class="info-item -blue">
      このターン<br>
      あと {{ normaInThisTurn }} 枚以上
    </div>
    <div class="info-item">
      <button :disabled="canGoToNextTurn" @click="goToNextTurn">次のターンへ</button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {gameModule} from "@/store/Game"

  @Component({})
  export default class InfoField extends Vue {
    get deckRemainingCount() {
      return gameModule.deckRemainingCount
    }

    get normaInThisTurn() {
      return gameModule.normaInThisTurn
    }

    get canGoToNextTurn() {
      return this.normaInThisTurn > 0
    }

    public goToNextTurn() {
      gameModule.goToNextTurn()
    }
  }
</script>

<style scoped lang="scss">
  .info-field {
    width: 200px;
    height: 320px;
    border: #444 solid 1px;

    box-sizing: border-box;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .info-item {
      margin: 5px;
      padding: 5px;

      &.-red {
        border: #FF4500 solid 1px;
      }

      &.-blue {
        border: #00BFFF solid 1px;
      }
    }
  }
</style>
