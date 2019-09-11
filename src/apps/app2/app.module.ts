import { NgModule } from '@angular/core';
import { sharedModules } from 'src/libs/app-modules';
import { allPages } from './pages/all-pages';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [...sharedModules.declarations, ...allPages],
  entryComponents: [...sharedModules.entryComponents],
  imports: [...sharedModules.imports, AppRoutingModule],
  providers: [...sharedModules.providers],
  bootstrap: [...sharedModules.bootstrap]
})
export class AppModule {}
