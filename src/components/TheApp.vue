<template>
  <div class="container">
    <TheHeading />

    <div class="container-inputs">
      <div class="input">
        <select v-model="originSelected">
          <option disabled value="">Origem</option>
          <option v-for="price in this.getArrayPrices" :value="price.origin" :key="price.uniqueKeyNotFound">
            {{ price.origin }}
          </option>
        </select>
      </div>

      <div class="input">
        <select v-model="destinySelected">
          <option disabled value="">Destino</option>
          <option v-for="price in this.getArrayPrices" :value="price.destiny" :key="price.uniqueKeyNotFound">
            {{ price.destiny }}
          </option>
        </select>
      </div>

      <div class="input">
        <input type="number" v-model="minuteSelected" placeholder="Minutos">
      </div>
    </div>

    <div class="container-table">
      <table>
        <thead>
          <tr>
            <th v-for="plan in this.getPlans" :key="plan.plan_id"> 
            {{ plan.plan_name }}
            </th>
            <th>
              Normal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="x in this.withPromotion" :key="x.id">
              {{ x }}
            </td>
            <td>
              {{ this.withoutPromotion }} 
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import setData from '../support/mixins/setData'

export default {
  name: 'TheApp',

  components: {
    TheHeading: () => import('./TheHeading')
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
      const result = (parseFloat(normalPrice) * parseFloat(punishment) + normalPrice).toFixed(2)

      return result
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

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}
th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  user-select: none;
  font-weight: 300;
}
td {
  background-color: #f9f9f9;
}
th, td {
  min-width: 120px;
  padding: 10px 20px;
}
th.active {
  color: #fff;
}
th.active .arrow {
  opacity: 1;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}
.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}
.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
