import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ButtonsPreviewPageComponent } from './buttons-preview-page/buttons-preview-page.component';
import { MaterialModule } from '../modules/mat-module/material/material.module';
import { DevicesPageComponent } from './devices-page/devices-page.component';
import { LogsPageComponent } from './logs-page/logs-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    ButtonsPreviewPageComponent,
    DevicesPageComponent,
    LogsPageComponent,
    UsersPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent,
    NotFoundPageComponent,
    ButtonsPreviewPageComponent,
  ]
})

export class PagesModule { }
