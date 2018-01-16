<template>
  <div class="container">
    <TheHeading />

    <div class="container__inputs">
      <SelectDDD 
        :selected.sync="originSelected" 
        :ddds="this.getDDD"
        label="Origem">
      </SelectDDD>

      <SelectDDD 
        :selected.sync="destinySelected" 
        :ddds="this.getDDD"
        label="Destino">
      </SelectDDD>

      <input 
        type="number" 
        v-model="minuteSelected" 
        placeholder="Minutos"
        style="width: 80px;" />
    </div>

    <AppTablePromotions 
      :plans="this.getPlans" 
      :withPromotion="this.withPromotion" 
      :withoutPromotion="this.withoutPromotion">
    </AppTablePromotions>

    <AppTableDataSelected
      :origin="this.originSelected"
      :destiny="this.destinySelected"
      :minutes="this.minuteSelected"
      :details="this.getDetails">
    </AppTableDataSelected>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TheApp',

  components: {
    TheHeading: () => import('./TheHeading'),
    SelectDDD: () => import('./SelectDDD'),
    AppTablePromotions: () => import('./AppTablePromotions'),
    AppTableDataSelected: () => import('./AppTableDataSelected')
  },

  data () {
    return {
      originSelected: '',
      destinySelected: '',
      minuteSelected: ''
    }
  },

  created () {
    this.setPlans()
    this.setPrices()
    this.setDetails()

    this.$loader.show()
    setTimeout(() => {
      this.$loader.hide()
    }, 3000)
  },

  methods: {
    ...mapActions(['setDetails', 'setPlans', 'setPrices']),

    accessed () {
      return `${this.originSelected}-${this.destinySelected}`
    }
  },

  computed: {
    ...mapGetters(['getDetails', 'getPlans', 'getDDD', 'getPrices']),

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

<style lang="sass" scoped>
@import "../../../assets/sass/_base.sass"; 

// BLOCKS
.container
  padding: em(35);
  text-align: center;

// ELEMENTS
.container__inputs
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

@media screen and(min-width: 500px)
  .container__plans
    flex-direction: column;
</style>
