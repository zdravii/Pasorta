<template>
    <header class="d-flex">
    <div id="logo" class="me-5">
        <router-link to="/"><img src="/assets/logo.png" alt="logo"></router-link>
    </div>
    <TheNav></TheNav>
</header>
</template>
<script>

import TheNav from "./TheNav.vue";

export default {
    components : { 
        TheNav : TheNav,
    }
}

</script>

<style>
#logo{
    width : 10%;
}
#logo img{
    width : 100%;
}
</style>