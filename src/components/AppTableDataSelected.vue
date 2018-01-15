<template>
  <transition name="bounce">
    <div v-if="this.wasChose()">
      <table>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Tempo da ligação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ this.getNameStateOrigin }}</td>
            <td>{{ this.getNameStateDestiny }}</td>
            <td>{{ this.getTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppTableDataSelected',

  props: ['origin', 'destiny', 'minutes', 'details'],

  methods: {
    wasChose () {
      if (this.origin || this.destiny) return true
    }
  },

  computed: {
    getNameStateOrigin () {
      if (!this.origin) return '-'

      return this.details[this.origin]
    },

    getNameStateDestiny () {
      if (!this.destiny) return '-'

      return this.details[this.destiny]
    },

    getTime () {
      // if the table is appearing
      // (to avoid unnecessary calculations)
      if (!this.origin && !this.destiny) return '-'

      const hour = Math.floor(this.minutes / 60)
      const min = (this.minutes % 60)

      return `${hour}h ${min}min`
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/sass/table.sass"; 
@import "../assets/sass/transition.sass"; 
</style>

