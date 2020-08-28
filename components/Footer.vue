<template>
  <footer class="footer">
    <Container flex>
      <ul class="social-icons">
        <li class="icon">
          <a
            href="https://twitter.com/sambitsahoojs"
            target="_blank"
            class="nav-link"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li class="icon">
          <a
            href="https://github.com/soulsam480"
            target="_blank"
            class="nav-link"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li class="icon">
          <a
            href="https://instagram.com/sambitsahoo.js"
            target="_blank"
            class="nav-link"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li class="icon">
          <a
            href="https://facebook.com/sahoo.sambit.7"
            target="_blank"
            class="nav-link"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
      </ul>
      <span style="font-size:15px;"
        >&copy; Sambit Sahoo {{ new Date().getFullYear() }}
      </span>
    </Container>
  </footer>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container
  }
};
</script>

<style lang="scss">
.footer {
  padding: 2rem 0;

  @media (max-width: 567px) {
    padding: 1.2rem 0;
  }
  .social-icons {
    padding: 0;
    margin: 0;
    list-style-type: none;
    line-height: 1;

    li {
      display: inline;

      a {
        display: inline-block;
        padding: 11px 10px 10px 10px;
        box-shadow: none;
      }
    }
  }
}
</style>
