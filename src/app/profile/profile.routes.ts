import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './profile.component';

import { GeneralComponent } from './general/general.component';

import { HotelsComponent } from './hotels/hotels.component';

import { RatedComponent } from './rated/rated.component';


const routing: Routes = [
    {path: 'profile', component: ProfileComponent, 

        children:[
            {
                path:'', redirectTo: 'general',
                pathMatch: 'full'
            },
            {
                path:'general', component: GeneralComponent
            },
            {
                path:'hotels', component: HotelsComponent
            },
            {
                path:'rated', component: RatedComponent
            }
        ]
    }
       
];

export const routes = RouterModule.forRoot(routing);
