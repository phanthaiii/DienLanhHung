<template>
  <div class="container">
    <div class="row">
      <div
        id="contents"
        role="main"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
      >
        <div class="single post-6 page type-page status-publish hentry">
          <div class="entry">
            <div class="entry-content">
              <div class="entry-content">
                <div class="vc_row wpb_row vc_row-fluid main-slider-custom">
                  <div
                    class="wpb_column vc_column_container vc_col-sm-3 vc_col-lg-3 vc_col-md-4 vc_hidden-sm vc_col-xs-1 vc_hidden-xs"
                  >
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper"></div>
                    </div>
                  </div>

                  <div
                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-9 vc_col-md-8 vc_col-xs-12"
                  >
                    <div class="products-nav">
                      <ul class="view-mode-wrap">
                        <li class="view-grid sel">
                          <a></a>
                        </li>

                        <li class="view-list">
                          <a></a>
                        </li>
                      </ul>

                      <div class="catalog-ordering clearfix">
                        <div class="orderby-order-container">
                          <ul class="orderby order-dropdown">
                            <li>
                              <span class="current-li">
                                <span class="current-li-content">
                                  <a>Sort by Popularity</a>
                                </span>
                              </span>

                              <ul style="display: none">
                                <li>
                                  <a href="#">Sort by Default</a>
                                </li>

                                <li class="current">
                                  <a href="#">Sort by Popularity</a>
                                </li>

                                <li>
                                  <a href="#">Sort by Rating</a>
                                </li>

                                <li>
                                  <a href="#">Sort by Date</a>
                                </li>

                                <li>
                                  <a href="#">Sort by Price</a>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <ul class="order">
                            <li class="asc">
                              <a href="#"><i class="icon-arrow-down"></i></a>
                            </li>
                          </ul>

                          <ul class="sort-count order-dropdown">
                            <li>
                              <span class="current-li"><a>8</a></span>
                              <ul style="display: none">
                                <li class="current">
                                  <a href="#">8</a>
                                </li>

                                <li>
                                  <a href="#">16</a>
                                </li>

                                <li>
                                  <a href="#">24</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <nav class="woocommerce-pagination">
                        <ul class="page-numbers">
                          <li>
                            <span class="page-numbers current">1</span>
                          </li>

                          <li>
                            <a class="page-numbers" href="#">2</a>
                          </li>

                          <li>
                            <span class="page-numbers dots">...</span>
                          </li>

                          <li>
                            <a class="page-numbers" href="#">28</a>
                          </li>

                          <li>
                            <a class="next page-numbers" href="#">?</a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div class="clear"></div>

                    <ul class="products-loop grid clearfix">
                      <li class="clearfix divider-product"></li>

                      <li
                        class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                        v-for="product in products.items"
                        :key="product.id"
                      >
                        <div class="products-entry clearfix">
                          <div class="products-thumb">
                            <!-- <a class="woocommerce-LoopProduct-link">
                          <span class="onsale" v-if="product.onSale"
                            >Sale!</span
                          >
                        </a> -->

                            <a>
                              <div class="product-thumb-hover">
                                <img
                                  style="max-width: 300px; max-height: 300px"
                                  width="300"
                                  height="300"
                                  class="attachment-shop_catalog size-shop_catalog wp-post-image"
                                  :alt="product.name"
                                  :src="product.image"
                                />
                              </div>
                            </a>

                            <a
                              class="sm_quickview_handler-list"
                              title="Quick View Product"
                              >Quick View</a
                            >
                          </div>

                          <div class="products-content">
                            <div class="item-content">
                              <h4>
                                <a
                                  href="home_style_1_shop_product_default.html"
                                  :title="product.description"
                                >
                                  {{ product.description }}
                                </a>
                              </h4>

                              <div class="item-price">
                                <span>
                                  <del>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                        >$</span
                                      >{{ product.oldPrice }}
                                    </span>
                                  </del>

                                  <ins>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                        >$</span
                                      >{{ product.price }}
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div class="products-nav">
                      <ul class="view-mode-wrap">
                        <li class="view-grid sel">
                          <a></a>
                        </li>

                        <li class="view-list">
                          <a></a>
                        </li>
                      </ul>

                      <div class="catalog-ordering clearfix">
                        <div class="orderby-order-container">
                          <ul class="orderby order-dropdown">
                            <li>
                              <span class="current-li">
                                <span class="current-li-content">
                                  <a>Sort by Popularity</a>
                                </span>
                              </span>

                              <ul style="display: none">
                                <li>
                                  <a href="#">Sort by Default</a>
                                </li>

                                <li class="current">
                                  <a href="#">Sort by Popularity</a>
                                </li>

                                <li>
                                  <a href="#">Sort by Rating</a>
                                </li>

                                <li>
                                  <a href="#">Sort by Date</a>
                                </li>

                                <li>
                                  <a href="#">Sort by Price</a>
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <ul class="order">
                            <li class="asc">
                              <a href="#">
                                <i class="icon-arrow-down"></i>
                              </a>
                            </li>
                          </ul>

                          <ul class="sort-count order-dropdown">
                            <li>
                              <span class="current-li">
                                <a>8</a>
                              </span>

                              <ul style="display: none">
                                <li class="current">
                                  <a href="#">8</a>
                                </li>

                                <li>
                                  <a href="#">16</a>
                                </li>

                                <li>
                                  <a href="#">24</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <nav class="woocommerce-pagination">
                        <ul class="page-numbers">
                          <li>
                            <span class="page-numbers current">1</span>
                          </li>

                          <li>
                            <a class="page-numbers" href="#">2</a>
                          </li>

                          <li>
                            <span class="page-numbers dots">...</span>
                          </li>

                          <li>
                            <a class="page-numbers" href="#">28</a>
                          </li>

                          <li>
                            <a class="next page-numbers" href="#">?</a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div class="clear"></div>
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
  name: "ListProduct",
  props: {
    products: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  mounted() {
    console.log(this.products);
  },
};
</script>

<style scoped>
/* Your component's CSS code goes here */
</style>
