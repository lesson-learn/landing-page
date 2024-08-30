<template>
  <div>
    <button class="hover:shadow-md duration-400 hover:scale-110 text-center">
      <img
        :src="`${img.img}`"
        class="lg:w-24 sm:w-10 mx-4 my-4"
        alt="" 
      />
      <span class="text-white">{{ img.name }}</span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
      required: true,
      
    },
  },
};
</script>
