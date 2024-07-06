<template>
  <div class="prose max-w-none p-4">
    <div v-html="renderedContent"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'

const content = useContent()
const md = new MarkdownIt()

const renderedContent = ref(md.render(content.value))

watch(content, (newContent) => {
  renderedContent.value = md.render(newContent)
})
</script>

<style scoped>
.prose {
  max-width: none;
}
</style>
