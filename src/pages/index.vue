<template>
  <div class="w-full">
    <!-- Home Index -->
    <section id="hero" class="w-full pb-24">
      <section class="px-14 grid grid-cols-12">
        <div
          class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"
        >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Expand your business with bench
          </h1>
          <h1 class="text-header-gradient h-auto text-2xl font-bold">
            #Powering revenue & growth engine
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="paragraph hidden sm:block"
          >
            bench provides features and functions to streamline sales processes
            and management for businesses.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <button
              @click="toTheSection(600)"
              class="max-w-full rounded-full px-8 py-4 bg-gradient-to-r bg-[#03263a] from-[#03263a] to-[#3263a] border border-[#03263a] text-white"
            >
              Knowing Us
            </button>
            <button
              class="max-w-full rounded-full px-6 py-4 bg-inherit text-gradient border border-[#03263a] flex items-center justify-center"
            >
              <span>Watch Youtube</span>
            </button>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src="../assets/img/bench-banner.png"
              class="mt-10"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>

    <!-- Strengthen of Bench By Banhji -->
    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-8 shadow rounded-2xl overflow-hidden"
    >
      <div
        class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6"
      >
        <div
          data-aos="fade-right"
          class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
        >
          <h2 class="text-4xl font-semibold">
            What are the strengths of
            <span class="text-header-gradient">bench by banhji?</span>
          </h2>
          <h4 class="text-lg font-medium space-y-2">
            bench by banhji is a technology company focused on facilitating and
            providing easy management systems for business projects, partners
            and clients.
          </h4>
          <ul class="space-y-2 list-disc">
            <li class="paragraph text-sm xl:text-base">
              bench by banhji is a technology company focused on facilitating
              and providing easy management systems for business projects,
              partners and clients.
            </li>
            <li class="paragraph text-sm xl:text-base">
              All of bench's functions are unique and innovative, and with the
              advent of Amazon Web Service (AWS) technology, this cloud-based
              application is highly efficient and long-lasting.
            </li>
            <li class="paragraph text-sm xl:text-base">
              All reports are qualified to provide business owners with an
              analysis of their business, designed based on the experience of
              business owners and professionals. Combined with reports of
              summary sales reports as well as all transactions sent through
              Telegram Group, this makes management easier.
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row">
            <button
              @click="toTheSection(3150, 'PRICING')"
              class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
            >
              Let's see our price
            </button>
          </div>
        </div>

        <div
          class="col-span-12 lg:col-span-6 hidden sm:block"
          data-aos="fade-left"
        >
          <div class="w-full sm:mt-20 xl:mt-0">
            <img
              src="https://benchpos.com/wp-content/uploads/2023/12/bench-about.png"
              class="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Bench Features -->
    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"
    >
      <div class="w-full py-16 flex flex-col items-center">
        <h2
          data-aos="flip-down"
          class="text-3xl sm:text-4xl font-semibold text-center"
        >
          Let's see our <span class="text-header-gradient">features.</span>
        </h2>
        <div class="py-4">
          <p class="text-sm text-gray-700 leading-relaxed">
            Discover the features of bench that will change the way you manage
            your business.
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <BenchFeature v-for="step in steps" :key="step.title" :step="step" />
          <img
            src="../assets/img/getting-started/arrow.png"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            src="../assets/img/getting-started/arrow.png"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- Social Media Section -->
    <section
      class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden bg-[#03263a]"
    >
      <div
        class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center"
      >
        <h3 data-aos="flip-down" class="text-2xl text-white font-semibold">
          Contact us by Social Media.
        </h3>
        <!-- <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p> -->
        <div
          data-aos="fade-up"
          class="flex flex-wrap items-center justify-center"
        >
          <SocialMediaImage
            v-for="img in [
              { img: 'https://benchpos\.com/wp-content/themes/bench/images/fb-icon\.png', name: 'Facebook Page' },
              { img: 'https://benchpos\.com/wp-content/themes/bench/images/telegram-icon\.png', name: 'Telegram' },
              { img: 'https://benchpos\.com/wp-content/themes/bench/images/youtube-icon\.png', name: 'Youtube' },
              { img: 'https://benchpos\.com/wp-content/themes/bench/images/messenger-icon\.png', name: 'Messenger' },
            ]"
            :key="img.name"
            :img="img"
          />
        </div>
      </div>
    </section>

    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-8 shadow rounded-2xl overflow-hidden"
    >
      <div
        class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6"
      >
        <div
          class="col-span-12 lg:col-span-6 sm:block border shadow-xl rounded-2xl flex items-center justify-center"
          data-aos="fade-left"
        >
          <h1 class="text-center text-2xl font-bold p-5">
            Have any Questions?
          </h1>
          <div class="flex flex-col p-6">
            <input
              type="text"
              placeholder="Name"
              class="p-3 input mb-3 border border-[#03263a] rounded-xl"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="p-3 input mb-3 border border-[#03263a] rounded-xl"
            />
            <input
              type="text"
              placeholder="Email"
              class="p-3 input mb-3 border border-[#03263a] rounded-xl"
            />
            <textarea
              class="p-3 input mb-3 border border-[#03263a] rounded-xl"
              placeholder="Question"
            ></textarea>
            <button
              class="max-w-full rounded-full px-8 py-4 bg-gradient-to-r bg-[#03263a] from-[#03263a] to-[#3263a] border border-[#03263a] text-white"
            >
              Send Question
            </button>
          </div>
        </div>
        <div
          data-aos="fade-right"
          class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
        >
          <h2 class="text-4xl font-semibold">
            We are glad to
            <span class="text-header-gradient"> know you</span>
          </h2>
          <p>Here is the information you can contact bench</p>
          <ul>
            <li
              class="flex items-center mb-2 space-x-2 px-1 py-5 border justify-start rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/C4RmpyqrytgrDPvH7"
              >
                #15 Street 135 corner 446 Sangkat Toul Tompoung 1,Khan Chamkamon
              </a>
            </li>
            <li
              class="flex items-center mb-2 space-x-2 px-1 py-5 border justify-start rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a target="_blank" href="mailto:bench@banhji.com">
                bench@banhji.com
              </a>
            </li>
            <li
              class="flex items-center mb-2 space-x-2 px-1 py-5 border justify-start rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <a target="_blank" href="tel:+85587988788">
                | 087 988 788 | 096 206 6336 | Sales
              </a>
            </li>
            <li
              class="flex items-center mb-2 space-x-2 px-1 py-5 border justify-start rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <a target="_blank" href="tel:+855314131888">
                | 031 41 31 888 | 096 474 6668 | Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Choose the right Price -->
    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"
    >
      <div class="w-full py-16 flex flex-col items-center">
        <h2
          data-aos="flip-down"
          class="text-3xl sm:text-4xl font-semibold text-center"
        >
          Choose the right price for your
          <span class="text-header-gradient">business.</span>
        </h2>
        <div class="py-4">
          <p class="text-sm text-gray-700 leading-relaxed">
            Bench offers a wide range of subscription packages by type and size
            of business. All packages are flexible as needed, business functions
            or any special functions as required.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <PricingCard
            v-for="price in pricings"
            :key="price.title"
            :price="price"
          />
        </div>
      </div>
    </section>

    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"
    >
      <div class="w-full py-16 flex flex-col items-center">
        <h2
          data-aos="flip-down"
          class="text-3xl sm:text-4xl font-semibold text-center"
        >
          Bench is a part in
          <span class="text-header-gradient"> BanhJi FinTech</span>
        </h2>
        <div class="py-4">
          <p class="text-sm text-gray-700 leading-relaxed">
            All of these are platform developed by Cambodian with high abilities
            and different special functions. We are happy to introduce Cambodian
            products to the world.
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="flex flex-wrap items-center justify-center"
        >
          <BanhjiOperation
            v-for="img in [
              {
                img: 'https://benchpos\.com/wp-content/themes/bench/images/banhji-logo\.png',
              },
              { name: 'bench' },
              { name: 'banz' },
              { name: 'sahakum' },
              { name: 'billz' },
            ]"
            :key="img.name"
            :img="img"
          />
        </div>
      </div>
    </section>

    <div class="w-full my-5 flex justify-center">
      <h1 class="text-3xl sm:text-4xl font-semibold">
        <span class="text-header-gradient">Thank for visiting </span>our website
      </h1>
    </div>
    <div class="w-full my-1 flex justify-center">
      <!-- Back to top -->
      <button
        @click="toTheSection(0)"
        v-smooth-scroll
        data-aos="fade-left"
        data-aos-delay="150"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
      </button>
    </div>
  </div>
