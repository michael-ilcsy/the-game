<template>
  <div class="hand">
    <label :for="`card${index}`" v-for="(number,index) in cardNumbers" :key="number">
      <input type="radio" :id="`card${index}`" name="card" @click="cardSelect(number)">
      <Card :number="number"></Card>
    </label>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import Card from "@/components/Card.vue";
  import {gameModule} from "@/store/Game";

  @Component({
    components: {
      Card
    }
  })
  export default class Hand extends Vue {
    get cardNumbers() {
      return gameModule.handCardNumbers
    }

    public cardSelect(number: number) {
      gameModule.SET_SELECTED_CARD(number)
    }
  }
</script>

<style scoped lang="scss">
  .hand {
    display: flex;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + .card {
    border: 4px solid #ff9900;
  }
</style>
