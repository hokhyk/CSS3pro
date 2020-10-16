import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GradientBackgroundComponent } from './gradient-background/gradient-background.component';
import { FormerComponent } from './former/former.component';

@NgModule({
  declarations: [
    AppComponent,
    GradientBackgroundComponent,
    FormerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
