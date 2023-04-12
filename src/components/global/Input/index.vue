<template>
  <div class="input-conatiner">
    <template v-if="isShowAppendIcon">
      <div class="icon"></div>
    </template>
    <input
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
      default: "text",
      type: String,
    },
    placeText: {
      default: "",
      type: String,
    },
    value: {
      default: "",
      type: String,
    },
    name: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      innerValue: "",
    };
  },
};
</script>