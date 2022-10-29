<template>
  <div class="mb-160">
    <HeaderBar />
    <div class="container">
      <router-view />
    </div>
  </div>
  <FooterBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderBar,
    FooterBar
  }
})
</script>

<style lang="css">
@import '@/css/app.css'
</style>
