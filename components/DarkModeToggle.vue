<script setup>
const color = useColorMode();
const { updateFavicon, initializeFavicon } = useFavicon();

onBeforeMount(() => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
    return;
  }
  document.body.classList.remove("dark-theme");
});

onMounted(() => {
  // Initialize favicon based on current theme
  initializeFavicon();

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const icon = document.getElementById("icon");

  // Set initial icon based on current color mode or system preference
  if (prefersDarkScheme.matches) {
    icon.setAttribute("name", "moon-outline");
  } else {
    icon.setAttribute("name", "sunny-outline");
  }

  // Update favicon to match initial state
  updateFavicon(prefersDarkScheme.matches);
});
const props = defineProps({
  changeProfile: Function
});
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle("dark-theme");
  const icon = document.getElementById("icon");
  const isDark = document.body.classList.contains("dark-theme");

  if (isDark) {
    icon.setAttribute("name", "moon-outline");
    props.changeProfile(true);
  } else {
    icon.setAttribute("name", "sunny-outline");
    props.changeProfile(false);
  }

  // Update favicon when theme changes
  updateFavicon(isDark);
}
const themeColor = computed(() => {
  return color.value;
});

</script>

<template>
  <!-- <Button :icon="themeColor === 'dark' ? 'pi pi-sun' : 'pi pi-moon'" @click="toggleDark" /> -->
  <ion-icon :name="'sunny-outline'" id="icon" @click="toggleDark"></ion-icon>
</template>