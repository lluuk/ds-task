<template>
  <el-form :model="form">
    <el-form-item label="First name">
      <el-input v-model="form.firstName" placeholder="John" />
    </el-form-item>
    <el-form-item label="Last name">
      <el-input v-model="form.lastName" placeholder="Doe" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email" placeholder="john.doe@example.com" />
    </el-form-item>
    <el-form-item label="Birthday">
      <el-date-picker
        v-model="form.birthday"
        type="date"
        placeholder="Pick a date"
        :disabled-date="disabledDate"
      />
    </el-form-item>
    <el-form-item label="About">
      <el-input
        v-model="form.about"
        type="textarea"
        placeholder="Write few words about yourself"
      />
    </el-form-item>
    <el-form-item label="Avatar">
      <el-upload
        class="avatar-uploader"
        action="#"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="form.avatar" :src="form.avatar" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button @click="onSubmit">Save</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElDatePicker,
  ElUpload,
} from "element-plus";

interface Form {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  about: string;
  avatar: string;
}

export default defineComponent({
  name: "InformationForm",
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDatePicker,
    ElUpload,
  },

  setup(props) {
    const form = reactive<Form>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthday: "",
      about: "",
      avatar: "",
    });

    const disabledDate = (time: { getTime: () => number }): boolean =>
      time.getTime() > Date.now();

    const onSubmit = () => console.log({ form });

    const handleAvatarSuccess = (file: File & { raw: string }) => {
      console.log({ file });
      const x = URL.createObjectURL(file.raw);
      console.log({ x });
    };

    const beforeAvatarUpload = (file: File) => {
      console.log({ file })
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('Avatar picture must be JPG format!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('Avatar picture size can not exceed 2MB!')
      // }
      return isJPG && isLt2M;
    };

    return {
      form,
      disabledDate,
      onSubmit,
      handleAvatarSuccess,
      beforeAvatarUpload,
    };
  },
});
</script>
