<template>
  <div id="app">

    <!--<form>
      Buscar: <input v-model="searchQuery">
    </form>
    <exemplo
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </exemplo>-->
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

import Exemplo from '@/components/Exemplo'

export default {
  name: 'app',
  components: {
    Exemplo
  },
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    }
  },
  methods: {
    ...mapActions([
      'getPlans',
      'getPrices',
      'getDetails'
    ])
  },
  created () {
    axios.all([
      this.getPlans(),
      this.getPrices(),
      this.getDetails()
    ]).then(() => {
      console.log(this.$store.state)
    })
  }
}
</script>
<style scoped>
#app {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 60px;
  font-family: 'Helvetica';
}

#app form {
  flex: 0 100%;
  text-align: center;
  margin-bottom: 30px;
}
</style>
