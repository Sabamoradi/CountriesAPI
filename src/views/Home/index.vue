<template>
  <div>
    <top-menu />
    <div class="second-section">
      <div class="container">
        <div class="left-section">
          <text-input :placeText="'search for a country ...'" />
        </div>
        <div class="right-section"></div>
      </div>
    </div>
    <div class="third-section">
      <div class="container">
        <div class="cards-wrapper">
          <home-card v-for="index in 6" :key="`${index}-card`" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopMenu from "@/components/TopMenu";
import TextInput from "@/components/global/Input";
import HomeCard from "@/components/HomeCard";
export default {
  components: {
    TopMenu,
    TextInput,
    HomeCard,
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
.cards-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
}
</style>