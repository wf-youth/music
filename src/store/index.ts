import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';
import { useUserStore } from './modules/user';
import piniaPluginPersist from 'pinia-plugin-persist'

const pinia = createPinia();
pinia.use(piniaPluginPersist)
export { useAppStore, useUserStore };
export default pinia;
