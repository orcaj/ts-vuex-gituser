<template>
    <nav class="navbar bg-dark">
        <router-link to="/" class="navbar-brand decoration-none">
            <div class="d-flex align-center">
                <img alt="GitHub" src="../assets/git-icon.png" width="40" height="40">
                <p class="logo-txt ms-4">Github Userboard</p>
            </div>
        </router-link>
        <div class="search-bar" v-if="$store.state.page === 'home'">
            <img alt="search" src="../assets/search-icon.png" width="16" height="16" class="search-icon">
            <input type="text" class="search-input" @keyup="(e) => setSearchKey(e)" />
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderBar',
    methods: {
        setSearchKey(evt: Event) {
            this.$store.commit('setKeyword', (evt.target as HTMLInputElement).value)
        }
    }
})

</script>
<style scoped lang="css">
.navbar {
    padding: 20px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-input {
    width: 200px;
    padding-left: 35px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 400;
    height: 32px;
}

.logo-txt {
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    color: white;
    text-decoration: none;
}

.search-bar {
    position: relative;
}

.search-icon {
    position: absolute;
    left: 15px;
    top: 12px;
}
</style>