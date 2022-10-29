<template>
    <div class="text-center">
        <p class="top-users">Top Users</p>
    </div>
    <div v-if="!loading">
        <div class="user-list row" v-if="$store.state.searchUsers.length > 0">
            <div class="col-3 text-center mt-50" v-for="user in $store.state.searchUsers" :key="user.id">
                <div class="user-avatar">
                    <img :src="user.avatar_url" width="140" height="140" v-if="user.avatar_url" />
                    <img src="../assets/default-avatar.png" v-else />
                </div>
                <div class="mt-1">
                    <router-link :to="'/' + user.login" class="detail-link hover-line">
                        <p class="user-name m-0">{{ user.login }}</p>
                    </router-link>
                    <a :href="user.html_url" class="d-flex justify-center align-center hover-line mt-2" target="_blank">
                        <img src="../assets/link.png" width="15" height="15" alt="" srcset="">
                        <p class="git-link  m-0 ms-2">github</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="text-center mt-100" v-else>
            <p class="empty-txt">Users not found</p>
        </div>
    </div>

</template>
  
<script lang="ts">
import GitUserService from '@/services/userService';
import { defineComponent } from 'vue';
import AppUser from '@/types/AppUser'

export default defineComponent({
    name: 'user-list',
    data() {
        return {
            userList: [] as AppUser[],
            loading: false as boolean
        }
    },
    mounted() {
        this.$store.commit('setPage', 'home')
        this.getAllUsers();
    },
    methods: {
        getAllUsers() {
            this.loading = true
            GitUserService.getAll()
                .then((res) => {
                    const users: AppUser[] = res.data.map((item: any) => {
                        const { avatar_url, html_url, id, login, repos_url } = item;
                        return {
                            avatar_url,
                            html_url,
                            id,
                            login,
                            repos_url,
                        }
                    })
                    this.$store.commit('setUsers', users)
                    this.loading = false

                })
        }
    }
})
</script>

<style scoped lang="css">
.top-users {
    font-size: 48px;
    font-weight: 800;
    margin: 0
}



.user-name {
    font-size: 20px;
    font-weight: 800;
    margin-top: 12px !important;
    text-transform: capitalize;
}

.git-link {
    color: #54A3FF;
    font-size: 12px;
}


.empty-txt {
    font-size: 20px;
    font-weight: 700;
}

.detail-link {
    color: black;
}
</style>