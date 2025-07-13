<script setup>

useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Shauryam Dubey` : 'Shauryam Dubey';
  },
  link: [
    // {
    //   rel: 'icon', type: 'image/png', href: '/favicon-light.png',
    // },
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
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Shauryam Dubey - Developer Portfolio' },
    { name: 'twitter:description', content: 'Full-stack developer, open-source contributor, and lifelong learner.' },
    { name: 'twitter:image', content: 'https://shauryam.vercel.app/favicon-dark.png' }, // Replace with your actual URL
    { name: 'twitter:url', content: 'https://shauryam.vercel.app' },
    { name: 'twitter:site', content: '@ShauryamDubey' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Shauryam Dubey - Developer Portfolio' },
    { property: 'og:description', content: 'Full-stack developer, open-source contributor, and lifelong learner.' },
    { property: 'og:image', content: 'https://shauryam.vercel.app/favicon-dark.png' },
    { property: 'og:url', content: 'https://shauryam.vercel.app' },
    { property: 'og:site_name', content: 'Shauryam Dubey' },
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
