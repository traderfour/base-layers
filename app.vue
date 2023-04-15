<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import useBootstrap from "~/composables/bootstrap";

onMounted(() => {
  useBootstrap();
});
</script>
