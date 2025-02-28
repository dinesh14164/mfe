import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';
const mount = (el) => {
    console.log('mounting dashboard');
    const app = createApp(Dashboard);
    app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_dashboard-dev-root');

    if (el) {
        mount(el);
    }
}

export { mount };