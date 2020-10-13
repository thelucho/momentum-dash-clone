<template>
  <div class="header">
    <div class="links">Links</div>
    <div class="weather">Weather</div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
  box-sizing: border-box;
  z-index: 3;
}
</style>