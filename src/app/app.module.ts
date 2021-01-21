import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/mat-module/material/material.module';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    PagesModule,
    PagesRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
