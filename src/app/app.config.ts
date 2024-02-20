import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter  } from '@angular/router';

import { routes } from './app.routes';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(NgxGraphModule, BrowserAnimationsModule) ]
};
