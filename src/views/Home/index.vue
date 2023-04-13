<template>
  <div>
    <top-menu />
    <div class="second-section">
      <div class="container second-wrapper">
        <div class="left-section">
          <text-input
            :placeText="'search for a country ...'"
            @searchData="searchCountry"
          />
        </div>
        <div class="right-section">
          <filters
            :listItem="listItem"
            @setItemData="setFilter"
            @resetAllFilter="resetAllFilter"
          />
        </div>
      </div>
    </div>
    <div class="third-section">
      <template v-if="showLoading">
        <loading-svg />
      </template>
      <template v-else>
        <div class="container">
          <div class="cards-wrapper">
            <home-card
              v-for="index in listData"
              :itemsData="index"
              :key="`${index.name.common}-card`"
              @goToDetail="goToDetail"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu";

import TextInput from "@/components/global/Input";

import HomeCard from "@/components/HomeCard";

import Filters from "@/components/global/Filters";

import LoadingSvg from '@/components/global/loading';

export default {
  components: {
    TopMenu,
    TextInput,
    HomeCard,
    Filters,
    LoadingSvg
  },
  data() {
    return {
      listItem: [
        {
          id: 1,
          text: "africa",
        },
        {
          id: 2,
          text: "america",
        },
        {
          id: 3,
          text: "asia",
        },
        {
          id: 4,
          text: "europe",
        },
        {
          id: 5,
          text: "oceania",
        },
      ],
      showLoading: false,
      listData: [],
    };
  },
  created() {
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (this.$route.query.searching) {
        if (this.$route.query.region) {
          this.setItemData(this.$route.query.region);
        } else {
          this.searchData(this.$route.query.country);
        }
      } else {
        this.fetchCountriesData();
      }
    },
    resetAllFilter() {
      this.$router.replace({
        query: { region: undefined, searching: undefined },
      });
      this.fetchCountriesData();
    },
    async fetchCountriesData() {
      this.showLoading = true;
      try {
        const response = await this.$httpCall.get("/all");
        if (response && response.status === 200) {
          this.showLoading = false;
          this.listData = response.data;
        }
      } catch (error) {}
    },
    setFilter(val) {
      if (this.listData.length > 0) {
        this.setItemData(val);
      } else {
        return;
      }
    },
    async setItemData(val) {
      let regionItem = null;
      if (val.text) {
        regionItem = val.text;
      } else {
        regionItem = val;
      }
      this.showLoading = true;
      try {
        const response = await this.$httpCall.get(`/region/${regionItem}`);
        if (response && response.status === 200) {
          this.$router.replace({
            query: { region: regionItem, searching: true },
          });
          this.showLoading = false;
          this.listData = response.data;
        }
      } catch (error) {}
    },
    searchCountry(item) {
      if (item) {
        this.searchData(item);
      } else {
        this.$router.replace({
          query: { country: undefined, searching: undefined },
        });
        this.fetchCountriesData();
      }
    },
    async searchData(data) {
      this.showLoading = true;
      try {
        const response = await this.$httpCall.get(`/name/${data}`);
        if (response && response.status === 200) {
          this.$router.replace({ query: { country: data, searching: true } });
          this.showLoading = false;
          this.listData = response.data;
        }
      } catch (error) {}
    },
    goToDetail(val) {
      this.$router.replace(`/detail/${val.cca3}`);
      console.log("fff", val.cca3);
    },
  },
};
</script>
<style scoped>
.second-section,
.third-section {
  margin: 50px 0;
}
.left-section {
  width: 40%;
}
.right-section {
  width: 18%;
}
.cards-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
}
.second-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 1199px) {
  .right-section {
    width: 22%;
  }
  .cards-wrapper {
    gap: 75px;
  }
}
@media (max-width: 992px) {
  .cards-wrapper {
    gap: 10px;
    justify-content: space-between;
  }
  .second-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
  .right-section {
    width: 35%;
    margin-top: 40px;
  }
  .left-section {
    width: 100%;
  }
}
@media (max-width: 592px) {
  .right-section {
    width: 80%;
  }
}
</style>
