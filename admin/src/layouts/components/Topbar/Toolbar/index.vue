<script setup lang="ts">
  import LeftSide from './leftSide.vue';
  import RightSide from './rightSide.vue';
  import useSettingsStore from '@/store/modules/settings';

  defineOptions({
    name: 'Toolbar',
  });

  const settingsStore = useSettingsStore();
</script>

<template>
  <div class="toolbar-container flex items-center justify-between">
    <div
      class="h-full flex items-center of-hidden pl-2 pr-16"
      style="mask-image: linear-gradient(90deg, #000 0%, #000 calc(100% - 50px), transparent)"
    >
      <LeftSide />
    </div>
    <div
      v-show="['side', 'single'].includes(settingsStore.settings.menu.menuMode)"
      class="h-full flex items-center px-2"
    >
      <RightSide />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .toolbar-container {
    height: var(--g-toolbar-height);
    background-color: var(--g-container-bg);
    transition: background-color 0.3s;
  }
</style>
