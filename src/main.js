import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { createI18n } from "vue-i18n";
import en from "../src/locales/en.json";
import kh from "../src/locales/kh.json";

const app = createApp(App);

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    kh,
    en,
  },
});

app.use(AOS.init());
app.use(i18n);

app.mount("#app");