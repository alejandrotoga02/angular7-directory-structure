import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable()
export class GithubService {

  constructor(
    private apiService: ApiService
  ) { }

  getUser( slug: string ): Observable<any> {
    return this.apiService.get(`users/${slug}`)
      .pipe(map((data: any) => data));
  }

}
