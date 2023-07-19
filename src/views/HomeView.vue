<script setup>
    import { createRouter } from "vue-router";
</script>

<template>
    <div>
        <h1>Home</h1>
        <RouterLink to="about">About</RouterLink>
        <RouterLink to="admin">admin</RouterLink>
    </div>
</template>

<script>
</script>

<style scoped>
body{
    background-color: black;
}
</style>