<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, inject } from 'vue';
import AuthAPI from '@/api/AuthAPI';


const toast = inject('toast')
const route = useRoute()
console.log(route)
const router = useRouter()
const {token } =route.params

onMounted(async() => {
  try {
    const { data } = await AuthAPI.verifyAccount(token)
    toast.open({
      message: data.msg,
      type: 'success'
    })

    console.log(data)
    setTimeout(() => {
      router.push({name: 'login'})
    }, 5000)
  } catch (error) {
    toast.open({
      message: error.response.data.msg,
      type: 'error'
    })
    console.log(error)
  }
})

</script>
<template>
  <div>
    <h1 class="text-6xl font-extrabold text-white text-center mt-10">Verificar cuenta</h1>
  </div>
</template>


