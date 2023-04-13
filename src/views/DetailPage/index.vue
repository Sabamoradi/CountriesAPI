<template>
  <div>
    <top-menu />
    <div class="second-container mt-5">
      <div class="container">
        <div class="btn-back">
          <i>icon</i>
          <p>Back</p>
        </div>
        <template v-if="showLoading"> hello </template>
        <template v-else>
          <div class="data-container mt-5">
            <div class="data-left">
              <baseImage :imgUrl="countryData.flags.png" />
              <!-- flags -->
            </div>
            <div class="data-right">
              <div class="data-right_title size-20 font-bold">
                {{ countryData.name.official }}
              </div>
              <div class="data-right_wrapper">
                <div class="data-right_items">
                  <div class="data_item">
                    <p class="size-14 font-bold">Population:</p>
                    <span class="size-14">{{ countryData.population }}</span>
                  </div>
                  <div class="data_item">
                    <p class="size-14 font-bold">Region:</p>
                    <span class="size-14">{{ countryData.region }}</span>
                  </div>
                  <div class="data_item">
                    <p class="size-14 font-bold">Sub Region:</p>
                    <span class="size-14">{{ countryData.subregion }}</span>
                  </div>
                  <div class="data_item">
                    <p class="size-14 font-bold">Capital:</p>
                    <span class="size-14">{{ countryData.capital[0] }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import TopMenu from "@/components/TopMenu";

import baseImage from "@/components/global/Image";

export default {
  components: {
    TopMenu,
    baseImage,
  },
  data() {
    return {
      showLoading: false,
      countryData: {},
    };
  },
  created() {
    this.getCountriesData();
  },
  methods: {
    async getCountriesData() {
        console.log(this.$route.params.ccn);
      this.showLoading = true;
      try {
        const response = await this.$httpCall.get(`/alpha/${this.$route.params.ccn}`);
        if (response && response.status === 200) {
          this.showLoading = false;
          this.countryData = response.data[0];
        }
      } catch (error) {}
    },
  },
};
</script>
<style scoped>
.btn-back {
  display: flex;
  width: 10%;
  justify-content: space-around;
  box-shadow: 1px 3px 7px 3px var(--box-shadow);
  height: 40px;
  border-radius: 4px;
  align-items: center;
}
.data-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.data-left {
  width: 45%;
}
.data-left img {
  height: 400px;
}
.data-right {
  width: 45%;
  margin-top: 40px;
}
.data-right_items {
  margin-top: 40px;
}
.data_item {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.data-right_wrapper{
    display: flex;
    justify-content: space-between;
}
</style>