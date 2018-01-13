<template>
  <div class="container">
    <TheHeading />

    <div class="container-inputs">
      <SelectDDD 
        :selected.sync="originSelected" 
        :prices="this.getArrayPrices"
        label="origin">
      </SelectDDD>

      <SelectDDD 
        :selected.sync="destinySelected" 
        :prices="this.getArrayPrices"
        label="destiny">
      </SelectDDD>

      <div class="input">
        <input 
          type="number" 
          v-model="minuteSelected" 
          placeholder="Minutos">
      </div>
    </div>

    <div class="container-table">
      <TheTable 
        :plans="this.getPlans" 
        :withPromotion="this.withPromotion" 
        :withoutPromotion="this.withoutPromotion">
      </TheTable>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import setData from '../support/mixins/setData'

export default {
  name: 'TheApp',

  components: {
    TheHeading: () => import('./TheHeading'),
    SelectDDD: () => import('./SelectDDD'),
    TheTable: () => import('./TheTable')
  },

  data () {
    return {
      originSelected: '',
      destinySelected: '',
      minuteSelected: ''
    }
  },

  mixins: [setData],

  methods: {
    ...mapActions(['setDetails', 'setPlans', 'setPrices']),

    priceBetween () {
      return `${this.originSelected}-${this.destinySelected}`
    }
  },

  computed: {
    ...mapGetters(['getDetails', 'getPlans', 'getArrayPrices', 'getPrices']),

    withPromotion () {
      if (!this.getPrices[this.priceBetween()]) return '---'

      const faleMais30 = this.$services.calculationWithPlan(30, this.minuteSelected, this.getPrices, this.priceBetween)

      const faleMais60 = this.$services.calculationWithPlan(60, this.minuteSelected, this.getPrices, this.priceBetween)

      const faleMais120 = this.$services.calculationWithPlan(120, this.minuteSelected, this.getPrices, this.priceBetween)

      return [faleMais30, faleMais60, faleMais120]
    },

    withoutPromotion () {
      return this.$services.calculationWithoutPlan(this.originSelected, this.destinySelected, this.minuteSelected, this.getPrices, this.priceBetween)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 100px;
  text-align: center;
}

.container-inputs {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  padding-top: 30px;
}

.input {
  flex: 0 1 auto;
  align-content: center;
  padding-right: 50px;
}

.input input {
  width: 65px;
}

.container-table {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  padding-top: 30px;
}
</style>
