<template>
    <div class=".container-md">
        <div class="d-flex justify-content-end end-margin">
            <button type="button" class="btn-close" aria-label="Close" @click="navigateBack"></button>
        </div>
        <div class="container px-4" v-if="commit">
            <commit-detail name="SHA" :value="commit.sha" />
            <commit-detail name="Author" :value="commit.name" />
            <commit-detail name="Email" :value="commit.email" />
            <commit-detail name="Date" :value="commit.date" />
            <commit-detail name="Message" :value="commit.message" />
        </div>
    </div>
</template>

<script>
import CommitDetail from '@/components/CommitDetail.vue'
import { useRoute } from "vue-router";
import { store } from '@/store'

export default {
    name: 'CommitDetailsView',
    data: () => {
        return {
            commit: store.commits.find((item) => item.sha == useRoute().params.id),
        }
    },
    components: {
        CommitDetail,
    },
    methods: {
        navigateBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.end-margin {
    margin-right: 40px;
}
</style>
