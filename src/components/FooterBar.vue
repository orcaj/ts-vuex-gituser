<template>
    <footer class="bg-dark">
        <div class="">
            <a href="https://github.com" target="_blank">
                <img alt="GitHub" src="../assets/git-icon.png" width="40" height="40">
            </a>
            <p class="text-white footer-txt">&copy; All rights reserved, 2022</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterBar',

})

</script>
<style scoped lang="css">
footer {
    height: 120px;
    text-align: center;
    padding: 20px 0;
    width: 100%;
    position: fixed;
    bottom: 0
}

.footer-txt {
    font-weight: 400;
    font-size: 16px;
}
</style>