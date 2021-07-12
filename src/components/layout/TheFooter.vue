<template>
  <el-footer class="footer" height="auto">
    <div class="footer__content">
      <p class="footer__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat
        enim et turpis scelerisque tempor. Maecenas arcu nibh, cursus eu lectus
        ac, vestibulum sagittis lorem. Pellentesque massa quam, facilisis et sem
        eget, vehicula iaculis neque. Nunc nec turpis tempus, aliquet diam eu,
        bibendum ipsum. Morbi porttitor molestie aliquam. In semper ligula a
        turpis fringilla placerat. Aliquam id erat tristique, suscipit nisl
        lobortis, suscipit diam. Donec molestie dictum turpis at mattis. Vivamus
        feugiat vulputate lorem, ut finibus nulla pulvinar fringilla.
      </p>
    </div>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElFooter } from "element-plus";

export default defineComponent({
  name: "TheFooter",
  components: {
    ElFooter,
  },
});
</script>

<style scoped lang="scss">
.footer {
  padding: 10px 20px;
  background: $color-gray;

  &__content {
    max-width: $container-max-width;
    margin: 0 auto;
  }

  &__text {
    color: $color-white;
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

  &:hover {
    color: $color-blue;
  }

  &:not(:last-of-type) {
    margin-right: 15px;
  }
}
</style>
