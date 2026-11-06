<template>
    <button class="btn btn-outline-secondary"><slot></slot></button>
</template>
<script>
export default {
    name : "BaseButton"
}
</script>
<style scoped>
.btn{
    height: 15%;
}
</style>