<template>
  <div class="login">
    <h2 class="text-2xl">login</h2>
    <AppButton label="I'm a primary button" />
  </div>
</template>
<script setup lang="ts">
  import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
  import AppButton from "@/components/common/AppButton/index.vue";
  const isActive = ref(false);
  const person = reactive({ name: "John Doe", age: 12 });

  onBeforeMount(() => {
    console.log("onBeforeMount hook");
  });

  onMounted(() => {
    console.log("onMounted hook");
  });

  watch(
    person,
    (newVal, oldVal) => {
      console.log(newVal);
    },
    { deep: true }
  );
</script>