<template>
  <el-container>
    <the-header />
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ElContainer, ElMain, ElFooter } from "element-plus";
import TheHeader from "@/components/layout/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    ElContainer,
    TheHeader,
    ElMain,
    ElFooter,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
