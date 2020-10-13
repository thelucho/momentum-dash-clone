<template>
  <div class="main-content">
    <div class="clock">{{ display }}</div>
    <div class="greeting">Good evening, Luciano.</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Main",
  data() {
    return {
      time: Date.now(),
    };
  },
  computed: {
    display() {
      return moment(this.time).format("HH:mm");
    },
  },
  created() {
    setInterval(() => {
      this.time = Date.now();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  height: 86vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .clock {
    font-size: 150px;
    font-weight: 700;
  }

  .greeting {
    font-size: 55px;
    font-weight: 400;
  }
}
</style>