<template>
  <div>
    <top-menu />
    <div class="second-section">
      <div class="container second-wrapper">
        <div class="left-section">
          <text-input :placeText="'search for a country ...'" />
        </div>
        <div class="right-section">
          <filters :listItem="listItem"/>
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
  data() {
    return {
      listItem: [
        {
          id: 1,
          text: 'Africa',
        },
        {
          id: 2,
          text: 'America',
        },
        {
          id: 3,
          text: 'Asia',
        },
        {
          id: 4,
          text: 'Europe',
        },
        {
          id: 5,
          text: 'Oceania',
        },
      ],
    };
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
@media (max-width: 1199px) {
  .right-section{
    width: 22%;
  }
  .cards-wrapper {
    gap:75px
  }
}
@media (max-width: 992px){
  .cards-wrapper{
    gap:10px;
    justify-content: space-between;
  }
  .second-wrapper{
    flex-direction: column;
    align-items: flex-start;
  }
  .right-section{
    width: 35%;
    margin-top: 40px;
  }
  .left-section {
    width: 100%;
  }
}
@media (max-width: 592px){
.right-section{
  width: 80%;
}
}
</style>
