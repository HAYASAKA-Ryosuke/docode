<template>
  <div class="flex flex-col h-full">
    <textarea v-model="content" class="w-full h-full p-4 border rounded-md resize-none"></textarea>
  </div>
</template>

<script setup>
const content = useContent()
</script>
