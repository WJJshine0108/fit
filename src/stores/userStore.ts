import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UserInfo } from '@/types'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>(null)
  const isInfoComplete = computed(() => userInfo.value !== null)

  function setUserInfo(info: Omit<UserInfo, 'id' | 'createdAt'>) {
    userInfo.value = {
      ...info,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    saveToStorage()
  }

  function updateUserInfo(info: Partial<UserInfo>) {
    if (userInfo.value) {
      userInfo.value = { ...userInfo.value, ...info }
      saveToStorage()
    }
  }

  function clearUserInfo() {
    userInfo.value = null
    localStorage.removeItem('userInfo')
  }

  function saveToStorage() {
    if (userInfo.value) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
    }
  }

  function loadFromStorage() {
    const saved = localStorage.getItem('userInfo')
    if (saved) {
      userInfo.value = JSON.parse(saved)
    }
  }

  return {
    userInfo,
    isInfoComplete,
    setUserInfo,
    updateUserInfo,
    clearUserInfo,
    loadFromStorage
  }
})