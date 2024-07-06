<template>
  <div>
    <div class="tabs">
      <button @click="setActiveTab('article')" :class="activeTab === 'article' ? 'active' : ''">Article</button>
      <button @click="setActiveTab('code')" :class="activeTab === 'code' ? 'active' : ''">Code</button>
    </div>
    <div v-if="activeTab === 'article'">
      <Editor />
    </div>
    <div v-if="activeTab === 'code'">
      <!-- コード編集のコンポーネントを追加 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Editor from './Editor.vue'

const activeTab = ref('article')

const setActiveTab = (tab) => {
  activeTab.value = tab
}
</script>

<style scoped>
.tabs button {
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}
.tabs .active {
  background-color: #3490dc;
  color: white;
}
</style>
