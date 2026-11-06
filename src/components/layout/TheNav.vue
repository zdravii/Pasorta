<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <router-link to="/" class="navbar-brand">Početna</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Loguj se</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Registruj se</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/adminSection" v-if="isAdmin" class="nav-link">Admin sekcija</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-secondary ms-5" @click="loguot" v-if="isLoggedIn">Odjavi se</button>
          </li>
        </ul>
      </div>
    </nav> 
</template>
<script>

export default {
  computed : {
    isAdmin(){
      return this.$store.getters['customers/isAdmin'];
    },
    isLoggedIn(){
      return this.$store.getters['customers/isLoggedIn']
    }
  },
  methods : {
    loguot(){
      this.$store.dispatch('customers/logoutUser');
      this.$router.push('/login');
    }
  }
}
</script>
<style>
</style>