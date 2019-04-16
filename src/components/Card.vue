<template>
  <div class="card">
    <div class="number">
      {{ number }}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component()
  export default class Card extends Vue {
    @Prop({required: true})
    public number!: number
  }
</script>

<style scoped lang="scss">
  .card {
    width: 100px;
    height: 140px;
    border: #444 solid 1px;

    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 3rem;
  }
</style>
