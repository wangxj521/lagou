import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home';
import { DetailsComponent } from './details/details';
import { LoginComponent } from  './login/login';
import { MainComponent } from './main/main';

const appRoutes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'details',
    component: DetailsComponent
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'main',
    component: MainComponent
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
