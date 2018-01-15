<template>
  <div class="container__select--configuration">
    <select 
      :value="this.selected"
      @input="this.emiteOrigin">
      <option value="">{{ this.label }}</option>
      <option v-for="ddd in this.ddds" :value="ddd" :key="ddd.uniqueKeyNotFound">
        {{ ddd }}
      </option>
    </select>
  </div>
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
  align-content: center;
  padding-right: $base__padding-right;
</style>

