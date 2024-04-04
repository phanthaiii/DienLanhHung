<template>
  <div class="body-wrapper theme-clearfix" id="body_wrapper">
    <Loading></Loading>
    <div id="yt_header" class="yt-header wrap">
      <div class="header-style1">
        <HeaderTop />
        <!-- HEADER MENU -->
        <HeaderMenu> </HeaderMenu>
        <!-- HEADER CATEGORIES SEARCH -->
        <LeftMenu></LeftMenu>
        <!-- END HEADER CATEGORIES SEARCH -->
      </div>
    </div>
    <div id="main" class="theme-clearfix" role="document">
      <div class="breadcrumbs theme-clearfix">
        <div class="container">
          <ul class="breadcrumb">
            <li class="active">
              <span>Home</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- ListProduct -->
      <ListProduct></ListProduct>
      <!-- End ListProduct -->
    </div>
  </div>
</template>

<script>
import HeaderTop from "./Header/HeaderTop.vue";
import HeaderMenu from "./Header/HeaderMenu.vue";
import Loading from "./Global/Loading.vue";
import LeftMenu from "./LeftMenu/LeftMenu.vue";
import ListProduct from "./ListProduct.vue";
export default {
  name: "HomePage",
  components: {
    HeaderTop,
    HeaderMenu,
    Loading,
    LeftMenu,
    ListProduct,
  },
  props: {
    msg: String,
  },

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/scss/theme.scss";
</style>
