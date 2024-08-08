<script setup>

</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          About Me
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/experience" class="navbar-link">
          Experience
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/projects" class="navbar-link">
          Projects
        </NuxtLink>
      </li>

      <!-- <li class="navbar-item">
        <NuxtLink to="/blog" class="navbar-link">
          Blog
        </NuxtLink>
      </li> -->

      <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link">
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}

a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
