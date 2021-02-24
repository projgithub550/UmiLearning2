import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'Ant Design',
    locale: true,
  },
  locale:{
    default: 'zh-CN',
    antd: false,
    title:false,
    baseNavigator:true,
    baseSeparator:'-',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user', component: '@/pages/user' }
  ],
  fastRefresh: {},
});
