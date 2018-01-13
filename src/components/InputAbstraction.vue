<template>
  <div class="input">
    <select :value="this.selected" @input="this.emiteOrigin">
      <option disabled value="">{{ this.label }}</option>
      <option v-for="price in this.prices" :value="type(price)" :key="price.uniqueKeyNotFound">
        {{ type(price) }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    selected: {
      type: String,
      require: true
    },
    prices: {
      type: Array,
      require: true,
      validator: function (prices) {
        const hasPrice = x => x.price

        return prices.every(hasPrice)
      }
    },
    label: [String, Object, Array]
  },

  data () {
    return {
      initialLabel: ''
    }
  },

  created () {
    this.initialLabel = this.label
  },

  methods: {
    emiteOrigin (value) {
      this.$emit('update:selected', value.target.value)
    },

    type (type) {
      return this.initialLabel === 'origin'
        ? type.origin
        : type.destiny
    }
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

