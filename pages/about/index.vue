<template>
  <section>
    <Container>
      <div class="intro">
        <h1>Welcome to Sambit Sahoo</h1>
      </div>
    </Container>
  </section>
</template>
<script>
import Container from '~/components/Container'
export default {
  components: {
    Container
  }
}
</script>
<style lang="scss" scoped>
.intro {
  text-align: center;
  margin-bottom: 2.4rem;

  h1 {
    margin-top: 0;
  }
}
</style>
