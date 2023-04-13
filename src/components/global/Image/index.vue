<template>
    <img :src="imgUrl" :alt="imgAlt" loading="lazy" :class="{'border-4':border}"/>
</template>
<script>
export default {
    props: {
        imgUrl: {
            default: '',
            type: String,
        },
        imgAlt: {
            default: '',
            type: String,
        },
        border: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style scoped>
img{
  width: 100%;
  height: 100%;
}
.border-4{
  border-radius: 4px 4px 0 0;
}
</style>
