<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button>adssasa</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

import { ElButton } from "element-plus";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    ElButton,
  },
});
</script>
