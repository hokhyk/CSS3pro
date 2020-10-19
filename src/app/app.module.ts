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
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { NavTableComponent } from './nav-table/nav-table.component';

// import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    GradientBackgroundComponent,
    FormerComponent,
    ImageHoverComponent,
    PersonProfileComponent,
    OverlayCardComponent,
    NewsComponent,
    FooterComponent,
    MainNavComponent,
    BreadcumbComponent,
    NavTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
