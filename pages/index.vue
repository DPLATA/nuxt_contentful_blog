<template>
  <main>
    <div class="container">
      <h1 class="title">Plata planet</h1>
      <section v-for="post in posts" :key="post.fields.slug">
        <!-- REFACTOR NEEDED -->
        <div class="container">
          <div class="card">
            <div class="card__header">
              <img
                :src="`https:${post.fields.heroImage.fields.file.url}`"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <h4>
                <nuxt-link :to="post.fields.slug">{{
                  post.fields.title
                }}</nuxt-link>
              </h4>
              <p v-html="$md.render(post.fields.description)">
                <br /><br />
                <nuxt-link :to="post.fields.slug" class="more"
                  >Leer más⟶</nuxt-link
                >
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <div class="user__info">
                  <h5>{{ post.fields.author.fields.name }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--div
         class="image"
         :style="
           `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
         "
       ></div>
       <h2 class="title">
         <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
       </h2>
       <p class="author">Autor: {{ post.fields.author.fields.name }}</p>
       <p class="description">
         {{ post.fields.description }}<br />
         <nuxt-link :to="post.fields.slug" class="more">Leer ⟶</nuxt-link>
       </p-->
      </section>
    </div>
  </main>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  display: grid;
  place-items: center;
  height: 100vh;
  background: #7f7fd5;
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag {
  align-self: flex-start;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.75rem;
}

.tag + .tag {
  margin-left: 0.5em;
}

.tag-blue {
  background: #56ccf2;
  background: linear-gradient(to bottom, #2f80ed, #56ccf2);
  color: #fafafa;
}

.tag-brown {
  background: #d1913c;
  background: linear-gradient(to bottom, #ffd194, #d1913c);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: 0.5rem;
}

.user__image {
  border-radius: 50%;
}

.user__info > small {
  color: #666;
}
</style>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  head: {
    title: 'Plata planet',
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
}
</script>
