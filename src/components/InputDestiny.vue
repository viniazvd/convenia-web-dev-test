<template>
  <div class="input">
    <select :value="this.selected" @input="this.emiteDestiny">
      <option disabled value="">Destino</option>
      <option v-for="price in this.prices" :value="price.destiny" :key="price.uniqueKeyNotFound">
        {{ price.destiny }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TheInputDestiny',

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
    }
  },

  methods: {
    emiteDestiny (value) {
      this.$emit('update:selected', value.target.value)
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

