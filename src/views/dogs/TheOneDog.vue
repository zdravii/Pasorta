<template>
    <div class="oneDog d-flex mt-5">
        <div class="img"><img :src="dog.slika" :alt="dog.ime"></div>
        <div class="info my-auto">
            <h3>{{dog.ime}}</h3>
            <base-button @click="goToDetails(dog.id)">Pogledaj više</base-button>
        </div>
    </div>
</template>
<script>
import BaseButton from '@/components/userinterface/BaseButton.vue';

export default {
    components : {BaseButton},
    props : {
        dog : {
            type : Object,
            required : true
        }
    },
    methods: {
    goToDetails(dogId) {
        this.$router.push({ name: 'OneDogDetails', params: { id: dogId } });
        }
    }
}
</script>
<style>
.oneDog{
    width: 45%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.img{
    width: 70%;
}
img{
    width:100%;
}
.info{
    width:30%;
}
</style>