<template>
  <section class="container">
    <div class="container__plans">
      <div 
        class="item"
        v-for="plan in this.plans" 
        :key="plan.plan_id">
      {{ plan.plan_name }}  
      </div>
      <div class="item">Normal</div>
    </div>

    <div class="container__prices">
      <div 
        class="item"
        v-for="value in this.withPromotion" 
        :key="value.uniqueKeyNotFound">
      {{ value }}  
      </div>
      <div class="item">{{ this.withoutPromotion }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppTablePromotions',

  props: ['plans', 'withPromotion', 'withoutPromotion']
}
</script>

<style lang="sass" scoped>
@import "../../../assets/sass/_base.sass"; 

.container 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

.container__plans
  display: flex;
  flex-direction: column;
  background: $color__primary--light;
  color: $color__white;
  width: 75%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid $color__primary--light;

.container__prices
  display: flex;
  flex-direction: column;
  background: $color__white;
  width: 75%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid $color__primary--light;

.item 
  flex: 1 1 auto;
  width: 99%;

@media screen and(min-width: 500px)
  .container__plans
    flex-direction: row;

  .container__prices
    flex-direction: row;
</style>

