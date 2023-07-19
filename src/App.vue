<script setup>
    import { createRouter } from "vue-router";
</script>

<template>
    <div>

        <h1>Home</h1>
        <RouterLink to="AboutView">About</RouterLink>
        <RouterLink to="admin">admin</RouterLink>
        
    </div>
</template>

<script>
export default {
    setup () {



        return {}
    }
}
</script>

<style scoped>
body{
    background-color: black;
}
</style>