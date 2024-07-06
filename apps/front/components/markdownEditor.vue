<template>
  <div class="container mx-auto p-4">
    <div class="textarea-wrapper mb-4">
      <textarea v-model="markdown" class="w-full p-2 border rounded" placeholder="input markdown"></textarea>
    </div>
    <div v-html="htmlContent" class="preview"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

const markdown = ref('');
const htmlContent = ref('');
const md = new MarkdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code><small class="bg-black/30 absolute top-0 right-0 uppercase font-bold text-xs rounded-bl-md px-2 py-1"></small></pre>`;
      } catch (__) {}
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

const renderMarkdown = () => {
  htmlContent.value = md.render(markdown.value);
  addCopyButtons();
};

const addCopyButtons = () => {
  // Markdownレンダリング後のDOM操作を確実にするために次のtickまで待つ
  nextTick(() => {
    document.querySelectorAll('pre.hljs').forEach((block) => {
      const copyButton = document.createElement('button');
      copyButton.innerText = 'Copy';
      copyButton.className = 'copy-button';
      copyButton.onclick = () => {
        navigator.clipboard.writeText(block.innerText).then(() => {
          alert('Copied to clipboard');
        });
      };
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block relative bg-gray-100 p-4 border rounded';
      block.parentNode.replaceChild(wrapper, block);
      wrapper.appendChild(block);
      wrapper.appendChild(copyButton);
    });
  });
};

// コンポーネントがマウントされたときに初期レンダリングを行う
onMounted(() => {
  renderMarkdown();
});

// Markdownが変更されたときにプレビューを更新する
watch(markdown, renderMarkdown);
</script>

<style scoped>
.copy-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
}
.copy-button:hover {
  background-color: #0056b3;
}
</style>

