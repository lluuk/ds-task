<template>
  <div class="user-profile">
    <h1>User Form</h1>
    <pre v-if="form">{{ form }}</pre>
    <el-button>adssasa</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { ElButton } from "element-plus";

export default defineComponent({
  name: "Home",
  components: {
    ElButton,
  },

  setup() {
    const storageForm = sessionStorage.getItem("form");
    const form = ref(null)
    if (storageForm) {
      form.value = JSON.parse(storageForm);
    }
    return {
      form,
    };
  },
});
</script>
