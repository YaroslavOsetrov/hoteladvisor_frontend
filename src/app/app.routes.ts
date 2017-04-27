import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';

import {LoginComponent} from './login/login.component';

import {RegisterComponent} from './register/register.component';

import {CreateComponent} from './create/create.component';


const routing: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    {path: 'create', component:CreateComponent}
    
];

export const routes = RouterModule.forRoot(routing);
