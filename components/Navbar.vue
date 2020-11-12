<template>
  <nav id="navbar" class="navbar" role="navigation">
    <div class="navbar-inner">
      <div class="brand">
        <nuxt-link to="/" class="nav-link">
          ZoroZuro
        </nuxt-link>
      </div>
      <div class="sec-nav">
        <nuxt-link to="/about" class="nav-link">
          /About
        </nuxt-link>
        <nuxt-link to="/" class="nav-link">
          /Blog
        </nuxt-link>
        <!-- <nuxt-link to="/projects" class="nav-link">
          /Projects
        </nuxt-link> -->
        <nuxt-link to="/resume" class="nav-link">
          /Résumé
        </nuxt-link>
      </div>
      <br />
      <div class="darkone">
        <label class="switch">
          <input type="checkbox" @click="darkMode" />
          <span class="slider round" />
        </label>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    darkMode() {
      const home = document.querySelector("html");
      home.classList.toggle("darkmode");
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100% !important;
  position: fixed;
  top: 0;
  z-index: 1000;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  .navbar-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    background-color: rgb(241, 241, 241);
    @media (max-width: 600px) {
      padding-top: 10px;
      padding-bottom: 10px;
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
        &:first-child {
          padding: 10px;
        }
        padding: 10px 5px;
        box-shadow: none;
        cursor: pointer;
      }
    }
    /* The CSS code for the toggle switch*/
    .darkone {
      padding-right: 10px;
    }
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
      top: 3px;
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
    input:checked + .slider.round:before {
      background-color: rgb(37, 37, 37);
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
}
</style>
