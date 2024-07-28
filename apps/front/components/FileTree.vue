<template>
  <div class="bg-primary-900 p-4 rounded shadow-md">
    <ul class="space-y-2 text-primary-50">
      <TreeNode v-for="node in tree" :key="node.name" :node="node" />
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const tree = ref([
    {type: 'chapter', name: 'Chapter1', children: [
      {type: 'file', name: 'File 1'},
      {type: 'file', name: 'File 2'},
    ]},
    {type: 'file', name: 'File 1'}
  ])
</script>
