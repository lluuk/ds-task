<template>
  <div class="about">
    <h1>User Form</h1>
    <information-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import InformationForm from "@/components/InformationForm.vue";

export default defineComponent({
  name: "UserForm",
  components: {
    InformationForm,
  },
});
</script>
