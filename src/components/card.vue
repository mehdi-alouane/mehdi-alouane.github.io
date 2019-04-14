<template>
  <div class="hero is-large">
    <div class="hero-body has-text-centered">
      <div class="container">
        <p class="subtitle is-4">{{ init }}</p>
        <h1 class="title is-1">{{ name }}</h1>
        <h2 class="subtitle">{{ description }}</h2>
        <a
          :href="resume"
          class="button is-info"
          target="_blank"
          rel="noopener noreferrer"
          >
          <span
            class="icon">
            <i
              class="fa fa-file"
            ></i>
          </span>
          <span>Resume</span>
        </a>
        <a
          :href="github"
          class="button"
          target="_blank"
          rel="noopener noreferrer"
          >
          <span
            class="icon">
            <i
              class="fa fa-github"
            ></i>
          </span>
          <span>Github</span>
          </a>
        <a
          :href="linkedin"
          class="button"
          target="_blank"
          rel="noopener noreferrer"
          >
          <span
            class="icon">
            <i
              class="fa fa-linkedin"
            ></i>
          </span>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data: () => ({
    resume: 'https://drive.google.com/open?id=11z9wH2FU1mRBdRp5-gaRPH5BdIrTtLwz',
    github: 'https://github.com/mehdi-alouane',
    linkedin: 'https://www.linkedin.com/in/mehdi-alouane'
  }),
  props: {
    init: String,
    name: String,
    description: String
  }
}
</script>
