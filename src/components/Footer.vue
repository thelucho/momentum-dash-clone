<template>
  <div class="footer">
    <div class="credits">
      <i class="ri-camera-lens-fill"></i>
      <a :href="this.$store.state.author.profile_url">{{
        this.$store.state.author.name
      }}</a>
    </div>
    <div class="todo">Todo</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
  box-sizing: border-box;
  z-index: 3;

  .credits {
    display: flex;
    align-items: center;

    i {
      margin-right: 5px;
    }

    a {
      text-decoration: none;
      color: white;

      &:hover {
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>