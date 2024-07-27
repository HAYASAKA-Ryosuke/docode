<template>
  <div class="mx-5 mt-5 border-b">
    <ul
      class="flex border-b-2"
    >
      <li 
        v-for="tab in tabs"
        :key="tab.id"
        :class="[{'bg-secondary-100': currentTab == tab.id, 'opacity-60': currentTab != tab.id}, 'flex-1 py-1 text-center cursor-pointer']"
        class="flex-1 bg-secondary-100 text-white rounded-xd py-1 text-center cursor-pointer"
        @click="selectTab(tab.id)"
      >
        {{ tab.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">

  const currentTab = defineModel('currentTab', {
    type: Number,
    default: 1
  })

  const tabs = [
    {id: 1, title: 'Edit'},
    {id: 2, title: 'Preview'}
  ]
  const selectTab = (tabId: number) => {
    currentTab.value = tabId
  }
</script>
