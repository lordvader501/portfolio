<script setup>

useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Shauryam Dubey` : 'Shauryam Dubey';
  },
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true
    },
    // {
    //   rel: 'stylesheet',
    //   href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
    //   crossorigin: '',
    //   async: true
    // },
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      as: 'style',
      onload: "this.onload=null;this.rel='stylesheet'"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      media: 'print',
      onload: "this.onload=null;this.media='all'"
    }
  ],
  noscript: [
    {
      innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap">',
      body: true
    }
  ],
  __dangerouslyDisableSanitizers: ['noscript'],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
      async: true,
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
      async: true,
    },
  ],
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: "google-site-verification",
      content: "Dj_B1OtbvdxPWtfCNT4riVB__piJyfjqtSzvuczmt2A"
    }
  ]
});
</script>

<template>
  <main class="relative">
    <AppSidebar />
    <div class="main-content">
      <AppNavbar />
      <slot />
    </div>
  </main>
</template>
