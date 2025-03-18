// header.js

function createNavLink(text, href) {
    const link = document.createElement('a');
    link.textContent = text;
    link.href = href;
    link.style.margin = '0 10px';
    return link;
}

function createLogoutButton(onClick) {
    const button = document.createElement('button');
    button.textContent = 'Logout';
    button.style.margin = '0 10px';
    button.style.padding = '5px 10px';
    button.style.border = '2px solid #6687e2';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = 'transparent';
    button.style.color = '#6687e2';
    button.style.fontSize = '18px';
    button.style.cursor = 'pointer';
    button.style.outline = 'none';
    button.style.transition = 'background-color 0.15s ease-in-out, color 0.15s ease-in-out, border-color 0.15s ease-in-out';
    
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#6687e2';
        button.style.color = '#fff';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'transparent';
        button.style.color = '#6687e2';
    });

    button.addEventListener('click', onClick);
    return button;
}

export default function createHeader({ elementRef, isSignedIn, onSignOut }) {
    const onClick = () => {
        if (isSignedIn && onSignOut) {
          onSignOut();
        }
    };

    const header = document.createElement('header');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.height = '60px';

    const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    nav.style.alignItems = 'center';
    nav.style.width = '100%';
    nav.style.height = '100%';

    const homeLink = createNavLink('App', '/');
    const linkContainer = document.createElement('div');
    linkContainer.style.display = 'flex';
    linkContainer.style.justifyContent = 'flex-end';
    linkContainer.style.flexGrow = '1';

    const careerLink = createNavLink('Career', '/career');
    // const loginLink = createNavLink(
    //     isSignedIn ? 'Logout' : 'Login',
    //     !isSignedIn ? '/' : '/auth/signin'
    // );
    const authButton = isSignedIn ? createLogoutButton(onClick) : createNavLink('Login', '/auth/signin');   
    linkContainer.appendChild(careerLink);
    linkContainer.appendChild(authButton);

    nav.appendChild(homeLink);
    nav.appendChild(linkContainer);

    header.appendChild(nav);

    elementRef.appendChild(header);
}