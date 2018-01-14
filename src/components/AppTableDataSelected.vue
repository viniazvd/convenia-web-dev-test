<template>
  <div v-if="this.wasChose()">
    <table>
    <thead>
      <tr>
        <th>Origem</th>
        <th>Destino</th>
        <th>Minutos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ this.getNameStateOrigin }}</td>
        <td>{{ this.getNameStateDestiny }}</td>
        <td>{{ this.minutes }}</td>
      </tr>
    </tbody>
  </table>
  </div>
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
    }
  }
}
</script>

<style scoped>
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
