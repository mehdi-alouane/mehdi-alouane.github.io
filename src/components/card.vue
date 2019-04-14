<template>
  <div class="hero is-large">
    <div class="hero-body has-text-centered">
      <div class="container">
        <p class="subtitle is-4">{{ init }}</p>
        <h1 class="title is-1">{{ name }}</h1>
        <h2 class="subtitle">{{ description }}</h2>
        <div class="button is-info">
          <span class="icon">
            <i class="fa fa-file"></i>
          </span>
          <span>Resume</span>
        </div>
        <div class="button">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          <span>Github</span>
          </div>
        <div class="button">
          <span class="icon">
            <i class="fa fa-linkedin"></i>
          </span>
          <span>LinkedIn</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    init: String,
    name: String,
    description: String
  }
}
</script>
