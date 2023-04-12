<template>
  <div class="home-item">
    <div class="card_wrapper">
      <div class="card_img"></div>
      <div class="card_text">
        <p class="title font-bold size-16">germay</p>
        <p class="mt-2 size-14 font-semi-bold">Population:1111</p>
        <p class="mt-2 size-14 font-semi-bold">Population:1111</p>
        <p class="mt-2 size-14 font-semi-bold">Population:1111</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-item {
  width: 22%;
  margin-bottom: 30px;
}
.card_wrapper {
  background-color: var(--white);
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.card_img {
  background-color: pink;
  width: 100%;
  height: 150px;
  border-radius: 4px 4px 0 0;
}
.card_text {
  padding: 0 30px 50px 30px;
}
.title {
  margin-top: 30px;
}
</style>
