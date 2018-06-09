import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
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

const dashBoardRoute = [{
  path: 'dashBoard',
  component: DashBoardComponent
}];

const appRoutes: Routes = [
  ...defaultRoute,
  ...dashBoardRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
