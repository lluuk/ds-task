<template>
  <el-descriptions :title="title" :column="columns" :border="true">
    <el-descriptions-item
      v-for="(value, name) in form"
      :key="name"
      :label="formKeys[name]"
    >
      <el-avatar
        class="avatar"
        v-if="name === 'avatar'"
        :size="avatarSize"
        :src="value"
        alt="User's avatar"
      >
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          alt="Avatar fallback"
        />
      </el-avatar>
      <template v-else>{{
        name === "birthday" ? adjustedDate : value
      }}</template>
    </el-descriptions-item>
  </el-descriptions>
  <pre>{{ adjustedForm }}</pre>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import { ElDescriptions, ElDescriptionsItem, ElAvatar } from "element-plus";

import { Form } from "@/types";

import { MAPPED_FORM_KEYS } from "@/utils/consts";

type colSize = number | string;

export default defineComponent({
  name: "UserData",
  props: {
    form: {
      type: Object as PropType<Form>,
      required: true,
    },
    title: {
      type: String,
      default: "User Info",
    },
    columns: {
      type: [String, Number] as PropType<colSize>,
      default: 1,
    },
    avatarSize: {
      type: Number,
      default: 100,
    },
  },
  components: {
    ElDescriptions,
    ElDescriptionsItem,
    ElAvatar,
  },

  setup(props) {
    const formKeys = MAPPED_FORM_KEYS;
    const adjustedDate = computed(() => props.form.birthday.split("T")[0]);
    return {
      formKeys,
      adjustedDate,
    };
  },
});
</script>

<style lang="scss">
.avatar img {
  width: 100%;
}
</style>
