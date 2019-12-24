import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';

import { pagesDeclaration } from './pages';
import { resolversProviders } from '@app/core/resolvers';
import { CoreModule } from '@app/core';

@NgModule({
  declarations: [
    pagesDeclaration
  ],
  imports: [
    CommonModule,
    CoreModule,
    SiteRoutingModule
  ],
  providers: [
    resolversProviders
  ]
})
export class SiteModule { }
