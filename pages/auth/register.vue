<script setup>
import { ref } from "vue";
import axios from "axios";

// الحقول
const firstName = ref("");
const lastName = ref("");
const username = ref("");
const email = ref("");
const password = ref("");


const showPassword = ref(false);

const handleRegister = async () => {
  try {
    const res = await axios.post("https://doctors.sy/dummy-data/register/", {
      first_name: firstName.value,
      last_name: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value,
    });

    console.log("Register response:", res.data);
    alert("✅ Registered successfully!");
  } catch (err) {
  if (err.response) {
    console.error("API error:", err.response.data); 
    alert("Error: " + JSON.stringify(err.response.data));
  } else {
    console.error(err);
    alert("Network error - Check console");
  }
}
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
    <div class="absolute top-1 w-[500px] h-[150px] bg-gray-300 rounded-full blur-3xl opacity-20"></div>

    <div class="relative z-10 flex flex-col items-center w-full px-4">
      <h1 class="text-white text-4xl font-bold mb-6">Sign Up</h1>

      <div
        class="w-full max-w-md rounded-xl shadow-lg p-8 relative"
        style="background: linear-gradient(to bottom, #222222, #050505);"
      >
        <div class="text-center text-gray-400 mb-6">Register with</div>

        
        <button
          class="w-full flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-2 text-gray-300 hover:bg-gray-800 transition"
        >
          <span class="i-fa6-brands-google"></span>
          Google
        </button>

        
        <div class="flex items-center my-6">
          <div class="flex-1 h-px bg-gray-700"></div>
          <span class="px-4 text-gray-500">or</span>
          <div class="flex-1 h-px bg-gray-700"></div>
        </div>

        
        <div class="relative mb-4">
          <input
            v-model="firstName"
            type="text"
            placeholder="First Name"
            class="w-full pl-4 pr-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>

      
        <div class="relative mb-4">
          <input
            v-model="lastName"
            type="text"
            placeholder="Last Name"
            class="w-full pl-4 pr-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>

        
        <div class="relative mb-4">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="w-full pl-4 pr-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>

        
        <div class="relative mb-4">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full pl-4 pr-4 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>


        <div class="relative mb-1">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="w-full pl-4 pr-10 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <span
            class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
            @click="showPassword = !showPassword"
          >
            <i :class="showPassword ? 'i-fa6-regular-eye' : 'i-fa6-regular-eye-slash'"></i>
          </span>
        </div>
        <p class="text-xs text-gray-500 mb-4">Must be at least 8 characters</p>

      
        <button
          @click="handleRegister"
          class="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-lg mb-4"
        >
          Sign Up
        </button>

        
        <p class="text-xs text-gray-500 text-center mb-4">
          By signing up you agree to our Terms & Conditions
        </p>

        
        <p class="text-center text-sm text-gray-400">
          Already have an account?
          <NuxtLink to="/auth/login" class="text-purple-500 hover:underline">
            Login
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
