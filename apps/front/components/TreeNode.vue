<template>
  <li class="flex flex-col">
    <div v-if="node.type === 'chapter'" class="flex items-center">
      <span class="mr-2 text-blue-500">📁</span>
      <span class="font-semibold">{{ node.name }}</span>
    </div>
    <div v-else class="flex items-center cursor-pointer" @click="navigateToFile">
      <span class="mr-2 text-green-500">📄</span>
      <span>{{ node.name }}</span>
    </div>
    <ul v-if="node.children" class="ml-4 space-y-2">
      <TreeNode v-for="child in node.children" :key="child.name" :node="child" />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToFile = () => {
  if (props.node.type === 'file') {
    router.push({ path: `/files/${props.node.name}` })
  }
}
</script>

