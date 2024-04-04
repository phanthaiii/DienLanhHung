<template>
  <div class="yt-header-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sl-header-text">
          <div class="offer-wrapper">
            <div class="offer-header">
              <ul id="offer-info">
                <li>
                  <i class="sp-ic fa fa-phone-square">&nbsp;</i>Telephone:
                  <a title="0123 456 7891" href="#">{{Information.phone}}</a>
                </li>

                <li>
                  <i class="sp-ic fa fa-envelope">&nbsp;</i>E-mail:
                  <a :title="Information.email" :href="Information.email"
                    >{{Information.email}}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  props: {
    Information: {
      type: Object,
      default: () => {
        return {
          phone: "0123 456 7891",
          email: "Contact@domain.com",
        };
      },
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
