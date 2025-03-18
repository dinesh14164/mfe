import MarketingApp from './components/marketing-app';
import AuthApp from './components/auth-app';
import Header from './components/header';
import CareerApp from './components/career-app';
import DashboardApp from './components/dashboard-app';

const routes = {
    '/auth': AuthApp,
    '/career': CareerApp,
    '/dashboard': DashboardApp,
    '/': MarketingApp,
};

function getComponent(path) {
    const matchingRoute = Object.keys(routes).find(route => path.startsWith(route));
    return routes[matchingRoute];
}
// Function to render the marketing app
function init() {
    window.onpopstate = () => {
        renderApp();
    };
    // Render the marketing app
    renderApp();
}

function navigateTo(path) {
    window.history.pushState({}, '', path);
    renderApp();
}

let isSignedIn = false;
function setIsSignedIn(value) {
    isSignedIn = value;
    if (isSignedIn) {
        navigateTo('/dashboard');
    } else {
        navigateTo('/');
    }
}

function renderApp() {
    const appContainer = document.getElementById('app');
    const path = window.location.pathname;
    if (path === '/dashboard' && !isSignedIn) {
        navigateTo('/');
        return;
    }
    const component = getComponent(path);
    if (component) {
        appContainer.innerHTML = ''; // Clear any existing content
        Header({
            elementRef: appContainer,
            isSignedIn,
            onSignOut: () => {
                setIsSignedIn(false);
            }
        });
        component({
            element: appContainer,
            onSignIn: setIsSignedIn,
        });
    } else {
        console.error('Component not found for path:', path);
    }
    console.log('Marketing app rendered');
}

init();