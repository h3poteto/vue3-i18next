<template>
  <span class="hello">{{ $t("top.title") }}</span>
  <Sub />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sub from "./Sub.vue";

export default defineComponent({
  name: "App",
  components: {
    Sub,
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