</template>

<script>
import BanhjiOperation from "../components/landing/BanhjiOperation.vue";
import PricingCard from "../components/landing/PricingCard.vue";
import BenchFeature from "../components/landing/BenchFeature.vue";
import SocialMediaImage from "../components/landing/SocialMediaImage.vue";
import aosMixin from "../mixins/aos";
export default {
  name: "IndexPage",
  components: {
    SocialMediaImage,
    BenchFeature,
    PricingCard,
    BanhjiOperation,
  },
  mixins: [aosMixin],
  data() {
    return {
      isSticky: false,
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      steps: [
        {
          img: "https://benchpos.com/wp-content/uploads/2023/12/loyalty-program.png",
          title: "Dynamic Loyalty Program",
          description:
            "Bench offers businesses the flexibility to manage either a single store or multiple stores from one central location.",
        },
        {
          img: "https://benchpos.com/wp-content/uploads/2023/12/multi-stores.png",
          title: "Single & Multiple Stores",
          description:
            "Customizable customer loyalty programs that can reward customers for making additional purchases",
        },
        {
          img: "https://benchpos.com/wp-content/uploads/2023/12/powerful-campaigns.png",
          title: "Powerful Campaigns",
          description:
            "At Bench Platform, we understand the importance of a well-executed promotional campaign.",
        },
      ],
      pricings: [
        {
          sellType: "Small Bussiness",
          price: "45 $",
          subscribtion: "Per Month",
          description:
            "Ideal for self-employed business owners, there may be one store and one or two checkout counters. For marts, cafes, retail stores, kitchens, etc.",

          features: [
            "Store Management",
            "Point of Sale",
            "Daily Sale by Telegram",
            "Transaction by Telegram",
            "No Commerce Platform",
            "No Custom Functions ",
          ],
          button: "Buy Now",
        },
        {
          sellType: "Multi Stores",
          price: "80 $",
          subscribtion: "Per Month",
          description:
            "Ideal for companies that have multiple branches or sell franchises and want to manage them on one platform. For all businesses that are difficult to manage.",

          features: [
            "Store Management",
            "Point of Sale",
            "Commerce Platform",
            "Transaction by Telegram",
            "Telegram Commerce",
            "Supports",
            "Custom Functions",
          ],
          button: "Buy Now",
        },
        {
          sellType: "Other Business",
          price: "Meet",
          subscribtion: "AND TALK",
          description:
            "If you are unsure or want to know more about the services that our team has, we are happy to make a business meeting, you will be introduced to the system.",

          features: [
            "Online Meeting",
            "Offline Meeting",
            "Google Meet",
            "Bench's Office",
            "Business Location",
            "Other",
          ],
          button: "Contact Us",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toTheSection(scroll) {
      window.scrollTo({ top: scroll, block: "center", behavior: "smooth" });
      document.documentElement.scrollIntoView = scroll;
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
<style scoped>
.cover-gradient {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.04) -6.01%,
    rgba(12, 211, 255, 0.04) 36.87%,
    rgba(47, 124, 240, 0.04) 78.04%,
    rgba(14, 101, 232, 0.04) 103.77%
  );
}
.cover-gradient-2 {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.1) -6.01%,
    rgba(12, 211, 255, 0.1) 36.87%,
    rgba(47, 124, 240, 0.1) 78.04%,
    rgba(14, 101, 232, 0.1) 103.77%
  );
}
.bg-blue-gradient,
.text-gradient {
  background: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
}
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.text-header-gradient {
  background: red;
  background: linear-gradient(
    169.4deg,
    red -6.01%,
    red 36.87%,
    red 78.04%,
    red 103.77%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  /* background: url('../assets/img/partner/background.png'); */
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url("../assets/img/bg-trading-tools.webp");
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
