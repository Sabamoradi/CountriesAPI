<template>
  <div>
    <top-menu />
    <div class="second-section">
      <div class="container second-wrapper">
        <div class="left-section">
          <text-input :placeText="'search for a country ...'" />
        </div>
        <div class="right-section">
          <filters
            :listItem="listItem"
            @setItemData="setItemData"
            @resetAllFilter="fetchCountriesData"
          />
        </div>
      </div>
    </div>
    <div class="third-section">
      <template v-if="showLoading"> loading </template>
      <template v-else>
        <div class="container">
          <div class="cards-wrapper">
            <home-card
              v-for="index in listData"
              :itemsData="index"
              :key="`${index.name.common}-card`"
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

export default {
  components: {
    TopMenu,
    TextInput,
    HomeCard,
    Filters,
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
    this.fetchCountriesData();
  },
  methods: {
    async fetchCountriesData() {
      this.showLoading = true;
      try {
        const respose = await this.$httpCall.get("/all");
        if (respose && respose.status === 200) {
          this.showLoading = false;
          this.listData = respose.data;
        }
      } catch (error) {}
    },
    async setItemData(val) {
      this.showLoading = true;
      try {
        const respose = await this.$httpCall.get(`/region/${val.text}`);
        if (respose && respose.status === 200) {
          this.showLoading = false;
          this.listData = respose.data;
        }
      } catch (error) {}
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
