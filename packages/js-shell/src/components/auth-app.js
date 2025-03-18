import { mount } from "auth/AuthApp";

export default function AuthApp({ element, onSignIn }) {
    const ref = document.createElement('div');
    ref.id = 'auth-app';
    element.appendChild(ref);

    const history = {
        location: { pathname: window.location.pathname },
        listen(callback) {
            window.addEventListener('popstate', callback);
        },
        push(pathname) {
            window.history.pushState({}, '', pathname);
            const popStateEvent = new PopStateEvent('popstate');
            dispatchEvent(popStateEvent);
        }
    };

    const { onParentNavigate } = mount(ref, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
        onSignIn,
    });

    history.listen(onParentNavigate);
}