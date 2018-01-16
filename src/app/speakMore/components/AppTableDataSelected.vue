<template>
  <transition name="bounce">
      <section class="container" v-if="this.wasChose()">
        <div class="container__labels">
          <div class="item">Origem</div>
          <div class="item">Destino</div>
          <div class="item">Tempo da ligação</div>
        </div>

        <div class="container__data">
          <div class="item">{{ this.getNameStateOrigin }}</div>
          <div class="item">{{ this.getNameStateDestiny }}</div>
          <div class="item">{{ this.getTime }}</div>
        </div>
      </section>
  </transition>
</template>

<script>
export default {
  name: 'AppTableDataSelected',

  props: {
    origin: {
      type: String,
      require: false,
      validator: function (value) {
        return !value || value.length === 3
      }
    },
    destiny: {
      type: String,
      require: false,
      validator: function (value) {
        return !value || value.length === 3
      }
    },
    minutes: {
      type: String,
      require: false,
      validator: function (value) {
        return !value || Number(value) || typeof value === 'number'
      }
    },
    details: {
      type: [Array, Object]
    }
  },

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
@import "../../../assets/sass/transition.sass"; 
@import "../../../assets/sass/_base.sass"; 

@mixin defaultContainer()
  display: flex;
  flex-direction: column;
  width: 75%;
  border: 1px solid $color__primary--light;
  padding-top: 15px;
  padding-bottom: 15px;

.container 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

.container__labels
  @include defaultContainer()
  color: $color__white;
  background: $color__primary--light;

.container__data
  @include defaultContainer()

.item 
  flex: 1 1 auto;
  width: 99%;

@media screen and(min-width: 500px)
  .container__labels
    flex-direction: row;

  .container__data
    flex-direction: row;
</style>
