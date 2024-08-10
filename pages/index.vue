<script setup>
import PageTitle from "~/components/base/heading/PageTitle";
useHead({
  title: '',
});

useSeoMeta({
  title: 'Shauryam Dubey | Software Developer',
  ogTitle: 'Shauryam Dubey Portfolio',
  description: 'Welcome to Shauryam Dubey’s portfolio. Explore my work, projects, and experience as a software developer.',
  ogDescription: 'Discover the professional journey of Shauryam Dubey, a software developer with expertise in various modern technologies.',
  ogImage: '/images/profile.png',
  ogSiteName: 'Shauryam Dubey',
  twitterCard: 'summary_large_image',
});

const title = "About Me";
const skillSectionTitle = "My Skills";
const resumeLink = "https://drive.google.com/file/d/1fv39Xpu_opciibwmx8Po9mOim2Ah_B_v/view?usp=sharing";
const aboutMe = [
  "Hi, I'm Shauryam Dubey, a passionate software developer with a diverse skill set spanning multiple programming languages and technologies. With hands-on experience in TypeScript, JavaScript, Python, Java, Go, I thrive in dynamic environments where innovation and problem-solving are key.",
  "My professional journey includes a recent R&D internship at BMC Software, where I developed a voice-activated chatbot and automated testing processes, enhancing user interaction and efficiency. As a Frontend Developer at Bili Consultancy, I optimized website performance and collaborated closely with teams to deliver high-quality user experiences.",
  "Feel free to connect with me on &nbsp;<a href='https://github.com/lordvader501' target='_blank'>GitHub</a>&nbsp; or &nbsp;<a href='https://linkedin.com/in/shauryamdubey' target='_blank'>LinkedIn</a>."
];
// const { data: skills } = await useFetch('/api/skills');
// const skillsList = [...skills.value]

</script>

<template>
  <article class="about active" data-page="about">

    <PageTitle :title="title" />

    <section class="about-text mb-10">
      <p v-for="(item, index) in aboutMe" :key="index" v-html="item" class="[&>a]:text-blue-300 flex flex-wrap" />
      <NuxtLink :to="resumeLink" target="_blank">
        <Button label="Resume" class="btn-gold gap-1" icon="pi pi-download" icon-class="!font-bold" />
      </NuxtLink>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        {{ skillSectionTitle }}
      </h3>

      <ul class="flex flex-col gap-5">
        <li class="skills-list content-card" v-for="item in skillsList" :key="item.id">
          <div class="skills-item">
            <h4 class="h4 mb-4 font-medium">{{ item.title }}</h4>
            <div class="flex flex-wrap">
              <div class="flex items-center mx-2 my-2 flex-row title-wrapper"
                v-for="(skill, index) in item.skills"
                :key="index">
                <span class="text-xs sm:text-sm font-semibold rounded-full sm:px-8 px-5 justify-center h-7 sm:h-8"
                  style="color: var(--vegas-gold);border: 1.5px solid;min-width: 70px;text-align: center; display: flex; align-items: center; line-height: 0px;">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
<style>
.btn-gold.p-button {
  background-color: var(--orange-yellow-crayola1);
  padding: 5px 20px;
  border-radius: 4px;
  font-weight: 500;
  display: flex;
  gap: 10px;
  color: rgba(0, 0, 0, 0.869) !important;
}

.btn-gold.p-button:hover {
  background-color: var(--orange-yellow-crayola1) !important;
  opacity: 0.8;
}
</style>
