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

  @Component({
    components: {
      Hand,
      Field,
      InfoField
    }
  })
  export default class GameField extends Vue {
    public lowerFields: LowerField[] = [
      new LowerField(new Card(100)),
      new LowerField(new Card(100)),
    ]

    public upperFields: UpperField[] = [
      new UpperField(new Card(1)),
      new UpperField(new Card(22))
    ]
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
