<template>
  <div class="filter-container">
    <div class="first-section" @click="openMenu = !openMenu">
      <p class="size-14 font-semi-bold">Filter by Region</p>
      <div>icon</div>
    </div>
    <div class="second-section" :class="{ 'show-menu': openMenu }">inja</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMenu: false,
    };
  },
};
</script>
<style scoped>
.filter-container {
  height: 60px;
  width: 100%;
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  border-radius: 4px;
  position: relative;
}
.first-section {
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.second-section {
  position: absolute;
  width: 100%;
  min-height: 50px;
  background: red;
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  left: 0;
  margin-top: 6px;
  border-radius: 4px;
  animation-name: openMenu;
  animation-duration: 1s;
  display: none;
}
.show-menu {
  display: block;
  /* animation-name: closeMenu;
  animation-duration: 1s; */
}
@keyframes openMenu {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes closeMenu {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
