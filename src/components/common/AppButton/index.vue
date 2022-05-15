<template>
  <button type="submit" :class="classes" @click="handleClick">{{ label }}</button>
</template>
<script setup lang="ts">
  import { defineEmits, defineProps } from "vue";

  const props = defineProps({
    label: {
      type: String,
      default: "Click me"
    },
    classes: {
      type: String,
      default: "px-3 py-1 rounded-lg bg-blue-700 hover:bg-blue-600 text-white"
    }
  });

  const emit = defineEmits(["click"])

  const handleClick = () => {
    emit("click")
  };
</script>