<template>
  <a-layout class="basicLayout-wrap">
    <SideMenu v-bind="layoutConf" />
    <a-layout class="basicLayout-content" :style="{
              width: `calc(100% - ${
                layoutConf.collapsed ? '54px' : '220px'
              })`,
              overflow: 'hidden'
            }">
        <Header :collapsed="layoutConf.collapsed" @collapsed="(layoutConf.collapsed = !layoutConf.collapsed)" />
        <!-- content -->
        <a-layout-content class="padding24">
          <!-- router-view -->
          <template v-if="routeMeta.hiddenWrap">
            <!-- <router-view /> -->
            <router-view v-slot="{ Component, route }">
              <transition name="fade-slide" mode="out-in" appear>
                <!-- https://www.jianshu.com/p/399667ec9ef8 -->
                <div :key="(route.name as string)">
                  <component :is="Component" />
                </div>
              </transition>
            </router-view>
          </template>
          <a-card v-else>
            <!-- <router-view /> -->
            <router-view v-slot="{ Component, route }">
              <transition name="fade-slide" mode="out-in" appear>
                <div :key="(route.name as string)">
                  <component :is="Component" />
                </div>
              </transition>
            </router-view>
          </a-card>
        </a-layout-content>
      </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
  import Header from './components/Header.vue';
  import SideMenu from './components/SideMenu';
  import { clearMenuItem, filterRoutes } from './utils';

  const router = useRouter();

  const menuData = filterRoutes(
    clearMenuItem(router.getRoutes()).filter((n) => n.path.startsWith('/admin/')),
  );

  const layoutConf = reactive({
    theme: 'dark',
    menuWidth: 208,
    menuData,
    collapsed: false,
  });

  const routeMeta = computed(() => router.currentRoute.value.meta);
</script>
<style lang="less" scoped>
  .basicLayout-wrap {
    height: 100vh;
    overflow: hidden;
    .basicLayout-content {
      overflow-y: auto;
      margin: 0;
      padding: 0;
      background: '#F0F1F4';
    }
  }
</style>
