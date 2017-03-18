import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './views/app.module';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
