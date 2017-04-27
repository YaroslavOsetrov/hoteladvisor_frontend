import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

import { routes } from './profile.routes';

import { GeneralModule } from './general/general.module';
import { HotelsModule } from './hotels/hotels.module';
import { RatedModule } from './rated/rated.module';

@NgModule({
  imports: [
    CommonModule,

    RouterModule,
    HotelsModule,
    GeneralModule,
    RatedModule,

    routes
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
