<template>
  <div>
    <top-menu />
    <div class="second-section">
      <div class="container second-wrapper">
        <div class="left-section">
          <text-input :placeText="'search for a country ...'" />
        </div>
        <div class="right-section">
          <filters/>
        </div>
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
import TopMenu from '@/components/TopMenu';

import TextInput from '@/components/global/Input';

import HomeCard from '@/components/HomeCard';

import Filters from '@/components/global/Filters';

export default {
  components: {
    TopMenu,
    TextInput,
    HomeCard,
    Filters,
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
.right-section{
  width: 18%;
}
.cards-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
}
.second-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
