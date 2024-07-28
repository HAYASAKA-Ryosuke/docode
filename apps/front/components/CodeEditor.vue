<template>
  <MonacoEditor v-model="value" lang="python" :options="{ theme: 'vs-dark' }" />
</template>

<script lang="ts" setup>
const value = ref('')


</script>
