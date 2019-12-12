import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { servicesProviders } from './services';
import { pipesDeclarations } from './pipes';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    pipesDeclarations
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // httpInterceptorProviders,
    servicesProviders
  ],
  exports: [
    pipesDeclarations,
  ]
})
export class CoreModule { }
