import { Routes, RouterModule } from '@angular/router';


import {ExploreComponent} from './explore.component';

import { ListComponent } from './list/list.component';

import { ItemComponent } from './item/item.component';


const routing: Routes = [
    {path: 'explore', component: ExploreComponent, 

        children:[
            {
                path:'', redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path:'list', component: ListComponent
            },
            {
                path:'item', component: ItemComponent
            }
        ]
    }
       
];

export const routes = RouterModule.forRoot(routing);
