<template>
  <div class="field" :class="classes">
    {{ field.topCardNumber }}
  </div>
</template>

<script lang="ts">

  import {Component, Prop, Vue} from "vue-property-decorator"
  import BaseField from "@/models/field/BaseField"
  import {gameModule} from "@/store/Game"
  import {FieldStatus} from "@/models/field/FieldStatus"

  @Component({})
  export default class Field extends Vue {
    @Prop({required: true})
    public field!: BaseField

    get selectedCard() {
      return gameModule.selectedCard
    }

    get fieldStatus() {
      return this.field.getFieldStatus(this.selectedCard)
    }

    get classes() {
      return {
        OK: this.fieldStatus === FieldStatus.OK,
        Back: this.fieldStatus === FieldStatus.BACK
      }
    }
  }
</script>

<style scoped lang="scss">
  .field {
    width: 100px;
    height: 140px;
    border: #444 solid 1px;

    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 3rem;

    &.OK {
      border: #FF4500 solid 4px;
    }

    &.Back {
      border: #00BFFF solid 4px;
    }
  }
</style>
