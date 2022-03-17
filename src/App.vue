<template>
    <nav class="navbar navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" alt="" height="60" class="d-inline-block align-text-top" loading="lazy"/>
        </a>
        </div>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
