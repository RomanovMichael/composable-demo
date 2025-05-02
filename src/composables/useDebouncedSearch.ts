import { ref, watch, onUnmounted } from 'vue'
import { type Ref } from 'vue'
import debounce from 'lodash-es/debounce'

export interface PostItem {
  userId: number
  id: number
  title: string
  body: string
}

export function useDebouncedSearch(searchQuery: Ref<string>, delay = 300) {
  const result: Ref<PostItem[] | null> = ref(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchData = async (newQuery: string) => {
    if (!newQuery) {
      result.value = null
      return
    }

    loading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?title_like=${encodeURIComponent(newQuery)}`,
      )
      const data: PostItem[] = await response.json()
      result.value = data
    } catch {
      error.value = 'Ошибка загрузки'
    } finally {
      loading.value = false
    }
  }

  const debouncedFetch = debounce(fetchData, delay)

  watch(searchQuery, (newQuery) => {
    console.log('watch triggered:', newQuery)
    debouncedFetch(newQuery)
  })

  onUnmounted(() => {
    debouncedFetch.cancel()
  })

  return {
    result,
    loading,
    error,
  }
}
