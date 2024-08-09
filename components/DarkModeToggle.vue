<script setup>
const color = useColorMode();
onBeforeMount(() => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme) {
    document.body.classList.add("dark-theme");
    return;
  }
  document.body.classList.remove("dark-theme");
});
onMounted(() => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const icon = document.getElementById("icon");
  if (prefersDarkScheme) {
    icon.setAttribute("name", "moon-outline");
    return;
  }
  icon.setAttribute("name", "sunny-outline");
});
const props = defineProps({
  changeProfile: Function
});
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle("dark-theme");
  const icon = document.getElementById("icon");
  if (document.body.classList.contains("dark-theme")) {
    icon.setAttribute("name", "moon-outline");
    props.changeProfile(true);
  } else {
    icon.setAttribute("name", "sunny-outline");
    props.changeProfile(false);
  }
}
const themeColor = computed(() => {
  return color.value;
});

</script>

<template>
  <!-- <Button :icon="themeColor === 'dark' ? 'pi pi-sun' : 'pi pi-moon'" @click="toggleDark" /> -->
  <ion-icon :name="'sunny-outline'" id="icon" @click="toggleDark"></ion-icon>
</template>