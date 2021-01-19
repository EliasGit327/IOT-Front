import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ButtonsPreviewPageComponent } from './buttons-preview-page/buttons-preview-page.component';
import { MaterialModule } from '../modules/mat-module/material/material.module';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    ButtonsPreviewPageComponent,
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
