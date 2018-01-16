<template>
  <div v-if="!this.inputIsValid" class="alert--color">
    Dados inválidos!
  </div>
</template>

<script>
export default {
  name: 'CheckTax',

  props: {
    origin: {
      type: String,
      require: false,
      validator: function (value) {
        return !value || value.length === 3
      }
    },
    destiny: {
      type: String,
      require: false,
      validator: function (value) {
        return !value || value.length === 3
      }
    },
    inputIsValid: {
      type: Boolean,
      require: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../../assets/sass/_base.sass"; 

.alert--color
  color: $color__danger;
  font-weight: bold;
  font-size: 30px;
  text-decoration: underline;
</style>
