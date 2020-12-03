<template>
  <section>
    <Container narrow>
      <div class="row">
        <div class="c-row">
          <div class="left">
            <img
              class="intro-img"
              src="https://avatars3.githubusercontent.com/u/35460828?s=460&u=9b8c310509432fcd4a45ead03c72354f35888aaa&v=4"
              alt=""
            />
          </div>
          <div class="right">
            <div>
              <p>Sambit Sahoo</p>
              <small class="muted"
                ><a href="mailto:sambitsahoojs@gmail.com"
                  >sambitsahoojs@gmail.com</a
                ></small
              >
              <p>
                <a
                  href="https://github.com/soulsam480"
                  target="_blank"
                  class="nav-link"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sambit-sahoo-6a3859190/"
                  target="_blank"
                  class="nav-link"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
                <a
                  href="https://twitter.com/sambitsahoojs"
                  target="_blank"
                  class="nav-link"
                >
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
                <a
                  href="https://instagram.com/sambitsahoojs"
                  target="_blank"
                  class="nav-link"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <a
                  href="https://sambitsahoo.com"
                  target="_blank"
                  class="nav-link"
                >
                  <font-awesome-icon
                    :icon="['fas', 'external-link-square-alt']"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="intro">
        <p>
          Hello, I'm Sambit Sahoo, an undergraduate student and freelance
          frontend developer. I'm passionate about coding as I love
          materailizing an Idea to a smooth user interface.
        </p>
        <p>
          Most of my work is open-source and I belive in the idea of community
          built software. I feel that participating in open-source gives us an
          opprtunity to gain more knowledge.
        </p>
        <p>
          I'm also the Co-Founder/CTO of
          <a href="https://tiaamo.com">Tiaamo.com</a>. We are a clothing
          business which primarily operates in the wholesale domain. When I'm
          not coding I mostly take photos or write articles. I'm an otaku at
          heart and <em>One Piece </em> is my favourite anime.
        </p>
      </div>
    </Container>
  </section>
</template>
<script>
import Container from "~/components/Container";
export default {
  components: {
    Container
  }
};
</script>
<style lang="scss" scoped>
.intro {
  font-weight: lighter;
  text-align: left;
  margin-bottom: 2.4rem;
  h4 {
    margin-top: 10px;
  }
}

.intro-img {
  border-radius: 10000px;
  width: 100%;
  max-width: 100%;
  @media (min-width: 600px) {
    width: 100px;
  }
}
.row {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  .c-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
      padding: 0 10px;
    }
    .right {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
      padding: 0 10px;
    }
    .right {
      display: flex;
      align-items: center;
      div {
        p {
          &:first-child {
            margin: 0 !important;
          }
        }
      }
    }
  }
}
</style>
