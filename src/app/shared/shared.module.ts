import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header';
import {
  FooterComponent
} from './footer';
import { LoadingComponent } from './loading/loading.component';
import { componentsDeclaration } from './components';

@NgModule({
  declarations: [
    componentsDeclaration,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
    componentsDeclaration,
    HeaderComponent,
    FooterComponent,
    CoreModule,
    LoadingComponent,
  ]
})
export class SharedModule { }
