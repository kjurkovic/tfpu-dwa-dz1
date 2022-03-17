<template>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col" v-if="store.commits">
                <sha-commit-item v-for="commit in store.commits" :key="commit.sha" :commitHash="commit.sha" @click="showDetails(commit)" />
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
import { store } from '@/store'
import ShaCommitItem from '@/components/ShaCommitItem.vue'

export default {
    name: 'CommitListView',
    data: () => {
        return {
            store,
        }
    },
    components: {
        ShaCommitItem,
    },
    mounted() {
        this.getCommits()
    },
    methods: {
        getCommits() {
            fetch("https://api.github.com/repos/vuejs/vue/commits")
                .then((response) => response.json())
                .then((json) => {
                    json.slice(0, Math.min(json.length, 10))
                        .map((items) => {
                            this.store.commits = []
                            return items
                        })
                        .map((item) => {
                            this.store.commits.push({
                                sha: item.sha,
                                name: item.commit.author.name,
                                email: item.commit.author.email,
                                message: item.commit.message,
                                date: new Date(item.commit.author.date).toString(),
                            })
                        })
                })
        },
        showDetails(commit) {
            this.$router.push({ name: 'details', params: { id: commit.sha } })
        }
    }
}
</script>
