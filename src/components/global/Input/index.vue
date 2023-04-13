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
      @input="searchData($event)"
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
      timeOutId:null,
      latestSearchValue:'',
      oldSearchValue:''
    };
  },
  watch: {
		'$route.query': {
      immediate:true,
      handler(newVal) {
        if(this.$route.query.country){
          this.oldSearchValue = this.$route.query.country;
          this.innerValue = this.$route.query.country
        }
      }
			
		},
	},
  methods: {
    searchData(e) {
      clearTimeout(this.timeOutId);
      this.latestSearchValue = e.target.value;
      this.timeOutId = setTimeout(() => {
        this.oldSearchValue = e.target.value;
        this.$emit('searchData',this.oldSearchValue)
      }, 2000);
    },
  },
};
</script>
<style scoped>
.input-conatiner {
  position: relative;
  height: 60px;
}
.custom-input {
  border-color: transparent;
  height: 100%;
  position: absolute;
  box-shadow: 1px 3px 7px 3px var(--box-shadow-light);
  width: 100%;
  border-radius: 4px;
  text-indent: 20px;
}
.custom-input:focus {
  outline: none;
}
</style>
