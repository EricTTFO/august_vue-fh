<template>
  <div class>
    <MenuNav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import MenuNav from "./menuNav";
import Footer from "./footer";

export default {
  components: {
    MenuNav,
    Footer
  }
};
</script>
<style>
@import url("../styles/stylesheets/comm.css");
</style>
