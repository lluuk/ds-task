<template>
  <el-header class="header" height="auto">
    <div class="header__content">
      <img alt="Vue logo" src="@/assets/logo.png" class="logo" />
      <div>
        <router-link
          v-for="link in links"
          :to="link.path"
          :key="link.path"
          class="link"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElHeader } from "element-plus";

interface Link {
  name: string;
  path: string;
}

export default defineComponent({
  name: "TheHeader",
  components: {
    ElHeader,
  },

  setup() {
    const links: Link[] = [
      {
        name: "User Form",
        path: "/",
      },
      {
        name: "User Profile",
        path: "/profile",
      },
    ];

    return {
      links,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  padding: 10px 20px;
  background: $color-light-gray;

  &__content {
    max-width: $container-max-width;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
}

.logo {
  height: 100%;
  max-height: 50px;
  width: auto;
}

.link {
  font-weight: 500;
  color: $color-primary;
  text-decoration: none;

  &:hover,
  &.router-link-active {
    color: $color-blue;
    text-decoration: underline;
  }

  &:not(:last-of-type) {
    margin-right: 15px;
  }
}
</style>
