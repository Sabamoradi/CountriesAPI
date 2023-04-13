<template>
  <div class="home-item" @click="goToDetail">
    <div class="card_wrapper">
      <div class="card_img">
        <img :src="itemsData.flags.png" :alt="itemsData.flags.alt" loading="lazy" />
      </div>
      <div class="card_text">
        <p class="title font-bold size-16">{{ itemsData.name.official }}</p>
        <div class="mt-2 size-14 card-title">
          <span class="font-bold"> Population: </span>
          <p class="font-semi-bold">
            {{ itemsData.population }}
          </p>
        </div>
        <div class="mt-2 size-14 card-title">
          <span class="font-bold"> Region: </span>
          <p class="font-semi-bold">
            {{ itemsData.region }}
          </p>
        </div>
        <div class="mt-2 size-14 card-title">
          <span class="font-bold"> Capital: </span>
          <p class="font-semi-bold">
            {{ itemsData.capital ? itemsData.capital[0] : "-" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemsData: {
      default: () => {},
      type: Object,
    },
  },
  methods: {
    goToDetail() {
      this.$emit('goToDetail', this.itemsData);
    },
  },
};
</script>
<style scoped>
.home-item {
  width: 22%;
  margin-bottom: 30px;
  cursor: pointer;
}
.card_wrapper {
  background-color: var(--white);
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.card_img {
  width: 100%;
  height: 150px;
  border-radius: 4px 4px 0 0;
}
.card_img img{
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0 0;
}
.card_text {
  padding: 0 30px 50px 30px;
}
.title {
  margin-top: 30px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.card-title {
  display: flex;
  align-items: center;
}
@media (max-width: 1199px) {
  .home-item {
    width: 28%;
  }
}
@media (max-width: 992px) {
  .home-item {
    width: 45%;
  }
}
@media (max-width: 768px) {
  .home-item {
    width: 100%;
  }
  .card_img{
    height: 200px;
  }
}
</style>
