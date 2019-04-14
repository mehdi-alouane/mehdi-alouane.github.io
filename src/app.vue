<template>
  <card
      init="Hello World 👋️"
      name="i'm Mehdi Alouane"
      description="A self taught fullstack developer"
    />
</template>

<script>
import Card from './components/card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style lang="sass">
@import url('../node_modules/bulma/css/bulma.css')
@import url('../node_modules/font-awesome/css/font-awesome.css')
</style>
