import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';

import BaseButton from './components/userinterface/BaseButton.vue'
import BaseCard from './components/userinterface/BaseCard.vue'

const app = createApp(App);

app.component("base-button",BaseButton);
app.component("base-card",BaseCard);

app.use(store);
app.use(router);

app.mount('#app');