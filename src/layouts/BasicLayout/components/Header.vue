<template>
  <a-layout-header class="header">
    <div class="breadPos">
      <menu-unfold-outlined
          v-if="props.collapsed"
          class="trigger adjustSpace"
          @click="() => ( emits('collapsed', props.collapsed))"
    />
    <menu-fold-outlined v-else class="trigger adjustSpace" @click="() => ( emits('collapsed', props.collapsed))" />
    <!-- breadcrumb -->
    <Breadcrumb v-if="routeMeta.breadcrumb" @handleClick="handleBreadcrumb" />
    </div>
    <RightContent />
  </a-layout-header>
</template>
<script setup lang="ts">
  import RightContent from './RightContent.vue';
  import { Route } from 'ant-design-vue/es/breadcrumb/Breadcrumb';
  import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
  // props
  const props = defineProps({
    collapsed: {
      type: Boolean,
      default: () => {
        return false;
      },
    }
  });

  const emits = defineEmits(['collapsed']);
  const router = useRouter();
  const routeMeta = computed(() => router.currentRoute.value.meta);

  const breadcrumb = computed(
    () =>
      router.currentRoute.value.matched
        .filter((n) => !['/', '/app'].includes(n.path))
        .map((item) => {
          return {
            path: item.path,
            breadcrumbName: item.meta.title || '',
          };
        }) as Route[],
  );
  const handleBreadcrumb = () => {
    const path = breadcrumb.value?.[breadcrumb.value.length - 2]?.path;
    path && router.push(path);
  };
</script>
<style lang="less" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    height: 60px;
    padding: 0;
    background: #ffffff;
    box-shadow: 0 1px 4px #00152914;
    z-index: 1;
  }
  .adjustSpace {
    padding-left: 15px;
    padding-top: 5px;
    margin-right: 15px;
  }
  .breadPos {
    display: flex;
    flex-flow: row;
  }
</style>
