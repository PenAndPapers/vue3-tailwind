<template>
  <div class="register">
    <h3 class="text-xl text-red-700">Register</h3>
  </div>
</template>
<script setup lang="ts">
  import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
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