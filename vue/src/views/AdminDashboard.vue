<template>
  <div class="page-wrapper">
    <Header></Header>
    <Aside></Aside>
    <div class="content container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Aside from "../components/Aside.vue";

export default {
  components: {
    Header,
    Aside,
  },
  mounted() {
    this.$store.commit("checkAuth");
  },
};
</script>

<style lang="scss" scoped></style>
