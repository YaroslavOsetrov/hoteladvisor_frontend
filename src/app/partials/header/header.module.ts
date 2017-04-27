import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { RouterModule } from '@angular/router';


@NgModule({
	imports: [
		CommonModule,

		RouterModule,
		Ng2BootstrapModule.forRoot()
	],
	declarations: [HeaderComponent],

	exports:[HeaderComponent]
})
export class HeaderModule { }
