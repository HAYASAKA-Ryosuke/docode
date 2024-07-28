<template>
    <MonacoEditor v-model="asciidocContent" class="editor" v-if="showEditor" :options="{ theme: 'vs-dark' }" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import Asciidoctor from 'asciidoctor'
import { useContent } from '../composables/useContent'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
const content = useContent()

const showEditor = ref(true)
const asciidocContent = ref<string>('= Hello, AsciiDoc!\n\n[source, js]\n----\nconst a = 1 + 1;\n console.log(a);\n----')

const applySyntaxHighlighting = (value) => {
  const container = document.createElement('div')
  container.innerHTML = value
  container.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
  const result = container.innerHTML
  container.remove()
  return result
}
watchEffect(() => {
  const asciidoctor = Asciidoctor()
  content.value = applySyntaxHighlighting(asciidoctor.convert(asciidocContent.value, { attributes: { 'source-highlighter': 'highlight.js', 'highlightjs-theme': 'github' } }))
  //content.value = applySyntaxHighlighting(asciidoctor.convert(asciidocContent.value))
})

</script>
