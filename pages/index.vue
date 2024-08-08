<script setup>
import PageTitle from "~/components/base/heading/PageTitle";
useHead({
  title: ''
});
const title = "About Me";
const skillSectionTitle = "My Skills";
const resumeLink = "https://drive.google.com/file/d/1fv39Xpu_opciibwmx8Po9mOim2Ah_B_v/view?usp=sharing";
const aboutMe = [
  "Hi, I'm Shauryam Dubey, a passionate software developer with a diverse skill set spanning multiple programming languages and technologies. With hands-on experience in TypeScript, JavaScript, Python, Java, Go, I thrive in dynamic environments where innovation and problem-solving are key.",
  "My professional journey includes a recent R&D internship at BMC Software, where I developed a voice-activated chatbot and automated testing processes, enhancing user interaction and efficiency. As a Frontend Developer at Bili Consultancy, I optimized website performance and collaborated closely with teams to deliver high-quality user experiences.",
  "Feel free to connect with me on <a href='https://github.com/lordvader501' target='_blank' class='mx-1'>GitHub</a> or <a href='https://linkedin.com/in/shauryamdubey' target='_blank' class='ml-1'>LinkedIn</a>. Let's collaborate and create something amazing!"
];
const { data: skills } = await useFetch('/api/skills');
const skillsList = [...skills.value]

</script>

<template>
  <article class="about active" data-page="about">

    <PageTitle :title="title" />

    <section class="about-text">
      <p v-for="(item, index) in aboutMe" :key="index" v-html="item" class="flex [&>a]:text-blue-300" />
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
            <h3 class="h3 mb-4 font-medium">{{ item.title }}</h3>
            <div class="flex flex-wrap">
              <div class="flex items-center mx-2 my-2 flex-row title-wrapper"
                v-for="(skill, index) in item.skills"
                :key="index">
                <h5 class="h5 rounded-full"
                  style="color: #f19b12;border: 1px solid;min-width: 70px;text-align: center;height:32px;padding-inline: 30px;display: flex; align-items: center;line-height: 1px;">
                  {{ skill.name }}
                </h5>
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
  background-color: #f19b12;
  padding: 5px 20px;
  border-radius: 4px;
  font-weight: 500;
  display: flex;
  gap: 10px;
}

.btn-gold.p-button:hover {
  background-color: #f19c12be !important;
  ;
}
</style>
