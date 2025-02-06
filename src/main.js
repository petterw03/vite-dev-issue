import { createApp } from 'vue'
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
import 'highcharts/modules/data';

import App from './App.vue'

const app = createApp(App)

app.use(VueHighcharts, { Highcharts })
app.mount('#app');

