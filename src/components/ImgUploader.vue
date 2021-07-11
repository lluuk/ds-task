<template>
  <el-upload
    :accept="accept"
    class="avatar-uploader"
    action="#"
    :show-file-list="false"
    :auto-upload="false"
    :on-change="handleChange"
    :before-upload="beforeAvatarUpload"
  >
    <template v-if="image">
      <i
        class="el-icon-delete-solid avatar-uploader__icon-remove"
        @click="handleRemove"
      />
      <img :src="image" class="avatar-uploader__avatar" />
    </template>
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { ElUpload, ElNotification } from "element-plus";

interface ImgFile {
  name: string;
  percentage: number;
  raw: File;
  size: number;
  status: string;
  uid: number;
}

export default defineComponent({
  name: "ImgUploader",
  props: {
    image: {
      type: String,
      default: "",
    },
    accept: {
      type: String,
      default: "image/jpeg, image/png",
    },
    maxSizeInMb: {
      type: Number,
      default: 2,
    },
  },
  components: {
    ElUpload,
  },

  setup(props, { emit }) {
    const arrOfAcceptVals = computed(() => props.accept.split(", "));
    const handleChange = (file: ImgFile) => {
      beforeAvatarUpload(file);
      const imgBlob = URL.createObjectURL(file.raw);
      emit("update-img", imgBlob);
    };

    const beforeAvatarUpload = (file: ImgFile) => {
      const isJpgOrPng = arrOfAcceptVals.value.includes(file.raw.type);
      const isLt = file.size / 1024 / 1024 < props.maxSizeInMb;

      if (!isJpgOrPng || !isLt) {
        let errorMsg = "Avatar picture must be JPG format!";

        if (!isLt) {
          errorMsg = `Avatar picture size can not exceed ${props.maxSizeInMb}MB!`;
        }

        ElNotification({
          title: "Error",
          message: errorMsg,
        });
      }

      return isJpgOrPng && isLt;
    };

    const handleRemove = (e: MouseEvent) => {
      e.stopPropagation();
      emit("update-img", "");
    };

    return {
      handleChange,
      handleRemove,
      beforeAvatarUpload,
    };
  },
});
</script>

<style lang="scss">
.avatar-uploader {
  position: relative;
  width: 100px;
  height: 100px;
  & .el-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed $color-input-border;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    &:hover {
      border-color: $color-blue;
    }
  }

  &__avatar {
    height: 100%;
    width: auto;
  }

  &__icon-remove {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    padding: 2px;
    border-radius: 50%;
    background: $color-white;
  }
}
</style>
