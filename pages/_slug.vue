<template>
  <section class="container">
    <p class="back">
      <nuxt-link exact to="/">⟵ Regresar</nuxt-link>
    </p>
    <h1>{{ post.fields.title }}</h1>
    <!--div
      class="image"
      :style="
        `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
      "
    ></div-->
    <article v-html="$md.render(post.fields.body)"></article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  head() {
    return {
      title: this.post.fields.title
    };
  },
  computed: {
    post() {
      const post = this.$store.state.posts.filter(
        el => el.fields.slug === this.slug
      );
      return post[0];
    }
  }
};
</script>

<style lang="css" scoped>
* {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #151a1e;
}

.container {
margin: 2.618em auto;
max-width: 37.577em;
position: relative;
text-align: left;
}

article {
  text-align: justify;
word-break: break-word;

font-size: 1rem;
}

.back {
  margin-top: 20px;
}
</style>