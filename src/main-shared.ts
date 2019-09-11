/* tslint:disable:no-console */
import { enableProdMode, Type } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

export const initApp = (appModule: Type<unknown>) => {
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(appModule)
    .catch(err => console.log(err));

  /**
   * Disables the default context menu of the browser.
   */
  window.addEventListener('contextmenu', event => {
    event.preventDefault();
  });
};
