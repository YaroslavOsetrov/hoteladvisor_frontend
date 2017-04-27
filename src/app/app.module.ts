import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { FooterModule } from './partials/footer/footer.module';
import { HeaderModule } from './partials/header/header.module';

import { HomeModule } from './home/home.module';

import { LoginModule } from './login/login.module';

import { RegisterModule } from './register/register.module';

import { ExploreModule } from './explore/explore.module';

import { ProfileModule } from './profile/profile.module';

import { routes } from './app.routes';
import { ExploreComponent } from './explore/explore.component';

import { CreateModule} from './create/create.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CreateModule,

    HeaderModule,
    FooterModule,


    HomeModule,
    LoginModule,
    RegisterModule,
    ProfileModule,
  
    ExploreModule,

    routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
