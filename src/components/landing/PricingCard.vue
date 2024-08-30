<template>
  <div
    class="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center bg-white px-3 py-8 border shadow rounded-2xl"
  >
    <h3 class="text-red-600 text-4xl font-bold">{{ price.sellType }}</h3>
    <h2 class="text-5xl font-bold py-2">{{ price.price }}</h2>
    <p class="text-sm text-gray-700 leading-relaxed">
      {{ price.description }}
    </p>
    <ul v-for="feature in price.features" :key="feature">
      <li>{{ feature }}</li>
    </ul>
    <button class="bg-red-600 text-white px-5 py-2 rounded-lg my-2">
      {{ price.button }}
    </button>
  </div>
</template>
<script>
export default {
  name: "PricingCard",
  props: {
    price: {
      type: Object,
      required: true,
    },
  },
};
</script>
