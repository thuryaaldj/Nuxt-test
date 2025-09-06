// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  
  const token = useCookie("token")

  
  if (!token.value && to.path !== "/login") {
    return navigateTo("/login")
  }

  if (token.value && to.path === "/login") {
    return navigateTo("/dashboard")
  }
})
