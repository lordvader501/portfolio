<script setup>
let isOpen = ref(false);

const color = useColorMode();

let isdark = ref(false);

onMounted(() => {
  if (document.body.classList.contains("dark-theme")) {
    isdark.value = true;
    return;
  }
  isdark.value = false;
});

function changeProfile(dark) {
  if (dark) {
    isdark.value = true;
    return;
  }
  isdark.value = false;
};


function toggleMenu() {
  isOpen = !isOpen;
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box" style="overflow: hidden;">
        <NuxtImg v-if="isdark" src="/images/profile.png"
          alt="Shauryam Dubey"
          width="80" preload />
        <NuxtImg v-else src="/images/profile-white.png"
          alt="Shauryam Dubey"
          width="80" preload />

      </figure>

      <div class="info-content">
        <h1 class="name" title="Shauryam Dubey">
          Shauryam Dubey
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-['']">Software Developer</span>
        </p>
      </div>
      <DarkModeToggle :changeProfile="changeProfile" />

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <NuxtLink to="mailto:dubeyshauryam@gmail.com" class="contact-item" target="_blank">
            <div class="icon-box">
              <ion-icon name="mail-outline" />
            </div>

            <div class="contact-info">
              <p class="contact-title">
                Email
              </p>

              <p class="contact-link">dubeyshauryam@gmail.com</p>
            </div>
          </NuxtLink>
        </li>

        <li class="contact-item">
          <NuxtLink to="tel:+916203940031" class="flex justify-between w-full contact-link" target="_blank">
            <div class="icon-box">
              <ion-icon name="mail-outline" />
            </div>

            <div class="contact-info">
              <p class="contact-title">
                Phone
              </p>

              <p class="flex justify-between w-full contact-link">+91 620 394 0031</p>
            </div>
          </NuxtLink>
        </li>

        <li class="contact-item">
          <NuxtLink to="https://github.com/lordvader501" class="flex justify-between w-full contact-link"
            target="_blank">
            <div class="icon-box">
              <ion-icon name="logo-github" />
            </div>

            <div class="contact-info">
              <p class="contact-title">
                Github
              </p>

              <p class="contact-link">lordvader501</p>
            </div>
          </NuxtLink>
        </li>

        <li class="contact-item">
          <NuxtLink to="https://linkedin.com/in/shauryamdubey" class="flex justify-between w-full contact-link"
            target="_blank">
            <div class="icon-box">
              <ion-icon name="logo-linkedin" />
            </div>

            <div class="contact-info">
              <p class="contact-title">
                Linkedin
              </p>

              <p class="contact-link">Shauryam Dubey</p>
            </div>
          </NuxtLink>
        </li>

        <!-- <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>India</address>
          </div>
        </li> -->
      </ul>

      <!-- <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://www.twitter.com/shauryamdubey" class="social-link" target="_blank">
            <ion-icon name="logo-x" />
          </NuxtLink>
        </li>

      </ul> -->
    </div>
  </aside>
</template>
