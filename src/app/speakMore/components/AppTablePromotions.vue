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
        <td v-for="value in this.withPromotion" :key="value.uniqueKeyNotFound">
          {{ value }}
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
  name: 'AppTablePromotions',

  props: ['plans', 'withPromotion', 'withoutPromotion']
}
</script>

<style lang="sass" scoped>
@import "../../../assets/sass/table.sass"; 
</style>

