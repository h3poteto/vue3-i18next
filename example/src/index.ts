import { createApp } from "vue";
import { createI18n } from "vue3-i18next";
import i18next, { InitOptions } from "i18next";

import en from "./locales/en.json";
import App from "./App.vue";

const options: InitOptions = {
  initImmediate: false,
  lng: "en",
  fallbackLng: "en",
  saveMissing: true,
  resources: {
    en: {
      translation: en,
    },
  },
};

i18next.init(options);
const i18n = createI18n(i18next);

const app = createApp(App);
app.use(i18n);
app.mount("#app");
