<template>
  <div class="layout-sider p-3">
    <div class="menus text-sm">
      <div class="menus-item" v-for="item in routes" :key="item.path">
        <div
          class="cate-name text-xs"
          v-if="item.meta && item.meta.title"
          :style="{ color: 'var(--color-text-4)' }"
        >
          {{ item.meta.title }}
        </div>
        <router-link
          v-for="child in item.children"
          :key="child.path"
          :to="child.path"
        >
          <component
            v-if="child.meta && child.meta.icon"
            :is="child.meta.icon"
            size="24"
            fill="#333"
          />
          <Star theme="outline" size="24" fill="#333" />
          <div v-if="child.meta && child.meta.title">
            {{ child.meta.title }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, resolveDynamicComponent } from "vue";
import { Github, Star } from "@icon-park/vue-next";
import { routes } from "@/router/modules/index";
import { useRenderIcon } from "@/components/IconPark/useIconHook";
</script>

<style lang="less" scoped></style>
