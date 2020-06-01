import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglPhonesComponent } from './singl-phones/singl-phones.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglPhonesComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
