<template>
  <div class="min-h-screen flex items-center justify-center bg-black relative">
    
    <div class="absolute top-0 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full"></div>

    <div class="relative z-10 w-full max-w-md">
      
      <h1 class="text-center text-white text-4xl font-bold mb-6">Login</h1>

      
      <div
        class="bg-gradient-to-b from-[#222222] to-[#050505] rounded-xl shadow-lg p-8 relative overflow-hidden"
      >
        
        <div class="mb-6">
          <p class="text-center text-white mb-3">Login with</p>
          <button
            class="w-full flex items-center justify-center gap-2 border border-gray-500 rounded-lg py-2 text-gray-300 hover:bg-gray-800"
          >
            <span class="i-mdi-google text-xl"></span>
            Google
          </button>
        </div>

        
        <div class="flex items-center mb-6">
          <div class="flex-1 h-px bg-gray-700"></div>
          <span class="px-2 text-gray-400 text-sm">OR</span>
          <div class="flex-1 h-px bg-gray-700"></div>
        </div>

        
        <form @submit.prevent="handleLogin" class="space-y-4">
          
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i class="i-mdi-account"></i>
            </span>
            <input
              v-model="form.username"
              type="text"
              placeholder="Username"
              class="w-full pl-10 pr-3 py-2 rounded-lg bg-[#111] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i class="i-mdi-lock"></i>
            </span>
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              class="w-full pl-10 pr-10 py-2 rounded-lg bg-[#111] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'i-mdi-eye-off' : 'i-mdi-eye'"></i>
            </span>
          </div>

          
          <button
            type="submit"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 font-semibold"
          >
            Login
          </button>
        </form>

        
        <p class="mt-6 text-center text-gray-400 text-sm">
          Don't have an account?
          <NuxtLink to="/auth/register" class="text-purple-400 hover:underline">
            Sign Up
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { login } = useAuth()
const form = ref({ username: '', password: '' })
const showPassword = ref(false)


const handleLogin = async () => {
  try {
    await login(form.value)
  } catch (err) {
    alert('Login failed. Check credentials.')
  }
}
</script>