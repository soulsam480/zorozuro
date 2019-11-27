<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-inner">
      <div class="brand">
        <nuxt-link to="/" class="nav-link">Sambit Sahoo</nuxt-link>
      </div>
      <ul class="social-icons">
        <li class="icon">
          <a href="https://twitter.com/sambitsahoojs" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
         <li class="icon">
          <a href="https://github.com/soulsam480" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
         <li class="icon">
          <a href="https://instagram.com/sambitsahoo.js" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
         <li class="icon">
          <a href="https://facebook.com/sahoo.sambit.7" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  font-family: 'Rubik', sans-serif;

  .navbar-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;

    .brand {
      display: block;
      font-weight: 700;
      text-align: left;

      img {
        height: 24px;
        display: block;
      }

      a {
        padding: 1rem;
        display: block;
        box-shadow: none;
      }
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
          padding:11px 10px 10px 10px;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
