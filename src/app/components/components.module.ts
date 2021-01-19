import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemePickerComponent } from './header/components/theme-picker/theme-picker.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../modules/mat-module/material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ThemePickerComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
