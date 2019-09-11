import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { sharedRoutes } from 'src/libs/shared-routing';

const routes: Routes = [{ path: 'dashboard', component: DashboardPage }, ...sharedRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
