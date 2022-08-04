<template>
  <div class="layout-sider p-3">
    <login />

    <div class="menus text-sm">
      <div class="menus-item" v-for="item in routes" :key="item.path">
        <div
          class="cate-name text-xs mt-5"
          v-if="item.meta && item.meta.cateName"
          :style="{ color: 'var(--color-text-3)' }"
        >
          {{ item.meta.cateName }}
        </div>
        <router-link :to="item.path" active-class="active-class">
          <div class="flex items-center my-2">
            <icon-park
              :name="item.meta.icon"
              v-if="item.meta && item.meta.icon"
              class="mr-1"
            />
            <div v-if="item.meta && item.meta.title" class="cate-name text-sm">
              {{ item.meta.title }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/modules/index";
import IconPark from "@/components/IconPark/index.vue";
</script>

<style lang="less" scoped>
.active-class {
  color: @music-theme;
}
</style>
