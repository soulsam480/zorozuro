<template>
  <section>
    <br />
    <Container narrow class="resume">
      <div class="res-head">
        <h2>Sambit Sahoo</h2>
        <small class="muted">Full Stack Developer</small> <br />
        <small class="muted"
          ><a href="mailto:sambitsahoojs@gmail.com"
            >sambitsahoojs@gmail.com</a
          ></small
        ><br />
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
          <a href="https://sambitsahoo.com" target="_blank" class="nav-link">
            <font-awesome-icon :icon="['fas', 'external-link-square-alt']" />
          </a>
        </p>
      </div>
      <br />
      <div class="res-container">
        <p class="res-head-2 "><span>About</span></p>
        <div class="res-data">
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
            I'm also the Co-Founder/CTO of a start-up
            <a href="https://tiaamo.com">Tiaamo.com</a>. We are a clothing
            business which primarily operates in the wholesale domain. When I'm
            not coding I mostly take photos or write articles. I'm an otaku at
            heart and <em>One Piece </em> is my favourite anime.
          </p>
        </div>
      </div>
      <div class="res-container">
        <p class="res-head-2 "><span>Work Experience</span></p>

        <div class="res-data row">
          <div class="col-6">
            <p>
              <span>Tiaamo.com</span>
              <small class="muted"><em>Co-Founder</em></small> <br />
              <small class="muted">MARCH 2018 - PRESENT</small>
              <a
                href="https://noter.sambitsahoo.com"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon
                  :icon="['fas', 'external-link-square-alt']"
                />
              </a>
            </p>

            <small>
              Clothing Startup primarily operating in the wholesale domain.
              Served over 50+ regular clients from various institutes and
              Industries.
            </small>
          </div>
          <div class="col-6">
            <p>
              <span>Public Incubator Inc.</span>
              <span class="muted"><em>Frontend Intern</em></span>
              <br />
              <small class="muted">MARCH 2020 - APRIL 2020</small>
              <a
                href="https://www.publicincubator.com/"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon
                  :icon="['fas', 'external-link-square-alt']"
                />
              </a>
            </p>

            <small>
              Primarily worked on the Landing Page of the company.
            </small>
          </div>
        </div>
      </div>
      <div class="res-container">
        <p class="res-head-2 "><span>Stack</span></p>
        <div class="res-data">
          <p>
            <b>Frontend : </b> Typescript, Javascript, Vuejs, Reactjs, Electron
          </p>
          <p><b>Backend : </b> Nodejs, PostgreSQL, Sqlite3, Serverless</p>
          <p><b>DevOps : </b> Firebase</p>
          <p><b>Languages : </b> Typescript, Javascript, Python</p>
          <p><b>Graphics : </b> Adobe Photoshop, Adobe Illustrator</p>
        </div>
      </div>
      <div class="res-container">
        <p class="res-head-2 "><span>Projects</span></p>
        <div class="res-data row">
          <div class="col-6">
            <p>
              <span>BillBird</span>
            </p>

            <small>
              On demand billing service built with Vuejs on frontend Django on
              backend. Complete Business management with Billing, Customer
              Ledger, Inventory.
            </small>
          </div>
          <div class="col-6">
            <p>
              <span>Noter</span>
              <a
                href="https://github.com/soulsam480/noter"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://noter.sambitsahoo.com"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon
                  :icon="['fas', 'external-link-square-alt']"
                />
              </a>
            </p>

            <small>
              Noter is an open source note taking and sharing platform built
              with Vuejs and Firebase. It has various types of text formatting
              features with realtime note update across multiple devices.
            </small>
          </div>
        </div>
        <div class="res-data row">
          <div class="col-6">
            <p>
              <span>Elec-SQLite-Vue</span>
              <a
                href="https://github.com/soulsam480/elec-sqlite-vue"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </p>

            <small>
              Proof Of Concept for Electron app with Vue 3 frontend and
              persisted database with SQlite.
            </small>
          </div>
          <div class="col-6">
            <p>
              <span>Shoyo</span>
              <a
                href="https://github.com/soulsam480/shoyo"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://shoyo.sambitsahoo.com"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon
                  :icon="['fas', 'external-link-square-alt']"
                />
              </a>
            </p>

            <small
              >A light and minimal CSS library. shoyo adds a very basic styling
              for the developer to customize. It's a developer friendly library
              in a sense where customisation is done primarily.
            </small>
          </div>
        </div>
        <div class="res-data row">
          <div class="col-6">
            <p>
              <span>Ecom CMS</span>
              <a
                href="https://github.com/soulsam480/ecom-cms"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://admin.sambitsahoo.com"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon :icon="['fas', 'external-link-square-alt']"
              /></a>
            </p>

            <small>
              Open source content management system developed in vuejs for usage
              with firebase powered Ecommerce Web Apps.
            </small>
          </div>
          <div class="col-6">
            <p>
              <span>Node Music</span>
              <a
                href="https://github.com/soulsam480/node-music"
                target="_blank"
                class="nav-link"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </p>

            <small
              >Node music is an Implementation of the FFmpeg framework to stream
              youtube videos as mp3.
            </small>
          </div>
        </div>
        <nuxt-link to="/projects">more projects..</nuxt-link>
      </div>
      <div class="res-container">
        <p class="res-head-2 "><span>Education</span></p>
        <div class="res-data">
          <p>
            Indira Gandhi Institute of Technology, Sarang -
            <small class="muted"><em>B.Tech Mechanical Engineering</em></small>
            <br />
            <small class="muted">2017 - Present</small> <br />
            <small>Expected Graduation June 2021, CGPA - 7.8/10 </small>
          </p>
          <p>
            Naidu +2 Science College, Bhubaneswar -
            <small class="muted"><em>XII (Senior Secondary)</em></small> <br />
            <small class="muted">2015 - 2017</small> <br />
            <small
              >Council of Higher Secondary Education Odisha, Percentage-
              73.4%</small
            >
          </p>
        </div>
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

<style lang="scss">
.resume {
  p {
    font-size: 1em;
  }
  .muted {
    color: mix(black, white, 50%);
    a {
      color: mix(black, white, 50%);
      box-shadow: none;
      transition: none;
      border-bottom: 1px mix(black, white, 50%) dashed;
    }
  }
  .res-head {
    p {
      margin: 4px 0;
      a {
        padding: 0 3px;
      }
    }
  }
  .res-head-2 {
    span {
      color: white;
      padding: 0px 10px 0 5px;
      background-color: mix(black, white, 70%);
    }
  }
  .res-container {
    padding: 10px 0;
  }
  .res-data {
    padding-left: 20px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-6 {
    padding: 0 15px 15px 15px;
    flex-basis: 50%;
    max-width: 50%;
    p {
      margin-bottom: 3px;
      span {
        border-bottom: 1px black dashed;
      }
      a {
        padding: 0 4px;
      }
    }

    @media (max-width: 768px) {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
}
</style>
