<template>
  <article class="article-card" :class="[size, type]">
    <nuxt-link :to="`/blog/${articleInfo.link}`">
      <div class="card-inner">
        <p class="type">
          <font-awesome-icon :icon="['fab', icon]" />
          {{ capitalize(articleInfo.attributes.type) }}
        </p>
        <h4>{{ articleInfo.attributes.title }}</h4>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    articleInfo: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      size: "two-thirds",
      language: this.articleInfo.attributes.language,
      type: this.articleInfo.attributes.type,
      icon: ""
    };
  },
  mounted() {
    const articleNo = this.index + 1;

    this.size = "one-third";

    // If is first or multiple of 10
    if (articleNo === 1) this.size = "two-thirds";
    if (articleNo % 10 === 0) this.size = "two-thirds";

    // Switch for font awesome icon
    switch (this.language) {
      case "vuejs":
        this.icon = "vuejs";
        break;
      case "react":
        this.icon = "react";
        break;
      case "js":
        this.icon = "js";
        break;
      case "wordpress":
        this.icon = "wordpress";
        break;
      case "yarn":
        this.icon = "yarn";
        break;
      case "python":
        this.icon = "python";
        break;
      case "lifestyle":
        this.icon = "envira";
        break;
      default:
        this.icon = "nodeJs";
    }
  },
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }
};
</script>

<style lang="scss">
.article-card {
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  min-height: 240px;
  position: relative;
  overflow: hidden;

  a {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    color: #000;
    box-shadow: none;
    background: rgba(0, 0, 0, 0);
    transition: 0.2s ease all;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  // Sizes
  &.two-thirds {
    width: calc(66% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }
  &.one-third {
    width: calc(33% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }

  // Types
  &.vuejs {
    background-color: #36c9a2;
  }
  &.react {
    background-color: #01baef;
  }
  &.js {
    background-color: #fff275;
  }
  &.python {
    background-color: #2e6b9a;
    a {
      color: white;
    }
  }
  &.lifestyle {
    background-color: #57cfc3;
    a {
      color: black;
    }
  }
  &.ts {
    background-color: #50affc;
    a {
      color: black;
    }
  }
  .card-inner {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    padding: 0 1rem;

    .type {
      background: rgba(0, 0, 0, 0.1);
      padding: 0.4rem;
      border-radius: 0.2rem;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      display: inline-block;
      line-height: 0.8rem;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
