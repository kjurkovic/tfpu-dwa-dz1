<template>
    <div class="row gx-5">
        <div class="col-3">
            <div class="p-3 border bg-light">{{ name }}</div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light">{{ value }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommitDetail",
    props: ['name', 'value'],
};
</script>
