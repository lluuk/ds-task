<template>
  <div class="user-form">
    <h1>User Form</h1>
    <user-form class="user-form__form" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UserForm from "@/components/UserForm.vue";

export default defineComponent({
  name: "Form",
  components: {
    UserForm,
  },
});
</script>

<style lang="scss" scoped>
.user-form {
  max-width: $container-max-width;
  margin: 0 auto;

  &__form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }
}
</style>
