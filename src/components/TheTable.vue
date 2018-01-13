<template>
  <table>
    <thead>
      <tr>
        <th v-for="plan in this.plans" :key="plan.plan_id"> 
        {{ plan.plan_name }}
        </th>
        <th>
          Normal
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="x in this.withPromotion" :key="x.uniqueKeyNotFound">
          {{ x }}
        </td>
        <td>
          {{ this.withoutPromotion }} 
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',

  props: ['plans', 'withPromotion', 'withoutPromotion']
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

