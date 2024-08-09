<template>
  <AppLoadingPage v-show="!loadingPage" />
  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>
<script setup>
const loadingPage = ref();

onBeforeMount(() => {
  loadingPage.value = false;
});

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true;
  }, 3000);
});
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>;