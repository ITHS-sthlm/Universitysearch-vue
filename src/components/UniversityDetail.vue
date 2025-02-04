<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router';
import axios from 'axios';

const route = useRoute();
const university = ref((null))


onMounted(async () => {
    try {
        const response = await axios.get(`http://universities.hipolabs.com/search?name=${route.params.name}`)
        university.value =response.data[0];
    } catch (error){
        console.error(error)
    }
})
</script>
<template>
  <div v-if="university">
    <h2>{{ university.name }}</h2>
    <p>Land: <strong>{{ university.country }}</strong></p>
    <RouterLink to="/">Tillbaka till listan</RouterLink>
</div>
<p v-else>Universitet hittades inte</p>
</template>
<style scoped>
</style>
