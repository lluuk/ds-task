<template>
  <el-container direction="vertical">
    <the-header />
    <el-main class="main">
      <router-view />
    </el-main>
    <the-footer />
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ElContainer, ElMain } from "element-plus";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    ElContainer,
    TheHeader,
    ElMain,
    TheFooter,
  },
});
</script>
