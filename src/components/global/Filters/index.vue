<template>
  <div class="filter-container">
    <div class="first-section">
      <p
        class="size-14 font-semi-bold selection-wrapper"
        @click="openMenu = !openMenu"
      >
        {{ regionText }}
      </p>
      <div @click="resetAllFilter">
        <i v-if="!resetFilter">icon</i>
        <i v-else>reset</i>
      </div>
    </div>
    <div class="second-section" :class="{ 'show-menu': openMenu }">
      <ul>
        <li
          class="size-14"
          v-for="index in listItem"
          :key="`${index.id}-item`"
          @click="setItemData(index)"
        >
          {{ index.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listItem: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      openMenu: false,
      regionText: 'Filter by Region',
      resetFilter: false,
    };
  },
  methods: {
    setItemData(value) {
      this.regionText = value.text;
      this.openMenu = false;
      this.resetFilter = true;
    },
    resetAllFilter() {
      this.regionText = 'Filter by Region';
      this.resetFilter = false;
    },
  },
};
</script>
<style scoped>
.filter-container {
  height: 60px;
  width: 100%;
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  background: var(--white);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}
.first-section {
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.selection-wrapper {
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
}
.second-section {
  position: absolute;
  width: 100%;
  min-height: 50px;
  background: var(--white);
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  left: 0;
  margin-top: 6px;
  border-radius: 4px;
  animation-name: openMenu;
  animation-duration: 1s;
  display: none;
}
.second-section ul {
  list-style: none;
  padding: 0 25px;
}
.second-section ul li {
  padding: 3px 0;
  cursor: pointer;
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
