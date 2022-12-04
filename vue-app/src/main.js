import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    //渲染組件
    render() {
      // 將屬性指定傳到App.vue
      return h(App, {
        a: this.a // 獲取父應用傳來的值
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        */
      });
    },
  },
  handleInstance(app) {
    app.use(router);
  },
});

// 導出生命週期
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
