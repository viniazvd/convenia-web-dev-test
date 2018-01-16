<template>
  <select 
    class="container__select--configuration"
    :value="this.selected"
    @input="this.emiteOrigin">
    <option value="">{{ this.label }}</option>
    <option v-for="ddd in this.ddds" :value="ddd" :key="ddd.uniqueKeyNotFound">
      {{ ddd }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectDDD',

  props: {
    selected: {
      type: String,
      require: true
    },
    ddds: {
      type: Array,
      require: true,
      validator: function (prices) {
        const hasSizeEqual3 = x => x.length === 3

        return prices.every(hasSizeEqual3)
      }
    },
    label: {
      type: String,
      require: true
    }
  },

  methods: {
    emiteOrigin (value) {
      this.$emit('update:selected', value.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../../assets/sass/_base.sass"; 

.container__select--configuration
  flex: 0 1 auto;
  margin-right: 0px;

@media screen and(min-width: 500px)
  .container__select--configuration
    margin-right: 80px;
    width: 6.5em;
    
</style>

