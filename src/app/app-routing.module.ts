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
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
