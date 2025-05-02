<template>
  <div class="search-input">
    <input v-model="query" type="text" placeholder="Введите поисковый запрос" />

    <div v-if="loading">Загрузка...</div>

    <div v-else-if="result">
      <pre>{{ result }}</pre>
    </div>

    <div v-else>
      <p>Нет данных</p>
    </div>

    <div v-if="error" style="color: red">Ошибка: {{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDebouncedSearch } from '../composables/useDebouncedSearch'

const query = ref('')
const { result, loading, error } = useDebouncedSearch(query)
</script>

<style>
.search-input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 80rem;
}

.search-input pre {
  max-width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 100%;
  overflow-wrap: anywhere;
}
</style>
