import { Injectable } from '@angular/core';
import {
Resolve,
ActivatedRouteSnapshot,
RouterStateSnapshot,
Router
} from '@angular/router';
import {
//   PagesService,
  SeoService, GithubService
} from '../services';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<any>  {

   slug: string;
   constructor(
    private router: Router,
    private seoService: SeoService,
    private githubServie: GithubService    
   ) { }

    resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) {
      return this.githubServie.getUser('alejandrotoga02');
    }

 }
