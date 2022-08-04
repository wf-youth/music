<template>
  <div class="music-tabs flex items-center text-center">
    <div
      class="tabs-item w-28"
      v-for="(item, index) in tabs"
      :key="item.key"
      @click="change(item.key, index)"
    >
      <router-link :to="item.path" active-class="active">
        {{ item.value }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs, Key } from "./type";
interface Props {
  tabs: Tabs[];
  modelValue: number | string;
}

interface Emits {
  (e: "update:modelValue", index: number): void;
  (e: "change", index: number, key: Key): void;
}

const { tabs } = defineProps<Props>();
const emits = defineEmits<Emits>();

function change(key: Key, index: number) {
  emits("update:modelValue", index);
  emits("change", index, key);
}
</script>

<style lang="less" scoped>
.tabs-item {
  color: rgba(255, 255, 255, 0.5);
}

.active {
  color: rgba(255, 255, 255);
  font-size: 16px;
}
</style>
