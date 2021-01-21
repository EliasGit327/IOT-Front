import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ButtonsPreviewPageComponent } from './buttons-preview-page/buttons-preview-page.component';
import { DevicesPageComponent } from './devices-page/devices-page.component';
import { LogsPageComponent } from './logs-page/logs-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: 'buttons-preview', component: ButtonsPreviewPageComponent },
  { path: 'devices', component: DevicesPageComponent },
  { path: 'logs', component: LogsPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})

export class PagesRoutingModule { }
