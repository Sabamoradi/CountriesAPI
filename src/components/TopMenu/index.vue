<template>
  <div class="top-menu_container">
    <div class="container top-menu_wrapper">
      <div class="top-menu_heading">
        <p class="font-bold size-20">Where in the world?</p>
      </div>
      <div class="top-menu_btn">
        <div class="icon">
          <i></i>
        </div>
        <div class="text">
          <p class="font-semi-bold size-16">Dark Mode</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.top-menu_container {
  box-shadow: 0 4px 5px -1px var(--box-shadow);
  background-color: var(--white);
}
.top-menu_wrapper {
  display: flex;
  justify-content: space-between;
  height: 80px;

  align-items: center;
}
</style>