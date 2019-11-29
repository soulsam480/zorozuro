<template>
  <nav class="navbar" role="navigation" id="navbar">
    <div class="navbar-inner">
      <div class="brand">
        <nuxt-link to="/" class="nav-link">Sambit Sahoo</nuxt-link>
      </div>
      <div class="sec-nav">
        <nuxt-link to="/about" class="nav-link">/About</nuxt-link>
        <nuxt-link to="/" class="nav-link">/Blog</nuxt-link>
      </div>
      <ul class="social-icons">
        <li class="icon">
          <a href="https://twitter.com/sambitsahoojs" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'twitter']"/>
          </a>
        </li>
        <li class="icon">
          <a href="https://github.com/soulsam480" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </li>
        <li class="icon">
          <a href="https://instagram.com/sambitsahoo.js" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </a>
        </li>
        <li class="icon">
          <a href="https://facebook.com/sahoo.sambit.7" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fab', 'facebook']"/>
          </a>
        </li>
      </ul>
      <br>
      <div class="darkone">
        <label class="switch">
          <input type="checkbox" @click='darkMode'>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    darkMode() {
      const home = document.getElementById('__nuxt')
      home.classList.toggle('darkmode')
    }
  }
}
</script>

<style lang="scss" scoped>
html{

  .navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  font-family: "Rubik", sans-serif;

  .navbar-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    background-color: white;
    .darkone{
      @media only screen and(max-width: 600px){
        display:none;
      }
    }
    .brand {
      display: block;
      font-weight: 700;
      text-align: left;
      @media only screen and(max-width:600px) {
        display: none;
    }
      img {
        height: 24px;
        display: block;
      }

      a {
        padding: 1rem;
        display: block;
        box-shadow: none;
        cursor: pointer;
      }
    }
    .sec-nav {
      font-weight: 500;
      text-align: left;
      a {
        padding: 10px;
        box-shadow: none;
        cursor: pointer;
      }
      }
      /* The CSS code for the toggle switch*/
    .switch {
        position: relative;
        width: 45px;
        display: inline-block;
        height: 21px;
    }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #333333;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        top:3px;
        bottom: 3px;
        left: 2px;
        right: 2px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #ccc;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px white;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 100px;
      }

      .slider.round:before {
        border-radius: 50%;
        content: "";
        color: black;
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
          padding: 11px 10px 10px 10px;
          box-shadow: none;
        }
      }
    }
  }
  }

</style>
