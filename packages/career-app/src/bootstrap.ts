import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// export { AppComponent };

export const mountCareerApp = () => {
  bootstrapApplication(AppComponent)
    .catch((err) => console.error(err));
};

if (process.env['NODE_ENV'] === 'development') {
  const el = document.querySelector('#_career-dev-root');

  if (el) {
    mountCareerApp();
  }
}