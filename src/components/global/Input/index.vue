<template>
  <div class="input-conatiner">
    <template v-if="isShowAppendIcon">
      <div class="icon"></div>
    </template>
    <input
      class="custom-input size-14"
      :type="type"
      :placeholder="placeText"
      :value="value"
      :name="name"
      v-model="innerValue"
    />
  </div>
</template>
<script>
export default {
  props: {
    isShowAppendIcon: {
      type: Boolean,
      default: false,
    },
    type: {
      default: 'text',
      type: String,
    },
    placeText: {
      default: '',
      type: String,
    },
    value: {
      default: '',
      type: String,
    },
    name: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      innerValue: '',
    };
  },
};
</script>
<style scoped>
.custom-input {
  border-color: transparent;
  height: 60px;
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  padding: 0 20px;
  width: 100%;
  border-radius: 4px;
}
.custom-input:focus{
    outline: none;
}
</style>
