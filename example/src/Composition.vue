<template>
  <p>{{ weather() }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18next } from "vue3-i18next";

export default defineComponent({
  name: "Composition",
  props: ["weather"],
  setup(props) {
    const i18n = useI18next();
    const weather = () => i18n.t("top.weather", { weather: props.weather });
    return {
      weather,
    };
  },
});
</script>
