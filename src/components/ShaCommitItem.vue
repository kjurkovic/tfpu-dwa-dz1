<template>
    <div class="card">
        <div class="card-body">
            {{ commitHash }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ShaCommitItem",
    props: ['commitHash'],
};
</script>

<style scoped>
.card-body {
    cursor: pointer;
}
</style>