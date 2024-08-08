<template lang="">
  <header>
      <h2 class="h2 article-title">
        {{ title }}
      </h2>
    </header>
</template>
<script setup>
defineProps({
  title: String
});
</script>
