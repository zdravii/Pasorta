<template>
    <div v-if="dog" class="dog-details mt-5">
      <div class="container-fluid">
        <div class="row justify-content-center pb-5 pt-5">
          <div class="col-lg-5 mt-5">
            <h1>{{dog.ime}}</h1>
            <p>{{dog.opis}}</p>
          </div>
          <div class="col-lg-5">
            <img :src="dog.slika" :alt="dog.ime"/>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row mt-5 pt-5">
            <div class="col-lg-12"><h1 class="mx-auto">Ključne činjenice</h1></div>
              <div class="col-lg-9 mx-auto mt-5">
                <div class="row my-2"><h5>Životni vek : {{dog.cinjenice.zivotniVek}}</h5></div>
                <div class="row my-2"><h5>Težina : {{dog.cinjenice.tezina}}</h5></div>
                <div class="row my-2"><h5>Visina : {{dog.cinjenice.visina}}</h5></div>
                <div class="row my-2"><h5>Boje : {{dog.cinjenice.boje}}</h5></div>
                <div class="row my-2"><h5>Veličina : {{dog.cinjenice.velicina}}</h5></div>
              </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row mt-5 pt-5">
            <div class="col-lg-12"><h1 class="mx-auto">Galerija</h1></div>
              <div class="slika"><img :src="dog.dodatneSlike.slika1" alt=""></div>
              <div class="slika"><img :src="dog.dodatneSlike.slika2" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Pas nije pronađen.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dog: null,
      };
    },
    computed: {
      dogId() {
        return this.$route.params.id;
      }
    },
    async created() {
      const dogs = this.$store.getters["dogs/getDogs"];
      
      this.dog = dogs.find(d => d.id === parseInt(this.dogId));
      
      if (!this.dog) {
        await this.$store.dispatch("dogs/loadDogs");
        this.dog = this.$store.getters["dogs/getDogs"].find(d => d.id === parseInt(this.dogId));
      }
    }
  };
  </script>
  
  <style scoped>
  .dog-details {
    text-align: center;
  }

.slika{
  width :  51%;
  margin: 30px auto;
}

img{
  width : 100%;
}

  .dog-image {
    width: 50%;
    height: auto;
  }
  </style>