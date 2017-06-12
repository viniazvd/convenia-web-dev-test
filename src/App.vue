<template>
  <div id="app" />
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'app',
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
