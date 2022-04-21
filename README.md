# vue3-i18next
[![Build](https://github.com/h3poteto/vue3-i18next/actions/workflows/build.yml/badge.svg)](https://github.com/h3poteto/vue3-i18next/actions/workflows/build.yml)
[![NPM Version](https://img.shields.io/npm/v/vue3-i18next.svg)](https://www.npmjs.com/package/vue3-i18next)
[![GitHub release](https://img.shields.io/github/release/h3poteto/vue3-i18next.svg)](https://github.com/h3poteto/vue3-i18next/releases)
[![npm](https://img.shields.io/npm/dm/vue3-i18next)](https://www.npmjs.com/package/vue3-i18next)
[![NPM](https://img.shields.io/npm/l/vue3-i18next)](/LICENSE.txt)

This is the repository for Vue i18next for Vue3. If you use i18next for Vue2, see this [repository](https://github.com/panter/vue-i18next).

## Install
```
$ npm install -S vue3-i18next
```

or

```
$ yarn add vue3-i18next
```

### Requirements
- vue >= 3.2.0
- i18next >= 21.0.0

## Usage
### Init

```typescript
import { createApp } from "vue";
import { createI18n } from "vue3-i18next";
import i18next, { InitOptions } from "i18next";

import App from "./App.vue";

const locales = {
  en: {
    message: {
      hello: 'Hello!',
      loadbundle: 'Load bundle language: {{lang}}',
    },
  },
};

const options: InitOptions = {
  initImmediate: false,
  lng: "en",
  fallbackLng: "en",
  saveMissing: true,
  resources: {
    en: {
      translation: locales.en,
    },
  },
};
i18next.init(options);
const i18n = createI18n(i18next);

const app = createApp(App);
app.use(i18n);
app.mount("#app");
```

### Component based localization
```vue
<template>
  <div id="app">
    <p>{{ $t('message.hello') }}</p>
    <p>{{ loadbundle() }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    loadbundle() {
      return this.$t('message.loadbundle', {lang: 'en'})
    },
  },
}
</script>
```

## License

The software is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
