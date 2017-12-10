import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS }     from '@angular/http';
import { AppComponent }       from './app.component';

import { AppModule } from './app.module';

// bootstrap(AppComponent, [HTTP_PROVIDERS]);
platformBrowserDynamic().bootstrapModule(AppModule);
