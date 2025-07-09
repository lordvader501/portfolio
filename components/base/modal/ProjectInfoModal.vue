<template lang="">
  <div class="modal-container" :class="{ active: activeModal }">
    <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" @click="closeItem" />

    <section class="testimonials-modal block overflow-auto scrollbar-hide" style="max-height: -webkit-fill-available; height: inherit;">
      <button class="modal-close-btn fixed" @click="closeItem">
        <ion-icon name="close-outline" />
      </button>

      <div>
        <figure>
          <NuxtImg style="width: 100%; aspect-ratio: 5/3;" :src="activeItem.image" class="rounded-lg" :alt="activeItem.title" />
        </figure>
      </div>

      <div class="modal-content space-y-3 mt-4">
        <div class="flex justify-between items-center">
          <h4 class="h3 modal-title">
            {{ activeItem.title }}
          </h4>
          <div class="text-auto-color flex gap-6 text-sm">
            <NuxtLink :to="activeItem.gh_url" target="_blank" class="flex items-center gap-1">
              <ion-icon name="logo-github" />
              Github
            </NuxtLink>
            <NuxtLink v-if="activeItem.live_url" :to="activeItem.live_url" target="_blank" class="flex items-center gap-1">
              <ion-icon name="globe-outline" />
              View live
            </NuxtLink>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-start">
          <span class="text-auto-color mr-3 text-lg">Tech Stack: </span>
          <span class="mx-1 mb-0.5 text-[10px] border rounded-full px-2 flex items-center justify-center" style="color: var(--vegas-gold); border-color: var(--vegas-gold); line-height: 20px;" v-for="(skill, index) in activeItem.skills" :key="index">
            {{skill}}
          </span>
        </div>

        <small class="flex items-center justify-start gap-2 text-gray-500">
          <span>{{ activeItem.info }}</span>
        </small>

        <!-- <p class="text-justify">{{activeItem.content}}</p> -->
        <div v-html="renderedMd" class="text-white" />
      </div>
    </section>
  </div>
</template>
<script setup>
import markdownit from 'markdown-it';
const props = defineProps({
  activeModal: Boolean,
  activeItem: Object,
  activeOverlay: Boolean,
  closeItem: Function
});
const md = markdownit();

const renderedMd = computed(() => md.render(props.activeItem?.content || ''));
</script>
<style>
.text-auto-color {
  color: var(--white-2)
}
</style>