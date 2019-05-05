<template>
  <div class="field">
    {{ field.topCardNumber }}
  </div>
</template>

<script lang="ts">

  import {Component, Prop, Vue} from "vue-property-decorator"
  import BaseField from "@/models/field/BaseField"

  @Component({})
  export default class Field extends Vue {
    @Prop({required: true})
    public field!: BaseField
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
  }
</style>
