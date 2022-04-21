<template>
  <p>{{ name() }}</p>
</template>

<script>
export default {
  name: "Sub",
  methods: {
    name() {
      return this.$t("top.description", { name: "h3poteto" });
    },
  },
};
</script>
