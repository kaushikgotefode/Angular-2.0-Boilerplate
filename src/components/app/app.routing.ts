import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './../container/container.component';

const appRoutes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: ContainerComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
