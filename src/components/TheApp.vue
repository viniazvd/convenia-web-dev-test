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
      <TheTablePromotions 
        :plans="this.getPlans" 
        :withPromotion="this.withPromotion" 
        :withoutPromotion="this.withoutPromotion">
      </TheTablePromotions>
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
    TheTablePromotions: () => import('./TheTablePromotions')
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

    accessed () {
      return `${this.originSelected}-${this.destinySelected}`
    }
  },

  computed: {
    ...mapGetters(['getDetails', 'getPlans', 'getArrayPrices', 'getPrices']),

    withPromotion () {
      // if all inputs have been selected
      if (this.originSelected && this.destinySelected && this.minuteSelected) {
        // checks if exist tax
        if (!this.getPrices[this.accessed()]) return '---'

        return this.getPlans.map(plan => {
          return this.$services.calculationWithPlan(plan.time, this.minuteSelected, this.getPrices, this.accessed)
        })
      }
      return '---'
    },

    withoutPromotion () {
      return this.$services.calculationWithoutPlan(this.originSelected, this.destinySelected, this.minuteSelected, this.getPrices, this.accessed)
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
