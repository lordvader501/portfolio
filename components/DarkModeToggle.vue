<script setup>
const color = useColorMode();
onBeforeMount(() => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme) {
    document.body.classList.add("dark-theme");
    isdark.value = true;
    return;
  }
  document.body.classList.remove("dark-theme");
  isdark.value = false;
});
const props = defineProps({
  changeProfile: Function
});
const isdark = ref(false);
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    isdark.value = true;
    props.changeProfile(true);
  } else {
    isdark.value = false;
    props.changeProfile(false);
  }
}
const themeColor = computed(() => {
  return color.value;
});

</script>

<template>
  <!-- <Button :icon="themeColor === 'dark' ? 'pi pi-sun' : 'pi pi-moon'" @click="toggleDark" /> -->
  <ion-icon :name="isdark ? 'moon-outline' : 'sunny-outline'" id="icon" @click="toggleDark"></ion-icon>
</template>