<template>
  <div>
    <div class="bg-secondary-200 h-full px-4 border rounded-md">
      <div class="prose dark:prose-dark text-lg" v-html="renderedContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const content = useContent()
const md = MarkdownIt()

const renderedContent = ref(md.render(content.value))

watch(content, (newContent) => {
  renderedContent.value = md.render(newContent)
})
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  const language = token.info.trim()

  if (language === 'python') {
    return `
      <div class="relative">
        <button class="absolute top-0 text-xs right-0 m-3 bg-primary-200 text-white py-1 px-2 rounded" onclick="runPythonCode(this)">
          Run
        </button>
        <pre class="hljs"><code>${hljs.highlight(token.content, { language }).value}</code></pre>
      </div>
    `
  }

  return `<pre><code>${md.utils.escapeHtml(token.content)}</code></pre>`
}
</script>

<style scoped>
.prose {
  max-width: none;
}
</style>
