<template>
  <!-- Navbar -->
  <div class="w-full fixed top-0 bg-white z-50">
    <nav id="navbar" class="relative z-10 w-full text-neutral-800">
      <div
        class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-1"
      >
        <div
          class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"
        >
          <div class="w-full flex flex-row items-center justify-between py-2">
            <div>
              <button @click="toTheSection(0, 'HOME')">
                <img
                  src="https://benchpos.com/wp-content/themes/bench/benchlogo-black.png"
                  class="w-28 xl:w-40"
                  alt="Bench Logo"
                />
              </button>
            </div>
            <button
              class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
              @click="open = !open"
            >
              <SegmentIcon v-if="!open" :size="24" />
              <CloseIcon v-else :size="24" />
            </button>
          </div>
          <ul
            :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 space-x-0 xl:space-x-2 space-y-3 lg:space-y-0"
          >
            <li>
              <button
                type="button"
                @click="toTheSection(600, 'ABOUT')"
                :class="{
                  'bg-red-600 text-white rounded-full': activeTab === 'ABOUT',
                }"
                class="inline-block py-2 px-4 text-sm text-gray-700 rounded-full hover:bg-gray-100"
              >
                {{ $t("About") }}
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="toTheSection(1350, 'FEATURES')"
                :class="{
                  'bg-red-600 text-white  rounded-full':
                    activeTab === 'FEATURES',
                }"
                class="block py-2 px-4 text-sm text-gray-700 rounded-full hover:bg-gray-100"
              >
                {{ $t("Features") }}
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="toTheSection(2000, 'CONTACT')"
                :class="{
                  'bg-red-600 text-white rounded-full': activeTab === 'CONTACT',
                }"
                class="block py-2 px-4 text-sm text-gray-700 rounded-full hover:bg-gray-100"
              >
                {{ $t("Contact") }}
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="toTheSection(3150, 'PRICING')"
                :class="{
                  'bg-red-600 text-white rounded-full': activeTab === 'PRICING',
                }"
                class="block py-2 px-4 text-sm text-gray-700 rounded-full hover:bg-gray-100"
              >
                {{ $t("Pricing") }}
              </button>
            </li>
          </ul>
        </div>
        <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
          <ul
            class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 space-x-0 xl:space-x-2 space-y-3 lg:space-y-0"
          >
            <li class="relative group">
              <button
                class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
                @click="localeToggler"
                @blur="localeToggler"
              >
                <span>Language</span>
                <ChevronUpIcon v-if="localeDropdown" :size="16" />
                <ChevronDownIcon v-else :size="16" />
              </button>
              <transition name="transform-fade-down">
                <ul
                  v-if="localeDropdown"
                  class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
                >
                  <li>
                    <button
                      @click="switchLanguage('kh')"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {{ $t("Khmer") }}
                    </button>
                  </li>
                  <li>
                    <button
                      @click="switchLanguage('en')"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {{ $t("English") }}
                    </button>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
          <a
            href="https://connect.banhji.com/"
            target="_blank"
            class="px-8 xl:px-10 rounded-full py-3 mt-2 bg-inherit text-[#eb0238] border border-[#eb0238]"
          >
            {{ $t("Login") }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "BaseNavbar",
  data() {
    return {
      open: false,
      localeDropdown: false,
      isSticky: false,
      activeTab: "ABOUT",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    switchLanguage(locale) {
      this.$i18n.locale = locale;
    },
    localeToggler() {
      this.localeDropdown = !this.localeDropdown;
    },
    toTheSection(scroll, tabName) {
      this.activeTab = tabName;
      window.scrollTo({ top: scroll, behavior: "instant" });
      // document.body.scrollTop = scroll;
      document.documentElement.scrollTop = scroll;
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};
</script>
