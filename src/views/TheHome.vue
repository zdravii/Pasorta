<template>
        <div id="dogList" class="d-flex justify-content-around flex-wrap pb-5">
            <TheOneDog v-for="dog in getDogs" :key="dog.id" :dog="dog"></TheOneDog>
        </div>
</template>
<script>

import TheOneDog from "./dogs/TheOneDog.vue";
export default {
    components : { TheOneDog},
    computed:{
        getDogs(){
            return this.$store.getters["dogs/getDogs"];
        }
    },
    async created(){
       await this.$store.dispatch("dogs/loadDogs")
    } 
}
</script>
<style>

</style>