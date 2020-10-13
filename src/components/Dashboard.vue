<template>
  <div class="main" :style="{ 'background-image': 'url(' + bgImage + ')' }">
    <div class="overlay"></div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      topics: [
        "landscape",
        "city",
        "nature",
        "mountains",
        "sea",
        "ocean",
        "pattern",
        "night",
        "summer",
        "winter",
        "travel",
        "beach",
        "abstract",
        "universe",
        "snow",
        "road",
        "river",
        "sky",
        "blur",
        "stars",
        "streets",
        "sunset",
        "forest",
        "rain",
        "light",
        "abstract",
        "macro",
        "art",
        "design",
      ],
    };
  },
  computed: {
    bgImage() {
      return `"${this.$store.state.photoData}"`;
    },
    randomTopic() {
      return this.topics[Math.floor(Math.random() * this.topics.length)];
    },
  },
  created() {
    this.$store.dispatch("getPhoto", this.randomTopic);
  },
};
</script>


<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: white;
  background-color: #eeeeee;
  background-size: cover;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.22);
  }
}
</style>
