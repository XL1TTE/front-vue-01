import { createApp } from 'vue'
import App from './components/root/App.vue'

import {i18n} from './locales/i18n'

import './app.css'


createApp(App).use(i18n).mount('#root')

