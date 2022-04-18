import { ref, onMounted } from 'vue'

export function useHeight(refNode: any) {
  const offsetHeight = ref(0)

  function change(height: number) {
    offsetHeight.value = height
  }

  onMounted(() => {
    change(refNode.value.$el.offsetHeight)
  })
  return {
    offsetHeight,
  }
}
