<template>
  <div>
    <top-menu />
    <div class="second-container mt-5">
      <div class="container">
        <div class="btn-back">
          <i>icon</i>
          <p>Back</p>
        </div>
        <div class="data-container mt-5">
          <div class="data-left">
            <baseImage />
          </div>
          <div class="data-right">
            <div class="data-right_title size-20 font-bold">base</div>
            <div class="data-right_items mt-2">
                <div class="data_item">
                    <p class="size-14 font-bold">title: </p>
                    <span class="size-14">data</span>
                </div>
                <div class="data_item">
                    <p class="size-14 font-bold">title: </p>
                    <span class="size-14">data</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopMenu from '@/components/TopMenu';

import baseImage from '@/components/global/Image';

export default {
  components: {
    TopMenu,
    baseImage,
  },
};
</script>
<style scoped>
.btn-back {
  display: flex;
  width: 10%;
  justify-content: space-around;
  box-shadow: 1px 3px 7px 3px var(--box-shadow);
  height: 40px;
  border-radius: 4px;
  align-items: center;
}
.data-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.data-left {
  width: 45%;
}
.data-right {
  width: 45%;
}
.data_item{
    display: flex;
    align-items: center;
    margin-top: 10px;
}
</style>