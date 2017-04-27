import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { CreateComponent } from './create.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }
