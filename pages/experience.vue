<script setup>
import PageTitle from "~/components/base/heading/PageTitle";
useHead({
  title: 'Experience',
});
const title = 'Experience';
const { data: skills } = await useFetch('/api/experiences');
const skillsList = [...skills.value];
</script>

<template>
  <article class="resume active" data-page="resume">

    <PageTitle :title="title" />

    <section class="timeline" v-for="item in skillsList" :key="item.id">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon :name="item.icon" />
        </div>

        <h3 class="h3">
          {{ item.title }}
        </h3>

      </div>

      <ol class="timeline-list">
        <li class="timeline-item" v-for="(listitem, index) in item.list" :key="index">
          <div class="flex sm:flex-row flex-col justify-between">
            <h4 class="h4 timeline-item-title">
              <p class="font-bold mb-1">{{ listitem.name }}</p> {{ listitem.position ? `${listitem.position}` : "" }}
            </h4>

            <span class="whitespace-nowrap">{{ listitem.duration }}</span>
          </div>

          <ul class="ml-4 timeline-text" v-if="listitem.description"
            v-for="content in listitem.description"
            :key="content">
            <li class="list-disc">{{ content }}</li>
          </ul>
          <ul class="timeline-text" v-if="listitem.courses" v-for="content in listitem.courses"
            :key="content">
            <li>{{ content }}</li>
          </ul>
        </li>
      </ol>
    </section>
  </article>
</template>
