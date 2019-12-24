import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  HomeComponent
} from './pages';
import { UserResolver } from '@app/core/resolvers';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: {  user: UserResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
