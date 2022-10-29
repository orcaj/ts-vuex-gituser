<template>
    <div class="">
        <div class="avatar text-center" v-if="!userLoading && !repoLoading">
            <router-link to="/" class="back-arrow">
                <img src="../assets/back-arrow.png" alt="Back">
            </router-link>
            <div>
                <img :src="user.avatar_url" alt="Avatar" width="300" height="300" v-if="user.avatar_url">
                <img src="../assets/default-avatar.png" alt="Avatar" width="300" height="300" v-else>
                <p class="username">{{ user.login }}</p>
            </div>
            <div class="repos">
                <div class="repo" v-for="(repo) in userRepo" :key="repo.id">
                    <a :href="repo.html_url" class="repo-link" target="_blank">{{ repo.name }}</a>
                    <div class="d-flex align-center text-left values">
                        <p class="d-flex align-center watch">
                            <img src="../assets/view.svg" alt="">
                            <span>{{ repo.watchers_count }}</span>
                        </p>
                        <p class="d-flex align-center star">
                            <img src="../assets/star.svg" alt="">
                            <span>{{ repo.watchers_count }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import GitUserService from '@/services/userService';
import AppUser from '@/types/AppUser';
import GitRepo from '@/types/GitRepo';


export default defineComponent({
    name: 'user-detail',
    data() {
        return {
            user: {} as AppUser,
            userRepo: {} as GitRepo[],
            userLoading: false as boolean,
            repoLoading: false as boolean
        }
    },
    mounted() {
        this.$store.commit('setPage', 'detail')
        const route = useRoute()
        const userLogin = route.params.username
        this.init(userLogin + '');
    },
    methods: {
        init(userLogin: string) {
            this.getUser(userLogin);
            this.getUserRepo(userLogin);
        },
        getUser(userLogin: string) {
            this.userLoading = true;
            GitUserService.getDetail(userLogin)
                .then((res) => {
                    this.user = res.data;
                    this.userLoading = false;
                })
        },
        getUserRepo(userLogin: string) {
            this.repoLoading = true;
            GitUserService.getUserRepo(userLogin)
                .then((res) => {
                    this.userRepo = res.data.map((repo: any) => {
                        const { id, html_url, name, watchers_count } = repo;
                        return {
                            id, html_url, name, watchers_count
                        }
                    });
                    this.repoLoading = false;
                })
        }
    }
})
</script>

<style scoped lang="css">
.back-arrow {
    position: absolute;
    top: 0;
    left: 0;
}

.avatar {
    position: relative;
}

.username {
    margin-top: 34px;
    font-size: 40px;
    font-weight: 800;
    text-transform: capitalize;
}

.repos {
    margin-top: 34px;
    padding: 0 150px;
}

.repo {
    display: flex;
    justify-content: space-between;
}

.repo img {
    margin-right: 10px;
}

.repo-link {
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    color: black
}

.repo-link:hover {
    text-decoration: underline;
    color: #54A3FF
}

.watch {
    width: 80px;
}

.star {
    width: 80px;
}
.values {
    width: 20%;
}
</style>