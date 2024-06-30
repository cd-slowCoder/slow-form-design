import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import './tailwind.css'

import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus, { locale: locale })

app.mount('#app')
