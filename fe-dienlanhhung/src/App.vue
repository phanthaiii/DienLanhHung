<template>
  <div id="app">
    <HomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import { loadScript } from "vue-plugin-load-script";

export default {
  name: 'App',
  components: {
    HomePage
  },
  async mounted() {
    try {
      await loadScript("/js/jquery-3.1.1.min.js");
      await loadScript("/js/jquery-migrate-1.4.1.min.js");
      await loadScript("/js/modernizr-2.6.2.min.js");
      await loadScript("/js/bootstrap/bootstrap.min.js");
      await loadScript("/js/js.cookie.min.js");
      await loadScript("/js/owl-carousel/owl.carousel.min.js");
      await loadScript("/js/sw_woocommerce/jquery.countdown.min.js");
      await loadScript("/js/colorbox/jquery.colorbox-min.js");
      await loadScript("/js/sw_woocommerce/category-ajax.min.js");
      await loadScript("/js/sw_woocommerce/slick.min.js");
      await loadScript("/js/sw_core/jquery.fancybox.pack.js");
      await loadScript("/js/main.min.js");
      await loadScript("/js/megamenu.min.js");
      await loadScript("/js/pathLoader.min.js");
      console.log("All scripts loaded");
    } catch (e) {
      console.log("One or more scripts failed to load", e);
    }
  }
}
</script>

<style lang="css">
@import '/src/css/theme/bootstrap.min.css';
@import '/src/css/theme/font-awesome.min.css';
@import '/src/css/owl-carousel/owl.carousel.min.css';
@import '/src/css/sw_woocommerce/slider.css';
@import '/src/css/colorbox/colorbox.css';
@import '/src/css/sw_core/jquery.fancybox.css';
@import '/src/css/js_composer/js_composer.min.css';
@import '/src/css/theme/app-responsive.min.css';
@import '/src/css/theme/flexslider.min.css';
@import '/src/css/theme/custom-blue.min.css';
@import '/src/css/theme/home-style-1.min.css';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
