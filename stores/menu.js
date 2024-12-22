import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isOpen: false,
    isLocked: false
  }),
  
  actions: {
    openMenu() {
      this.isOpen = true
      this.isLocked = true
      document.documentElement.classList.add('menu-open', 'lock')
    },
    
    closeMenu() {
      this.isOpen = false
      this.isLocked = false
      document.documentElement.classList.remove('menu-open', 'lock')
    },
    
    toggleMenu() {
      if (this.isOpen) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    }
  },

  getters: {
    menuState: (state) => state.isOpen,
    lockState: (state) => state.isLocked
  }
}) 