<template lang="">
  <li class="project-item" v-tooltip="project.info">
    <a class="cursor-pointer" @click="showItem(project.id)">
      <figure class="project-img">
        <div class="w-full h-full absolute flex justify-center items-center gap-6">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline" />
          </div>
          <NuxtLink :to="project.gh_url" target="_blank" @click.stop="">
            <div class="project-item-icon-box">
                <ion-icon name="logo-github" />
            </div>
          </NuxtLink>
          <NuxtLink v-if="project.live_url" :to="project.live_url" target="_blank" @click.stop="">
            <div class="project-item-icon-box">
                <ion-icon name="link-outline"></ion-icon>
            </div>
          </NuxtLink>
        </div>

        <NuxtImg :src="project.image" :alt="project.title" loading="lazy" />
      </figure>

      <h3 class="project-title">{{ project.title }}</h3>
      <div class="flex flex-wrap justify-start ml-1 mt-1">
        <span class="mx-1 mt-1 mb-0.5 text-[10px] border rounded-full px-1.5 flex items-center justify-center" style="color: var(--vegas-gold); border-color: var(--vegas-gold); line-height: 15px;" v-for="(skill, index) in project.skills" :key="index">{{skill}}</span>
      </div>
      <!-- <p class="line-clamp-2 project-category">{{ project.info }}</p> -->

    </a>
  </li>
</template>
<script setup>
defineProps({
  project: Object,
  showItem: Function
});
</script>