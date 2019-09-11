import { initApp } from 'src/main-shared';
import { AppModule } from './app.module';

console.log('%c%s', 'color: green; background: yellow; font-size: 24px; padding: 5px 10px', 'App 1');
initApp(AppModule);
