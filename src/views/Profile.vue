<template>
  <div class="user-profile">
    <h1>User Profile</h1>
    <section>
      <div v-if="form" class="form-container" data-testid="user-data">
        <user-data ref="data" :form="form" />
      </div>
      <template v-else>
        <el-empty description="No data" data-testid="data-empty-placeholder">
          <p>
            To see the data you should first fill out the
            <router-link to="/" class="link">form</router-link>
          </p>
        </el-empty>
      </template>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { ElEmpty } from "element-plus";
import UserData from "@/components/UserData.vue";

import { sessionFormKey } from "@/utils/consts";

export default defineComponent({
  name: "Profile",
  components: {
    ElEmpty,
    UserData,
  },

  setup() {
    const storageForm = sessionStorage.getItem(sessionFormKey);
    const form = ref(null);
    if (storageForm) {
      form.value = JSON.parse(storageForm);
    }
    return {
      form,
    };
  },
});
</script>

<style lang="scss" scoped>
.user-profile {
  max-width: $container-max-width;
  margin: 0 auto;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
