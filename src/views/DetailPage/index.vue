<template>
  <div>
    <top-menu />
    <div class="second-container mt-5">
      <div class="container">
        <div class="btn-back" @click="goBack">
          <i class="fa-solid fa-arrow-left"></i>
          <p>Back</p>
        </div>
        <template v-if="showLoading">
          <loading-svg />
        </template>
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
                <div class="data-right_items"></div>
              </div>
              <div class="border_wrapper">
                <p class="size-14 font-bold">Border Countries:</p>
                <div class="data-item_wrapper">
                  <div
                    class="data_item_border size-14"
                    v-for="(index, item) in countryData.borders"
                    :key="`${item}-border`"
                    @click="changeDetail(index)"
                  >
                    {{ index }}
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

import LoadingSvg from "@/components/global/loading";

export default {
  components: {
    TopMenu,
    baseImage,
    LoadingSvg,
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
  watch: {
		'$route'() {
      this.getCountriesData();
		},
	},
  methods: {
    goBack() {
      this.$router.replace("/");
    },
    async getCountriesData() {
      this.showLoading = true;
      try {
        const response = await this.$httpCall.get(
          `/alpha/${this.$route.params.ccn}`,
        );
        if (response && response.status === 200) {
          this.showLoading = false;
          this.countryData = response.data[0];
        }
      } catch (error) {}
    },
    changeDetail(item) {
      this.$router.push(`/detail/${item}`);
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
  cursor: pointer;
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
.data-right_wrapper {
  display: flex;
  justify-content: space-between;
}
.data-item_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.border_wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
}
.data_item_border {
  height: 30px;
  background: var(--white);
  border: 1px solid #ccc;
  padding: 0 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-radius: 4px;
}
@media (max-width: 992px) {
  .data-left img {
    height: 300px;
  }
  .btn-back {
    width: 15%;
  }
}
@media (max-width: 768px) {
  .data-left img {
    height: 250px;
  }
  .btn-back {
    width: 20%;
  }
  .data-right_wrapper {
    flex-direction: column;
  }
  .data-container {
    flex-direction: column;
  }
  .data-right {
    width: 100%;
  }
}
@media (max-width: 592px) {
  .data-left {
    width: 100%;
  }
  .data-left img {
    height: 200px;
  }

  .btn-back {
    width: 30%;
  }
}
</style>
