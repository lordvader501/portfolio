<script setup>
import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import PageTitle from '~/components/base/heading/PageTitle';
import ProjectInfoModal from '~/components/base/modal/ProjectInfoModal';
import ProjectCard from '~/components/base/cards/ProjectCard';

useHead({
  title: 'Projects',
});
const title = "Projects";
// const { data: projects } = await useFetch('/api/projects');

// const projectList = [...projects.value];

const activeItem = ref({});
const activeModal = ref(false);
const activeOverlay = ref(false);

function showItem(id) {
  activeItem.value = projectList.find(item => item.id === id);
  activeModal.value = true;
  activeOverlay.value = true;
}

function closeItem() {
  activeItem.value = {};
  activeModal.value = false;
  activeOverlay.value = false;
}
</script>

<template>
  <article class="active" data-page="projects">
    <PageTitle :title="title" />

    <section class="projects">
      <ul class="project-list">
        <ProjectCard v-for="project in projectList" :key="project.id" :project="project" :showItem="showItem" />
      </ul>

      <ProjectInfoModal :activeModal="activeModal" :activeItem="activeItem" :activeOverlay="activeOverlay"
        :closeItem="closeItem" />
    </section>
  </article>
</template>
