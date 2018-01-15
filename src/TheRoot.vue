<template>
  <div id="root">
    <!-- 
      Segundo o style-guide oficial do vue, os componentes que só devem ter uma única
     instância ativa devem começar com o Theprefixo, para denotar que pode haver apenas um. 
    -->
    <TheApp></TheApp>
  </div>
</template>

<script>

export default {
  name: 'app',

  // lazy loading...
  components: {
    TheApp: () => import('./components/TheApp')
  }
}
</script>

