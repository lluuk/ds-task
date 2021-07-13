<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-position="top">
    <el-form-item label="Avatar" required prop="avatar">
      <img-uploader
        data-testid="img-uploader"
        :image="form.avatar"
        @update-img="handleAvatarChange"
      />
    </el-form-item>
    <el-form-item label="First name" required prop="firstName">
      <el-input
        data-testid="firstName-input"
        v-model="form.firstName"
        placeholder="John"
      />
    </el-form-item>
    <el-form-item label="Last name" required prop="lastName">
      <el-input
        data-testid="lastName-input"
        v-model="form.lastName"
        placeholder="Doe"
      />
    </el-form-item>
    <el-form-item label="Email" required prop="email">
      <el-input
        data-testid="email-input"
        v-model="form.email"
        placeholder="john.doe@example.com"
      />
    </el-form-item>
    <el-form-item label="Phone number" required prop="phone">
      <el-input
        data-testid="phone-input"
        v-model="form.phone"
        placeholder="123456789"
      />
    </el-form-item>
    <el-form-item
      label="Birthday"
      required
      prop="birthday"
      data-testid="birthday-input"
    >
      <el-date-picker
        v-model="form.birthday"
        type="date"
        placeholder="YYYY-MM-DD"
        :disabled-date="disabledDate"
      />
    </el-form-item>
    <el-form-item label="About">
      <el-input
        data-testid="about-input"
        v-model="form.about"
        type="textarea"
        placeholder="Tell us about yourself"
        maxlength="200"
        show-word-limit
      />
    </el-form-item>
    <el-form-item>
      <el-button data-testid="submit-btn" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from "vue";
import { useRouter } from "vue-router";

import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElDatePicker,
  ElNotification,
} from "element-plus";

import ImgUploader from "@/components/ImgUploader.vue";

import { emailValidator, phoneValidator } from "@/utils/utils";
import { sessionFormKey } from "@/utils/consts";
import { Form } from "@/types";

export default defineComponent({
  name: "UserForm",
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElDatePicker,
    ImgUploader,
  },

  setup() {
    const formRef = ref();
    const router = useRouter();
    const form = reactive<Form>({
      avatar: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthday: "",
      about: "",
    });

    const rules = {
      avatar: [
        {
          required: true,
          message: "Please upload avatar photo",
          trigger: "change",
        },
      ],
      firstName: [
        {
          required: true,
          message: "Please input your first name",
          trigger: "blur",
        },
      ],
      lastName: [
        {
          required: true,
          message: "Please input your last name",
          trigger: "blur",
        },
      ],
      email: [
        {
          validator: emailValidator,
          trigger: "blur",
        },
      ],
      phone: [
        {
          validator: phoneValidator,
          trigger: "blur",
        },
      ],
      birthday: [
        {
          type: "date",
          required: true,
          message: "Please pick a date",
          trigger: "blur",
        },
      ],
    };

    const disabledDate = (time: { getTime: () => number }): boolean =>
      time.getTime() > Date.now();

    const handleAvatarChange = (img: string): void => {
      form.avatar = img;
    };

    const onSubmit = () => {
      formRef.value.validate((valid: boolean) => {
        if (!valid) {
          ElNotification({
            title: "Error",
            message: "The form couldn't be saved",
          });
          return false;
        }

        window.sessionStorage.setItem(
          sessionFormKey,
          JSON.stringify(toRaw(form))
        );
        ElNotification({
          type: "success",
          title: "Success",
          message: "The form has been saved",
        });
        router.push({ name: "Profile" });
      });
    };

    return {
      form,
      formRef,
      rules,
      disabledDate,
      onSubmit,
      handleAvatarChange,
    };
  },
});
</script>
