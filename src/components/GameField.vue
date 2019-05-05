<template>
  <div>
    <div class="field-wrapper">
      <div>
        <div class="lower">
          <Field v-for="field in lowerFields" :field="field"></Field>
        </div>
        <div class="upper">
          <Field v-for="field in upperFields" :field="field"></Field>
        </div>
      </div>
      <InfoField/>
    </div>
    <Hand/>
  </div>
</template>

<script lang="ts">
  import Hand from "@/components/Hand.vue"
  import {Component, Vue} from "vue-property-decorator"
  import LowerField from "@/models/field/LowerField"
  import Card from "@/models/Card"
  import UpperField from "@/models/field/UpperField"
  import Field from "@/components/Field.vue"
  import InfoField from "@/components/InfoField.vue"
  import {gameModule} from "@/store/Game"

  @Component({
    components: {
      Hand,
      Field,
      InfoField
    }
  })
  export default class GameField extends Vue {
    get lowerFields() {
      return gameModule.lowerFields
    }

    get upperFields() {
      return gameModule.upperFields
    }
  }
</script>

<style scoped lang="scss">
  .field-wrapper {
    display: flex;
    width: 650px;
    justify-content: space-between;
  }

  .lower, .upper {
    display: flex;
    margin-bottom: 2rem;

    .field {
      margin-left: 4rem;
    }
  }
</style>
