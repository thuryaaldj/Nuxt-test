// // ~/composables/useDashboardData.js
// import { ref } from 'vue'
// import { useAuth } from '~/composables/useAuth'

// export function useDashboardData() {
//   const { getAccessToken } = useAuth() 
//   const mauData = ref(null)
//   const generalData = ref(null)
//   const loading = ref(false)
//   const error = ref(null)

//   const fetchMAUData = async () => {
//     loading.value = true
//     error.value = null
//     try {
//       const token = getAccessToken()
//       const res = await $fetch('https://doctors.sy/dummy-data/mau-chart/', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       mauData.value = res
//     } catch (err) {
//       error.value = err
//     } finally {
//       loading.value = false
//     }
//   }

//   const fetchGeneralData = async () => {
//     loading.value = true
//     error.value = null
//     try {
//       const res = await $fetch('https://doctors.sy/dummy-data/chart/')
//       generalData.value = res
//     } catch (err) {
//       error.value = err
//     } finally {
//       loading.value = false
//     }
//   }

//   return { mauData, generalData, fetchMAUData, fetchGeneralData, loading, error }
// }
