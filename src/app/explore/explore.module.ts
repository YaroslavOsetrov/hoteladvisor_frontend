import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './explore.routes';
import {ExploreComponent} from './explore.component';

import {ListModule} from './list/list.module';

import { ItemModule} from './item/item.module';

@NgModule({
  imports: [
    CommonModule,
    ListModule,
    ItemModule,

    routes
  ],
  declarations: [ExploreComponent]
})
export class ExploreModule { }
