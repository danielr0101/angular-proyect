import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { LibrosService } from './services/libros.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    LibrosService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
