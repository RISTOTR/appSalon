import { ref, onMounted, computed, watch} from 'vue'
import { defineStore } from "pinia";
import { useRouter } from 'vue-router';
import AuthAPI from '@/api/AuthAPI';
import AppointmentAPI from '@/api/AppointmentAPI';

export const useUserStore = defineStore('user', () => {

  const router = useRouter()
  const user = ref({})
  const userAppointments = ref([])
  const loading = ref(true)
  const triggerWatch = ref(1)

 onMounted(async () => {
  try {
    const { data } = await AuthAPI.auth()
    user.value = data
    await getUserAppointments()
    console.log(user.value)
    triggerWatch.value += 1
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
 })

 watch(triggerWatch, async () => {
  console.log(user.value)
  console.log(triggerWatch)
}, {deep: true})


 async function getUserAppointments() {
  const { data } = await AppointmentAPI.getUserAppointments((user.value._id))
  userAppointments.value = data
 }

 function logout() {
  localStorage.removeItem('AUTH_TOKEN')
  user.value = {}
  router.push({name: 'login'})
 }

 const getUserName = computed(() => user.value?.name ? user.value?.name : '')

 const noAppointments = computed(() => userAppointments.value.length === 0 )

  return {
    user,
    loading,
    userAppointments,
    getUserAppointments,
    logout,
    getUserName,
    noAppointments
  }
})