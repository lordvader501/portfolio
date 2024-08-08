<script setup>
const router = useRouter();
useHead({
  title: 'Ooups!',
});
</script>

<template>
  <NuxtLayout>
    <article class="active" data-page="resume">
      <header>
        <h2 class="h2 article-title">
          Page Not Found
        </h2>
      </header>

      <div class="grid grid-cols-1 text-center mb-20 md:mb-0">
        <div class="text-[5rem] text-[#f39c12] font-bold">
          404
        </div>

        <div class="text-xl justify-center text-[#fafafa]">
          <span>The Page you are looking for doesn't exist or an other error occured. 😞</span>
          <Button label="Go back" class="btn-gold m-[auto] mt-6 gap-1" @click="router.back()" />
        </div>
      </div>
    </article>
  </NuxtLayout>
</template>
