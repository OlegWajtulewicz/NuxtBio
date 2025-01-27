import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGridViewStore = defineStore('gridView', () => {
  const view = ref('rows')

  function loadSavedState() {
    if (process.client) {
      const savedView = localStorage.getItem('gridView')
      if (savedView) {
        view.value = savedView
      }
    }
  }

  function setView(newView) {
    view.value = newView
    if (process.client) {
      localStorage.setItem('gridView', newView)
    }
  }

  return {
    view,
    setView,
    loadSavedState
  }
})