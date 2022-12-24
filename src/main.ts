import { createApp } from 'vue'
import 'sanitize.css';
import '/@/styles/index.less';
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import { setupGlobDirectives } from './directives';
import './router/permission';

import i18n from './locale';

import iniAntDComponent from './utils/registerComponent';
iniAntDComponent();

const app = createApp(App)
app.use(i18n)
setupGlobDirectives(app)
app.use(router)
app.use(store)
app.mount('#app')
