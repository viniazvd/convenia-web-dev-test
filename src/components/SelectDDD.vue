<template>
  <div class="input">
    <select :value="this.selected" @input="this.emiteOrigin">
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
      require: true
      // old validator
      // validator: function (prices) {
      //   const hasPrice = x => x.price

      //   return prices.every(hasPrice)
      // }
    },
    label: {
      type: String,
      require: true
      // old validator
      // validator: function (value) {
      //   return value === 'origin' || value === 'destiny'
      // }
    }
  },

  // data () {
  //   return {
  //     initialLabel: ''
  //   }
  // },

  // created () {
  //   this.initialLabel = this.label
  // },

  methods: {
    emiteOrigin (value) {
      this.$emit('update:selected', value.target.value)
    }

    // old method
    // type (type) {
    //   return this.initialLabel === 'origin'
    //     ? type.origin
    //     : type.destiny
    // }
  }
}
</script>

<style scoped>
.input {
  flex: 0 1 auto;
  align-content: center;
  padding-right: 50px;
}
</style>

