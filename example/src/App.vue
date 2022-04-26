<template>
  <span class="hello">{{ $t("top.title") }}</span>
  <Option />
  <Composition weather="rainy" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Option from "./Option.vue";
import Composition from "./Composition.vue";

export default defineComponent({
  name: "App",
  components: {
    Option,
    Composition,
  },
  setup() {
    return {};
  },
});
</script>

<style>
.hello {
  color: red;
}
</style>
