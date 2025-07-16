import { provideHttpClient, withFetch } from "@angular/common/http";
import {
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import routes from "./main.routes";

export default {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({
      eventCoalescing: true,
    }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
};
