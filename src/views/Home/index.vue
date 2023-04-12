<template>
  <div>
    <top-menu />
    <div class="second-section">
      <div class="container">
        <div class="left-section">
          <text-input :placeText="'search for a country ...'" />
        </div>
        <div class="right-section">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopMenu from "@/components/TopMenu";
import TextInput from "@/components/global/Input";
export default {
  components: {
    TopMenu,
    TextInput,
  },
};
</script>
<style scoped>
.second-section {
  margin: 30px 0;
}
.left-section{
    width: 40%;
}
</style>