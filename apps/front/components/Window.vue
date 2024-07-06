<template>
  <TopMenu v-model:currentTab="currentTab" />
  <div class="flex flex-grow p-2">
    <div v-if="currentTab === 1" class="flex h-full w-full">
      <div class="w-1/2 border-r">
        <Editor class="h-full w-full" />
      </div>
      <div class="w-1/2 border-r">
        <Preview class="h-full w-full px-2" />
      </div>
    </div>
    <div v-if="currentTab === 2" class="flex w-full h-full">
      <div class="w-1/2 h-full border-r">
        <CodeEditor class="h-full w-full" />
      </div>
      <div class="w-1/2 h-full">
        <Preview class="h-full w-full px-2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Editor from './Editor.vue'
const currentTab = ref(1)
</script>
