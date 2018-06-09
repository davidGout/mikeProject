import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './auth/auth.component';



const defaultRoute = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '.'
}];

/*const loginRoute = [{
  path: 'login',
  component: AuthComponent
}]; */


const appRoutes: Routes = [
  ...defaultRoute,
  // ...loginRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
