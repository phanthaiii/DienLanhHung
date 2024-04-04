<template>
  <div class="yt-header-under-2">
    <div class="container">
      <div class="row yt-header-under-wrap">
        <div class="yt-main-menu col-md-12">
          <div class="header-under-2-wrapper">
            <div class="yt-searchbox-vermenu">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-3 col-xs-3 vertical-mega">
                  <!-- CATEGORIES -->
                  <div class="ver-megamenu-header">
                    <div class="mega-left-title">
                      <strong>Danh mục</strong>
                    </div>

                    <div class="resmenu-container">
                      <button
                        class="navbar-toggle"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ResMenuleftmenu"
                      >
                        <span class="sr-only">Danh mục</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>

                      <div
                        id="ResMenuleftmenu"
                        class="collapse menu-responsive-wrapper"
                      >
                        <ul id="menu-left-menu" class="flytheme_resmenu">
                          <li
                            class="menu-car-accessories"
                            v-for="(menuItem, index) in categoriesMenu"
                            :key="index"
                          >
                            <a class="item-link" href="#">
                              {{ menuItem.name }}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>

                    <ul
                      id="menu-left-menu-1"
                      class="vertical-megamenu flytheme-menures"
                    >
                      <li
                        class="dropdown menu-smartphones-tablets ya-menu-custom level1"
                        v-for="(menuItem, index) in categoriesMenu"
                        :key="index"
                      >
                        <a href="#" class="item-link dropdown-toggle">
                          <span class="have-title">
                            <span class="menu-title">{{ menuItem.name }}</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  class="search-pro col-lg-9 col-md-8 col-sm-9 col-xs-9 no-padding-l"
                >
                  <a
                    class="phone-icon-search fa fa-search"
                    href="#"
                    title="Search"
                  ></a>

                  <div id="sm_serachbox_pro" class="sm-serachbox-pro">
                    <div class="sm-searbox-content">
                      <form method="get" id="searchform_special" action="#">
                        <div class="form-search">
                          <div class="cat-wrapper">
                            <div class="selector" id="uniform-cat">
                              <label class="label-search">
                                <select
                                  name="search_category"
                                  class="s1_option"
                                >
                                  <option>All Categories</option>
                                  <option>Smartphones & Tablets</option>
                                  <option>Smartphones Accessories</option>
                                  <option>Computers & Networking</option>
                                  <option>Car Accessories</option>
                                  <option>Consumer Electronics</option>
                                  <option>Jewelry & Watches</option>
                                  <option>Electronic</option>
                                  <option>Mobiles</option>
                                  <option>Computer</option>
                                  <option>Sports</option>
                                  <option>MenSell</option>
                                  <option>Vesture</option>
                                  <option>Women</option>
                                  <option>Fashion</option>
                                  <option>Watches</option>
                                  <option>Purses</option>
                                  <option>Sports & Outdoors</option>
                                  <option>Lights & Lighting</option>
                                  <option>Home & Office</option>
                                  <option>Apparel & Accessories</option>
                                  <option>Intimate Apparel</option>
                                  <option>Health & Beauty</option>
                                  <option>Toys & Hobbies</option>
                                  <option>Cameras & Camcorders</option>
                                  <option>Mobile</option>
                                  <option>Accessories</option>
                                  <option>Mobile Brands</option>
                                  <option>Electronics</option>
                                  <option>Computer & Accessories</option>
                                  <option>Brand</option>
                                  <option>Golf</option>
                                  <option>Football</option>
                                  <option>Tennis</option>
                                  <option>Skiboarding</option>
                                  <option>Aliquam</option>
                                  <option>Apparel</option>
                                  <option>Helmets</option>
                                  <option>Mauris</option>
                                  <option>Nullam viverra</option>
                                  <option>Pellentesque</option>
                                  <option>Apparel</option>
                                  <option>Backboard</option>
                                  <option>Basketballs</option>
                                  <option>Footwear</option>
                                  <option>Jiteme catem</option>
                                  <option>Footballs</option>
                                  <option>Mouth Guards</option>
                                  <option>Pads Protection</option>
                                  <option>Consectetur</option>
                                  <option>Bags</option>
                                  <option>Balls</option>
                                  <option>Drivers</option>
                                  <option>Jiteme</option>
                                  <option>Jiteme catem</option>
                                  <option>Accessories</option>
                                  <option>Luxury ferume</option>
                                  <option>Skin care</option>
                                  <option>Hair care</option>
                                  <option>jewelry</option>
                                  <option>rings</option>
                                  <option>jewelry accessories</option>
                                  <option>Men</option>
                                  <option>watch collection</option>
                                  <option>T-shirt design</option>
                                  <option>Bag collection</option>
                                  <option>women dresses</option>
                                  <option>Jeans collection</option>
                                  <option>watch</option>
                                  <option>shoes</option>
                                  <option>Kid clothes</option>
                                  <option>jeans</option>
                                  <option>shorts</option>
                                  <option>under wear</option>
                                  <option>sport wear</option>
                                  <option>toys & games</option>
                                  <option>health & baby care</option>
                                  <option>Women Style</option>
                                  <option>Men Style</option>
                                  <option>Kid style</option>
                                  <option>Living room</option>
                                  <option>Sofa</option>
                                  <option>Appliances</option>
                                  <option>Office</option>
                                  <option>Kitchens</option>
                                  <option>Bedroom</option>
                                  <option>Sports Shoes</option>
                                </select>
                              </label>
                            </div>
                          </div>

                          <div class="input-search">
                            <input
                              type="text"
                              value=""
                              placeholder="Search for products"
                            />
                          </div>

                          <button
                            type="submit"
                            title="Search"
                            class="fa fa-search button-search-pro form-button"
                          ></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  props: {
    categoriesMenu: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      menuItems: [
        {
          name: "Smartphones Accessories",
          code: "smartphones-accessories",
          id: 1,
        },
        {
          name: "Computers & Networking",
          code: "computers-networking",
          id: 2,
        },
        {
          name: "Smartphones & Tablets",
          code: "smartphones-tablets",
          id: 3,
        },
      ],
    };
  },

  methods: {
    // Your methods go here
  },
  computed: {
    // Your computed properties go here
  },
  components: {
    // Your child components go here
  },
};
</script>

<style>
/* Your CSS goes here */
</style>
