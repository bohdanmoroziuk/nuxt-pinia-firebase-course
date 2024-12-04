export type User = {

}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  return {
    user,
  }
})
