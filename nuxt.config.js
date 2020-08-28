import blogs from "./content/blogs.json";

export default {
  arget: "static",
  router: {
    base: "/"
  },
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Sambit Sahoo",
    link: [
      {
        rel: "dns-prefetch preconnect",
        href: "cdn.jsdeliver.net"
      }
    ],
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `https://sambitsahoo.com`
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Sambit Sahoo"
      },
      {
        hid: "description",
        name: "description",
        content: "Sambit Sahoo/ Developer, Dreamer, Enthusiast"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Sambit Sahoo/ Developer, Dreamer, Enthusiast"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://sambitsahoo.com/_nuxt/icons/icon_150.ae673c.png"
      },
      {
        hid: "og:article:author",
        property: "og:article:author",
        content: "https://github.com/soulsam480"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Sambit Sahoo"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Sambit Sahoo"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Sambit Sahoo/ Developer, Dreamer,"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /**
   * Plugins
   */
  plugins: ["~/plugins/lazyload"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/google-analytics", { id: "UA-161449705-1" }],
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-fontawesome",
    "nuxt-webfontloader"
  ],

  /**
   * Google fonts
   */
  webfontloader: {
    google: {
      families: ["Rubik:400,700", "Alata"] // Loads Lato font with weights 400 and 700
    }
  },

  /**
   * Font Awesome
   */
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: [
          "faTwitter",
          "faInstagram",
          "faGithub",
          "faVuejs",
          "faReact",
          "faJs",
          "faDocker",
          "faWordpress",
          "faNodeJs",
          "faYarn",
          "faFacebook",
          "faPython",
          "faEnvira"
        ]
      }
    ]
  },

  /**
   * Manifest
   */
  manifest: {
    name: "Sambit Blog",
    short_name: "Sambit Blog",
    description: "Sambit Sahoo portfolio PWA",
    version: "1.0",
    start_url: "/",
    scope: ".",
    background_color: "#4fd6b7",
    theme_color: "#03fcc2",
    display: "standalone",
    orientation: "portrait-primary",
    dir: "ltr",
    lang: "en-US",
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/.../app_name",
        id: "com.example.app"
      }
    ]
  },
  pwa: {
    icon: {
      sizes: [150, 192, 512]
    }
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: "https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },

  /**
   * sitemap
   */
  sitemap: {
    hostname: "https://example.com",
    gzip: true,
    exclude: ["/admin/"]
  },

  /**
   * Robots
   */
  robots: {
    UserAgent: "*",
    Disallow: "/admin"
  },

  /**
   * Generate config
   */
  generate: {
    routes: [].concat(blogs.map(blog => `/blog/${blog.slug}`))
  },

  /**
   * Transition
   */
  transition: {
    name: "fade",
    mode: "out-in"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: {
          vue: true
        }
      });
    }
  }
};
