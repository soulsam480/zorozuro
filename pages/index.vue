<template>
  <section>
    <div class="head">
      <div class="intro-head"></div>
      <div class="intro-text">
        <h3>/* The Pirate Blog */</h3>
      </div>
    </div>

    <Container flex angled class="post-index">
      <ArticleCard
        v-for="(blog, index) in blogList"
        :key="index"
        :index="index"
        :article-info="blog"
      />
    </Container>
  </section>
</template>

<script>
import ArticleCard from "~/components/ArticleCard";
import Container from "~/components/Container";

import blogs from "~/content/blogs.json";

export default {
  components: {
    ArticleCard,
    Container
  },

  // eslint-disable-next-line no-unused-vars
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const wholeMD = await import(`~/content/blog/${blog.slug}.md`);
      return {
        attributes: wholeMD.attributes,
        link: blog.slug
      };
    }

    const blogList = await Promise.all(
      blogs.map(blog => awaitImport(blog))
      // eslint-disable-next-line
    ).then(res => {
      return {
        blogList: res
      };
    });

    return blogList;
  }
};
</script>

<style lang="scss" scoped>
.post-index {
  position: relative;
  z-index: 10;
}
.head {
  position: relative;
  padding: 5rem 0;
  .intro-text {
    position: relative;
    z-index: 2;
    display: block;
    text-align: center;
    color: white;
    h2 {
      margin-top: 0px;
    }
  }
  .intro-head {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 7rem 0;
    background: no-repeat fixed center 100% / cover;
    z-index: 1;
    background-image: url(~static/head.webp);
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      border: 2px solid;
      border-image: linear-gradient(
          90deg,
          rgba(4, 255, 255, 1) 0%,
          rgba(253, 217, 255, 1) 75%,
          rgba(194, 199, 244, 1) 26%,
          rgba(125, 249, 224, 1) 50%,
          rgba(199, 92, 225, 1) 100%
        )
        1 fill;
    }
  }
}
</style>
