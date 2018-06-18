import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(solid.faMapMarkerAlt);
fontawesome.library.add(solid.faHeart);
fontawesome.library.add(solid.faUtensils);
fontawesome.library.add(regular.faChartBar);
fontawesome.library.add(regular.faListAlt);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
