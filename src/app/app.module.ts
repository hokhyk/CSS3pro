import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GradientBackgroundComponent } from './gradient-background/gradient-background.component';
import { FormerComponent } from './former/former.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { OverlayCardComponent } from './overlay-card/overlay-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GradientBackgroundComponent,
    FormerComponent,
    ImageHoverComponent,
    PersonProfileComponent,
    OverlayCardComponent
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
