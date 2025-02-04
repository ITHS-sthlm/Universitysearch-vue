<script setup>
import {ref, computed} from 'vue'
import axios from 'axios'

const searchQuery = ref('');
const universities = ref([]);

const fetchUniversities = async () => {
    try {
        const response = await axios.get(`http://universities.hipolabs.com/search?name=${searchQuery.value}`)
        universities.value = response.data;
    } catch (error) {
        console.error('Fel, detta beror på:',error)
    }
}

const filteredUniversities = computed(() => {
    return universities.value.filter(u => u.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

</script>
<template>
  <div>
    <h1>sök efter universitet</h1>
    <input type="text" v-model="searchQuery" placeholder="Sök efter universitet">
    <button @click="fetchUniversities">Sök</button>

    <ul>
        <li v-for="university in filteredUniversities" :key="university.name">
            <RouterLink :to="`/university/${encodeURIComponent(university.name)}`">{{ university.name }}</RouterLink>
        </li>
    </ul>
  </div>
</template>
<style scoped>
li{
    color: black;
}
</style>
