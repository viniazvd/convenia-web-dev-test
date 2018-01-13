<template>
  <div class="container">
    <TheHeading />

    <div class="container-inputs">
      <InputAbstraction 
        :selected.sync="originSelected" 
        :prices="this.getArrayPrices"
        label="origin">
      </InputAbstraction>

      <InputAbstraction 
        :selected.sync="destinySelected" 
        :prices="this.getArrayPrices"
        label="destiny">
      </InputAbstraction>

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
    InputAbstraction: () => import('./InputAbstraction'),
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
    },

    calculationWithPlan (plan) {
      if (this.minuteSelected < plan) return '-'

      const punishment = '0.10'
      const timePaid = this.minuteSelected - plan
      const normalPrice = this.getPrices[this.priceBetween()] * timePaid

      return (normalPrice + parseFloat(normalPrice) * parseFloat(punishment)).toFixed(2)
    }
  },

  computed: {
    ...mapGetters(['getDetails', 'getPlans', 'getArrayPrices', 'getPrices']),

    withPromotion () {
      if (!this.getPrices[this.priceBetween()]) return '---'

      const faleMais30 = this.calculationWithPlan(30)

      const faleMais60 = this.calculationWithPlan(60)

      const faleMais120 = this.calculationWithPlan(120)

      return [faleMais30, faleMais60, faleMais120]
    },

    withoutPromotion () {
      if (this.originSelected && this.destinySelected && this.minuteSelected) {
        if (!this.getPrices[this.priceBetween()]) return '-'
        return 'R$ ' + (this.getPrices[this.priceBetween()] * this.minuteSelected).toFixed(2)
      }
      return '-'
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
