<template>
  <div>
    <button class="border flex items-center justify-center border-[#03263a] text-center h-auto max-w-52 w-48 my-2 mx-2">
      <img
        v-if="img.img"
        :src="`${img.img}`"
        class="sm:w-1/2 lg:w-24 mx-4 my-4"
        alt=""
      />
      <v-else span class="text-[#03263a] text-4xl py-8 font-bold">{{ img.name }}</v-else>
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
