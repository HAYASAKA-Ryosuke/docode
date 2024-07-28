<template>
  <div>
    <div class="bg-secondary-200 h-full px-4 border rounded-md">
      <div class="prose dark:prose-dark text-lg" v-html="renderedContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import {useContent} from '../composables/useContent'

const content = useContent()

const renderedContent = ref(content.value)

watch(content, (newContent) => {
  renderedContent.value = newContent
})
</script>

<style scoped>
.prose {
  max-width: none;
}
</style>
