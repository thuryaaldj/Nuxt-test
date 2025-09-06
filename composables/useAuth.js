
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useAuth() {
  const router = useRouter()
  const user = ref(null)
  const accessToken = ref(null)
  const refreshToken = ref(null)

  
  const loadTokenFromStorage = () => {
    if (process.client) {
      const token = localStorage.getItem('access_token')
      if (token) {
        accessToken.value = token
        return token
      }
    }
    return null
  }

  const login = async (credentials) => {
    try {
      const res = await $fetch('https://doctors.sy/dummy-data/login/', {
        method: 'POST',
        body: credentials,
      })

      accessToken.value = res.access_token
      refreshToken.value = res.refresh_token
      user.value = { role: res.role, ...credentials }

      // حفظ في localStorage
      if (process.client) {
        localStorage.setItem('access_token', res.access_token)
        localStorage.setItem('refresh_token', res.refresh_token)
        localStorage.setItem('role', res.role)
        localStorage.setItem('username', credentials.username)
      }

      if (res.role === 'admin') router.push('/admin')
      else router.push('/dashboard')
      
      return res
    } catch (err) {
      console.error('Login error:', err)
      throw err
    }
  }

  const logout = () => {
    accessToken.value = null
    refreshToken.value = null
    user.value = null
    if (process.client) {
      localStorage.clear()
    }
    router.push('/auth/login')
  }

  const getAccessToken = () => {
    
    return accessToken.value || loadTokenFromStorage()
  }

  
  loadTokenFromStorage()

  return {
    user,
    accessToken,
    refreshToken,
    login,
    logout,
    getAccessToken,
  }
}
