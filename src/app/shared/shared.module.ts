import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header';
import {
  FooterComponent  
} from './footer';
import {  
  BreadcrumbComponent,
  LoadingComponent,
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,   
    CoreModule,    
    LoadingComponent,
  ]
})
export class SharedModule { }
