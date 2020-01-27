import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  HomeComponent,
  PageNotFoundComponent,
  PostComponent
} from './pages';
import { UserResolver } from '@app/core/resolvers';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'post', component: PostComponent, resolve: {  user: UserResolver} },
  { path: 'contact', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
