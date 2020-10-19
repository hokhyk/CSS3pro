import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { OverlayCardComponent } from './overlay-card/overlay-card.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { AppComponent } from './app.component';
import { FormerComponent } from './former/former.component';
import { GradientBackgroundComponent } from './gradient-background/gradient-background.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const routes: Routes = [
  {
    path: 'former',
    component: FormerComponent,
    data: { title: 'Former CSS3 Pro'}
  },
  {
    path: 'gradient',
    component: GradientBackgroundComponent,
    data: { title: 'Gradient background' }
  },
  {
    path: 'imagehover',
    component: ImageHoverComponent,
    data: { title: 'Hover over image to change content' }
  },
  {
    path: 'cityproflie',
    component: PersonProfileComponent,
    data: { title: 'Show a city\'s profile' }
  },
  {
    path: 'overlaycard',
    component: OverlayCardComponent,
    data: { title: 'Show a series of overlaid cards' }
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { title: 'Show a list of news with a photo each' }
  },
  {
    path: 'footer',
    component: FooterComponent,
    data: { title: 'Show page footer' }
  },
  {
    path: 'mainnav',
    component: MainNavComponent,
    data: { title: 'Show main navigation bar' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
